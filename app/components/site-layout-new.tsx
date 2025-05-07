"use client"

import type { ReactNode } from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"

interface SiteLayoutProps {
  children: ReactNode
  showHero?: boolean
}

export default function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
      <Footer />
    </div>
  )
}
