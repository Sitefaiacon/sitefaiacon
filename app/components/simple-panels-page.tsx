import { ArchitecturalBackground } from "./architectural-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SimplePanelsPage({ lang = "el" }: { lang?: string }) {
  const isEnglish = lang === "en"

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">ΦαιάCon Panels</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "High-Quality Materials for Construction and Renovation"
                : "Υλικά Υψηλής Ποιότητας για Κατασκευή και Ανακαίνιση"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-lg">
                <p className="leading-relaxed">
                  {isEnglish
                    ? "At ΦαιάCon, we offer a wide range of high-quality decorative panels for various construction and renovation applications. Our panels provide a 3D stone or marble appearance without the difficulty of installing real materials."
                    : "Στη ΦαιάCon, προσφέρουμε μια ευρεία γκάμα διακοσμητικών panels υψηλής ποιότητας για διάφορες εφαρμογές κατασκευής και ανακαίνισης. Τα panels μας προσφέρουν 3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης πραγματικών υλικών."}
                </p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose FaiáCon Decorative Panels?"
                    : "Γιατί να Επιλέξετε τα Διακοσμητικά Panels FaiáCon;"}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "3D stone or marble appearance without the difficulty of installing real materials"
                        : "3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης πραγματικών υλικών"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Durability over time, no painting, no peeling"
                        : "Ανθεκτικότητα στον χρόνο, χωρίς βάψιμο, χωρίς ξεφλούδισμα"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? "Ready to Transform Your Space?" : "Έτοιμοι να Μεταμορφώσετε το Χώρο σας;"}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isEnglish
                ? "Contact us today to discuss your project and discover the perfect panel solutions for your needs."
                : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να ανακαλύψετε τις τέλειες λύσεις panels για τις ανάγκες σας."}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href={`/${lang}/appointment`}>
                {isEnglish ? "Book a Free Consultation" : "Κλείστε Δωρεάν Συμβουλευτική"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
