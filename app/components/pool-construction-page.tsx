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
              {isEnglish ? "Swimming Pool Construction in Corfu" : "Κατασκευή Πισίνας στην Κέρκυρα"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Design, equipment installation and technical support"
                : "Μελέτη, εγκατάσταση εξοπλισμού και τεχνική υποστήριξη"}
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
                  {isEnglish ? "Our company specializes in creating " : "Αναλαμβάνουμε "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "customized high-tech pools" : "κατασκευή πισινών"}
                  </span>
                  {isEnglish
                    ? " that meet your unique requirements. Whether you desire a pool with "
                    : " που λειτουργούν τέλεια και κρατάνε. Απ' τον σχεδιασμό "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "liner, tile, or mosaic" : "έως τη δοκιμή"}
                  </span>
                  {isEnglish ? ", we ensure " : ", φροντίζουμε "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "customized solutions" : "κάθε λεπτομέρεια"}
                  </span>
                  {isEnglish
                    ? " through specialized crews, combining "
                    : " με "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "aesthetic perfection" : "τεχνική ακρίβεια"}
                  </span>
                  {isEnglish ? " with " : " και "}
                  <span className="text-primary font-bold">
                    {isEnglish ? "optimal functionality" : "αισθετική ποιότητα"}
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
                title: isEnglish ? "Salt Electrolysis & Filtration" : "Ηλεκτρόλυση Άλατος & Φίλτρανση",
                description: isEnglish
                  ? "Salt electrolysis produces a controlled level of disinfectant from the salt in the water. Combined with correctly sized filtration and regular water testing, it can simplify routine care and reduce manual chemical handling."
                  : "Η ηλεκτρόλυση άλατος παράγει ελεγχόμενη ποσότητα απολυμαντικού από το αλάτι του νερού. Σε συνδυασμό με σωστά διαστασιολογημένη φίλτρανση και τακτικούς ελέγχους νερού, απλοποιεί τη συντήρηση και μειώνει τη χειροκίνητη διαχείριση χημικών.",
              },
              {
                icon: ThermometerSun,
                title: isEnglish
                  ? "Efficient Pool Heating"
                  : "Αποδοτική Θέρμανση Πισίνας",
                description: isEnglish
                  ? "Where required, we design pool heating with efficient heat pumps, suitable controls and covers that limit heat loss. The final system is selected according to pool size, use and desired season."
                  : "Όπου απαιτείται, σχεδιάζουμε τη θέρμανση της πισίνας με αποδοτικές αντλίες θερμότητας, κατάλληλους αυτοματισμούς και καλύμματα που περιορίζουν τις απώλειες. Η τελική λύση επιλέγεται ανάλογα με το μέγεθος, τη χρήση και την επιθυμητή περίοδο λειτουργίας.",
              },
              {
                icon: Shield,
                title: isEnglish ? "Safety Equipment & Controlled Dosing" : "Εξοπλισμός Ασφαλείας & Ελεγχόμενη Δοσολογία",
                description: isEnglish
                  ? "We can combine controlled dosing with anti-slip finishes, safety covers and suitable access solutions. Every pool still requires responsible supervision, regular testing and maintenance according to the installed equipment."
                  : "Συνδυάζουμε την ελεγχόμενη δοσολογία με αντιολισθητικά τελειώματα, καλύμματα ασφαλείας και κατάλληλες λύσεις πρόσβασης. Κάθε πισίνα εξακολουθεί να χρειάζεται υπεύθυνη επίβλεψη, τακτικούς ελέγχους και συντήρηση σύμφωνα με τον εξοπλισμό της.",
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
                {isEnglish ? "Salt Electrolysis for Simpler Water Care" : "Ηλεκτρόλυση Άλατος για Απλούστερη Συντήρηση"}
              </h2>
              <p className="text-lg text-white/80 mb-8 text-justify-content">
                {isEnglish
                  ? "Salt electrolysis is not chemical-free: it generates disinfectant from salt in a controlled way. When correctly designed and maintained, the system offers:"
                  : "Η ηλεκτρόλυση άλατος δεν σημαίνει πισίνα χωρίς χημική απολύμανση: παράγει απολυμαντικό από το αλάτι με ελεγχόμενο τρόπο. Με σωστό σχεδιασμό και συντήρηση προσφέρει:"}
              </p>
              <ul className="text-left space-y-4">
                {[
                  isEnglish
                    ? "Simpler routine care with automated disinfectant production."
                    : "Απλούστερη καθημερινή φροντίδα με αυτοματοποιημένη παραγωγή απολυμαντικού.",
                  isEnglish
                    ? "More stable water treatment when measurements remain within the correct range."
                    : "Σταθερότερη επεξεργασία νερού όταν οι μετρήσεις διατηρούνται στα σωστά όρια.",
                  isEnglish
                    ? "Reduced need for manual disinfectant additions, depending on water conditions and use."
                    : "Μικρότερη ανάγκη χειροκίνητης προσθήκης απολυμαντικού, ανάλογα με το νερό και τη χρήση.",
                  isEnglish
                    ? "Compatibility with automated monitoring and remote system control."
                    : "Δυνατότητα αυτοματοποιημένης παρακολούθησης και απομακρυσμένου ελέγχου του συστήματος.",
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
