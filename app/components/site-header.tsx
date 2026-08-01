"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect, useRef } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"
import { usePathname } from "next/navigation"

const servicesItems = [
  { href: "/services/hotel-construction-renovation", label: "Ξενοδοχεία", labelEn: "Hotels" },
  { href: "/services/villa-luxury-home-construction", label: "Βίλες", labelEn: "Villas" },
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", hrefEn: "/renovations-corfu", label: "Ανακαίνιση Σπιτιού", labelEn: "Renovations in Corfu" },
  { href: "/listed-houses", label: "Διατηρητέα", labelEn: "Listed Buildings" },
  { href: "/pool-construction", label: "Πισίνες", labelEn: "Pools" },
  { href: "/services/thermoprosopsi", label: "Θερμοπρόσοψη", labelEn: "Insulation" },
  { href: "/services/vapsimata-elaiokromatismoi", label: "Βαψίματα", labelEn: "Painting" },
  { href: "/antiparoxes-kerkira", label: "Αντιπαροχές", labelEn: "Land Development" },
]

const navItems = [
  { href: "/", label: "Αρχική", labelEn: "Home" },
  { href: "/cost-calculator", label: "Υπολογιστής Κόστους", labelEn: "Cost Calculator" },
  { type: "dropdown", label: "Υπηρεσίες", labelEn: "Services", items: servicesItems },
  { href: "/our-projects", label: "Τα Έργα μας", labelEn: "Our Projects" },
  { href: "/careers", label: "Αναζήτηση Προσωπικού", labelEn: "Careers" },
  { href: "/appointment", label: "Κλείστε Ραντεβού", labelEn: "Book Appointment" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isEnglish } = useLanguage()
  const pathname = usePathname()
  const lang = isEnglish ? "en" : "el"
  const getServiceHref = (item: (typeof servicesItems)[number]) =>
    isEnglish && "hrefEn" in item ? item.hrefEn : item.href
  const closeMobileMenuAfterNavigation = () => {
    window.setTimeout(() => setMobileMenuOpen(false), 0)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isServiceActive = servicesItems.some(item => pathname === `/${lang}${getServiceHref(item)}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#1e3771] pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4">
        <div className="flex items-center h-16">
          <Link
            href={`/${lang}`}
            className="mr-2 whitespace-nowrap font-serif text-xl font-bold tracking-tight text-white transition-colors hover:text-secondary sm:mr-4 sm:text-2xl xl:mr-8"
          >
            ΦαιάCon
          </Link>

          <nav className="hidden flex-1 items-center justify-center xl:flex">
            {navItems.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div key={index} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 text-xs font-normal text-white transition-colors hover:text-secondary xl:px-4 xl:text-sm ${
                        isServiceActive ? "text-secondary" : ""
                      }`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-[#1e3771] border border-white/10 rounded-md shadow-lg min-w-[320px] py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={`/${lang}${getServiceHref(subItem)}`}
                            onClick={() => setDropdownOpen(false)}
                            className={`block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-secondary transition-colors ${
                              pathname === `/${lang}${getServiceHref(subItem)}` ? "text-secondary bg-white/5" : ""
                            }`}
                          >
                            {isEnglish ? subItem.labelEn : subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  className={`whitespace-nowrap px-3 py-2 text-xs font-normal text-white transition-colors hover:text-secondary xl:px-4 xl:text-sm ${
                    pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                  }`}
                >
                  {isEnglish ? item.labelEn : item.label}
                </Link>
              )
            })}
          </nav>

          <div className="ml-auto shrink-0">
            <LanguageSwitcher />
          </div>

          <div className="ml-1 shrink-0 xl:hidden sm:ml-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 text-white hover:bg-white/10 hover:text-white"
                  aria-label={isEnglish ? "Open menu" : "Άνοιγμα μενού"}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(88vw,340px)] overflow-y-auto bg-[#1e3771] pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))]">
                <SheetTitle className="sr-only">
                  {isEnglish ? "Navigation menu" : "Μενού πλοήγησης"}
                </SheetTitle>
                <nav className="mt-8 flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    if (item.type === "dropdown") {
                      return (
                        <div key={index}>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={`flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-left text-lg font-medium text-white transition-colors hover:bg-white/10 hover:text-secondary ${
                              isServiceActive ? "text-secondary" : ""
                            }`}
                          >
                            {isEnglish ? item.labelEn : item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                          </button>
                          {mobileServicesOpen && (
                            <div className="mt-2 space-y-1 border-l border-white/20 pl-4">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={`/${lang}${getServiceHref(subItem)}`}
                                  onClick={closeMobileMenuAfterNavigation}
                                  className={`flex min-h-11 items-center rounded-md px-2 text-base text-white/80 transition-colors hover:bg-white/10 hover:text-secondary ${
                                    pathname === `/${lang}${getServiceHref(subItem)}` ? "text-secondary" : ""
                                  }`}
                                >
                                  {isEnglish ? subItem.labelEn : subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    }
                    return (
                      <Link
                        key={item.href}
                        href={`/${lang}${item.href}`}
                        onClick={closeMobileMenuAfterNavigation}
                        className={`flex min-h-11 items-center rounded-md px-2 text-lg font-medium text-white transition-colors hover:bg-white/10 hover:text-secondary ${
                          pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                        }`}
                      >
                        {isEnglish ? item.labelEn : item.label}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
