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
      title: isEnglish ? "Complete Hotel Renovation" : "Ολοκληρωτική Ανακαίνιση Ξενοδοχειακής Μονάδας",
      description: isEnglish
        ? "From concept to completion - structural upgrades, guest experience enhancement, and modern amenities integration"
        : "Από την ιδέα στην υλοποίηση - δομικές αναβαθμίσεις, βελτίωση της εμπειρίας του επισκέπτη και ενσωμάτωση σύγχρονων παροχών",
    },
    {
      icon: Users,
      title: isEnglish ? "Guest Experience Upgrade" : "Αναβάθμιση Εμπειρίας Επισκέπτη",
      description: isEnglish
        ? "Room redesigns, premium finishes, modern amenities, and aesthetic improvements that increase guest satisfaction and occupancy rates"
        : "Αναδιαμόρφωση δωματίων, πολυτελή φινιρίσματα, σύγχρονες παροχές και αισθητικές βελτιώσεις που αυξάνουν την ικανοποίηση του επισκέπτη",
    },
    {
      icon: Hammer,
      title: isEnglish ? "Shared Spaces Renovation" : "Ανακαίνιση Κοινόχρηστων Χώρων",
      description: isEnglish
        ? "Reception areas, lobby redesign, restaurants, bars, pool areas, and exterior spaces that reflect your hotel's brand identity"
        : "Χώροι υποδοχής, αναδιαμόρφωση λόμπας, εστιατόρια, μπαρ, χώροι πισίνας και εξωτερικοί χώροι που αποτυπώνουν την ταυτότητα του ξενοδοχείου",
    },
    {
      icon: Lightbulb,
      title: isEnglish ? "Energy Efficiency & Systems" : "Ενεργειακή Απόδοση & Συστήματα",
      description: isEnglish
        ? "Modern HVAC systems, energy-efficient installations, water management upgrades, and sustainable solutions"
        : "Σύγχρονα συστήματα κλιματισμού, ενεργειακά αποδοτικές εγκαταστάσεις, αναβαθμίσεις διαχείρισης νερού και βιώσιμες λύσεις",
    },
    {
      icon: Calendar,
      title: isEnglish ? "Pre-Season Delivery" : "Παράδοση Πριν την Τουριστική Περίοδο",
      description: isEnglish
        ? "Meticulous project planning and efficient execution to ensure completion before peak season - no disruption to operations"
        : "Προσεκτικό σχεδιασμό έργου και αποδοτική εκτέλεση για ολοκλήρωση πριν την υψηλή περίοδο χωρίς διακοπή λειτουργίας",
    },
    {
      icon: Shield,
      title: isEnglish ? "Project Reliability" : "Αξιοπιστία & Εγγύηση Έργου",
      description: isEnglish
        ? "Certified teams, quality assurance protocols, transparent communication, and full project accountability"
        : "Πιστοποιημένα συνεργεία, πρωτόκολλα ποιοτικού ελέγχου, διαφανή επικοινωνία και πλήρη ευθύνη του έργου",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Phase 1: Design & Planning" : "Φάση 1: Σχεδιασμός & Προγραμματισμός",
      description: isEnglish
        ? "Detailed architectural design, 3D visualization, structural analysis, and timeline planning tailored to your hotel's operational schedule"
        : "Λεπτομερές αρχιτεκτονικό σχεδιασμό, τρισδιάστατη απεικόνιση, δομική ανάλυση και προγραμματισμό χρονοδιαγράμματος προσαρμοσμένο στο πρόγραμμα λειτουργίας",
    },
    {
      stage: isEnglish ? "Phase 2: Permits & Preparation" : "Φάση 2: Άδειες & Προετοιμασία",
      description: isEnglish
        ? "Acquisition of all necessary permits and licenses, site preparation, material procurement, and contractor coordination"
        : "Απόκτηση όλων των απαραίτητων αδειών, προετοιμασία χώρου, προσκόμιση υλικών και συντονισμός κατασκευαστών",
    },
    {
      stage: isEnglish ? "Phase 3: Construction & Renovation" : "Φάση 3: Κατασκευή & Ανακαίνιση",
      description: isEnglish
        ? "Professional execution of all works with regular quality inspections, minimal disruption protocols, and dedicated project management"
        : "Επαγγελματική εκτέλεση όλων των εργασιών με τακτικούς ποιοτικούς ελέγχους, πρωτόκολλα ελαχιστοποίησης διακοπών και αποσβεστική διαχείριση έργου",
    },
    {
      stage: isEnglish ? "Phase 4: Testing & Handover" : "Φάση 4: Δοκιμές & Παράδοση",
      description: isEnglish
        ? "Comprehensive system testing, quality verification, final inspections, staff training, and smooth transition to operation"
        : "Ολοκληρωτικές δοκιμές συστημάτων, επαλήθευση ποιότητας, τελικές επιθεωρήσεις, κατάrtηση προσωπικού και ομαλή μετάβαση στη λειτουργία",
    },
  ]

  const faqItems = [
    {
      q: isEnglish ? "How long does a hotel renovation typically take?" : "Πόσο χρόνο χρειάζεται συνήθως μια ανακαίνιση ξενοδοχείου;",
      a: isEnglish
        ? "Timeline depends on project scope. We specialize in phased renovations that allow partial hotel operation during construction. A complete 30-room renovation typically takes 4-6 months with careful planning."
        : "Ο χρόνος εξαρτάται από το εύρος του έργου. Ειδικευόμαστε σε σταδιακές ανακαινίσεις που επιτρέπουν μερική λειτουργία του ξενοδοχείου κατά την κατασκευή. Μια ολοκληρωτική ανακαίνιση 30 δωματίων διαρκεί συνήθως 4-6 μήνες.",
    },
    {
      q: isEnglish ? "Can you work during guest season?" : "Μπορείτε να εργαστείτε κατά τη διάρκεια της τουριστικής περιόδου;",
      a: isEnglish
        ? "Yes. We have extensive experience with phased renovations that minimize operational disruption. Work can be scheduled for off-peak hours, and we maintain strict noise and safety protocols."
        : "Ναι. Έχουμε εκτενή εμπειρία με σταδιακές ανακαινίσεις που ελαχιστοποιούν την διακοπή λειτουργίας. Τα έργα μπορούν να προγραμματιστούν για ώρες χαμηλής δραστηριότητας με αυστηρά πρωτόκολλα θορύβου και ασφάλειας.",
    },
    {
      q: isEnglish ? "What's included in your energy efficiency upgrades?" : "Τι περιλαμβάνεται στις αναβαθμίσεις ενεργειακής απόδοσης;",
      a: isEnglish
        ? "LED lighting systems, high-efficiency HVAC, smart climate control, water heating systems, insulation upgrades, and renewable energy integration where applicable. We prioritize solutions that reduce operational costs."
        : "Συστήματα LED φωτισμού, υψηλής απόδοσης HVAC, έξυπνο έλεγχο κλίματος, συστήματα θέρμανσης νερού, αναβαθμίσεις μόνωσης και ενσωμάτωση ανανεώσιμων πηγών ενέργειας. Προτιμούμε λύσεις που μειώνουν τα λειτουργικά κόστη.",
    },
    {
      q: isEnglish ? "How do you ensure quality in large-scale projects?" : "Πως διασφαλίζετε την ποιότητα σε μεγάλα έργα;",
      a: isEnglish
        ? "We employ certified contractors, implement daily quality inspections, maintain material testing documentation, and conduct regular client briefings. Every phase is verified before proceeding to the next."
        : "Χρησιμοποιούμε πιστοποιημένους ανάδόχους, εφαρμόζουμε καθημερινούς ελέγχους ποιότητας, διατηρούμε τεκμηρίωση δοκιμών υλικών και διεξάγουμε τακτικές ενημερώσεις προς τον πελάτη. Κάθε φάση επαληθεύεται πριν τη μετάβαση στην επόμενη.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Boutique Hotel Owners" : "Ιδιοκτήτες Μπουτίκ Ξενοδοχείων",
      description: isEnglish
        ? "Seeking distinctive renovations that enhance guest experience and justify premium pricing"
        : "Ζητούν διακριτικές ανακαινίσεις που βελτιώνουν την εμπειρία του επισκέπτη και δικαιολογούν τις πρίμα τιμές",
    },
    {
      type: isEnglish ? "Tourism Property Investors" : "Επενδυτές Τουριστικών Ιδιοκτησιών",
      description: isEnglish
        ? "Looking to increase rental yield and asset value through strategic renovations"
        : "Αναζητούν αύξηση της απόδοσης ενοικίασης και της αξίας του περιουσιακού στοιχείου μέσω στρατηγικών ανακαινίσεων",
    },
    {
      type: isEnglish ? "Resort & Holiday Complex Operators" : "Λειτουργοί Θερέτρων & Συγκροτημάτων Διακοπών",
      description: isEnglish
        ? "Managing large properties that require phased renovations while maintaining operations"
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
              {isEnglish ? "Exceptional Hotel Experiences Begin Here" : "Εξαιρετικές Ξενοδοχειακές Εμπειρίες Ξεκινούν Εδώ"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "Strategic renovations and construction solutions designed to elevate your hotel's competitive position, optimize guest satisfaction, and enhance operational efficiency across all properties in Corfu."
                : "Στρατηγικές ανακαινίσεις και κατασκευαστικές λύσεις σχεδιασμένες για να ανυψώσουν τη θέση του ξενοδοχείου σας, να βελτιστοποιήσουν την ικανοποίηση των επισκεπτών και να ενισχύσουν την λειτουργική αποδοτικότητα."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Schedule Consultation" : "Προγραμματίστε Συζήτηση"}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-primary/80 text-white hover:bg-primary border-2 border-white px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/cost-calculator">{isEnglish ? "Get Cost Estimate" : "Λάβετε Εκτίμηση Κόστους"}</Link>
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
              {isEnglish ? "Redefine Your Hotel's Future" : "Επαναορίστε το Μέλλον του Ξενοδοχείου σας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "In a competitive hospitality market, property upgrades are strategic investments. We specialize in transforming hotels into premium destinations through intelligent renovations, modern amenities, and operational excellence. Our approach combines aesthetic refinement with technical precision, ensuring your property stands out and delivers measurable returns."
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
                : "Ολοκληρωμένες λύσεις προσαρμοσμένες στις μοναδικές απαιτήσεις των ξενοδοχειακών ιδιοκτησιών"}
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
                title: isEnglish ? "Hospitality Expertise" : "Εμπειρία Φιλοξενίας",
                desc: isEnglish
                  ? "Dedicated experience in hotel and resort projects across Corfu with deep understanding of guest expectations"
                  : "Αποσβεστική εμπειρία σε ξενοδοχειακά και θέρετρα έργα με βαθιά κατανόηση των προσδοκιών των επισκεπτών",
              },
              {
                title: isEnglish ? "Operational Continuity" : "Συνέχεια Λειτουργίας",
                desc: isEnglish
                  ? "Phased execution strategies that allow your property to remain operational during renovations"
                  : "Στρατηγικές σταδιακής εκτέλεσης που επιτρέπουν την ενεργή λειτουργία κατά τις ανακαινίσεις",
              },
              {
                title: isEnglish ? "Transparent Budgeting" : "Διαφανή Προϋπολογισμός",
                desc: isEnglish
                  ? "Clear cost breakdowns, no hidden fees, and professional financial management throughout the project lifecycle"
                  : "Σαφής ανάλυση κόστους, χωρίς κρυμμένα έξοδα και επαγγελματική χρηματοοικονομική διαχείριση",
              },
              {
                title: isEnglish ? "Quality Assurance" : "Διασφάλιση Ποιότητας",
                desc: isEnglish
                  ? "Certified contractors, daily inspections, material testing, and comprehensive warranties on all work"
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
              {isEnglish ? "Ready to Transform Your Hotel?" : "Έτοιμοι να Μετατρέψετε το Ξενοδοχείο σας;"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isEnglish
                ? "Let's discuss how our expertise can maximize your property's potential and deliver measurable results"
                : "Ας συζητήσουμε πώς η εμπειρία μας μπορεί να μεγιστοποιήσει το δυναμικό της ιδιοκτησίας σας"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Schedule Consultation" : "Προγραμματίστε Συζήτηση"}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/our-projects">{isEnglish ? "View Our Projects" : "Δείτε τα Έργα μας"}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
