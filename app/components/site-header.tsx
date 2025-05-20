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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1e3771] ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="flex items-center h-16">
          <Link
            href={`/${lang}`}
            className="font-serif text-2xl font-bold text-white tracking-tight hover:text-secondary transition-colors mr-8"
          >
            ΦαιάCon
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className={`px-4 py-2 text-sm font-normal text-white hover:text-secondary transition-colors ${
                  pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                }`}
              >
                {isEnglish ? item.labelEn : item.label}
              </Link>
            ))}
          </nav>

          {/* Add Language Switcher */}
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white" aria-label="Άνοιγμα μενού">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1e3771] w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${lang}${item.href}`}
                      className={`text-lg font-medium text-white hover:text-secondary transition-colors ${
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
