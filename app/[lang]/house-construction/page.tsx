import SiteLayout from "../../components/site-layout"
import HouseConstructionPage from "../../components/house-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Κατασκευή Σπιτιού Κέρκυρα | Οικοδομικές Εργασίες - ΦαιάCon",
  description: "Κατασκευή σπιτιού στην Κέρκυρα με 35+ χρόνια εμπειρίας. Από τα θεμέλια μέχρι την παράδοση. Σύγχρονες τεχνικές, ποιοτικά υλικά, εγγύηση ποιότητας. Δωρεάν εκτίμηση κόστους.",
  keywords: [
    "κατασκευή σπιτιού Κέρκυρα",
    "οικοδομικές εργασίες Κέρκυρα",
    "κόστος κατασκευής σπιτιού",
    "κτίσιμο σπιτιού Κέρκυρα",
    "νέα κατασκευή σπιτιού",
    "τεχνική εταιρεία Κέρκυρα",
    "εργολάβος Κέρκυρα",
  ],
  openGraph: {
    title: "Κατασκευή Σπιτιού Κέρκυρα - ΦαιάCon",
    description: "Κατασκευάζουμε το σπίτι των ονείρων σας στην Κέρκυρα. 35+ χρόνια εμπειρίας, σύγχρονες τεχνικές.",
    url: "https://faiacon.gr/el/house-construction",
    type: "website",
  },
  alternates: {
    canonical: "https://faiacon.gr/el/house-construction",
    languages: {
      "el-GR": "https://faiacon.gr/el/house-construction",
      "en-US": "https://faiacon.gr/en/house-construction",
    },
  },
}

export default async function HouseConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "House Construction" : "Κατασκευή Σπιτιού", url: `https://faiacon.gr/${lang}/house-construction` },
        ]} 
      />
      <HouseConstructionPage lang={lang} />
    </SiteLayout>
  )
}
