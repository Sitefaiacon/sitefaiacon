"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface CalculatorData {
  // Contact info
  name: string
  email: string
  phone: string
  
  // Renovation data
  area: string
  bathrooms: number
  kitchens: number
  rooms: number
  buildingAge: number
  poolType: string
  poolSize: number
  categories: {
    bathroom: boolean
    kitchen: boolean
    flooring: boolean
    electrical: boolean
    structural: boolean
    painting: boolean
  }
  renovationQuality: string
  renovationCost: string | null
  
  // Windows data
  material: string
  windowsQuality: string
  windows: number
  balconyDoors: number
  interiorDoors: number
  mainEntrance: number
  windowsCost: string | null
  
  // Total
  totalCost: string | null
  
  // Language
  isEnglish: boolean
}

export async function sendCalculatorEmail(data: CalculatorData) {
  try {
    // Input validation
    if (!data.email || !data.phone) {
      return {
        success: false,
        message: data.isEnglish 
          ? "Please fill in all required fields." 
          : "Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: data.isEnglish 
          ? "Please enter a valid email address." 
          : "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
      }
    }

    // Phone validation (Greek mobile number or international)
    const phoneRegex = /^(\+?[0-9]{10,15}|69\d{8})$/
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      return {
        success: false,
        message: data.isEnglish 
          ? "Please enter a valid phone number." 
          : "Παρακαλώ εισάγετε έναν έγκυρο αριθμό τηλεφώνου.",
      }
    }

    // Build categories string
    const categoryLabels: Record<string, { en: string; el: string }> = {
      bathroom: { en: "Bathroom", el: "Μπάνιο" },
      kitchen: { en: "Kitchen", el: "Κουζίνα" },
      flooring: { en: "Flooring", el: "Δάπεδα" },
      electrical: { en: "Electrical", el: "Ηλεκτρολογικά" },
      structural: { en: "Structural", el: "Δομικά" },
      painting: { en: "Painting", el: "Βαφή" },
    }

    const selectedCategories = Object.entries(data.categories)
      .filter(([, value]) => value)
      .map(([key]) => data.isEnglish ? categoryLabels[key].en : categoryLabels[key].el)
      .join(", ") || (data.isEnglish ? "None" : "Καμία")

    const qualityLabels: Record<string, { en: string; el: string }> = {
      basic: { en: "Basic", el: "Βασική" },
      midRange: { en: "Mid-Range", el: "Μεσαία" },
      premium: { en: "Premium", el: "Premium" },
    }

    const poolTypeLabels: Record<string, { en: string; el: string }> = {
      none: { en: "None", el: "Καμία" },
      concrete: { en: "Concrete", el: "Μπετόν" },
      polyester: { en: "Polyester", el: "Πολυεστερική" },
      liner: { en: "Liner", el: "Με επένδυση" },
    }

    const materialLabels: Record<string, { en: string; el: string }> = {
      aluminum: { en: "Aluminum", el: "Αλουμίνιο" },
      pvc: { en: "PVC", el: "PVC" },
      wood: { en: "Wood", el: "Ξύλο" },
    }

    const { error } = await resend.emails.send({
      from: "Faiacon Calculator <onboarding@resend.dev>",
      to: ["faiacon@yahoo.com"],
      reply_to: data.email,
      subject: `Νέα Αίτηση Υπολογισμού Κόστους από ${data.name || data.email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Νέα Αίτηση Υπολογισμού Κόστους Ανακαίνισης
          </h2>
          
          <h3 style="color: #374151; margin-top: 20px;">Στοιχεία Επικοινωνίας</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Όνομα:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.name || "Δεν δόθηκε"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Τηλέφωνο:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.phone}</td>
            </tr>
          </table>

          <h3 style="color: #374151; margin-top: 20px;">Στοιχεία Ανακαίνισης</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Εμβαδόν:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.area} τ.μ.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Μπάνια:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.bathrooms}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Κουζίνες:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.kitchens}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Δωμάτια:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.rooms}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Έτος Κατασκευής:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.buildingAge}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Κατηγορίες:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${selectedCategories}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Ποιότητα:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${qualityLabels[data.renovationQuality]?.el || data.renovationQuality}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Τύπος Πισίνας:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${poolTypeLabels[data.poolType]?.el || data.poolType}</td>
            </tr>
            ${data.poolType !== "none" ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Μέγεθος Πισίνας:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.poolSize} τ.μ.</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Εκτιμώμενο Κόστος Ανακαίνισης:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #2563eb; font-weight: bold;">${data.renovationCost ? `${data.renovationCost}€` : "Δεν υπολογίστηκε"}</td>
            </tr>
          </table>

          <h3 style="color: #374151; margin-top: 20px;">Πόρτες & Παράθυρα</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Παράθυρα:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.windows}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Μπαλκονόπορτες:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.balconyDoors}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Εσωτερικές Πόρτες:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.interiorDoors}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Κεντρική Είσοδος:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.mainEntrance}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Υλικό:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${materialLabels[data.material]?.el || data.material}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Ποιότητα Κουφωμάτων:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${qualityLabels[data.windowsQuality]?.el || data.windowsQuality}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Εκτιμώμενο Κόστος Κουφωμάτων:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #2563eb; font-weight: bold;">${data.windowsCost ? `${data.windowsCost}€` : "Δεν υπολογίστηκε"}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background-color: #eff6ff; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">Συνολικό Εκτιμώμενο Κόστος</h3>
            <p style="font-size: 28px; font-weight: bold; color: #2563eb; margin: 0;">${data.totalCost}€</p>
          </div>

          <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">
            Αυτό το email στάλθηκε αυτόματα από τον Υπολογιστή Κόστους Ανακαίνισης της ιστοσελίδας Faiacon.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(error.message)
    }

    return {
      success: true,
      message: data.isEnglish 
        ? "Your request has been sent successfully! We will contact you soon." 
        : "Η αίτησή σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.",
    }
  } catch (error) {
    console.error("Failed to send calculator email:", error)
    return {
      success: false,
      message: data.isEnglish 
        ? "An error occurred while sending your request. Please try again or contact us at 6987797679." 
        : "Παρουσιάστηκε σφάλμα κατά την αποστολή της αίτησης. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας στο 6987797679.",
    }
  }
}
