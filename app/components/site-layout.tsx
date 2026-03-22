import type React from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"
import { ErrorBoundary } from "./error-boundary"

interface SiteLayoutProps {
  children: React.ReactNode
  showHero?: boolean
}

// Change from named export to default export
export default function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary>
        <SiteHeader />
        <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

