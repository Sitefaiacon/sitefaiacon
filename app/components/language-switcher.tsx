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
    if (lang === "en" && pathname === "/el/house-renovation") {
      router.push("/en/renovations-corfu")
      return
    }
    if (lang === "el" && pathname === "/en/renovations-corfu") {
      router.push("/el/house-renovation")
      return
    }
    // Remove any existing language prefix and add the new one
    const pathWithoutLang = pathname.replace(/^\/(en|el)/, "") || ""
    const newPathname = `/${lang}${pathWithoutLang}`
    router.push(newPathname.replace(/\/+/g, "/")) // Clean up any double slashes
  }

  return (
    <div className="flex items-center gap-1">
      <Globe className="hidden h-4 w-4 text-white/70 sm:block" aria-hidden="true" />
      <div className="flex rounded-lg overflow-hidden">
        {(Object.entries(languages) as [keyof typeof languages, string][]).map(([code, name]) => (
          <Button
            key={code}
            onClick={() => switchLanguage(code)}
            variant={code === currentLang ? "secondary" : "ghost"}
            size="sm"
            aria-label={code === "el" ? "Ελληνικά" : "English"}
            aria-pressed={code === currentLang}
            className={cn(
              "h-11 min-w-11 rounded-none px-2 text-sm font-medium transition-all duration-200 sm:h-10 sm:min-w-0 sm:px-3",
              code === currentLang ? "bg-white text-primary" : "text-white hover:bg-white/10",
              code === "el" ? "rounded-l-lg" : "rounded-r-lg",
            )}
          >
            <span className="sm:hidden">{code.toUpperCase()}</span>
            <span className="hidden sm:inline">{name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
