"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, PenToolIcon as Tool, Ruler } from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { useLanguage } from "../contexts/language-context"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"

// Δεδομένα για τα panels
const panelCategories = [
  {
    id: "pvc-marble",
    nameEl: "PVC Panels Μαρμάρου",
    nameEn: "PVC Marble Wall Panels",
    descriptionEl:
      "Καινοτόμα και οικονομική λύση για εσωτερική διακόσμηση, συνδυάζοντας την πολυτελή εμφάνιση του φυσικού μαρμάρου με την ανθεκτικότητα του PVC",
    descriptionEn:
      "An innovative and cost-effective solution for interior decoration, combining the luxurious appearance of natural marble with the durability and versatility of PVC",
    products: [
      {
        id: "gilding-design",
        nameEl: "Σχέδιο Επιχρύσωσης",
        nameEn: "Gilding Design",
        descriptionEl: "Panels PVC με επίχρυση σχεδίαση για πολυτελή εμφάνιση",
        descriptionEn: "PVC panels with gilding design for a luxurious appearance",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 45€/τ.μ.",
        priceEn: "from €45/sq.m.",
        features: [
          { el: "Πολυτελής εμφάνιση", en: "Luxurious appearance" },
          { el: "Ανθεκτικό υλικό", en: "Durable material" },
          { el: "Εύκολη εγκατάσταση", en: "Easy installation" },
          { el: "Χαμηλό κόστος συντήρησης", en: "Low maintenance cost" },
        ],
      },
      {
        id: "marble-design",
        nameEl: "Σχέδιο Μαρμάρου",
        nameEn: "Marble Design",
        descriptionEl: "Panels που μιμούνται την κομψή φλέβωση και υφή του πραγματικού μαρμάρου",
        descriptionEn: "Panels that mimic the elegant veining and texture of real marble",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 50€/τ.μ.",
        priceEn: "from €50/sq.m.",
        features: [
          { el: "Ρεαλιστική εμφάνιση μαρμάρου", en: "Realistic marble appearance" },
          { el: "Αδιάβροχο υλικό", en: "Waterproof material" },
          { el: "Ανθεκτικό στις γρατζουνιές", en: "Scratch resistant" },
          { el: "Ποικιλία σχεδίων", en: "Variety of designs" },
        ],
      },
      {
        id: "modern-design",
        nameEl: "Μοντέρνο Σχέδιο",
        nameEn: "Modern Design",
        descriptionEl: "Σύγχρονα σχέδια για μοντέρνους χώρους με μινιμαλιστική αισθητική",
        descriptionEn: "Contemporary designs for modern spaces with minimalist aesthetics",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 55€/τ.μ.",
        priceEn: "from €55/sq.m.",
        features: [
          { el: "Μοντέρνα αισθητική", en: "Modern aesthetics" },
          { el: "Καθαρές γραμμές", en: "Clean lines" },
          { el: "Ματ ή γυαλιστερό φινίρισμα", en: "Matte or glossy finish" },
          { el: "Ιδανικό για σύγχρονους χώρους", en: "Ideal for contemporary spaces" },
        ],
      },
    ],
  },
  {
    id: "wood-3d",
    nameEl: "Ξύλινα & 3D Panels",
    nameEn: "Wood Slat & 3D PVC Panels",
    descriptionEl:
      "Ακουστικά 3D ξύλινα panels τοίχου όπου ο εκλεπτυσμένος σχεδιασμός συναντά την ανώτερη ηχοαπορρόφηση",
    descriptionEn: "Acoustic 3D Wood Wall Panels where sophisticated design meets superior sound absorption",
    products: [
      {
        id: "wood-slat",
        nameEl: "Ξύλινα Panels με Γρίλιες",
        nameEn: "Wood Slat Panels",
        descriptionEl:
          "Κατασκευασμένα από ξύλο βιώσιμης προέλευσης, αυτά τα panels είναι μια απόδειξη τόσο της περιβαλλοντικής ευθύνης όσο και της καλλιτεχνικής ευρηματικότητας",
        descriptionEn:
          "Crafted from sustainably-sourced wood, these panels are a testament to both environmental responsibility and artistic ingenuity",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 75€/τ.μ.",
        priceEn: "from €75/sq.m.",
        features: [
          { el: "Βιώσιμη προέλευση ξύλου", en: "Sustainably-sourced wood" },
          { el: "Βελτίωση ακουστικής", en: "Acoustic improvement" },
          { el: "Φυσική αίσθηση ζεστασιάς", en: "Natural warm feeling" },
          { el: "Μοναδικά σχέδια", en: "Unique designs" },
        ],
      },
      {
        id: "3d-pvc",
        nameEl: "3D Panels PVC",
        nameEn: "3D PVC Panels",
        descriptionEl:
          "Κάθε panel είναι σχολαστικά σχεδιασμένο με τρισδιάστατο μοτίβο, προσθέτοντας βάθος χαρακτήρα σε οποιονδήποτε χώρο",
        descriptionEn:
          "Each panel is meticulously designed with a three-dimensional pattern, adding a depth of character to any space",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 65€/τ.μ.",
        priceEn: "from €65/sq.m.",
        features: [
          { el: "Τρισδιάστατα μοτίβα", en: "Three-dimensional patterns" },
          { el: "Βελτίωση διάχυσης ήχου", en: "Enhanced sound diffusion" },
          { el: "Μείωση ανεπιθύμητης ηχούς", en: "Reduction of unwanted echoes" },
          { el: "Ιδανικό για home theater", en: "Ideal for home theaters" },
        ],
      },
      {
        id: "acoustic-panel",
        nameEl: "Ακουστικά Panels",
        nameEn: "Acoustic Panels",
        descriptionEl:
          "Πέρα από την εντυπωσιακή τους εμφάνιση, λειτουργούν ως ισχυρό ακουστικό εργαλείο. Τα τρισδιάστατα περιγράμματα ενισχύουν τη διάχυση του ήχου",
        descriptionEn:
          "Beyond their captivating appearance, they function as a powerful acoustic tool. The 3D contours enhance sound diffusion",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 85€/τ.μ.",
        priceEn: "from €85/sq.m.",
        features: [
          { el: "Κορυφαία ηχοαπορρόφηση", en: "Superior sound absorption" },
          { el: "Μείωση αντήχησης", en: "Reduction of reverberations" },
          { el: "Συμπληρώνει διάφορα στυλ διακόσμησης", en: "Complements various interior styles" },
          { el: "Οργανική αίσθηση", en: "Organic touch" },
        ],
      },
    ],
  },
  {
    id: "soft-stone",
    nameEl: "Εύκαμπτα Panels Πέτρας",
    nameEn: "Soft Flexible Stone Panels",
    descriptionEl:
      "Τα MCM soft bricks/Soft wall stone είναι ένα νέο υλικό διακόσμησης τοίχου, που χρησιμοποιείται για να αντικαταστήσει τα παραδοσιακά κεραμικά πλακάκια, φυσική πέτρα, κλπ",
    descriptionEn:
      "MCM soft bricks/Soft wall stone is a kind of new wall decoration material, used to substitute traditional Ceramic Tile, Natural Stone, Paintings, etc",
    products: [
      {
        id: "travertine",
        nameEl: "Τραβερτίνη",
        nameEn: "Travertine",
        descriptionEl: "Panels που αναπαράγουν τα μοναδικά χαρακτηριστικά του φυσικού τραβερτίνη",
        descriptionEn: "Panels that recreate the unique features of natural travertine",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 70€/τ.μ.",
        priceEn: "from €70/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*1200mm", en: "Size: 600*1200mm" },
          { el: "Πάχος: 2.5-3.5mm", en: "Thickness: 2.5-3.5mm" },
          { el: "Ελαφρύ και εύκαμπτο", en: "Light and flexible" },
          { el: "Αδιάβροχο", en: "Waterproof" },
        ],
      },
      {
        id: "rough-granite",
        nameEl: "Τραχύ Γρανίτη",
        nameEn: "Rough Granite",
        descriptionEl: "Panels με την εμφάνιση και υφή τραχιού γρανίτη",
        descriptionEn: "Panels with the appearance and texture of rough granite",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 75€/τ.μ.",
        priceEn: "from €75/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*1200mm", en: "Size: 600*1200mm" },
          { el: "Πάχος: 3-5mm", en: "Thickness: 3-5mm" },
          { el: "Ανθεκτικό στη φωτιά", en: "Fire resistant" },
          { el: "Διάρκεια ζωής >10 χρόνια", en: "Service life >10 years" },
        ],
      },
      {
        id: "rockcut-stone",
        nameEl: "Πέτρα Λατομείου",
        nameEn: "Rockcut Stone",
        descriptionEl: "Panels που μιμούνται την εμφάνιση πέτρας κομμένης από λατομείο",
        descriptionEn: "Panels that mimic the appearance of stone cut from a quarry",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 80€/τ.μ.",
        priceEn: "from €80/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*900mm", en: "Size: 600*900mm" },
          { el: "Πάχος: 3-5mm", en: "Thickness: 3-5mm" },
          { el: "Αναπνέον υλικό", en: "Breathable material" },
          { el: "Ασφαλές & υγιεινό", en: "Safe & healthy" },
        ],
      },
      {
        id: "starmoon-stone",
        nameEl: "Πέτρα Starmoon",
        nameEn: "Starmoon Stone",
        descriptionEl: "Εντυπωσιακά panels με μοναδικό σχέδιο που θυμίζει έναστρο ουρανό",
        descriptionEn: "Impressive panels with a unique design reminiscent of a starry sky",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 85€/τ.μ.",
        priceEn: "from €85/sq.m.",
        features: [
          { el: "Διαστάσεις: 300*600mm, 600*1200mm, 1200*2400mm", en: "Size: 300*600mm, 600*1200mm, 1200*2400mm" },
          { el: "Πάχος: 3-10mm", en: "Thickness: 3-10mm" },
          { el: "Μοναδικό σχέδιο", en: "Unique design" },
          { el: "Χαμηλό κόστος μεταφοράς", en: "Low freight cost" },
        ],
      },
    ],
  },
  {
    id: "specialty",
    nameEl: "Ειδικά Panels",
    nameEn: "Specialty Panels",
    descriptionEl: "Εξειδικευμένα panels για ιδιαίτερες εφαρμογές και αισθητικές απαιτήσεις",
    descriptionEn: "Specialized panels for particular applications and aesthetic requirements",
    products: [
      {
        id: "rammed-earth",
        nameEl: "Συμπιεσμένο Χώμα",
        nameEn: "Rammed Earth Board",
        descriptionEl: "Panels που μιμούνται την εμφάνιση συμπιεσμένου χώματος για φυσική αισθητική",
        descriptionEn: "Panels that mimic the appearance of rammed earth for a natural aesthetic",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 90€/τ.μ.",
        priceEn: "from €90/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*1200mm, 600*2400mm, 1200*2400mm", en: "Size: 600*1200mm, 600*2400mm, 1200*2400mm" },
          { el: "Πάχος: 3-4mm", en: "Thickness: 3-4mm" },
          { el: "Φυσική εμφάνιση", en: "Natural appearance" },
          { el: "Οικολογικό υλικό", en: "Eco-friendly material" },
        ],
      },
      {
        id: "facing-brick",
        nameEl: "Διακοσμητικό Τούβλο",
        nameEn: "Facing Brick",
        descriptionEl: "Panels που μιμούνται την εμφάνιση διακοσμητικών τούβλων για βιομηχανική αισθητική",
        descriptionEn: "Panels that mimic the appearance of facing bricks for an industrial aesthetic",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 65€/τ.μ.",
        priceEn: "from €65/sq.m.",
        features: [
          { el: "Διαστάσεις: 240*60mm", en: "Size: 240*60mm" },
          { el: "Πάχος: 2.5-3.5mm", en: "Thickness: 2.5-3.5mm" },
          { el: "Ρεαλιστική εμφάνιση τούβλου", en: "Realistic brick appearance" },
          { el: "Εύκολη εγκατάσταση", en: "Easy installation" },
        ],
      },
      {
        id: "fine-line-stone",
        nameEl: "Λεπτή Γραμμή Πέτρας",
        nameEn: "Fine Line Stone Board",
        descriptionEl: "Panels με λεπτές γραμμές που μιμούνται την εμφάνιση κομψής πέτρας",
        descriptionEn: "Panels with fine lines that mimic the appearance of elegant stone",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 70€/τ.μ.",
        priceEn: "from €70/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*1200mm", en: "Size: 600*1200mm" },
          { el: "Πάχος: 3mm", en: "Thickness: 3mm" },
          { el: "Κομψή εμφάνιση", en: "Elegant appearance" },
          { el: "Ιδανικό για μοντέρνους χώρους", en: "Ideal for modern spaces" },
        ],
      },
      {
        id: "oman-linear",
        nameEl: "Γραμμική Πέτρα Ομάν",
        nameEn: "Oman Linear Stone",
        descriptionEl: "Panels εμπνευσμένα από τη γραμμική πέτρα του Ομάν για εξωτική αισθητική",
        descriptionEn: "Panels inspired by Oman linear stone for an exotic aesthetic",
        image: "/placeholder.svg?height=400&width=600",
        priceEl: "από 85€/τ.μ.",
        priceEn: "from €85/sq.m.",
        features: [
          { el: "Διαστάσεις: 600*1200mm, 1200*2400mm", en: "Size: 600*1200mm, 1200*2400mm" },
          { el: "Πάχος: 4-10mm", en: "Thickness: 4-10mm" },
          { el: "Εξωτική εμφάνιση", en: "Exotic appearance" },
          { el: "Ανθεκτικό υλικό", en: "Durable material" },
        ],
      },
    ],
  },
]

