import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml, isAllowedFormRequest, isOversizedRequest, isRateLimited, readString } from '@/lib/server/request-security'

const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL || 'info@faiacon.gr'
const LEADS_FROM_EMAIL = process.env.LEADS_FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(req: NextRequest) {
  try {
    if (!isAllowedFormRequest(req)) return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
    if (isOversizedRequest(req)) return NextResponse.json({ error: 'Request too large.' }, { status: 413 })
    if (isRateLimited(req, 'antiparoxes')) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 })

    const body = await req.json()
    if (readString(body.website, 120)) return NextResponse.json({ success: true })
    const name = readString(body.name, 120)
    const email = readString(body.email, 254).toLowerCase()
    const phone = readString(body.phone, 40)
    const area = readString(body.area, 160)
    const message = readString(body.message, 5000)
    const language = readString(body.language, 2) || 'el'
    const source = readString(body.source, 40) || 'antiparoxes'

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Μη έγκυρη διεύθυνση email.' },
        { status: 400 }
      )
    }

    // Initialize Resend
    if (!process.env.RESEND_API_KEY) throw new Error('Email service is not configured')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: LEADS_FROM_EMAIL,
      to: [LEADS_TO_EMAIL],
      replyTo: email,
      subject: `Νέα Αίτηση Αντιπαροχής από ${name.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
            Νέα Αίτηση Αντιπαροχής - ΦαιάCon
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
            <p><strong>Όνομα:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
            ${area ? `<p><strong>Περιοχή Ακινήτου:</strong> ${escapeHtml(area)}</p>` : ''}
            <p><strong>Γλώσσα:</strong> ${language === 'el' ? 'Ελληνικά' : 'English'}</p>
            <p><strong>Πηγή:</strong> ${source === 'antiparoxes' ? 'Φόρμα Αντιπαροχής' : 'Άλλη πηγή'}</p>
          </div>

          <h3 style="color: #1e3a5f; margin-top: 20px;">Μήνυμα:</h3>
          <p style="background: #ffffff; border-left: 4px solid #1e3a5f; padding: 15px; margin: 10px 0;">
            ${escapeHtml(message).replace(/\n/g, '<br />')}
          </p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            Αυτό το email στάλθηκε μέσα από τη φόρμα αντιπαροχής του ιστοτόπου faiacon.gr
          </p>
        </div>
      `,
      text: `
Νέα Αίτηση Αντιπαροχής
${'-'.repeat(40)}

Όνομα: ${name}
Email: ${email}
Τηλέφωνο: ${phone}
${area ? `Περιοχή Ακινήτου: ${area}` : ''}
Γλώσσα: ${language === 'el' ? 'Ελληνικά' : 'English'}

Μήνυμα:
${message}
      `,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Η αίτησή σας έχει ληφθεί με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.',
    })
  } catch (error) {
    console.error('Antiparoxes lead API error:', error)
    return NextResponse.json(
      { error: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' },
      { status: 500 }
    )
  }
}
