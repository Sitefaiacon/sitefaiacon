"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  MapPin,
  Award,
  Building2,
  Handshake,
  ClipboardCheck,
  HardHat,
  MessageSquare,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"
import { useState } from "react"

export default function AntiparoxesPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const whatsappMessage = isEnglish 
    ? "Hello, I'd like to discuss a property development opportunity in Corfu."
    : "Γεια σας, θα ήθελα να συζητήσω για μια ευκαιρία αξιοποίησης ακινήτου στην Κέρκυρα."
  const whatsappLink = `https://wa.me/306987797679?text=${encodeURIComponent(whatsappMessage)}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "antiparoxes",
          language: lang,
        }),
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "", area: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4 py-16">
          <AnimatedSection className="text-center space-y-6 max-w-4xl mx-auto">
            {/* Eyebrow */}
            <p className="text-white/80 text-sm sm:text-base tracking-wider uppercase">
              Faiacon | Αξιοποίηση Ακινήτων στην Κέρκυρα
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
              Αντιπαροχές στην Κέρκυρα
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Η Faiacon αναλαμβάνει συνεργασίες αντιπαροχής και αξιοποίησης οικοπέδων στην Κέρκυρα, προσφέροντας ολοκληρωμένη προσέγγιση από την αρχική τεχνική αξιολόγηση έως τον σχεδιασμό και την κατασκευή.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="#contact-form" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Επικοινωνία για Αξιολόγηση
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300"
                asChild
              >
                <Link href="#process" className="flex items-center gap-2">
                  Δείτε τη Διαδικασία
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Trust Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container px-4 py-4">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Τοπική γνώση Κέρκυρας</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>35+ χρόνια εμπειρίας</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Κατασκευή & διαχείριση έργων</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                <span>Σοβαρή επαγγελματική προσέγγιση</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Positioning Section */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Μια σοβαρή συνεργασία για τη σωστή αξιοποίηση του ακινήτου σας
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Η αντιπαροχή αποτελεί μια σημαντική απόφαση για κάθε ιδιοκτήτη. Για αυτό εξετάζουμε κάθε περίπτωση με υπευθυνότητα, σαφή επικοινωνία και τεχνική ακρίβεια. Αξιολογούμε τις δυνατότητες του οικοπέδου ή του ακινήτου και διαμορφώνουμε μια πρόταση συνεργασίας με στόχο τη ρεαλιστική και ουσιαστική αξιοποίησή του.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative py-16 sm:py-24 bg-gray-50">
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Τι προσφέρουμε
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                title: "Τεχνική Αξιολόγηση",
                description: "Εξετάζουμε τα βασικά χαρακτηριστικά του ακινήτου ή του οικοπέδου και αξιολογούμε τις δυνατότητες αξιοποίησής του.",
              },
              {
                icon: Building2,
                title: "Σχεδιασμός & Οργάνωση",
                description: "Διαμορφώνουμε ολοκληρωμένη προσέγγιση για την ανάπτυξη του έργου, με έμφαση στη λειτουργικότητα, την ποιότητα και τη σωστή διαχείριση.",
              },
              {
                icon: HardHat,
                title: "Κατασκευή με Υπευθυνότητα",
                description: "Αναλαμβάνουμε την υλοποίηση με επαγγελματική συνέπεια, ποιοτικά υλικά και έλεγχο σε κάθε στάδιο του έργου.",
              },
              {
                icon: MessageSquare,
                title: "Συνεργασία με Διαφάνεια",
                description: "Δίνουμε έμφαση στη σαφή επικοινωνία, στον ρεαλισμό και στη σωστή βάση συνεργασίας από την πρώτη συζήτηση.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title}>
                <div className="h-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <item.icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">{item.title}</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Properties Section */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Για ποια ακίνητα απευθύνεται
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  "Οικόπεδα εντός σχεδίου ή με δυνατότητα αξιοποίησης",
                  "Παλαιά ακίνητα με προοπτική ανακατασκευής ή ανάπτυξης",
                  "Ιδιοκτησίες σε περιοχές της Κέρκυρας με επενδυτικό ενδιαφέρον",
                  "Περιπτώσεις όπου ο ιδιοκτήτης αναζητά συνεργασία για ανάπτυξη αντί πώλησης",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-16 sm:py-24 bg-gray-50 scroll-mt-20">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Πώς γίνεται η διαδικασία
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
              
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    step: 1,
                    title: "Πρώτη επικοινωνία και βασικά στοιχεία ακινήτου",
                  },
                  {
                    step: 2,
                    title: "Αρχική τεχνική και πρακτική αξιολόγηση",
                  },
                  {
                    step: 3,
                    title: "Συζήτηση δυνατοτήτων συνεργασίας",
                  },
                  {
                    step: 4,
                    title: "Οργάνωση έργου, σχεδιασμός και υλοποίηση",
                  },
                ].map((item, index) => (
                  <AnimatedSection key={item.step}>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2 sm:pt-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-primary">{item.title}</h3>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection className="mt-10 sm:mt-12">
              <p className="text-base sm:text-lg text-gray-700 text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                Κάθε ακίνητο είναι διαφορετικό, επομένως κάθε συνεργασία εξετάζεται ξεχωριστά με βάση τα πραγματικά δεδομένα και τις δυνατότητες αξιοποίησης.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Faiacon Section */}
      <section className="relative py-16 sm:py-24 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Γιατί να συνεργαστείτε με τη Faiacon
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              "Τοπική γνώση της Κέρκυρας και των ιδιαιτεροτήτων κάθε περιοχής",
              "Εμπειρία στην κατασκευή, ανακαίνιση και τεχνική διαχείριση έργων",
              "Πρακτική προσέγγιση με έμφαση στην ουσία και στη σωστή εκτέλεση",
              "Σοβαρή και επαγγελματική αντιμετώπιση σε κάθε στάδιο",
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <div className="flex items-start gap-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to Existing Services */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                Η αντιπαροχή ως μέρος μιας ολοκληρωμένης προσέγγισης
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Η Faiacon δεν δραστηριοποιείται μόνο στην ανακαίνιση, αλλά και στην ευρύτερη τεχνική αξιοποίηση ακινήτων στην Κέρκυρα. Για αυτό η αντιπαροχή εντάσσεται σε μια συνολική φιλοσοφία που συνδέει τον σωστό σχεδιασμό, την κατασκευή, την αναβάθμιση και τη δημιουργία πραγματικής αξίας για τον ιδιοκτήτη.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Ανακαινίσεις", href: `/${lang}/house-renovation` },
                { title: "Κατασκευές", href: `/${lang}/house-construction` },
                { title: "Ενεργειακές Αναβαθμίσεις", href: `/${lang}/services/thermoprosopsi` },
                { title: "Πισίνες", href: `/${lang}/pool-construction` },
              ].map((service, index) => (
                <AnimatedSection key={service.title}>
                  <Link href={service.href} className="block group">
                    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl text-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 hover:border-primary">
                      <span className="font-semibold text-sm sm:text-base">{service.title}</span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-24 bg-gray-50">
        <div className="container relative z-10 px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Συχνές Ερωτήσεις
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                question: "Τι είναι η αντιπαροχή;",
                answer: "Η αντιπαροχή είναι μια μορφή συνεργασίας αξιοποίησης ακινήτου ή οικοπέδου, όπου εξετάζεται η ανάπτυξη του ακινήτου μέσα από συμφωνημένη συνεργασία μεταξύ ιδιοκτήτη και κατασκευαστικής πλευράς.",
              },
              {
                question: "Σε ποιες περιοχές της Κέρκυρας αναλαμβάνετε;",
                answer: "Εξετάζουμε περιπτώσεις σε όλη την Κέρκυρα, ανάλογα με τα χαρακτηριστικά του ακινήτου και τις δυνατότητες αξιοποίησής του.",
              },
              {
                question: "Μπορώ να επικοινωνήσω ακόμη και αν δεν γνωρίζω τις δυνατότητες του ακινήτου μου;",
                answer: "Ναι. Μπορούμε να ξεκινήσουμε με μια πρώτη συζήτηση και βασικά στοιχεία του ακινήτου ώστε να εξετάσουμε αν υπάρχει προοπτική αξιοποίησης.",
              },
              {
                question: "Αναλαμβάνετε μόνο αντιπαροχές ή και πλήρη κατασκευή;",
                answer: "Η Faiacon αναλαμβάνει ανακαινίσεις, κατασκευές, ενεργειακές αναβαθμίσεις, premium επεμβάσεις και λύσεις αξιοποίησης ακινήτων στην Κέρκυρα.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Έχετε οικόπεδο ή ακίνητο προς αξιοποίηση στην Κέρκυρα;
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Επικοινωνήστε μαζί μας για μια πρώτη συζήτηση σχετικά με τις δυνατότητες αντιπαροχής ή αξιοποίησης του ακινήτου σας.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-600 mb-6">
                    Στείλτε μας τα βασικά στοιχεία του ακινήτου σας και θα επικοινωνήσουμε μαζί σας για μια πρώτη συζήτηση.
                  </p>
                  
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">Ευχαριστούμε!</h3>
                      <p className="text-gray-600">Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Όνομα *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Το όνομά σας"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Τηλέφωνο *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Το τηλέφωνό σας"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Το email σας"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                          Περιοχή Ακινήτου
                        </label>
                        <input
                          type="text"
                          id="area"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="π.χ. Κέντρο Κέρκυρας, Γουβιά..."
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Μήνυμα
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                          placeholder="Περιγράψτε το ακίνητό σας..."
                        />
                      </div>
                      
                      {submitStatus === "error" && (
                        <p className="text-red-500 text-sm">Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.</p>
                      )}
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Αποστολή..." : "Αποστολή Αιτήματος"}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection>
                <div className="space-y-6">
                  <div className="bg-primary text-white p-6 sm:p-8 rounded-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Άμεση Επικοινωνία</h3>
                    <p className="text-white/80 mb-6">
                      Προτιμάτε να μιλήσετε απευθείας μαζί μας; Επικοινωνήστε τηλεφωνικά ή μέσω WhatsApp.
                    </p>
                    <div className="space-y-4">
                      <a href="tel:+306987797679" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>+30 698 779 7679</span>
                      </a>
                      <a href="mailto:faiacon@yahoo.com" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>faiacon@yahoo.com</span>
                      </a>
                    </div>
                    <div className="mt-6">
                      <Button
                        size="lg"
                        className="w-full bg-white text-primary hover:bg-white/90"
                        asChild
                      >
                        <Link href={whatsappLink} target="_blank" className="flex items-center justify-center gap-2">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Επικοινωνία μέσω WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-primary mb-2">Τοποθεσία</h4>
                    <p className="text-gray-700">
                      Κέρκυρα, Ελλάδα<br />
                      Ποταμός 491 00
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Ξεκινήστε τη Συζήτηση Σήμερα
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Η αξιοποίηση του ακινήτου σας αρχίζει με μια απλή συζήτηση. Επικοινωνήστε μαζί μας για να εξετάσουμε τις δυνατότητες.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href={`/${lang}/appointment`}>
                  Κλείστε Δωρεάν Ραντεβού
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
