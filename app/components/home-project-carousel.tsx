"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhotoWatermark } from "./photo-watermark"

const featuredProjects = [
  {
    title: "Ολοκληρωμένη βίλα με ορθογώνια πισίνα",
    titleEn: "Completed Villa with Rectangular Pool",
    location: "Κασσιόπη, Κέρκυρα",
    locationEn: "Kassiopi, Corfu",
    image: "/images/projects/2026/completed-villa-kassiopi-rectangular-pool-01.jpg",
    href: "/projects/kassiopi-villas",
  },
  {
    title: "Ολοκληρωμένη βίλα με καμπύλη πισίνα",
    titleEn: "Completed Villa with Curved Pool",
    location: "Κασσιόπη, Κέρκυρα",
    locationEn: "Kassiopi, Corfu",
    image: "/images/projects/2026/completed-villa-kassiopi-curved-pool-01.jpg",
    href: "/projects/kassiopi-villas",
  },
  {
    title: "Ολοκληρωμένη βίλα στις Σινιές",
    titleEn: "Completed Villa in Sinies",
    location: "Σινιές, Κέρκυρα",
    locationEn: "Sinies, Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B2%CE%AF%CE%BB%CE%B1%20%CF%83%CE%B9%CE%BD%CE%B9%CE%AD%CF%82.jpg-TBv1Q93tF49zLCpwPjQIhP4OS6eJLq.jpeg",
    href: "/our-projects",
  },
  {
    title: "Πέτρινη βίλα στην Κέρκυρα",
    titleEn: "Stone Villa in Corfu",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg",
    href: "/our-projects",
  },
]

interface HomeProjectCarouselProps {
  isEnglish: boolean
  lang: string
}

export function HomeProjectCarousel({ isEnglish, lang }: HomeProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProjects.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const activeProject = featuredProjects[activeIndex]
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + featuredProjects.length) % featuredProjects.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % featuredProjects.length)

  return (
    <div
      className="mx-auto max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
          {featuredProjects.map((project, index) => (
            <Image
              key={project.image}
              src={project.image}
              alt={isEnglish ? project.titleEn : project.title}
              fill
              priority={index === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, 1200px"
              className={`object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <PhotoWatermark className="bottom-3 right-3 sm:bottom-4 sm:right-4 sm:text-base" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <p className="mb-2 flex items-center gap-2 text-sm font-medium text-white/85 sm:text-base">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {isEnglish ? activeProject.locationEn : activeProject.location}
              </p>
              <h3 className="text-left text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {isEnglish ? activeProject.titleEn : activeProject.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:left-5"
            aria-label={isEnglish ? "Previous project" : "Προηγούμενο έργο"}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:right-5"
            aria-label={isEnglish ? "Next project" : "Επόμενο έργο"}
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center" role="tablist" aria-label={isEnglish ? "Featured projects" : "Επιλεγμένα έργα"}>
          {featuredProjects.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group flex h-11 w-11 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`${isEnglish ? "Show" : "Προβολή"} ${isEnglish ? project.titleEn : project.title}`}
              aria-selected={index === activeIndex}
              role="tab"
            >
              <span
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-slate-300 group-hover:bg-slate-400"
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
        <Button className="ml-2 bg-primary text-white hover:bg-primary/90" asChild>
          <Link href={`/${lang}${activeProject.href}`}>
            {activeProject.href === "/projects/kassiopi-villas"
              ? isEnglish ? "View this project" : "Δείτε το έργο"
              : isEnglish ? "View all projects" : "Δείτε όλα τα έργα"}
          </Link>
        </Button>
      </div>
    </div>
  )
}
