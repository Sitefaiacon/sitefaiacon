"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type LanguageContextType = {
  isEnglish: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLang }: { children: ReactNode; initialLang: string }) {
  const [isEnglish, setIsEnglish] = useState(initialLang === "en")
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLang = isEnglish ? "el" : "en"
    setIsEnglish(!isEnglish)
    const newPathname = pathname.replace(/^\/(en|el)/, `/${newLang}`)
    router.push(newPathname)
  }

  useEffect(() => {
    setIsEnglish(initialLang === "en")
  }, [initialLang])

  return <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
