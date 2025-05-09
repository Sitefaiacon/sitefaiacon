"use client"

import type { HTMLAttributes } from "react"
import Link from "next/link"
import { useLanguage } from "@/app/contexts/language-context"
import { cn } from "@/lib/utils"
import { translations } from "@/app/translations"
import { LanguageSwitcher } from "./language-switcher"

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {
  transparent?: boolean
}

export function SiteHeader({ transparent = false, className, ...props }: SiteHeaderProps) {
  const { lang } = useLanguage()
  const t = translations[lang]?.nav || {}

  return (
    <header
      className={cn("sticky top-0 z-50 w-full", transparent ? "bg-transparent" : "bg-white shadow-sm", className)}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">ΦαιάCon</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href={`/${lang}`} className="text-sm font-medium hover:text-primary">
            {t.home || "Home"}
          </Link>
          <Link href={`/${lang}/our-projects`} className="text-sm font-medium hover:text-primary">
            {t.projects || "Projects"}
          </Link>
          <Link href={`/${lang}/house-construction`} className="text-sm font-medium hover:text-primary">
            {t.construction || "Construction"}
          </Link>
          <Link href={`/${lang}/house-renovation`} className="text-sm font-medium hover:text-primary">
            {t.renovation || "Renovation"}
          </Link>
          <Link href={`/${lang}/pool-construction`} className="text-sm font-medium hover:text-primary">
            {t.pools || "Pools"}
          </Link>
          <Link href={`/${lang}/appointment`} className="text-sm font-medium hover:text-primary">
            {t.appointment || "Appointment"}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
