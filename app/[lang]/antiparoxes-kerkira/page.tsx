import SiteLayout from "../../components/site-layout"
import AntiparoxesPage from "../../components/antiparoxes-page"
import type { Metadata } from "next"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  const title = isEnglish
    ? "Land Development & Property Partnerships in Corfu"
    : "Αντιπαροχές & Αξιοποίηση Ακινήτων στην Κέρκυρα"

  const description = isEnglish
    ? "We undertake land development partnerships and property exploitation in Corfu with professional technical support, design and construction."
    : "Αναλαμβάνουμε αντιπαροχές στην Κέρκυρα και συνεργασίες αξιοποίησης οικοπέδων και ακινήτων με επαγγελματική τεχνική υποστήριξη, σχεδιασμό και κατασκευή."

  return {
    title,
    description,
    keywords: isEnglish
      ? [
          "land development Corfu",
          "property exploitation Corfu",
          "construction partnership Corfu",
          "Faiacon",
          "real estate development Corfu",
        ]
      : [
          "αντιπαροχές κέρκυρα",
          "αντιπαροχή οικοπέδου κέρκυρα",
          "αξιοποίηση οικοπέδου κέρκυρα",
          "αξιοποίηση ακινήτου κέρκυρα",
          "εργολάβος αντιπαροχές κέρκυρα",
          "κατασκευαστική κέρκυρα",
        ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}/antiparoxes-kerkira`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      siteName: "Faiacon",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "antiparoxes-kerkira"),
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function AntiparoxesKerkiraPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEnglish ? "Property Development Partnerships in Corfu" : "Αντιπαροχές στην Κέρκυρα",
    "description": isEnglish
      ? "Property development partnerships in Corfu with professional technical support, planning and construction."
      : "Αναλαμβάνουμε αντιπαροχές στην Κέρκυρα και συνεργασίες αξιοποίησης οικοπέδων και ακινήτων με επαγγελματική τεχνική υποστήριξη, σχεδιασμό και κατασκευή.",
    "provider": {
      "@type": "LocalBusiness",
      "name": isEnglish ? "Faiacon - Construction Company" : "Faiacon - Τεχνική Κατασκευαστική",
      "telephone": "+30 698 779 7679",
      "email": "info@faiacon.gr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": isEnglish ? "Corfu" : "Κέρκυρα",
        "addressRegion": isEnglish ? "Potamos" : "Ποταμός",
        "postalCode": "491 00",
        "addressCountry": "GR"
      },
      "areaServed": {
        "@type": "Place",
        "name": isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα"
      }
    },
    "serviceType": isEnglish
      ? ["Property Development Partnerships", "Land Development", "Property Development", "Construction", "Renovation"]
      : ["Αντιπαροχές", "Αξιοποίηση Οικοπέδων", "Αξιοποίηση Ακινήτων", "Κατασκευή", "Ανακαίνιση"],
    "offers": {
      "@type": "Offer",
      "description": isEnglish ? "Free initial property assessment" : "Δωρεάν αρχική αξιολόγηση ακινήτου"
    }
  }

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AntiparoxesPage lang={lang} />
    </SiteLayout>
  )
}
