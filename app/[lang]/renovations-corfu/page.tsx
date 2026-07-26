import SiteLayout from "../../components/site-layout"
import RenovationsCorfuPage from "../../components/renovations-corfu-page"
import type { Metadata } from "next"
import { BreadcrumbSchema, FAQSchema } from "../../components/structured-data"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Renovations in Corfu | Home & Villa Specialists",
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
    url: `${SITE_URL}/en/renovations-corfu`,
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${SITE_URL}/en/renovations-corfu`,
    languages: {
      "el-GR": `${SITE_URL}/el/house-renovation`,
      "en-US": `${SITE_URL}/en/renovations-corfu`,
      "x-default": `${SITE_URL}/el/house-renovation`,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovations in Corfu | Home & Villa Specialists | Faiacon",
    description: "Professional home, villa and property renovations across Corfu with 35+ years of local construction experience.",
  },
}

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export default async function RenovationsCorfu({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  
  // Only show for English
  if (lang !== "en") {
    notFound()
  }

  const faqItems = [
    {
      question: "Do you handle villa renovations in Corfu?",
      answer: "Yes, we specialize in villa renovations throughout Corfu, including luxury upgrades, outdoor space improvements, and structural work. Our experience with local materials and Corfu's specific climate conditions ensures durability and quality.",
    },
    {
      question: "Can you work with overseas property owners?",
      answer: "Absolutely. We regularly work with international clients who own property in Corfu. We provide regular updates via email and video calls, handle permits and permissions on your behalf, and can coordinate all aspects of the renovation remotely.",
    },
    {
      question: "Do you renovate homes for Airbnb or holiday rentals?",
      answer: "Yes. We understand the specific requirements of holiday rental properties and can design renovations that maximize guest satisfaction, durability, and return on investment. We recommend durable finishes and practical layouts optimized for rental use.",
    },
    {
      question: "Can you provide an initial renovation estimate?",
      answer: "We provide preliminary estimates based on initial property information and photos. For a detailed and accurate quote, we recommend a site visit where we can assess the property thoroughly and understand your specific requirements.",
    },
    {
      question: "Do you handle both cosmetic and larger renovation works?",
      answer: "Yes, we handle renovations of all scales—from targeted updates like painting and kitchen upgrades to comprehensive full-property renovations including structural work, electrical systems, and major upgrades.",
    },
    {
      question: "What areas of Corfu do you serve?",
      answer: "We provide renovation services throughout Corfu, from Kerkyra town to outlying areas. Local project coordination is one of our strengths, and we work with reliable local suppliers and subcontractors.",
    },
  ]
  const renovationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/en/renovations-corfu#service`,
    name: "Renovations in Corfu",
    url: `${SITE_URL}/en/renovations-corfu`,
    description:
      "Professional home, villa and property renovation services throughout Corfu, Greece.",
    serviceType: [
      "Home renovation",
      "Villa renovation",
      "Property renovation",
      "Building renovation",
    ],
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: "Corfu, Greece",
    },
    availableLanguage: ["English", "Greek"],
  }

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(renovationServiceSchema) }}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          { name: "Renovations in Corfu", url: `${SITE_URL}/en/renovations-corfu` },
        ]} 
      />
      <FAQSchema items={faqItems} />
      <RenovationsCorfuPage />
    </SiteLayout>
  )
}
