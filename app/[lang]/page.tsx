// CACHE BUSTER V6 - FORCED REBUILD
import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <HomePage lang={lang} />
    </SiteLayout>
  )
}
