import { SiteLayout } from "../../components/site-layout"
import PoolConstructionPage from "../../components/pool-construction-page"

export default function PoolConstruction({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <PoolConstructionPage lang={lang} />
    </SiteLayout>
  )
}
