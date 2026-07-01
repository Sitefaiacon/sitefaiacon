import { NextRequest, NextResponse } from 'next/server'
import type { CalculatorLead } from '@/lib/types/calculator-lead'
import type { QuoteBreakdown, RenovationBreakdown, WindowsBreakdown } from '@/lib/calculator/pricing'
import { fmtEur, fmtNum, QUALITY_LABELS_EL, MATERIAL_LABELS_EL, POOL_TYPE_LABELS_EL } from '@/lib/calculator/pricing'

// Email configuration from environment variables with fallbacks
const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL || 'faiacon@yahoo.com'
const LEADS_FROM_EMAIL = process.env.LEADS_FROM_EMAIL || 'onboarding@resend.dev'

// Dynamic import for Resend to avoid build-time initialization
let Resend: any = null
async function getResend() {
  if (!Resend) {
    try {
      const ResendModule = await import('resend')
      Resend = ResendModule.Resend
    } catch (error) {
      console.error('Failed to load Resend module:', error)
      throw new Error('Email service unavailable')
    }
  }
  return Resend
}

// ─── Validation ───────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Escape user-supplied text before interpolating into notification email HTML
function escapeHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Trim and hard-cap free-text fields to guard against oversized/abusive payloads
function clean(value: unknown, maxLength: number): string {
  return String(value ?? '').trim().slice(0, maxLength)
}

// ─── Basic in-memory rate limiting (per IP) ────────────────────────────────────
// Note: resets on cold start and is per-instance. For strict limits use Upstash Redis.
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT_MAX
}

function validateLeadData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  if (!data || typeof data !== 'object') return { valid: false, errors: ['Invalid request body'] }
  const lead = data as any
  if (!lead.contact?.name?.trim()) errors.push('Το όνομα είναι υποχρεωτικό')
  if (!lead.contact?.email?.trim()) errors.push('Το email είναι υποχρεωτικό')
  else if (!isValidEmail(lead.contact.email)) errors.push('Μη έγκυρη μορφή email')
  if (!lead.selections) errors.push('Missing calculator selections')
  return { valid: errors.length === 0, errors }
}

// ─── HTML helpers ─────────────────────────────────────────────────────────────

const S = {
  // Layout
  wrap: 'max-width:680px;margin:0 auto;font-family:\'Segoe UI\',Arial,sans-serif;background:#fff;border:1px solid #dde3ec;',
  header: 'background:#1e3a5f;padding:28px 32px;',
  headerH1: 'color:#fff;margin:0 0 4px 0;font-size:22px;font-weight:700;letter-spacing:-0.3px;',
  headerSub: 'color:rgba(255,255,255,0.7);margin:0;font-size:13px;',
  sectionWrap: 'padding:28px 32px;border-bottom:1px solid #eaecf0;',
  sectionTitle: 'color:#1e3a5f;font-size:15px;font-weight:700;margin:0 0 16px 0;padding-bottom:8px;border-bottom:2px solid #1e3a5f;text-transform:uppercase;letter-spacing:0.5px;',
  // Table rows
  rowLabel: 'color:#6b7280;font-size:13px;padding:5px 10px 5px 0;vertical-align:top;width:200px;white-space:nowrap;',
  rowValue: 'color:#111827;font-size:13px;padding:5px 0;font-weight:600;vertical-align:top;',
  // Calc lines
  calcLabel: 'color:#374151;font-size:13px;padding:5px 10px 5px 0;vertical-align:top;',
  calcFormula: 'color:#6b7280;font-size:12px;padding:5px 10px 5px 0;font-family:monospace;vertical-align:top;',
  calcResult: 'color:#1e3a5f;font-size:13px;font-weight:700;text-align:right;padding:5px 0;vertical-align:top;white-space:nowrap;',
  // Subtotal rows
  subtotalRow: 'background:#f3f6fb;',
  subtotalLabel: 'color:#374151;font-size:13px;font-weight:700;padding:7px 10px 7px 0;',
  subtotalValue: 'color:#1e3a5f;font-size:14px;font-weight:700;text-align:right;padding:7px 0;white-space:nowrap;',
  // Multiplier rows
  multRow: 'background:#fffbeb;',
  multLabel: 'color:#92400e;font-size:13px;padding:5px 10px 5px 0;',
  multValue: 'color:#92400e;font-size:13px;font-weight:700;text-align:right;padding:5px 0;white-space:nowrap;',
  // Notes
  note: 'color:#6b7280;font-size:12px;padding:4px 0;line-height:1.5;',
  // Final total
  totalWrap: 'background:#1e3a5f;padding:24px 32px;',
  totalLabel: 'color:rgba(255,255,255,0.85);font-size:13px;margin:0 0 4px 0;',
  totalValue: 'color:#ffffff;font-size:28px;font-weight:800;margin:0;',
  totalRange: 'color:rgba(255,255,255,0.7);font-size:13px;margin:6px 0 0 0;',
  // Tag
  tagGreen: 'display:inline-block;background:#d1fae5;color:#065f46;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:8px;vertical-align:middle;',
  tagBlue: 'display:inline-block;background:#dbeafe;color:#1e40af;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:8px;vertical-align:middle;',
}

