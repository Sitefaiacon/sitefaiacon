import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import HouseRenovationCaseStudy from "../../../components/house-renovation-project-case-study"

export const metadata: Metadata = {
  title: "House Renovation in Corfu - Project Case Study | Faiacon",
  description: "Explore our house renovation project in Corfu Town. Complete interior modernization showcasing our expertise in residential property renovation and design improvements.",
  keywords: [
    "house renovation corfu",
    "residential renovation corfu",
    "home renovation corfu",
    "interior renovation corfu",
    "renovation project corfu",
    "renovation contractor corfu",
  ],
  openGraph: {
    title: "House Renovation in Corfu - Project Case Study",
    description: "Complete interior renovation project showcasing modernization and functional design improvements in a Corfu Town residence.",
    type: "article",
    url: "https://faiacon.gr/en/projects/house-renovation-corfu",
  },
  alternates: {
    canonical: "https://faiacon.gr/en/projects/house-renovation-corfu",
  },
}

export default async function HouseRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  return (
    <SiteLayout>
      <HouseRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
