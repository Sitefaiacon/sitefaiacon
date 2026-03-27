import { AnimatedSection } from "../animated-section"
import { Award, Users, Home, Zap } from "lucide-react"

export function VillaIdealClients({ isEnglish }: { isEnglish: boolean }) {
  const clients = [
    { icon: Home, title: isEnglish ? "International Investors" : "Διεθνείς Επενδυτές", desc: isEnglish ? "Premium property investments in Corfu's exclusive market." : "Επενδύσεις premium ακινήτων στην αποκλειστική αγορά της Κέρκυρας." },
    { icon: Users, title: isEnglish ? "High-Net-Worth Individuals" : "Έχοντες Υψηλό Καθαρό Αξίαν", desc: isEnglish ? "Bespoke luxury residences for discerning homeowners." : "Εξατομικευμένες πολυτελείς κατοικίες για επιλεκτικούς ιδιοκτήτες." },
    { icon: Award, title: isEnglish ? "Hospitality Developers" : "Αναπτυξιακές Εταιρείες", desc: isEnglish ? "Boutique hotels and vacation villas for tourism ventures." : "Μπουτίκ ξενοδοχεία και διακοπές για τουρισμό." },
    { icon: Zap, title: isEnglish ? "Lifestyle Upgrades" : "Αναβάθμιση Διαβίωσης", desc: isEnglish ? "Transform existing properties into luxury sanctuaries." : "Μετατροπή ιδιοκτησιών σε πολυτελή καταφύγια." },
  ]

  return (
    <AnimatedSection className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{isEnglish ? "Who We Serve" : "Ποιούς Εξυπηρετούμε"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((c, i) => (
            <div key={i} className="p-8 bg-slate-700/50 rounded-lg border border-slate-600">
              <c.icon className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
