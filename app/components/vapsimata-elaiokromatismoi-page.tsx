"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Paintbrush,
  Layers,
  Home,
  Building2,
  CheckCircle2,
  Star,
  Users,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"

export default function VapsimatаElaiokromatismoiPage() {
  const { isEnglish } = useLanguage()

  const services = [
    {
      icon: Home,
      title: isEnglish ? "Interior Painting & Decoration" : "Εσωτερικά Βαψίματα & Διακόσμηση",
      description: isEnglish
        ? "Complete interior painting works — walls, ceilings, and surfaces — with thorough surface preparation, filling, priming, and premium finish coats for a clean, lasting result."
        : "Πλήρεις εσωτερικές βαφές — τοίχοι, οροφές και επιφάνειες — με διεξοδική προετοιμασία, στοκάρισμα, αστάρωμα και τελικές ποιοτικές στρώσεις για καθαρό, διαρκές αποτέλεσμα.",
    },
    {
      icon: Building2,
      title: isEnglish ? "Exterior Facade Painting" : "Εξωτερικά Βαψίματα Όψεων",
      description: isEnglish
        ? "Professional exterior painting of building facades with weather-resistant coatings designed for the Mediterranean climate — protecting surfaces from moisture, UV damage, and weathering."
        : "Επαγγελματική βαφή εξωτερικών όψεων κτιρίων με ανθεκτικές στις καιρικές συνθήκες επικαλύψεις σχεδιασμένες για το μεσογειακό κλίμα — προστατεύοντας επιφάνειες από υγρασία, UV ακτινοβολία και φθορά.",
    },
    {
      icon: Layers,
      title: isEnglish ? "Surface Preparation & Repair" : "Προετοιμασία Επιφανειών & Αποκατάσταση",
      description: isEnglish
        ? "Thorough surface assessment, repair of cracks and imperfections, stucco application, and professional priming — the foundation for any quality painting result."
        : "Διεξοδική αξιολόγηση επιφανειών, αποκατάσταση ρωγμών και ατελειών, εφαρμογή στόκου και επαγγελματικό αστάρωμα — η βάση για κάθε ποιοτικό αποτέλεσμα βαφής.",
    },
    {
      icon: Paintbrush,
      title: isEnglish ? "Specialist Decorative Techniques" : "Εξειδικευμένες Διακοσμητικές Τεχνικές",
      description: isEnglish
        ? "Application of textured renders, decorative coatings, and special-effect finishes for clients seeking a distinctive aesthetic character in their spaces."
        : "Εφαρμογή υφαντών σοβάδων, διακοσμητικών επικαλύψεων και φινιρισμάτων ειδικών εφέ για πελάτες που αναζητούν ξεχωριστό αισθητικό χαρακτήρα στους χώρους τους.",
    },
    {
      icon: Star,
      title: isEnglish ? "Villas, Hotels & Tourist Accommodations" : "Βίλες, Ξενοδοχεία & Τουριστικά Καταλύματα",
      description: isEnglish
        ? "Painting and decorating works for high-demand properties — executed with attention to quality, minimal disruption, and scheduling adapted to operational requirements and seasonal timelines."
        : "Εργασίες βαφής και διακόσμησης για ακίνητα υψηλών απαιτήσεων — εκτελεσμένες με προσοχή στην ποιότητα, ελάχιστη διατάραξη και χρονοδιάγραμμα προσαρμοσμένο στις λειτουργικές ανάγκες και σεζόν.",
    },
    {
      icon: Users,
      title: isEnglish ? "Common Areas & Commercial Spaces" : "Κοινόχρηστοι Χώροι & Επαγγελματικά Ακίνητα",
      description: isEnglish
        ? "Painting works for apartment building common areas, offices, retail spaces, and professional premises — organised and delivered with precision."
        : "Εργασίες βαφής για κοινόχρηστους χώρους πολυκατοικιών, γραφεία, εμπορικούς χώρους και επαγγελματικά ακίνητα — οργανωμένες και παραδοτέες με ακρίβεια.",
    },
  ]

  const benefits = [
    {
      title: isEnglish ? "Aesthetic Renewal" : "Αισθητική Ανανέωση",
      desc: isEnglish
        ? "Fresh, clean paintwork instantly transforms the appearance of any space, giving rooms and facades a renewed, polished look."
        : "Φρέσκα, καθαρά βαψίματα μετατρέπουν άμεσα την εμφάνιση κάθε χώρου, δίνοντας ανανεωμένη, φροντισμένη εικόνα σε δωμάτια και όψεις.",
    },
    {
      title: isEnglish ? "Surface Protection" : "Προστασία Επιφανειών",
      desc: isEnglish
        ? "Quality coatings shield walls and facades from moisture, mold, UV exposure, and environmental damage, extending their life."
        : "Ποιοτικές επικαλύψεις προστατεύουν τοίχους και όψεις από υγρασία, μούχλα, UV ακτινοβολία και περιβαλλοντικές φθορές, παρατείνοντας τη ζωή τους.",
    },
    {
      title: isEnglish ? "Better Property Image" : "Καλύτερη Εικόνα Ακινήτου",
      desc: isEnglish
        ? "A well-painted property makes a strong first impression for guests, tenants, or buyers — directly affecting occupancy rates and perceived value."
        : "Ένα φροντισμένο ακίνητο κάνει ισχυρή πρώτη εντύπωση σε επισκέπτες, ενοικιαστές ή αγοραστές — επηρεάζοντας άμεσα τα ποσοστά πληρότητας και την αντιληπτή αξία.",
    },
    {
      title: isEnglish ? "Refined Finish" : "Προσεγμένο Φινίρισμα",
      desc: isEnglish
        ? "Proper preparation and skilled application ensure an even, smooth, and durable finish that distinguishes professional work from a simple coat of paint."
        : "Η σωστή προετοιμασία και η έμπειρη εφαρμογή διασφαλίζουν ομοιόμορφο, λείο και ανθεκτικό φινίρισμα που διακρίνει την επαγγελματική εργασία από ένα απλό βάψιμο.",
    },
    {
      title: isEnglish ? "Increased Commercial Value or Rental Readiness" : "Αυξημένη Εμπορική Αξία ή Ετοιμότητα για Ενοικίαση",
      desc: isEnglish
        ? "Painting works undertaken before a sale, rental, or seasonal opening directly increase the property's appeal and marketability."
        : "Εργασίες βαφής που αναλαμβάνονται πριν από πώληση, ενοικίαση ή εποχική άνοιξη αυξάνουν άμεσα την ελκυστικότητα και εμπορευσιμότητα του ακινήτου.",
    },
    {
      title: isEnglish ? "Professional Result Every Time" : "Επαγγελματικό Αποτέλεσμα Κάθε Φορά",
      desc: isEnglish
        ? "From colour selection to final coat, our approach ensures a consistent, high-quality result that meets the standards of even the most demanding clients."
        : "Από την επιλογή χρώματος έως την τελευταία στρώση, η προσέγγισή μας διασφαλίζει συνεπές, υψηλής ποιότητας αποτέλεσμα που ανταποκρίνεται στις απαιτήσεις ακόμη και των πιο απαιτητικών πελατών.",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Initial Contact" : "Αρχική Επικοινωνία",
      description: isEnglish
        ? "Discussion of the project scope, property type, surfaces to be painted, and client requirements. We provide initial guidance on approach, materials, and colour options."
        : "Συζήτηση του εύρους του έργου, τύπου ακινήτου, επιφανειών προς βαφή και απαιτήσεων πελάτη. Παρέχουμε αρχική καθοδήγηση για προσέγγιση, υλικά και επιλογές χρωμάτων.",
    },
    {
      stage: isEnglish ? "On-site Inspection & Assessment" : "Αυτοψία και Αξιολόγηση",
      description: isEnglish
        ? "Detailed inspection of all surfaces, assessment of their condition, identification of required preparatory works, and measurement of the project area."
        : "Λεπτομερής επιθεώρηση όλων των επιφανειών, αξιολόγηση της κατάστασής τους, εντοπισμός απαραίτητων εργασιών προετοιμασίας και μέτρηση της επιφάνειας έργου.",
    },
    {
      stage: isEnglish ? "Work Proposal" : "Πρόταση Εργασιών",
      description: isEnglish
        ? "Detailed written proposal with scope of work, materials to be used, timeline, and clear pricing. Colour and finish selection in collaboration with the client."
        : "Αναλυτική γραπτή πρόταση με έκταση εργασιών, υλικά που θα χρησιμοποιηθούν, χρονοδιάγραμμα και σαφή τιμολόγηση. Επιλογή χρωμάτων και φινιρίσματος σε συνεργασία με τον πελάτη.",
    },
    {
      stage: isEnglish ? "Implementation" : "Υλοποίηση",
      description: isEnglish
        ? "Systematic execution — surface protection and masking, thorough preparation, stucco and primer application, and final coats — with clean, organised on-site management throughout."
        : "Συστηματική εκτέλεση — προστασία και μάσκαρα επιφανειών, διεξοδική προετοιμασία, εφαρμογή στόκου και αστάρωμα, και τελικές στρώσεις — με καθαρή, οργανωμένη διαχείριση εργοταξίου.",
    },
    {
      stage: isEnglish ? "Completion & Final Result" : "Ολοκλήρωση και Τελικό Αποτέλεσμα",
      description: isEnglish
        ? "Final quality inspection of all painted surfaces, complete site cleanup, and handover to the client with full satisfaction of the agreed scope and finish."
        : "Τελικός ποιοτικός έλεγχος όλων των βαμμένων επιφανειών, πλήρης καθαρισμός χώρου και παράδοση στον πελάτη με πλήρη ικανοποίηση του συμφωνημένου εύρους και φινιρίσματος.",
    },
  ]

  const faqItems = [
    {
      q: isEnglish
        ? "Do you undertake both interior and exterior painting works?"
        : "Αναλαμβάνετε εσωτερικά και εξωτερικά βαψίματα;",
      a: isEnglish
        ? "Yes. We undertake complete painting and decorating works for both interior spaces (walls, ceilings, surfaces) and exterior facades. Each project is approached with materials and methods appropriate to the specific conditions — interior or exterior, residential or commercial."
        : "Ναι. Αναλαμβάνουμε πλήρεις εργασίες βαφής και διακόσμησης τόσο για εσωτερικούς χώρους (τοίχοι, οροφές, επιφάνειες) όσο και για εξωτερικές όψεις. Κάθε έργο αντιμετωπίζεται με υλικά και μεθόδους κατάλληλα για τις συγκεκριμένες συνθήκες — εσωτερικό ή εξωτερικό, οικιακό ή εμπορικό.",
    },
    {
      q: isEnglish
        ? "Does proper surface preparation come first?"
        : "Προηγείται σωστή προετοιμασία επιφανειών;",
      a: isEnglish
        ? "Always. Surface preparation is the foundation of any quality painting result. We carry out thorough cleaning, filling of cracks and imperfections, stucco application, and priming before any final coat is applied. Shortcuts in preparation always result in a finish that deteriorates quickly — we never compromise on this."
        : "Πάντα. Η προετοιμασία επιφανειών είναι η βάση κάθε ποιοτικού αποτελέσματος βαφής. Εκτελούμε διεξοδικό καθαρισμό, γέμισμα ρωγμών και ατελειών, εφαρμογή στόκου και αστάρωμα πριν εφαρμοστεί οποιαδήποτε τελική στρώση. Οι συντομεύσεις στην προετοιμασία οδηγούν πάντα σε φινίρισμα που φθείρεται γρήγορα — δεν κάνουμε ποτέ συμβιβασμό σε αυτό.",
    },
    {
      q: isEnglish
        ? "Do you undertake painting for villas and tourist properties?"
        : "Αναλαμβάνετε βίλες και τουριστικά ακίνητα;",
      a: isEnglish
        ? "Yes. We regularly undertake painting works for holiday villas, tourist accommodation complexes, boutique hotels, and rental properties in Corfu. We understand the operational requirements of these properties and can adapt our scheduling to seasonal timelines, ensuring completion before opening season."
        : "Ναι. Αναλαμβάνουμε τακτικά εργασίες βαφής για εξοχικές βίλες, συγκροτήματα τουριστικής διαμονής, boutique ξενοδοχεία και ενοικιαζόμενα ακίνητα στην Κέρκυρα. Κατανοούμε τις λειτουργικές απαιτήσεις αυτών των ακινήτων και μπορούμε να προσαρμόσουμε το χρονοδιάγραμμά μας στις εποχικές ανάγκες, διασφαλίζοντας ολοκλήρωση πριν την έναρξη της σεζόν.",
    },
    {
      q: isEnglish
        ? "Can painting be combined with a broader space renovation?"
        : "Μπορεί το βάψιμο να συνδυαστεί με γενικότερη ανανέωση χώρου;",
      a: isEnglish
        ? "Absolutely. Painting works can be part of a broader renovation project — combined with flooring, lighting upgrades, or other finishing works. As a full-service construction and renovation company, Faiacon can coordinate all aspects of your renovation project, delivering a cohesive result under a single point of responsibility."
        : "Απολύτως. Οι εργασίες βαφής μπορούν να αποτελούν μέρος ενός ευρύτερου έργου ανακαίνισης — σε συνδυασμό με δάπεδα, αναβαθμίσεις φωτισμού ή άλλες εργασίες φινιρίσματος. Ως εταιρεία κατασκευής και ανακαίνισης πλήρους φάσματος, η Faiacon μπορεί να συντονίσει όλες τις πτυχές του έργου ανακαίνισής σας, παραδίδοντας ένα συνεκτικό αποτέλεσμα υπό μία ευθύνη.",
    },
    {
      q: isEnglish
        ? "Is it possible to schedule works within a specific timeline?"
        : "Υπάρχει δυνατότητα εργασιών σε συγκεκριμένο χρονοδιάγραμμα;",
      a: isEnglish
        ? "Yes. We plan all projects with a clear, agreed timeline from the outset. For properties with specific operational deadlines — such as tourist accommodations that need to be ready before season — we work with disciplined scheduling and appropriate crew allocation to ensure timely delivery without compromising quality."
        : "Ναι. Σχεδιάζουμε όλα τα έργα με σαφές, συμφωνημένο χρονοδιάγραμμα από την αρχή. Για ακίνητα με συγκεκριμένες λειτουργικές προθεσμίες — όπως τουριστικά καταλύματα που πρέπει να είναι έτοιμα πριν τη σεζόν — εργαζόμαστε με πειθαρχημένο χρονοπρογραμματισμό και κατάλληλη στελέχωση συνεργείων για έγκαιρη παράδοση χωρίς θυσίες στην ποιότητα.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Homeowners" : "Ιδιοκτήτες Κατοικιών",
      description: isEnglish
        ? "Seeking quality interior or exterior painting for their primary or secondary residence with professional preparation and a clean, lasting finish."
        : "Αναζητούν ποιοτικά εσωτερικά ή εξωτερικά βαψίματα για την κύρια ή δευτερεύουσα κατοικία τους με επαγγελματική προετοιμασία και καθαρό, διαρκές αποτέλεσμα.",
    },
    {
      type: isEnglish ? "Villa & Holiday Property Owners" : "Ιδιοκτήτες Βιλών & Εξοχικών",
      description: isEnglish
        ? "Needing seasonal refresh, pre-rental preparation, or complete painting works for their Corfu villa or holiday property."
        : "Χρειάζονται εποχική ανανέωση, προετοιμασία πριν από ενοικίαση ή πλήρεις εργασίες βαφής για τη βίλα ή εξοχικό τους στην Κέρκυρα.",
    },
    {
      type: isEnglish ? "Tourist Accommodation & Hotel Managers" : "Διαχειριστές Τουριστικών Καταλυμάτων & Ξενοδοχείων",
      description: isEnglish
        ? "Operating properties that require regular painting and refreshing to maintain guest experience standards and property quality between seasons."
        : "Λειτουργούν ακίνητα που απαιτούν τακτικές εργασίες βαφής και ανανέωσης για τη διατήρηση των προτύπων εμπειρίας επισκεπτών και ποιότητας ακινήτου μεταξύ σεζόν.",
    },
    {
      type: isEnglish ? "Commercial & Professional Space Owners" : "Ιδιοκτήτες Εμπορικών & Επαγγελματικών Χώρων",
      description: isEnglish
        ? "Businesses seeking a professional, well-presented environment for their staff and clients through quality interior or exterior painting works."
        : "Επιχειρήσεις που επιδιώκουν επαγγελματικό, φροντισμένο περιβάλλον για το προσωπικό και τους πελάτες τους μέσω ποιοτικών εσωτερικών ή εξωτερικών εργασιών βαφής.",
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
            <Link href="/services" className="hover:text-primary transition-colors">
              {isEnglish ? "Services" : "Υπηρεσίες"}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">
              {isEnglish ? "Painting & Decorating" : "Βαψίματα & Ελαιοχρωματισμοί"}
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
              {isEnglish ? "Painting & Decorating" : "Βαψίματα & Ελαιοχρωματισμοί"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "We undertake interior and exterior painting works with emphasis on thorough surface preparation, a clean result, and quality finishing."
                : "Αναλαμβάνουμε βαψίματα και ελαιοχρωματισμούς εσωτερικών και εξωτερικών χώρων με έμφαση στη σωστή προετοιμασία, το καθαρό αποτέλεσμα και το ποιοτικό φινίρισμα."}
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
              {isEnglish ? "Quality Painting. Professional Result." : "Ποιοτικό Βάψιμο. Επαγγελματικό Αποτέλεσμα."}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "A fresh coat of paint does more than change a colour — it renews a space, protects surfaces, and communicates care and quality. Whether refreshing a private residence, preparing a holiday villa before the season, or completing a renovation project, painting is among the finishing works that determines the final impression of any property. At Faiacon, we approach every painting project with the same discipline and attention to detail we bring to larger construction works — with thorough surface preparation, quality materials, and a finish that lasts."
                : "Ένα φρέσκο βάψιμο κάνει περισσότερα από το να αλλάξει ένα χρώμα — ανανεώνει έναν χώρο, προστατεύει επιφάνειες και αποπνέει φροντίδα και ποιότητα. Είτε ανανεώνετε μια ιδιωτική κατοικία, προετοιμάζετε μια εξοχική βίλα πριν τη σεζόν, ή ολοκληρώνετε ένα έργο ανακαίνισης, τα βαψίματα είναι από τις εργασίες φινιρίσματος που καθορίζουν την τελική εντύπωση κάθε ακινήτου. Στη Faiacon, προσεγγίζουμε κάθε έργο βαφής με την ίδια πειθαρχία και προσοχή στη λεπτομέρεια που φέρνουμε στα μεγαλύτερα κατασκευαστικά έργα — με διεξοδική προετοιμασία επιφανειών, ποιοτικά υλικά και φινίρισμα που διαρκεί."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Undertake */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "What We Undertake" : "Τι Αναλαμβάνουμε"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Painting and decorating services for every property type and scope"
                : "Υπηρεσίες βαφής και διακόσμησης για κάθε τύπο ακινήτου και εύρος εργασιών"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Key Benefits" : "Βασικά Οφέλη"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Why professional painting is worth the investment"
                : "Γιατί το επαγγελματικό βάψιμο αξίζει την επένδυση"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection
                key={i}
                className="flex gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-primary/10"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Who This Service Is For" : "Σε Ποιους Απευθύνεται"}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {idealClients.map((client, i) => (
              <AnimatedSection
                key={i}
                className="bg-white p-8 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{client.type}</h3>
                <p className="text-gray-700 leading-relaxed">{client.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Faiacon */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Why Choose Faiacon" : "Γιατί να Επιλέξετε Faiacon"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Professionalism, quality, and reliability on every project"
                : "Επαγγελματισμός, ποιότητα και αξιοπιστία σε κάθε έργο"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isEnglish ? "Thorough Preparation Always" : "Διεξοδική Προετοιμασία Πάντα",
                desc: isEnglish
                  ? "We never skip surface preparation. Filling, stucco, and primer are the non-negotiable foundation of every painting project we undertake."
                  : "Δεν παραλείπουμε ποτέ την προετοιμασία επιφανειών. Γέμισμα, στοκάρισμα και αστάρωμα είναι η αδιαπραγμάτευτη βάση κάθε έργου βαφής που αναλαμβάνουμε.",
              },
              {
                title: isEnglish ? "Quality Materials" : "Ποιοτικά Υλικά",
                desc: isEnglish
                  ? "We use quality paints and coatings appropriate for each application — interior or exterior, standard or premium — ensuring durability and a consistent finish."
                  : "Χρησιμοποιούμε ποιοτικά χρώματα και επικαλύψεις κατάλληλες για κάθε εφαρμογή — εσωτερικές ή εξωτερικές, τυπικές ή premium — διασφαλίζοντας ανθεκτικότητα και συνεπές φινίρισμα.",
              },
              {
                title: isEnglish ? "Clean, Organised Worksite" : "Καθαρό, Οργανωμένο Εργοτάξιο",
                desc: isEnglish
                  ? "We protect floors, furniture, and fixtures before starting, and leave the site fully clean after completion. Your property is respected throughout the project."
                  : "Προστατεύουμε δάπεδα, έπιπλα και εξαρτήματα πριν ξεκινήσουμε, και αφήνουμε τον χώρο πλήρως καθαρό μετά την ολοκλήρωση. Το ακίνητό σας γίνεται σεβαστό καθ' όλη τη διάρκεια του έργου.",
              },
              {
                title: isEnglish ? "On-time Delivery" : "Παράδοση Εντός Χρονοδιαγράμματος",
                desc: isEnglish
                  ? "We plan every project with a clear timeline and commit to it. For time-sensitive properties, we allocate the right crew to ensure completion on schedule."
                  : "Σχεδιάζουμε κάθε έργο με σαφές χρονοδιάγραμμα και δεσμευόμαστε σε αυτό. Για ακίνητα με χρονικές απαιτήσεις, διαθέτουμε τα κατάλληλα συνεργεία για έγκαιρη ολοκλήρωση.",
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

      {/* Work Process */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Our Collaboration Process" : "Στάδια Συνεργασίας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "Clear steps from first contact to final handover"
                : "Σαφή βήματα από την πρώτη επαφή έως την τελική παράδοση"}
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} className="bg-muted p-8 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isEnglish ? "Ready to Refresh Your Property?" : "Έτοιμοι να Ανανεώσετε το Ακίνητό σας;"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isEnglish
                ? "Contact us to discuss your property and receive a detailed painting proposal tailored to your needs and timeline."
                : "Επικοινωνήστε μαζί μας για να συζητήσουμε το ακίνητό σας και να λάβετε αναλυτική πρόταση βαψίματος προσαρμοσμένη στις ανάγκες και το χρονοδιάγραμμά σας."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Contact Us" : "Επικοινωνήστε Μαζί μας"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="https://wa.me/306942123456" target="_blank" rel="noopener noreferrer">
                  {isEnglish ? "WhatsApp Estimate" : "WhatsApp Εκτίμηση"}
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
