"use client"

import { useLanguage } from "../contexts/language-context"
import { Button } from "@/components/ui/button"
import { Building2, Home, PenToolIcon as Tool, PocketIcon as Pool, CalendarDays, CheckCircle2, Calculator, TrendingUp, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

// Lazy load heavy components
const RenovationCostCalculator = dynamic(() => import("./renovation-cost-calculator").then(mod => mod.RenovationCostCalculator), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
})

export default function HomePage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* Hero Section - Premium Villa Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg"
            alt="Luxury Villa Renovation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6 animate-slide-up">
                <h1 className="text-luxury-headline text-white drop-shadow-lg">
                  {isEnglish ? "Transform Your Property Into a High-Value Investment" : "Μετατρέψτε το Ακίνητό σας σε Επένδυση Υψηλής Αξίας"}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                  {isEnglish 
                    ? "Luxury renovations, construction & turnkey solutions for discerning homeowners and investors"
                    : "Πολυτελείς ανακαινίσεις, κατασκευές και ολοκληρωμένες λύσεις για απαιτητικούς ιδιοκτήτες και επενδυτές"}
                </p>
              </div>

              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-100">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl btn-luxury"
                  asChild
                >
                  <Link href={`/${lang}/appointment`}>{isEnglish ? "Get Cost Estimate" : "Λάβετε Εκτίμηση Κόστους"}</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl btn-luxury"
                  asChild
                >
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                    {isEnglish ? "Contact via WhatsApp" : "Επικοινωνία WhatsApp"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Experience & Stats */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { number: "35+", label: isEnglish ? "Years of Excellence" : "Χρόνια Εξοχότητας", icon: Star },
                { number: "300+", label: isEnglish ? "Projects Completed" : "Ολοκληρωμένα Έργα", icon: CheckCircle2 },
                { number: "50+", label: isEnglish ? "International Clients" : "Διεθνείς Πελάτες", icon: TrendingUp },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <stat.icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-accent">{stat.number}</h3>
                  <p className="text-lg text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-luxury-headline text-primary mb-6">
              {isEnglish ? "Our Signature Services" : "Οι Υπηρεσίες μας"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEnglish
                ? "Comprehensive solutions tailored for your vision"
                : "Ολοκληρωμένες λύσεις προσαρμοσμένες στο όραμά σας"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                title: isEnglish ? "Luxury Renovation" : "Πολυτελής Ανακαίνιση",
                description: isEnglish
                  ? "Transform your home into a masterpiece with premium finishes and modern design."
                  : "Μετατρέψτε το σπίτι σας σε αριστούργημα με premium φινίρισμα.",
                href: "/house-renovation",
                icon: Tool,
              },
              {
                title: isEnglish ? "New Construction" : "Νέα Κατασκευή",
                description: isEnglish
                  ? "Create your dream property from the ground up with award-winning architecture."
                  : "Δημιουργήστε το ακίνητο των ονείρων σας με αρχιτεκτονική κατακτημένη.",
                href: "/house-construction",
                icon: Home,
              },
              {
                title: isEnglish ? "Luxury Pool Design" : "Σχεδίαση Πολυτελούς Πισίνας",
                description: isEnglish
                  ? "State-of-the-art pools with advanced systems and stunning aesthetics."
                  : "Πισίνες με προηγμένα συστήματα και εκπληκτική αισθητική.",
                href: "/pool-construction",
                icon: Pool,
              },
              {
                title: isEnglish ? "Historic Restoration" : "Αποκατάσταση Διατηρητέων",
                description: isEnglish
                  ? "Preserve heritage while adding modern comfort to listed properties."
                  : "Διατηρήστε την κληρονομιά ενώ προσθέτετε σύγχρονη άνεση.",
                href: "/listed-houses",
                icon: Building2,
              },
            ].map((service) => (
              <Link key={service.title} href={`/${lang}${service.href}`} className="block group h-full">
                <div className="h-full p-8 md:p-10 bg-secondary rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-muted">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    {isEnglish ? "Discover More" : "Μάθετε Περισσότερα"}
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section - Airbnb & ROI Focus */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-luxury-headline text-white mb-6">
                  {isEnglish ? "Airbnb Investment Properties" : "Ακίνητα Επένδυσης Airbnb"}
                </h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {isEnglish
                    ? "Maximize your rental income with our premium renovation services. We specialize in creating luxury Airbnb properties that command premium rates."
                    : "Μεγιστοποιήστε το εισόδημα ενοικίασης με τις υπηρεσίες πολυτελούς ανακαίνισης. Ειδικευόμαστε στη δημιουργία ακινήτων Airbnb που απαιτούν πρώτη θέση."}
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    isEnglish ? "Increase property value by 30-50%" : "Αύξηση αξίας ακινήτου 30-50%",
                    isEnglish ? "Generate €3,000-5,000+ monthly rental income" : "Δημιουργία €3.000-5.000+ μηνιαίου εισοδήματος",
                    isEnglish ? "Full turnkey management included" : "Πλήρης διαχείριση με το πακέτο",
                    isEnglish ? "Premium finishes attract top rates" : "Πρώτης ποιότητας φινίρισμα για κορυφαίες τιμές",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg font-semibold btn-luxury"
                  asChild
                >
                  <Link href={`/${lang}/appointment`}>{isEnglish ? "Start Your Investment" : "Ξεκινήστε Επένδυση"}</Link>
                </Button>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg"
                  alt="Luxury Property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="renovation-calculator" className="relative py-20 md:py-32 bg-secondary scroll-mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-luxury-headline text-primary mb-6">
              {isEnglish ? "Calculate Your Investment" : "Υπολογίστε την Επένδυσή σας"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEnglish
                ? "Get a personalized estimate instantly. Our calculator provides accurate quotes based on your specific requirements."
                : "Λάβετε εξατομικευμένη εκτίμηση άμεσα. Ο υπολογιστής παρέχει ακριβείς προσφορές."}
            </p>
          </div>
          <RenovationCostCalculator />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-luxury-headline text-primary mb-6">
              {isEnglish ? "Featured Projects" : "Επιλεγμένα Έργα"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEnglish ? "Discover our most prestigious recent completions" : "Ανακαλύψτε τα πιο πρεστιζιακά έργα μας"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Ανακαίνιση Σπιτιού",
                titleEn: "Luxury House Renovation",
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
                titleEn: "Stone Villa Corfu",
                location: "Κέρκυρα",
                locationEn: "Corfu",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AF%CE%BB%CE%B1%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20%CE%BC%CE%B5%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V8vJzvqnbHFzOkARSboB0oYyKvYB9m.jpeg",
              },
            ].map((project) => (
              <Link key={project.title} href={`/${lang}/our-projects`} className="group cursor-pointer block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src={project.image}
                    alt={isEnglish ? project.titleEn : project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-1">{isEnglish ? project.titleEn : project.title}</h3>
                <p className="text-muted-foreground">{isEnglish ? project.locationEn : project.location}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg btn-luxury" asChild>
              <Link href={`/${lang}/our-projects`}>{isEnglish ? "View All Projects" : "Δείτε Όλα τα Έργα"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-28 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-luxury-headline text-white mb-6">
              {isEnglish ? "Ready to Transform Your Property?" : "Έτοιμοι να Μετατρέψετε το Ακίνητό σας;"}
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              {isEnglish
                ? "Let's discuss how we can create your perfect space. Schedule a consultation with our team today."
                : "Ας συζητήσουμε πώς μπορούμε να δημιουργήσουμε τον ιδανικό σας χώρο."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold btn-luxury"
                asChild
              >
                <Link href={`/${lang}/appointment`}>{isEnglish ? "Book Consultation" : "Κλείστε Συμβουλευτική"}</Link>
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold btn-luxury"
                asChild
              >
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer">{isEnglish ? "WhatsApp" : "WhatsApp"}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

