"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Home,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Droplets,
  Building2,
  CheckCircle2,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"

export default function StegesPage() {
  const { isEnglish } = useLanguage()

  const services = [
    {
      icon: Home,
      title: isEnglish ? "New Roof Construction" : "Νέες Κατασκευές Στεγών",
      description: isEnglish
        ? "Complete construction of new roofs for residences, villas, and commercial properties. We design and build roof structures adapted to the property's architecture and local climate conditions."
        : "Πλήρης κατασκευή νέων στεγών για κατοικίες, βίλες και επαγγελματικά ακίνητα. Σχεδιάζουμε και κατασκευάζουμε στεγανές κατασκευές προσαρμοσμένες στην αρχιτεκτονική του ακινήτου και τις κλιματολογικές συνθήκες.",
    },
    {
      icon: Wrench,
      title: isEnglish ? "Roof Repair & Restoration" : "Επισκευή & Αποκατάσταση Στεγών",
      description: isEnglish
        ? "Diagnosis and repair of existing roof damage including structural weaknesses, broken tiles, deteriorated timber, and failed waterproofing. We restore roofs to full functionality and structural integrity."
        : "Διάγνωση και επισκευή υφιστάμενων φθορών στέγης, συμπεριλαμβανομένων δομικών αδυναμιών, σπασμένων κεραμιδιών, φθαρμένης ξυλείας και αποτυχίας στεγανοποίησης. Αποκαθιστούμε τη λειτουργικότητα και δομική ακεραιότητα.",
    },
    {
      icon: Droplets,
      title: isEnglish ? "Waterproofing" : "Στεγανοποίηση",
      description: isEnglish
        ? "Application of high-performance waterproofing membranes and systems that provide long-term protection against rain, moisture infiltration, and the harsh weather conditions of the Ionian climate."
        : "Εφαρμογή υψηλής απόδοσης μεμβρανών και συστημάτων στεγανοποίησης που παρέχουν μακροχρόνια προστασία από βροχή, διείσδυση υγρασίας και τις έντονες καιρικές συνθήκες του Ιονίου κλίματος.",
    },
    {
      icon: Layers,
      title: isEnglish ? "Thermal Insulation" : "Θερμομονωτικές Παρεμβάσεις",
      description: isEnglish
        ? "Installation of thermal insulation within the roof structure to improve the building's energy performance, reduce heating and cooling costs, and create a more comfortable interior environment."
        : "Τοποθέτηση θερμομόνωσης εντός της στεγαστικής κατασκευής για βελτίωση της ενεργειακής απόδοσης του κτιρίου, μείωση των δαπανών θέρμανσης και ψύξης και δημιουργία πιο άνετου εσωτερικού περιβάλλοντος.",
    },
    {
      icon: Building2,
      title: isEnglish ? "Tile Replacement & Upgrade" : "Αντικατάσταση & Αναβάθμιση Κεραμιδιών",
      description: isEnglish
        ? "Replacement of damaged, aged, or aesthetically unsuitable roof tiles with new certified materials. We work with traditional clay tiles, modern ceramic tiles, and other suitable roofing materials."
        : "Αντικατάσταση φθαρμένων, παλαιών ή αισθητικά ακατάλληλων κεραμιδιών με νέα πιστοποιημένα υλικά. Εργαζόμαστε με παραδοσιακά κεραμικά, σύγχρονα κεραμίδια και άλλα κατάλληλα στεγαστικά υλικά.",
    },
    {
      icon: ShieldCheck,
      title: isEnglish ? "Timber Roof Structures" : "Ξύλινες Στεγαστικές Κατασκευές",
      description: isEnglish
        ? "Construction and repair of traditional timber roof frameworks. We use quality treated timber, properly sized and assembled for structural strength and longevity suited to the Corfu climate."
        : "Κατασκευή και επισκευή παραδοσιακών ξύλινων στεγαστικών σκελετών. Χρησιμοποιούμε ποιοτική εμποτισμένη ξυλεία, σωστά διαστασιολογημένη και συναρμολογημένη για δομική αντοχή και μακροβιότητα.",
    },
  ]

  const benefits = [
    {
      title: isEnglish ? "Structural Protection" : "Προστασία του Ακινήτου",
      desc: isEnglish
        ? "A well-constructed and maintained roof is the primary barrier against moisture, rain, and weathering that can cause serious long-term damage to the entire building structure."
        : "Μια καλά κατασκευασμένη και συντηρημένη στέγη είναι το πρωταρχικό φράγμα κατά της υγρασίας, της βροχής και των καιρικών φθορών που μπορούν να προκαλέσουν σοβαρές ζημιές στο σύνολο της κτιριακής κατασκευής.",
    },
    {
      title: isEnglish ? "Long-term Durability" : "Μεγαλύτερη Αντοχή στον Χρόνο",
      desc: isEnglish
        ? "Proper construction and quality materials ensure a roof that performs reliably for decades, significantly reducing the need for repeated repairs and unplanned maintenance costs."
        : "Η σωστή κατασκευή και τα ποιοτικά υλικά διασφαλίζουν μια στέγη που λειτουργεί αξιόπιστα για δεκαετίες, μειώνοντας σημαντικά την ανάγκη για επαναλαμβανόμενες επισκευές και απρόβλεπτο κόστος συντήρησης.",
    },
    {
      title: isEnglish ? "Effective Waterproofing" : "Αποτελεσματική Στεγανοποίηση",
      desc: isEnglish
        ? "Correct waterproofing eliminates moisture infiltration into the building, preventing damage to insulation, walls, and interior finishes — particularly important in Corfu's rainy winter climate."
        : "Η σωστή στεγανοποίηση εξαλείφει τη διείσδυση υγρασίας στο κτίριο, αποτρέποντας ζημιές σε μόνωση, τοίχους και εσωτερικά φινιρίσματα — ιδιαίτερα σημαντικό στο βροχερό χειμωνιάτικο κλίμα της Κέρκυρας.",
    },
    {
      title: isEnglish ? "Improved Thermal Performance" : "Βελτίωση Θερμικής Συμπεριφοράς",
      desc: isEnglish
        ? "A properly insulated roof significantly reduces heat loss in winter and heat gain in summer, contributing to lower energy consumption and a more comfortable indoor climate year-round."
        : "Μια σωστά μονωμένη στέγη μειώνει σημαντικά τις θερμικές απώλειες το χειμώνα και τα θερμικά κέρδη το καλοκαίρι, συμβάλλοντας στη μείωση κατανάλωσης ενέργειας και σε πιο άνετο εσωτερικό κλίμα.",
    },
    {
      title: isEnglish ? "Aesthetic Upgrade" : "Αισθητική Αναβάθμιση",
      desc: isEnglish
        ? "A renewed roof visually transforms the property, improving its overall appearance and kerb appeal — a significant factor for rental properties and those being prepared for sale."
        : "Μια ανανεωμένη στέγη μεταμορφώνει οπτικά το ακίνητο, βελτιώνοντας τη συνολική εμφάνιση και ελκυστικότητά του — σημαντικός παράγοντας για ενοικιαζόμενα ακίνητα και αυτά που προετοιμάζονται για πώληση.",
    },
    {
      title: isEnglish ? "Increased Property Value" : "Αύξηση Αξίας Ακινήτου",
      desc: isEnglish
        ? "A sound, modern roof is among the factors that directly support the market value of a property, instilling confidence in buyers, tenants, and hospitality operators."
        : "Μια άρτια, σύγχρονη στέγη ανήκει στους παράγοντες που υποστηρίζουν άμεσα την εμπορική αξία ενός ακινήτου, εμπνέοντας εμπιστοσύνη σε αγοραστές, ενοικιαστές και τουριστικούς φορείς.",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Initial Contact" : "Αρχική Επικοινωνία",
      description: isEnglish
        ? "Initial discussion of your requirements — whether for a new roof, repair, waterproofing, or complete renovation. We listen carefully to understand the scope and your expectations."
        : "Αρχική συζήτηση των αναγκών σας — είτε πρόκειται για νέα στέγη, επισκευή, στεγανοποίηση ή πλήρη ανακαίνιση. Ακούμε προσεκτικά για να κατανοήσουμε την έκταση των εργασιών και τις προσδοκίες σας.",
    },
    {
      stage: isEnglish ? "On-site Inspection & Assessment" : "Αυτοψία και Αξιολόγηση",
      description: isEnglish
        ? "Thorough inspection of the existing roof structure, covering condition, waterproofing integrity, insulation status, and any damage or deterioration requiring attention. We document findings accurately."
        : "Διεξοδική επιθεώρηση της υφιστάμενης κατασκευής στέγης, κατάστασης, ακεραιότητας στεγανοποίησης, κατάστασης μόνωσης και τυχόν φθορών. Τεκμηριώνουμε τα ευρήματα με ακρίβεια.",
    },
    {
      stage: isEnglish ? "Work Proposal" : "Πρόταση Εργασιών",
      description: isEnglish
        ? "Detailed proposal covering the scope of works, materials to be used, timeline, and transparent pricing. We explain each element clearly so you can make an informed decision."
        : "Αναλυτική πρόταση που καλύπτει το εύρος των εργασιών, τα υλικά που θα χρησιμοποιηθούν, το χρονοδιάγραμμα και τη διαφανή τιμολόγηση. Εξηγούμε κάθε στοιχείο ξεκάθαρα ώστε να λάβετε τεκμηριωμένη απόφαση.",
    },
    {
      stage: isEnglish ? "Implementation" : "Υλοποίηση",
      description: isEnglish
        ? "Professional execution by our experienced teams, with quality control maintained at every stage — from structural preparation and insulation through to tiling, waterproofing, and finishing works."
        : "Επαγγελματική εκτέλεση από τα έμπειρα συνεργεία μας, με ποιοτικό έλεγχο σε κάθε στάδιο — από την προετοιμασία του σκελετού και τη μόνωση έως την κεραμοσκεπή, τη στεγανοποίηση και τις εργασίες φινιρίσματος.",
    },
    {
      stage: isEnglish ? "Completion & Final Result" : "Ολοκλήρωση και Τελικό Αποτέλεσμα",
      description: isEnglish
        ? "Final inspection of the completed roof, site cleanup, and handover. We ensure the result fully meets the agreed specifications in terms of structural performance, waterproofing, and appearance."
        : "Τελική επιθεώρηση της ολοκληρωμένης στέγης, καθαρισμός του χώρου και παράδοση. Διασφαλίζουμε ότι το αποτέλεσμα ανταποκρίνεται πλήρως στις συμφωνημένες προδιαγραφές σε δομική απόδοση, στεγανοποίηση και αισθητική.",
    },
  ]

  const faqItems = [
    {
      q: isEnglish
        ? "Do you undertake both new roof construction and repairs?"
        : "Αναλαμβάνετε νέες κατασκευές αλλά και επισκευές στεγών;",
      a: isEnglish
        ? "Yes. We handle the full range of roof works — from complete new constructions to targeted repairs of existing roofs, partial restorations, and full renovations of aged roof structures."
        : "Ναι. Αναλαμβάνουμε το πλήρες εύρος εργασιών στέγης — από ολοκληρωμένες νέες κατασκευές έως στοχευμένες επισκευές υφιστάμενων στεγών, μερικές αποκαταστάσεις και πλήρεις ανακαινίσεις παλαιών στεγαστικών κατασκευών.",
    },
    {
      q: isEnglish
        ? "Can you undertake waterproofing and insulation works?"
        : "Μπορείτε να αναλάβετε στεγανοποίηση και μονωτικές παρεμβάσεις;",
      a: isEnglish
        ? "Absolutely. Waterproofing and thermal insulation are integral parts of our roof services. We assess the existing condition and propose the most appropriate system for each property and situation."
        : "Σίγουρα. Η στεγανοποίηση και η θερμομόνωση αποτελούν αναπόσπαστα μέρη των υπηρεσιών στέγης μας. Αξιολογούμε την υφιστάμενη κατάσταση και προτείνουμε το πιο κατάλληλο σύστημα για κάθε ακίνητο και περίπτωση.",
    },
    {
      q: isEnglish
        ? "Do you work on residences, villas, and tourist properties?"
        : "Εργάζεστε σε κατοικίες, βίλες και τουριστικά ακίνητα;",
      a: isEnglish
        ? "Yes. We undertake roof projects across all property types in Corfu — private homes, holiday villas, tourist accommodation, commercial buildings, and listed properties requiring sensitive handling."
        : "Ναι. Αναλαμβάνουμε έργα στέγης σε όλους τους τύπους ακινήτων στην Κέρκυρα — ιδιωτικές κατοικίες, εξοχικές βίλες, τουριστικά καταλύματα, επαγγελματικά κτίρια και διατηρητέα ακίνητα που απαιτούν ευαίσθητη προσέγγιση.",
    },
    {
      q: isEnglish
        ? "Can an old or deteriorated roof be restored?"
        : "Μπορεί να γίνει αποκατάσταση παλιάς ή φθαρμένης στέγης;",
      a: isEnglish
        ? "In most cases, yes. After a thorough inspection we assess whether repair and restoration is the appropriate approach or whether a full replacement is more practical and cost-effective. We present both options clearly with honest recommendations."
        : "Στις περισσότερες περιπτώσεις, ναι. Μετά από διεξοδική επιθεώρηση αξιολογούμε αν η επισκευή και αποκατάσταση είναι η κατάλληλη προσέγγιση ή αν η πλήρης αντικατάσταση είναι πιο πρακτική και οικονομική. Παρουσιάζουμε και τις δύο επιλογές με ειλικρινείς συστάσεις.",
    },
    {
      q: isEnglish
        ? "Do you handle individual interventions or only complete roofs?"
        : "Η υπηρεσία αφορά μόνο πλήρη κατασκευή ή και μεμονωμένες παρεμβάσεις;",
      a: isEnglish
        ? "Both. We undertake complete roof constructions and renovations as well as targeted individual works — replacing damaged sections, repairing specific leaks, applying waterproofing membranes, or improving insulation in part of a roof structure."
        : "Και τα δύο. Αναλαμβάνουμε τόσο πλήρεις κατασκευές και ανακαινίσεις στέγης όσο και στοχευμένες μεμονωμένες εργασίες — αντικατάσταση φθαρμένων τμημάτων, επισκευή συγκεκριμένων διαρροών, εφαρμογή μεμβρανών στεγανοποίησης ή βελτίωση μόνωσης σε τμήμα στεγαστικής κατασκευής.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Homeowners" : "Ιδιοκτήτες Κατοικιών",
      description: isEnglish
        ? "Seeking reliable roof construction, repair, or upgrade for their primary or secondary residence."
        : "Αναζητούν αξιόπιστη κατασκευή, επισκευή ή αναβάθμιση στέγης για την κύρια ή δευτερεύουσα κατοικία τους.",
    },
    {
      type: isEnglish ? "Villa & Holiday Property Owners" : "Ιδιοκτήτες Βιλών & Εξοχικών",
      description: isEnglish
        ? "Looking to maintain or upgrade the roof of their investment property in Corfu, ensuring long-term protection and rental readiness."
        : "Επιδιώκουν να διατηρήσουν ή να αναβαθμίσουν τη στέγη της επενδυτικής τους ιδιοκτησίας στην Κέρκυρα, διασφαλίζοντας μακροχρόνια προστασία και ετοιμότητα για ενοικίαση.",
    },
    {
      type: isEnglish ? "Tourist Accommodation Operators" : "Ιδιοκτήτες Τουριστικών Καταλυμάτων",
      description: isEnglish
        ? "Operators of hotels, guesthouses, or villa complexes who need roof works scheduled outside the peak tourist season."
        : "Ιδιοκτήτες ξενοδοχείων, ενοικιαζόμενων δωματίων ή συγκροτημάτων βιλών που χρειάζονται εργασίες στέγης προγραμματισμένες εκτός τουριστικής περιόδου.",
    },
    {
      type: isEnglish ? "Commercial Property Owners" : "Ιδιοκτήτες Επαγγελματικών Χώρων",
      description: isEnglish
        ? "Businesses requiring roof repair, waterproofing, or insulation works to protect their premises and reduce running costs."
        : "Επιχειρήσεις που χρειάζονται επισκευή στέγης, στεγανοποίηση ή μονωτικές παρεμβάσεις για την προστασία των εγκαταστάσεών τους και τη μείωση λειτουργικών δαπανών.",
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
              {isEnglish ? "Roofs" : "Στέγες"}
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
              {isEnglish ? "Roofs" : "Στέγες"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "Construction, repair, and renovation of roofs with emphasis on durability, effective waterproofing, and a refined aesthetic result."
                : "Αναλαμβάνουμε κατασκευή, επισκευή και ανακαίνιση στεγών με έμφαση στην αντοχή, τη σωστή στεγανοποίηση, τη λειτουργικότητα και το αισθητικά προσεγμένο αποτέλεσμα."}
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
              {isEnglish ? "Roof Construction & Renovation in Corfu" : "Κατασκευή & Ανακαίνιση Στεγών στην Κέρκυρα"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "The roof is one of the most critical elements of any building. A properly constructed and maintained roof protects the entire structure from the elements, prevents moisture infiltration, and contributes significantly to the energy performance of the property. In Corfu's climate — with its heavy winter rainfall, strong winds, and intense summer sun — the quality of roof construction and waterproofing is especially important. We undertake roof projects of all scales and types, applying the correct technical approach and quality materials suited to each property."
                : "Η στέγη αποτελεί ένα από τα πιο κρίσιμα στοιχεία κάθε κτιρίου. Μια σωστά κατασκευασμένη και συντηρημένη στέγη προστατεύει ολόκληρη την κατασκευή από τις καιρικές συνθήκες, αποτρέπει τη διείσδυση υγρασίας και συμβάλλει σημαντικά στην ενεργειακή απόδοση του ακινήτου. Στο κλίμα της Κέρκυρας — με τις έντονες χειμερινές βροχοπτώσεις, τους δυνατούς ανέμους και τον έντονο καλοκαιρινό ήλιο — η ποιότητα της κατασκευής και στεγανοποίησης της στέγης είναι ιδιαίτερα σημαντική. Αναλαμβάνουμε έργα στέγης όλης της κλίμακας και τύπων, εφαρμόζοντας τη σωστή τεχνική προσέγγιση και ποιοτικά υλικά κατάλληλα για κάθε ακίνητο."}
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
                ? "Complete roof services from new construction through to repair, waterproofing, and insulation"
                : "Ολοκληρωμένες υπηρεσίες στέγης από νέα κατασκευή έως επισκευή, στεγανοποίηση και μόνωση"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Types of Roof Works */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Types of Roof Works" : "Είδη Εργασιών Στέγης"}
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isEnglish
              ? [
                  "Tiled roofs (clay & ceramic)",
                  "Timber roof frameworks",
                  "Waterproofing membranes",
                  "Thermal insulation works",
                  "Repair of moisture damage",
                  "Routine maintenance",
                  "Partial restorations",
                  "Aesthetic upgrades",
                  "New constructions",
                ]
              : [
                  "Κεραμοσκεπές (κλασικές & σύγχρονες)",
                  "Ξύλινες στεγαστικές κατασκευές",
                  "Μεμβράνες στεγανοποίησης",
                  "Θερμομονωτικές παρεμβάσεις",
                  "Επισκευή φθορών από υγρασία",
                  "Εργασίες συντήρησης",
                  "Μερικές αποκαταστάσεις",
                  "Αισθητική αναβάθμιση",
                  "Νέες κατασκευές",
                ]
            ).map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-5 bg-muted rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Benefits" : "Οφέλη"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "What a well-executed roof project delivers for your property"
                : "Τι αποδίδει ένα σωστά εκτελεσμένο έργο στέγης για το ακίνητό σας"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Who This Service Is For" : "Σε Ποιους Απευθύνεται"}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {idealClients.map((client, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-muted rounded-xl p-8 border border-border h-full">
                  <h3 className="text-xl font-bold text-primary mb-3">{client.type}</h3>
                  <p className="text-gray-600 leading-relaxed">{client.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Faiacon */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isEnglish ? "Why Choose Faiacon" : "Γιατί να Επιλέξετε τη Faiacon"}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {isEnglish
                ? "Professional roof services backed by experience, quality, and reliability"
                : "Επαγγελματικές υπηρεσίες στέγης με εμπειρία, ποιότητα και αξιοπιστία"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isEnglish ? "Correct Technical Approach" : "Σωστή Τεχνική Προσέγγιση",
                desc: isEnglish
                  ? "Every roof project begins with a thorough assessment. We identify the root cause of problems and apply the technically appropriate solution — not a quick fix."
                  : "Κάθε έργο στέγης ξεκινά με διεξοδική αξιολόγηση. Εντοπίζουμε την πραγματική αιτία των προβλημάτων και εφαρμόζουμε τη σωστή τεχνική λύση — όχι μια προσωρινή αντιμετώπιση.",
              },
              {
                title: isEnglish ? "Attention to Detail" : "Προσοχή στη Λεπτομέρεια",
                desc: isEnglish
                  ? "Roof construction demands precision at every stage — from the structural framework and insulation to waterproofing and the final tiling. We maintain rigorous standards throughout."
                  : "Η κατασκευή στέγης απαιτεί ακρίβεια σε κάθε στάδιο — από τον φέρoντα σκελετό και τη μόνωση έως τη στεγανοποίηση και την τελική κεραμοσκεπή. Διατηρούμε αυστηρά πρότυπα καθ' όλη τη διάρκεια.",
              },
              {
                title: isEnglish ? "Durable Solutions" : "Ανθεκτικές Λύσεις",
                desc: isEnglish
                  ? "We use quality materials appropriate for Corfu's climate — selected for long-term performance rather than lowest cost, ensuring the roof serves the property reliably for years to come."
                  : "Χρησιμοποιούμε ποιοτικά υλικά κατάλληλα για το κλίμα της Κέρκυρας — επιλεγμένα για μακροχρόνια απόδοση και όχι για το χαμηλότερο κόστος, διασφαλίζοντας ότι η στέγη εξυπηρετεί αξιόπιστα το ακίνητο για χρόνια.",
              },
              {
                title: isEnglish ? "Adapted to Every Property" : "Προσαρμογή στις Ανάγκες κάθε Ακινήτου",
                desc: isEnglish
                  ? "Whether a traditional stone house, a modern villa, a tourist property, or a listed building, we adapt our approach to the specific characteristics and requirements of each project."
                  : "Είτε πρόκειται για παραδοσιακή πέτρινη κατοικία, σύγχρονη βίλα, τουριστικό ακίνητο ή διατηρητέο κτίριο, προσαρμόζουμε την προσέγγισή μας στα συγκεκριμένα χαρακτηριστικά και απαιτήσεις κάθε έργου.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/10 rounded-xl p-8 border border-white/20 h-full">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "How We Work" : "Στάδια Συνεργασίας"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {isEnglish
                ? "A clear, structured process from first contact to project completion"
                : "Μια σαφής, δομημένη διαδικασία από την πρώτη επικοινωνία έως την ολοκλήρωση"}
            </p>
          </AnimatedSection>
          <div className="space-y-6">
            {workStages.map((stage, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start bg-muted rounded-xl p-8 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{stage.stage}</h3>
                    <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimatedSection className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isEnglish ? "Discuss Your Roof Project" : "Μιλήστε μας για τη Στέγη σας"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {isEnglish
                ? "Whether you need a new roof, repair of an existing one, waterproofing, or insulation works, contact us for an initial consultation and a clear proposal."
                : "Είτε χρειάζεστε νέα στέγη, επισκευή υφιστάμενης, στεγανοποίηση ή μονωτικές παρεμβάσεις, επικοινωνήστε μαζί μας για μια αρχική συζήτηση και μια σαφή πρόταση εργασιών."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="/appointment">{isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">{isEnglish ? "Contact Us" : "Επικοινωνήστε Μαζί μας"}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
