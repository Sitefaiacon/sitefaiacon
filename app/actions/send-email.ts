"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

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

    // Detailed console logging for debugging
    console.log("Attempting to send email with details:", {
      name,
      email,
      phone,
      messageLength: message?.length,
    })

    const { data, error } = await resend.emails.send({
      from: "Faiacon Website <onboarding@resend.dev>",
      to: ["faiacon@yahoo.com"],
      reply_to: email,
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
        <p><strong>Όνομα:</strong> ${name || "Δεν δόθηκε"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone}</p>
        <br/>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message}</p>
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
