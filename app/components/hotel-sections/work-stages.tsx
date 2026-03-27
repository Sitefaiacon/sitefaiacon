import { AnimatedSection } from "../animated-section"
import { CheckCircle2 } from "lucide-react"

export function HotelWorkStages({ isEnglish }: { isEnglish: boolean }) {
  const stages = [
    {
      num: "01",
      title: isEnglish ? "Assessment & Planning" : "Αξιολόγηση & Σχεδιασμός",
      items: [isEnglish ? "Current state evaluation and guest needs analysis" : "Αξιολόγηση τρέχουσας κατάστασης", isEnglish ? "Phased renovation plan to minimize disruption" : "Σχέδιο φάσεων για ελάχιστη διακοπή"],
    },
    {
      num: "02",
      title: isEnglish ? "Design & Concept" : "Σχεδιασμός & Έννοια",
      items: [isEnglish ? "Brand alignment and guest experience strategy" : "Στοίχιση μάρκας και στρατηγική", isEnglish ? "3D visualization and stakeholder approval" : "3D απεικόνιση και έγκριση"],
    },
    {
      num: "03",
      title: isEnglish ? "Execution & Management" : "Εκτέλεση & Διαχείριση",
      items: [isEnglish ? "On-schedule phased construction during low seasons" : "Κατασκευή κατά φάσεις", isEnglish ? "Quality inspections and daily operational updates" : "Έλεγχος ποιότητας και ενημερώσεις"],
    },
    {
      num: "04",
      title: isEnglish ? "Launch & Support" : "Εκκίνηση & Υποστήριξη",
      items: [isEnglish ? "Grand reopening coordination and staff training" : "Συντονισμός επαναφοράς και κατάρτιση", isEnglish ? "Post-renovation support and optimization" : "Υποστήριξη και βελτιστοποίηση"],
    },
  ]

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{isEnglish ? "Our Hotel Renovation Process" : "Η Διαδικασία μας"}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <div key={i} className="p-6 bg-gradient-to-b from-amber-400/20 to-slate-800 rounded-lg border border-amber-400/30">
              <div className="text-4xl font-bold text-amber-400 mb-4">{stage.num}</div>
              <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
              <ul className="space-y-2">
                {stage.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
