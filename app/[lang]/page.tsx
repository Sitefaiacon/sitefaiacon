import { Suspense } from "react"
import HomePage from "../components/home-page"
import { SearchParamsWrapper } from "../components/search-params-wrapper"

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchParamsWrapper>
        {(searchParams) => <HomePage lang={params.lang} searchParams={searchParams} />}
      </SearchParamsWrapper>
    </Suspense>
  )
}
