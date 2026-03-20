// Cache buster v4
import SiteLayout from "../../components/site-layout"
import PoolConstructionPage from "../../components/pool-construction-page"

export default async function PoolConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <PoolConstructionPage lang={lang} />
    </SiteLayout>
  )
}
