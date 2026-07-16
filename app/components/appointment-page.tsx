"use client"

// Appointment booking page component
import { useLanguage } from "../contexts/language-context"
import { useState, useTransition, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { sendEmail } from "../actions/send-email"

export default function AppointmentPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()
  const [isPending, startTransition] = useTransition()
  const [formMessage, setFormMessage] = useState<{ success: boolean; text: string } | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setFormMessage(null)

    startTransition(async () => {
      const result = await sendEmail(new FormData(form))
      setFormMessage({ success: result.success, text: result.message })
      if (result.success) form.reset()
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {isEnglish ? "Book Your Consultation" : "Κλείστε το Ραντεβού Σας"}
            </h1>
            <p className="text-xl text-white/90">
              {isEnglish
                ? "Free consultation with our renovation experts. Discuss your project and get professional guidance."
                : "Δωρεάν συμβουλευτική με τους ειδικούς μας. Συζητήστε το έργο σας και λάβετε επαγγελματικές συμβουλές."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-16 sm:py-24 bg-white border-t">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
                  {isEnglish ? "Get In Touch" : "Επικοινωνήστε Μαζί Μας"}
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Phone" : "Τηλέφωνο"}</h3>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <Link href="tel:+306987797679">+30 6987797679</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Email" : "Email"}</h3>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <Link href="mailto:info@faiacon.gr">info@faiacon.gr</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Location" : "Τοποθεσία"}</h3>
                      <p className="text-gray-600">{isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα"}</p>
                      <p className="text-gray-600">{isEnglish ? "Potamos 49100" : "Ποταμός 491 00"}</p>
                      <Button variant="link" className="p-0 h-auto text-primary text-sm" asChild>
                        <Link href="https://maps.app.goo.gl/LWjc7NV3s1NADhtF9" target="_blank" rel="noopener noreferrer">
                          {isEnglish ? "View on Map" : "Δείτε στο χάρτη"}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Response Time" : "Χρόνος Απάντησης"}</h3>
                      <p className="text-gray-600">
                        {isEnglish ? "Within 24 hours" : "Εντός 24 ωρών"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Expertise Section */}
                <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {isEnglish ? "Local Expertise in Corfu" : "Τοπική Εμπειρία στην Κέρκυρα"}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {isEnglish
                      ? "Since 1990, we have been helping property owners across Corfu with professional renovations and construction services. Our team understands the local context and what works best for Corfu properties."
                      : "Από το 1990, βοηθάμε ιδιοκτήτες ακινήτων σε ολόκληρη την Κέρκυρα με επαγγελματικές υπηρεσίες. Κατανοούμε το τοπικό περιβάλλον."}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{isEnglish ? "35+ years serving Corfu property owners" : "35+ χρόνια υπηρεσιών"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{isEnglish ? "Support for overseas owners" : "Υποστήριξη ξένων ιδιοκτητών"}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Appointment Form / CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  {isEnglish ? "Schedule a Consultation" : "Προγραμματίστε Συμβουλευτική"}
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Flexible Scheduling" : "Ευέλικτο Χρονοδιάγραμμα"}</h3>
                      <p className="text-sm text-gray-600">
                        {isEnglish ? "Book a time that works for you" : "Επιλέξτε την ώρα που σας ταιριάζει"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{isEnglish ? "Phone or In-Person" : "Τηλεφωνικά ή Προσωπικά"}</h3>
                      <p className="text-sm text-gray-600">
                        {isEnglish ? "Your choice of meeting format" : "Επιλέξτε τον τρόπο επικοινωνίας"}
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90 mb-4 text-base font-semibold py-6" asChild>
                  <Link href="tel:+306987797679">
                    {isEnglish ? "Call Now" : "Καλέστε τώρα"}
                  </Link>
                </Button>

                <Button className="w-full bg-primary text-base font-semibold text-white hover:bg-primary/90 py-6" asChild>
                  <Link href="mailto:info@faiacon.gr">
                    {isEnglish ? "Send Email" : "Στείλτε Email"}
                  </Link>
                </Button>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-gray-200 pt-6" noValidate>
                  <p className="text-sm font-semibold text-gray-900">
                    {isEnglish ? "Or send us your appointment request here" : "Ή στείλτε εδώ το αίτημα για το ραντεβού σας"}
                  </p>

                  <div>
                    <label htmlFor="appointment-name" className="mb-1.5 block text-sm font-medium text-gray-900">
                      {isEnglish ? "Full name" : "Ονοματεπώνυμο"}
                    </label>
                    <input
                      id="appointment-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment-email" className="mb-1.5 block text-sm font-medium text-gray-900">Email</label>
                    <input
                      id="appointment-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={isEnglish ? "name@example.com" : "onoma@example.com"}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment-phone" className="mb-1.5 block text-sm font-medium text-gray-900">
                      {isEnglish ? "Greek mobile phone" : "Κινητό τηλέφωνο"}
                    </label>
                    <input
                      id="appointment-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      pattern="69[0-9]{8}"
                      title={isEnglish ? "Use a Greek mobile number, e.g. 6987797679" : "Γράψτε ελληνικό κινητό, π.χ. 6987797679"}
                      placeholder="6987797679"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment-message" className="mb-1.5 block text-sm font-medium text-gray-900">
                      {isEnglish ? "Project and preferred time" : "Έργο και ώρα που σας εξυπηρετεί"}
                    </label>
                    <textarea
                      id="appointment-message"
                      name="message"
                      rows={4}
                      required
                      placeholder={isEnglish ? "Tell us about your project and when we can contact you." : "Γράψτε για το έργο σας και πότε μπορούμε να επικοινωνήσουμε."}
                      className="w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="appointment-company">Company</label>
                    <input id="appointment-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full bg-primary py-6 text-base font-semibold text-white hover:bg-primary/90">
                    {isPending
                      ? (isEnglish ? "Sending..." : "Αποστολή...")
                      : (isEnglish ? "Request an appointment" : "Ζητήστε ραντεβού")}
                  </Button>

                  {formMessage && (
                    <p role="status" className={`rounded-md px-3 py-2 text-sm ${formMessage.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                      {formMessage.text}
                    </p>
                  )}
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                  {isEnglish
                    ? "Free consultation. No obligation."
                    : "Δωρεάν συμβουλευτική. Χωρίς δεσμεύσεις."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white border-t">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              {isEnglish ? "Why Schedule a Consultation?" : "Γιατί να Κλείσετε Ραντεβού;"}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: isEnglish ? "Free Assessment" : "Δωρεάν Αξιολόγηση",
                  desc: isEnglish
                    ? "We assess your project needs at no cost and provide honest guidance."
                    : "Αξιολογούμε τις ανάγκες σας δωρεάν και σας δίνουμε ειλικρινή συμβουλές.",
                },
                {
                  title: isEnglish ? "Professional Advice" : "Επαγγελματική Συμβουλή",
                  desc: isEnglish
                    ? "Get expert recommendations from 35+ years of experience."
                    : "Λάβετε εμπειρογνώμονες συστάσεις από 35+ χρόνια εμπειρίας.",
                },
                {
                  title: isEnglish ? "Accurate Budget" : "Ακριβής Προϋπολογισμός",
                  desc: isEnglish
                    ? "We provide realistic cost estimates based on your specific needs."
                    : "Παρέχουμε ρεαλιστικούς προϋπολογισμούς ανάλογα τις ανάγκες σας.",
                },
                {
                  title: isEnglish ? "Clear Next Steps" : "Σαφή Επόμενα Βήματα",
                  desc: isEnglish
                    ? "Understand exactly what needs to happen and what to expect."
                    : "Καταλάβετε ακριβώς τι θα γίνει και τι να περιμένετε.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
