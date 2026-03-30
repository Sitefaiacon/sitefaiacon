import SiteLayout from "../../components/site-layout"
import CostCalculatorPage from "../../components/cost-calculator-page"
import type { Metadata } from "next"
import { BreadcrumbSchema, HowToSchema, OfferCatalogSchema, ReviewSchema, PriceRangeSchema } from "../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Renovation Cost Calculator Corfu | Free Online Estimate"
      : "Υπολογιστής Κόστους Ανακαίνισης | Δωρεάν Online Εκτίμηση - ΦαιάCon",
    description: isEnglish
      ? "Free renovation cost calculator for Corfu. Calculate your renovation Corfu costs online - bathroom, kitchen, flooring, painting, windows. Instant estimate. FaiaCon - 35+ years experience."
      : "Δωρεάν υπολογιστής κόστους ανακαίνισης σπιτιού. Υπολογίστε online το κόστος για μπάνιο, κουζίνα, δάπεδα, βαφή, αλλαγή κουφωμάτων. Άμεση εκτίμηση χωρίς δεσμεύσεις.",
    keywords: isEnglish
      ? [
          "renovation cost calculator Corfu",
          "renovation Corfu cost",
          "house renovation estimate Corfu",
          "bathroom renovation cost Corfu",
          "kitchen renovation cost Corfu",
          "renovation prices Corfu Greece",
          "free renovation estimate Corfu",
          "online renovation calculator",
          "FaiaCon calculator",
        ]
      : [
          "υπολογιστής κόστους ανακαίνισης",
          "εκτίμηση κόστους ανακαίνισης",
          "κόστος ανακαίνισης σπιτιού",
          "πόσο κοστίζει ανακαίνιση",
          "τιμές ανακαίνισης",
          "κόστος ανακαίνισης μπάνιου",
          "κόστος ανακαίνισης κουζίνας",
          "κόστος αλλαγής δαπέδων",
          "κόστος βαφής σπιτιού",
          "κόστος αλλαγής κουφωμάτων",
          "online υπολογισμός ανακαίνισης",
          "δωρεάν εκτίμηση ανακαίνισης",
          "calculator ανακαίνισης",
        ],
    openGraph: {
      title: isEnglish
        ? "Renovation Cost Calculator Corfu | Free Online Estimate"
        : "Υπολογιστής Κόστους Ανακαίνισης | Δωρεάν Online Εκτίμηση",
      description: isEnglish
        ? "Calculate your renovation Corfu cost for free. Bathroom, kitchen, flooring, windows. Instant online estimate."
        : "Υπολογίστε δωρεάν και online το κόστος ανακαίνισης του σπιτιού σας. Μπάνιο, κουζίνα, δάπεδα, κουφώματα.",
      url: `https://faiacon.gr/${lang}/cost-calculator`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          width: 1200,
          height: 630,
          alt: isEnglish ? "Renovation Cost Calculator Corfu - FaiaCon" : "Υπολογιστής Κόστους Ανακαίνισης ΦαιάCon",
        },
      ],
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/cost-calculator`,
      languages: {
        "el-GR": "https://faiacon.gr/el/cost-calculator",
        "en-US": "https://faiacon.gr/en/cost-calculator",
      },
    },
  }
}

export default async function CostCalculator({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <HowToSchema isEnglish={isEnglish} />
      <OfferCatalogSchema isEnglish={isEnglish} />
      <ReviewSchema />
      <PriceRangeSchema />
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Cost Calculator" : "Υπολογιστής Κόστους", url: `https://faiacon.gr/${lang}/cost-calculator` },
        ]} 
      />
      <CostCalculatorPage lang={lang} />
    </SiteLayout>
  )
}
