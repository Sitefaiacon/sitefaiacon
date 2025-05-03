"\"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/language-context"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PanelsPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {isEnglish ? "ΦαιάCon Panels" : "ΦαιάCon Panels"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "High-Quality Materials for Construction and Renovation"
                : "Υλικά Υψηλής Ποιότητας για Κατασκευή και Ανακαίνιση"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-lg">
                <p className="leading-relaxed text-justify-content">
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
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Waterproof & UV-resistant, ideal for wet environments or exterior walls"
                        : "Αδιάβροχα & UV-resistant, ιδανικά για υγρά περιβάλλοντα ή εξωτερικούς τοίχους"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Installation in just 1 day with minimal disruption"
                        : "Εγκατάσταση σε μόλις 1 ημέρα με ελάχιστη φασαρία"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose Panels Instead of Simple Painting?"
                    : "Γιατί να Επιλέξω Panels Αντί για Απλό Βάψιμο;"}
                </h3>
                <p className="mb-4 text-justify-content">
                  {isEnglish
                    ? "Simple paint wears out quickly, gets dirty, and constantly needs renewal. FaiáCon Panels not only protect but also upgrade the aesthetics of your space, giving a premium result with minimal maintenance."
                    : "Η απλή βαφή φθείρεται γρήγορα, λερώνει, και χρειάζεται συνεχώς ανανέωση. Τα FaiáCon Panels όχι μόνο προστατεύουν αλλά και αναβαθμίζουν την αισθητική του χώρου, δίνοντας premium αποτέλεσμα με ελάχιστη συντήρηση."}
                </p>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish
                      ? "Contact us today for a free consultation!"
                      : "Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν συμβουλευτική!"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
