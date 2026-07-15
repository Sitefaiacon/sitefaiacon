import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import VillaRenovationCaseStudy from "../../../components/villa-renovation-project-case-study"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Modern Villa Renovation in Sinies – Case Study",
  description: "Explore our modern villa renovation project in Sinies, Corfu. Luxury renovation showcasing contemporary design, premium finishes, and enhanced amenities for upscale residential properties.",
  keywords: [
    "villa renovation corfu",
    "luxury villa renovation",
    "sinies villa renovation",
    "modern villa renovation corfu",
    "villa renovation contractor corfu",
    "luxury home renovation corfu",
  ],
  openGraph: {
    title: "Modern Villa Renovation in Sinies - Faiacon Case Study",
    description: "Comprehensive villa renovation project featuring contemporary design and premium finishes. See how we transformed a property in Sinies with modern upgrades.",
    type: "article",
    url: `${SITE_URL}/en/projects/villa-renovation-corfu`,
    locale: "en_US",
  },
  alternates: {
    canonical: `${SITE_URL}/en/projects/villa-renovation-corfu`,
  },
}

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export default async function VillaRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (lang !== "en") {
    notFound()
  }

  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          { name: "Renovations in Corfu", url: `${SITE_URL}/en/renovations-corfu` },
          { name: "Villa Renovation in Sinies", url: `${SITE_URL}/en/projects/villa-renovation-corfu` },
        ]} 
      />
      <VillaRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
