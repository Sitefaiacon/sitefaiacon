"use client"

import type { ReactNode } from "react"

interface SiteLayoutProps {
  children: ReactNode
  showHero?: boolean
}

export function SiteLayout({ children, showHero = false }: SiteLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}

export default SiteLayout
