"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"
import { usePathname } from "next/navigation"

// Ενημέρωση του πίνακα navItems για να συμπεριλάβει τη νέα σελίδα "ΦαιάCon Panels"

const navItems = [
  { href: "/", label: "Αρχική", labelEn: "Home" },
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", label: "Ανακαίνιση Σπιτιού", labelEn: "House Renovation" },
  { href: "/listed-houses", label: "Διατηρητέα Κτίρια", labelEn: "Listed Houses" },
  { href: "/pool-construction", label: "Κατασκευή Πισίνας", labelEn: "Pool Construction" },
  { href: "/panels", label: "ΦαιάCon Panels", labelEn: "ΦαιάCon Panels" },
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
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 backdrop-blur-sm bg-primary/90 rounded-b-lg">
          <div className="flex items-center gap-2">
            <Link
              href={`/${lang}`}
              className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight hover:text-secondary transition-all duration-300 pl-2 sm:pl-4 md:pl-6 relative group"
              aria-label="ΦαιάCon Home"
            >
              <span className="relative z-10">ΦαιάCon</span>
              <span className="absolute inset-0 bg-primary-light/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </Link>

            <div className="hidden md:flex items-center gap-1 border-l border-white/20 pl-2 ml-2">
              <span className="text-xs text-white/70 font-light tracking-wider"></span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={`/${lang}${item.href}`}
                  className={`px-2 py-1.5 text-xs xl:text-sm font-medium text-white hover:text-secondary transition-all duration-300 tracking-wide whitespace-nowrap rounded-md hover:bg-white/10 ${
                    pathname === `/${lang}${item.href}` ? "bg-white/15 text-secondary" : ""
                  }`}
                >
                  {isEnglish ? item.labelEn : item.label}
                  {item.subItems && <span className="ml-1 inline-block">▼</span>}
                </Link>

                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-md shadow-lg py-1 z-10 hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={`/${lang}${subItem.href}`}
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      >
                        {isEnglish ? subItem.labelEn : subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="border-r border-white/20 pr-2 mr-2">
              <LanguageSwitcher />
            </div>

            <div className="lg:hidden pr-2 sm:pr-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 transition-colors duration-300"
                    aria-label="Άνοιγμα μενού"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gradient-primary/95 backdrop-blur-lg w-[300px] border-l border-white/20"
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        <Link
                          href={`/${lang}${item.href}`}
                          className={`flex items-center p-2 rounded-md text-base font-medium text-white hover:text-secondary hover:bg-white/10 transition-all duration-300 ${
                            pathname === `/${lang}${item.href}` ? "bg-white/15 text-secondary" : ""
                          }`}
                        >
                          {isEnglish ? item.labelEn : item.label}
                        </Link>

                        {item.subItems && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={`/${lang}${subItem.href}`}
                                className="block p-2 text-sm text-white/80 hover:text-secondary hover:bg-white/10 rounded-md"
                              >
                                {isEnglish ? subItem.labelEn : subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
