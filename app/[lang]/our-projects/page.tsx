import { SiteLayout } from "../../components/site-layout"
import OurProjectsPage from "../../components/our-projects-page"

export default function OurProjects({ params }: { params: { lang?: string } }) {
  // Ensure lang has a default value if undefined
  const lang = params?.lang || "el"

  return (
    <SiteLayout>
      <OurProjectsPage lang={lang} />
    </SiteLayout>
  )
}
