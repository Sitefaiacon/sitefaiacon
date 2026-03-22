"use client"

import type React from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"
import { useLanguage } from "../contexts/language-context"

interface SiteLayoutProps {
  children: React.ReactNode
  showHero?: boolean
}

export function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  const { isEnglish } = useLanguage()
  const lang = isEnglish ? "en" : "el"

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
      <Footer lang={lang} />
    </div>
  )
}

export default SiteLayout
