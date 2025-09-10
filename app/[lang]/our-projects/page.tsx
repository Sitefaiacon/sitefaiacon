//Σωστο named import
import SiteLayout from "../../components/site-layout"
import OurProjectsPage from "../../components/our-projects-page"

export default function OurProjects({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <OurProjectsPage lang={lang} />
    </SiteLayout>
  )
}
