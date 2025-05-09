"use client"

import { useEffect, useRef, useState, type RefObject } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  once = false,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)

        if (once && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [root, rootMargin, threshold, once])

  return [ref, isIntersecting]
}
