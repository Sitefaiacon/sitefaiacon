import SiteLayout from "../../components/site-layout"
import CostCalculatorPage from "../../components/cost-calculator-page"
import type { Metadata } from "next"
import { BreadcrumbSchema, HowToSchema, OfferCatalogSchema, ReviewSchema, PriceRangeSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Υπολογιστής Κόστους Ανακαίνισης | Δωρεάν Online Εκτίμηση - ΦαιάCon",
  description: "Δωρεάν υπολογιστής κόστους ανακαίνισης σπιτιού. Υπολογίστε online το κόστος για μπάνιο, κουζίνα, δάπεδα, βαφή, αλλαγή κουφωμάτων. Άμεση εκτίμηση χωρίς δεσμεύσεις.",
  keywords: [
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
    title: "Υπολογιστής Κόστους Ανακαίνισης | Δωρεάν Online Εκτίμηση",
    description: "Υπολογίστε δωρεάν και online το κόστος ανακαίνισης του σπιτιού σας. Μπάνιο, κουζίνα, δάπεδα, κουφώματα.",
    url: "https://faiacon.gr/el/cost-calculator",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
        width: 1200,
        height: 630,
        alt: "Υπολογιστής Κόστους Ανακαίνισης ΦαιάCon",
      },
    ],
  },
  alternates: {
    canonical: "https://faiacon.gr/el/cost-calculator",
    languages: {
      "el-GR": "https://faiacon.gr/el/cost-calculator",
      "en-US": "https://faiacon.gr/en/cost-calculator",
    },
  },
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
