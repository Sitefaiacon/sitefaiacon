"use client"

import { useLanguage } from "../contexts/language-context"
import { Button } from "@/components/ui/button"
import { Building2, Home, PenToolIcon as Tool, PocketIcon as Pool, CheckCircle2, Calculator, Award, Briefcase, Users, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

// Lazy load heavy components
const RenovationCostCalculator = dynamic(() => import("./renovation-cost-calculator").then(mod => mod.RenovationCostCalculator), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
  ssr: false
})

export default function HomePage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  const whatsappMessage = isEnglish 
    ? "Hello, I'd like to get an estimate for my property renovation in Corfu."
    : "Γεία σας, θα ήθελα να λάβω μια εκτίμηση για την ανακαίνιση του ακινήτου μου στην Κέρκυρα."
  const whatsappLink = `https://wa.me/306945000000?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2c3e5c] via-[#3d5175] to-[#5c7191]">
        {/* Optimized Background - CSS only, no heavy image */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8">
              {/* Brand Label */}
              <div className="animate-fade-in">
                <p className="text-sm sm:text-base md:text-lg font-light sm:font-light text-white/80 tracking-widest drop-shadow-md">
                  {isEnglish ? "FaiaCon Technical Construction" : "ΦαιάCon Τεχνική Κατασκευαστική"}
                </p>
              </div>

              {/* Main Headline */}
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
                  {isEnglish 
                    ? "Turn Your Property in Corfu into a Profitable Investment"
                    : "Μετατρέψτε το ακίνητό σας σε πηγή εισοδήματος στην Κέρκυρα"}
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg animate-slide-up animation-delay-100 leading-relaxed">
                {isEnglish 
                  ? "We provide full renovation and construction services to help you maximize your property's value, rental income, or resale potential."
                  : "Αναλαμβάνουμε πλήρως την ανακαίνιση ώστε το ακίνητό σας να είναι έτοιμο για Airbnb ή πώληση με υψηλή αξία."}
              </p>

              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto drop-shadow-lg">
                {isEnglish 
                  ? "Trusted local contractor with 35+ years of experience"
                  : "Εγνωρισμένοι τοπικοί ανάδοχοι με εμπειρία 35+ ετών"}
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href={`/${lang}/cost-calculator`} className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {isEnglish ? "Calculate Cost" : "Υπολογίστε Κόστος"}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/30"
                  asChild
                >
                  <Link href={whatsappLink} target="_blank" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {isEnglish ? "WhatsApp Estimate" : "WhatsApp Εκτίμηση"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - NEW */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Award,
                  number: "35+",
                  label: isEnglish ? "Years of Experience" : "Έτη Εμπειρίας",
                  description: isEnglish ? "Trusted in Corfu since 1990" : "Εμπιστευμένοι στην Κέρκυρα από το 1990",
                },
                {
                  icon: Briefcase,
                  number: "500+",
                  label: isEnglish ? "Completed Projects" : "Ολοκληρωμένα Έργα",
                  description: isEnglish ? "Hundreds of satisfied clients" : "Εκατοντάδες ικανοποιημένοι πελάτες",
                },
                {
                  icon: Users,
                  number: "100%",
                  label: isEnglish ? "Client Satisfaction" : "Ικανοποίηση Πελατών",
                  description: isEnglish ? "International & local clients" : "Διεθνείς & τοπικοί πελάτες",
                },
                {
                  icon: Building2,
                  number: "1",
                  label: isEnglish ? "Project Manager" : "Διευθυντής Έργου",
                  description: isEnglish ? "Full project management" : "Πλήρης διαχείριση έργων",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.number}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                {isEnglish ? "Why Property Owners Trust Faiacon" : "Γιατί μας Εμπιστεύονται οι Ιδιοκτήτες Ακινήτων"}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600">{isEnglish ? "Professional Results, Trusted Expertise" : "Επαγγελματικά αποτελέσματα, εμπιστευμένη τεχνογνωσία"}</p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-justify">
                {isEnglish
                  ? "FaiaCon specializes in transforming properties into profitable investments. Whether you're looking to increase your property's market value, make it rental-ready for Airbnb, or improve its energy efficiency, our proven methods deliver results. From complete renovations to targeted upgrades, we manage every detail so your property reaches its full potential."
                  : "Η FaiaCon ειδικεύεται στη μετατροπή ακινήτων σε κερδοφόρες επενδύσεις. Είτε θέλετε να αυξήσετε την αξία της ιδιοκτησίας σας, να την κάνετε έτοιμη για Airbnb, ή να βελτιώσετε την ενεργειακή της απόδοση, οι αποδεδειγμένες μέθοδοί μας παραδίδουν αποτελέσματα. Από ολοκληρωμένες ανακαινίσεις έως στοχευμένες αναβαθμίσεις, διαχειριζόμαστε κάθε λεπτομέρεια."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  {isEnglish ? "Our Approach" : "Η Μέθοδός μας"}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {(isEnglish
                    ? [
                        "Results-focused: Every renovation targets maximum value increase",
                        "Local expertise: Deep knowledge of Corfu's market and climate",
                        "Professional project management: Transparent timelines and budgets",
                        "Quality guarantees: Durable, energy-efficient, modern finishes",
                      ]
                    : [
                        "Εστίαση στα αποτελέσματα: Κάθε ανακαίνιση στοχεύει στη μέγιστη αύξηση αξίας",
                        "Τοπική τεχνογνωσία: Εις βάθος γνώση της αγοράς και του κλίματος της Κέρκυρας",
                        "Επαγγελματική διαχείριση έργων: Διαφανείς χρονοδιαγράμματα και προϋπολογισμοί",
                        "Εγγυήσεις ποιότητας: Ανθεκτικές, ενεργειακά αποδοτικές, σύγχρονες διακοσμήσεις",
                      ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {isEnglish ? "Your Benefits" : "Τα Οφέλη σας"}
                </h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8">
                  {isEnglish
                    ? "Maximize your property's potential with complete renovation solutions. Our clients enjoy increased property values, higher rental rates, and modern, attractive homes—all managed by experienced professionals who care about your investment."
                    : "Μεγιστοποιήστε το δυναμικό του ακινήτου σας με ολοκληρωμένες λύσεις ανακαίνισης. Οι πελάτες μας απολαμβάνουν αυξημένες αξίες ακινήτων, υψηλότερα ποσοστά ενοικίασης και σύγχρονα, ελκυστικά σπίτια."}
                </p>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link href={whatsappLink} target="_blank" className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      {isEnglish ? "Start Your Project" : "Ξεκινήστε το Έργό σας"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Solutions Section - REFACTORED */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Solutions for Property Owners & Investors" : "Λύσεις για Ιδιοκτήτες & Επενδυτές Ακινήτων"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {isEnglish
                ? "Results-focused services designed to increase property value and rental potential"
                : "Υπηρεσίες εστιασμένες στα αποτελέσματα για αύξηση αξίας και δυναμικού ενοικίασης"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: isEnglish ? "Increase Property Value" : "Αύξηση Αξίας Ακινήτου",
                description: isEnglish
                  ? "Professional renovations that maximize market value and modernize your space."
                  : "Επαγγελματικές ανακαινίσεις που μεγιστοποιούν την αξία και εκσυγχρονίζουν το χώρο.",
                href: "/house-renovation",
              },
              {
                title: isEnglish ? "Airbnb & Rental Ready" : "Έτοιμο για Airbnb & Ενοικίαση",
                description: isEnglish
                  ? "Transform your property into an attractive rental investment with high income potential."
                  : "Μετατρέψτε το ακίνητό σας σε ελκυστική επένδυση ενοικίασης με υψηλό δυναμικό εισοδήματος.",
                href: "/house-renovation",
              },
              {
                title: isEnglish ? "Energy Savings & Comfort" : "Εξοικονόμηση Ενέργειας & Άνεση",
                description: isEnglish
                  ? "Modern thermal insulation and energy-efficient upgrades to reduce costs and improve comfort."
                  : "Σύγχρονη θερμική μόνωση και αναβαθμίσεις για εξοικονόμηση ενέργειας και άνεση.",
                href: "/house-renovation",
              },
              {
                title: isEnglish ? "Add Luxury & Investment Value" : "Προσθέστε Πολυτέλεια & Αξία",
                description: isEnglish
                  ? "Premium pools and luxury upgrades that enhance lifestyle and property appeal."
                  : "Πρίμιουμ πισίνες και πολυτελείς αναβ��θμίσεις που ενισχύουν την αξία του ακινήτου.",
                href: "/pool-construction",
              },
            ].map((service) => (
              <Link key={service.title} href={`/${lang}${service.href}`} className="block group h-full">
                <div className="h-full p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Button className="w-full" variant="outline">
                    {isEnglish ? "Learn More" : "Μάθετε περισσότερα"}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Promotion Section - HIGHLIGHTED */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEnglish ? "Estimate Your Renovation Cost in Minutes" : "Εκτιμήστε το Κόστος Ανακαίνισης σας σε Λεπτά"}
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed">
              {isEnglish
                ? "Use our cost calculator and receive a personalized estimate based on your specific project details."
                : "Χρησιμοποιήστε τον υπολογιστή κόστους μας και λάβετε εξατομικευμένη εκτίμηση για το έργο σας."}
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href={`/${lang}/cost-calculator`} className="flex items-center gap-2 justify-center">
                <Calculator className="w-5 h-5" />
                {isEnglish ? "Start Cost Calculation" : "Ξεκινήστε Υπολογισμό"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Renovation Cost Calculator Section */}
      <section id="renovation-calculator" className="relative py-24 md:py-32 bg-gray-50 scroll-mt-20">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {isEnglish ? "Calculate Your Cost Estimate" : "Υπολογίστε την Εκτίμησή σας"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {isEnglish
                ? "Fill in your project details below to get an instant estimate. This is a preliminary calculation to help you plan your budget—contact us for a detailed quote."
                : "Συμπληρώστε τα στοιχεία του έργου σας για να λάβετε άμεση εκτίμηση. Αυτό είναι ένας προκαταρκτικός υπολογισμός για να σας βοηθήσει να προγραμματίσετε το προϋπολογισμό σας."}
            </p>
          </div>
          <RenovationCostCalculator />
        </div>
      </section>

      {/* Projects Showcase - ENHANCED */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              {isEnglish ? "From Old Property to Rental-Ready Investment" : "Από Παλιό Ακίνητο σε Επένδυση Ενοικίασης"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {isEnglish
                ? "See how we transform properties to maximize value and rental potential"
                : "Δείτε πώς μετατρέπουμε ακίνητα για μέγιστη αξία και δυναμικό ενοικίασης"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ανακαίνιση Σπιτιού",
                titleEn: "House Renovation",
                location: "Πόλη της Κέρκυρας",
                locationEn: "Corfu Town",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CF%83%CF%80%CE%B9%CF%84%CE%B9%CE%BF%CF%8D.jpg-4JrG4DNSdtesYOXXiWMwkTb0QcGVvE.jpeg",
              },
              {
                title: "Ολοκληρωμένη Βίλα στις Σινιές",
                titleEn: "Completed Villa in Sinies",
                location: "Σινιές, Κέρκυρα",
                locationEn: "Sinies, Corfu",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B2%CE%AF%CE%BB%CE%B1%20%CF%83%CE%B9%CE%BD%CE%B9%CE%AD%CF%82.jpg-TBv1Q93tF49zLCpwPjQIhP4OS6eJLq.jpeg",
              },
              {
                title: "Πέτρινη Βίλα στην Κέρκυρα",
                titleEn: "Stone Villa in Corfu",
                location: "Κέρκυρα",
                locationEn: "Corfu",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg",
              },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <Link href={`/${lang}/our-projects`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={isEnglish ? project.titleEn : project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{isEnglish ? project.titleEn : project.title}</h3>
                  <p className="text-sm text-gray-600">{isEnglish ? project.locationEn : project.location}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href={`/${lang}/our-projects`}>{isEnglish ? "View All Projects" : "Δείτε Όλα τα Έργα"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section - NEW EMPHASIS */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white">
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEnglish ? "Need a Quick Estimate?" : "Θέλετε Γρήγορη Εκτίμηση;"}
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed">
              {isEnglish
                ? "Send us photos of your property via WhatsApp and receive a fast response from our team. We're here to help you maximize your investment."
                : "Στείλτε μας φωτογραφίες του ακινήτου σας μέσω WhatsApp και λάβετε γρήγορη απάντηση από την ομάδα μας. Είμαστε εδώ για να σας βοηθήσουμε."}
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href={whatsappLink} target="_blank" className="flex items-center gap-2 justify-center">
                <MessageCircle className="w-5 h-5" />
                {isEnglish ? "Chat on WhatsApp" : "Συνομιλήστε στο WhatsApp"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - KEPT */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              {isEnglish ? "Ready to Start Your Project?" : "Έτοιμοι να Ξεκινήσετε το Έργο σας;"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              {isEnglish
                ? "Contact us today to discuss your renovation goals and get started on transforming your property."
                : "Επικοινωνήστε μαζί μας σήμερα για να ξεκινήσετε τη μετατροπή του ακινήτου σας."}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href={`/${lang}/appointment`}>
                {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

