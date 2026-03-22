"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/", label: "Αρχική", labelEn: "Home" },
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", label: "Ανακαίνιση Σπιτιού", labelEn: "House Renovation" },
  { href: "/listed-houses", label: "Διατηρητέα Κτίρια", labelEn: "Listed Houses" },
  { href: "/pool-construction", label: "Κατασκευή Πισίνας", labelEn: "Pool Construction" },
  { href: "/our-projects", label: "Τα Έργα μας", labelEn: "Our Projects" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isEnglish } = useLanguage()
  const pathname = usePathname()
  const lang = isEnglish ? "en" : "el"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-2xl shadow-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href={`/${lang}`}
              className="font-serif text-2xl font-bold text-white tracking-tight transition-opacity hover:opacity-80"
              aria-label="ΦαιάCon - Αρχική"
            >
              ΦαιάCon
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Κύρια πλοήγηση">
              {navItems.map((item) => {
                const isActive = pathname === `/${lang}${item.href}` || (item.href === "/" && pathname === `/${lang}`)
                return (
                  <Link
                    key={item.href}
                    href={`/${lang}${item.href}`}
                    className={`nav-link-underline px-3 py-2 text-sm font-normal transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right side: language switcher + CTA */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <Button
                asChild
                size="sm"
                className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-200 shadow-lg shadow-black/20"
              >
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}
                </Link>
              </Button>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-dark border-b border-white/10 lg:hidden"
          >
            <nav className="max-w-[1800px] mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile πλοήγηση">
              {navItems.map((item, i) => {
                const isActive = pathname === `/${lang}${item.href}`
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={`/${lang}${item.href}`}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive
                          ? "text-accent bg-white/10"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-2 pb-1">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
