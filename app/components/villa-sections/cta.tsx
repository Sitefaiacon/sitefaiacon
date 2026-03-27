import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "../animated-section"

export function VillaCTA({ isEnglish }: { isEnglish: boolean }) {
  return (
    <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{isEnglish ? "Ready to Build Your Dream Villa?" : "Έτοιμοι να Χτίσετε τη Βίλα των Ονείρων σας;"}</h2>
        <p className="text-xl text-slate-300 mb-8">{isEnglish ? "Let's discuss your luxury villa project and create something extraordinary together." : "Ας συζητήσουμε το έργο σας και να δημιουργήσουμε κάτι εξαιρετικό μαζί."}</p>
        <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold" asChild>
          <Link href="/appointment">{isEnglish ? "Schedule Consultation" : "Προγραμματίστε Συζήτηση"}</Link>
        </Button>
      </div>
    </AnimatedSection>
  )
}
