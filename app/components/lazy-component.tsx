"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface LazyComponentProps {
  children: React.ReactNode
  threshold?: number
}

export function LazyComponent({ children, threshold = 0.1 }: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  return <div ref={setRef}>{isVisible ? children : <div style={{ height: 100 }} />}</div>
}
