"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Home,
  Zap,
  Palette,
  Mountain,
  Leaf,
  Award,
  CheckCircle2,
  Diamond,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"

export default function VillaLuxuryConstructionPage() {
  const { isEnglish } = useLanguage()

  const services = [
    {
      icon: Home,
      title: isEnglish ? "New Villa Construction" : "Εξατομικευμένος Σχεδιασμός & Κατασκευή Βιλών",
      description: isEnglish
        ? "Complete construction of new villas from foundation to finishing. We coordinate all trades and manage the entire build process."
        : "Από την αρχιτεκτονική ιδέα έως την παράδοση - εξατομικευμένες κατοικίες που συνδυάζουν σύγχρονη άνεση με αιώνια κομψότητα",
    },
    {
      icon: Diamond,
      title: isEnglish ? "Quality Materials & Finishes" : "Πολυτελή Υλικά & Φινιρίσματα",
      description: isEnglish
        ? "We source quality materials suited to Corfu's climate, including natural stone, durable fixtures, and modern finishes."
        : "Επιλογή πολυτελών υλικών - φυσική πέτρα, πολυτελή όρη, σχεδιαστικά στοιχεία - σε συνδυασμό με έκπαιδευμένη τεχνογνωσία",
    },
    {
      icon: Zap,
      title: isEnglish ? "Modern Systems Integration" : "Ενσωμάτωση Έξυπνης Κατοικίας",
      description: isEnglish
        ? "Installation of modern electrical, plumbing, heating, and cooling systems. Smart home integration available on request."
        : "Σύγχρονα συστήματα αυτοματισμού, διαχείριση ενέργειας, έλεγχος κλίματος, ασφάλεια και ψυχαγωγία ομαλά ενσωματωμένα",
    },
    {
      icon: Palette,
      title: isEnglish ? "Interior & Exterior Design" : "Υλοποίηση της Αρχιτεκτονικής Ορατικότητας",
      description: isEnglish
        ? "We work with architects and interior designers to ensure the finished property matches your vision and specifications."
        : "Αποσβεστική συνεργασία σχεδιασμού που διασφαλίζει ότι κάθε λεπτομέρεια αποτυπώνει την όρασή σας - από το εξωτερικό σχήμα έως τα εσωτερικά αισθητικά",
    },
    {
      icon: Mountain,
      title: isEnglish ? "Outdoor Spaces & Pools" : "Εξωτερικοί Χώροι Διαμονής",
      description: isEnglish
        ? "Construction of terraces, swimming pools, driveways, and landscaping to complete your property."
        : "Έξυπνα σχεδιασμένες βεράντες, πισίνες, φυτεία και κήποι που επεκτείνουν απρόσκοπτα την εμπειρία διαμονής",
    },
    {
      icon: Leaf,
      title: isEnglish ? "Energy Efficiency" : "Βιώσιμη Πολυτέλεια",
      description: isEnglish
        ? "Thermal insulation, energy-efficient windows, solar systems, and sustainable building practices to reduce running costs."
        : "Συστήματα υψηλής απόδοσης ενέργειας, βιώσιμα υλικά και περιβαλλοντική ευθύνη χωρίς συμβιβασμό στην πολυτέλεια",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Phase 1: Consultation & Design" : "Φάση 1: Συνεργατικός Σχεδιασμός",
      description: isEnglish
        ? "Initial site visit and consultation to understand your requirements. We review plans, discuss specifications, and provide a detailed project proposal with cost estimates."
        : "Εις βάθος συζήτηση για κατανόηση της όρασης, του τρόπου ζωής και των προτιμήσεών σας. Εννοιολογικός σχεδιασμός, τρισδιάστατες απεικονίσεις και επαναληπτική εξέλιξη.",
    },
    {
      stage: isEnglish ? "Phase 2: Permits & Planning" : "Φάση 2: Τεχνικός Σχεδιασμός",
      description: isEnglish
        ? "We handle building permits, coordinate with architects and engineers, and prepare detailed construction schedules. All regulatory requirements are managed on your behalf."
        : "Δομική μηχανική, σχεδιασμός MEP συστημάτων, απόκτηση αδειών και λεπτομερής κατασκευαστική τεκμηρίωση από πιστοποιημένους επαγγελματίες.",
    },
    {
      stage: isEnglish ? "Phase 3: Construction" : "Φάση 3: Κατασκευαστική Αριστεία",
      description: isEnglish
        ? "Professional execution of all construction works with regular progress updates. We coordinate all trades and maintain quality control throughout the build."
        : "Έκπαιδευμένη εκτέλεση από ειδικά συνεργεία - θεμέλιο, δομικές εργασίες, εγκαταστάσεις συστημάτων, φινιρίσματα και φυτεία με ακρίβεια.",
    },
    {
      stage: isEnglish ? "Phase 4: Completion & Handover" : "Φάση 4: Τελική Εξέλιξη & Παράδοση",
      description: isEnglish
        ? "Final inspections, system testing, and snagging. We provide full documentation and a thorough handover to ensure you are satisfied with the completed property."
        : "Τελικές επιθεωρήσεις, δοκιμές συστημάτων, τελικές αισθητικές σχεδιάσεις και ολοκληρωτική εκπαίδευση σε όλα τα συστήματα.",
    },
  ]

  const faqItems = [
    {
      q: isEnglish ? "What does villa construction typically cost?" : "Πόσο κοστίζει η κατασκευή μιας πολυτελούς βίλας;",
      a: isEnglish
        ? "Costs depend on size, location, materials, and specifications. We provide detailed cost estimates after reviewing your plans and requirements. Contact us for a preliminary discussion of your project budget."
        : "Το κόστος ποικίλλει ανάλογα με το μέγεθος, την τοποθεσία, τα υλικά και τις προδιαγραφές. Μια τυπική πολυτελής βίλα στην Κέρκυρα κοστίζει από 500.000€ έως 2.000.000€+ ανάλογα με την προσαρμογή.",
    },
    {
      q: isEnglish ? "How long does construction take?" : "Ποιο είναι το τυπικό χρονοδιάγραμμα κατασκευής;",
      a: isEnglish
        ? "A typical villa construction takes 12-24 months depending on size and complexity. This includes permits, foundation, structural work, systems installation, and finishing. We provide detailed timelines during planning."
        : "Η ολοκληρωτική κατασκευή μιας πολυτελούς βίλας διαρκεί συνήθως 18-24 μήνες από την ολοκλήρωση του σχεδιασμού. Αυτό περιλαμβάνει βελτιώσεις σχεδιασμού, άδειες, θεμέλιο, δομικές εργασίες και τελικά φινιρίσματα.",
    },
    {
      q: isEnglish ? "Can you build on difficult terrain?" : "Μπορείτε να κατασκευάσετε σε δύσκολα εδάφη;",
      a: isEnglish
        ? "Yes. We have experience with hillside sites, coastal properties, and challenging ground conditions common in Corfu. Proper site assessment and foundation engineering are part of our standard process."
        : "Ναι. Έχουμε εκτενή εμπειρία με βίλες σε λόφους, ακτές και δύσκολες γεωλογικές συνθήκες. Ειδικές τεχνικές θεμελίωσης διασφαλίζουν δομική ακεραιότητα.",
    },
    {
      q: isEnglish ? "Do you handle building permits?" : "Διαχειρίζεστε τις άδειες και τους κανονισμούς;",
      a: isEnglish
        ? "Yes. We manage the permit process, coordinate with local authorities, and ensure compliance with Greek building regulations. This is included as part of our project management service."
        : "Εντελώς. Διαχειριζόμαστε όλες τις άδειες, τη συμμόρφωση με τους κανονισμούς κτιρίου και τη νομική τεκμηρίωση. Διασφαλίζουμε τη συμμόρφωση με όλες τις ελληνικές και τοπικές απαιτήσεις.",
    },
    {
      q: isEnglish ? "Can I manage the project remotely?" : "Τι περιλαμβάνεται στη υπηρεσία σχεδιασμού σας;",
      a: isEnglish
        ? "Absolutely. Many of our clients are based abroad. We provide regular photo and video updates, detailed progress reports, and are available for video calls to discuss your project at any stage."
        : "Ολοκληρωτικός αρχιτεκτονικός σχεδιασμός, έσωτερικές ιδέες, σχεδιασμός τοπίου, τρισδιάστατες απεικονίσεις, αρχιτεκτονικά σχέδια και πλήρεις κατασκευαστικές προδιαγραφές.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Private Homeowners" : "Ιδιώτες Συλλέκτες",
      description: isEnglish
        ? "Individuals and families building a private residence or holiday home in Corfu"
        : "Αναζητούν μοναδικές, εξατομικευμένες κατοικίες που χρησιμεύουν ως προσωπικά καταφύγια και επενδυτικά περιουσιακά στοιχεία",
    },
    {
      type: isEnglish ? "Rental Property Investors" : "Επενδυτές Εξοχικών Κατοικιών",
      description: isEnglish
        ? "Investors building or upgrading villas for short-term rental or long-term letting"
        : "Κατασκευάζουν ακριβές ενοικιαζόμενες ιδιοκτησίες που παράγουν υψηλές αποδόσεις",
    },
    {
      type: isEnglish ? "International Buyers" : "Διεθνείς Αγοραστές Ιδιοκτησιών",
      description: isEnglish
        ? "Foreign property owners who need a reliable local contractor to manage their project"
        : "Ξένοι επενδυτές που ζητούν αξιόπιστη κατασκευή βιλών σε κορυφαίες τοποθεσίες της Κέρκυρας",
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
              {isEnglish ? "Villa & Luxury Home Construction" : "Κατασκευή Βιλών & Πολυτελών Κατοικιών"}
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
              {isEnglish ? "Villa Construction & Renovation" : "Κατασκευή και Ανακαίνιση Πολυτελών Βιλών"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "We build and renovate private villas and luxury residences across Corfu. From initial design through to completion, our team delivers quality construction that meets international standards."
                : "Ολοκληρωμένη κατασκευή και ανακαίνιση πολυτελών βιλών και κατοικιών. Από τον αρχιτεκτονικό σχεδιασμό έως την τελική παράδοση, δημιουργούμε εξαιρετικούς χώρους διαβίωσης που συνδυάζουν την κερκυραϊκή παράδοση με τη σύγχρονη κομψότητα."}
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
              {isEnglish ? "Custom Villa Projects in Corfu" : "Η Όρασή Σας, η Εμπειρία Μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "Building or renovating a villa requires a contractor who understands both the technical requirements and the expectations of international property owners. We manage villa projects from planning and permits through to construction and finishing, ensuring professional execution at every stage. Whether you are building a new residence or upgrading an existing property, our team provides reliable project management and quality workmanship."
                : "Η κατασκευή μιας πολυτελούς βίλας είναι μια βαθιά επένδυση στον τρόπο ζωής σας. Μετατρέπουμε αρχιτεκτονικές ορατικότητες σε φυσική πραγματικότητα μέσω προσεκτικού σχεδιασμού, δεξιοτεχνίας και αδιάλειπτης προσοχής στις λεπτομέρειες."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Our Villa Services" : "Οι Υπηρεσίες Βιλών Μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Complete design and construction expertise for premium residences"
                : "Ολοκληρωμένη εμπειρία σχεδιασμού και κατασκευής για ακριβές κατοικίες"}
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
              {isEnglish ? "Perfect For" : "Ιδανικό Για"}
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
              {isEnglish ? "Our Construction Process" : "Η Διαδικασία Κατασκευής Μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "From concept to completion - a transparent, collaborative approach"
                : "Από την ιδέα έως την ολοκλήρωση - ένα διαφανές, συνεργατικό πλαίσιο"}
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
              {isEnglish ? "Why Faiacon" : "Γιατί Faiacon"}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isEnglish ? "Local Experience" : "Σχεδιαστική Εμπειρία",
                desc: isEnglish
                  ? "Over 35 years of construction experience in Corfu. We understand local conditions, regulations, and building requirements."
                  : "Βραβευμένη αρχιτεκτονική ορατικότητα συνδυασμένη με πρακτική κατασκευαστική γνώση για κατοικίες που είναι όμορφες και ανθεκτικές",
              },
              {
                title: isEnglish ? "Quality Workmanship" : "Πολυτελής Ποιότητα",
                desc: isEnglish
                  ? "We work with trusted tradespeople and maintain quality standards throughout construction with regular inspections."
                  : "Επιλεγμένη επιλογή πολυτελών υλικών και προμηθευτών με αυστηρό έλεγχο ποιότητας",
              },
              {
                title: isEnglish ? "Clear Communication" : "Συνεργασία με Πελάτη",
                desc: isEnglish
                  ? "Regular updates, transparent pricing, and responsive communication. We keep you informed at every stage."
                  : "Διαφανής επικοινωνία και τακτικές επισκέψεις στο εργοτάξιο διασφαλίζουν ότι η όρασή σας παραμένει στο κέντρο",
              },
              {
                title: isEnglish ? "Full Project Management" : "Πλήρης Ευθύνη",
                desc: isEnglish
                  ? "We manage all aspects of the build including permits, contractors, materials, and scheduling."
                  : "Στεκόμαστε πίσω από κάθε έργο με εγγυήσεις, ολοκληρωμένη τεκμηρίωση και μακροπρόθεσμη υποστήριξη",
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
              {isEnglish ? "Ready to Build Your Dream?" : "Έτοιμοι να Κατασκευάσετε το Όνειρό σας;"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isEnglish
                ? "Let's discuss your vision, location, and aspirations - we'll craft a villa that exceeds your expectations"
                : "Ας συζητήσουμε την όρασή σας, την τοποθεσία και τις φιλοδοξίες σας - θα δημιουργήσουμε μια βίλα που θα υπερβεί τις προσδοκίες σας"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Schedule Design Consultation" : "Προγραμματίστε Σχεδιαστική Συζήτηση"}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/our-projects">{isEnglish ? "View Our Villas" : "Δείτε τις Βίλες μας"}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
