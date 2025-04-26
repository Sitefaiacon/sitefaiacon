import SiteLayout from "../../../components/site-layout"
import PanelsPage from "../../../components/panels-page"

export default function Panels({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <PanelsPage lang={lang} />
    </SiteLayout>
  )
}
