"use client"

import { useLanguage } from "../contexts/language-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Home, PenToolIcon as Tool, PocketIcon as Pool, CalendarDays, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { RenovationCostCalculator } from "./renovation-cost-calculator"

export default function HomePage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />

        {/* Content */}
        <motion.div
          className="relative z-10 container px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight drop-shadow-lg">
                  ΦαιάCon
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-wide drop-shadow-lg bg-primary-dark/30 inline-block px-4 sm:px-6 py-2 rounded-full">
                  {isEnglish ? "TECHNICAL CONSTRUCTION" : "ΤΕΧΝΙΚΗ ΚΑΤΑΣΚΕΥΑΣΤΙΚΗ"}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
              >
                {isEnglish ? "Excellence in Construction since 1990" : "Αριστεία στις Κατασκευές από το 1990"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 sm:mt-12"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href={`/${lang}/appointment`}>{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
                </Button>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
            >
              {[
                {
                  icon: Home,
                  label: "Κατασκευή Σπιτιού",
                  labelEn: "House Construction",
                  href: "/house-construction",
                },
                {
                  icon: Tool,
                  label: "Ανακαίνιση Σπιτιού",
                  labelEn: "House Renovation",
                  href: "/house-renovation",
                },
                {
                  icon: Building2,
                  label: "Διατηρητέα Κτίρια",
                  labelEn: "Listed Houses",
                  href: "/listed-houses",
                },
                {
                  icon: Pool,
                  label: "Κατασκευή Πισίνας",
                  labelEn: "Pool Construction",
                  href: "/pool-construction",
                },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                      {isEnglish ? item.labelEn : item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                {isEnglish ? "Technical Construction Company of Corfu" : "Τεχνική Κατασκευαστική Κέρκυρας"}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600">{isEnglish ? "Since 1990" : "Από το 1990"}</p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-justify-content">
                {isEnglish
                  ? "FaiaCon, based in Corfu, is a reference point in the construction sector, offering high-quality services in house construction, home renovation, listed buildings restoration, and luxury pool construction. With over 35 years of experience, our technical team guarantees innovation, durability, and aesthetic excellence in every project we undertake."
                  : "Η ΦαίαCon, με έδρα την Κέρκυρα, αποτελεί σημείο αναφοράς στον χώρο των κατασκευών, προσφέροντας υψηλής ποιότητας υπηρεσίες στην κατασκευή σπιτιών, την ανακαίνιση κατοικιών, τη δημιουργία διατηρητέων κτιρίων και την κατασκευή πολυτελών πισινών. Με εμπειρία άνω των 35 ετών, η τεχνική μας ομάδα εγγυάται καινοτομία, αντοχή και αισθητική υπεροχή σε κάθε έργο που αναλαμβάνουμε."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  {isEnglish ? "Why Choose FaiaCon?" : "Γιατί να επιλέξετε τη ΦαίαCon;"}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {(isEnglish
                    ? [
                        "Expertise in architectural and construction excellence, with deep knowledge of local architectural heritage.",
                        "Advanced construction techniques ensuring durability, energy efficiency, and resilience to Corfu's climate conditions.",
                        "Comprehensive solutions from design and planning to project delivery.",
                        "Reliability and transparency at every stage of our collaboration.",
                      ]
                    : [
                        "Εξειδίκευση στην αρχιτεκτονική και κατασκευαστική αρτιότητα, με βαθιά γνώση της τοπικής αρχιτεκτονικής κληρονομιάς.",
                        "Προηγμένες τεχνικές κατασκευής που διασφαλίζουν την αντοχή, την ενεργειακή αποδοτικότητα και την ανθεκτικότητα στις κλιματικές συνθήκες της Κέρκυρας.",
                        "Ολοκληρωμένες λύσεις από τη μελέτη και το σχεδιασμό έως την παράδοση του έργου.",
                        "Αξιοπιστία και διαφάνεια σε κάθε στάδιο της συνεργασίας μας.",
                      ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary rounded-2xl shadow-lg p-6 sm:p-8 text-white"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {isEnglish ? "Our Commitment" : "Η Δέσμευσή μας"}
                </h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8">
                  {isEnglish
                    ? "With passion for detail and commitment to quality, we create constructions that stand out for their durability and aesthetics, harmonized with the unique environment of Corfu."
                    : "Με πάθος για τη λεπτομέρεια και δέσμευση στην ποιότητα, δημιουργούμε κατασκευές που ξεχωρίζουν για την αντοχή και την αισθητική τους, εναρμονισμένες με το μοναδικό περιβάλλον της Κέρκυρας."}
                </p>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link href={`/${lang}/appointment`}>{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-muted rounded-full">
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-sm sm:text-base text-gray-600">
                  {isEnglish
                    ? "Book an appointment today and let's design your future together!"
                    : "Κλείστε ένα ραντεβού σήμερα και ας σχεδιάσουμε μαζί το μέλλον σας!"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
            </h2>
            <p className="text-xl text-gray-600 text-justify-content">
              {isEnglish
                ? "Comprehensive construction and renovation services tailored to your needs"
                : "Ολοκληρωμένες υπηρεσίες κατασκευής και ανακαίνισης προσαρμοσμένες στις ανάγκες σας"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: isEnglish ? "House Construction" : "Κατασκευή Σπιτιού",
                description: isEnglish
                  ? "We create your dream home from the ground up."
                  : "Δημιουργούμε το σπίτι των ονείρων σας από το μηδέν.",
                href: "/house-construction",
              },
              {
                title: isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού",
                description: isEnglish
                  ? "Renew and modernize your existing space."
                  : "Ανανεώστε και εκσυγχρονίστε τον υπάρχοντα χώρο σας.",
                href: "/house-renovation",
              },
              {
                title: isEnglish ? "Listed Buildings" : "Διατηρητέα Κτίρια",
                description: isEnglish
                  ? "Special care for historically significant properties."
                  : "Ειδική φροντίδα για ιστορικά σημαντικά ακίνητα.",
                href: "/listed-houses",
              },
              {
                title: isEnglish ? "Pool Construction" : "Κατασκευή Πισίνας",
                description: isEnglish
                  ? "Design and construction of pools with modern chemical-free systems."
                  : "Σχεδιασμός και κατασκευή πισίνας με σύγχρονα συστήματα χωρίς χημικά.",
                href: "/pool-construction",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/${lang}${service.href}`} className="block group h-full">
                  <div className="h-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                    <Button className="w-full" variant="outline">
                      {isEnglish ? "Learn More" : "Μάθετε περισσότερα"}
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Renovation Cost Calculator Section */}
          <section className="relative py-24 md:py-32 bg-gray-100">
            <div className="container relative z-10 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  {isEnglish ? "Estimate Your Renovation Cost" : "Εκτιμήστε το Κόστος Ανακαίνισης"}
                </h2>
                <p className="text-xl text-gray-600 mb-8 text-justify-content">
                  {isEnglish
                    ? "With our Cost Calculator, you can easily get a quick estimate for your home renovation or door and window replacement. Simply fill in details such as the size of the space, number of rooms, material (e.g., aluminum, PVC, wood), and the quality you desire (basic, mid-range, or premium). We provide you with a hypothetical price to give you a general idea of the cost – it's not the final offer, but a useful first step. If you want accurate pricing, ask us for a quote!"
                    : "Με τον Υπολογιστή Κόστους μας, μπορείς εύκολα να πάρεις μια γρήγορη εκτίμηση για την ανακαίνιση του σπιτιού σου ή την αντικατάσταση πορτών και παραθύρων. Συμπλήρωσε απλά στοιχεία όπως το μέγεθος του χώρου, τον αριθμό των δωματίων, το υλικό (π.χ. αλουμίνιο, PVC, ξύλο) και την ποιότητα που επιθυμείς (βασική, μεσαία ή premium). Σου δίνουμε μια υποθετική τιμή για να έχεις μια γενική ιδέα του κόστους – δεν είναι η τελική προσφορά, αλλά ένα χρήσιμο πρώτο βήμα. Αν θέλεις ακριβή κοστολόγηση, ζήτα μας προσφορά!"}
                </p>
              </motion.div>
              <RenovationCostCalculator />
            </div>
          </section>

          {/* Projects Showcase */}
          <section className="relative py-16 sm:py-24 md:py-32">
            <SectionBackground />
            <div className="container relative z-10 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                  {isEnglish ? "Recent Projects" : "Πρόσφατα Έργα"}
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  {isEnglish
                    ? "Discover some of our most recent projects in Corfu"
                    : "Ανακαλύψτε μερικά από τα πιο πρόσφατα έργα μας στην Κέρκυρα"}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Ανακαίνιση Σπιτιού",
                    titleEn: "House Renovation",
                    location: "Πόλη της Κέρκυρας",
                    locationEn: "Corfu Town",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CF%83%CF%80%CE%B9%CF%84%CE%B9%CE%BF%CF%8D.jpg-4JrG4DNSdtesYOXXiWMwkTb0QcGVvE.jpeg",
                  },
                  {
                    title: "Ολοκληρωμένη Βίλα στις Σινιές",
                    titleEn: "Completed Villa in Sinies",
                    location: "Σινιές, Κέρκυρα",
                    locationEn: "Sinies, Corfu",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B2%CE%AF%CE%BB%CE%B1%20%CF%83%CE%B9%CE%BD%CE%B9%CE%AD%CF%82.jpg-TBv1Q93tF49zLCpwPjQIhP4OS6eJLq.jpeg",
                  },
                  {
                    title: "Πέτρινη Βίλα στην Κέρκυρα",
                    titleEn: "Stone Villa in Corfu",
                    location: "Κέρκυρα",
                    locationEn: "Corfu",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg",
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
                          alt={isEnglish ? project.titleEn : project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{isEnglish ? project.titleEn : project.title}</h3>
                      <p className="text-gray-600">{isEnglish ? project.locationEn : project.location}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href={`/${lang}/our-projects`}>{isEnglish ? "View All Projects" : "Δείτε Όλα τα Έργα"}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="relative py-16 sm:py-24 md:py-32">
            <SectionBackground />
            <div className="container relative z-10 px-4">
              <div className="max-w-2xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                    {isEnglish ? "Ready to Start Your Project?" : "Έτοιμοι να Ξεκινήσετε το Έργο σας;"}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    {isEnglish
                      ? "Contact us today to discuss your construction or renovation needs in Corfu."
                      : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις κατασκευαστικές ή ανακαινιστικές ανάγκες σας στην Κέρκυρα."}
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href={`/${lang}/appointment`}>
                      {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
