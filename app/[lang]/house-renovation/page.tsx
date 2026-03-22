import SiteLayout from "../../components/site-layout"
import HouseRenovationPage from "../../components/house-renovation-page"

export default async function HouseRenovation({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <HouseRenovationPage lang={lang} />
    </SiteLayout>
  )
}
