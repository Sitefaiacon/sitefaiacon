"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Building2, Home, PenToolIcon as Tool, PocketIcon as Pool, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./components/architectural-background"
import SiteLayout from "./components/site-layout"
import { useLanguage } from "./contexts/language-context"
import { LazyComponent } from "./components/lazy-component"
import dynamic from "next/dynamic"

// Δυναμική εισαγωγή των components που δεν είναι απαραίτητα για το LCP
const DynamicSectionBackground = dynamic(
  () => import("./components/section-background").then((mod) => ({ default: mod.SectionBackground })),
  {
    ssr: false,
    loading: () => <div className="bg-gradient-secondary min-h-[300px]" />,
  },
)

export default function HomePage() {
  const { isEnglish } = useLanguage()

  return (
    <SiteLayout>
      {/* Hero Section - Βελτιστοποιημένο για LCP */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
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
                  <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
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
                <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-xl">
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

      {/* About Us Section - Lazy loaded */}
      <LazyComponent>
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
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
                  {isEnglish ? "Since 1990" : "Από το 1990"}
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="lead text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
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
                      <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </LazyComponent>

      {/* Services Section - Lazy loaded */}
      <LazyComponent>
        <section className="relative py-16 sm:py-24 md:py-32">
          <DynamicSectionBackground />
          <div className="container relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                {isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
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
                  <Link href={service.href} className="block group h-full">
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
          </div>
        </section>
      </LazyComponent>

      {/* Προσθήκη PWA Manifest */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ΦαιάCon",
            url: "https://faiacon.gr",
            logo: "https://faiacon.gr/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+30 6987797679",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Κέρκυρα",
              postalCode: "49100",
              addressCountry: "GR",
            },
          }),
        }}
      />
    </SiteLayout>
  )
}
