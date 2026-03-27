import SiteLayout from "../../../components/site-layout"
import HotelConstructionRenovationPage from "../../../components/hotel-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export const metadata: Metadata = {
  title: "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων | ΦαιάCon",
  description:
    "Ολοκληρωμένες ξενοδοχειακές λύσεις κατασκευής και ανακαίνισης στην Κέρκυρα. Εξειδικευμένη εμπειρία σε ανακαινίσεις ξενοδοχείων, αναβάθμιση δωματίων και βελτίωση φιλοξενίας.",
  keywords: [
    "ανακαίνιση ξενοδοχείου",
    "κατασκευή ξενοδοχείου",
    "αναβάθμιση δωματίων",
    "ξενοδοχειακές υπηρεσίες Κέρκυρα",
    "ανακαίνιση ξενοδοχειακής μονάδας",
  ],
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
