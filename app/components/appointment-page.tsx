"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Phone, Mail, CheckCircle, Loader2 } from "lucide-react"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { sendEmail } from "../actions/send-email"
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useLanguage } from "../contexts/language-context"

export default function AppointmentPage({ lang }: { lang: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const { isEnglish } = useLanguage()

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      if (isSubmitting) return // Prevent multiple submissions

      setIsSubmitting(true)
      setFormError(null)
      setIsSuccess(false)

      try {
        const result = await sendEmail(formData)
        if (result.success) {
          setIsSuccess(true)
          toast.success(isEnglish ? result.messageEn : result.message)
          // Reset the form
          const form = document.querySelector("form") as HTMLFormElement
          form?.reset()
          // Scroll to success message
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          setFormError(isEnglish ? result.messageEn : result.message)
          toast.error(isEnglish ? result.messageEn : result.message)
        }
      } catch (error) {
        const errorMessage = isEnglish
          ? "An error occurred while sending the message. Please try again or contact us by phone at 6987797679."
          : "Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά στο 6987797679."
        setFormError(errorMessage)
        toast.error(errorMessage)
      } finally {
        setIsSubmitting(false)
      }
    },
    [isSubmitting, isEnglish],
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {isEnglish ? "Book an Appointment" : "Κλείστε Ραντεβού"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Let's discuss your project and make your vision a reality"
                : "Ας συζητήσουμε για το έργο σας και ας κάνουμε το όραμά σας πραγματικότητα"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-24">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Success Message */}
            {isSuccess && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-green-800">
                    {isEnglish ? "Successful Submission!" : "Επιτυχής Αποστολή!"}
                  </AlertTitle>
                  <AlertDescription className="text-green-700 text-justify-content">
                    {isEnglish
                      ? "Your message has been sent successfully. We will contact you soon."
                      : "Το μήνυμά σας στάλθηκε με επιτυχία. Θα επικοινωνήσουμε μαζί σας σύντομα."}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {isEnglish ? "Contact Form" : "Φόρμα Επικοινωνίας"}
                </h2>

                {/* Error Message */}
                {formError && (
                  <Alert className="mb-6 bg-red-50 border-red-200">
                    <AlertTitle className="text-red-800">{isEnglish ? "Error" : "Σφάλμα"}</AlertTitle>
                    <AlertDescription className="text-red-700 text-justify-content">{formError}</AlertDescription>
                  </Alert>
                )}

                <form action={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      {isEnglish ? "Full Name" : "Ονοματεπώνυμο"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={isEnglish ? "Your name" : "Το όνομά σας"}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={isEnglish ? "Your email" : "Το email σας"}
                      required
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      {isEnglish ? "Phone" : "Τηλέφωνο"} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={isEnglish ? "Your mobile (e.g. 6912345678)" : "Το κινητό σας (πχ. 6912345678)"}
                      required
                      pattern="69[0-9]{8}"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {isEnglish ? "Project Description" : "Περιγραφή Έργου"} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={isEnglish ? "Tell us about your project..." : "Πείτε μας για το έργο σας..."}
                      className="min-h-[150px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isEnglish ? "Sending..." : "Αποστολή..."}
                      </>
                    ) : isEnglish ? (
                      "Send"
                    ) : (
                      "Αποστολή"
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Contact Information" : "Στοιχεία Επικοινωνίας"}
                  </h2>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <span>+30 6987797679</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <span>faiacon@yahoo.com</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <p>{isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα"}</p>
                        <p>Ποταμός 491 00</p>
                        <Button variant="link" className="p-0 h-auto text-primary" asChild>
                          <a href="https://maps.app.goo.gl/LWjc7NV3s1NADhtF9" target="_blank" rel="noopener noreferrer">
                            {isEnglish ? "View on map" : "Δείτε στο χάρτη"}
                          </a>
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <span>{isEnglish ? "Mon-Sat: 8:00-20:00" : "Δευ-Σαβ: 8:00-20:00"}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {isEnglish ? "Why Book an Appointment" : "Γιατί να Κλείσετε Ραντεβού"}
                  </h2>
                  <ul className="space-y-4">
                    {[
                      isEnglish ? "Free initial consultation" : "Δωρεάν αρχική συμβουλευτική",
                      isEnglish ? "Customized solutions" : "Εξατομικευμένες λύσεις",
                      isEnglish ? "Accurate cost estimation" : "Ακριβής εκτίμηση κόστους",
                      isEnglish ? "Professional guidance" : "Επαγγελματική καθοδήγηση",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-justify-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
