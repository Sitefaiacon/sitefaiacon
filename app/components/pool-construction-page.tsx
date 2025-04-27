"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Waves, ThermometerSun, CheckCircle2, Shield, Timer } from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"

export default function PoolConstructionPage({ lang }: { lang: string }) {
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
              {isEnglish ? "Pool Construction with Full Equipment" : "Κατασκευή Πισίνων με Πλήρη Εξοπλισμό"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Professional Precision & Guaranteed Quality Result"
                : "Επαγγελματική Ακρίβεια & Εγγύηση Ποιοτικού Αποτελέσματος"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
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
                  {isEnglish ? "Our company specializes in creating " : "Η εταιρεία μας ειδικεύεται στην δημιουργία "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "customized high-tech pools" : "προσαρμοσμένων πισίνων υψηλής τεχνολογίας"}
                  </span>
                  {isEnglish
                    ? " that meet your unique requirements. Whether you desire a pool with "
                    : ", που ανταποκρίνονται στις μοναδικές σας απαιτήσεις. Είτε επιθυμείτε πισίνα με "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "liner, tile, or mosaic" : "liner, πλακάκι ή ψηφίδα"}
                  </span>
                  {isEnglish ? ", we ensure " : ", διασφαλίζουμε "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "customized solutions" : "εξατομικευμένες λύσεις"}
                  </span>
                  {isEnglish
                    ? " through specialized crews, combining "
                    : " μέσω εξειδικευμένων συνεργείων, που συνδυάζουν "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "aesthetic perfection" : "αισθητική τελειότητα"}
                  </span>
                  {isEnglish ? " with " : " με "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "optimal functionality" : "βέλτιστη λειτουργικότητα"}
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {isEnglish ? "Why work with us?" : "Γιατί να συνεργαστείτε μαζί μας;"}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Top Quality Products & Materials" : "Προϊόντα & Υλικά Κορυφαίας Ποιότητας"}
                      </h4>
                      <p className="text-justify-content">
                        {isEnglish
                          ? "We use materials of guaranteed durability (certified by European standards), offering long-term performance and safety."
                          : "Χρησιμοποιούμε εγγυημένης ανθεκτικότητας υλικά (πιστοποιημένα με ευρωπαϊκά πρότυπα), που προσφέρουν μακροχρόνια απόδοση και ασφάλεια."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Experience & Expertise" : "Εμπειρία & Εξειδίκευση"}
                      </h4>
                      <p className="text-justify-content">
                        {isEnglish
                          ? "Your project is assigned to highly trained professionals (plumbers, electricians, structural engineers) with proven experience in large-scale projects."
                          : "Το έργο σας ανατίθεται σε άριστα καταρτισμένους επαγγελματίες (υδραυλικούς, ηλεκτρολόγους, δομικούς μηχανικούς) με τεκμηριωμένη εμπειρία σε έργα κλίμακας."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Time-efficient solutions" : "Χρονοαποδοτικές λύσεις"}
                      </h4>
                      <p className="text-justify-content">
                        {isEnglish
                          ? "We deliver every project within the agreed deadlines, without compromising on quality."
                          : "Παραδίδουμε κάθε έργο εντός των συμφωνημένων προθεσμιών, χωρίς θυσίες στην ποιότητα."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Comprehensive 'Turnkey' Service" : "Ολοκληρωμένη Υπηρεσία «Κλειδί στο Χέρι»"}
                      </h4>
                      <p className="text-justify-content">
                        {isEnglish
                          ? "From the initial study to the final delivery, we handle every process (design, permits, installation, trial operation)."
                          : "Από την πρώτη μελέτη έως την τελική παράδοση, αναλαμβάνουμε κάθε διαδικασία (σχεδιασμός, άδειες, εγκατάσταση, δοκιμαστική λειτουργία)."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Let us transform your vision into reality"
                    : "Αφήστε μας να μετατρέψουμε την όρασή σας σε πραγματικότητα"}
                </h3>
                <p className="text-lg text-justify-content">
                  {isEnglish
                    ? "With a focus on innovation, precision, and affordability, we create recreational spaces that express your style and promote well-being."
                    : "Με γνώμονα την καινοτομία, την ακρίβεια και την προσιτή τιμή, δημιουργούμε χώρους αναψυχής που εκφράζουν το στυλ σας και προάγουν τη well-being ζωή."}
                </p>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish
                      ? "Contact us today for a free customized solution study!"
                      : "Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν μελέτη προσαρμοσμένης λύσης!"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              {isEnglish ? "Features" : "Χαρακτηριστικά"}
            </h2>
            <p className="text-xl text-gray-600 text-justify-content">
              {isEnglish ? "Modern solutions for the ideal pool" : "Σύγχρονες λύσεις για την ιδανική πισίνα"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Waves,
                title: isEnglish ? "Chemical-Free Filtration & Cleaning" : "Φιλτράρισμα & Καθαρισμός χωρίς Χημικά",
                description: isEnglish
                  ? "Our pools feature advanced electrolysis systems that ensure impeccable water quality without the need for chemical use. The electrolysis process produces natural disinfectant, keeping the water clean and safe without chemical residues. This means less maintenance, no unpleasant odors and skin or eye irritations, offering a superior swimming experience."
                  : "Οι πισίνες μας διαθέτουν προηγμένα συστήματα ηλεκτρόλυσης που εξασφαλίζουν άψογη ποιότητα νερού χωρίς την ανάγκη χρήσης χημικών. Η διαδικασία της ηλεκτρόλυσης παράγει φυσικό απολυμαντικό, διατηρώντας το νερό καθαρό και ασφαλές χωρίς υπολείμματα χημικών ουσιών. Αυτό σημαίνει λιγότερη συντήρηση, χωρίς δυσάρεστες οσμές και ερεθισμούς στο δέρμα και τα μάτια, προσφέροντας μια ανώτερη εμπειρία κολύμβησης.",
              },
              {
                icon: ThermometerSun,
                title: isEnglish
                  ? "Economical & Efficient Heating & Air Conditioning"
                  : "Θέρμανση & Κλιματισμός με Οικονομία & Απόδοση",
                description: isEnglish
                  ? "Our innovative heating and air conditioning systems for pools maintain the water temperature constant and ideal, regardless of the season. We use energy-efficient solutions which, combined with the electrolysis method, contribute to reducing operational costs, as there is no need to purchase and use chemical disinfectants. Additionally, our technologies minimize heat loss, saving energy and money."
                  : "Τα καινοτόμα συστήματα θέρμανσης και κλιματισμού των πισινών μας διατηρούν τη θερμοκρασία του νερού σταθερή και ιδανική, ανεξαρτήτως εποχής. Χρησιμοποιούμε ενεργειακά αποδοτικές λύσεις, οι οποίες σε συνδυασμό με τη μέθοδο ηλεκτρόλυσης συμβάλλουν στη μείωση του λειτουργικού κόστους, καθώς δεν απαιτείται αγορά και χρήση χημικών απολυμαντικών. Επιπλέον, οι τεχνολογίες μας ελαχιστοποιούν τις απώλειες θερμότητας, εξοικονομώντας ενέργεια και χρήματα.",
              },
              {
                icon: Shield,
                title: isEnglish ? "Safety Without Harmful Chemicals" : "Ασφάλεια χωρίς Επιβλαβείς Χημικές Ουσίες",
                description: isEnglish
                  ? "Our pools are equipped with advanced safety systems that protect both swimmers and the installation. The avoidance of chemical substances eliminates the risk of accidents from their improper use, reduces equipment corrosion, and ensures an absolutely safe environment for children and adults. Additionally, the use of anti-slip materials and safety covers provides maximum protection."
                  : "Οι πισίνες μας είναι εξοπλισμένες με προηγμένα συστήματα ασφάλειας, που προστατεύουν τόσο τους λουόμενους όσο και την εγκατάσταση. Η αποφυγή χημικών ουσιών εξαλείφει τον κίνδυνο ατυχημάτων από ακατάλληλη χρήση τους, μειώνει τη διάβρωση του εξοπλισμού και εξασφαλίζει ένα απόλυτα ασφαλές περιβάλλον για παιδιά και ενήλικες. Επιπλέον, η χρήση αντιολισθητικών υλικών και καλυμμάτων ασφαλείας παρέχει μέγιστη προστασία.",
              },
              {
                icon: Timer,
                title: isEnglish
                  ? "Automation for Ease & Smart Management"
                  : "Αυτοματισμοί για Ευκολία & Έξυπνη Διαχείριση",
                description: isEnglish
                  ? "Our pools feature automated control systems that allow programming and management of all functions via mobile or tablet. With automatic electrolysis control, there's no need for continuous chemical addition, reducing maintenance and time spent. The system provides real-time updates on water condition, ensuring consistent quality and ideal swimming conditions."
                  : "Οι πισίνες μας διαθέτουν αυτοματοποιημένα συστήματα ελέγχου που επιτρέπουν τον προγραμματισμό και τη διαχείριση όλων των λειτουργιών μέσω κινητού ή tablet. Με αυτόματο έλεγχο ηλεκτρόλυσης, δεν χρειάζεται συνεχής προσθήκη χημικών, μειώνοντας τη συντήρηση και τον χρόνο απασχόλησης. Το σύστημα ενημερώνει σε πραγματικό χρόνο για την κατάσταση του νερού, εξασφαλίζοντας σταθερή ποιότητα και ιδανικές συνθήκες κολύμβησης.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-primary mb-8" />
                  <h3 className="text-3xl font-semibold mb-6 text-primary">{feature.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-justify-content">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chemical-Free Pools Section */}
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
                {isEnglish ? "Chemical-Free Pools – The Ultimate Solution" : "Πισίνες Χωρίς Χημικά – Η Απόλυτη Λύση"}
              </h2>
              <p className="text-lg text-white/80 mb-8 text-justify-content">
                {isEnglish
                  ? "No more chemicals! Our pools operate with electrolysis, providing crystal-clear water without dangerous chemical additives. This means:"
                  : "Τέλος στα χημικά! Οι πισίνες μας λειτουργούν με ηλεκτρόλυση, παρέχοντας κρυστάλλινο νερό χωρίς επικίνδυνα χημικά πρόσθετα. Αυτό σημαίνει:"}
              </p>
              <ul className="text-left space-y-4">
                {[
                  isEnglish
                    ? "Less maintenance – No need for constant addition and monitoring of chemicals."
                    : "Λιγότερη συντήρηση – Δεν απαιτείται συνεχής προσθήκη και έλεγχος χημικών.",
                  isEnglish
                    ? "Absolute safety – No chemical irritations or unwanted reactions."
                    : "Απόλυτη ασφάλεια – Χωρίς χημικούς ερεθισμούς ή ανεπιθύμητες αντιδράσεις.",
                  isEnglish
                    ? "Cost reduction – No need to purchase chemical products."
                    : "Μείωση κόστους – Χωρίς ανάγκη αγοράς χημικών προϊόντων.",
                  isEnglish
                    ? "Environmentally friendly – No burden on water reserves and the ecosystem."
                    : "Φιλικότητα προς το περιβάλλον – Καμία επιβάρυνση στα αποθέματα νερού και στο οικοσύστημα.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {isEnglish ? "Ready to Get Your Dream Pool?" : "Έτοιμοι να Αποκτήσετε την Πισίνα των Ονείρων σας;"}
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-justify-content">
                {isEnglish
                  ? "Contact us today to discuss your ideas and receive a personalized quote."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις ιδέες σας και να λάβετε μια εξατομικευμένη προσφορά."}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
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
