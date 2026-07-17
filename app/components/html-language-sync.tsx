"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HtmlLanguageSync() {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "el"
  }, [pathname])
  return null
}
