import { Suspense } from "react"
import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"

export default function Home({ params }: { params: { lang: string } }) {
  // Ensure lang is a valid value
  const lang = params?.lang && ["el", "en"].includes(params.lang) ? params.lang : "el"

  return (
    <SiteLayout>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HomePage lang={lang} />
      </Suspense>
    </SiteLayout>
  )
}

