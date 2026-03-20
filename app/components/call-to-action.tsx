"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"

interface CallToActionProps {
  title: string
  description: string
  buttonText?: string
}

export function CallToAction({ title, description, buttonText = "Κλείστε Δωρεάν Ραντεβού" }: CallToActionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-primary text-white">
      <ArchitecturalBackground className="opacity-10" />
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-lg text-white/80 mb-8">{description}</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/appointment">{buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
