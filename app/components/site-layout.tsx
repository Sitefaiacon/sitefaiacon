import type React from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "./footer"
import Head from "next/head"

interface SiteLayoutProps {
  children: React.ReactNode
  showHero?: boolean
}

export function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link rel="preload" href="/images/hero-background.jpg" as="image" type="image/webp" />
        <link rel="preload" href="/fonts/your-main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <SiteHeader />
      <main className={`flex-grow ${showHero ? "pt-16" : ""}`}>{children}</main>
      <Footer />
    </div>
  )
}