// Δεδομένα για τον συγκριτικό πίνακα
const comparisonData = [
  {
    featureEl: "Αντοχή στην υγρασία",
    featureEn: "Moisture Resistance",
    pvcMarble: { el: "Εξαιρετική", en: "Excellent" },
    wood3d: { el: "Καλή", en: "Good" },
    softStone: { el: "Εξαιρετική", en: "Excellent" },
    specialty: { el: "Καλή έως Εξαιρετική", en: "Good to Excellent" },
  },
  {
    featureEl: "Αντοχή στη φωτιά",
    featureEn: "Fire Resistance",
    pvcMarble: { el: "Μέτρια", en: "Moderate" },
    wood3d: { el: "Καλή", en: "Good" },
    softStone: { el: "Εξαιρετική", en: "Excellent" },
    specialty: { el: "Καλή έως Εξαιρετική", en: "Good to Excellent" },
  },
  {
    featureEl: "Ευκολία εγκατάστασης",
    featureEn: "Ease of Installation",
    pvcMarble: { el: "Πολύ εύκολη", en: "Very Easy" },
    wood3d: { el: "Μέτρια", en: "Moderate" },
    softStone: { el: "Εύκολη", en: "Easy" },
    specialty: { el: "Μέτρια έως Εύκολη", en: "Moderate to Easy" },
  },
  {
    featureEl: "Κόστος",
    featureEn: "Cost",
    pvcMarble: { el: "Οικονομικό", en: "Economical" },
    wood3d: { el: "Μέτριο έως Υψηλό", en: "Moderate to High" },
    softStone: { el: "Μέτριο", en: "Moderate" },
    specialty: { el: "Μέτριο έως Υψηλό", en: "Moderate to High" },
  },
  {
    featureEl: "Διάρκεια ζωής",
    featureEn: "Lifespan",
    pvcMarble: { el: "10+ χρόνια", en: "10+ years" },
    wood3d: { el: "15+ χρόνια", en: "15+ years" },
    softStone: { el: "20+ χρόνια", en: "20+ years" },
    specialty: { el: "15+ χρόνια", en: "15+ years" },
  },
  {
    featureEl: "Ηχομόνωση",
    featureEn: "Sound Insulation",
    pvcMarble: { el: "Χαμηλή", en: "Low" },
    wood3d: { el: "Εξαιρετική", en: "Excellent" },
    softStone: { el: "Μέτρια", en: "Moderate" },
    specialty: { el: "Μέτρια έως Υψηλή", en: "Moderate to High" },
  },
]