function row(label: string, value: string): string {
  return `<tr><td style="${S.rowLabel}">${label}</td><td style="${S.rowValue}">${value}</td></tr>`
}

function calcRow(label: string, formula: string, result: number): string {
  return `
    <tr>
      <td style="${S.calcLabel}">${label}</td>
      <td style="${S.calcFormula}">${formula}</td>
      <td style="${S.calcResult}">${fmtEur(result)}</td>
    </tr>`
}

function subtotalRow(label: string, value: number, style?: string): string {
  return `
    <tr style="${style ?? S.subtotalRow}">
      <td colspan="2" style="${S.subtotalLabel}">${label}</td>
      <td style="${S.subtotalValue}">${fmtEur(value)}</td>
    </tr>`
}

function multRow(label: string, formula: string, result: number): string {
  return `
    <tr style="${S.multRow}">
      <td style="${S.multLabel}">${label}</td>
      <td style="${S.multLabel};font-family:monospace;">${formula}</td>
      <td style="${S.multValue}">${fmtEur(result)}</td>
    </tr>`
}

function sectionTitle(title: string, badge?: string): string {
  return `<h2 style="${S.sectionTitle}">${title}${badge ? `<span style="${S.tagBlue}">${badge}</span>` : ''}</h2>`
}

// ─── Renovation breakdown section ────────────────────────────────────────────

