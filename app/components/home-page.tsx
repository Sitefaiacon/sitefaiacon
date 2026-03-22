"use client"

import { useLanguage } from "../contexts/language-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Home,
  PenToolIcon as Tool,
  PocketIcon as Pool,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const RenovationCostCalculator = dynamic(
  () => import("./renovation-cost-calculator").then((mod) => mod.RenovationCostCalculator),
  {
    loading: () => <div className="h-96 bg-muted animate-pulse rounded-2xl" />,
    ssr: false,
  }
)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

const services = [
  {
    icon: Home,
    label: "Κατασκευή Σπιτιού",
    labelEn: "House Construction",
    description: "Δημιουργούμε το σπίτι των ονείρων σας από το μηδέν.",
    descriptionEn: "We build your dream home from the ground up.",
    href: "/house-construction",
    span: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    icon: Tool,
    label: "Ανακαίνιση Σπιτιού",
    labelEn: "House Renovation",
    description: "Ανανεώστε και εκσυγχρονίστε τον υπάρχοντα χώρο σας.",
    descriptionEn: "Renew and modernize your existing space.",
    href: "/house-renovation",
    span: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    icon: Building2,
    label: "Διατηρητέα Κτίρια",
    labelEn: "Listed Buildings",
    description: "Ειδική φροντίδα για ιστορικά σημαντικά ακίνητα.",
    descriptionEn: "Special care for historically significant properties.",
    href: "/listed-houses",
    span: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    icon: Pool,
    label: "Κατασκευή Πισίνας",
    labelEn: "Pool Construction",
    description: "Σχεδιασμός πισίνας με σύγχρονα συστήματα χωρίς χημικά.",
    descriptionEn: "Pool design with modern chemical-free systems.",
    href: "/pool-construction",
    span: "col-span-1 lg:col-span-2 row-span-1",
  },
]

const projects = [
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
]

