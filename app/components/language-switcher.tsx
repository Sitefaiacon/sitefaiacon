"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "../contexts/language-context"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const languages = {
  el: "Ελληνικά",
  en: "English",
} as const

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const { isEnglish } = useLanguage()

  const currentLang = isEnglish ? "en" : "el"

  const switchLanguage = (lang: string) => {
    if (lang === currentLang) return
    // Remove any existing language prefix and add the new one
    const pathWithoutLang = pathname.replace(/^\/(en|el)/, "") || ""
    const newPathname = `/${lang}${pathWithoutLang}`
    router.push(newPathname.replace(/\/+/g, "/")) // Clean up any double slashes
  }

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-white/70" />
      <div className="flex rounded-lg overflow-hidden">
        {(Object.entries(languages) as [keyof typeof languages, string][]).map(([code, name]) => (
          <Button
            key={code}
            onClick={() => switchLanguage(code)}
            variant={code === currentLang ? "secondary" : "ghost"}
            size="sm"
            className={cn(
              "px-3 py-1 text-sm font-medium transition-all duration-200 rounded-none",
              code === currentLang ? "bg-white text-primary" : "text-white hover:bg-white/10",
              code === "el" ? "rounded-l-lg" : "rounded-r-lg",
            )}
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  )
}
