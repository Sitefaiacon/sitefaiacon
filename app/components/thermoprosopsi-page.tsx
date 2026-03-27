"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Layers,
  ShieldCheck,
  TrendingUp,
  Thermometer,
  Home,
  Building2,
  CheckCircle2,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"

export default function ThermoprosopsiPage() {
  const { isEnglish } = useLanguage()

  const services = [
    {
      icon: Layers,
      title: isEnglish ? "Surface Inspection & Substrate Preparation" : "Επιθεώρηση & Προετοιμασία Υποστρώματος",
      description: isEnglish
        ? "Thorough assessment of the existing facade condition, cleaning, repair of cracks, and preparation of the substrate to ensure optimal adhesion of the insulation system."
        : "Διεξοδική αξιολόγηση της υφιστάμενης κατάστασης της όψης, καθαρισμός, αποκατάσταση ρωγμών και προετοιμασία υποστρώματος για βέλτιστη πρόσφυση του συστήματος θερμομόνωσης.",
    },
    {
      icon: Thermometer,
      title: isEnglish ? "Thermal Insulation Board Installation" : "Εφαρμογή Θερμομονωτικών Πλακών",
      description: isEnglish
        ? "Professional installation of certified EPS or mineral wool insulation panels with precision alignment, ensuring continuous thermal protection without cold bridges."
        : "Επαγγελματική τοποθέτηση πιστοποιημένων θερμομονωτικών πλακών EPS ή ορυκτοβάμβακα με ακριβή ευθυγράμμιση, διασφαλίζοντας συνεχή θερμική προστασία χωρίς θερμογέφυρες.",
    },
    {
      icon: ShieldCheck,
      title: isEnglish ? "Reinforcement & Waterproofing Layer" : "Ενίσχυση με Υαλόπλεγμα & Υδατοστεγανοποίηση",
      description: isEnglish
        ? "Application of fiberglass mesh reinforcement and base coat layers that provide structural strength, crack resistance, and full waterproofing of the insulated facade."
        : "Εφαρμογή ενίσχυσης υαλοπλέγματος και βασικών επιστρώσεων που παρέχουν δομική αντοχή, αντίσταση στις ρωγμές και πλήρη υδατοστεγανοποίηση της μονωμένης όψης.",
    },
    {
      icon: Home,
      title: isEnglish ? "Final Coatings & Aesthetic Finishing" : "Τελικές Επιστρώσεις & Αισθητικό Φινίρισμα",
      description: isEnglish
        ? "Premium decorative renders and coatings applied with skilled craftsmanship, offering a refined exterior appearance with lasting color retention and weather resistance."
        : "Πολυτελείς διακοσμητικοί σοβάδες και επιστρώσεις εφαρμοσμένοι με επαγγελματική τεχνογνωσία, προσφέροντας εκλεπτυσμένη εξωτερική εμφάνιση με διαρκή διατήρηση χρώματος και αντίσταση στις καιρικές συνθήκες.",
    },
    {
      icon: Building2,
      title: isEnglish ? "Applications for All Property Types" : "Εφαρμογές σε Όλους τους Τύπους Ακινήτων",
      description: isEnglish
        ? "Complete thermoprosopsi solutions for residences, villas, tourist accommodations, hotels, and commercial properties across Corfu."
        : "Ολοκληρωμένες λύσεις θερμοπρόσοψης για κατοικίες, βίλες, τουριστικά καταλύματα, ξενοδοχεία και επαγγελματικά ακίνητα στην Κέρκυρα.",
    },
    {
      icon: Zap,
      title: isEnglish ? "Energy Upgrade Certification Support" : "Υποστήριξη Ενεργειακής Αναβάθμισης",
      description: isEnglish
        ? "Guidance and coordination for energy performance certification, aligning your thermoprosopsi project with current energy upgrade programs and requirements."
        : "Καθοδήγηση και συντονισμός για πιστοποίηση ενεργειακής απόδοσης, ευθυγραμμίζοντας το έργο θερμοπρόσοψής σας με τα τρέχοντα προγράμματα και απαιτήσεις ενεργειακής αναβάθμισης.",
    },
  ]

  const benefits = [
    {
      title: isEnglish ? "Significant Energy Savings" : "Σημαντική Εξοικονόμηση Ενέργειας",
      desc: isEnglish
        ? "Substantial reduction in heating and cooling costs through dramatically improved thermal performance of the building envelope."
        : "Ουσιαστική μείωση των δαπανών θέρμανσης και ψύξης μέσω δραματικά βελτιωμένης θερμικής απόδοσης του κελύφους.",
    },
    {
      title: isEnglish ? "Improved Thermal Comfort" : "Βελτιωμένη Θερμική Άνεση",
      desc: isEnglish
        ? "Stable indoor temperatures year-round, elimination of cold walls and condensation, and a noticeably more comfortable living environment."
        : "Σταθερές εσωτερικές θερμοκρασίες καθ' όλη τη διάρκεια του έτους, εξάλειψη κρύων τοίχων και υγρασίας, και αισθητά πιο άνετο περιβάλλον διαβίωσης.",
    },
    {
      title: isEnglish ? "Moisture & Weathering Protection" : "Προστασία από Υγρασία & Καιρικές Φθορές",
      desc: isEnglish
        ? "Full protection of the structural shell from moisture penetration, rain, wind, and the long-term effects of the Mediterranean climate."
        : "Πλήρης προστασία του δομικού κελύφους από διείσδυση υγρασίας, βροχή, άνεμο και τις μακροχρόνιες επιδράσεις του μεσογειακού κλίματος.",
    },
    {
      title: isEnglish ? "Aesthetic Facade Upgrade" : "Αισθητική Αναβάθμιση Όψης",
      desc: isEnglish
        ? "A completely renewed exterior appearance that enhances the property's visual quality and distinguishes it in the neighbourhood."
        : "Μια εντελώς ανανεωμένη εξωτερική εμφάνιση που αναβαθμίζει την οπτική ποιότητα του ακινήτου και το ξεχωρίζει στη γειτονιά.",
    },
    {
      title: isEnglish ? "Increased Property Value" : "Αύξηση Αξίας Ακινήτου",
      desc: isEnglish
        ? "A thermoprosopsi investment directly increases the market value and energy class of the property, strengthening its appeal for sale or rental."
        : "Η επένδυση σε θερμοπρόσοψη αυξάνει άμεσα την εμπορική αξία και την ενεργειακή κατάταξη του ακινήτου, ενισχύοντας την ελκυστικότητά του για πώληση ή ενοικίαση.",
    },
    {
      title: isEnglish ? "Reduction of Structural Deterioration" : "Μείωση Δομικής Φθοράς",
      desc: isEnglish
        ? "Long-term protection of the structural elements from thermal stress cycles, reducing maintenance frequency and extending the building's life."
        : "Μακροχρόνια προστασία των δομικών στοιχείων από κύκλους θερμικής καταπόνησης, μειώνοντας τη συχνότητα συντήρησης και παρατείνοντας τη ζωή του κτιρίου.",
    },
  ]

  const workStages = [
    {
      stage: isEnglish ? "Initial Contact" : "Αρχική Επικοινωνία",
      description: isEnglish
        ? "Discussion of the project requirements, property type, scope of work, and client expectations. We provide initial guidance on system options and approach."
        : "Συζήτηση των απαιτήσεων του έργου, τύπου ακινήτου, έκτασης εργασιών και προσδοκιών πελάτη. Παρέχουμε αρχική καθοδήγηση για επιλογές συστήματος και προσέγγιση.",
    },
    {
      stage: isEnglish ? "On-site Inspection & Assessment" : "Αυτοψία και Αξιολόγηση",
      description: isEnglish
        ? "Thorough inspection of the existing facade, assessment of substrate condition, measurements, and identification of any structural issues requiring attention before insulation."
        : "Διεξοδική επιθεώρηση της υφιστάμενης όψης, αξιολόγηση κατάστασης υποστρώματος, μετρήσεις και εντοπισμός τυχόν δομικών ζητημάτων που χρήζουν αντιμετώπισης πριν τη μόνωση.",
    },
    {
      stage: isEnglish ? "Work Proposal & Material Selection" : "Πρόταση Εργασιών & Επιλογή Υλικών",
      description: isEnglish
        ? "Detailed proposal with scope of work, certified materials specification, timeline, and clear pricing. Material and finish selection is made in collaboration with the client."
        : "Αναλυτική πρόταση με έκταση εργασιών, προδιαγραφές πιστοποιημένων υλικών, χρονοδιάγραμμα και σαφή τιμολόγηση. Επιλογή υλικών και φινιρίσματος σε συνεργασία με τον πελάτη.",
    },
    {
      stage: isEnglish ? "Implementation" : "Υλοποίηση",
      description: isEnglish
        ? "Professional execution by specialized teams — substrate preparation, insulation installation, reinforcement, primer coats, and final decorative layers applied in sequence with quality checks at every stage."
        : "Επαγγελματική εκτέλεση από εξειδικευμένα συνεργεία — προετοιμασία υποστρώματος, τοποθέτηση μόνωσης, ενίσχυση, αστάρωμα και τελικές διακοσμητικές στρώσεις με ποιοτικούς ελέγχους σε κάθε στάδιο.",
    },
    {
      stage: isEnglish ? "Completion & Final Result" : "Ολοκλήρωση και Τελικό Αποτέλεσμα",
      description: isEnglish
        ? "Final inspection of the completed system, cleanup of the site, and handover to the client. We ensure the result fully meets the agreed specifications and aesthetic standards."
        : "Τελική επιθεώρηση του ολοκληρωμένου συστήματος, καθαρισμός του χώρου και παράδοση στον πελάτη. Διασφαλίζουμε ότι το αποτέλεσμα ανταποκρίνεται πλήρως στις συμφωνημένες προδιαγραφές και αισθητικά πρότυπα.",
    },
  ]

  const faqItems = [
    {
      q: isEnglish
        ? "What is thermoprosopsi and what are its main benefits?"
        : "Τι είναι η θερμοπρόσοψη και ποια είναι τα βασικά της οφέλη;",
      a: isEnglish
        ? "Thermoprosopsi is an external thermal insulation composite system (ETICS) applied to the building's exterior walls. Its main benefits include significant energy savings, improved indoor thermal comfort, protection of the structural shell from moisture and weathering, aesthetic renewal of the facade, and a direct increase in the property's market value and energy class."
        : "Η θερμοπρόσοψη είναι ένα σύστημα εξωτερικής θερμομόνωσης (ETICS) που εφαρμόζεται στους εξωτερικούς τοίχους του κτιρίου. Τα βασικά της οφέλη περιλαμβάνουν σημαντική εξοικονόμηση ενέργειας, βελτίωση της εσωτερικής θερμικής άνεσης, προστασία του δομικού κελύφους από υγρασία και καιρικές συνθήκες, αισθητική ανανέωση της όψης και άμεση αύξηση της εμπορικής αξίας και ενεργειακής κατάταξης του ακινήτου.",
    },
    {
      q: isEnglish
        ? "Is thermoprosopsi suitable for every type of building?"
        : "Είναι κατάλληλη για κάθε τύπο κτιρίου;",
      a: isEnglish
        ? "Yes. Thermoprosopsi can be applied to virtually all building types — residences, villas, apartment buildings, tourist accommodations, hotels, and commercial properties. The system is adapted to the specific characteristics of each building, its substrate condition, and the owner's requirements. Even older buildings or those with existing facade issues can benefit after proper substrate preparation."
        : "Ναι. Η θερμοπρόσοψη μπορεί να εφαρμοστεί σε σχεδόν όλους τους τύπους κτιρίων — κατοικίες, βίλες, πολυκατοικίες, τουριστικά καταλύματα, ξενοδοχεία και επαγγελματικά ακίνητα. Το σύστημα προσαρμόζεται στα συγκεκριμένα χαρακτηριστικά κάθε κτιρίου, την κατάσταση του υποστρώματος και τις απαιτήσεις του ιδιοκτήτη. Ακόμα και παλαιότερα κτίρια ή αυτά με υφιστάμενα προβλήματα όψης μπορούν να επωφεληθούν μετά από κατάλληλη προετοιμασία υποστρώματος.",
    },
    {
      q: isEnglish
        ? "Can thermoprosopsi genuinely reduce energy consumption?"
        : "Μπορεί να βοηθήσει ουσιαστικά στην εξοικονόμηση ενέργειας;",
      a: isEnglish
        ? "Absolutely. A properly installed thermoprosopsi system can reduce heating and cooling costs by 30-50% depending on the existing insulation state of the building, the thickness of the insulation used, and the climate zone. For uninsulated buildings in Corfu's Mediterranean climate, the savings can be substantial and the investment pays back over a reasonable period."
        : "Σίγουρα. Ένα σωστά εγκατεστημένο σύστημα θερμοπρόσοψης μπορεί να μειώσει τα έξοδα θέρμανσης και ψύξης κατά 30-50%, ανάλογα με την υφιστάμενη κατάσταση μόνωσης του κτιρίου, το πάχος της μόνωσης που χρησιμοποιείται και τη ζώνη κλίματος. Για αμόνωτα κτίρια στο μεσογειακό κλίμα της Κέρκυρας, η εξοικονόμηση μπορεί να είναι ουσιαστική.",
    },
    {
      q: isEnglish
        ? "Can thermoprosopsi be combined with aesthetic facade upgrade?"
        : "Συνδυάζεται με αισθητική αναβάθμιση της όψης;",
      a: isEnglish
        ? "Yes, and this is one of its great advantages. The thermoprosopsi system concludes with decorative render and coating layers, offering a completely renewed facade appearance. Color, texture, and finish are selected in collaboration with the client, so the insulation upgrade and aesthetic renewal are achieved simultaneously in a single coordinated project."
        : "Ναι, και αυτό είναι ένα από τα μεγάλα πλεονεκτήματά της. Το σύστημα θερμοπρόσοψης ολοκληρώνεται με διακοσμητικούς σοβάδες και στρώσεις επικάλυψης, προσφέροντας πλήρως ανανεωμένη εμφάνιση όψης. Το χρώμα, η υφή και το φινίρισμα επιλέγονται σε συνεργασία με τον πελάτη, ώστε η ενεργειακή αναβάθμιση και η αισθητική ανανέωση να επιτυγχάνονται ταυτόχρονα.",
    },
    {
      q: isEnglish
        ? "Do you undertake thermoprosopsi for tourist or commercial properties?"
        : "Αναλαμβάνετε και τουριστικά ή επαγγελματικά ακίνητα;",
      a: isEnglish
        ? "Yes. We have experience with thermoprosopsi projects across a wide range of property types in Corfu, including holiday villas, tourist accommodation complexes, boutique hotels, and commercial buildings. We adapt our approach to the operational requirements of each property, including scheduling works outside peak season where required."
        : "Ναι. Έχουμε εμπειρία σε έργα θερμοπρόσοψης σε ευρύ φάσμα τύπων ακινήτων στην Κέρκυρα, συμπεριλαμβανομένων εξοχικών βιλών, συγκροτημάτων τουριστικής διαμονής, boutique ξενοδοχείων και εμπορικών κτιρίων. Προσαρμόζουμε την προσέγγισή μας στις λειτουργικές απαιτήσεις κάθε ακινήτου, συμπεριλαμβανομένου του προγραμματισμού εργασιών εκτός υψηλής σεζόν όπου απαιτείται.",
    },
  ]

  const idealClients = [
    {
      type: isEnglish ? "Homeowners" : "Ιδιοκτήτες Κατοικιών",
      description: isEnglish
        ? "Seeking reduced energy bills, improved comfort, and a renewed exterior for their primary or secondary residence."
        : "Αναζητούν μειωμένους λογαριασμούς ενέργειας, βελτιωμένη άνεση και ανανεωμένη εξωτερική εμφάνιση για την κύρια ή δευτερεύουσα κατοικία τους.",
    },
    {
      type: isEnglish ? "Villa & Holiday Property Owners" : "Ιδιοκτήτες Βιλών & Εξοχικών",
      description: isEnglish
        ? "Looking to enhance the value, energy efficiency, and aesthetic appeal of their investment property in Corfu."
        : "Επιδιώκουν να ενισχύσουν την αξία, την ενεργειακή απόδοση και την αισθητική ελκυστικότητα της επενδυτικής τους ιδιοκτησίας στην Κέρκυρα.",
    },
    {
      type: isEnglish ? "Tourist Accommodation Owners" : "Ιδιοκτήτες Τουριστικών Καταλυμάτων",
      description: isEnglish
        ? "Operators of hotels, B&Bs, or villa complexes seeking energy savings, improved guest comfort, and a better property image."
        : "Ιδιοκτήτες ξενοδοχείων, B&B ή συγκροτημάτων βιλών που αναζητούν εξοικονόμηση ενέργειας, βελτιωμένη άνεση επισκεπτών και καλύτερη εικόνα ακινήτου.",
    },
    {
      type: isEnglish ? "Commercial Property Owners" : "Ιδιοκτήτες Επαγγελματικών Χώρων",
      description: isEnglish
        ? "Businesses seeking to reduce operational energy costs and improve the professional appearance of their premises."
        : "Επιχειρήσεις που επιδιώκουν μείωση λειτουργικού κόστους ενέργειας και βελτίωση της επαγγελματικής εμφάνισης των εγκαταστάσεών τους.",
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
              {isEnglish ? "Thermoprosopsi" : "Θερμοπρόσοψη"}
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
              {isEnglish ? "Thermoprosopsi" : "Θερμοπρόσοψη"}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
              {isEnglish
                ? "Complete external thermal insulation and energy upgrade solutions for residences, villas, commercial spaces, and tourist properties in Corfu."
                : "Ολοκληρωμένες λύσεις εξωτερικής θερμομόνωσης και ενεργειακής αναβάθμισης για κατοικίες, βίλες, επαγγελματικούς χώρους και τουριστικά ακίνητα στην Κέρκυρα."}
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

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimatedSection className="space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {isEnglish ? "Energy Upgrade & Facade Protection" : "Ενεργειακή Αναβάθμιση & Προστασία Κελύφους"}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "Thermoprosopsi is one of the most effective interventions for the energy and aesthetic upgrade of a building. By applying a certified external thermal insulation system to the building shell, we significantly reduce heat losses in winter and heat gain in summer, protecting the structure from moisture, weathering, and long-term deterioration. The result is a more comfortable interior environment, lower energy bills, and a completely renewed exterior appearance — all achieved in a single, well-organized project."
                : "Η θερμοπρόσοψη αποτελεί μία από τις πιο αποτελεσματικές παρεμβάσεις για την ενεργειακή και αισθητική αναβάθμιση ενός κτιρίου. Με την εφαρμογή πιστοποιημένου συστήματος εξωτερικής θερμομόνωσης στο κτιριακό κέλυφος, μειώνουμε σημαντικά τις θερμικές απώλειες το χειμώνα και τα θερμικά κέρδη το καλοκαίρι, προστατεύοντας τη δομή από υγρασία, καιρικές φθορές και μακροχρόνια αλλοίωση. Το αποτέλεσμα είναι ένα πιο άνετο εσωτερικό περιβάλλον, χαμηλότεροι λογαριασμοί ενέργειας και μια εντελώς ανανεωμένη εξωτερική εμφάνιση — όλα επιτυγχάνονται σε ένα μόνο, καλά οργανωμένο έργο."}
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
                ? "End-to-end thermoprosopsi services with certified materials and expert execution"
                : "Ολοκληρωμένες υπηρεσίες θερμοπρόσοψης με πιστοποιημένα υλικά και έμπειρη εκτέλεση"}
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
                ? "Why thermoprosopsi is one of the most valuable building investments"
                : "Γιατί η θερμοπρόσοψη είναι μια από τις πιο αξιόλογες κτιριακές επενδύσεις"}
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
                ? "Reliability, quality, and precision on every thermoprosopsi project"
                : "Αξιοπιστία, ποιότητα και ακρίβεια σε κάθε έργο θερμοπρόσοψης"}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isEnglish ? "Certified Systems & Materials" : "Πιστοποιημένα Συστήματα & Υλικά",
                desc: isEnglish
                  ? "We exclusively use certified ETICS systems that comply with European standards, ensuring durability, performance, and safety."
                  : "Χρησιμοποιούμε αποκλειστικά πιστοποιημένα συστήματα ETICS που συμμορφώνονται με τα ευρωπαϊκά πρότυπα, διασφαλίζοντας ανθεκτικότητα, απόδοση και ασφάλεια.",
              },
              {
                title: isEnglish ? "Specialized Execution Teams" : "Εξειδικευμένα Συνεργεία Εκτέλεσης",
                desc: isEnglish
                  ? "Our teams have dedicated experience in thermoprosopsi application, ensuring precise workmanship at every layer of the system."
                  : "Τα συνεργεία μας διαθέτουν εξειδικευμένη εμπειρία στην εφαρμογή θερμοπρόσοψης, διασφαλίζοντας ακριβή τεχνική σε κάθε στρώση του συστήματος.",
              },
              {
                title: isEnglish ? "Attention to Detail" : "Προσοχή στη Λεπτομέρεια",
                desc: isEnglish
                  ? "From substrate preparation to the final finishing coat, every step is executed with care to achieve a flawless, lasting result."
                  : "Από την προετοιμασία υποστρώματος έως την τελευταία επιστρώση, κάθε βήμα εκτελείται με προσοχή για άψογο, διαρκές αποτέλεσμα.",
              },
              {
                title: isEnglish ? "Organised Project Management" : "Οργανωμένη Διαχείριση Έργου",
                desc: isEnglish
                  ? "Clear timeline, transparent communication, and disciplined on-site management ensure your project is delivered on schedule and within budget."
                  : "Σαφές χρονοδιάγραμμα, διαφανής επικοινωνία και πειθαρχημένη διαχείριση εργοταξίου διασφαλίζουν παράδοση εντός χρονοδιαγράμματος και προϋπολογισμού.",
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
                ? "A transparent, step-by-step approach from first contact to handover"
                : "Μια διαφανής, βηματική προσέγγιση από την πρώτη επαφή έως την παράδοση"}
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
              {isEnglish ? "Ready to Upgrade Your Property?" : "Έτοιμοι να Αναβαθμίσετε το Ακίνητό σας;"}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isEnglish
                ? "Contact us to discuss your property and receive a detailed thermoprosopsi proposal tailored to your needs."
                : "Επικοινωνήστε μαζί μας για να συζητήσουμε το ακίνητό σας και να λάβετε αναλυτική πρόταση θερμοπρόσοψης προσαρμοσμένη στις ανάγκες σας."}
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
