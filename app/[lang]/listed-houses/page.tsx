import { SiteLayout } from "../../components/site-layout"
import ListedHousesPage from "../../components/listed-houses-page"

export default function ListedHouses({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <ListedHousesPage lang={lang} />
    </SiteLayout>
  )
}
