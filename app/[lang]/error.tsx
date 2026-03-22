"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Κάτι πήγε στραβά</h2>
      <p className="mb-4">Παρουσιάστηκε ένα σφάλμα κατά τη φόρτωση της σελίδας.</p>
      <Button onClick={() => reset()} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
        Δοκιμάστε ξανά
      </Button>
    </div>
  )
}

