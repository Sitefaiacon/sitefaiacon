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
    languages: {
      "en-US": "https://faiacon.gr/en/renovations-corfu",
      "el-GR": "https://faiacon.gr/el/house-renovation",
    },
  },
}

export default async function RenovationsCorfu({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  
  // Only show for English
  if (lang !== "en") {
    return null
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

  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://faiacon.gr/en" },
          { name: "Renovations in Corfu", url: "https://faiacon.gr/en/renovations-corfu" },
        ]} 
      />
      <FAQSchema items={faqItems} />
      <RenovationsCorfuPage />
    </SiteLayout>
  )
}
