import SiteLayout from "../../components/site-layout"
import HouseConstructionPage from "../../components/house-construction-page"

export default function HouseConstruction({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <HouseConstructionPage lang={lang} />
    </SiteLayout>
  )
}
