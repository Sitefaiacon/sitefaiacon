import SiteLayout from "../../components/site-layout"
import ListedHousesPage from "../../components/listed-houses-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  const title = isEnglish
    ? "Listed Building Restoration in Corfu"
    : "Αποκατάσταση Διατηρητέων Κτιρίων στην Κέρκυρα"
  const description = isEnglish
    ? "Restoration of listed, historic and traditional buildings in Corfu with respect for their architecture and appropriate modern reinforcement methods."
    : "Αποκατάσταση διατηρητέων, ιστορικών και παραδοσιακών κτιρίων στην Κέρκυρα, με σεβασμό στην αρχιτεκτονική τους και κατάλληλες σύγχρονες μεθόδους ενίσχυσης."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/listed-houses`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "listed-houses"),
  }
}

export default async function ListedHouses({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Listed Buildings" : "Διατηρητέα Κτίρια", url: `${SITE_URL}/${lang}/listed-houses` },
        ]} 
      />
      <ListedHousesPage lang={lang} />
    </SiteLayout>
  )
}
