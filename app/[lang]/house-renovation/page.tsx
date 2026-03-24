import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import type { Metadata } from "next"
import { HowToSchema, BreadcrumbSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Ανακαίνιση Σπιτιού Κέρκυρα | Υπολογιστής Κόστους Ανακαίνισης",
  description: "Ανακαίνιση σπιτιού στην Κέρκυρα. Δωρεάν υπολογιστής κόστους ανακαίνισης για μπάνιο, κουζίνα, δάπεδα, ηλεκτρολογικά. Εκτίμηση κόστους online. ΦαιάCon - 35+ χρόνια εμπειρίας.",
  keywords: [
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
    title: "Ανακαίνιση Σπιτιού Κέρκυρα | Υπολογιστής Κόστους - ΦαιάCon",
    description: "Υπολογίστε δωρεάν το κόστος ανακαίνισης του σπιτιού σας. Μπάνιο, κουζίνα, δάπεδα, θερμοπρόσοψη. Άμεση εκτίμηση online.",
    url: "https://faiacon.gr/el/house-renovation",
    type: "website",
  },
  alternates: {
    canonical: "https://faiacon.gr/el/house-renovation",
    languages: {
      "el-GR": "https://faiacon.gr/el/house-renovation",
      "en-US": "https://faiacon.gr/en/house-renovation",
    },
  },
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
