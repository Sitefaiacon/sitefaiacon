import SiteLayout from "../../../components/site-layout"
import HotelConstructionRenovationPage from "../../../components/hotel-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Hotel Construction & Renovation in Corfu"
      : "Κατασκευή & Ανακαίνιση Ξενοδοχείων στην Κέρκυρα",
    description: isEnglish
      ? "Complete hotel construction and renovation solutions in Corfu. Specialized experience in hotel refurbishments, room upgrades and hospitality improvements."
      : "Ολοκληρωμένες ξενοδοχειακές λύσεις κατασκευής και ανακαίνισης στην Κέρκυρα. Εξειδικευμένη εμπειρία σε ανακαινίσεις ξενοδοχείων, αναβάθμιση δωματίων και βελτίωση φιλοξενίας.",
    keywords: isEnglish
      ? [
          "hotel renovation corfu",
          "hotel construction corfu",
          "room upgrades corfu",
          "hospitality construction corfu",
          "hotel refurbishment corfu",
        ]
      : [
          "ανακαίνιση ξενοδοχείου",
          "κατασκευή ξενοδοχείου",
          "αναβάθμιση δωματίων",
          "ξενοδοχειακές υπηρεσίες Κέρκυρα",
          "ανακαίνιση ξενοδοχειακής μονάδας",
        ],
    openGraph: {
      title: isEnglish
        ? "Hotel Construction & Renovation in Corfu"
        : "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων",
      description: isEnglish
        ? "Hotel refurbishments, room upgrades and hospitality construction in Corfu."
        : "Ανακαινίσεις ξενοδοχείων, αναβάθμιση δωματίων και ξενοδοχειακές κατασκευές στην Κέρκυρα.",
      url: `${SITE_URL}/${lang}/services/hotel-construction-renovation`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "services/hotel-construction-renovation"),
  }
}

export default async function HotelConstructionRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Hotel Construction & Renovation" : "Κατασκευή & Ανακαίνιση Ξενοδοχείων", url: `${SITE_URL}/${lang}/services/hotel-construction-renovation` },
        ]} 
      />
      <HotelConstructionRenovationPage />
    </SiteLayout>
  )
}
