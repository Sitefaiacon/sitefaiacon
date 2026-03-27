import HotelConstructionRenovationPage from "@/app/components/hotel-construction-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων | Faiacon",
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

export default function HotelConstructionRenovationRoute() {
  return <HotelConstructionRenovationPage />
}
