"use client"

import { useLanguage } from "../contexts/language-context"
import dynamic from "next/dynamic"
import { Calculator, CheckCircle, Clock, Euro, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PricingGuideComponent } from "./pricing-guide"

const RenovationCostCalculator = dynamic(
  () => import("./renovation-cost-calculator").then((mod) => mod.RenovationCostCalculator),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
    ssr: false,
  }
)

export default function CostCalculatorPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  const features = isEnglish
    ? [
        { icon: Euro, title: "Free Estimate", description: "No cost, no commitment" },
        { icon: Clock, title: "Instant Results", description: "Get your estimate in seconds" },
        { icon: Shield, title: "Accurate Pricing", description: "Based on real market rates" },
        { icon: CheckCircle, title: "All Services", description: "Bathroom, kitchen, flooring & more" },
      ]
    : [
        { icon: Euro, title: "Δωρεάν Εκτίμηση", description: "Χωρίς κόστος, χωρίς δεσμεύσεις" },
        { icon: Clock, title: "Άμεσα Αποτελέσματα", description: "Λάβετε εκτίμηση σε δευτερόλεπτα" },
        { icon: Shield, title: "Ακριβείς Τιμές", description: "Βασισμένες σε πραγματικές τιμές αγοράς" },
        { icon: CheckCircle, title: "Όλες οι Υπηρεσίες", description: "Μπάνιο, κουζίνα, δάπεδα & άλλα" },
      ]

  const faqs = isEnglish
    ? [
        {
          question: "How accurate is this calculator?",
          answer:
            "Our calculator provides a reliable estimate based on current market rates in Corfu. Final pricing may vary based on specific requirements, materials chosen, and site conditions. For an exact quote, contact us for a free on-site assessment.",
        },
        {
          question: "What factors affect renovation cost?",
          answer:
            "Key factors include: property size, building age, scope of work (bathroom, kitchen, flooring, etc.), quality level (basic, mid-range, premium), and specific material choices.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we offer flexible payment options for larger projects. Contact us to discuss payment terms that work for your budget.",
        },
        {
          question: "How long does a renovation typically take?",
          answer:
            "Timeline varies by project scope. Bathroom renovations: 2-3 weeks. Kitchen renovations: 3-4 weeks. Full house renovation: 2-6 months.",
        },
      ]
    : [
        {
          question: "Πόσο ακριβής είναι αυτός ο υπολογιστής;",
          answer:
            "Ο υπολογιστής μας παρέχει αξιόπιστη εκτίμηση βασισμένη στις τρέχουσες τιμές αγοράς στην Κέρκυρα. Η τελική τιμή μπορεί να διαφέρει ανάλογα με τις συγκεκριμένες απαιτήσεις, τα υλικά και τις συνθήκες του χώρου. Για ακριβή προσφορά, επικοινωνήστε μαζί μας για δωρεάν επιτόπια εκτίμηση.",
        },
        {
          question: "Ποιοι παράγοντες επηρεάζουν το κόστος ανακαίνισης;",
          answer:
            "Κύριοι παράγοντες είναι: το μέγεθος του ακινήτου, η ηλικία του κτιρίου, το εύρος των εργασιών (μπάνιο, κουζίνα, δάπεδα κλπ.), το επίπεδο ποιότητας (βασικό, μεσαίο, premium) και οι συγκεκριμένες επιλογές υλικών.",
        },
        {
          question: "Προσφέρετε διακανονισμό πληρωμής;",
          answer:
            "Ναι, προσφέρουμε ευέλικτες επιλογές πληρωμής για μεγαλύτερα έργα. Επικοινωνήστε μαζί μας για να συζητήσουμε όρους πληρωμής που ταιριάζουν στον προϋπολογισμό σας.",
        },
        {
          question: "Πόσο χρόνο διαρκεί μια ανακαίνιση;",
          answer:
            "Ο χρόνος διαφέρει ανάλογα με το εύρος του έργου. Ανακαίνιση μπάνιου: 2-3 εβδομάδες. Ανακαίνιση κουζίνας: 3-4 εβδομάδες. Ολική ανακαίνιση σπιτιού: 2-6 μήνες.",
        },
      ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium">
                {isEnglish ? "Free Online Tool" : "Δωρεάν Online Εργαλείο"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {isEnglish ? "Renovation Cost Calculator" : "Υπολογιστής Κόστους Ανακαίνισης"}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {isEnglish
                ? "Get an instant estimate for your home renovation project. Free, fast, and accurate."
                : "Λάβετε άμεση εκτίμηση για το έργο ανακαίνισης του σπιτιού σας. Δωρεάν, γρήγορα και με ακρίβεια."}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {isEnglish ? "Calculate Your Renovation Cost" : "Υπολογίστε το Κόστος Ανακαίνισης"}
              </h2>
              <p className="text-gray-600">
                {isEnglish
                  ? "Fill in the details below to get your personalized estimate"
                  : "Συμπληρώστε τα στοιχεία παρακάτω για να λάβετε την προσωποποιημένη εκτίμησή σας"}
              </p>
            </div>
            <RenovationCostCalculator />
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {isEnglish ? "Indicative Pricing Guide" : "Ενδεικτικός Οδηγός Τιμών"}
              </h2>
              <p className="text-gray-600 text-lg">
                {isEnglish
                  ? "Starting prices for common renovation services in Corfu"
                  : "Αρχικές τιμές για συνηθισμένες υπηρεσίες ανακαίνισης στην Κέρκυρα"}
              </p>
            </div>
            <PricingGuideComponent />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {isEnglish ? "Need an Exact Quote?" : "Χρειάζεστε Ακριβή Προσφορά;"}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {isEnglish
                ? "Contact us for a free on-site assessment and detailed quote for your project"
                : "Επικοινωνήστε μαζί μας για δωρεάν επιτόπια εκτίμηση και αναλυτική προσφορά για το έργο σας"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={`/${lang}/contact`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {isEnglish ? "Contact Us" : "Επικοινωνία"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
