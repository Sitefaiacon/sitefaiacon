"use client"

import { useEffect, useState } from "react"

export function useResponsiveFont(baseSize: number, minSize: number, maxSize: number): number {
  const [fontSize, setFontSize] = useState(baseSize)

  useEffect(() => {
    const calculateFontSize = () => {
      const width = window.innerWidth
      const calculatedSize = baseSize * (width / 1920) // 1920 is the reference width

      // Clamp between min and max
      const clampedSize = Math.max(minSize, Math.min(maxSize, calculatedSize))
      setFontSize(clampedSize)
    }

    calculateFontSize()
    window.addEventListener("resize", calculateFontSize)

    return () => {
      window.removeEventListener("resize", calculateFontSize)
    }
  }, [baseSize, minSize, maxSize])

  return fontSize
}
