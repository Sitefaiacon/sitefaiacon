import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"
import { LanguageProvider } from "@/contexts/language-context"

export default function HouseRenovation({ params: { lang } }: { params: { lang: string } }) {
  return (
    <LanguageProvider initialLang={lang}>
      <SiteLayout>
        <HouseRenovationPage lang={lang} />
      </SiteLayout>
    </LanguageProvider>
  )
}
