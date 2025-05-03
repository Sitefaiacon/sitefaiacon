import SiteLayout from "../../components/site-layout"
import SimplePanelsPage from "../../components/simple-panels-page"

export default function Panels({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <SimplePanelsPage lang={lang} />
    </SiteLayout>
  )
}
