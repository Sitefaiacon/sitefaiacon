"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Building2,
  CheckCircle2,
  Hammer,
  Lightbulb,
  Users,
  Calendar,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"

export default function HotelConstructionRenovationPage() {
  const { isEnglish } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: isEnglish ? "Full Property Renovation" : "Ολοκληρωτική Ανακαίνιση Ξενοδοχειακής Μονάδας",
      description: isEnglish
        ? "Complete renovation of hotel buildings including structural work, room upgrades, common areas, and exterior improvements."
        : "Από την ιδέα στην υλοποίηση - δομικές αναβαθμίσεις, βελτίωση της εμπειρίας του επισκέπτη και ενσωμάτωση σύγχρονων παροχών",
    },
    {
      icon: Users,
      title: isEnglish ? "Room & Suite Upgrades" : "Αναβάθμιση Εμπειρίας Επισκέπτη",
      description: isEnglish
        ? "Modernisation of guest rooms and suites with new bathrooms, flooring, furniture, and improved layouts."
        : "Αναδιαμόρφωση δωματίων, πολυτελή φινιρίσματα, σύγχρονες παροχές και αισθητικές βελτιώσεις που αυξάνουν την ικανοποίηση του επισκέπτη",
    },
    {
      icon: Hammer,
      title: isEnglish ? "Common Area Works" : "Ανακαίνιση Κοινόχρηστων Χώρων",
      description: isEnglish
        ? "Reception, lobby, restaurant, bar, and pool area renovations that improve guest experience and property appeal."
        : "Χώροι υποδοχής, αναδιαμόρφωση λόμπας, εστιατόρια, μπαρ, χώροι πισίνας και εξωτερικοί χώροι που αποτυπώνουν την ταυτότητα του ξενοδοχείου",
    },
    {
      icon: Lightbulb,
      title: isEnglish ? "Systems & Energy Efficiency" : "Ενεργειακή Απόδοση & Συστήματα",
      description: isEnglish
        ? "HVAC upgrades, electrical systems, plumbing, and energy-efficient installations that reduce operating costs."
        : "Σύγχρονα συστήματα κλιματισμού, ενεργειακά αποδοτικές εγκαταστάσεις, αναβαθμίσεις διαχείρισης νερού και βιώσιμες λύσεις",
    },
    {
      icon: Calendar,
      title: isEnglish ? "Off-Season Scheduling" : "Παράδοση Πριν την Τουριστική Περίοδο",
      description: isEnglish
        ? "We plan and execute works during low season to minimise disruption and ensure your property is ready for peak periods."
        : "Προσεκτικό σχεδιασμό έργου και αποδοτική εκτέλεση για ολοκλήρωση πριν την υψηλή περίοδο χωρίς διακοπή λειτουργίας",
    },
    {
      icon: Shield,
      title: isEnglish ? "Reliable Project Delivery" : "Αξιοπιστία & Εγγύηση Έργου",
      description: isEnglish
        ? "Professional project management with clear timelines, regular updates, and accountability for quality and deadlines."
        : "Πιστοποιημένα συνεργεία, πρωτόκολλα ποιοτικού ελέγχου, διαφανή επικοινωνία και πλήρη ευθύνη του έργου",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Phase 1: Assessment & Planning" : "Φάση 1: Σχεδιασμός & Προγραμματισμός",
      description: isEnglish
        ? "Site assessment, scope definition, and detailed project planning. We work around your operational calendar to minimise disruption."
        : "Λεπτομερές αρχιτεκτονικό σχεδιασμό, τρισδιάστατη απεικόνιση, δομική ανάλυση και προγραμματισμό χρονοδιαγράμματος προσαρμοσμένο στο πρόγραμμα λειτουργίας",
    },
    {
      stage: isEnglish ? "Phase 2: Permits & Preparation" : "Φάση 2: Άδειες & Προετοιμασία",
      description: isEnglish
        ? "We handle permits, coordinate with authorities, and prepare all materials and contractor schedules before work begins."
        : "Απόκτηση όλων των απαραίτητων αδειών, προετοιμασία χώρου, προσκόμιση υλικών και συντονισμός κατασκευαστών",
    },
    {
      stage: isEnglish ? "Phase 3: Construction" : "Φάση 3: Κατασκευή & Ανακαίνιση",
      description: isEnglish
        ? "Professional execution with quality control at every stage. Regular progress updates and clear communication throughout."
        : "Επαγγελματική εκτέλεση όλων των εργασιών με τακτικούς ποιοτικούς ελέγχους, πρωτόκολλα ελαχιστοποίησης διακοπών και αποσβεστική διαχείριση έργου",
    },
    {
      stage: isEnglish ? "Phase 4: Completion & Handover" : "Φάση 4: Δοκιμές & Παράδοση",
      description: isEnglish
        ? "Final inspections, system testing, and snagging. Full documentation and handover to ensure you are satisfied with the completed work."
        : "Ολοκληρωτικές δοκιμές συστημάτων, επαλήθευση ποιότητας, τελικές επιθεωρήσεις, κατάrtηση προσωπικού και ομαλή μετάβαση στη λειτουργία",
    },
  ]

  const faqItems = [
    {
      q: isEnglish ? "How long does a hotel renovation take?" : "Πόσο χρόνο χρειάζεται συνήθως μια ανακαίνιση ξενοδοχείου;",
      a: isEnglish
        ? "This depends on the scope of work. We can provide an estimated timeline after assessing your property. Phased renovations allow you to keep parts of the hotel operational during construction."
        : "Ο χρόνος εξαρτάται από το εύρος του έργου. Ειδικευόμαστε σε σταδιακές ανακαινίσεις που επιτρέπουν μερική λειτουργία του ξενοδοχείου κατά την κατασκευή. Μια ολοκληρωτική ανακαίνιση 30 δωματίων διαρκεί συνήθως 4-6 μήνες.",
    },
    {
      q: isEnglish ? "Can you work during our operating season?" : "Μπορείτε να εργαστείτε κατά τη διάρκεια της τουριστικής περιόδου;",
      a: isEnglish
        ? "We prefer to schedule major works during low season. However, we can manage phased renovations during operation with appropriate planning, safety measures, and noise control."
        : "Ναι. Έχουμε εκτενή εμπειρία με σταδιακές ανακαινίσεις που ελαχιστοποιούν την διακοπή λειτουργίας. Τα έργα μπορούν να προγραμματιστούν για ώρες χαμηλής δραστηριότητας με αυστηρά πρωτόκολλα θορύβου και ασφάλειας.",
    },
    {
      q: isEnglish ? "What energy efficiency improvements do you offer?" : "Τι περιλαμβάνεται στις αναβαθμίσεις ενεργειακής απόδοσης;",
      a: isEnglish
        ? "We can upgrade HVAC systems, lighting, insulation, and water heating to reduce your operating costs. We assess your current systems and recommend improvements that offer the best return."
        : "Συστήματα LED φωτισμού, υψηλής απόδοσης HVAC, έξυπνο έλεγχο κλίματος, συστήματα θέρμανσης νερού, αναβαθμίσεις μόνωσης και ενσωμάτωση ανανεώσιμων πηγών ενέργειας. Προτιμούμε λύσεις που μειώνουν τα λειτουργικά κόστη.",
    },
    {
      q: isEnglish ? "How do you ensure quality on larger projects?" : "Πως διασφαλίζετε την ποιότητα σε μεγάλα έργα;",
      a: isEnglish
        ? "We maintain quality control throughout with regular inspections, documented progress, and clear accountability. You receive regular updates and can visit the site at any time."
        : "Χρησιμοποιούμε πιστοποιημένους ανάδόχους, εφαρμόζουμε καθημερινούς ελέγχους ποιότητας, διατηρούμε τεκμηρίωση δοκιμών υλικών και διεξάγουμε τακτικές ενημερώσεις προς τον πελάτη. Κάθε φάση επαληθεύεται πριν τη μετάβαση στην επόμενη.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Hotel Owners" : "Ιδιοκτήτες Μπουτίκ Ξενοδοχείων",
      description: isEnglish
        ? "Independent hotel owners looking to upgrade their property and improve guest experience"
        : "Ζητούν διακριτικές ανακαινίσεις που βελτιώνουν την εμπειρία του επισκέπτη και δικαιολογούν τις πρίμα τιμές",
    },
    {
      type: isEnglish ? "Tourism Investors" : "Επενδυτές Τουριστικών Ιδιοκτησιών",
      description: isEnglish
        ? "Investors seeking to improve property value and rental returns through strategic upgrades"
        : "Αναζητούν αύξηση της απόδοσης ενοικίασης και της αξίας του περιουσιακού στοιχείου μέσω στρατηγικών ανακαινίσεων",
    },
    {
      type: isEnglish ? "Guesthouse & Apartment Operators" : "Λειτουργοί Θερέτρων & Συγκροτημάτων Διακοπών",
      description: isEnglish
        ? "Operators of smaller tourism accommodation seeking professional renovation services"
        : "Διαχειρίζονται μεγάλες ιδιοκτησίες που απαιτούν σταδιακές ανακαινίσεις διατηρώντας τη λειτουργία",
    },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted py-4 px-4">
        <div className="container max-w-7xl mx-auto">
          <nav className="text-sm text-muted-foreground flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              {isEnglish ? "Home" : "Αρχική"}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">
              {isEnglish ? "Hotel Construction & Renovation" : "Κατασκευή & Ανακαίνιση Ξενοδοχειακών Μονάδων"}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4 max-w-6xl mx-auto">
          <AnimatedSection className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              {isEnglish ? "Hotel & Hospitality Construction" : "Κατασκευή & Ανακαίνιση Ξενοδοχείων"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "We build and renovate hotels, guesthouses, and tourism accommodation across Corfu. Professional construction services designed around your operational requirements."
                : "Κατασκευάζουμε νέες ξενοδοχειακές μονάδες από το μηδέν και ανακαινίζουμε υφιστάμενες. Ολοκληρωμένες κατασκευαστικές υπηρεσίες για τουριστικά καταλύματα στην Κέρκυρα."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {isEnglish ? "Hospitality Construction Services" : "Επαναορίστε το Μέλλον του Ξενοδοχείου σας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "Tourism properties require contractors who understand the unique demands of the hospitality sector. We deliver renovation and construction projects that improve guest experience, reduce operational costs, and can be scheduled around your season. From room upgrades to complete property renovations, we provide professional project management and reliable execution."
                : "Σε ένα ανταγωνιστικό αγορά φιλοξενίας, οι αναβαθμίσεις ιδιοκτησιών είναι στρατηγικές επενδύσεις. Ειδικευόμαστε στη μετατροπή ξενοδοχείων σε πολυτελή προορισμούς μέσω έξυπνων ανακαινίσεων, σύγχρονων παροχών και λειτουργικής αριστείας. Η προσέγγιση μας συνδυάζει αισθητική εξέλιξη με τεχνική ακρίβεια, διασφαλίζοντας ότι η ιδιοκτησία ξεχωρίζει και παρέχει μετρήσιμες αποδόσεις."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Our Hotel Services" : "Οι Ξενοδοχειακές Υπηρεσίες Μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Comprehensive solutions tailored to the unique demands of hospitality properties"
                : "Ολοκληρωμένες λύσεις προσαρμοσμένες στις ��οναδικές απαιτήσεις των ξενοδοχειακών ιδιοκτησιών"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-bold text-primary text-left">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Ideal For" : "Ιδανικό Για"}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {idealClients.map((client, i) => (
              <AnimatedSection
                key={i}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{client.type}</h3>
                <p className="text-gray-700 leading-relaxed">{client.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Our Project Methodology" : "Η Μεθοδολογία του Έργου μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "A structured, transparent approach to ensure project success"
                : "Ένα δομημένο, διαφανές πλαίσιο για να διασφαλίσει την επιτυχία του έργου"}
            </p>
          </AnimatedSection>
          <div className="space-y-6">
            {workStages.map((item, i) => (
              <AnimatedSection key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.stage}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Why Choose Faiacon" : "Γιατί να Επιλέξετε Faiacon"}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isEnglish ? "Tourism Sector Experience" : "Εμπειρία Φιλοξενίας",
                desc: isEnglish
                  ? "We understand the specific requirements of hospitality properties and the importance of timing and guest experience."
                  : "Αποσβεστική εμπειρία σε ξενοδοχειακά και θέρετρα έργα με βαθιά κατανόηση των προσδοκιών των επισκεπτών",
              },
              {
                title: isEnglish ? "Flexible Scheduling" : "Συνέχεια Λειτουργίας",
                desc: isEnglish
                  ? "We plan works around your operational calendar to ensure minimal disruption to your business."
                  : "Στρατηγικές σταδιακής εκτέλεσης που επιτρέπουν την ενεργή λειτουργία κατά τις ανακαινίσεις",
              },
              {
                title: isEnglish ? "Transparent Pricing" : "Διαφανή Προϋπολογισμός",
                desc: isEnglish
                  ? "Detailed cost breakdowns with no hidden fees. We keep you informed of any changes that affect your budget."
                  : "Σαφής ανάλυση κόστους, χωρίς κρυμμένα έξοδα και επαγγελματική χρηματοοικονομική διαχείριση",
              },
              {
                title: isEnglish ? "Quality Standards" : "Διασφάλιση Ποιότητας",
                desc: isEnglish
                  ? "We use trusted contractors and maintain quality control throughout with proper documentation and warranties."
                  : "Πιστοποιημένοι ανάδόχοι, καθημερινές επιθεωρήσεις, δοκιμές υλικών και ολοκληρωτικές εγγυήσεις",
              },
            ].map((item, i) => (
              <AnimatedSection
                key={i}
                className="flex gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-primary/10"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isEnglish ? "Discuss Your Project" : "Έτοιμοι να Μετατρέψετε το Ξενοδοχείο σας;"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isEnglish
                ? "Contact us to discuss your hotel renovation or construction requirements. We provide free initial consultations."
                : "Ας συζητήσουμε πώς η εμπειρία μας μπορεί να μεγιστοποιήσει το δυναμικό της ιδιοκτησίας σας"}
            </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
    <Button
      size="lg"
      className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
      asChild
    >
      <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
    </Button>
  </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
