"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Paintbrush,
  Hammer,
  RouteIcon as Road,
  Sprout,
  Thermometer,
  HardHat,
  Scissors,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"
import { RenovationCostCalculator } from "./renovation-cost-calculator"

const renovationServices = [
  { icon: HardHat, label: "Επισκευή Στέγης", labelEn: "Roof Repair", href: "/house-renovation/roof-repair" },
  { icon: Thermometer, label: "Θερμοπρόσοψη", labelEn: "Thermal Insulation", href: "/house-renovation/thermoprosopsi" },
  { icon: Hammer, label: "Χτίσιμο πέτρας", labelEn: "Stone Building", href: "/house-renovation/stone-building" },
  { icon: Road, label: "Κατασκευή δρόμων", labelEn: "Road Construction", href: "/house-renovation/road-construction" },
  { icon: Sprout, label: "Κήποι", labelEn: "Gardens", href: "/house-renovation/gardens" },
  { icon: Paintbrush, label: "Βαψίματα", labelEn: "Painting", href: "/house-renovation/painting" },
]

export default function HouseRenovationPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Comprehensive Construction & Renovation Services - Guaranteed Quality & Durability"
                : "Ολοκληρωμένες Κατασκευαστικές & Ανακαινιστικές Υπηρεσίες – Εγγυημένη Ποιότητα & Αντοχή"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="space-y-6">
              <div className="text-lg space-y-6">
                <p className="leading-relaxed mt-8">
                  {isEnglish
                    ? "Our company offers specialized construction and renovation solutions, ensuring the highest quality and durability in every project. With years of experience in the industry and specialized crews, we undertake every task with professionalism, precision, and consistency."
                    : "Η εταιρεία μας προσφέρει εξειδικευμένες κατασκευαστικές και ανακαινιστικές λύσεις, διασφαλίζοντας την υψηλότερη ποιότητα και αντοχή σε κάθε έργο. Με πολυετή εμπειρία στον κλάδο και εξειδικευμένα συνεργεία, αναλαμβάνουμε κάθε εργασία με επαγγελματισμό, ακρίβεια και συνέπεια."}
                </p>

                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Services we provide:" : "Υπηρεσίες που παρέχουμε:"}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">
                          {isEnglish ? "Residential Painting & Renovation" : "Βαφή & Ανακαίνιση Κατοικιών"}
                        </h4>
                        <p>
                          {isEnglish
                            ? "We apply high-quality paints and techniques that ensure durability against weather conditions and aesthetic upgrade of your space."
                            : "Εφαρμόζουμε υψηλής ποιότητας χρώματα και τεχνικές που εξασφαλίζουν αντοχή στις καιρικές συνθήκες και αισθητική αναβάθμιση του χώρου σας."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">
                          {isEnglish ? "Thermal Insulation" : "Θερμοπρόσοψη – Θερμομόνωση"}
                        </h4>
                        <p>
                          {isEnglish
                            ? "We undertake the thermal insulation of your building, reducing energy consumption and protecting it from moisture and extreme temperatures."
                            : "Αναλαμβάνουμε τη θερμομονωτική θωράκιση του κτιρίου σας, μειώνοντας την ενεργειακή κατανάλωση και προστατεύοντας το από υγρασία και ακραίες θερμοκρασίες."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">
                          {isEnglish ? "Natural Stone Cladding" : "Επένδυση με Φυσική Πέτρα"}
                        </h4>
                        <p>
                          {isEnglish
                            ? "We install high-strength stone, offering aesthetic and structural enhancement to the facade or exterior areas of your residence."
                            : "Τοποθετούμε πέτρα υψηλής αντοχής, προσφέροντας αισθητική και δομική ενίσχυση στην πρόσοψη ή τους εξωτερικούς χώρους της κατοικίας σας."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">
                          {isEnglish ? "Road Construction & Design" : "Κατασκευή & Διαμόρφωση Δρόμων"}
                        </h4>
                        <p>
                          {isEnglish
                            ? "We specialize in creating private and professional roads, ensuring maximum durability in use and weather conditions."
                            : "Εξειδικευόμαστε στη δημιουργία ιδιωτικών και επαγγελματικών δρόμων, εξασφαλίζοντας μέγιστη αντοχή στη χρήση και στα καιρικά φαινόμενα."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">
                          {isEnglish ? "Roof Repair & Insulation" : "Επισκευή & Μόνωση Στέγης"}
                        </h4>
                        <p>
                          {isEnglish
                            ? "We offer solutions that ensure waterproofing and durability, protecting your property from moisture, wear, and heat loss."
                            : "Προσφέρουμε λύσεις που διασφαλίζουν στεγανότητα και ανθεκτικότητα, προστατεύοντας το ακίνητό σας από υγρασία, φθορές και απώλειες θερμότητας."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Why choose us?" : "Γιατί να μας επιλέξετε;"}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">
                          {isEnglish ? "Experience & Expertise" : "Εμπειρία & Τεχνογνωσία"}
                        </span>{" "}
                        –{" "}
                        {isEnglish
                          ? "Years of presence in the construction sector with proven high-quality projects."
                          : "Χρόνια παρουσίας στον κατασκευαστικό τομέα με αποδεδειγμένα έργα υψηλής ποιότητας."}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">
                          {isEnglish ? "Durable & Certified Materials" : "Ανθεκτικά & Πιστοποιημένα Υλικά"}
                        </span>{" "}
                        –{" "}
                        {isEnglish
                          ? "We use materials that ensure maximum lifespan and durability."
                          : "Χρησιμοποιούμε υλικά που διασφαλίζουν μέγιστη διάρκεια ζωής και αντοχή."}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">
                          {isEnglish ? "Adherence to Schedule" : "Τήρηση Χρονοδιαγράμματος"}
                        </span>{" "}
                        –{" "}
                        {isEnglish
                          ? "We complete every project consistently, without delays."
                          : "Ολοκληρώνουμε κάθε έργο με συνέπεια, χωρίς καθυστερήσεις."}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl py-6 px-8" asChild>
                    <Link href={`/${lang}/appointment`}>
                      {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-24 md:py-32">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
            </h2>
            <p className="text-xl text-gray-600">
              {isEnglish
                ? "Comprehensive renovation services tailored to your needs"
                : "Ολοκληρωμένες υπηρεσίες ανακαίνισης προσαρμοσμένες στις ανάγκες σας"}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                title: isEnglish ? "Roof Repair" : "Επισκευή Στέγης",
                description: isEnglish
                  ? "The roof is one of the most important elements of a building, as it protects the interior from weather conditions and wear. We undertake roof repair and maintenance, using top-quality waterproofing and insulation materials, ensuring long-term durability and safety."
                  : "Η στέγη είναι από τα πιο σημαντικά στοιχεία ενός κτιρίου, καθώς προστατεύει το εσωτερικό από καιρικές συνθήκες και φθορές. Αναλαμβάνουμε την επισκευή και συντήρηση στεγών, χρησιμοποιώντας κορυφαία υλικά στεγανοποίησης και μόνωσης, εξασφαλίζοντας μακροχρόνια ανθεκτικότητα και ασφάλεια.",
              },
              {
                icon: Thermometer,
                title: isEnglish ? "Thermal Insulation" : "Θερμοπρόσοψη",
                description: isEnglish
                  ? "Proper thermal insulation contributes to reducing energy consumption and saving on heating and cooling costs. With modern thermal insulation techniques, we upgrade your property, maintaining a stable temperature and protecting it from moisture and external conditions."
                  : "Η σωστή θερμομόνωση συμβάλλει στη μείωση της ενεργειακής κατανάλωσης και στην εξοικονόμηση κόστους θέρμανσης και ψύξης. Με σύγχρονες τεχνικές θερμοπρόσοψης, αναβαθμίζουμε το ακίνητό σας, διατηρώντας σταθερή θερμοκρασία και προστατεύοντάς το από την υγρασία και τις εξωτερικές συνθήκες.",
              },
              {
                icon: Hammer,
                title: isEnglish ? "Stone Building" : "Χτίσιμο Πέτρας",
                description: isEnglish
                  ? "Natural stone cladding adds aesthetic value, durability, and unique character to your building. We undertake professional stone building on facades, walls, and other surfaces, using traditional and modern installation techniques."
                  : "Η επένδυση με φυσική πέτρα προσθέτει αισθητική αξία, ανθεκτικότητα και μοναδικό χαρακτήρα στο κτίριό σας. Αναλαμβάνουμε επαγγελματικό χτίσιμο πέτρας σε προσόψεις, μάντρες και άλλες επιφάνειες, χρησιμοποιώντας παραδοσιακές και σύγχρονες τεχνικές τοποθέτησης.",
              },
              {
                icon: Road,
                title: isEnglish ? "Road Construction" : "Κατασκευή Δρόμων",
                description: isEnglish
                  ? "We create private and professional roads of high durability, suitable for heavy use and difficult weather conditions. With special methods of layering and materials, we ensure safe and functional routes for your property."
                  : "Δημιουργούμε ιδιωτικούς και επαγγελματικούς δρόμους υψηλής αντοχής, κατάλληλους για βαριά χρήση και δύσκολες καιρικές συνθήκες. Με ειδικές μεθόδους διαστρώσεων και υλικών, εξασφαλίζουμε ασφαλείς και λειτουργικές διαδρομές για την ιδιοκτησία σας.",
              },
              {
                icon: Sprout,
                title: isEnglish ? "Gardens" : "Κήποι",
                description: isEnglish
                  ? "Your outdoor space is an extension of your home. We design and construct beautiful and functional gardens, with options in plantings, pathways, lighting, and structures that enhance the aesthetics and practicality of your space."
                  : "Ο εξωτερικός σας χώρος είναι προέκταση του σπιτιού σας. Σχεδιάζουμε και κατασκευάζουμε όμορφους και λειτουργικούς κήπους, με επιλογές σε φυτεύσεις, διαδρόμους, φωτισμό και κατασκευές που ενισχύουν την αισθητική και πρακτικότητα του χώρου σας.",
              },
              {
                icon: Paintbrush,
                title: isEnglish ? "Painting" : "Βαψίματα",
                description: isEnglish
                  ? "We undertake professional painting of interior and exterior spaces, using high-quality materials that offer durability over time and conditions. We give new life to your property with careful application and flawless finishing."
                  : "Αναλαμβάνουμε επαγγελματικά βαψίματα εσωτερικών και εξωτερικών χώρων, χρησιμοποιώντας υλικά υψηλής ποιότητας που προσφέρουν αντοχή στον χρόνο και στις συνθήκες. Δίνουμε νέα πνοή στο ακίνητό σας με προσεγμένη εφαρμογή και άψογο φινίρισμα.",
              },
              {
                icon: Scissors,
                title: isEnglish ? "Core Drilling" : "Αδιατάρακτη Κοπή",
                description: isEnglish
                  ? "We provide professional core drilling services using state-of-the-art equipment for precise and clean cuts in concrete, reinforced concrete, and other materials. Our method ensures minimal vibration and dust, perfect for renovations in occupied buildings."
                  : "Παρέχουμε επαγγελματικές υπηρεσίες αδιατάρακτης κοπής χρησιμοποιώντας σύγχρονο εξοπλισμό για ακριβείς και καθαρές κοπές σε μπετόν, οπλισμένο σκυρόδεμα και άλλα υλικά. Η μέθοδός μας εξασφαλίζει ελάχιστους κραδασμούς και σκόνη, ιδανική για ανακαινίσεις σε κατοικημένα κτίρια.",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <service.icon className="w-16 h-16 text-primary mb-8" />
                  <h3 className="text-3xl font-semibold mb-6 text-primary">{service.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Cost Calculator Section */}
      <section className="relative py-24 md:py-32 bg-gray-100">
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {isEnglish ? "Estimate Your Renovation Cost" : "Εκτιμήστε το Κόστος Ανακαίνισης"}
            </h2>
            <p className="text-xl text-gray-600">
              {isEnglish
                ? "Use our calculator to get a rough estimate for your renovation project"
                : "Χρησιμοποιήστε τον υπολογιστή μας για να πάρετε μια πρώτη εκτίμηση για το έργο ανακαίνισής σας"}
            </p>
          </AnimatedSection>
          <RenovationCostCalculator />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isEnglish ? "Ready to Start Your Renovation?" : "Έτοιμοι να Ξεκινήσετε την Ανακαίνισή σας;"}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {isEnglish
                  ? "Contact us today to discuss your ideas and receive a personalized quote."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις ιδέες σας και να λάβετε μια εξατομικευμένη προσφορά."}
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
