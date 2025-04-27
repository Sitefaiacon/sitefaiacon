"use client"

import { useEffect } from "react"
import { preloadFonts } from "../lib/font-optimization"
import { registerServiceWorker } from "../lib/service-worker"

export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical fonts
    preloadFonts()

    // Register service worker for caching
    registerServiceWorker()

    // Implement code splitting by preloading critical routes
    if ("IntersectionObserver" in window) {
      const prefetchLinks = document.querySelectorAll("a")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const link = entry.target as HTMLAnchorElement
              if (link.href && link.href.startsWith(window.location.origin)) {
                // Prefetch the link when it's visible
                const prefetchLink = document.createElement("link")
                prefetchLink.rel = "prefetch"
                prefetchLink.href = link.href
                document.head.appendChild(prefetchLink)
                observer.unobserve(link)
              }
            }
          })
        },
        { threshold: 0.3 },
      )

      prefetchLinks.forEach((link) => {
        observer.observe(link)
      })
    }
  }, [])

  return null
}
