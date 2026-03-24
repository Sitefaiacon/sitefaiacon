import Image from "next/image"

export function ArchitecturalBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary/70" />
    </div>
  )
}
