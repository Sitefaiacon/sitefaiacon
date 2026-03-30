import SiteLayout from "../../components/site-layout"
import HouseConstructionPage from "../../components/house-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "House Construction Corfu | Building Contractor & New Home Construction"
      : "Κατασκευή Σπιτιού Κέρκυρα | Οικοδομικές Εργασίες - ΦαιάCon",
    description: isEnglish
      ? "Professional house construction in Corfu Greece. New home building, villa construction, renovation Corfu services. 35+ years experience. Quality materials, modern techniques. Free estimate."
      : "Κατασκευή σπιτιού στην Κέρκυρα με 35+ χρόνια εμπειρίας. Από τα θεμέλια μέχρι την παράδοση. Σύγχρονες τεχνικές, ποιοτικά υλικά, εγγύηση ποιότητας. Δωρεάν εκτίμηση κόστους.",
    keywords: isEnglish
      ? [
          "house construction Corfu",
          "building contractor Corfu",
          "new home construction Corfu",
          "villa construction Corfu",
          "renovation Corfu",
          "construction company Corfu Greece",
          "home builder Corfu",
          "FaiaCon construction",
        ]
      : [
          "κατασκευή σπιτιού Κέρκυρα",
          "οικοδομικές εργασίες Κέρκυρα",
          "κόστος κατασκευής σπιτιού",
          "κτίσιμο σπιτιού Κέρκυρα",
          "νέα κατασκευή σπιτιού",
          "τεχνική εταιρεία Κέρκυρα",
          "εργολάβος Κέρκυρα",
        ],
    openGraph: {
      title: isEnglish
        ? "House Construction Corfu | FaiaCon Building Contractor"
        : "Κατασκευή Σπιτιού Κέρκυρα - ΦαιάCon",
      description: isEnglish
        ? "Build your dream home in Corfu Greece. Professional house construction and renovation Corfu services. 35+ years experience."
        : "Κατασκευάζουμε το σπίτι των ονείρων σας στην Κέρκυρα. 35+ χρόνια εμπειρίας, σύγχρονες τεχνικές.",
      url: `https://faiacon.gr/${lang}/house-construction`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/house-construction`,
      languages: {
        "el-GR": "https://faiacon.gr/el/house-construction",
        "en-US": "https://faiacon.gr/en/house-construction",
      },
    },
  }
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
