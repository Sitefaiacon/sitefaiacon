"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Αρχική", labelEn: "Home" },
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", label: "Ανακαίνιση Σπιτιού", labelEn: "House Renovation" },
  { href: "/listed-houses", label: "Διατηρητέα Κτίρια", labelEn: "Listed Houses" },
  { href: "/pool-construction", label: "Κατασκευή Πισίνας", labelEn: "Pool Construction" },
  { href: "/our-projects", label: "Τα Έργα μας", labelEn: "Our Projects" },
  { href: "/appointment", label: "Κλείστε Ραντεβού", labelEn: "Book Appointment" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isEnglish, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const lang = isEnglish ? "en" : "el"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-primary ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="flex items-center h-16 sm:h-20 md:h-24">
          <Link
            href={`/${lang}`}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight hover:text-secondary transition-colors pl-2 sm:pl-4 md:pl-12"
          >
            ΦαιάCon
          </Link>

          <nav className="hidden lg:flex ml-auto space-x-4 xl:space-x-8 pr-2 sm:pr-4 md:pr-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className={`text-sm xl:text-base font-medium text-white hover:text-secondary transition-colors tracking-wide whitespace-nowrap ${
                  pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                }`}
              >
                {isEnglish ? item.labelEn : item.label}
              </Link>
            ))}
          </nav>

          {/* Add Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden ml-auto pr-2 sm:pr-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white" aria-label="Άνοιγμα μενού">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-primary w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${lang}${item.href}`}
                      className={`text-lg font-medium text-white hover:text-secondary transition-colors tracking-wide ${
                        pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                      }`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
