import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL || 'faiacon@yahoo.com'
const LEADS_FROM_EMAIL = process.env.LEADS_FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, area, message, language = 'el', source = 'antiparoxes' } = body

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
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: LEADS_FROM_EMAIL,
      to: [LEADS_TO_EMAIL],
      reply_to: email,
      subject: `Νέα Αίτηση Αντιπαροχής από ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
            Νέα Αίτηση Αντιπαροχής - ΦαιάCon
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
            <p><strong>Όνομα:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Τηλέφωνο:</strong> ${phone}</p>
            ${area ? `<p><strong>Περιοχή Ακινήτου:</strong> ${area}</p>` : ''}
            <p><strong>Γλώσσα:</strong> ${language === 'el' ? 'Ελληνικά' : 'English'}</p>
            <p><strong>Πηγή:</strong> ${source === 'antiparoxes' ? 'Φόρμα Αντιπαροχής' : 'Άλλη πηγή'}</p>
          </div>

          <h3 style="color: #1e3a5f; margin-top: 20px;">Μήνυμα:</h3>
          <p style="background: #ffffff; border-left: 4px solid #1e3a5f; padding: 15px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br />')}
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

    console.log('Antiparoxes lead email sent:', data)
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
