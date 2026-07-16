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
      const response = await fetch("/api/antiparoxes-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: lang,
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "", area: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        console.error("Form submission error:", result.error)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Form submission failed:", error)
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
              {isEnglish 
                ? "Faiacon | Property Development in Corfu"
                : "Faiacon | Αξιοποίηση Ακινήτων στην Κέρκυρα"}
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
              {isEnglish 
                ? "Land Development in Corfu"
                : "Αντιπαροχές στην Κέρκυρα"}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              {isEnglish
                ? "Faiacon undertakes land development partnerships and property exploitation in Corfu with a comprehensive approach: from initial technical assessment and planning to construction."
                : "Η Faiacon αναλαμβάνει συνεργασίες αντιπαροχής και αξιοποίησης οικοπέδων στην Κέρκυρα με ολοκληρωμένη προσέγγιση: από την αρχική τεχνική αξιολόγηση και τον σχεδιασμό, έως την κατασκευή."}
            </p>
          </AnimatedSection>

          {/* CTA - Positioned between content and trust strip */}
          <div className="flex items-center justify-center mt-8 mb-16">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="#contact-form" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {isEnglish ? "Request Assessment" : "Ζητήστε Αξιολόγηση"}
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container px-4 py-4">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{isEnglish ? "Local Corfu Knowledge" : "Τοπική γνώση Κέρκυρας"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{isEnglish ? "35+ Years Experience" : "35+ χρόνια εμπειρίας"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{isEnglish ? "Construction & Project Management" : "Κατασκευή & διαχείριση έργων"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                <span>{isEnglish ? "Professional Approach" : "Σοβαρή επαγγελματική προσέγγιση"}</span>
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
                {isEnglish
                  ? "A Serious Partnership for the Right Property Development"
                  : "Μια σοβαρή συνεργασία για τη σωστή αξιοποίηση του ακινήτου σας"}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {isEnglish
                  ? "Land development is a significant decision. That's why we don't rush. We examine each property carefully, openly share our assessment, and explain what can be done. When there's real potential for development, we proceed with partnerships on a clear and promising basis."
                  : "Η αντιπαροχή είναι μια σημαντική απόφαση. Γι' αυτό δεν βιαζόμαστε. Εξετάζουμε κάθε ακίνητο προσεκτικά, λέμε ανοιχτά τι νομίζουμε και τι μπορεί να γίνει. Όταν υπάρχει πραγματική δυνατότητα αξιοποίησης, προχωράμε σε συνεργασίες με σαφή βάση και προοπτική."}
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
              {isEnglish ? "What We Offer" : "Τι προσφέρουμε"}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {(isEnglish ? [
              {
                icon: ClipboardCheck,
                title: "Technical Assessment",
                description: "We examine the property, discuss your needs, and evaluate its development potential. No generic estimates - specific analysis for your particular case.",
              },
              {
                icon: Building2,
                title: "Planning & Organization",
                description: "Where real potential exists, we develop a realistic approach regarding the type of project, timeline, and development prospects.",
              },
              {
                icon: HardHat,
                title: "Responsible Construction",
                description: "We take on projects with the seriousness they deserve. Quality work, continuous oversight, results as agreed.",
              },
              {
                icon: MessageSquare,
                title: "Transparent Collaboration",
                description: "We openly tell you what's happening, what the next steps are, and what to expect. No ambiguity.",
              },
            ] : [
              {
                icon: ClipboardCheck,
                title: "Τεχνική Αξιολόγηση",
                description: "Εξετάζουμε το ακίνητο, συζητάμε τις ανάγκες σας και αξιολογούμε τις δυνατότητες αξιοποίησής του. Όχι γενικές εκτιμήσεις—ειδικά για τη δική σας περίπτωση.",
              },
              {
                icon: Building2,
                title: "Σχεδιασμός & Οργάνωση",
                description: "Όπου υπάρχει πραγματική δυνατότητα, διαμορφώνουμε μια ρεαλιστική προσέγγιση ως προς το είδος του έργου, το χρονοδιάγραμμα και την προοπτική αξιοποίησης.",
              },
              {
                icon: HardHat,
                title: "Κατασκευή με Ευθύνη",
                description: "Αναλαμβάνουμε τα έργα με τη σοβαρότητα που αξίζουν. Ποιοτική δουλειά, συνεχής έλεγχος, αποτέλεσμα όπως συμφωνήσαμε.",
              },
              {
                icon: MessageSquare,
                title: "Συνεργασία με Διαφάνεια",
                description: "Σας λέμε ανοιχτά τι γίνεται, ποια είναι τα επόμενα βήματα, και τι αναμένουμε. Χωρίς ασάφειες.",
              },
            ]).map((item, index) => (
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
                {isEnglish ? "What Properties This Is For" : "Για ποια ακίνητα απευθύνεται"}
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {(isEnglish ? [
                  "Land plots within development zones with building potential",
                  "Older properties requiring upgrade or reconstruction",
                  "Properties in areas of Corfu with investment potential",
                  "Cases where you seek development partnership instead of outright sale",
                ] : [
                  "Οικόπεδα εντός σχεδίου με δυνατότητα ανάπτυξης",
                  "Παλαιά ακίνητα που χρειάζονται αναβάθμιση ή ανακατασκευή",
                  "Ιδιοκτησίες σε περιοχές της Κέρκυρας με δυναμικό για επενδύσεις",
                  "Περιπτώσεις που ζητάτε συνεργασία για ανάπτυξη, αντί απλής πώλησης",
                ]).map((item, index) => (
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
              {isEnglish ? "How the Process Works" : "Πώς γίνεται η διαδικασία"}
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
              
              <div className="space-y-6 sm:space-y-8">
                {(isEnglish ? [
                  { step: 1, title: "Initial contact and basic property information" },
                  { step: 2, title: "Preliminary technical and practical assessment" },
                  { step: 3, title: "Discussion of partnership possibilities" },
                  { step: 4, title: "Project organization, planning and implementation" },
                ] : [
                  { step: 1, title: "Πρώτη επικοινωνία και βασικά στοιχεία ακινήτου" },
                  { step: 2, title: "Αρχική τεχνική και πρακτική αξιολόγηση" },
                  { step: 3, title: "Συζήτηση δυνατοτήτων συνεργασίας" },
                  { step: 4, title: "Οργάνωση έργου, σχεδιασμός και υλοποίηση" },
                ]).map((item, index) => (
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
                {isEnglish
                  ? "Every property is different. That's why each partnership is examined separately, based on actual data and real development potential."
                  : "Κάθε ακίνητο είναι διαφορετικό. Γι' αυτό κάθε συνεργασία εξετάζεται ξεχωριστά, με βάση τα πραγματικά δεδομένα και τις πραγματικές δυνατότητες αξιοποίησης."}
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
              {isEnglish ? "Why Partner with Faiacon" : "Γιατί να συνεργαστείτε με τη Faiacon"}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {(isEnglish ? [
              "Deep knowledge of Corfu and the characteristics of each area",
              "35+ years of experience in construction, renovation, and technical management",
              "Practical approach with emphasis on substance and proper execution",
              "Professional and serious management at every stage of the partnership",
            ] : [
              "Βαθιά γνώση της Κέρκυρας και των ιδιαιτεροτήτων κάθε περιοχής",
              "Εμπειρία 35+ ετών στην κατασκευή, ανακαίνιση και τεχνική διαχείριση",
              "Πρακτική προσέγγιση με έμφαση στην ουσία και τη σωστή εκτέλεση",
              "Επαγγελματική και σοβαρή διαχείριση σε κάθε στάδιο της συνεργασίας",
            ]).map((item, index) => (
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
                {isEnglish
                  ? "Land Development as Part of Our Complete Approach"
                  : "Η αντιπαροχή ως μέρος της ολοκληρωμένης προσέγγισής μας"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {isEnglish
                  ? "Faiacon is not limited to renovations. We operate in every area of technical property development in Corfu. That's why land development fits into an overall philosophy: proper planning, quality construction, targeted upgrades, and real value creation for you."
                  : "Η Faiacon δεν περιορίζεται σε ανακαινίσεις. Δραστηριοποιούμαστε σε κάθε τομέα της τεχνικής αξιοποίησης ακινήτων στην Κέρκυρα. Γι' αυτό η αντιπαροχή εντάσσεται σε μια συνολική φιλοσοφία: σωστός σχεδιασμός, ποιοτική κατασκευή, στοχευμένες αναβαθμίσεις, και πραγματική δημιουργία αξίας για εσάς."}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(isEnglish ? [
                { title: "Renovations", href: `/${lang}/house-renovation` },
                { title: "Construction", href: `/${lang}/house-construction` },
                { title: "Energy Upgrades", href: `/${lang}/services/thermoprosopsi` },
                { title: "Pools", href: `/${lang}/pool-construction` },
              ] : [
                { title: "Ανακαινίσεις", href: `/${lang}/house-renovation` },
                { title: "Κατασκευές", href: `/${lang}/house-construction` },
                { title: "Ενεργειακές Αναβαθμίσεις", href: `/${lang}/services/thermoprosopsi` },
                { title: "Πισίνες", href: `/${lang}/pool-construction` },
              ]).map((service, index) => (
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
              {isEnglish ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {(isEnglish ? [
              {
                question: "What exactly is land development partnership?",
                answer: "A land development partnership (antiparoxi) is a collaboration where the property or land owner partners with a construction company for property development, instead of selling it outright. The goal is to create real value through planning and construction.",
              },
              {
                question: "Which areas of Corfu do you operate in?",
                answer: "We examine cases throughout all of Corfu. Our decision depends on the property's characteristics, location, and actual development potential.",
              },
              {
                question: "Can I contact you even if I don't know my property's potential?",
                answer: "Yes, of course. That's exactly the first step. Contact us with basic information and we'll analyze together whether there's development potential.",
              },
              {
                question: "Do you only handle land development or other projects too?",
                answer: "We undertake renovations, construction, energy upgrades, and every property development solution. Land development is part of our broader activity.",
              },
            ] : [
              {
                question: "Τι ακριβώς είναι η αντιπαροχή;",
                answer: "Η αντιπαροχή είναι μια συνεργασία όπου ο ιδιοκτήτης ενός ακινήτου ή οικοπέδου συνεργάζεται με έναν κατασκευαστή για την ανάπτυξη του ακινήτου, αντί να το πουλήσει. Ο σκοπός είναι να δημιουργηθεί πραγματική αξία μέσω του σχεδιασμού και της κατασκευής.",
              },
              {
                question: "Σε ποιες περιοχές της Κέρκυρας δραστηριοποιείστε;",
                answer: "Εξετάζουμε περιπτώσεις σε όλη την Κέρκυρα. Η απόφασή μας εξαρτάται από τα χαρακτηριστικά του ακινήτου, τη θέση του και τις πραγματικές δυνατότητες αξιοποίησης.",
              },
              {
                question: "Μπορώ να επικοινωνήσω ακόμη και αν δεν γνωρίζω τις δυνατότητες του ακινήτου μου;",
                answer: "Ναι, φυσικά. Αυτό είναι ακριβώς το πρώτο βήμα. Επικοινωνήστε με τα βασικά στοιχεία και θα αναλύσουμε μαζί σας αν υπάρχει προοπτική αξιοποίησης.",
              },
              {
                question: "Αναλαμβάνετε μόνο αντιπαροχές ή και άλλα έργα;",
                answer: "Αναλαμβάνουμε ανακαινίσεις, κατασκευές, ενεργειακές αναβαθμίσεις και κάθε λύση αξιοποίησης ακινήτων. Η αντιπαροχή είναι μέρος της ευρύτερης δραστηριότητάς μας.",
              },
            ]).map((faq, index) => (
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
                {isEnglish
                  ? "Request a Preliminary Assessment for Your Property"
                  : "Ζητήστε μια πρώτη αξιολόγηση για το ακίνητό σας"}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {isEnglish
                  ? "Send us the basic details of your property and we'll contact you for an initial, confidential discussion."
                  : "Στείλτε μας τα βασικά στοιχεία του ακινήτου σας και θα επικοινωνήσουμε μαζί σας για μια πρώτη, εμπιστευτική συζήτηση."}
              </p>
            </AnimatedSection>

            {/* What Happens Next Section */}
            <AnimatedSection className="mb-10 sm:mb-12 bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">
                {isEnglish ? "What Happens After Submission" : "Τι ακολουθεί μετά την υποβολή"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {(isEnglish ? [
                  "We review the basic details of your property",
                  "We contact you for an initial discussion",
                  "We assess whether there's potential for meaningful partnership",
                  "We proceed to the next stage only where development is feasible",
                ] : [
                  "Εξετάζουμε τα βασικά στοιχεία του ακινήτου σας",
                  "Επικοινωνούμε μαζί σας για μια πρώτη συζήτηση",
                  "Αξιολογούμε αν υπάρχει προοπτική ουσιαστικής συνεργασίας",
                  "Προχωράμε σε επόμενο στάδιο μόνο όπου υπάρχει δυνατότητα αξιοποίησης",
                ]).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic border-l-4 border-blue-300 pl-4">
                {isEnglish
                  ? "The initial contact is informational and completely confidential. We examine the property's potential with a professional approach, without pressure."
                  : "Η πρώτη επικοινωνία είναι ενημερωτική και απολύτως εμπιστευτική. Εξετάζουμε τις δυνατότητες του ακινήτου με επαγγελματική προσέγγιση, χωρίς πίεση."}
              </p>
            </AnimatedSection>

            {/* Helper Info - What Information to Include */}
            <AnimatedSection className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                  <p className="text-xs sm:text-sm font-medium text-blue-900">
                    {isEnglish ? "Property Area" : "Περιοχή ακινήτου"}
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                  <p className="text-xs sm:text-sm font-medium text-blue-900">
                    {isEnglish ? "Property Type" : "Είδος ακινήτου"}
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                  <p className="text-xs sm:text-sm font-medium text-blue-900">
                    {isEnglish ? "Square Meters" : "Τετραγωνικά μέτρα"}
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                  <p className="text-xs sm:text-sm font-medium text-blue-900">
                    {isEnglish ? "Development Goal" : "Σκοπός αξιοποίησης"}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-600 mb-6 font-medium text-gray-700">
                    {isEnglish
                      ? "Fill in the basic details of your property and we'll contact you shortly for an initial discussion about development possibilities."
                      : "Συμπληρώστε τα βασικά στοιχεία του ακινήτου σας και θα επικοινωνήσουμε σύντομα για μια πρώτη συζήτηση σχετικά με τις δυνατότητες αξιοποίησης."}
                  </p>
                  
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {isEnglish ? "Thank You!" : "Ευχαριστούμε!"}
                      </h3>
                      <p className="text-gray-600">
                        {isEnglish ? "We'll contact you shortly." : "Θα επικοινωνήσουμε μαζί σας σύντομα."}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {isEnglish ? "Name *" : "Όνομα *"}
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={isEnglish ? "Your name" : "Το όνομά σας"}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {isEnglish ? "Phone *" : "Τηλέφωνο *"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={isEnglish ? "Your phone number" : "Το τηλέφωνό σας"}
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
                          placeholder={isEnglish ? "Your email" : "Το email σας"}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                          {isEnglish ? "Property Location" : "Περιοχή Ακινήτου"}
                        </label>
                        <input
                          type="text"
                          id="area"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={isEnglish ? "e.g. Corfu Center, Gouvia..." : "π.χ. Κέντρο Κέρκυρας, Γουβιά..."}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {isEnglish ? "Message" : "Μήνυμα"}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                          placeholder={isEnglish ? "Describe your property..." : "Περιγράψτε το ακίνητό σας..."}
                        />
                      </div>
                      
                      {submitStatus === "error" && (
                        <p className="text-red-500 text-sm">
                          {isEnglish ? "Something went wrong. Please try again." : "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά."}
                        </p>
                      )}
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting 
                          ? (isEnglish ? "Sending..." : "Αποστολή...")
                          : (isEnglish ? "Request Assessment" : "Ζητήστε Αξιολόγηση")}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection>
                <div className="space-y-6">
                  <div className="bg-primary text-white p-6 sm:p-8 rounded-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {isEnglish ? "Direct Contact" : "Άμεση Επικοινωνία"}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {isEnglish
                        ? "Prefer to speak with us directly? Contact us by phone or WhatsApp."
                        : "Προτιμάτε να μιλήσετε απευθείας μαζί μας; Επικοινωνήστε τηλεφωνικά ή μέσω WhatsApp."}
                    </p>
                    <div className="space-y-4">
                      <a href="tel:+306987797679" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>+30 698 779 7679</span>
                      </a>
                      <a href="mailto:info@faiacon.gr" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>info@faiacon.gr</span>
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
                          {isEnglish ? "Contact via WhatsApp" : "Επικοινωνία μέσω WhatsApp"}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-primary mb-2">
                      {isEnglish ? "Location" : "Τοποθεσία"}
                    </h4>
                    <p className="text-gray-700">
                      {isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα"}<br />
                      {isEnglish ? "Potamos 491 00" : "Ποταμός 491 00"}
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
                {isEnglish
                  ? "Start the Discussion for Your Opportunity"
                  : "Ξεκινήστε τη Συζήτηση για τη Δική σας Ευκαιρία"}
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                {isEnglish
                  ? "Every property has its own potential. Contact us today for a serious and confidential discussion about your particular case."
                  : "Κάθε ακίνητο έχει τις δικές του δυνατότητες. Επικοινωνήστε με εμάς σήμερα για μια σοβαρή και εμπιστευτική συζήτηση σχετικά με τη δική σας περίπτωση."}
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="#contact-form" className="flex items-center gap-2 justify-center">
                  <Phone className="w-5 h-5" />
                  {isEnglish ? "Contact for Development" : "Επικοινωνία για Αξιοποίηση"}
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
