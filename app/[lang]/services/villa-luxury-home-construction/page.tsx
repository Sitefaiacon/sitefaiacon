import SiteLayout from "../../../components/site-layout"
import VillaLuxuryConstructionPage from "../../../components/villa-luxury-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export const metadata: Metadata = {
  title: "Κατασκευή Βιλών & Πολυτελών Κατοικιών | ΦαιάCon",
  description:
    "Εξατομικευμένη κατασκευή πολυτελών βιλών στην Κέρκυρα. Αρχιτεκτονική αριστεία, πολυτελή υλικά και άψογη εκτέλεση από την ιδέα έως την παράδοση.",
  keywords: [
    "κατασκευή βιλών",
    "πολυτελής κατοικία",
    "luxury homes Corfu",
    "εξατομικευμένη κατασκευή",
    "αρχιτεκτονική σχεδίαση βίλας",
  ],
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
