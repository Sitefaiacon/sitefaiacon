import SiteLayout from "../../components/site-layout"
import CareersPage from "../../components/careers-page"
import type { Metadata } from "next"
import { localizedAlternates } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish ? "Construction Jobs in Corfu" : "Θέσεις Εργασίας σε Κατασκευές στην Κέρκυρα",
    description: isEnglish
      ? "Apply to join Faiacon's construction and renovation team in Corfu. Opportunities for skilled tradespeople, labourers and seasonal workers."
      : "Εργαστείτε στη ΦαιάCon στην Κέρκυρα. Δεχόμαστε αιτήσεις από τεχνίτες, εργάτες, βοηθούς και εποχιακό προσωπικό.",
    alternates: localizedAlternates(lang, "careers"),
  }
}

export default async function Careers({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <CareersPage />
    </SiteLayout>
  )
}
