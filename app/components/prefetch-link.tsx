"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface PrefetchLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  prefetch?: boolean
  onHover?: boolean
}

export function PrefetchLink({ href, children, className = "", prefetch = true, onHover = true }: PrefetchLinkProps) {
  const router = useRouter()
  const [hasHovered, setHasHovered] = useState(false)

  useEffect(() => {
    if (prefetch && !onHover) {
      router.prefetch(href)
    }
  }, [href, prefetch, onHover, router])

  const handleMouseEnter = () => {
    if (prefetch && onHover && !hasHovered) {
      router.prefetch(href)
      setHasHovered(true)
    }
  }

  return (
    <Link href={href} className={className} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  )
}
