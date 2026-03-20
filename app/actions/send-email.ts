"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData): Promise<{
  success: boolean
  message: string
  messageEn: string
}> {
  const name = formData.get("name") as string | null
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!email || !phone || !message) {
    return {
      success: false,
      message: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.",
      messageEn: "Please fill in all required fields.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
      messageEn: "Please enter a valid email address.",
    }
  }

  // Validate phone format (Greek mobile)
  const phoneRegex = /^69[0-9]{8}$/
  if (!phoneRegex.test(phone)) {
    return {
      success: false,
      message: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό κινητού (πχ. 6912345678).",
      messageEn: "Please enter a valid mobile number (e.g. 6912345678).",
    }
  }

  try {
    await resend.emails.send({
      from: "FAIACON Website <onboarding@resend.dev>",
      to: ["faiacon@yahoo.com"],
      subject: `Νέο μήνυμα από ${name || "Ανώνυμος"} - FAIACON Website`,
      replyTo: email,
      text: `
        Όνομα: ${name || "Δεν δόθηκε"}
        Email: ${email}
        Τηλέφωνο: ${phone}
        
        Μήνυμα:
        ${message}
      `,
    })

    return {
      success: true,
      message: "Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      messageEn: "Your message was sent successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Email send error:", error)
    return {
      success: false,
      message: "Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.",
      messageEn: "An error occurred while sending the message. Please try again.",
    }
  }
}
