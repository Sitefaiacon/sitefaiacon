"use server"

import { Resend } from "resend"

const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL || "info@faiacon.gr"

// Escape user input before interpolating into email HTML
function escapeHtml(input: unknown): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendEmail(formData: FormData) {
  try {
    const name = ((formData.get("name") as string) || "").trim().slice(0, 120)
    const email = ((formData.get("email") as string) || "").trim().slice(0, 160)
    const phone = ((formData.get("phone") as string) || "").trim().slice(0, 40)
    const message = ((formData.get("message") as string) || "").trim().slice(0, 5000)

    // Honeypot: hidden field only bots fill in
    const honeypot = ((formData.get("company") as string) || "").trim()
    if (honeypot) {
      return {
        success: true,
        message: "Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      }
    }

    // Input validation
    if (!email || !phone || !message) {
      return {
        success: false,
        message: "Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
      }
    }

    // Phone validation (Greek mobile number)
    const phoneRegex = /^69\d{8}$/
    if (!phoneRegex.test(phone)) {
      return {
        success: false,
        message: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό κινητού τηλεφώνου.",
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: "Faiacon Website <onboarding@resend.dev>",
      to: [LEADS_TO_EMAIL],
      replyTo: email,
      subject: `Νέα Φόρμα Επικοινωνίας από ${name || email}`,
      text: `
        Όνομα: ${name || "Δεν δόθηκε"}
        Email: ${email}
        Τηλέφωνο: ${phone}
        
        Μήνυμα:
        ${message}
      `,
      html: `
        <h2>Νέα Φόρμα Επικοινωνίας</h2>
        <p><strong>Όνομα:</strong> ${escapeHtml(name) || "Δεν δόθηκε"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
        <br/>
        <p><strong>Μήνυμα:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(error.message)
    }

    console.log("Email sent successfully:", data)
    return {
      success: true,
      message: "Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.",
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message:
        "Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά στο 6987797679.",
    }
  }
}
