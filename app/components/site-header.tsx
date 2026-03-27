"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect, useRef } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"
import { usePathname } from "next/navigation"

const servicesItems = [
  { href: "/services/hotel-construction-renovation", label: "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων", labelEn: "Hotel Construction & Renovation" },
  { href: "/services/villa-luxury-home-construction", label: "Κατασκευή Βιλών & Πολυτελών Κατοικιών", labelEn: "Villa & Luxury Home Construction" },
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", label: "Ανακαίνιση Σπιτιού", labelEn: "House Renovation" },
  { href: "/listed-houses", label: "Διατηρητέα Κτίρια", labelEn: "Listed Houses" },
  { href: "/pool-construction", label: "Κατασκευή Πισίνας", labelEn: "Pool Construction" },
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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isEnglish } = useLanguage()
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isServiceActive = servicesItems.some(item => pathname === `/${lang}${item.href}`)

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
            {navItems.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div key={index} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`px-4 py-2 text-sm font-normal text-white hover:text-secondary transition-colors flex items-center gap-1 ${
                        isServiceActive ? "text-secondary" : ""
                      }`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-[#1e3771] border border-white/10 rounded-md shadow-lg min-w-[220px] py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={`/${lang}${subItem.href}`}
                            onClick={() => setDropdownOpen(false)}
                            className={`block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-secondary transition-colors ${
                              pathname === `/${lang}${subItem.href}` ? "text-secondary bg-white/5" : ""
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
                  className={`px-4 py-2 text-sm font-normal text-white hover:text-secondary transition-colors ${
                    pathname === `/${lang}${item.href}` ? "text-secondary" : ""
                  }`}
                >
                  {isEnglish ? item.labelEn : item.label}
                </Link>
              )
            })}
          </nav>

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
                  {navItems.map((item, index) => {
                    if (item.type === "dropdown") {
                      return (
                        <div key={index}>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={`text-lg font-medium text-white hover:text-secondary transition-colors flex items-center gap-2 w-full ${
                              isServiceActive ? "text-secondary" : ""
                            }`}
                          >
                            {isEnglish ? item.labelEn : item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                          </button>
                          {mobileServicesOpen && (
                            <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={`/${lang}${subItem.href}`}
                                  className={`block text-base text-white/80 hover:text-secondary transition-colors ${
                                    pathname === `/${lang}${subItem.href}` ? "text-secondary" : ""
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
                        className={`text-lg font-medium text-white hover:text-secondary transition-colors ${
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
