import { Metadata } from "next"
import { SiteLayout } from "../../../components/site-layout"
import VillaRenovationCaseStudy from "../../../components/villa-renovation-project-case-study"

export const metadata: Metadata = {
  title: "Modern Villa Renovation in Sinies, Corfu - Project Case Study | Faiacon",
  description: "Explore our luxury villa renovation project in Sinies, Corfu. Contemporary design, premium finishes, and modern amenities showcasing professional villa renovation expertise.",
  keywords: [
    "villa renovation corfu",
    "luxury villa renovation",
    "villa renovation sinies",
    "home renovation corfu",
    "residential renovation corfu",
    "villa upgrade corfu",
  ],
  openGraph: {
    title: "Modern Villa Renovation in Sinies, Corfu - Project Case Study",
    description: "Luxury villa renovation showcasing contemporary design, enhanced amenities, and premium finishes for upscale residential living.",
    type: "article",
    url: "https://faiacon.gr/en/projects/villa-renovation-corfu",
  },
  alternates: {
    canonical: "https://faiacon.gr/en/projects/villa-renovation-corfu",
  },
}

export default async function VillaRenovationProject({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  return (
    <SiteLayout>
      <VillaRenovationCaseStudy lang={lang} />
    </SiteLayout>
  )
}
