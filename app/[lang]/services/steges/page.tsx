import SiteLayout from "../../../components/site-layout"
import StegesPage from "../../../components/steges-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export const metadata: Metadata = {
  title: "Στέγες στην Κέρκυρα | Κατασκευή, Επισκευή & Ανακαίνιση | ΦαιάCon",
  description:
    "Κατασκευή, επισκευή και ανακαίνιση στεγών στην Κέρκυρα. Κεραμοσκεπές, ξύλινες στέγες, στεγανοποίηση και θερμομόνωση για κατοικίες, βίλες και τουριστικά ακίνητα.",
  keywords: [
    "στέγες Κέρκυρα",
    "κατασκευή στέγης",
    "επισκευή στέγης",
    "κεραμοσκεπή",
    "στεγανοποίηση στέγης",
    "ξύλινη στέγη",
    "ανακαίνιση στέγης",
  ],
}

export default async function StegesRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `https://faiacon.gr/${lang}/services` },
          {
            name: isEnglish ? "Roofs" : "Στέγες",
            url: `https://faiacon.gr/${lang}/services/steges`,
          },
        ]}
      />
      <StegesPage />
    </SiteLayout>
  )
}
