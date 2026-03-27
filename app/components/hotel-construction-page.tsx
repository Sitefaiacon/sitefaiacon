"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { useLanguage } from "../contexts/language-context"

// Lazy load component sections
const HotelHero = dynamic(() => import("./hotel-sections/hero").then(m => ({ default: m.HotelHero })), {
  loading: () => <div className="h-96 bg-gradient-to-b from-slate-900 to-slate-800" />
})
const HotelServices = dynamic(() => import("./hotel-sections/hero").then(m => ({ default: m.HotelServices })))
const HotelIdealClients = dynamic(() => import("./hotel-sections/ideal-clients").then(m => ({ default: m.HotelIdealClients })))
const HotelWorkStages = dynamic(() => import("./hotel-sections/work-stages").then(m => ({ default: m.HotelWorkStages })))
const HotelFAQ = dynamic(() => import("./hotel-sections/faq").then(m => ({ default: m.HotelFAQ })))
const HotelCTA = dynamic(() => import("./hotel-sections/cta").then(m => ({ default: m.HotelCTA })))

export default function HotelConstructionRenovationPage() {
  const { isEnglish } = useLanguage()

  return (
    <div className="bg-slate-900 text-white">
      <Suspense fallback={<div className="h-96 bg-gradient-to-b from-slate-900 to-slate-800 animate-pulse" />}>
        <HotelHero isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <HotelServices isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <HotelIdealClients isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <HotelWorkStages isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <HotelFAQ isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse" />}>
        <HotelCTA isEnglish={isEnglish} />
      </Suspense>
    </div>
  )
}
