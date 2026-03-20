// Cache buster v4
import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import { LanguageProvider } from "@/contexts/language-context"

export default async function HouseRenovation({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <LanguageProvider initialLang={lang}>
      <SiteLayout>
        <HouseRenovationPage lang={lang} />
      </SiteLayout>
    </LanguageProvider>
  )
}
