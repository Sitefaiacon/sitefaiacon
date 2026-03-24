import { NextRequest, NextResponse } from 'next/server'
import type { CalculatorLead } from '@/lib/types/calculator-lead'
import { generateLeadSummary, formatCost } from '@/lib/types/calculator-lead'

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

// Validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateLeadData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] }
  }
  
  const lead = data as Partial<CalculatorLead>
  
  if (!lead.contact?.name?.trim()) {
    errors.push('Το όνομα είναι υποχρεωτικό')
  }
  
  if (!lead.contact?.email?.trim()) {
    errors.push('Το email είναι υποχρεωτικό')
  } else if (!isValidEmail(lead.contact.email)) {
    errors.push('Μη έγκυρη μορφή email')
  }
  
  if (!lead.selections) {
    errors.push('Missing calculator selections')
  }
  
  return { valid: errors.length === 0, errors }
}

// Generate professional HTML email
function generateEmailHTML(lead: CalculatorLead): string {
  const { contact, selections, submittedAt } = lead
  const { renovation, windows, totalCost } = selections
  
  const submissionDate = new Date(submittedAt).toLocaleString('el-GR', {
    dateStyle: 'full',
    timeStyle: 'short'
  })
  
  const summary = generateLeadSummary(selections, false)
  
  // Quality labels
  const qualityLabels = {
    basic: 'Βασική',
    midRange: 'Μεσαία',
    premium: 'Premium'
  }
  
  // Material labels
  const materialLabels = {
    aluminum: 'Αλουμίνιο',
    pvc: 'PVC',
    wood: 'Ξύλο'
  }
  
  // Pool type labels
  const poolLabels = {
    none: 'Καμία',
    concrete: 'Μπετόν',
    polyester: 'Πολυεστερική',
    liner: 'Με επένδυση'
  }
  
  // Selected categories
  const selectedCategories = Object.entries(renovation.categories || {})
    .filter(([_, value]) => value)
    .map(([key]) => {
      const categoryLabels: Record<string, string> = {
        bathroom: 'Μπάνιο',
        kitchen: 'Κουζίνα',
        flooring: 'Δάπεδα',
        electrical: 'Ηλεκτρολογικά',
        structural: 'Δομικά',
        painting: 'Βαφή',
      }
      return categoryLabels[key] || key
    })
  
  // Check if renovation has any data (not just cost)
  const hasRenovationData = renovation.area > 0 || selectedCategories.length > 0 || renovation.renovationCost > 0
  
  return `
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Νέο αίτημα από Calculator - Faiacon</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background-color: #3a5a8c; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Νέο Αίτημα Calculator</h1>
        <p style="color: #ffffff; opacity: 0.9; margin: 10px 0 0 0; font-size: 14px;">Faiacon - Υπολογιστής Κόστους Ανακαίνισης</p>
      </td>
    </tr>
    
    <!-- Quick Summary -->
    <tr>
      <td style="padding: 25px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
        <h2 style="color: #3a5a8c; margin: 0 0 10px 0; font-size: 16px;">Γρήγορη Περίληψη</h2>
        <p style="margin: 0; color: #495057; font-size: 14px; line-height: 1.6;">${summary}</p>
      </td>
    </tr>
    
    <!-- Contact Info -->
    <tr>
      <td style="padding: 25px; border-bottom: 1px solid #e9ecef;">
        <h2 style="color: #3a5a8c; margin: 0 0 15px 0; font-size: 18px;">Στοιχεία Επικοινωνίας</h2>
        <table width="100%" cellpadding="5" cellspacing="0">
          <tr>
            <td style="color: #6c757d; font-size: 14px; width: 120px;">Όνομα:</td>
            <td style="color: #212529; font-size: 14px; font-weight: 600;">${contact.name}</td>
          </tr>
          <tr>
            <td style="color: #6c757d; font-size: 14px;">Email:</td>
            <td style="color: #212529; font-size: 14px;">
              <a href="mailto:${contact.email}" style="color: #3a5a8c;">${contact.email}</a>
            </td>
          </tr>
          ${contact.phone ? `
          <tr>
            <td style="color: #6c757d; font-size: 14px;">Κινητό:</td>
            <td style="color: #212529; font-size: 14px;">
              <a href="tel:${contact.phone}" style="color: #3a5a8c;">${contact.phone}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="color: #6c757d; font-size: 14px;">Ημερομηνία:</td>
            <td style="color: #212529; font-size: 14px;">${submissionDate}</td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Two Column Layout: Renovation & Windows Side by Side -->
    ${(hasRenovationData || windows.windowsCost > 0) ? `
    <tr>
      <td style="padding: 25px; border-bottom: 1px solid #e9ecef;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <!-- Left Column: Γενική Ανακαίνιση -->
            <td style="width: 48%; vertical-align: top; padding-right: 15px; ${hasRenovationData ? '' : 'opacity: 0.5;'}">
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; height: 100%;">
                <h2 style="color: #3a5a8c; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #3a5a8c; padding-bottom: 10px;">Γενική Ανακαίνιση</h2>
                ${hasRenovationData ? `
                <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 13px;">
                  <tr>
                    <td style="color: #6c757d;">Εμβαδόν:</td>
                    <td style="color: #212529; text-align: right;">${renovation.area} τ.μ.</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Μπάνια:</td>
                    <td style="color: #212529; text-align: right;">${renovation.bathrooms}</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Κουζίνες:</td>
                    <td style="color: #212529; text-align: right;">${renovation.kitchens}</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Δωμάτια:</td>
                    <td style="color: #212529; text-align: right;">${renovation.rooms}</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Έτος:</td>
                    <td style="color: #212529; text-align: right;">${renovation.buildingAge}</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Ποιότητα:</td>
                    <td style="color: #212529; text-align: right; font-weight: 600;">${qualityLabels[renovation.renovationQuality]}</td>
                  </tr>
                  ${selectedCategories.length > 0 ? `
                  <tr>
                    <td colspan="2" style="color: #6c757d; padding-top: 8px;">Κατηγορίες: ${selectedCategories.join(', ')}</td>
                  </tr>
                  ` : ''}
                  ${renovation.poolType !== 'none' ? `
                  <tr>
                    <td style="color: #6c757d;">Πισίνα:</td>
                    <td style="color: #212529; text-align: right;">${poolLabels[renovation.poolType]} - ${renovation.poolSize} τ.μ.</td>
                  </tr>
                  ` : ''}
                </table>
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                  <p style="margin: 0; color: #6c757d; font-size: 12px;">Κόστος Ανακαίνισης</p>
                  <p style="margin: 5px 0 0 0; color: #3a5a8c; font-size: 22px; font-weight: 700;">${formatCost(renovation.renovationCost)}</p>
                </div>
                ` : `
                <p style="color: #6c757d; font-size: 13px; text-align: center; margin: 20px 0;">Δεν επιλέχθηκε</p>
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                  <p style="margin: 0; color: #6c757d; font-size: 12px;">Κόστος Ανακαίνισης</p>
                  <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 22px; font-weight: 700;">0€</p>
                </div>
                `}
              </div>
            </td>
            
            <!-- Right Column: Πόρτες & Παράθυρα -->
            <td style="width: 48%; vertical-align: top; padding-left: 15px; ${windows.windowsCost > 0 ? '' : 'opacity: 0.5;'}">
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; height: 100%;">
                <h2 style="color: #3a5a8c; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #3a5a8c; padding-bottom: 10px;">Πόρτες & Παράθυρα</h2>
                ${windows.windowsCost > 0 ? `
                <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 13px;">
                  ${windows.windows > 0 ? `
                  <tr>
                    <td style="color: #6c757d;">Παράθυρα:</td>
                    <td style="color: #212529; text-align: right;">${windows.windows}</td>
                  </tr>
                  ` : ''}
                  ${windows.balconyDoors > 0 ? `
                  <tr>
                    <td style="color: #6c757d;">Μπαλκονόπορτες:</td>
                    <td style="color: #212529; text-align: right;">${windows.balconyDoors}</td>
                  </tr>
                  ` : ''}
                  ${windows.interiorDoors > 0 ? `
                  <tr>
                    <td style="color: #6c757d;">Εσωτ. Πόρτες:</td>
                    <td style="color: #212529; text-align: right;">${windows.interiorDoors}</td>
                  </tr>
                  ` : ''}
                  ${windows.mainEntrance > 0 ? `
                  <tr>
                    <td style="color: #6c757d;">Κεντρ. Είσοδος:</td>
                    <td style="color: #212529; text-align: right;">${windows.mainEntrance}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #6c757d;">Υλικό:</td>
                    <td style="color: #212529; text-align: right;">${materialLabels[windows.material]}</td>
                  </tr>
                  <tr>
                    <td style="color: #6c757d;">Ποιότητα:</td>
                    <td style="color: #212529; text-align: right; font-weight: 600;">${qualityLabels[windows.quality]}</td>
                  </tr>
                </table>
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                  <p style="margin: 0; color: #6c757d; font-size: 12px;">Κόστος Κουφωμάτων</p>
                  <p style="margin: 5px 0 0 0; color: #3a5a8c; font-size: 22px; font-weight: 700;">${formatCost(windows.windowsCost)}</p>
                </div>
                ` : `
                <p style="color: #6c757d; font-size: 13px; text-align: center; margin: 20px 0;">Δεν επιλέχθηκε</p>
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                  <p style="margin: 0; color: #6c757d; font-size: 12px;">Κόστος Κουφωμάτων</p>
                  <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 22px; font-weight: 700;">0€</p>
                </div>
                `}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    ` : ''}
    
    <!-- Total Cost -->
    <tr>
      <td style="padding: 25px; background-color: #3a5a8c;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="color: #ffffff; font-size: 18px; font-weight: 600;">Συνολικό Εκτιμώμενο Κόστος:</td>
            <td style="color: #ffffff; font-size: 24px; font-weight: 700; text-align: right;">${formatCost(totalCost)}</td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 20px; background-color: #f8f9fa; text-align: center;">
        <p style="margin: 0; color: #6c757d; font-size: 12px;">
          Αυτό το email δημιουργήθηκε αυτόματα από τον Υπολογιστή Κόστους Ανακαίνισης της Faiacon.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Generate plain text email for fallback
function generateEmailText(lead: CalculatorLead): string {
  const { contact, selections, submittedAt } = lead
  const { renovation, windows, totalCost } = selections
  
  const submissionDate = new Date(submittedAt).toLocaleString('el-GR', {
    dateStyle: 'full',
    timeStyle: 'short'
  })
  
  const summary = generateLeadSummary(selections, false)
  
  let text = `
ΝΈΟ ΑΊΤΗΜΑ ΑΠΌ CALCULATOR - FAIACON
=====================================

ΓΡΉΓΟΡΗ ΠΕΡΊΛΗΨΗ
${summary}

ΣΤΟΙΧΕΊΑ ΕΠΙΚΟΙΝΩΝΊΑΣ
---------------------
Όνομα: ${contact.name}
Email: ${contact.email}
${contact.phone ? `Κινητό: ${contact.phone}` : ''}
Ημερομηνία: ${submissionDate}
`

  if (renovation.renovationCost > 0) {
    text += `
ΓΕΝΙΚΉ ΑΝΑΚΑΊΝΙΣΗ
-----------------
Εμβαδόν: ${renovation.area} τ.μ.
Μπάνια: ${renovation.bathrooms}
Κουζίνες: ${renovation.kitchens}
Δωμάτια: ${renovation.rooms}
Έτος Κατασκευής: ${renovation.buildingAge}
Ποιότητα: ${renovation.renovationQuality}
Κόστος Ανακαίνισης: ${formatCost(renovation.renovationCost)}
`
  }

  if (windows.windowsCost > 0) {
    text += `
ΠΌΡΤΕΣ & ΠΑΡΆΘΥΡΑ
-----------------
Παράθυρα: ${windows.windows}
Μπαλκονόπορτες: ${windows.balconyDoors}
Εσωτερικές Πόρτες: ${windows.interiorDoors}
Κεντρική Είσοδος: ${windows.mainEntrance}
Υλικό: ${windows.material}
Ποιότητα: ${windows.quality}
Κόστος Κουφωμάτων: ${formatCost(windows.windowsCost)}
`
  }

  text += `
=====================================
ΣΥΝΟΛΙΚΌ ΕΚΤΙΜΏΜΕΝΟ ΚΌΣΤΟΣ: ${formatCost(totalCost)}
=====================================
`

  return text.trim()
}

// Optional: Store lead for future database integration
// This function is designed to be easily replaced with actual database calls
async function storeLead(lead: CalculatorLead): Promise<void> {
  // TODO: Replace with actual database storage
  // Example for Supabase:
  // const { error } = await supabase.from('calculator_leads').insert(lead)
  // if (error) throw error
  
  // Example for Neon:
  // await sql`INSERT INTO calculator_leads (contact, selections, submitted_at, source) 
  //           VALUES (${lead.contact}, ${lead.selections}, ${lead.submittedAt}, ${lead.source})`
  
  // For now, just log (in production, remove or replace)
  console.log('[Calculator Lead]', JSON.stringify(lead, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    
    // Validate input
    const validation = validateLeadData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }
    
    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, errors: ['Σφάλμα διαμόρφωσης email. Παρακαλώ επικοινωνήστε απευθείας μαζί μας.'] },
        { status: 500 }
      )
    }
    
    // Initialize Resend with API key (lazy initialization inside handler)
    const ResendClass = await getResend()
    const resend = new ResendClass(process.env.RESEND_API_KEY)
    
    // Create lead object
    const lead: CalculatorLead = {
      contact: {
        name: body.contact.name.trim(),
        email: body.contact.email.trim().toLowerCase(),
        phone: body.contact.phone?.trim() || undefined
      },
      selections: body.selections,
      submittedAt: new Date().toISOString(),
      source: 'renovation-calculator',
      status: 'new'
    }
    
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: LEADS_FROM_EMAIL,
      to: LEADS_TO_EMAIL,
      subject: `Νέο αίτημα από calculator - Faiacon`,
      html: generateEmailHTML(lead),
      text: generateEmailText(lead),
      replyTo: lead.contact.email
    })
    
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, errors: ['Αποτυχία αποστολής email. Παρακαλώ δοκιμάστε ξανά.'] },
        { status: 500 }
      )
    }
    
    // Store lead for future reference (optional)
    try {
      await storeLead(lead)
    } catch (storeError) {
      // Don't fail the request if storage fails
      console.error('Failed to store lead:', storeError)
    }
    
    return NextResponse.json({
      success: true,
      message: 'Το αίτημά σας καταχωρήθηκε επιτυχώς.',
      emailId: data?.id
    })
    
  } catch (error) {
    console.error('Calculator lead API error:', error)
    return NextResponse.json(
      { success: false, errors: ['Προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά αργότερα.'] },
      { status: 500 }
    )
  }
}
