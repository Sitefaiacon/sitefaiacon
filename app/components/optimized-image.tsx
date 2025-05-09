"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function OptimizedImage({ src, alt, width, height, className = "" }: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // Default aspect ratio if width or height are missing
  const aspectRatio = width && height ? width / height : 16 / 9

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: aspectRatio }}>
      <Image
        src={imageError ? "/placeholder.svg" : src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`
          duration-700 ease-in-out object-cover
          ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setImageError(true)}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
