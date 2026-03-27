import { AnimatedSection } from "../animated-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HotelFAQ({ isEnglish }: { isEnglish: boolean }) {
  const faqs = [
    {
      q: isEnglish ? "Can renovations happen during operating season?" : "Μπορούν να γίνουν ανακαινίσεις κατά τη λειτουργία;",
      a: isEnglish ? "Yes, we specialize in phased renovations that minimize guest disruption. We plan around your peak seasons." : "Ναι, ειδικευόμαστε στις φάσεις ανακαίνισης που ελαχιστοποιούν τη διακοπή."
    },
    {
      q: isEnglish ? "What is the typical renovation timeline?" : "Ποια είναι η τυπική διάρκεια ανακαίνισης;",
      a: isEnglish ? "This depends on scope. A single floor might take 8-12 weeks; full property renovations require 6-12 months." : "Εξαρτάται από το εύρος. Ένας όροφος διαρκεί 8-12 εβδομάδες."
    },
    {
      q: isEnglish ? "Do you provide staff training?" : "Παρέχετε κατάρτιση προσωπικού;",
      a: isEnglish ? "Yes, we offer training on new systems, facilities, and operational procedures as part of our service." : "Ναι, παρέχουμε κατάρτιση για νέα συστήματα και διαδικασίες."
    },
    {
      q: isEnglish ? "How do you ensure quality in guest-facing areas?" : "Πώς εξασφαλίζετε την ποιότητα στους χώρους των επισκεπτών;",
      a: isEnglish ? "Daily inspections, material testing, and compliance with hospitality standards ensure exceptional results." : "Καθημερινές επιθεωρήσεις και δοκιμές υλικών εξασφαλίζουν εξαιρετικά αποτελέσματα."
    },
    {
      q: isEnglish ? "What if unexpected issues arise?" : "Τι γίνεται αν προκύψουν απροσδόκητα προβλήματα;",
      a: isEnglish ? "We have contingency protocols and experienced teams to handle unforeseen situations without major delays." : "Έχουμε πρωτόκολλα και έμπειρες ομάδες για ενδεχόμενα προβλήματα."
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
