"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute right-2 top-2"
          aria-label="Κλείσιμο"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="space-y-3">
          <h3 className="font-medium">Πολιτική Cookies 🍪</h3>
          <p className="text-sm text-gray-600">
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας.
          </p>
          <div className="flex gap-2">
            <Button onClick={acceptAll} size="sm" className="bg-primary hover:bg-primary/90">
              Αποδοχή Όλων
            </Button>
            <Button onClick={acceptEssential} variant="outline" size="sm">
              Μόνο Απαραίτητα
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