function renderRenovationSection(r: RenovationBreakdown, input: any): string {
  const qualityLabel = QUALITY_LABELS_EL[input.renovationQuality as keyof typeof QUALITY_LABELS_EL] || input.renovationQuality
  const poolTypeLabel = POOL_TYPE_LABELS_EL[input.poolType as keyof typeof POOL_TYPE_LABELS_EL] || input.poolType
  const buildingAge = new Date().getFullYear() - input.buildingAge

  let html = `<div style="${S.sectionWrap}">`
  html += sectionTitle('Τμήμα 2 — Επιλογές Ανακαίνισης')

  // Selections table
  html += `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">`
  html += row('Εμβαδόν', `${fmtNum(input.area)} τ.μ.`)
  html += row('Μπάνια', String(input.bathrooms))
  html += row('Κουζίνες', String(input.kitchens))
  html += row('Δωμάτια', String(input.rooms))
  html += row('Έτος κατασκευής', `${input.buildingAge} (ηλικία ${buildingAge} ετών)`)
  html += row('Επίπεδο ποιότητας', qualityLabel)
  html += row('Κατηγορίες εργασιών', r.selectedCategories.length > 0 ? r.selectedCategories.join(', ') : '—')
  html += row('Τύπος πισίνας', poolTypeLabel)
  if (input.poolType !== 'none') html += row('Εμβαδόν πισίνας', `${input.poolSize} τ.μ.`)
  if (r.isFullRenovation) {
    html += row('Τρόπος υπολογισμού', '<span style="color:#065f46;font-weight:700;">Πλήρης ανακαίνιση (€/τ.μ.) — ενεργοποιήθηκε λόγω ≥4 κατηγοριών</span>')
  }
  html += `</table>`

  // Calculation lines
  html += sectionTitle('Τμήμα 3 — Ανάλυση Εργασιών &amp; Πράξεις Υπολογισμού')
  html += `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">`
  html += `<thead><tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
    <th style="text-align:left;padding:6px 10px 6px 0;font-size:12px;color:#6b7280;font-weight:600;">Εργασία</th>
    <th style="text-align:left;padding:6px 10px 6px 0;font-size:12px;color:#6b7280;font-weight:600;">Τύπος</th>
    <th style="text-align:right;padding:6px 0;font-size:12px;color:#6b7280;font-weight:600;">Ποσό</th>
  </tr></thead><tbody>`

  for (const line of r.lines) {
    html += calcRow(line.label, line.formula, line.result)
  }

  html += subtotalRow('Υποσύνολο εργασιών (πριν τους συντελεστές)', r.subtotalBeforeMultipliers)

  // Multipliers
  if (r.ageMultiplierValue !== 1.0 || r.sizeMultiplierValue !== 1.0) {
    html += `<tr><td colspan="3" style="padding:10px 0 4px 0;font-size:12px;color:#6b7280;font-weight:700;">Εφαρμογή Συντελεστών:</td></tr>`
  }
  if (r.ageMultiplierValue !== 1.0) {
    const result = r.subtotalBeforeMultipliers * r.ageMultiplierValue
    html += multRow(
      `Συντελεστής ηλικίας κτιρίου: ×${r.ageMultiplierValue} (${r.ageMultiplierLabel})`,
      `${fmtEur(r.subtotalBeforeMultipliers)} × ${r.ageMultiplierValue}`,
      result
    )
  }
  if (r.sizeMultiplierValue !== 1.0) {
    const baseForSize = r.subtotalBeforeMultipliers * r.ageMultiplierValue
    const result = baseForSize * r.sizeMultiplierValue
    html += multRow(
      `Συντελεστής εμβαδού: ×${r.sizeMultiplierValue} (${r.sizeMultiplierLabel})`,
      `${fmtEur(baseForSize)} × ${r.sizeMultiplierValue}`,
      result
    )
  }

  if (r.ageMultiplierValue !== 1.0 || r.sizeMultiplierValue !== 1.0) {
    html += subtotalRow('Υποσύνολο ανακαίνισης (μετά τους συντελεστές)', r.subtotalAfterMultipliers, 'background:#e0e7ff;')
  }

  // Pool lines
  if (r.poolLines.length > 0) {
    html += `<tr><td colspan="3" style="padding:12px 0 4px 0;font-size:12px;color:#6b7280;font-weight:700;">Πισίνα (ξεχωριστή εργασία — δεν επηρεάζεται από συντελεστές ανακαίνισης):</td></tr>`
    for (const pl of r.poolLines) {
      html += calcRow(pl.label, pl.formula, pl.result)
    }
    html += subtotalRow('Υποσύνολο πισίνας', r.poolSubtotal, 'background:#ecfdf5;')
  }

  // Grand total for this section
  html += `<tr style="border-top:2px solid #1e3a5f;">
    <td colspan="2" style="color:#1e3a5f;font-size:15px;font-weight:800;padding:12px 10px 12px 0;">Σύνολο Ανακαίνισης + Πισίνας</td>
    <td style="color:#1e3a5f;font-size:18px;font-weight:800;text-align:right;padding:12px 0;">${fmtEur(r.total)}</td>
  </tr>`
  html += `<tr><td colspan="3" style="color:#6b7280;font-size:12px;padding:4px 0 8px 0;">Εύρος: ${fmtEur(r.range.min)} – ${fmtEur(r.range.max)} (±10–12%)</td></tr>`

  html += `</tbody></table>`

  // Notes
  if (r.notes.length > 0) {
    html += `<div style="margin-top:12px;padding:12px;background:#f9fafb;border-radius:6px;border-left:3px solid #1e3a5f;">`
    html += `<p style="color:#374151;font-size:12px;font-weight:700;margin:0 0 6px 0;">Λογική Υπολογισμού:</p>`
    for (const note of r.notes) {
      html += `<p style="${S.note}">• ${note}</p>`
    }
    html += `</div>`
  }

  html += `</div>`
  return html
}

