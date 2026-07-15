import SiteLayout from "../../components/site-layout"
import PoolConstructionPage from "../../components/pool-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  const title = isEnglish ? "Swimming Pool Construction in Corfu" : "Κατασκευή Πισίνας στην Κέρκυρα"
  const description = isEnglish
    ? "Swimming pool design and construction in Corfu, including concrete and liner pools, filtration, salt electrolysis and equipment installation."
    : "Μελέτη και κατασκευή πισίνας στην Κέρκυρα: πισίνες μπετόν και liner, φίλτρανση, ηλεκτρόλυση άλατος και πλήρης εγκατάσταση εξοπλισμού."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/pool-construction`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "pool-construction"),
  }
}

export default async function PoolConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Pool Construction" : "Κατασκευή Πισίνας", url: `${SITE_URL}/${lang}/pool-construction` },
        ]} 
      />
      <PoolConstructionPage lang={lang} />
    </SiteLayout>
  )
}