// Δεδομένα για τις οδηγίες εγκατάστασης
const installationSteps = [
  {
    titleEl: "Προετοιμασία επιφάνειας",
    titleEn: "Surface Preparation",
    descriptionEl:
      "Βεβαιωθείτε ότι η επιφάνεια είναι καθαρή, στεγνή και επίπεδη. Αφαιρέστε τυχόν ανωμαλίες, σκόνη ή λάδια. Για καλύτερα αποτελέσματα, συνιστάστάται η επιφάνεια να είναι λεία και σταθερή.",
    descriptionEn:
      "Ensure the surface is clean, dry, and level. Remove any irregularities, dust, or oils. For best results, it is recommended that the surface be smooth and stable.",
    icon: "Tool",
  },
  {
    titleEl: "Μέτρηση και κοπή",
    titleEn: "Measuring and Cutting",
    descriptionEl:
      "Μετρήστε προσεκτικά την περιοχή και σημειώστε τις διαστάσεις στα panels. Χρησιμοποιήστε ένα αιχμηρό μαχαίρι ή ψαλίδι για τα PVC panels, και ένα πριόνι για τα ξύλινα panels. Για τα panels πέτρας, μπορεί να χρειαστείτε ειδικά εργαλεία.",
    descriptionEn:
      "Carefully measure the area and mark the dimensions on the panels. Use a sharp knife or scissors for PVC panels, and a saw for wooden panels. For stone panels, you may need special tools.",
    icon: "Ruler",
  },
  {
    titleEl: "Εφαρμογή κόλλας",
    titleEn: "Adhesive Application",
    descriptionEl:
      "Εφαρμόστε την κατάλληλη κόλλα στην πίσω πλευρά του panel ή απευθείας στην επιφάνεια του τοίχου, ακολουθώντας τις οδηγίες του κατασκευαστή. Βεβαιωθείτε ότι η κόλλα είναι κατάλληλη για τον τύπο του panel και την επιφάνεια εφαρμογής.",
    descriptionEn:
      "Apply the appropriate adhesive to the back of the panel or directly to the wall surface, following the manufacturer's instructions. Make sure the adhesive is suitable for the type of panel and application surface.",
    icon: "Tool",
  },
  {
    titleEl: "Τοποθέτηση panels",
    titleEn: "Panel Placement",
    descriptionEl:
      "Τοποθετήστε προσεκτικά το panel στη θέση του, πιέζοντας σταθερά για να εξασφαλίσετε καλή πρόσφυση. Χρησιμοποιήστε ένα ρολό ή μια σπάτουλα για να απομακρύνετε τυχόν φυσαλίδες αέρα και να εξασφαλίσετε ομοιόμορφη επαφή.",
    descriptionEn:
      "Carefully place the panel in position, pressing firmly to ensure good adhesion. Use a roller or spatula to remove any air bubbles and ensure uniform contact.",
    icon: "Tool",
  },
  {
    titleEl: "Φινίρισμα και καθαρισμός",
    titleEn: "Finishing and Cleaning",
    descriptionEl:
      "Αφού τοποθετήσετε όλα τα panels, αφαιρέστε τυχόν περίσσεια κόλλας και καθαρίστε την επιφάνεια με ένα υγρό πανί. Αφήστε την κόλλα να στεγνώσει πλήρως σύμφωνα με τις οδηγίες του κατασκευαστή πριν χρησιμοποιήσετε ή διακοσμήσετε περαιτέρω την περιοχή.",
    descriptionEn:
      "After placing all panels, remove any excess adhesive and clean the surface with a damp cloth. Allow the adhesive to dry completely according to the manufacturer's instructions before using or further decorating the area.",
    icon: "Tool",
  },
]

