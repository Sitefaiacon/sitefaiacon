"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, PenToolIcon as Tool, Shield, Zap } from "lucide-react"
import { PenToolIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"

export default function HouseConstructionPage({ lang }: { lang: string }) {
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
              {isEnglish ? "House Construction" : "Κατασκευή Σπιτιού"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "We build your dream home with quality and reliability"
                : "Χτίζουμε το σπίτι των ονείρων σας με ποιότητα και αξιοπιστία"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Immediately after hero */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-lg space-y-6">
                <p className="leading-relaxed mt-8 text-justify-content">
                  {isEnglish
                    ? "If you dream of building your home or business space, you know that the process can seem overwhelming: from finding the ideal plot to managing the required permits and bureaucracy. We are here to handle every step, so you can focus on your vision."
                    : "Αν ονειρεύεστε να χτίσετε το σπίτι ή το επαγγελματικό σας χώρο, ξέρετε ότι η διαδικασία μπορεί να φαίνεται συντριπτική: από την εύρεση του ιδανικού οικοπέδου έως τη διαχείριση των απαιτούμενων αδειών και τη γραφειοκρατία."}
                  <span className="text-primary font-bold">
                    {isEnglish
                      ? " We are here to handle every step, so you can focus on your vision."
                      : " Εμείς είμαστε εδώ για να αναλάβουμε κάθε βήμα, ώστε εσείς να εστιάσετε στο όραμά σας."}
                  </span>
                </p>

                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Comprehensive Support & Experience" : "Πλήρης Υποστήριξη & Εμπειρία"}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Bureaucracy, Without Stress:" : "Γραφειοκρατία, Χωρίς Άγχος:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "We handle every document, permit, and legal process, ensuring everything meets legislative requirements."
                            : "Ασχολούμαστε με κάθε έγγραφο, άδεια και νομική διαδικασία, διασφαλίζοντας ότι όλα πληρούν τις νομοθετικές απαιτήσεις."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Land Acquisition:" : "Εύρεση Οικοπέδου:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "With local network knowledge and criteria (such as building regulations, access to services, project scale), we help you find the ideal space for your project."
                            : "Με γνώσεις τοπικού δικτύου και κριτήρια (όπως δόμηση, πρόσβαση σε υπηρεσίες, κλίμακα έργου), σας βοηθάμε να βρείτε τον ιδανικό χώρο για το έργο σας."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Clear Timeframes:" : "Χρονικά Πλαίσια με Σαφήνεια:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "We set realistic deadlines for each phase of the project, with transparency in every development."
                            : "Καθορίζουμε ρεαλιστικές προθεσμίες για κάθε φάση του έργου, με διαφάνεια σε κάθε εξέλιξη."}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Why Choose Us?" : "Γιατί να Επιλέξετε Εμάς;"}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Experience & Expertise:" : "Εμπειρία & Εξειδίκευση:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "Years of industry activity and dozens of successful projects are the best guarantee."
                            : "Χρόνια δραστηριότητας στον κλάδο και δεκάδες επιτυχημένα έργα είναι η καλύτερη εγγύηση."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Personal Approach:" : "Προσωπική Προσέγγιση:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "Every client is unique. We design solutions that exclusively fit your needs."
                            : "Κάθε πελάτης είναι μοναδικός. Σχεδιάζουμε λύσεις που ταιριάζουν αποκλειστικά στις ανάγκες σας."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl font-bold text-primary">•</span>
                      <div>
                        <span className="font-bold text-primary">
                          {isEnglish ? "Safety & Trust:" : "Ασφάλεια & Εμπιστοσύνη:"}
                        </span>{" "}
                        <p className="text-justify-content">
                          {isEnglish
                            ? "We are by your side from the first meeting to the handover of the keys."
                            : "Είμαστε δίπλα σας από την πρώτη συνάντηση έως την παράδοση των κλειδιών."}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {isEnglish
                      ? "The Step Towards Realizing Your Dream"
                      : "Το Βήμα Προς την Ολοκλήρωση του Ονείρου σας"}
                  </h3>
                  <p className="text-lg text-justify-content">
                    {isEnglish
                      ? "Leave the complex terms and endless obligations to us."
                      : "Αφήστε τους πολύπλοκους όρους και τις ατέλειωτες υποχρεώσεις σε εμάς."}
                    <span className="font-bold text-primary">
                      {isEnglish
                        ? " You just choose your vision – we make it happen."
                        : " Εσείς απλώς επιλέγετε το όραμά σας – εμείς το υλοποιούμε."}
                    </span>
                  </p>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                    <Link href={`/${lang}/appointment`}>{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 md:py-32">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
            </h2>
            <p className="text-xl text-gray-600 text-justify-content">
              {isEnglish
                ? "Comprehensive construction services tailored to your needs"
                : "Ολοκληρωμένες υπηρεσίες κατασκευής προσαρμοσμένες στις ανάγκες σας"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: PenToolIcon,
                title: isEnglish ? "Design" : "Σχεδιασμός",
                description: isEnglish
                  ? "Every house starts with an idea, and we turn it into reality. With personalized design, tailored to your needs and desires, we create functional and aesthetically pleasing spaces. We use modern architectural solutions, making the most of every square meter."
                  : "Κάθε σπίτι ξεκινάει από μια ιδέα και εμείς τη μετατρέπουμε σε πραγματικότητα. Με εξατομικευμένο σχεδιασμό, προσαρμοσμένο στις ανάγκες και τις επιθυμίες σας, δημιουργούμε λειτουργικούς και αισθητικά άρτιους χώρους. Χρησιμοποιούμε σύγχρονες αρχιτεκτονικές λύσεις, αξιοποιώντας στο έπακρο κάθε τετραγωνικό μέτρο.",
                href: "/services/design",
              },
              {
                icon: Tool,
                title: isEnglish ? "Construction" : "Κατασκευή",
                description: isEnglish
                  ? "Quality in construction is the foundation for a durable and aesthetically pleasing result. We undertake high-standard constructions, with attention to detail and use of top-quality materials. Whether it's new construction or renovation, we guarantee an excellent result that combines functionality and aesthetics."
                  : "Η ποιότητα στην κατασκευή είναι η βάση για ένα ανθεκτικό και καλαίσθητο αποτέλεσμα. Αναλαμβάνουμε κατασκευές υψηλών προδιαγραφών, με προσοχή στη λεπτομέρεια και χρήση κορυφαίων υλικών. Είτε πρόκειται για νέα οικοδόμηση είτε για ανακαίνιση, εγγυόμαστε άρτιο αποτέλεσμα που συνδυάζει λειτουργικότητα και αισθητική.",
                href: "/services/construction",
              },
              {
                icon: Shield,
                title: isEnglish ? "Safety" : "Ασφάλεια",
                description: isEnglish
                  ? "Safety is non-negotiable at every stage of construction. We apply all safety standards and strictly follow building regulations, ensuring a stable, safe, and durable environment for you and your family."
                  : "Η ασφάλεια είναι αδιαπραγμάτευτη σε κάθε στάδιο της κατασκευής. Εφαρμόζουμε όλα τα πρότυπα ασφαλείας και ακολουθούμε αυστηρά τους οικοδομικούς κανονισμούς, εξασφαλίζοντας ένα σταθερό, ασφαλές και ανθεκτικό περιβάλλον για εσάς και την οικογένειά σας.",
                href: "/services/safety",
              },
              {
                icon: Zap,
                title: isEnglish ? "Energy Efficiency" : "Ενεργειακή Απόδοση",
                description: isEnglish
                  ? "Modern design requires energy savings and sustainability. We incorporate energy-efficient solutions, from thermal insulation to renewable energy sources, to reduce your building's operating costs and contribute to a greener future."
                  : "Ο σύγχρονος σχεδιασμός απαιτεί εξοικονόμηση ενέργειας και βιωσιμότητα. Ενσωματώνουμε ενεργειακά αποδοτικές λύσεις, από θερμομόνωση έως ανανεώσιμες πηγές ενέργειας, ��ια να μειώσουμε το κόστος λειτουργίας του κτιρίου σας και να συμβάλλουμε σε ένα πιο πράσινο μέλλον.",
                href: "/services/energy-efficiency",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <service.icon className="w-16 h-16 text-primary mb-8" />
                  <h3 className="text-3xl font-semibold mb-6 text-primary">{service.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-justify-content">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{isEnglish ? "Our Approach" : "Η Προσέγγισή μας"}</h2>
            <p className="text-lg text-white/80 text-justify-content">
              {isEnglish
                ? "The process of building your house is carefully designed to ensure the best possible outcome"
                : "Η διαδικασία κατασκευής του σπιτιού σας είναι προσεκτικά σχεδιασμένη για να εξασφαλίσει το καλύτερο δυνατό αποτέλεσμα"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{isEnglish ? "Our Steps" : "Τα Βήματά μας"}</h3>
              <ul className="space-y-4">
                {(isEnglish
                  ? [
                      "Initial meeting and discussion of your needs",
                      "Project design and planning",
                      "Selection of high-quality materials",
                      "Construction with emphasis on detail",
                      "Continuous communication and updates",
                      "Final inspection and handover",
                    ]
                  : [
                      "Αρχική συνάντηση και συζήτηση των αναγκών σας",
                      "Σχεδιασμός και προγραμματισμός του έργου",
                      "Επιλογή υλικών υψηλής ποιότητας",
                      "Κατασκευή με έμφαση στη λεπτομέρεια",
                      "Συνεχής επικοινωνία και ενημέρωση",
                      "Τελικός έλεγχος και παράδοση",
                    ]
                ).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1" />
                    <span className="text-white/90 text-justify-content">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {isEnglish ? "Why Choose Us" : "Γιατί να μας Επιλέξετε"}
              </h3>
              <p className="text-white/90 mb-4 text-justify-content">
                {isEnglish
                  ? "With over 25 years of experience in house construction, we bring expertise and innovation to every project. Our team of experienced professionals ensures that your dream home becomes a reality, on time and within budget."
                  : "Με πάνω από 25 χρόνια εμπειρίας στην κατασκευή σπιτιών, φέρνουμε εξειδίκευση και καινοτομία σε κάθε έργο. Η ομάδα μας από έμπειρους επαγγελματίες εξασφαλίζει ότι το όνειρό σας για το ιδανικό σπίτι γίνεται πραγματικότητα, εγκαίρως και εντός προϋπολογισμού."}
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-dark"
                asChild
              >
                <Link href={`/${lang}/portfolio`}>
                  {isEnglish ? "View Our Portfolio" : "Δείτε το Χαρτοφυλάκιό μας"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="relative py-24 md:py-32">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Recent Projects" : "Πρόσφατα Έργα"}
            </h2>
            <p className="text-lg text-gray-600 text-justify-content">
              {isEnglish
                ? "Take a look at some of our most recent house construction projects we've completed"
                : "Ρίξτε μια ματιά σε μερικά από τα πιο πρόσφατα έργα κατασκευής σπιτιών που έχουμε ολοκληρώσει"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: isEnglish ? "Completed Villa in Sinies" : "Ολοκληρωμένη Βίλα στις Σινιές",
                location: isEnglish ? "Sinies, Corfu" : "Σινιές, Κέρκυρα",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B2%CE%AF%CE%BB%CE%B1%20%CF%83%CE%B9%CE%BD%CE%B9%CE%AD%CF%82.jpg-TBv1Q93tF49zLCpwPjQIhP4OS6eJLq.jpeg",
              },
              {
                title: isEnglish ? "Stone Villa in Corfu" : "Πέτρινη Βίλα στην Κέρκυρα",
                location: isEnglish ? "Corfu" : "Κέρκυρα",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg",
              },
              {
                title: isEnglish ? "Modern Renovation with Lighting" : "Σύγχρονη Ανακαίνιση με Φωτισμό",
                location: isEnglish ? "Corfu" : "Κέρκυρα",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AC%CF%88%CE%B9%CE%BC%CE%BF%20%CF%80%CE%BF%CE%BB%CF%85%CE%BA%CE%B1%CF%84%CE%BF%CE%B9%CE%BA%CE%AF%CE%B1%CF%82.jpg-1pS4NAFbrYMM6lhEmNdYov03kYA6JG.jpeg",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/${lang}/our-projects`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isEnglish ? "Ready to Start Your Project?" : "Έτοιμοι να Ξεκινήσετε το Έργο σας;"}
              </h2>
              <p className="text-lg text-white/80 mb-8 text-justify-content">
                {isEnglish
                  ? "Contact us today to discuss how we can make your dream of a new home a reality."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε πώς μπορούμε να κάνουμε το όνειρό σας για ένα νέο σπίτι πραγματικότητα."}
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
