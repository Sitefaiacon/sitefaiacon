import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "../animated-section"

export function HotelCTA({ isEnglish }: { isEnglish: boolean }) {
  return (
    <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{isEnglish ? "Ready to Elevate Your Hotel?" : "Έτοιμοι να Ανυψώσετε το Ξενοδοχείό σας;"}</h2>
        <p className="text-xl text-slate-300 mb-8">{isEnglish ? "Let's discuss how we can transform your property and exceed your guests' expectations." : "Ας συζητήσουμε πώς μπορούμε να μετατρέψουμε την ιδιοκτησία σας."}</p>
        <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold" asChild>
          <Link href="/appointment">{isEnglish ? "Schedule Consultation" : "Προγραμματίστε Συζήτηση"}</Link>
        </Button>
      </div>
    </AnimatedSection>
  )
}
