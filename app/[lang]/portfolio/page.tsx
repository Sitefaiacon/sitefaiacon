//Σωστο import
import SiteLayout from "../../components/site-layout"
import PortfolioPage from "../../components/portfolio-page"

export default function Portfolio({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <PortfolioPage lang={lang} />
    </SiteLayout>
  )
}
