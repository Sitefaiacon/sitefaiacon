"use client"

import type React from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"

interface SiteLayoutProps {
  children: React.ReactNode
  showHero?: boolean
}

// Εξάγουμε τη συνάρτηση ως named export
export function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
      <Footer />
    </div>
  )
}

// Επίσης την εξάγουμε ως default export
export default SiteLayout
