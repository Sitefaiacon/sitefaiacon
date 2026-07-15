import SiteLayout from "../../components/site-layout"
import HouseConstructionPage from "../../components/house-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "House Construction in Corfu"
      : "Κατασκευή Σπιτιού στην Κέρκυρα",
    description: isEnglish
      ? "Professional house construction services in Corfu. From foundation to finished home, we handle all aspects with 35+ years of local expertise. Modern techniques, quality materials."
      : "Κατασκευή σπιτιού στην Κέρκυρα με 35+ χρόνια εμπειρίας. Από τα θεμέλια μέχρι την παράδοση. Σύγχρονες τεχνικές, ποιοτικά υλικά, εγγύηση ποιότητας. Δωρεάν εκτίμηση κόστους.",
    keywords: isEnglish
      ? [
          "house construction corfu",
          "home building corfu",
          "new construction corfu",
          "house construction cost corfu",
          "building contractor corfu",
          "residential construction corfu",
          "construction company corfu",
          "faiacon construction",
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
        ? "House Construction in Corfu | Professional Building Services"
        : "Κατασκευή Σπιτιού Κέρκυρα - ΦαιάCon",
      description: isEnglish
        ? "Complete house construction services in Corfu with professional project management and quality materials."
        : "Κατασκευάζουμε το σπίτι των ονείρων σας στην Κέρκυρα. 35+ χρόνια εμπειρίας, σύγχρονες τεχνικές.",
      url: `${SITE_URL}/${lang}/house-construction`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "house-construction"),
  }
}

export default async function HouseConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "House Construction" : "Κατασκευή Σπιτιού", url: `${SITE_URL}/${lang}/house-construction` },
        ]} 
      />
      <HouseConstructionPage lang={lang} />
    </SiteLayout>
  )
}
