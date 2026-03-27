import VillaLuxuryConstructionPage from "@/app/components/villa-luxury-construction-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Κατασκευή Βιλών & Πολυτελών Κατοικιών | Faiacon",
  description:
    "Εξατομικευμένη κατασκευή πολυτελών βιλών στην Κέρκυρα. Αρχιτεκτονική αριστεία, πολυτελή υλικά και άψογη εκτέλεση από την ιδέα έως την παράδοση.",
  keywords: [
    "κατασκευή βιλών",
    "πολυτελής κατοικία",
    "luxury homes Corfu",
    "εξατομικευμένη κατασκευή",
    "αρχιτεκτονική σχεδίαση βίλας",
  ],
}

export default function VillaLuxuryConstructionRoute() {
  return <VillaLuxuryConstructionPage />
}