export default function HomePage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-primary-dark">
        {/* Background logo with cranes - watermark style */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg"
            alt="ΦαιάCon Logo Background"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/85 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/50" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 container px-4 sm:px-6 pb-20 sm:pb-28 pt-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {isEnglish ? "Corfu, Greece · Since 1990" : "Κέρκυρα, Ελλάδα · Από το 1990"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-title font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] text-balance mb-6"
            >
              ΦαιάCon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl text-balance"
            >
              {isEnglish
                ? "Technical Construction · Excellence in every project"
                : "Τεχνική Κατασκευαστική · Αριστεία σε κάθε έργο"}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 shadow-xl shadow-black/30 transition-all duration-200 hover:scale-[1.02]"
                asChild
              >
                <Link href={`/${lang}/appointment`}>
                  {isEnglish ? "Book Free Appointment" : "Δωρεάν Ραντεβού"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium text-base px-8 py-6 backdrop-blur-sm transition-all duration-200"
                asChild
              >
                <Link href={`/${lang}/our-projects`}>
                  {isEnglish ? "View Projects" : "Δείτε τα Έργα μας"}
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { value: "35+", label: isEnglish ? "Years" : "Χρόνια" },
              { value: "200+", label: isEnglish ? "Projects" : "Έργα" },
              { value: "100%", label: isEnglish ? "Satisfaction" : "Ικανοποίηση" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent font-serif">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
                  {isEnglish ? "Who we are" : "Ποιοι είμαστε"}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
                  {isEnglish
                    ? "Technical Construction Company of Corfu"
                    : "Τεχνική Κατασκευαστική Κέρκυρας"}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
                  {isEnglish
                    ? "FaiaCon, based in Corfu, is a reference point in the construction sector, offering high-quality services in house construction, home renovation, listed buildings restoration, and luxury pool construction. With over 35 years of experience, our technical team guarantees innovation, durability, and aesthetic excellence."
                    : "Η ΦαίαCon, με έδρα την Κέρκυρα, αποτελεί σημείο αναφοράς στον χώρο των κατασκευών, με υψηλής ποιότητας υπηρεσίες στην κατασκευή σπιτιών, ανακαίνιση κατοικιών, διατηρητέα κτίρια και πολυτελείς πισίνες. Με εμπειρία άνω των 35 ετών, η ομάδα μας εγγυάται καινοτομία, αντοχή και αισθητική υπεροχή."}
                </p>

                <ul className="space-y-3 mb-8">
                  {(isEnglish
                    ? [
                        "Expertise in architectural and construction excellence",
                        "Deep knowledge of local architectural heritage",
                        "Comprehensive solutions from design to delivery",
                        "Reliability and transparency at every stage",
                      ]
                    : [
                        "Εξειδίκευση στην αρχιτεκτονική και κατασκευαστική αρτιότητα",
                        "Βαθιά γνώση της τοπικής αρχιτεκτονικής κληρονομιάς",
                        "Ολοκληρωμένες λύσεις από τη μελέτη έως την παράδοση",
                        "Αξιοπιστία και διαφάνεια σε κάθε στάδιο",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Link href={`/${lang}/appointment`}>
                    {isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Commitment card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="space-y-4"
              >
                <div className="rounded-3xl bg-primary p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-7 h-7 text-accent" />
                    <h3 className="font-serif text-xl font-bold">
                      {isEnglish ? "Our Commitment" : "Η Δέσμευσή μας"}
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    {isEnglish
                      ? "With passion for detail and commitment to quality, we create constructions that stand out for their durability and aesthetics, harmonized with the unique environment of Corfu."
                      : "Με πάθος για τη λεπτομέρεια και δέσμευση στην ποιότητα, δημιουργούμε κατασκευές που ξεχωρίζουν για την αντοχή και αισθητική τους, εναρμονισμένες με το μοναδικό περιβάλλον της Κέρκυρας."}
                  </p>
                </div>

                <div className="rounded-3xl bg-muted p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-7 h-7 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {isEnglish ? "Our Team" : "Η Ομάδα μας"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {isEnglish
                      ? "Experienced engineers, architects and skilled craftsmen working together to deliver projects that exceed expectations."
                      : "Έμπειροι μηχανικοί, αρχιτέκτονες και ειδικευμένοι τεχνίτες που συνεργάζονται για αποτελέσματα που ξεπερνούν τις προσδοκίες."}
                  </p>
                </div>

                <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-card">
                  <CalendarDays className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {isEnglish
                      ? "Book a free consultation today!"
                      : "Κλείστε δωρεάν συνάντηση σήμερα!"}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BENTO GRID ──────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              {isEnglish ? "What we offer" : "Τι προσφέρουμε"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              {isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
            </h2>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={svc.href}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={svc.span}
              >
                <Link href={`/${lang}${svc.href}`} className="block h-full group">
                  <div className="bento-card h-full p-6 sm:p-8 flex flex-col gap-4 bg-card hover:border-primary/30">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {isEnglish ? svc.labelEn : svc.label}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {isEnglish ? svc.descriptionEn : svc.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-medium mt-auto">
                      {isEnglish ? "Learn more" : "Μάθετε περισσότερα"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECENT PROJECTS ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                {isEnglish ? "Portfolio" : "Χαρτοφυλάκιο"}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
                {isEnglish ? "Recent Projects" : "Πρόσφατα Έργα"}
              </h2>
            </div>
            <Button variant="outline" asChild className="flex-shrink-0 border-border hover:border-primary hover:text-primary transition-colors">
              <Link href={`/${lang}/our-projects`}>
                {isEnglish ? "View all" : "Όλα τα Έργα"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link href={`/${lang}/our-projects`} className="block group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={isEnglish ? project.titleEn : project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white text-sm font-medium">
                        {isEnglish ? "View project" : "Δείτε το έργο"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
                    {isEnglish ? project.titleEn : project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {isEnglish ? project.locationEn : project.location}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COST CALCULATOR ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              {isEnglish ? "Budget estimator" : "Εκτίμηση κόστους"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {isEnglish ? "Estimate Your Renovation Cost" : "Εκτιμήστε το Κόστος Ανακαίνισης"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isEnglish
                ? "Get a quick estimate for your home renovation or door and window replacement. Fill in the details and we'll provide you a general price idea."
                : "Πάρτε γρήγορη εκτίμηση για την ανακαίνιση σπιτιού ή αντικατάσταση πορτοπαράθυρων. Συμπληρώστε τα στοιχεία για γενική ιδέα κόστους."}
            </p>
          </motion.div>
          <RenovationCostCalculator />
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {isEnglish ? "Ready to Start Your Project?" : "Έτοιμοι να Ξεκινήσετε;"}
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">
              {isEnglish
                ? "Contact us today to discuss your construction or renovation needs in Corfu."
                : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις κατασκευαστικές ή ανακαινιστικές ανάγκες σας στην Κέρκυρα."}
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 py-6 shadow-xl shadow-black/30 transition-all duration-200 hover:scale-[1.02]"
              asChild
            >
              <Link href={`/${lang}/appointment`}>
                {isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