export default function PanelsPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("pvc-marble")

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">ΦαιάCon Panels</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "High-Quality Materials for Construction and Renovation"
                : "Υλικά Υψηλής Ποιότητας για Κατασκευή και Ανακαίνιση"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="space-y-8">
              <div className="text-lg">
                <p className="leading-relaxed text-justify-content">
                  {isEnglish
                    ? "At ΦαιάCon, we offer a wide range of high-quality decorative panels for various construction and renovation applications. While our panels are not insulation materials, they are perfect for aesthetic purposes, offering advantages that surpass traditional paint: they don't stain, have superior durability, and significantly upgrade your home's quality. Our panels provide a 3D stone or marble appearance without the difficulty of installing real materials, with waterproof and UV-resistant properties ideal for wet environments or exterior walls."
                    : "Στη ΦαιάCon, προσφέρουμε μια ευρεία γκάμα διακοσμητικών panels υψηλής ποιότητας για διάφορες εφαρμογές κατασκευής και ανακαίνισης. Αν και τα panels μας δεν είναι μονωτικά υλικά, είναι τέλεια για αισθητικούς λόγους, προσφέροντας πλεονεκτήματα που ξεπερνούν την παραδοσιακή μπογιά: δεν λερώνουν, έχουν εξαιρετική ανθεκτικότητα και αναβαθμίζουν σημαντικά την ποιότητα του σπιτιού σας. Τα panels μας προσφέρουν 3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης."}
                </p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose FaiáCon Decorative Panels?"
                    : "Γιατί να Επιλέξετε τα Διακοσμητικά Panels FaiáCon;"}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "3D stone or marble appearance without the difficulty of installing real materials"
                        : "3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης πραγματικών υλικών"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "Durability over time, no painting, no peeling"
                        : "Ανθεκτικότητα στον χρόνο, χωρίς βάψιμο, χωρίς ξεφλούδισμα"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "Waterproof & UV-resistant, ideal for wet environments or exterior walls"
                        : "Αδιάβροχα & UV-resistant, ιδανικά για υγρά περιβάλλοντα ή εξωτερικούς τοίχους"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "Installation in just 1 day with minimal disruption"
                        : "Εγκατάσταση σε μόλις 1 ημέρα με ελάχιστη φασαρία"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "Easy to clean, ideal for high-traffic areas or rental properties"
                        : "Καθαρίζονται εύκολα, ιδανικά για πολυσύχναστους χώρους ή ενοικιαζόμενα"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish
                        ? "Hide imperfections, can be installed directly on existing walls"
                        : "Κρύβουν ατέλειες, τοποθετούνται απευθείας πάνω σε υπάρχοντες τοίχους"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{isEnglish ? "Add value to any property" : "Προσθέτουν αξία σε κάθε ακίνητο"}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose Panels Instead of Simple Painting?"
                    : "Γιατί να Επιλέξω Panels Αντί για Απλό Βάψιμο;"}
                </h3>
                <p className="mb-4">
                  {isEnglish
                    ? "Simple paint wears out quickly, gets dirty, and constantly needs renewal. FaiáCon Panels not only protect but also upgrade the aesthetics of your space, giving a premium result with minimal maintenance."
                    : "Η απλή βαφή φθείρεται γρήγορα, λερώνει, και χρειάζεται συνεχώς ανανέωση. Τα FaiáCon Panels όχι μόνο προστατεύουν αλλά και αναβαθμίζουν την αισθητική του χώρου, δίνοντας premium αποτέλεσμα με ελάχιστη συντήρηση."}
                </p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish ? "Ideal Applications" : "Ιδανικές Εφαρμογές"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{isEnglish ? "Residences" : "Κατοικίες"}</h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "For easy, clean renovation without construction work"
                          : "Για εύκολη, καθαρή ανακαίνιση χωρίς έργα"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🏨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {isEnglish ? "Airbnb & Hotels" : "Airbnb & Ξενοδοχεία"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "Impressive appearance that increases rental value by up to +15%"
                          : "Εντυπωσιακή εμφάνιση που αυξάνει την αξία ενοικίασης έως και +15%"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🏢</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {isEnglish ? "Commercial Spaces" : "Επαγγελματικοί Χώροι"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "Give your customers a reason to remember your office or store"
                          : "Δώστε στους πελάτες σας λόγο να θυμούνται το γραφείο ή το κατάστημά σας"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🛁</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {isEnglish ? "Bathrooms & Kitchens" : "Μπάνια & Κουζίνες"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "Durability and protection in areas with humidity"
                          : "Ανθεκτικότητα και προστασία σε χώρους με υγρασία"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {isEnglish ? "Quality Certifications" : "Πιστοποιήσεις Ποιότητας"}
                </h3>
                <p className="text-lg leading-relaxed text-justify-content mb-6">
                  {isEnglish
                    ? "All our panels meet the highest quality standards and have successfully passed rigorous testing and certification processes. Our products are certified according to international standards, ensuring safety, durability, and environmental friendliness."
                    : "Όλα τα panels μας πληρούν τα υψηλότερα πρότυπα ποιότητας και έχουν περάσει με επιτυχία αυστηρές διαδικασίες δοκιμών και πιστοποίησης. Τα προϊόντα μας είναι πιστοποιημένα σύμφωνα με διεθνή πρότυπα, εξασφαλίζοντας ασφάλεια, ανθεκτικότητα και φιλικότητα προς το περιβάλλον."}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary text-center">ISO 9001</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {isEnglish ? "Quality Management" : "Διαχείριση Ποιότητας"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary text-center">CE</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {isEnglish ? "European Conformity" : "Ευρωπαϊκή Συμμόρφωση"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary text-center">SGS</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {isEnglish ? "Testing & Verification" : "Δοκιμές & Επαλήθευση"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {isEnglish ? "Panel Comparison" : "Σύγκριση Panels"}
            </h2>
            <p className="text-xl text-gray-600 text-justify-content">
              {isEnglish
                ? "Compare the features of our different panel categories to find the perfect match for your needs"
                : "Συγκρίνετε τα χαρακτηριστικά των διαφορετικών κατηγοριών panels μας για να βρείτε το τέλειο ταίριασμα για τις ανάγκες σας"}
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">{isEnglish ? "Feature" : "Χαρακτηριστικό"}</th>
                    <th className="px-6 py-4 text-center">{isEnglish ? "PVC Marble Panels" : "PVC Panels Μαρμάρου"}</th>
                    <th className="px-6 py-4 text-center">{isEnglish ? "Wood & 3D Panels" : "Ξύλινα & 3D Panels"}</th>
                    <th className="px-6 py-4 text-center">
                      {isEnglish ? "Soft Stone Panels" : "Εύκαμπτα Panels Πέτρας"}
                    </th>
                    <th className="px-6 py-4 text-center">{isEnglish ? "Specialty Panels" : "Ειδικά Panels"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium">{isEnglish ? row.featureEn : row.featureEl}</td>
                      <td className="px-6 py-4 text-center">{isEnglish ? row.pvcMarble.en : row.pvcMarble.el}</td>
                      <td className="px-6 py-4 text-center">{isEnglish ? row.wood3d.en : row.wood3d.el}</td>
                      <td className="px-6 py-4 text-center">{isEnglish ? row.softStone.en : row.softStone.el}</td>
                      <td className="px-6 py-4 text-center">{isEnglish ? row.specialty.en : row.specialty.el}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide Section */}
      <section className="relative py-24 md:py-32 bg-gray-50">
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {isEnglish ? "Installation Guide" : "Οδηγός Εγκατάστασης"}
            </h2>
            <p className="text-xl text-gray-600 text-justify-content">
              {isEnglish
                ? "Follow these steps for a successful panel installation"
                : "Ακολουθήστε αυτά τα βήματα για μια επιτυχημένη εγκατάσταση panels"}
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {step.icon === "Tool" && <Tool className="w-6 h-6 text-primary" />}
                      {step.icon === "Ruler" && <Ruler className="w-6 h-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{isEnglish ? step.titleEn : step.titleEl}</h3>
                      <p className="text-gray-600 text-justify-content">
                        {isEnglish ? step.descriptionEn : step.descriptionEl}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href={`/${lang}/appointment`}>
                  {isEnglish
                    ? "Need Professional Installation? Contact Us"
                    : "Χρειάζεστε Επαγγελματική Εγκατάσταση; Επικοινωνήστε Μαζί μας"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Custom Solutions for Your Specific Needs"
                    : "Προσαρμοσμένες Λύσεις για τις Συγκεκριμένες Ανάγκες σας"}
                </h3>
                <p className="text-lg text-justify-content">
                  {isEnglish
                    ? "Can't find exactly what you're looking for? We offer custom panel solutions tailored to your specific requirements. Contact us to discuss your project, and our experts will recommend the perfect materials for your needs."
                    : "Δεν βρίσκετε ακριβώς αυτό που αναζητάτε; Προσφέρουμε προσαρμοσμένες λύσεις panels ειδικά για τις απαιτήσεις σας. Επικοινωνήστε μαζί μας για να συζητήσουμε το έργο σας, και οι ειδικοί μας θα σας προτείνουν τα τέλεια υλικά για τις ανάγκες σας."}
                </p>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish ? "Request a Consultation" : "Ζητήστε μια Συμβουλευτική"}
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isEnglish ? "Ready to Transform Your Space?" : "Έτοιμοι να Μεταμορφώσετε το Χώρο σας;"}
              </h2>
              <p className="text-lg text-white/80 mb-8 text-justify-content">
                {isEnglish
                  ? "Contact us today to discuss your project and discover the perfect panel solutions for your needs."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να ανακαλύψετε τις τέλειες λύσεις panels για τις ανάγκες σας."}
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book a Free Consultation" : "Κλείστε Δωρεάν Συμβουλευτική"}
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
