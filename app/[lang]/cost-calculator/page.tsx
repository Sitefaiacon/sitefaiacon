// Cost calculator page with bilingual metadata
import SiteLayout from "../../components/site-layout"
import CostCalculatorPage from "../../components/cost-calculator-page"
import type { Metadata } from "next"
import { BreadcrumbSchema, HowToSchema, PriceRangeSchema } from "../../components/structured-data"
import { localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish 
      ? "Renovation Cost Calculator for Corfu Properties"
      : "Υπολογιστής Κόστους Ανακαίνισης",
    description: isEnglish
      ? "Free renovation cost calculator for homes and properties in Corfu. Estimate costs for kitchens, bathrooms, flooring, and complete renovations online."
      : "Δωρεάν υπολογιστής κόστους ανακαίνισης σπιτιού. Υπολογίστε online το κόστος για μπάνιο, κουζίνα, δάπεδα, βαφή, αλλαγή κουφωμάτων. Άμεση εκτίμηση χωρίς δεσμεύσεις.",
    keywords: isEnglish
      ? [
          "renovation cost calculator",
          "renovation estimate",
          "renovation cost corfu",
          "property renovation cost",
          "home renovation calculator",
          "villa renovation cost",
          "renovation price estimate",
          "online renovation calculator",
          "free renovation estimate",
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
        ? "Renovation Cost Calculator | Free Online Estimate | Faiacon"
        : "Υπολογιστής Κόστους Ανακαίνισης | Δωρεάν Online Εκτίμηση",
      description: isEnglish
        ? "Calculate renovation costs for homes and properties in Corfu. Free online estimate tool for your renovation project."
        : "Υπολογίστε δωρεάν και online το κόστος ανακαίνισης του σπιτιού σας. Μπάνιο, κουζίνα, δάπεδα, κουφώματα.",
      url: `${SITE_URL}/${lang}/cost-calculator`,
      type: "website",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          width: 1200,
          height: 630,
          alt: isEnglish ? "Renovation Cost Calculator" : "Υπολογιστής Κόστους Ανακαίνισης ΦαιάCon",
        },
      ],
    },
    alternates: localizedAlternates(lang, "cost-calculator"),
  }
}

export default async function CostCalculator({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <HowToSchema isEnglish={isEnglish} />
      <PriceRangeSchema />
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Cost Calculator" : "Υπολογιστής Κόστους", url: `${SITE_URL}/${lang}/cost-calculator` },
        ]} 
      />
      <CostCalculatorPage lang={lang} />
    </SiteLayout>
  )
}
