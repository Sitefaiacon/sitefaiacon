// Cache buster v4
import { SiteLayout } from "../../components/site-layout"
import PortfolioPage from "../../components/portfolio-page"

export default async function Portfolio({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <PortfolioPage lang={lang} />
    </SiteLayout>
  )
}
