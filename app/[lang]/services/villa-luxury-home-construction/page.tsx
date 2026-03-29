import SiteLayout from "../../../components/site-layout"
import VillaLuxuryConstructionPage from "../../../components/villa-luxury-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Villa & Luxury Home Construction Corfu | Premium Building Services | Faiacon"
      : "Κατασκευή Βιλών & Πολυτελών Κατοικιών | ΦαιάCon",
    description: isEnglish
      ? "Professional villa and luxury home construction in Corfu. Custom-designed residences with architectural excellence, premium materials, and flawless execution from concept to completion."
      : "Εξατομικευμένη κατασκευή πολυτελών βιλών στην Κέρκυρα. Αρχιτεκτονική αριστεία, πολυτελή υλικά και άψογη εκτέλεση από την ιδέα έως την παράδοση.",
    keywords: isEnglish
      ? [
          "villa construction corfu",
          "luxury home building corfu",
          "custom villa corfu",
          "villa contractor corfu",
          "residential construction corfu",
          "luxury building corfu",
          "villa design and build",
        ]
      : [
          "κατασκευή βιλών",
          "πολυτελής κατοικία",
          "luxury homes Corfu",
          "εξατομικευμένη κατασκευή",
          "αρχιτεκτονική σχεδίαση βίλας",
        ],
    openGraph: {
      title: isEnglish
        ? "Villa & Luxury Home Construction Corfu"
        : "Κατασκευή Βιλών & Πολυτελών Κατοικιών",
      description: isEnglish
        ? "Professional villa construction with architectural excellence and premium finishes in Corfu."
        : "Εξατομικευμένη κατασκευή πολυτελών βιλών στην Κέρκυρα με αρχιτεκτονική αριστεία.",
      url: `https://faiacon.gr/${lang}/services/villa-luxury-home-construction`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/services/villa-luxury-home-construction`,
      languages: {
        "en-US": "https://faiacon.gr/en/services/villa-luxury-home-construction",
        "el-GR": "https://faiacon.gr/el/services/villa-luxury-home-construction",
      },
    },
  }
}

export default async function VillaLuxuryConstructionRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Villa & Luxury Home Construction" : "Κατασκευή Βιλών & Πολυτελών Κατοικιών", url: `https://faiacon.gr/${lang}/services/villa-luxury-home-construction` },
        ]} 
      />
      <VillaLuxuryConstructionPage />
    </SiteLayout>
  )
}