// ─── Windows breakdown section ────────────────────────────────────────────────

function renderWindowsSection(w: WindowsBreakdown, input: any): string {
  const materialLabel = MATERIAL_LABELS_EL[input.material as keyof typeof MATERIAL_LABELS_EL] || input.material
  const qualityLabel = QUALITY_LABELS_EL[input.quality as keyof typeof QUALITY_LABELS_EL] || input.quality

  let html = `<div style="${S.sectionWrap}">`
  html += sectionTitle('Κουφώματα')

  html += `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">`
  html += row('Υλικό', materialLabel)
  html += row('Ποιότητα', qualityLabel)
  if (input.windows > 0) html += row('Παράθυρα', String(input.windows))
  if (input.balconyDoors > 0) html += row('Μπαλκονόπορτες', String(input.balconyDoors))
  if (input.interiorDoors > 0) html += row('Εσωτερικές πόρτες', String(input.interiorDoors))
  if (input.mainEntrance > 0) html += row('Κεντρική είσοδος', String(input.mainEntrance))
  html += `</table>`

  html += `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">`
  html += `<thead><tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
    <th style="text-align:left;padding:6px 10px 6px 0;font-size:12px;color:#6b7280;font-weight:600;">Εργασία</th>
    <th style="text-align:left;padding:6px 10px 6px 0;font-size:12px;color:#6b7280;font-weight:600;">Τύπος</th>
    <th style="text-align:right;padding:6px 0;font-size:12px;color:#6b7280;font-weight:600;">Ποσό</th>
  </tr></thead><tbody>`

  for (const line of w.lines) {
    html += calcRow(line.label, line.formula, line.result)
  }

  html += `<tr style="border-top:2px solid #1e3a5f;">
    <td colspan="2" style="color:#1e3a5f;font-size:15px;font-weight:800;padding:12px 10px 12px 0;">Σύνολο Κουφωμάτων</td>
    <td style="color:#1e3a5f;font-size:18px;font-weight:800;text-align:right;padding:12px 0;">${fmtEur(w.total)}</td>
  </tr>`
  html += `<tr><td colspan="3" style="color:#6b7280;font-size:12px;padding:4px 0 8px 0;">Εύρος: ${fmtEur(w.range.min)} – ${fmtEur(w.range.max)} (±8–12%)</td></tr>`

  html += `</tbody></table>`

  if (w.notes.length > 0) {
    html += `<div style="margin-top:12px;padding:10px;background:#f9fafb;border-radius:6px;border-left:3px solid #1e3a5f;">`
    for (const note of w.notes) {
      html += `<p style="${S.note}">• ${note}</p>`
    }
    html += `</div>`
  }

  html += `</div>`
  return html
}

// ─── Main admin email generator ───────────────────────────────────────────────

