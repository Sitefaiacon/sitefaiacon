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
    try {
      const newLang = isEnglish ? "el" : "en"
      setIsEnglish(!isEnglish)

      // Safely handle language switching in the URL
      if (pathname) {
        const newPathname = pathname.replace(/^\/(en|el)/, `/${newLang}`)
        router.push(newPathname)
      }
    } catch (error) {
      console.error("Error toggling language:", error)
    }
  }

  // Update isEnglish when initialLang changes
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

