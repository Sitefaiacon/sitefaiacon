import SiteLayout from "../../components/site-layout"
import OurProjectsPage from "../../components/our-projects-page"
import type { Metadata } from "next"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"
  const title = isEnglish ? "Construction & Renovation Projects in Corfu" : "Έργα Κατασκευής & Ανακαίνισης στην Κέρκυρα"
  const description = isEnglish
    ? "See completed Faiacon projects across Corfu, including homes, villas, roofs, façades, pools and hospitality properties."
    : "Δείτε ολοκληρωμένα έργα της ΦαιάCon στην Κέρκυρα: σπίτια, βίλες, στέγες, όψεις, πισίνες και τουριστικά ακίνητα."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/our-projects`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "our-projects"),
  }
}

export default async function OurProjects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <OurProjectsPage lang={lang} />
    </SiteLayout>
  )
}
