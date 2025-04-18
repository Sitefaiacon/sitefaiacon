"use client"

import type React from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"
import { PreloadResources } from "./preload-resources"
import { PWARegister } from "./pwa-register"

interface SiteLayoutProps {
  children: React.ReactNode
  showHero?: boolean
}

export function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <PreloadResources />
      <PWARegister />
      <SiteHeader />
      <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
