import SiteLayout from "../../components/site-layout"
import OurProjectsPage from "../../components/our-projects-page"

export default async function OurProjects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <OurProjectsPage lang={lang} />
    </SiteLayout>
  )
}
