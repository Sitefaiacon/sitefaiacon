"use client"

import { AnimatedSection } from "../animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArchitecturalBackground } from "../architectural-background"

export function VillaHero({ isEnglish }: { isEnglish: boolean }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <ArchitecturalBackground />
      <div className="relative z-10 container px-4 max-w-6xl mx-auto">
        <AnimatedSection className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            {isEnglish ? "Luxury Villas in Corfu" : "Πολυτελείς Βίλες στην Κέρκυρα"}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
            {isEnglish
              ? "Complete construction and renovation of luxury villas and residences. From architectural design to final delivery, we create exceptional living spaces that combine Corfiot tradition with modern elegance."
              : "Ολοκληρωμένη κατασκευή και ανακαίνιση πολυτελών βιλών και κατοικιών. Από τον αρχιτεκτονικό σχεδιασμό έως την τελική παράδοση, δημιουργούμε εξαιρετικούς χώρους διαβίωσης που συνδυάζουν την κερκυραϊκή παράδοση με τη σύγχρονη κομψότητα."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
              asChild
            >
              <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
