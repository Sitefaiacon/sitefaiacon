import SiteLayout from "../../components/site-layout"
import HouseConstructionPage from "../../components/house-construction-page"

export default async function HouseConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <HouseConstructionPage lang={lang} />
    </SiteLayout>
  )
}
