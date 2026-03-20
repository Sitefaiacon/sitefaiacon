"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
    // Εδώ μπορείτε να στείλετε τα δεδομένα σε ένα analytics service
    // π.χ. Google Analytics ή ένα custom endpoint
  })

  return null
}
