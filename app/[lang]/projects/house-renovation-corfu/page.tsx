import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import HouseRenovationCaseStudy from "../../../components/house-renovation-project-case-study"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "House Renovation in Corfu Town – Case Study",
  description: "Explore our house renovation project in Corfu Town. Complete interior modernization showcasing our expertise in residential property renovation, contemporary design, and quality improvements.",
  keywords: [
    "house renovation corfu",
    "residential renovation corfu",
    "home renovation corfu",
    "interior renovation corfu",
    "renovation project corfu",
    "renovation contractor corfu",
    "corfu town renovation",
  ],
  openGraph: {
    title: "House Renovation in Corfu Town - Faiacon Case Study",
    description: "Complete interior renovation project showcasing modernization and functional design improvements in a Corfu Town residence with contemporary finishes.",
    type: "article",
    url: `${SITE_URL}/en/projects/house-renovation-corfu`,
    locale: "en_US",
  },
  alternates: {
    canonical: `${SITE_URL}/en/projects/house-renovation-corfu`,
  },
}

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export default async function HouseRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
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
          { name: "House Renovation in Corfu Town", url: `${SITE_URL}/en/projects/house-renovation-corfu` },
        ]} 
      />
      <HouseRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
