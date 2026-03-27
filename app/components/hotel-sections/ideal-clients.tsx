import { AnimatedSection } from "../animated-section"
import { Award, Building, Users, Zap } from "lucide-react"

export function HotelIdealClients({ isEnglish }: { isEnglish: boolean }) {
  const clients = [
    { icon: Award, title: isEnglish ? "Boutique Hotel Owners" : "Ιδιοκτήτες Boutique Ξενοδοχείων", desc: isEnglish ? "Enhance guest experience and market competitiveness with renovations." : "Βελτίωση εμπειρίας επισκεπτών και ανταγωνιστικότητας." },
    { icon: Building, title: isEnglish ? "Resort Developers" : "Αναπτυξιακές Εταιρείες Resort", desc: isEnglish ? "Large-scale hospitality projects with premium finishes and amenities." : "Έργα μεγάλης κλίμακας με πολυτελή φινιρίσματα." },
    { icon: Users, title: isEnglish ? "Restaurant Operators" : "Διευθυντές Εστιατορίων", desc: isEnglish ? "Complete kitchen and dining space renovations meeting health standards." : "Ανακαίνιση κουζίνας και χώρων διατροφής." },
    { icon: Zap, title: isEnglish ? "Tourism Investors" : "Επενδυτές Τουρισμού", desc: isEnglish ? "Strategic renovations that increase property value and guest ratings." : "Στρατηγικές ανακαινίσεις που αυξάνουν την αξία." },
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
