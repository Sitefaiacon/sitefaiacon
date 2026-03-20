import { SiteLayout } from "../../components/site-layout"
import ListedHousesPage from "../../components/listed-houses-page"

export default async function ListedHouses({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <ListedHousesPage lang={lang} />
    </SiteLayout>
  )
}
