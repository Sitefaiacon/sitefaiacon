import SiteLayout from "../../components/site-layout"
import RenovationsCorfuPage from "../../components/renovations-corfu-page"
import type { Metadata } from "next"
import { BreadcrumbSchema, FAQSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Renovations Corfu | Villa, Home & Property Renovations in Corfu | Faiacon",
  description: "Faiacon provides villa, home and property renovations in Corfu, Greece. Renovation services for owners, investors and holiday rental properties with local expertise and professional project management.",
  keywords: [
    "renovations corfu",
    "home renovations corfu",
    "villa renovations corfu",
    "property renovation corfu",
    "renovation company corfu",
    "house renovation corfu",
    "building renovations corfu",
    "renovation contractors corfu",
  ],
  openGraph: {
    title: "Renovations Corfu | Villa, Home & Property Renovations | Faiacon",
    description: "Professional renovations for homes, villas and investment properties in Corfu with 35+ years of local expertise.",
    url: "https://faiacon.gr/en/renovations-corfu",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://faiacon.gr/en/renovations-corfu",
  },
}

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "el" },
  ]
}

export default async function RenovationsCorfu({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  
  // Only show for English
  if (lang !== "en") {
    return null
  }

  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://faiacon.gr/en" },
          { name: "Renovations in Corfu", url: "https://faiacon.gr/en/renovations-corfu" },
        ]} 
      />
      <FAQSchema isEnglish={lang === "en"} />
      <RenovationsCorfuPage />
    </SiteLayout>
  )
}
