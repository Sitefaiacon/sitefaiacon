import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(val: unknown): string {
  if (typeof val !== "string") return ""
  return val.replace(/[<>]/g, "").trim().slice(0, 2000)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Honeypot anti-spam check
    if (body.website) {
      return NextResponse.json({ success: false, message: "Spam detected." }, { status: 400 })
    }

    // Required fields validation
    const required = ["fullName", "phone", "email", "residence", "basedInCorfu", "willingToWorkOutside", "isOver18", "workType", "experienceLevel", "position", "previousExperience", "legalToWork", "privacyConsent"]
    for (const field of required) {
      if (!body[field] && body[field] !== false) {
        return NextResponse.json({ success: false, message: `Το πεδίο "${field}" είναι υποχρεωτικό.` }, { status: 400 })
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitize(body.email))) {
      return NextResponse.json({ success: false, message: "Μη έγκυρη διεύθυνση email." }, { status: 400 })
    }

    const name = sanitize(body.fullName)
    const email = sanitize(body.email)
    const phone = sanitize(body.phone)
    const residence = sanitize(body.residence)
    const basedInCorfu = body.basedInCorfu === "yes" ? "Ναι" : "Όχι"
    const willingToWorkOutside = body.willingToWorkOutside === "yes" ? "Ναι" : "Όχι"
    const workType = sanitize(body.workType)
    const experienceLevel = sanitize(body.experienceLevel)
    const position = sanitize(body.position)
    const positionOther = sanitize(body.positionOther)
    const yearsExperience = sanitize(body.yearsExperience)
    const previousExperience = sanitize(body.previousExperience)
    const workDoneTypes: string[] = Array.isArray(body.workDoneTypes) ? body.workDoneTypes.map(sanitize) : []
    const hasLicense = body.hasLicense === "yes" ? "Ναι" : "Όχι"
    const hasVehicle = body.hasVehicle === "yes" ? "Ναι" : "Όχι"
    const legalToWork = body.legalToWork === "yes" ? "Ναι" : "Όχι"
    const languages = sanitize(body.languages)
    const startDate = sanitize(body.startDate)
    const workDuration = sanitize(body.workDuration)
    const expectedSalary = sanitize(body.expectedSalary)
    const canWorkFullTime = body.canWorkFullTime === "yes" ? "Ναι" : "Όχι"
    const physicalWork = body.physicalWork === "yes" ? "Ναι" : "Όχι"
    const teamWork = body.teamWork === "yes" ? "Ναι" : "Όχι"
    const customerFacing = body.customerFacing === "yes" ? "Ναι" : "Όχι"
    const isStudent = body.isStudent === "yes" ? "Ναι" : "Όχι"
    const studentAvailability = sanitize(body.studentAvailability)
    const cvFileName = sanitize(body.cvFileName)
    const comments = sanitize(body.comments)

    const hrEmail = process.env.HR_RECEIVER_EMAIL || "faiacon@yahoo.com"

    const hrHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #222;">
        <div style="background: #1e3771; color: white; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="margin:0; font-size: 22px;">Νέα Αίτηση Εργασίας</h1>
          <p style="margin:4px 0 0; opacity:0.85;">Υποψήφιος: <strong>${name}</strong></p>
        </div>
        <div style="background: #f8f9fa; padding: 24px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">

          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px;">Προσωπικά Στοιχεία</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:40%;">Ονοματεπώνυμο</td><td>${name}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Τηλέφωνο</td><td>${phone}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Email</td><td>${email}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Τόπος Κατοικίας</td><td>${residence}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Βρίσκεται στην Κέρκυρα;</td><td>${basedInCorfu}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Δέχεται εκτός Κέρκυρας;</td><td>${willingToWorkOutside}</td></tr>
          </table>

          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Τύπος Αίτησης & Εμπειρία</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:40%;">Τύπος Εργασίας</td><td>${workType}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Επίπεδο Εμπειρίας</td><td>${experienceLevel}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Θέση</td><td>${position}${positionOther ? ` (${positionOther})` : ""}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Χρόνια Εμπειρίας</td><td>${yearsExperience}</td></tr>
          </table>

          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Προηγούμενη Εμπειρία</h3>
          <p style="background:#fff; padding:10px 12px; border-radius:4px; border:1px solid #e0e0e0;">${previousExperience}</p>
          ${workDoneTypes.length > 0 ? `<p><strong>Είδη εργασιών:</strong> ${workDoneTypes.join(", ")}</p>` : ""}

          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Πρακτικά Στοιχεία</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:40%;">Δίπλωμα οδήγησης</td><td>${hasLicense}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Ιδιόκτητο όχημα</td><td>${hasVehicle}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Νόμιμα στην Ελλάδα</td><td>${legalToWork}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Γλώσσες</td><td>${languages || "-"}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Διαθέσιμος από</td><td>${startDate || "-"}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Επιθυμητή διάρκεια</td><td>${workDuration}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Αναμενόμενες αποδοχές</td><td>${expectedSalary || "-"}</td></tr>
          </table>

          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Διαθεσιμότητα & Καταλληλότητα</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:40%;">Πλήρης απασχόληση</td><td>${canWorkFullTime}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Σωματική εργασία</td><td>${physicalWork}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Ομαδική εργασία</td><td>${teamWork}</td></tr>
            <tr style="background:#fff;"><td style="padding:4px 8px; font-weight:bold;">Πελατοκεντρικά έργα</td><td>${customerFacing}</td></tr>
          </table>

          ${isStudent === "Ναι" ? `
          <h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Φοιτητής/τρια</h3>
          <p><strong>Διαθεσιμότητα φοιτητή:</strong> ${studentAvailability || "-"}</p>
          ` : ""}

          ${cvFileName ? `<p style="margin-top:16px;"><strong>Αρχείο CV:</strong> ${cvFileName}</p>` : ""}
          ${comments ? `<h3 style="color:#1e3771; border-bottom:2px solid #1e3771; padding-bottom:6px; margin-top:20px;">Σχόλια</h3><p style="background:#fff; padding:10px 12px; border-radius:4px; border:1px solid #e0e0e0;">${comments}</p>` : ""}

          <p style="margin-top:24px; font-size:12px; color:#888;">Αυτό το email στάλθηκε αυτόματα από τη φόρμα αίτησης στο site faiacon.gr</p>
        </div>
      </div>
    `

    const confirmHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
        <div style="background: #1e3771; color: white; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="margin:0; font-size: 22px;">ΦαιάCon - Επιβεβαίωση Αίτησης</h1>
        </div>
        <div style="padding: 24px 32px; border: 1px solid #e0e0e0; border-top:none; border-radius: 0 0 8px 8px;">
          <p>Αγαπητέ/ή <strong>${name}</strong>,</p>
          <p>Λάβαμε την αίτησή σας για τη θέση <strong>${position}</strong>. Σας ευχαριστούμε για το ενδιαφέρον σας να εργαστείτε μαζί μας.</p>
          <p>Η ομάδα μας θα αξιολογήσει την αίτησή σας και θα επικοινωνήσει μαζί σας σύντομα.</p>
          <br/>
          <p>Με εκτίμηση,<br/><strong>Ομάδα ΦαιάCon</strong><br/>Κέρκυρα | <a href="https://faiacon.gr" style="color:#1e3771;">faiacon.gr</a></p>
        </div>
      </div>
    `

    // Send to HR
    const { error: hrError } = await resend.emails.send({
      from: "ΦαιάCon Careers <onboarding@resend.dev>",
      to: [hrEmail],
      reply_to: email,
      subject: `Νέα Αίτηση Εργασίας - ${name}`,
      html: hrHtml,
    })

    if (hrError) {
      console.error("HR email error:", hrError)
      throw new Error(hrError.message)
    }

    // Send confirmation to applicant
    await resend.emails.send({
      from: "ΦαιάCon <onboarding@resend.dev>",
      to: [email],
      subject: "Λάβαμε την αίτησή σας - ΦαιάCon",
      html: confirmHtml,
    })

    return NextResponse.json({ success: true, message: "Η αίτησή σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα." })
  } catch (error) {
    console.error("Career application error:", error)
    return NextResponse.json({ success: false, message: "Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά." }, { status: 500 })
  }
}
