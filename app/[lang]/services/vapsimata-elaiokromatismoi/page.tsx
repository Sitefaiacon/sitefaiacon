import SiteLayout from "../../../components/site-layout"
import VapsimatаElaiokromatismoiPage from "../../../components/vapsimata-elaiokromatismoi-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  const title = isEnglish ? "Painting & Decorating Services in Corfu" : "Βαψίματα & Ελαιοχρωματισμοί στην Κέρκυρα"
  const description = isEnglish
    ? "Interior and exterior painting in Corfu for homes, villas, hotels and tourist properties, with careful preparation and durable finishes."
    : "Εσωτερικά και εξωτερικά βαψίματα στην Κέρκυρα για σπίτια, βίλες, ξενοδοχεία και τουριστικά ακίνητα, με σωστή προετοιμασία και ανθεκτικό φινίρισμα."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/services/vapsimata-elaiokromatismoi`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "services/vapsimata-elaiokromatismoi"),
  }
}

export default async function VapsimatаRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `${SITE_URL}/${lang}` },
          {
            name: isEnglish ? "Painting & Decorating" : "Βαψίματα & Ελαιοχρωματισμοί",
            url: `${SITE_URL}/${lang}/services/vapsimata-elaiokromatismoi`,
          },
        ]}
      />
      <VapsimatаElaiokromatismoiPage />
    </SiteLayout>
  )
}
