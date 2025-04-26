"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function ArchitecturalBackground({ className = "" }: { className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div className="relative w-full h-full" style={{ scale, opacity }}>
        <Image
          src="/images/hero-background.jpg"
          alt="Architectural Background"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary/70" />
      </motion.div>
    </div>
  )
}
