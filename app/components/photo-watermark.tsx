import { cn } from "@/lib/utils"

interface PhotoWatermarkProps {
  className?: string
}

export function PhotoWatermark({ className }: PhotoWatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bottom-2.5 right-2.5 z-20 select-none font-serif text-xs font-semibold tracking-wide text-white/55 [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] sm:bottom-3 sm:right-3 sm:text-sm",
        className,
      )}
    >
      faiacon.gr
    </span>
  )
}
