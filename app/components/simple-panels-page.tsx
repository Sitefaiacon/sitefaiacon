import { ArchitecturalBackground } from "./architectural-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SimplePanelsPage({ lang = "el" }: { lang?: string }) {
  const isEnglish = lang === "en"

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">ΦαιάCon Panels</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "High-Quality Materials for Construction and Renovation"
                : "Υλικά Υψηλής Ποιότητας για Κατασκευή και Ανακαίνιση"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-lg">
                <p className="leading-relaxed">
                  {isEnglish
                    ? "At ΦαιάCon, we offer a wide range of high-quality decorative panels for various construction and renovation applications. Our panels provide a 3D stone or marble appearance without the difficulty of installing real materials."
                    : "Στη ΦαιάCon, προσφέρουμε μια ευρεία γκάμα διακοσμητικών panels υψηλής ποιότητας για διάφορες εφαρμογές κατασκευής και ανακαίνισης. Τα panels μας προσφέρουν 3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης πραγματικών υλικών."}
                </p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose FaiáCon Decorative Panels?"
                    : "Γιατί να Επιλέξετε τα Διακοσμητικά Panels FaiáCon;"}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "3D stone or marble appearance without the difficulty of installing real materials"
                        : "3D όψη πέτρας ή μαρμάρου χωρίς τη δυσκολία της τοποθέτησης πραγματικών υλικών"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Durability over time, no painting, no peeling"
                        : "Ανθεκτικότητα στον χρόνο, χωρίς βάψιμο, χωρίς ξεφλούδισμα"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Waterproof & UV-resistant, ideal for wet environments or exterior walls"
                        : "Αδιάβροχα & UV-resistant, ιδανικά για υγρά περιβάλλοντα ή εξωτερικούς τοίχους"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>
                      {isEnglish
                        ? "Installation in just 1 day with minimal disruption"
                        : "Εγκατάσταση σε μόλις 1 ημέρα με ελάχιστη φασαρία"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish
                    ? "Why Choose Panels Instead of Simple Painting?"
                    : "Γιατί να Επιλέξω Panels Αντί για Απλό Βάψιμο;"}
                </h3>
                <p className="mb-4">
                  {isEnglish
                    ? "Simple paint wears out quickly, gets dirty, and constantly needs renewal. FaiáCon Panels not only protect but also upgrade the aesthetics of your space, giving a premium result with minimal maintenance."
                    : "Η απλή βαφή φθείρεται γρήγορα, λερώνει, και χρειάζεται συνεχώς ανανέωση. Τα FaiáCon Panels όχι μόνο προστατεύουν αλλά και αναβαθμίζουν την αισθητική του χώρου, δίνοντας premium αποτέλεσμα με ελάχιστη συντήρηση."}
                </p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {isEnglish ? "Ideal Applications" : "Ιδανικές Εφαρμογές"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{isEnglish ? "Residences" : "Κατοικίες"}</h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "For easy, clean renovation without construction work"
                          : "Για εύκολη, καθαρή ανακαίνιση χωρίς έργα"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <span className="text-primary text-lg">🏨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {isEnglish ? "Airbnb & Hotels" : "Airbnb & Ξενοδοχεία"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isEnglish
                          ? "Impressive appearance that increases rental value by up to +15%"
                          : "Εντυπωσιακή εμφάνιση που αυξάνει την αξία ενοικίασης έως και +15%"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {isEnglish ? "Quality Certifications" : "Πιστοποιήσεις Ποιότητας"}
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  {isEnglish
                    ? "All our panels meet the highest quality standards and have successfully passed rigorous testing and certification processes."
                    : "Όλα τα panels μας πληρούν τα υψηλότερα πρότυπα ποιότητας και έχουν περάσει με επιτυχία αυστηρές διαδικασίες δοκιμών και πιστοποίησης."}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary text-center">ISO 9001</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {isEnglish ? "Quality Management" : "Διαχείριση Ποιότητας"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary text-center">CE</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {isEnglish ? "European Conformity" : "Ευρωπαϊκή Συμμόρφωση"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - Simplified */}
      <section className="relative py-24 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Panel Comparison" : "Σύγκριση Panels"}
            </h2>
            <p className="text-xl text-gray-600">
              {isEnglish
                ? "Compare the features of our different panel categories"
                : "Συγκρίνετε τα χαρακτηριστικά των διαφορετικών κατηγοριών panels μας"}
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">{isEnglish ? "Feature" : "Χαρακτηριστικό"}</th>
                    <th className="px-6 py-4 text-center">{isEnglish ? "PVC Marble Panels" : "PVC Panels Μαρμάρου"}</th>
                    <th className="px-6 py-4 text-center">{isEnglish ? "Wood & 3D Panels" : "Ξύλινα & 3D Panels"}</th>
                    <th className="px-6 py-4 text-center">
                      {isEnglish ? "Soft Stone Panels" : "Εύκαμπτα Panels Πέτρας"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {isEnglish ? "Moisture Resistance" : "Αντοχή στην υγρασία"}
                    </td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Excellent" : "Εξαιρετική"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Good" : "Καλή"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Excellent" : "Εξαιρετική"}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">
                      {isEnglish ? "Ease of Installation" : "Ευκολία εγκατάστασης"}
                    </td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Very Easy" : "Πολύ εύκολη"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Moderate" : "Μέτρια"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Easy" : "Εύκολη"}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">{isEnglish ? "Cost" : "Κόστος"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Economical" : "Οικονομικό"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Moderate to High" : "Μέτριο έως Υψηλό"}</td>
                    <td className="px-6 py-4 text-center">{isEnglish ? "Moderate" : "Μέτριο"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide - Simplified */}
      <section className="relative py-24 bg-gray-50">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Installation Guide" : "Οδηγός Εγκατάστασης"}
            </h2>
            <p className="text-xl text-gray-600">
              {isEnglish
                ? "Follow these steps for a successful panel installation"
                : "Ακολουθήστε αυτά τα βήματα για μια επιτυχημένη εγκατάσταση panels"}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  titleEl: "Προετοιμασία επιφάνειας",
                  titleEn: "Surface Preparation",
                  descriptionEl: "Βεβαιωθείτε ότι η επιφάνεια είναι καθαρή, στεγνή και επίπεδη.",
                  descriptionEn: "Ensure the surface is clean, dry, and level.",
                },
                {
                  titleEl: "Μέτρηση και κοπή",
                  titleEn: "Measuring and Cutting",
                  descriptionEl: "Μετρήστε προσεκτικά την περιοχή και σημειώστε τις διαστάσεις στα panels.",
                  descriptionEn: "Carefully measure the area and mark the dimensions on the panels.",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{isEnglish ? step.titleEn : step.titleEl}</h3>
                      <p className="text-gray-600">{isEnglish ? step.descriptionEn : step.descriptionEl}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Simplified */}
      <section className="relative py-24 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  questionEl: "Ποια είναι η διαφορά μεταξύ των PVC panels και των panels πέτρας;",
                  questionEn: "What is the difference between PVC panels and stone panels?",
                  answerEl:
                    "Τα PVC panels είναι κατασκευασμένα από συνθετικό υλικό, είναι ελαφρύτερα, πιο οικονομικά και εύκολα στην εγκατάσταση.",
                  answerEn:
                    "PVC panels are made of synthetic material, are lighter, more economical, and easier to install.",
                },
                {
                  questionEl: "Πόσο ανθεκτικά είναι τα panels σε υγρούς χώρους όπως μπάνια και πισίνες;",
                  questionEn: "How durable are the panels in wet areas such as bathrooms and pools?",
                  answerEl: "Τα περισσότερα panels μας είναι σχεδιασμένα για να αντέχουν σε υγρά περιβάλλοντα.",
                  answerEn: "Most of our panels are designed to withstand wet environments.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="font-medium text-primary">{isEnglish ? faq.questionEn : faq.questionEl}</h3>
                  </div>
                  <div className="px-6 pb-4 text-gray-700">{isEnglish ? faq.answerEn : faq.answerEl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? "Ready to Transform Your Space?" : "Έτοιμοι να Μεταμορφώσετε το Χώρο σας;"}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isEnglish
                ? "Contact us today to discuss your project and discover the perfect panel solutions for your needs."
                : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να ανακαλύψετε τις τέλειες λύσεις panels για τις ανάγκες σας."}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href={`/${lang}/appointment`}>
                {isEnglish ? "Book a Free Consultation" : "Κλείστε Δωρεάν Συμβουλευτική"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
