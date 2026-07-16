import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const LEADS_FROM_EMAIL = process.env.LEADS_FROM_EMAIL || "onboarding@resend.dev"
const HR_RECEIVER_EMAIL = process.env.HR_RECEIVER_EMAIL || "info@faiacon.gr"

function readString(value: unknown, maxLength = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:700;width:42%;border-bottom:1px solid #e5e7eb;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (readString(body.website, 120)) {
      return NextResponse.json({ success: true, message: "Η αίτησή σας στάλθηκε." })
    }

    const name = readString(body.fullName, 120)
    const phone = readString(body.phone, 60)
    const email = readString(body.email, 254)
    const position = readString(body.position, 120)
    const experienceLevel = readString(body.experienceLevel, 120)
    const residence = readString(body.residence, 120)
    const availability = readString(body.availability, 160)
    const previousExperience = readString(body.previousExperience)
    const privacyConsent = body.privacyConsent === true
    const phoneDigits = phone.replace(/\D/g, "")

    if (!name || !phone || !email || !position || !privacyConsent) {
      return NextResponse.json({ success: false, message: "Συμπληρώστε τα υποχρεωτικά πεδία." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Γράψτε ένα έγκυρο email." }, { status: 400 })
    }

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json({ success: false, message: "Γράψτε ένα έγκυρο τηλέφωνο επικοινωνίας." }, { status: 400 })
    }

    const details = [
      row("Ονοματεπώνυμο", name),
      row("Τηλέφωνο", phone),
      row("Email", email),
      row("Θέση που ενδιαφέρει", position),
      experienceLevel ? row("Εμπειρία", experienceLevel) : "",
      residence ? row("Περιοχή κατοικίας", residence) : "",
      availability ? row("Διαθεσιμότητα", availability) : "",
    ].join("")

    const hrHtml = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#1f2937;">
        <div style="background:#1e3771;color:#fff;padding:24px 28px;border-radius:10px 10px 0 0;">
          <h1 style="margin:0;font-size:22px;">Νέα αίτηση εργασίας</h1>
          <p style="margin:6px 0 0;opacity:.9;">Υποψήφιος: <strong>${escapeHtml(name)}</strong></p>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:0;padding:24px 28px;border-radius:0 0 10px 10px;">
          <table style="width:100%;border-collapse:collapse;">${details}</table>
          ${previousExperience ? `<h2 style="margin:24px 0 8px;color:#1e3771;font-size:17px;">Εμπειρία ή ειδικότητα</h2><p style="margin:0;white-space:pre-line;background:#f8fafc;padding:14px;border-radius:6px;line-height:1.55;">${escapeHtml(previousExperience)}</p>` : ""}
          <p style="margin:24px 0 0;color:#6b7280;font-size:12px;">Η αίτηση στάλθηκε από τη φόρμα εργασίας του faiacon.gr.</p>
        </div>
      </div>
    `

    const confirmHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1f2937;">
        <div style="background:#1e3771;color:#fff;padding:24px 28px;border-radius:10px 10px 0 0;">
          <h1 style="margin:0;font-size:22px;">Φαιάcon — Επιβεβαίωση αίτησης</h1>
        </div>
        <div style="padding:24px 28px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 10px 10px;line-height:1.6;">
          <p>Αγαπητέ/ή <strong>${escapeHtml(name)}</strong>,</p>
          <p>Λάβαμε την αίτησή σας για τη θέση <strong>${escapeHtml(position)}</strong>. Σας ευχαριστούμε για το ενδιαφέρον σας να εργαστείτε μαζί μας.</p>
          <p>Θα αξιολογήσουμε την αίτησή σας και θα επικοινωνήσουμε μαζί σας, εφόσον υπάρχει σχετική ανάγκη.</p>
          <p style="margin-top:24px;">Με εκτίμηση,<br/><strong>Η ομάδα Φαιάcon</strong><br/>Κέρκυρα | <a href="https://faiacon.gr" style="color:#1e3771;">faiacon.gr</a></p>
        </div>
      </div>
    `

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error: hrError } = await resend.emails.send({
      from: `Φαιάcon Careers <${LEADS_FROM_EMAIL}>`,
      to: [HR_RECEIVER_EMAIL],
      replyTo: email,
      subject: `Νέα αίτηση εργασίας — ${name}`,
      html: hrHtml,
    })

    if (hrError) {
      console.error("Career application email error:", hrError)
      throw new Error(hrError.message)
    }

    const { error: confirmationError } = await resend.emails.send({
      from: `Φαιάcon <${LEADS_FROM_EMAIL}>`,
      to: [email],
      subject: "Λάβαμε την αίτησή σας — Φαιάcon",
      html: confirmHtml,
    })

    if (confirmationError) {
      console.error("Career confirmation email error:", confirmationError)
    }

    return NextResponse.json({
      success: true,
      message: "Η αίτησή σας στάλθηκε. Θα επικοινωνήσουμε μαζί σας, εφόσον υπάρχει σχετική ανάγκη.",
    })
  } catch (error) {
    console.error("Career application error:", error)
    return NextResponse.json(
      { success: false, message: "Η αίτηση δεν στάλθηκε. Παρακαλούμε δοκιμάστε ξανά." },
      { status: 500 },
    )
  }
}
