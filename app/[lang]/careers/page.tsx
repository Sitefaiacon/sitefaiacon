import SiteLayout from "../../components/site-layout"
import CareersPage from "../../components/careers-page"

export const metadata = {
  title: "Αναζήτηση Προσωπικού | ΦαιάCon",
  description: "Εργαστείτε μαζί μας στην ΦαιάCon. Δεχόμαστε αιτήσεις από τεχνίτες, εργάτες, ανειδίκευτους βοηθούς και φοιτητές για εποχιακές ή μόνιμες θέσεις στην Κέρκυρα.",
}

export default async function Careers({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <CareersPage />
    </SiteLayout>
  )
}
