import { AnimatedSection } from "../animated-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function VillaFAQ({ isEnglish }: { isEnglish: boolean }) {
  const faqs = [
    {
      q: isEnglish ? "What is the typical timeline for villa construction?" : "Ποια είναι η τυπική διάρκεια κατασκευής;",
      a: isEnglish ? "Most luxury villa projects require 18-36 months depending on complexity and size. We provide detailed timelines during the planning phase." : "Τα περισσότερα έργα διαρκούν 18-36 μήνες ανάλογα με την πολυπλοκότητα."
    },
    {
      q: isEnglish ? "Do you handle all building permits?" : "Χειρίζεστε όλες τις άδειες;",
      a: isEnglish ? "Yes, we manage all regulatory requirements, permits, and compliance documentation throughout the project." : "Ναι, διαχειριζόμαστε όλες τις απαιτούμενες άδειες και έγγραφα."
    },
    {
      q: isEnglish ? "Can you work with existing designs?" : "Μπορείτε να δουλέψετε με υπάρχοντα σχέδια;",
      a: isEnglish ? "Absolutely. We can collaborate with your architect or refine existing designs to meet our quality standards." : "Ναι, μπορούμε να συνεργαστούμε με τον αρχιτέκτορά σας."
    },
    {
      q: isEnglish ? "What is included in the final price?" : "Τι περιλαμβάνεται στην τελική τιμή;",
      a: isEnglish ? "Complete construction, finishes, and quality assurance. Additional costs for special requests are discussed upfront." : "Πλήρης κατασκευή, φινιρίσματα και έλεγχος ποιότητας."
    },
    {
      q: isEnglish ? "Do you offer post-construction support?" : "Προσφέρετε υποστήριξη μετά την κατασκευή;",
      a: isEnglish ? "Yes, we provide warranty periods and ongoing maintenance support to ensure your villa remains in perfect condition." : "Ναι, παρέχουμε εγγύηση και συντήρηση μετά την κατασκευή."
    },
  ]

  return (
    <AnimatedSection className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-slate-600 rounded-lg px-6 data-[state=open]:bg-slate-700/50">
              <AccordionTrigger className="hover:no-underline py-4 text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  )
}