function generateEmailHTML(lead: CalculatorLead, breakdown?: QuoteBreakdown): string {
  const { contact, selections, submittedAt } = lead

  const submissionDate = new Date(submittedAt).toLocaleString('el-GR', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const referenceId = `CALC-${new Date(submittedAt).getTime().toString(36).toUpperCase()}`

  // ── Section 1: Header ──
  let html = `<!DOCTYPE html><html lang="el"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Νέα Αίτηση Προσφοράς — Faiacon</title></head>
<body style="margin:0;padding:20px 0;background:#f0f2f5;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table width="680" cellpadding="0" cellspacing="0" style="${S.wrap}">

  <!-- HEADER -->
  <tr><td style="${S.header}">
    <p style="${S.headerH1}">Νέα Αίτηση Προσφοράς — Faiacon</p>
    <p style="${S.headerSub}">Αυτόματο email αναφοράς • Μόνο για εσωτερική χρήση</p>
  </td></tr>

  <!-- REFERENCE BAR -->
  <tr><td style="padding:14px 32px;background:#f3f6fb;border-bottom:1px solid #dde3ec;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="font-size:12px;color:#6b7280;">Αναφορά: <strong style="color:#1e3a5f;">${referenceId}</strong></td>
      <td style="font-size:12px;color:#6b7280;text-align:right;">Υποβολή: <strong style="color:#1e3a5f;">${submissionDate}</strong></td>
    </tr></table>
  </td></tr>`

  // ── Section 1: Στοιχεία Πελάτη ──
  html += `<tr><td style="${S.sectionWrap}">
    ${sectionTitle('Τμήμα 1 — Στοιχεία Πελάτη')}
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row('Όνομα', `<a href="mailto:${encodeURIComponent(contact.email)}" style="color:#1e3a5f;text-decoration:none;">${escapeHtml(contact.name)}</a>`)}
      ${row('Email', `<a href="mailto:${encodeURIComponent(contact.email)}" style="color:#1e3a5f;">${escapeHtml(contact.email)}</a>`)}
      ${contact.phone ? row('Τηλέφωνο', `<a href="tel:${encodeURIComponent(contact.phone)}" style="color:#1e3a5f;">${escapeHtml(contact.phone)}</a>`) : ''}
      ${row('Ημερομηνία', submissionDate)}
      ${row('Αναγνωριστικό', referenceId)}
    </table>
  </td></tr>`

  // ── Sections 2–4: Ανακαίνιση breakdown ──
  if (breakdown?.renovation) {
    html += `<tr><td>${renderRenovationSection(breakdown.renovation, selections.renovation)}</td></tr>`
  } else if (selections.renovation.renovationCost > 0) {
    // Fallback: no breakdown object (old submission)
    html += `<tr><td style="${S.sectionWrap}">
      ${sectionTitle('Τμήμα 2 — Ανακαίνιση')}
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Εμβαδόν', `${selections.renovation.area} τ.μ.`)}
        ${row('Κόστος Ανακαίνισης', fmtEur(selections.renovation.renovationCost))}
      </table>
    </td></tr>`
  }

  // ── Windows section ──
  if (breakdown?.windows) {
    html += `<tr><td>${renderWindowsSection(breakdown.windows, selections.windows)}</td></tr>`
  } else if (selections.windows.windowsCost > 0) {
    html += `<tr><td style="${S.sectionWrap}">
      ${sectionTitle('Κουφώματα')}
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Κόστος Κουφωμάτων', fmtEur(selections.windows.windowsCost))}
      </table>
    </td></tr>`
  }

  // ── Section 5: Τεχνικές Παρατηρήσεις ──
  const allNotes = [
    ...(breakdown?.renovation?.notes ?? []),
    ...(breakdown?.windows?.notes ?? []),
  ]
  if (allNotes.length > 0) {
    html += `<tr><td style="${S.sectionWrap}">
      ${sectionTitle('Τμήμα 4 — Τεχνικές Παρατηρήσεις')}
      ${allNotes.map(n => `<p style="${S.note}">• ${n}</p>`).join('')}
    </td></tr>`
  }

  // ── Section 6: Τελικό Αποτέλεσμα ──
  const grandTotal = breakdown?.grandTotal ?? selections.totalCost
  const grandRange = breakdown?.grandRange

  html += `<tr><td style="${S.totalWrap}">
    <p style="${S.totalLabel}">Τμήμα 5 — Τελικό Εκτιμώμενο Κόστος</p>
    <p style="${S.totalValue}">${fmtEur(grandTotal)}</p>`
  if (grandRange) {
    html += `<p style="${S.totalRange}">Εύρος εκτίμησης: ${fmtEur(grandRange.min)} – ${fmtEur(grandRange.max)}</p>`
  }
  html += `<p style="color:rgba(255,255,255,0.55);font-size:11px;margin:10px 0 0 0;">
    Το παραπάνω ποσό αποτελεί αυτόματη εκτίμηση βάσει των επιλογών του χρήστη και μπορεί να διαφοροποιηθεί μετά από τεχνική αξιολόγηση επί τόπου.
  </p>
  </td></tr>`

  // ── Footer ──
  html += `<tr><td style="padding:16px 32px;background:#f9fafb;border-top:1px solid #eaecf0;">
    <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">
      Αυτό το email δημιουργήθηκε αυτόματα από τον Υπολογιστή Κόστους Ανακαίνισης — Faiacon.gr •
      ΜΗΝ αποστείλετε αυτό το email στον πελάτη — περιέχει εσωτερική λογική υπολογισμού.
    </p>
  </td></tr>`

  html += `</table></td></tr></table></body></html>`
  return html
}

// ─── Plain text fallback ──────────────────────────────────────────────────────

function generateEmailText(lead: CalculatorLead, breakdown?: QuoteBreakdown): string {
  const { contact, selections, submittedAt } = lead
  const date = new Date(submittedAt).toLocaleString('el-GR', { dateStyle: 'full', timeStyle: 'short' })
  const refId = `CALC-${new Date(submittedAt).getTime().toString(36).toUpperCase()}`

  let t = `ΝΕΑ ΑΙΤΗΣΗ ΠΡΟΣΦΟΡΑΣ — FAIACON (ΕΣΩΤΕΡΙΚΟ EMAIL)
================================================

Αναφορά: ${refId}
Ημερομηνία: ${date}

ΤΜΗΜΑ 1 — ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ
--------------------------
Όνομα:     ${contact.name}
Email:     ${contact.email}
Τηλέφωνο:  ${contact.phone ?? '—'}
`

  if (breakdown?.renovation) {
    const r = breakdown.renovation
    t += `
ΤΜΗΜΑ 2 — ΕΠΙΛΟΓΕΣ ΑΝΑΚΑΙΝΙΣΗΣ
--------------------------------
Εμβαδόν:           ${selections.renovation.area} τ.μ.
Μπάνια:            ${selections.renovation.bathrooms}
Κουζίνες:          ${selections.renovation.kitchens}
Δωμάτια:           ${selections.renovation.rooms}
Έτος κατασκευής:   ${selections.renovation.buildingAge}
Ποιότητα:          ${QUALITY_LABELS_EL[selections.renovation.renovationQuality as keyof typeof QUALITY_LABELS_EL] ?? selections.renovation.renovationQuality}
Κατηγορίες:        ${r.selectedCategories.join(', ') || '—'}
Πισίνα:            ${POOL_TYPE_LABELS_EL[selections.renovation.poolType as keyof typeof POOL_TYPE_LABELS_EL] ?? selections.renovation.poolType}
Τρόπος υπολογ.:    ${r.isFullRenovation ? 'Πλήρης ανακαίνιση (€/τ.μ.)' : 'Κατά κατηγορία'}

ΤΜΗΜΑ 3 — ΑΝΑΛΥΣΗ ΠΡΑΞΕΩΝ
--------------------------`
    for (const line of r.lines) {
      t += `\n${line.label}\n  Τύπος: ${line.formula}\n  Αποτέλεσμα: ${fmtEur(line.result)}`
    }
    t += `\n\nΥποσύνολο εργασιών (πριν τους συντελεστές): ${fmtEur(r.subtotalBeforeMultipliers)}`
    if (r.ageMultiplierValue !== 1.0) {
      t += `\nΣυντελεστής ηλικίας: ×${r.ageMultiplierValue} — ${r.ageMultiplierLabel}`
    }
    if (r.sizeMultiplierValue !== 1.0) {
      t += `\nΣυντελεστής εμβαδού: ×${r.sizeMultiplierValue} — ${r.sizeMultiplierLabel}`
    }
    t += `\nΥποσύνολο ανακαίνισης (μετά τους συντελεστές): ${fmtEur(r.subtotalAfterMultipliers)}`
    for (const pl of r.poolLines) {
      t += `\n${pl.label}: ${pl.formula} = ${fmtEur(pl.result)}`
    }
    if (r.poolSubtotal > 0) {
      t += `\nΥποσύνολο πισίνας: ${fmtEur(r.poolSubtotal)}`
    }
    t += `\nΣΥΝΟΛΟ ΑΝΑΚΑΙΝΙΣΗΣ + ΠΙΣΙΝΑΣ: ${fmtEur(r.total)}`
    t += `\nΕύρος: ${fmtEur(r.range.min)} – ${fmtEur(r.range.max)}`
  }

  if (breakdown?.windows) {
    const w = breakdown.windows
    t += `\n\nΚΟΥΦΩΜΑΤΑ\n---------`
    for (const line of w.lines) {
      t += `\n${line.label}: ${line.formula} = ${fmtEur(line.result)}`
    }
    t += `\nΣΥΝΟΛΟ ΚΟΥΦΩΜΑΤΩΝ: ${fmtEur(w.total)}`
    t += `\nΕύρος: ${fmtEur(w.range.min)} – ${fmtEur(w.range.max)}`
  }

  const grandTotal = breakdown?.grandTotal ?? selections.totalCost
  const grandRange = breakdown?.grandRange

  t += `\n\n================================================
ΤΜΗΜΑ 5 — ΤΕΛΙΚΟ ΕΚΤΙΜΩΜΕΝΟ ΚΟΣΤΟΣ
================================================
${fmtEur(grandTotal)}`
  if (grandRange) {
    t += `\nΕύρος: ${fmtEur(grandRange.min)} – ${fmtEur(grandRange.max)}`
  }
  t += `\n\nΠΑΡΑΤΗΡΗΣΗ: Αυτόματη εκτίμηση — ενδέχεται να διαφοροποιηθεί μετά από τεχνική αξιολόγηση.
ΕΣΩΤΕΡΙΚΟ EMAIL — ΜΗΝ ΑΠΟΣΤΕΙΛΕΤ�� ΣΤΟΝ ΠΕΛΑΤΗ.`

  return t.trim()
}

// ─── Lead storage (optional) ─────────────────────────────────────────────────

async function storeLead(lead: CalculatorLead): Promise<void> {
  console.log('[Calculator Lead]', JSON.stringify({ contact: lead.contact, submittedAt: lead.submittedAt, grandTotal: lead.breakdown?.grandTotal ?? lead.selections.totalCost }, null, 2))
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Rate limit per IP to mitigate spam/abuse
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { success: false, errors: ['Πάρα πολλές αιτήσεις. Παρακαλώ δοκιμάστε ξανά σε λίγο.'] },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot: bots fill hidden fields; humans leave them empty
    if (typeof body?.company === 'string' && body.company.trim() !== '') {
      // Pretend success so bots don't learn the field is a trap
      return NextResponse.json({ success: true, message: 'Το αίτημά σας καταχωρήθηκε επιτυχώς.' })
    }

    const validation = validateLeadData(body)
    if (!validation.valid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, errors: ['Σφάλμα διαμόρφωσης email. Παρακαλώ επικοινωνήστε απευθείας μαζί μας.'] },
        { status: 500 }
      )
    }

    const ResendClass = await getResend()
    const resend = new ResendClass(process.env.RESEND_API_KEY)

    // Build lead object — pick up breakdown if the client sent it
    const breakdown: QuoteBreakdown | undefined = body.breakdown ?? undefined

    const lead: CalculatorLead = {
      contact: {
        name: clean(body.contact.name, 120),
        email: clean(body.contact.email, 160).toLowerCase(),
        phone: clean(body.contact.phone, 40) || undefined,
      },
      selections: body.selections,
      breakdown,
      submittedAt: new Date().toISOString(),
      source: 'renovation-calculator',
      status: 'new',
    }

    const { data, error } = await resend.emails.send({
      from: LEADS_FROM_EMAIL,
      to: LEADS_TO_EMAIL,
      subject: `[Faiacon] Νέα Αίτηση Προσφοράς — ${lead.contact.name}`,
      html: generateEmailHTML(lead, breakdown),
      text: generateEmailText(lead, breakdown),
      replyTo: lead.contact.email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, errors: ['Αποτυχία αποστολής email. Παρακαλώ δοκιμάστε ξανά.'] },
        { status: 500 }
      )
    }

    try {
      await storeLead(lead)
    } catch (storeError) {
      console.error('Failed to store lead:', storeError)
    }

    return NextResponse.json({
      success: true,
      message: 'Το αίτημά σας καταχωρήθηκε επιτυχώς.',
      emailId: data?.id,
    })

  } catch (error) {
    console.error('Calculator lead API error:', error)
    return NextResponse.json(
      { success: false, errors: ['Προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά αργότερα.'] },
      { status: 500 }
    )
  }
}
