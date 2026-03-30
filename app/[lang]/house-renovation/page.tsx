import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import type { Metadata } from "next"
import { HowToSchema, BreadcrumbSchema } from "../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "House Renovation Corfu | Complete Renovation Services in Corfu Greece"
      : "Ανακαίνιση Σπιτιού Κέρκυρα | Υπολογιστής Κόστους Ανακαίνισης",
    description: isEnglish
      ? "Expert house renovation Corfu services. FaiaCon provides complete renovation in Corfu including bathroom, kitchen, flooring, electrical work. Best renovation company in Corfu with free cost calculator. 35+ years experience."
      : "Ανακαίνιση σπιτιού στην Κέρκυρα. Δωρεάν υπολογιστής κόστους ανακαίνισης για μπάνιο, κουζίνα, δάπεδα, ηλεκτρολογικά. Εκτίμηση κόστους online. ΦαιάCon - 35+ χρόνια εμπειρίας.",
    keywords: isEnglish
      ? [
          "renovation corfu",
          "house renovation corfu",
          "home renovation corfu",
          "renovation in corfu",
          "corfu renovation services",
          "property renovation corfu greece",
          "bathroom renovation corfu",
          "kitchen renovation corfu",
          "villa renovation corfu",
          "renovation cost corfu",
          "renovation company corfu",
          "building contractor corfu",
          "flooring installation corfu",
          "electrical renovation corfu",
          "painting services corfu",
          "complete renovation corfu",
        ]
      : [
          "ανακαίνιση σπιτιού Κέρκυρα",
          "κόστος ανακαίνισης σπιτιού",
          "υπολογισμός κόστους ανακαίνισης",
          "ανακαίνιση μπάνιου Κέρκυρα",
          "ανακαίνιση κουζίνας Κέρκυρα",
          "θερμοπρόσοψη Κέρκυρα",
          "αλλαγή δαπέδων κόστος",
          "ηλεκτρολογικές εργασίες κόστος",
          "βαφή σπιτιού Κέρκυρα",
          "εκτίμηση ανακαίνισης online",
        ],
    openGraph: {
      title: isEnglish
        ? "Renovation Corfu | Professional House Renovation - FaiaCon"
        : "Ανακαίνιση Σπιτιού Κέρκυρα | Υπολογιστής Κόστους - ΦαιάCon",
      description: isEnglish
        ? "Expert renovation Corfu services. Bathroom, kitchen, flooring, electrical renovation. Free online cost calculator. 35+ years experience."
        : "Υπολογίστε δωρεάν το κόστος ανακαίνισης του σπιτιού σας. Μπάνιο, κουζίνα, δάπεδα, θερμοπρόσοψη. Άμεση εκτίμηση online.",
      url: `https://faiacon.gr/${lang}/house-renovation`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: isEnglish ? [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          width: 1200,
          height: 630,
          alt: "Renovation Corfu - House Renovation Services",
        },
      ] : undefined,
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/house-renovation`,
      languages: {
        "el-GR": "https://faiacon.gr/el/house-renovation",
        "en-US": "https://faiacon.gr/en/house-renovation",
      },
    },
  }
}

export default async function HouseRenovation({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <HowToSchema isEnglish={isEnglish} />
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού", url: `https://faiacon.gr/${lang}/house-renovation` },
        ]} 
      />
      <HouseRenovationPage lang={lang} />
    </SiteLayout>
  )
}
