import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Admin email where quote requests will be sent
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@sitefaiacon.gr"

interface EstimateRequest {
  email: string
  name: string
  phone?: string
  renovationCost: string
  windowsCost: string
  totalCost: string
  estimateDetails: {
    area: string
    bathrooms: number
    kitchens: number
    rooms: number
    buildingAge: number
    poolType: string
    poolSize: number
    categories: Record<string, boolean>
    renovationQuality: string
    material: string
    windowsQuality: string
    windows: number
    balconyDoors: number
    interiorDoors: number
    mainEntrance: number
  }
}

export async function POST(request: Request) {
  try {
    const body: EstimateRequest = await request.json()

    const { email, name, phone, renovationCost, windowsCost, totalCost, estimateDetails } = body

    // Get selected categories
    const selectedCategories = Object.entries(estimateDetails.categories)
      .filter(([, isSelected]) => isSelected)
      .map(([key]) => {
        const labels: Record<string, string> = {
          bathroom: "Μπάνιο",
          kitchen: "Κουζίνα",
          flooring: "Δάπεδα",
          electrical: "Ηλεκτρολογικά",
          structural: "Δομικά",
          painting: "Βαφή",
        }
        return labels[key] || key
      })

    // Create email content for ADMIN
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
            .header { background: linear-gradient(135deg, #2B4B8C 0%, #1a2f5f 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 5px 0 0 0; opacity: 0.9; font-size: 14px; }
            .content { background: white; padding: 30px; }
            .client-info { background: #fef3c7; border: 1px solid #f59e0b; padding: 20px; border-radius: 8px; margin-bottom: 25px; }
            .client-info h2 { margin: 0 0 15px 0; color: #92400e; font-size: 18px; }
            .client-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #fde68a; }
            .client-label { font-weight: 600; color: #92400e; }
            .client-value { color: #78350f; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 16px; font-weight: 600; color: #2B4B8C; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
            .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
            .detail-label { font-weight: 500; color: #666; }
            .detail-value { text-align: right; color: #333; }
            .cost-section { background: #dcfce7; border: 1px solid #22c55e; padding: 15px; border-radius: 6px; margin: 15px 0; }
            .cost-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 16px; }
            .cost-total { font-size: 20px; font-weight: bold; color: #166534; display: flex; justify-content: space-between; padding: 15px 0; border-top: 2px solid #22c55e; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 8px; margin-bottom: 8px; }
            .category-badge { display: inline-block; background: #f3e8ff; color: #7c3aed; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 8px; margin-bottom: 8px; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #666; font-size: 12px; border-radius: 0 0 8px 8px; }
            .reply-btn { display: inline-block; background: #2B4B8C; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Νέο Αίτημα Προσφοράς</h1>
              <p>Υπολογιστής Ανακαίνισης - ${new Date().toLocaleString("el-GR")}</p>
            </div>
            
            <div class="content">
              <div class="client-info">
                <h2>Στοιχεία Πελάτη</h2>
                <div class="client-row">
                  <span class="client-label">Όνομα:</span>
                  <span class="client-value">${name}</span>
                </div>
                <div class="client-row">
                  <span class="client-label">Email:</span>
                  <span class="client-value"><a href="mailto:${email}">${email}</a></span>
                </div>
                ${phone ? `
                <div class="client-row">
                  <span class="client-label">Τηλέφωνο:</span>
                  <span class="client-value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                ` : ""}
              </div>

              <center>
                <a href="mailto:${email}?subject=Η Προσφορά σας από ΦαιάCon&body=Αγαπητέ/ή ${name},%0D%0A%0D%0AΣας ευχαριστούμε για το ενδιαφέρον σας.%0D%0A%0D%0AΗ προσφορά μας για το έργο σας είναι:%0D%0A%0D%0A" class="reply-btn">Απάντηση στον Πελάτη</a>
              </center>

              ${renovationCost && renovationCost !== "0.00" ? `
              <div class="section">
                <div class="section-title">Γενική Ανακαίνιση</div>
                <div class="detail-row">
                  <span class="detail-label">Εμβαδόν (τ.μ.):</span>
                  <span class="detail-value">${estimateDetails.area} τ.μ.</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Μπάνια:</span>
                  <span class="detail-value">${estimateDetails.bathrooms}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Κουζίνες:</span>
                  <span class="detail-value">${estimateDetails.kitchens}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Δωμάτια:</span>
                  <span class="detail-value">${estimateDetails.rooms}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Έτος Κατασκευής:</span>
                  <span class="detail-value">${estimateDetails.buildingAge}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ποιότητα:</span>
                  <span class="detail-value"><span class="badge">${estimateDetails.renovationQuality.toUpperCase()}</span></span>
                </div>
                ${selectedCategories.length > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Κατηγορίες:</span>
                  <span class="detail-value">${selectedCategories.map(c => `<span class="category-badge">${c}</span>`).join("")}</span>
                </div>
                ` : ""}
                ${estimateDetails.poolType !== "none" ? `
                <div class="detail-row">
                  <span class="detail-label">Πισίνα (${estimateDetails.poolType}):</span>
                  <span class="detail-value">${estimateDetails.poolSize} τ.μ.</span>
                </div>
                ` : ""}
                <div class="cost-section">
                  <div class="cost-row">
                    <span>Υπολογισμένο Κόστος Ανακαίνισης:</span>
                    <strong>€${renovationCost}</strong>
                  </div>
                </div>
              </div>
              ` : ""}

              ${windowsCost && windowsCost !== "0.00" ? `
              <div class="section">
                <div class="section-title">Πόρτες & Παράθυρα</div>
                <div class="detail-row">
                  <span class="detail-label">Υλικό:</span>
                  <span class="detail-value">${estimateDetails.material.toUpperCase()}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ποιότητα:</span>
                  <span class="detail-value"><span class="badge">${estimateDetails.windowsQuality.toUpperCase()}</span></span>
                </div>
                ${estimateDetails.windows > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Παράθυρα:</span>
                  <span class="detail-value">${estimateDetails.windows}</span>
                </div>
                ` : ""}
                ${estimateDetails.balconyDoors > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Μπαλκονόπορτες:</span>
                  <span class="detail-value">${estimateDetails.balconyDoors}</span>
                </div>
                ` : ""}
                ${estimateDetails.interiorDoors > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Εσωτερικές Πόρτες:</span>
                  <span class="detail-value">${estimateDetails.interiorDoors}</span>
                </div>
                ` : ""}
                ${estimateDetails.mainEntrance > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Κεντρική Είσοδος:</span>
                  <span class="detail-value">${estimateDetails.mainEntrance}</span>
                </div>
                ` : ""}
                <div class="cost-section">
                  <div class="cost-row">
                    <span>Υπολογισμένο Κόστος Κουφωμάτων:</span>
                    <strong>€${windowsCost}</strong>
                  </div>
                </div>
              </div>
              ` : ""}

              <div class="section">
                <div class="cost-section">
                  <div class="cost-total">
                    <span>ΣΥΝΟΛΙΚΟ ΥΠΟΛΟΓΙΣΜΕΝΟ ΚΟΣΤΟΣ:</span>
                    <span>€${totalCost}</span>
                  </div>
                </div>
                <p style="font-size: 12px; color: #666; text-align: center;">
                  Αυτό είναι το αυτόματα υπολογισμένο κόστος. Παρακαλώ αξιολογήστε και στείλτε την τελική προσφορά στον πελάτη.
                </p>
              </div>
            </div>

            <div class="footer">
              <p>ΦαιάCon - Σύστημα Αιτημάτων Προσφορών</p>
            </div>
          </div>
        </body>
      </html>
    `

    const response = await resend.emails.send({
      from: "ΦαιάCon Calculator <noreply@sitefaiacon.gr>",
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Νέο Αίτημα Προσφοράς από ${name} - €${totalCost}`,
      html: adminEmailHtml,
    })

    if (response.error) {
      return Response.json({ error: response.error }, { status: 400 })
    }

    return Response.json({ success: true, id: response.data?.id })
  } catch (error) {
    console.error("Email send error:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}
