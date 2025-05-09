"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { type ReactNode, useState } from "react"

interface LazyLoadProps {
  children: ReactNode
  height?: string | number
  className?: string
  placeholder?: ReactNode
}

export function LazyLoad({ children, height = "auto", className = "", placeholder }: LazyLoadProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ once: true })
  const [hasLoaded, setHasLoaded] = useState(false)

  if (isIntersecting && !hasLoaded) {
    setHasLoaded(true)
  }

  return (
    <div ref={ref} className={className} style={{ height: !hasLoaded ? height : "auto" }}>
      {hasLoaded ? children : placeholder || null}
    </div>
  )
}
