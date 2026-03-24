import { useLanguage } from "../contexts/language-context"
import { TrendingDown, Clock, Users, Award } from "lucide-react"

export function PricingGuideComponent() {
  const { isEnglish } = useLanguage()

  const pricingData = [
    {
      titleEn: "Bathroom Renovation",
      titleGr: "Ανακαίνιση Μπάνιου",
      priceEn: "€2,530",
      priceGr: "€2.530",
      unitEn: "per bathroom",
      unitGr: "ανά μπάνιο",
      color: "from-blue-500 to-blue-600",
    },
    {
      titleEn: "Kitchen Renovation",
      titleGr: "Ανακαίνιση Κουζίνας",
      priceEn: "€4,030",
      priceGr: "€4.030",
      unitEn: "per kitchen",
      unitGr: "ανά κουζίνα",
      color: "from-purple-500 to-purple-600",
    },
    {
      titleEn: "Flooring",
      titleGr: "Δάπεδα",
      priceEn: "€70",
      priceGr: "€70",
      unitEn: "per m²",
      unitGr: "ανά τ.μ.",
      color: "from-amber-500 to-amber-600",
    },
    {
      titleEn: "Painting",
      titleGr: "Βαφή",
      priceEn: "€55",
      priceGr: "€55",
      unitEn: "per m²",
      unitGr: "ανά τ.μ.",
      color: "from-green-500 to-green-600",
    },
    {
      titleEn: "Electrical Work",
      titleGr: "Ηλεκτρολογικά",
      priceEn: "€530",
      priceGr: "€530",
      unitEn: "per room",
      unitGr: "ανά δωμάτιο",
      color: "from-red-500 to-red-600",
    },
    {
      titleEn: "Windows & Doors",
      titleGr: "Κουφώματα",
      priceEn: "€430",
      priceGr: "€430",
      unitEn: "per unit",
      unitGr: "ανά τεμάχιο",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  const benefits = isEnglish
    ? [
        { icon: TrendingDown, title: "Market-Based Rates", description: "Prices reflect current Corfu market" },
        { icon: Clock, title: "Updated Regularly", description: "Rates adjusted quarterly" },
        { icon: Users, title: "Real-World Costs", description: "Based on completed projects" },
        { icon: Award, title: "35+ Years Expert", description: "Trusted local expertise" },
      ]
    : [
        { icon: TrendingDown, title: "Τιμές Αγοράς", description: "Τιμές που αντικατοπτρίζουν την αγορά Κέρκυρας" },
        { icon: Clock, title: "Ενημερωμένες", description: "Προσαρμόζονται ανά τρίμηνο" },
        { icon: Users, title: "Πραγματικά Έργα", description: "Βασισμένες σε ολοκληρωμένα έργα" },
        { icon: Award, title: "35+ Χρόνια", description: "Αξιόπιστη τοπική εξειδίκευση" },
      ]

  return (
    <div className="space-y-12">
      {/* Pricing Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient background - hidden by default */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className={`w-1 h-8 bg-gradient-to-b ${item.color} mb-4 rounded-full`} />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{isEnglish ? item.titleEn : item.titleGr}</h3>
              <div className="mb-4">
                <p className="text-4xl font-bold text-gray-900">{isEnglish ? item.priceEn : item.priceGr}</p>
              </div>
              <p className="text-sm text-gray-600 font-medium">{isEnglish ? item.unitEn : item.unitGr}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          {isEnglish ? "Why Trust Our Pricing?" : "Γιατί Να Εμπιστεύεστε τις Τιμές Μας;"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">{isEnglish ? "Note: " : "Σημείωση: "}</span>
          {isEnglish
            ? "These are indicative prices starting from basic specifications. Final costs depend on property size, building condition, material quality, and specific project requirements. Contact us for a detailed quote."
            : "Αυτές είναι ενδεικτικές τιμές που ξεκινούν από βασικές προδιαγραφές. Το τελικό κόστος εξαρτάται από το μέγεθος του ακινήτου, την κατάσταση του κτιρίου, την ποιότητα υλικών και τις συγκεκριμένες απαιτήσεις του έργου. Επικοινωνήστε μαζί μας για αναλυτική προσφορά."}
        </p>
      </div>
    </div>
  )
}
