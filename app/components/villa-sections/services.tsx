import { Home, Zap, Palette, Mountain } from "lucide-react"
import { AnimatedSection } from "../animated-section"

export function VillaServices({ isEnglish }: { isEnglish: boolean }) {
  const services = [
    { icon: Home, title: isEnglish ? "Architectural Design" : "Αρχιτεκτονικός Σχεδιασμός", desc: isEnglish ? "Custom villa design tailored to your vision and Corfu's architectural heritage." : "Εξατομικευμένος σχεδιασμός βιλών που ανταποκρίνεται στο όραμά σας." },
    { icon: Zap, title: isEnglish ? "Smart Home Integration" : "Έξυπνο Σπίτι", desc: isEnglish ? "Advanced automation systems for comfort, security, and energy efficiency." : "Συστήματα αυτοματισμού για άνεση και ενεργειακή απόδοση." },
    { icon: Palette, title: isEnglish ? "Luxury Interior Design" : "Πολυτελής Εσωτερική Διακόσμηση", desc: isEnglish ? "Premium finishes and materials selected for elegance and durability." : "Πολυτελή υλικά και φινιρίσματα για κομψότητα και ανθεκτικότητα." },
    { icon: Mountain, title: isEnglish ? "Outdoor Living Spaces" : "Εξωτερικοί Χώροι", desc: isEnglish ? "Terraces, pools, and gardens designed for Mediterranean lifestyle." : "Βεράντες, πισίνες και κήποι για τη μεσογειακή ζωή." },
  ]

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{isEnglish ? "Complete Villa Solutions" : "Ολοκληρωμένες Λύσεις Βιλών"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <s.icon className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
