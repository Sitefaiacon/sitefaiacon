import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout showHero={true}>
      <HomePage lang={lang} />
    </SiteLayout>
  )
}
