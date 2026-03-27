import { Building2, Users, Zap, Shield } from "lucide-react"
import { AnimatedSection } from "../animated-section"

export function HotelServices({ isEnglish }: { isEnglish: boolean }) {
  const services = [
    { icon: Building2, title: isEnglish ? "Room Renovations" : "Ανακαίνιση Δωματίων", desc: isEnglish ? "Complete guest room upgrades with modern amenities and design." : "Πλήρης αναβάθμιση δωματίων με σύγχρονες παροχές." },
    { icon: Users, title: isEnglish ? "Common Area Design" : "Σχεδιασμός Κοινόχρηστων Χώρων", desc: isEnglish ? "Lobbies, restaurants, and shared spaces reimagined for guest comfort." : "Λόμπι, εστιατόρια και κοινόχρηστοι χώροι για άνεση." },
    { icon: Zap, title: isEnglish ? "Smart Hotel Systems" : "Έξυπνα Συστήματα", desc: isEnglish ? "Energy-efficient systems and guest management technology integration." : "Ενεργειακά αποδοτικά συστήματα και διαχείριση επισκεπτών." },
    { icon: Shield, title: isEnglish ? "Compliance & Standards" : "Κανονισμοί & Πρότυπα", desc: isEnglish ? "Full regulatory compliance and international hospitality standards." : "Πλήρης συμμόρφωση με διεθνή πρότυπα." },
  ]

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{isEnglish ? "Hotel Renovation Services" : "Υπηρεσίες Ανακαίνισης Ξενοδοχείων"}</h2>
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
