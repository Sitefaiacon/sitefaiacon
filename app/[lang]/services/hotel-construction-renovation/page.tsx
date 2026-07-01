import SiteLayout from "../../../components/site-layout"
import HotelConstructionRenovationPage from "../../../components/hotel-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Hotel Construction & Renovation in Corfu | Faiacon"
      : "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων | ΦαιάCon",
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
      url: `https://faiacon.gr/${lang}/services/hotel-construction-renovation`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/services/hotel-construction-renovation`,
      languages: {
        "en-US": "https://faiacon.gr/en/services/hotel-construction-renovation",
        "el-GR": "https://faiacon.gr/el/services/hotel-construction-renovation",
      },
    },
  }
}

export default async function HotelConstructionRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Hotel Construction & Renovation" : "Κατασκευή & Ανακαίνιση Ξενοδοχείων", url: `https://faiacon.gr/${lang}/services/hotel-construction-renovation` },
        ]} 
      />
      <HotelConstructionRenovationPage />
    </SiteLayout>
  )
}
