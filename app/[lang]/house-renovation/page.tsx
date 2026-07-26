import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"
import { permanentRedirect } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  if (isEnglish) {
    return {
      title: "Renovations in Corfu",
      description: "Professional home, villa and property renovations across Corfu.",
      alternates: {
        canonical: `${SITE_URL}/en/renovations-corfu`,
        languages: {
          "el-GR": `${SITE_URL}/el/house-renovation`,
          "en-US": `${SITE_URL}/en/renovations-corfu`,
          "x-default": `${SITE_URL}/el/house-renovation`,
        },
      },
    }
  }

  const title = "Ανακαίνιση Σπιτιού στην Κέρκυρα"
  const description =
    "Ολική ανακαίνιση σπιτιού και βίλας στην Κέρκυρα: κουζίνα, μπάνιο, στέγη, μόνωση και εξωτερικές εργασίες. Ζητήστε δωρεάν αρχική εκτίμηση."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/house-renovation`,
      type: "website",
      locale: "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: {
      canonical: `${SITE_URL}/el/house-renovation`,
      languages: {
        "el-GR": `${SITE_URL}/el/house-renovation`,
        "en-US": `${SITE_URL}/en/renovations-corfu`,
        "x-default": `${SITE_URL}/el/house-renovation`,
      },
    },
  }
}

export default async function HouseRenovation({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (lang === "en") {
    permanentRedirect("/en/renovations-corfu")
  }
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: "Αρχική", url: `${SITE_URL}/el` },
          { name: "Ανακαίνιση Σπιτιού", url: `${SITE_URL}/el/house-renovation` },
        ]} 
      />
      <HouseRenovationPage lang={lang} />
    </SiteLayout>
  )
}
