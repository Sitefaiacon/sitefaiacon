import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"
import type { Metadata } from "next"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"
  const title = isEnglish
    ? "Faiacon | Construction & Renovations in Corfu"
    : "ΦαιάCon | Κατασκευές & Ανακαινίσεις στην Κέρκυρα"
  const description = isEnglish
    ? "Construction, renovation and property services across Corfu."
    : "Κατασκευές, ανακαινίσεις και αξιοποίηση ακινήτων σε όλη την Κέρκυρα."

  return {
    title: isEnglish
      ? "Construction & Renovation Company in Corfu"
      : "Κατασκευαστική Εταιρεία στην Κέρκυρα",
    description: isEnglish
      ? "Construction and renovation company in Corfu for homes, villas, hotels and pools. Local project management and free initial consultation."
      : "Κατασκευές και ανακαινίσεις στην Κέρκυρα για σπίτια, βίλες, ξενοδοχεία και πισίνες. Τοπική εμπειρία από το 1990 και δωρεάν αρχική εκτίμηση.",
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [
        {
          ...DEFAULT_SOCIAL_IMAGE,
          alt: isEnglish
            ? "Stone villa project in Corfu by Faiacon"
            : DEFAULT_SOCIAL_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_SOCIAL_IMAGE.url],
    },
    alternates: localizedAlternates(lang),
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <HomePage lang={lang} />
    </SiteLayout>
  )
}
