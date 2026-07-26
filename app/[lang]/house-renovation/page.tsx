import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  const title = isEnglish ? "House Renovation in Corfu" : "Ανακαίνιση Σπιτιού στην Κέρκυρα"
  const description = isEnglish
    ? "Complete house and villa renovations in Corfu, including kitchens, bathrooms, roofs, insulation and exterior work. Request a free initial estimate."
    : "Ολική ανακαίνιση σπιτιού και βίλας στην Κέρκυρα: κουζίνα, μπάνιο, στέγη, μόνωση και εξωτερικές εργασίες. Ζητήστε δωρεάν αρχική εκτίμηση."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/house-renovation`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "house-renovation"),
  }
}

export default async function HouseRenovation({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού", url: `${SITE_URL}/${lang}/house-renovation` },
        ]} 
      />
      <HouseRenovationPage lang={lang} />
    </SiteLayout>
  )
}
