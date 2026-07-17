import Image from "next/image"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  priority?: boolean
  hideText?: boolean
}

export function ProjectCard({ title, location, image, priority = false, hideText = false }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          // Only above-the-fold cards should be prioritized; the rest lazy-load (better LCP)
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.style.display = "none"
          }}
        />
      </div>
      {!hideText && (
        <div className="p-4">
          <h3 className="line-clamp-2 !text-left text-lg font-semibold">{title}</h3>
          <p className="mt-1 !text-left text-sm text-gray-500">{location}</p>
        </div>
      )}
    </div>
  )
}
