import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import ApartmentRenovationCaseStudy from "../../../components/apartment-renovation-project-case-study"

export const metadata: Metadata = {
  title: "Apartment Building Renovation in Corfu - Project Case Study | Faiacon",
  description: "Explore our apartment building renovation project in Corfu. Extensive multi-unit modernization showcasing professional project management and coordinated renovation expertise.",
  keywords: [
    "apartment renovation corfu",
    "building renovation corfu",
    "multi-unit renovation",
    "residential renovation corfu",
    "property renovation corfu",
    "renovation contractor corfu",
  ],
  openGraph: {
    title: "Apartment Building Renovation in Corfu - Project Case Study",
    description: "Extensive multi-unit renovation project focusing on contemporary aesthetics, improved functionality, and enhanced tenant appeal across a residential building.",
    type: "article",
    url: "https://faiacon.gr/en/projects/apartment-renovation-corfu",
  },
  alternates: {
    canonical: "https://faiacon.gr/en/projects/apartment-renovation-corfu",
  },
}

export default async function ApartmentRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  return (
    <SiteLayout>
      <ApartmentRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
