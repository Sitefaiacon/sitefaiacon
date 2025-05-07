"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Building2, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"

export default function ListedHousesPage({ lang }: { lang: string }) {
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
              {isEnglish ? "Listed Buildings" : "Διατηρητέα Κτίρια"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Restoration & Renovation with Respect to History and Tradition"
                : "Αναπαλαίωση & Αποκατάσταση με Σεβασμό στην Ιστορία και την Παράδοση"}
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
                <p className="leading-relaxed">
                  {isEnglish
                    ? "Corfu, with its rich architectural heritage, hosts one of the most authentic and well-preserved historical settlements in Greece. Its listed buildings are living monuments of the island's history and culture. However, their maintenance and restoration require "
                    : "Η Κέρκυρα, με την πλούσια αρχιτεκτονική της κληρονομιά, φιλοξενεί έναν από τους πιο αυθεντικούς και καλοδιατηρημένους ιστορικούς οικισμούς της Ελλάδας. Τα διατηρητέα κτίρια της αποτελούν ζωντανά μνημεία της ιστορίας και του πολιτισμού του νησιού, ωστόσο, η συντήρηση και η αποκατάστασή τους απαιτούν "}
                  <span className="text-primary font-bold">
                    {isEnglish
                      ? "specialized knowledge, expertise, and respect for tradition"
                      : "εξειδικευμένη γνώση, τεχνογνωσία και σεβασμό στην παράδοση"}
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {isEnglish ? "The Uniqueness of Restoration Projects" : "Η Ιδιαιτερότητα των Έργων Αποκατάστασης"}
                </h3>
                <p className="mb-4">
                  {isEnglish
                    ? "Listed buildings are constructed with techniques and materials that differ from modern constructions, making each restoration project unique. The main challenges we face include:"
                    : "Τα διατηρητέα κτίρια είναι κατασκευασμένα με τεχνικές και υλικά που διαφέρουν από τις σύγχρονες κατασκευές, γεγονός που καθιστά κάθε έργο αποκατάστασης μοναδικό. Οι βασικές προκλήσεις που αντιμετωπίζουμε περιλαμβάνουν:"}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish
                          ? "Preserving architectural authenticity"
                          : "Διατήρηση της αρχιτεκτονικής αυθεντικότητας"}
                      </h4>
                      <p>
                        {isEnglish
                          ? "We restore each building with absolute respect for its historical details, using traditional techniques and natural materials such as stone, wood, and lime mortars."
                          : "Αποκαθιστούμε κάθε κτίριο με απόλυτο σεβασμό στις ιστορικές του λεπτομέρειες, χρησιμοποιώντας παραδοσιακές τεχνικές και φυσικά υλικά, όπως πέτρα, ξύλο και ασβεστοκονιάματα."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish
                          ? "Structural reinforcement and restoration"
                          : "Στατική ενίσχυση και δομική αποκατάσταση"}
                      </h4>
                      <p>
                        {isEnglish
                          ? "We proceed with reinforcements using modern but discreet methods, maintaining the original aesthetics of the building."
                          : "Προχωράμε σε ενισχύσεις με σύγχρονες αλλά διακριτικές μεθόδους, διατηρώντας την αρχική αισθητική του κτιρίου."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Compliance with regulations" : "Συμβατότητα με κανονισμούς"}
                      </h4>
                      <p>
                        {isEnglish
                          ? "We have the experience to handle the entire licensing process, ensuring full legality for your project."
                          : "Διαθέτουμε την εμπειρία να αναλάβουμε όλη τη διαδικασία αδειοδότησης, εξασφαλίζοντας την πλήρη νομιμότητα του έργου σας."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish
                          ? "Energy upgrade without altering aesthetics"
                          : "Ενεργειακή αναβάθμιση χωρίς αλλοίωση της αισθητικής"}
                      </h4>
                      <p>
                        {isEnglish
                          ? "We upgrade buildings energetically, applying thermal insulation techniques and energy-efficient solutions without affecting their historical identity."
                          : "Αναβαθμίζουμε ενεργειακά τα κτίρια, εφαρμόζοντας τεχνικές θερμομόνωσης και ενεργειακά αποδοτικές λύσεις, χωρίς να επηρεάζουμε την ιστορική τους ταυτότητα."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">
                        {isEnglish ? "Restoration of traditional elements" : "Αποκατάσταση παραδοσιακών στοιχείων"}
                      </h4>
                      <p>
                        {isEnglish
                          ? "We place particular emphasis on the restoration of wooden frames, decorative elements, ceilings, and floors, so that the building retains its authentic character."
                          : "Δίνουμε ιδιαίτερη έμφαση στην αναπαλαίωση ξύλινων κουφωμάτων, διακοσμητικών στοιχείων, οροφών και πατωμάτων, ώστε το κτίριο να διατηρήσει τον αυθεντικό του χαρακτήρα."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {isEnglish ? "Why Choose Us" : "Γιατί να μας Επιλέξετε"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    <span>{isEnglish ? "Specialization in listed buildings" : "Εξειδίκευση σε διατηρητέα κτίρια"}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    <span>{isEnglish ? "Customized solutions" : "Προσαρμοσμένες λύσεις"}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    <span>{isEnglish ? "Collaboration with experts" : "Συνεργασία με ειδικούς"}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    <span>{isEnglish ? "Comprehensive project management" : "Ολοκληρωμένη διαχείριση έργου"}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    <span>{isEnglish ? "Quality and reliability" : "Ποιότητα και αξιοπιστία"}</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                  </Link>
                </Button>
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
            <p className="text-xl text-gray-600">
              {isEnglish
                ? "Comprehensive restoration and renovation services for listed buildings"
                : "Ολοκληρωμένες υπηρεσίες αποκατάστασης και αναπαλαίωσης διατηρητέων κτιρίων"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: isEnglish ? "Architectural Restoration" : "Αρχιτεκτονική Αποκατάσταση",
                description: isEnglish
                  ? "The restoration of listed buildings requires specialized expertise and absolute respect for their architectural heritage. We undertake the complete renovation of buildings, maintaining their unique aesthetics and historical character. We use authentic and compatible materials while incorporating modern solutions for improved functionality and comfort. With attention to detail, we ensure that each project meets the highest standards of quality and durability."
                  : "Η αποκατάσταση διατηρητέων κτιρίων απαιτεί εξειδικευμένη τεχνογνωσία και απόλυτο σεβασμό στην αρχιτεκτονική τους κληρονομιά. Αναλαμβάνουμε την πλήρη αναπαλαίωση των κτιρίων, διατηρώντας τη μοναδική αισθητική και τον ιστορικό τους χαρακτήρα. Χρησιμοποιούμε αυθεντικά και συμβατά υλικά, ενώ παράλληλα ενσωματώνουμε σύγχρονες λύσεις για βελτιωμένη λειτουργικότητα και άνεση. Με προσοχή στις λεπτομέρειες, διασφαλίζουμε ότι κάθε έργο ανταποκρίνεται στις υψηλότερες προδιαγραφές ποιότητας και αντοχής.",
              },
              {
                icon: Shield,
                title: isEnglish ? "Structural Reinforcement" : "Στατική Ενίσχυση",
                description: isEnglish
                  ? "Listed buildings often present structural integrity issues due to the age of their materials. We apply advanced structural reinforcement techniques designed to maintain the original form of the building while improving its long-term durability. Our interventions are done discreetly, harmonizing modern mechanical solutions with traditional construction methods, ensuring safety and resilience without altering the historical identity of the property."
                  : "Τα διατηρητέα κτίρια συχνά παρουσιάζουν προβλήματα δομικής ακεραιότητας λόγω της παλαιότητας των υλικών τους. Εφαρμόζουμε προηγμένες τεχνικές στατικής ενίσχυσης, σχεδιασμένες να διατηρούν την αρχική μορφή του κτιρίου, ενώ ταυτόχρονα βελτιώνουν την αντοχή του σε βάθος χρόνου. Οι επεμβάσεις μας γίνονται με διακριτικό τρόπο, εναρμονίζοντας σύγχρονες μηχανικές λύσεις με τις παραδοσιακές κατασκευαστικές μεθόδους, εξασφαλίζοντας ασφάλεια και ανθεκτικότητα χωρίς αλλοίωση της ιστορικής ταυτότητας του ακινήτου.",
              },
              {
                icon: Zap,
                title: isEnglish ? "Energy Upgrade" : "Ενεργειακή Αναβάθμιση",
                description: isEnglish
                  ? "We improve the energy efficiency of listed buildings while maintaining their authentic aesthetics. We apply thermal insulation techniques compatible with restoration principles, upgrade heating and cooling systems, and install energy-efficient frames that respect the building's architecture. This ensures lower energy consumption, greater comfort for users, and increased sustainability of the construction, without affecting its traditional character."
                  : "Βελτιώνουμε την ενεργειακή απόδοση των διατηρητέων κτιρίων, διατηρώντας ταυτόχρονα την αυθεντική αισθητική τους. Εφαρμόζουμε τεχνικές θερμομόνωσης συμβατές με τις αρχές της αποκατάστασης, αναβαθμίζουμε τα συστήματα θέρμανσης και ψύξης και τοποθετούμε ενεργειακά αποδοτικά κουφώματα που σέβονται την αρχιτεκτονική του κτιρίου. Έτσι, εξασφαλίζουμε χαμηλότερη κατανάλωση ενέργειας, μεγαλύτερη άνεση για τους χρήστες και αυξημένη βιωσιμότητα της κατασκευής, χωρίς να επηρεάζεται ο παραδοσιακός της χαρακτήρας.",
              },
              {
                icon: CheckCircle2,
                title: isEnglish ? "Restoration of Decorative Elements" : "Αποκατάσταση Διακοσμητικών Στοιχείων",
                description: isEnglish
                  ? "Decorative elements are the soul of listed buildings. We undertake the restoration and reproduction of historical decorative details such as frescoes, woodcarvings, plaster decorations, and railings with absolute accuracy and respect for their original form. Our team includes specialized craftsmen and conservators who use traditional techniques to revive the authentic aesthetics of the building, preserving its unsurpassed architectural grandeur."
                  : "Τα διακοσμητικά στοιχεία είναι η ψυχή των διατηρητέων κτιρίων. Αναλαμβάνουμε την αποκατάσταση και την αναπαραγωγή ιστορικών διακοσμητικών λεπτομερειών, όπως ορογραφίες, ξυλόγλυπτα, γύψινες διακοσμήσεις και κιγκλιδώματα, με απόλυτη ακρίβεια και σεβασμό στην αρχική μορφή τους. Η ομάδα μας περιλαμβάνει εξειδικευμένους τεχνίτες και συντηρητές, οι οποίοι χρησιμοποιούν παραδοσιακές τεχνικές για να αναβιώσουν την αυθεντική αισθητική του κτιρίου, διατηρώντας το αξεπέραστο αρχιτεκτονικό του μεγαλείο.",
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
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>
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
                {isEnglish
                  ? "Ready to Highlight Your Building's History?"
                  : "Έτοιμοι να Αναδείξετε την Ιστορία του Κτιρίου σας;"}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {isEnglish
                  ? "Contact us today to discuss how we can restore and upgrade your listed property, combining its historical value with modern amenities."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε πώς μπορούμε να αποκαταστήσουμε και να αναβαθμίσουμε το διατηρητέο σας ακίνητο, συνδυάζοντας την ιστορική του αξία με σύγχρονες ανέσεις."}
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
