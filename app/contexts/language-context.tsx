"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type LanguageContextType = {
  isEnglish: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLang }: { children: ReactNode; initialLang: string }) {
  const [isEnglish, setIsEnglish] = useState(initialLang === "en")
  const pathname = usePathname()

  // Update language state when pathname changes
  useEffect(() => {
    const langFromPath = pathname.startsWith("/en") ? "en" : "el"
    setIsEnglish(langFromPath === "en")
  }, [pathname])

  return <LanguageContext.Provider value={{ isEnglish }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
