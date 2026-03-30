import type { Metadata } from "next"
import SiteLayout from "../../components/site-layout"
import RenovationsCorfuPage from "../../components/renovations-corfu-page"
import { BreadcrumbSchema, RenovationsCorfuSchema, RenovationsCorfuFAQSchema } from "../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  // This page is primarily for English SEO targeting "renovations corfu"
  // Greek version redirects or shows Greek content
  
  return {
    title: isEnglish
      ? "Renovations Corfu | Professional House & Villa Renovation Services in Corfu Greece"
      : "Ανακαινίσεις Κέρκυρα | Επαγγελματικές Υπηρεσίες Ανακαίνισης Σπιτιού",
    description: isEnglish
      ? "Expert renovations Corfu services by FaiaCon. Professional house renovation, villa restoration, bathroom & kitchen remodeling in Corfu Greece. 35+ years experience. Free quotes for international property owners."
      : "Επαγγελματικές ανακαινίσεις στην Κέρκυρα από τη FaiaCon. Ανακαίνιση σπιτιού, βίλας, μπάνιου και κουζίνας. 35+ χρόνια εμπειρίας. Δωρεάν προσφορές.",
    keywords: isEnglish
      ? [
          "renovations Corfu",
          "renovations corfu greece",
          "house renovation Corfu",
          "villa renovation Corfu",
          "property renovation Corfu",
          "bathroom renovation Corfu",
          "kitchen renovation Corfu",
          "home renovation Corfu",
          "renovation company Corfu",
          "renovation contractor Corfu",
          "renovation services Corfu Greece",
          "building contractor Corfu",
          "property refurbishment Corfu",
          "house refurbishment Corfu",
          "Corfu renovation experts",
          "FaiaCon renovations",
        ]
      : [
          "ανακαινίσεις Κέρκυρα",
          "ανακαίνιση σπιτιού Κέρκυρα",
          "ανακαίνιση βίλας Κέρκυρα",
          "ανακαίνιση μπάνιου Κέρκυρα",
          "ανακαίνιση κουζίνας Κέρκυρα",
          "εταιρεία ανακαινίσεων Κέρκυρα",
        ],
    openGraph: {
      title: isEnglish
        ? "Renovations Corfu | Professional Property Renovation Services"
        : "Ανακαινίσεις Κέρκυρα | Επαγγελματικές Υπηρεσίες Ανακαίνισης",
      description: isEnglish
        ? "Transform your Corfu property with FaiaCon. Expert renovations for villas, houses, and apartments. 35+ years of trusted experience. Free consultation."
        : "Μετατρέψτε το ακίνητό σας στην Κέρκυρα με τη FaiaCon. Ειδικές ανακαινίσεις για βίλες, σπίτια και διαμερίσματα. 35+ χρόνια εμπειρίας.",
      url: `https://faiacon.gr/${lang}/renovations-corfu`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      siteName: "FaiaCon",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          width: 1200,
          height: 630,
          alt: isEnglish ? "Renovations Corfu - FaiaCon Construction Company" : "Ανακαινίσεις Κέρκυρα - FaiaCon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish
        ? "Renovations Corfu | FaiaCon - 35+ Years Experience"
        : "Ανακαινίσεις Κέρκυρα | FaiaCon",
      description: isEnglish
        ? "Professional renovation services in Corfu Greece. House, villa, bathroom & kitchen renovations. Free quotes."
        : "Επαγγελματικές ανακαινίσεις στην Κέρκυρα. Δωρεάν προσφορές.",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/renovations-corfu`,
      languages: {
        "en": "https://faiacon.gr/en/renovations-corfu",
        "en-US": "https://faiacon.gr/en/renovations-corfu",
        "en-GB": "https://faiacon.gr/en/renovations-corfu",
        "el-GR": "https://faiacon.gr/el/renovations-corfu",
        "x-default": "https://faiacon.gr/en/renovations-corfu",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  const breadcrumbItems = lang === "en"
    ? [
        { name: "Home", url: "https://faiacon.gr/en" },
        { name: "Renovations Corfu", url: "https://faiacon.gr/en/renovations-corfu" },
      ]
    : [
        { name: "Αρχική", url: "https://faiacon.gr/el" },
        { name: "Ανακαινίσεις Κέρκυρα", url: "https://faiacon.gr/el/renovations-corfu" },
      ]

  return (
    <SiteLayout lang={lang}>
      <BreadcrumbSchema items={breadcrumbItems} />
      {lang === "en" && (
        <>
          <RenovationsCorfuSchema />
          <RenovationsCorfuFAQSchema />
        </>
      )}
      <RenovationsCorfuPage lang={lang} />
    </SiteLayout>
  )
}
