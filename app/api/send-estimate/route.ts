import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
            .header { background: linear-gradient(135deg, #2B4B8C 0%, #1a2f5f 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .header p { margin: 5px 0 0 0; opacity: 0.9; }
            .content { background: white; padding: 30px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: 600; color: #2B4B8C; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
            .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
            .detail-label { font-weight: 500; color: #666; }
            .detail-value { text-align: right; color: #333; }
            .cost-section { background: #f0f4ff; padding: 15px; border-radius: 6px; margin: 15px 0; }
            .cost-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 16px; }
            .cost-total { font-size: 24px; font-weight: bold; color: #2B4B8C; display: flex; justify-content: space-between; padding: 15px 0; border-top: 2px solid #2B4B8C; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #666; font-size: 12px; border-radius: 0 0 8px 8px; }
            .cta-button { display: inline-block; background: #2B4B8C; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 8px; margin-bottom: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ΦαιάCon Estimate</h1>
              <p>Your Renovation Cost Estimate</p>
            </div>
            
            <div class="content">
              <p>Hello <strong>${name}</strong>,</p>
              <p>Thank you for using our renovation calculator. Here's your detailed cost estimate.</p>

              ${renovationCost && renovationCost !== "0.00" ? `
              <div class="section">
                <div class="section-title">General Renovation Estimate</div>
                <div class="detail-row">
                  <span class="detail-label">Area (m²):</span>
                  <span class="detail-value">${estimateDetails.area}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Bathrooms:</span>
                  <span class="detail-value">${estimateDetails.bathrooms}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Kitchens:</span>
                  <span class="detail-value">${estimateDetails.kitchens}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Rooms:</span>
                  <span class="detail-value">${estimateDetails.rooms}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Building Year:</span>
                  <span class="detail-value">${estimateDetails.buildingAge}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Quality Level:</span>
                  <span class="detail-value"><span class="badge">${estimateDetails.renovationQuality.toUpperCase()}</span></span>
                </div>
                ${estimateDetails.poolType !== "none" ? `
                <div class="detail-row">
                  <span class="detail-label">Pool Type (${estimateDetails.poolType}):</span>
                  <span class="detail-value">${estimateDetails.poolSize} m²</span>
                </div>
                ` : ""}
                <div class="cost-section">
                  <div class="cost-row">
                    <span>Estimated Cost:</span>
                    <strong>€${renovationCost}</strong>
                  </div>
                </div>
              </div>
              ` : ""}

              ${windowsCost && windowsCost !== "0.00" ? `
              <div class="section">
                <div class="section-title">Doors & Windows Estimate</div>
                <div class="detail-row">
                  <span class="detail-label">Material:</span>
                  <span class="detail-value">${estimateDetails.material.toUpperCase()}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Quality:</span>
                  <span class="detail-value"><span class="badge">${estimateDetails.windowsQuality.toUpperCase()}</span></span>
                </div>
                ${estimateDetails.windows > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Windows:</span>
                  <span class="detail-value">${estimateDetails.windows}</span>
                </div>
                ` : ""}
                ${estimateDetails.balconyDoors > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Balcony Doors:</span>
                  <span class="detail-value">${estimateDetails.balconyDoors}</span>
                </div>
                ` : ""}
                ${estimateDetails.interiorDoors > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Interior Doors:</span>
                  <span class="detail-value">${estimateDetails.interiorDoors}</span>
                </div>
                ` : ""}
                ${estimateDetails.mainEntrance > 0 ? `
                <div class="detail-row">
                  <span class="detail-label">Main Entrance:</span>
                  <span class="detail-value">${estimateDetails.mainEntrance}</span>
                </div>
                ` : ""}
                <div class="cost-section">
                  <div class="cost-row">
                    <span>Estimated Cost:</span>
                    <strong>€${windowsCost}</strong>
                  </div>
                </div>
              </div>
              ` : ""}

              <div class="section">
                <div class="cost-section">
                  <div class="cost-total">
                    <span>TOTAL ESTIMATED COST:</span>
                    <span style="color: #2B4B8C;">€${totalCost}</span>
                  </div>
                </div>
              </div>

              <p>This estimate is based on the information you provided in our calculator. For an accurate quote, please contact our team for a site assessment.</p>

              <center>
                <a href="https://sitefaiacon.gr" class="cta-button">Contact ΦαιάCon</a>
              </center>

              ${phone ? `<p><strong>Your Phone:</strong> ${phone}</p>` : ""}
              <p><strong>Estimate Created:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <div class="footer">
              <p>ΦαιάCon - Professional Construction & Renovation Services in Corfu</p>
              <p>This is an automated estimate. Please contact us for a detailed consultation.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const response = await resend.emails.send({
      from: "ΦαιάCon <noreply@sitefaiacon.gr>",
      to: email,
      subject: `Your Renovation Estimate from ΦαιάCon - €${totalCost}`,
      html: emailHtml,
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
