"use client"

import Image from "next/image"
import { useState } from "react"

interface EnhancedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function EnhancedImage({ src, alt, width, height, className = "", priority = false }: EnhancedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? width / height : undefined }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        priority={priority}
        className={`
          transition-opacity duration-500 ease-in-out
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}
