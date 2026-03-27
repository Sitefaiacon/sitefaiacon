"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { useLanguage } from "../contexts/language-context"

// Lazy load component sections
const VillaHero = dynamic(() => import("./villa-sections/hero").then(m => ({ default: m.VillaHero })), {
  loading: () => <div className="h-96 bg-gradient-to-b from-slate-900 to-slate-800" />
})
const VillaServices = dynamic(() => import("./villa-sections/services").then(m => ({ default: m.VillaServices })))
const VillaIdealClients = dynamic(() => import("./villa-sections/ideal-clients").then(m => ({ default: m.VillaIdealClients })))
const VillaWorkStages = dynamic(() => import("./villa-sections/work-stages").then(m => ({ default: m.VillaWorkStages })))
const VillaFAQ = dynamic(() => import("./villa-sections/faq").then(m => ({ default: m.VillaFAQ })))
const VillaCTA = dynamic(() => import("./villa-sections/cta").then(m => ({ default: m.VillaCTA })))

export default function VillaLuxuryConstructionPage() {
  const { isEnglish } = useLanguage()

  return (
    <div className="bg-slate-900 text-white">
      <Suspense fallback={<div className="h-96 bg-gradient-to-b from-slate-900 to-slate-800 animate-pulse" />}>
        <VillaHero isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <VillaServices isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <VillaIdealClients isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <VillaWorkStages isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <VillaFAQ isEnglish={isEnglish} />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse" />}>
        <VillaCTA isEnglish={isEnglish} />
      </Suspense>
    </div>
  )
}
