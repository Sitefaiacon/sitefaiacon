import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import ApartmentRenovationCaseStudy from "../../../components/apartment-renovation-project-case-study"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Apartment Building Renovation in Corfu – Case Study",
  description: "Explore our multi-unit apartment building renovation project in Corfu. Complete renovation showcasing professional project coordination, contemporary design, and consistent quality execution across all units.",
  keywords: [
    "apartment renovation corfu",
    "multi-unit renovation corfu",
    "building renovation corfu",
    "residential building renovation",
    "apartment complex renovation corfu",
    "investment property renovation corfu",
  ],
  openGraph: {
    title: "Apartment Building Renovation - Faiacon Case Study",
    description: "Comprehensive multi-unit apartment renovation project demonstrating professional coordination, contemporary aesthetics, and enhanced tenant appeal.",
    type: "article",
    url: `${SITE_URL}/en/projects/apartment-renovation-corfu`,
    locale: "en_US",
  },
  alternates: {
    canonical: `${SITE_URL}/en/projects/apartment-renovation-corfu`,
  },
}

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export default async function ApartmentRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
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
          { name: "Apartment Building Renovation", url: `${SITE_URL}/en/projects/apartment-renovation-corfu` },
        ]} 
      />
      <ApartmentRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
