"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const { isEnglish } = useLanguage()

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setShowConsent(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential")
    setShowConsent(false)
  }

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "all") // ή "essential" αν προτιμάτε
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white rounded-lg shadow-lg p-4 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute right-2 top-2"
          aria-label={isEnglish ? "Close" : "Κλείσιμο"}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="space-y-3">
          <h3 className="font-medium">{isEnglish ? "Cookie Policy 🍪" : "Πολιτική Cookies 🍪"}</h3>
          <p className="text-sm text-gray-600">
            {isEnglish
              ? "We use cookies to improve your browsing experience."
              : "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας."}
          </p>
          <div className="flex flex-col gap-2 min-[390px]:flex-row">
            <Button onClick={acceptAll} className="min-h-11 flex-1 bg-primary hover:bg-primary/90">
              {isEnglish ? "Accept All" : "Αποδοχή Όλων"}
            </Button>
            <Button onClick={acceptEssential} variant="outline" className="min-h-11 flex-1">
              {isEnglish ? "Essential Only" : "Μόνο Απαραίτητα"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
