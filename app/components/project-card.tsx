"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  onClick?: () => void
  priority?: boolean
}

export function ProjectCard({ title, location, image, onClick, priority = false }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
        <Image
          src={imageError ? "/placeholder.svg" : image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`
            object-cover transition-all duration-300 group-hover:scale-110
            ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
          `}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onError={() => setImageError(true)}
          onLoadingComplete={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error state */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-gray-400 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-500">Η εικόνα δεν είναι διαθέσιμη</p>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      {/* Η περιγραφή τοποθεσίας αφαιρέθηκε */}
    </div>
  )
}
