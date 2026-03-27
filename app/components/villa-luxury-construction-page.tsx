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
      title: isEnglish ? "Bespoke Villa Design & Construction" : "Εξατομικευμένος Σχεδιασμός & Κατασκευή Βιλών",
      description: isEnglish
        ? "From architectural concept to keys in hand - tailored residential palaces that blend modern comfort with timeless elegance"
        : "Από την αρχιτεκτονική ιδέα έως την παράδοση - εξατομικευμένες κατοικίες που συνδυάζουν σύγχρονη άνεση με αιώνια κομψότητα",
    },
    {
      icon: Diamond,
      title: isEnglish ? "Premium Materials & Finishes" : "Πολυτελή Υλικά & Φινιρίσματα",
      description: isEnglish
        ? "Curated selection of luxury materials - natural stone, premium fixtures, designer elements - combined with expert craftsmanship"
        : "Επιλογή πολυτελών υλικών - φυσική πέτρα, πολυτελή όρη, σχεδιαστικά στοιχεία - σε συνδυασμό με έκπαιδευμένη τεχνογνωσία",
    },
    {
      icon: Zap,
      title: isEnglish ? "Smart Home Integration" : "Ενσωμάτωση Έξυπνης Κατοικίας",
      description: isEnglish
        ? "Modern automation systems, energy management, climate control, security, and entertainment seamlessly integrated"
        : "Σύγχρονα συστήματα αυτοματισμού, διαχείριση ενέργειας, έλεγχος κλίματος, ασφάλεια και ψυχαγωγία ομαλά ενσωματωμένα",
    },
    {
      icon: Palette,
      title: isEnglish ? "Architectural Vision Realization" : "Υλοποίηση της Αρχιτεκτονικής Ορατικότητας",
      description: isEnglish
        ? "Dedicated design collaboration ensuring every detail reflects your vision - from exterior form to interior aesthetics"
        : "Αποσβεστική συνεργασία σχεδιασμού που διασφαλίζει ότι κάθε λεπτομέρεια αποτυπώνει την όρασή σας - από το εξωτερικό σχήμα έως τα εσωτερικά αισθητικά",
    },
    {
      icon: Mountain,
      title: isEnglish ? "Outdoor Living Spaces" : "Εξωτερικοί Χώροι Διαμονής",
      description: isEnglish
        ? "Expertly designed terraces, pools, landscaping, and gardens that seamlessly extend your living experience outdoors"
        : "Έξυπνα σχεδιασμένες βεράντες, πισίνες, φυτεία και κήποι που επεκτείνουν απρόσκοπτα την εμπειρία διαμονής",
    },
    {
      icon: Leaf,
      title: isEnglish ? "Sustainable Luxury" : "Βιώσιμη Πολυτέλεια",
      description: isEnglish
        ? "High-performance energy systems, sustainable materials, and environmental responsibility without compromising on luxury"
        : "Συστήματα υψηλής απόδοσης ενέργειας, βιώσιμα υλικά και περιβαλλοντική ευθύνη χωρίς συμβιβασμό στην πολυτέλεια",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Phase 1: Collaborative Design" : "Φάση 1: Συνεργατικός Σχεδιασμός",
      description: isEnglish
        ? "In-depth consultation to understand your vision, lifestyle, and preferences. Conceptual design, 3D renderings, and iterative refinement until perfect alignment is achieved."
        : "Εις βάθος συζήτηση για κατανόηση της όρασης, του τρόπου ζωής και των προτιμήσεών σας. Εννοιολογικός σχεδιασμός, τρισδιάστατες απεικονίσεις και επαναληπτική εξέλιξη.",
    },
    {
      stage: isEnglish ? "Phase 2: Technical Planning" : "Φάση 2: Τεχνικός Σχεδιασμός",
      description: isEnglish
        ? "Structural engineering, MEP (mechanical, electrical, plumbing) systems design, permit acquisition, and detailed construction documentation prepared by certified professionals."
        : "Δομική μηχανική, σχεδιασμός MEP συστημάτων, απόκτηση αδειών και λεπτομερής κατασκευαστική τεκμηρίωση από πιστοποιημένους επαγγελματ��ες.",
    },
    {
      stage: isEnglish ? "Phase 3: Construction Excellence" : "Φάση 3: Κατασκευαστική Αριστεία",
      description: isEnglish
        ? "Expert execution by specialized teams - foundation, structural work, systems installation, finishes, and landscaping conducted with precision and quality oversight at every step."
        : "Έκπαιδευμένη εκτέλεση από ειδικά συνεργεία - θεμέλιο, δομικές εργασίες, εγκαταστάσεις συστημάτων, φινιρίσματα και φυτεία με ακρίβεια.",
    },
    {
      stage: isEnglish ? "Phase 4: Final Refinement & Handover" : "Φάση 4: Τελική Εξέλιξη & Παράδοση",
      description: isEnglish
        ? "Final inspections, system testing, cosmetic refinements, comprehensive walkthrough with full documentation and owner training on all systems."
        : "Τελικές επιθεωρήσεις, δοκιμές συστημάτων, τελικές αισθητικές σχεδιάσεις και ολοκληρωτική εκπαίδευση σε όλα τα συστήματα.",
    },
  ]

  const faqItems = [
    {
      q: isEnglish ? "How much does a luxury villa construction cost?" : "Πόσο κοστίζει η κατασκευή μιας πολυτελούς βίλας;",
      a: isEnglish
        ? "Costs vary significantly based on size, location, materials, and specifications. A typical luxury villa in Corfu ranges from €500,000 to €2,000,000+ depending on customization. We provide detailed budget breakdowns during the design phase."
        : "Το κόστος ποικίλλει ανάλογα με το μέγεθος, την τοποθεσία, τα υλικά και τις προδιαγραφές. Μια τυπική πολυτελής βίλα στην Κέρκυρα κοστίζει από 500.000€ έως 2.000.000€+ ανάλογα με την προσαρμογή.",
    },
    {
      q: isEnglish ? "What's the typical construction timeline?" : "Ποιο είναι το τυπικό χρονοδιάγραμμα κατασκευής;",
      a: isEnglish
        ? "A complete luxury villa construction typically takes 18-24 months from design completion to handover. This includes design refinement, permitting, foundation, structural work, systems installation, and finishing touches. Timeline varies with project complexity and seasonal factors."
        : "Η ολοκληρωτική κατασκευή μιας πολυτελούς βίλας διαρκεί συνήθως 18-24 μήνες από την ολοκλήρωση του σχεδιασμού. Αυτό περιλαμβάνει βελτιώσεις σχεδιασμού, άδειες, θεμέλιο, δομικές εργασίες και τελικά φινιρίσματα.",
    },
    {
      q: isEnglish ? "Can you construct on challenging terrain?" : "Μπορείτε να κατασκευάσετε σε δύσκολα εδάφη;",
      a: isEnglish
        ? "Yes. We have extensive experience with hillside villas, coastal properties, and challenging geological conditions. Specialized foundation techniques and site engineering ensure structural integrity and optimal building performance."
        : "Ναι. Έχουμε εκτενή εμπειρία με βίλες σε λόφους, ακτές και δύσκολες γεωλογικές συνθήκες. Ειδικές τεχνικές θεμελίωσης διασφαλίζουν δομική ακεραιότητα.",
    },
    {
      q: isEnglish ? "Do you handle permits and regulations?" : "Διαχειρίζεστε τις άδειες και τους κανονισμούς;",
      a: isEnglish
        ? "Completely. We manage all permitting, building regulations compliance, environmental assessments, and legal documentation. Our team ensures your project meets all Greek and local Corfu requirements."
        : "Εντελώς. Διαχειριζόμαστε όλες τις άδειες, τη συμμόρφωση με τους κανονισμούς κτιρίου και τη νομική τεκμηρίωση. Διασφαλίζουμε τη συμμόρφωση με όλες τις ελληνικές και τοπικές απαιτήσεις.",
    },
    {
      q: isEnglish ? "What's included in your design service?" : "Τι περιλαμβάνεται στη υπηρεσία σχεδιασμού σας;",
      a: isEnglish
        ? "Complete architectural design, interior concepts, landscape design, 3D visualizations, structural engineering drawings, and full construction specifications. We iterate until your vision is perfectly captured."
        : "Ολοκληρωτικός αρχιτεκτονικός σχεδιασμός, έσωτερικές ιδέες, σχεδιασμός τοπίου, τρισδιάστατες απεικονίσεις, αρχιτεκτονικά σχέδια και πλήρεις κατασκευαστικές προδιαγραφές.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Private Collectors" : "Ιδιώτες Συλλέκτες",
      description: isEnglish
        ? "Seeking unique, bespoke residences that serve as personal sanctuaries and investment assets"
        : "Αναζητούν μοναδικές, εξατομικευμένες κατοικίες που χρησιμεύουν ως προσωπικά καταφύγια και επενδυτικά περιουσιακά στοιχεία",
    },
    {
      type: isEnglish ? "Holiday Home Investors" : "Επενδυτές Εξοχικών Κατοικιών",
      description: isEnglish
        ? "Building premium rental properties that command high occupancy rates and generate strong returns"
        : "Κατασκευάζουν ακριβές ενοικιαζόμενες ιδιοκτησίες που παράγουν υψηλές αποδόσεις",
    },
    {
      type: isEnglish ? "International Property Buyers" : "Διεθνείς Αγοραστές Ιδιοκτησιών",
      description: isEnglish
        ? "Foreign investors seeking reliable, high-quality villa construction in Corfu's premier locations"
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
              {isEnglish ? "Luxury Villas in Corfu" : "Πολυτελείς Βίλες στην Κέρκυρα"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "Complete construction and renovation of luxury villas and residences. From architectural design to final delivery, we create exceptional living spaces that combine Corfiot tradition with modern elegance."
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
              {isEnglish ? "Your Vision, Our Expertise" : "Η Όρασή Σας, η Εμπειρία Μας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "Building a luxury villa is a profound investment in your lifestyle. We transform architectural visions into physical reality through meticulous planning, masterful execution, and unwavering attention to detail. From hillside estates to coastal paradises, every project reflects our commitment to excellence and your personal aesthetic."
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
                title: isEnglish ? "Design Expertise" : "Σχεδιαστική Εμπειρία",
                desc: isEnglish
                  ? "Award-winning architectural vision combined with practical construction knowledge for homes that are both beautiful and durable"
                  : "Βραβευμένη αρχιτεκτονική ορατικότητα συνδυασμένη με πρακτική κατασκευαστική γνώση για κατοικίες που είναι όμορφες και ανθεκτικές",
              },
              {
                title: isEnglish ? "Premium Quality" : "Πολυτελής Ποιότητα",
                desc: isEnglish
                  ? "Curated selection of luxury materials and suppliers, with rigorous quality control throughout construction"
                  : "Επιλεγμένη επιλογή πολυτελών υλικών και προμηθευτών με αυστηρό έλεγχο ποιότητας",
              },
              {
                title: isEnglish ? "Client Collaboration" : "Συνεργασία με Πελάτη",
                desc: isEnglish
                  ? "Transparent communication and regular site visits ensure your vision remains centered throughout the entire process"
                  : "Διαφανής επικοινωνία και τακτικές επισκέψεις στο εργοτάξιο διασφαλίζουν ότι η όρασή σας παραμένει στο κέντρο",
              },
              {
                title: isEnglish ? "Complete Accountability" : "Πλήρης Ευθύνη",
                desc: isEnglish
                  ? "We stand behind every project with warranties, comprehensive documentation, and long-term support"
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
