"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ContactInfo {
  name: string
  email: string
  phone: string
}

interface QuoteRequestModalProps {
  isOpen: boolean
  onClose: () => void
  calculatorData: any
  isEnglish: boolean
}

export function QuoteRequestModal({
  isOpen,
  onClose,
  calculatorData,
  isEnglish,
}: QuoteRequestModalProps) {
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!contact.name.trim()) {
      setErrorMessage(isEnglish ? "Name is required" : "Το όνομα είναι υποχρεωτικό")
      return
    }
    if (!contact.email.trim()) {
      setErrorMessage(isEnglish ? "Email is required" : "Το email είναι υποχρεωτικό")
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contact.email)) {
      setErrorMessage(isEnglish ? "Please enter a valid email" : "Παρακαλώ εισάγετε έγκυρο email")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            name: contact.name.trim(),
            email: contact.email.trim().toLowerCase(),
            phone: contact.phone.trim() || undefined,
          },
          selections: calculatorData,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.errors?.[0] || (isEnglish ? "An error occurred" : "Προέκυψε σφάλμα"))
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(isEnglish ? "Network error. Please try again." : "Σφάλμα δικτύου. Παρακαλώ δοκιμάστε ξανά.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setContact({ name: "", email: "", phone: "" })
    setSubmitStatus("idle")
    setErrorMessage("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        {submitStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground mb-3">
              {isEnglish ? "Request Submitted!" : "Η αίτηση υποβλήθηκε!"}
            </DialogTitle>
            <p className="text-muted-foreground mb-2">
              {isEnglish 
                ? "Thank you! We will process your details and send you a personalized cost estimate within the next few hours."
                : "Σας ευχαριστούμε! Θα επεξεργαστούμε τα στοιχεία σας και θα σας στείλουμε μια εξατομικευμένη εκτίμηση κόστους μέσα στις επόμενες ώρες."}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {isEnglish 
                ? "For faster service, you can also send us a message on WhatsApp with photos of your space."
                : "Για πιο άμεση εξυπηρέτηση, μπορείτε να μας στείλετε και μήνυμα στο WhatsApp με φωτογραφίες του χώρου σας."}
            </p>
            <Button onClick={handleClose} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              {isEnglish ? "Close" : "Κλείσιμο"}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-primary">
                {isEnglish ? "Get Your Quote" : "Λάβετε Προσφορά"}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {isEnglish 
                  ? "Fill in your details and we'll send you a personalized quote."
                  : "Συμπληρώστε τα στοιχεία σας και θα σας στείλουμε εξατομικευμένη προσφορά."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Full Name" : "Ονοματεπώνυμο"} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder={isEnglish ? "John Doe" : "Γιάννης Παπαδόπουλος"}
                  className="h-11 border-border bg-background"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder={isEnglish ? "john@example.com" : "giannis@example.com"}
                  className="h-11 border-border bg-background"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Phone (optional)" : "Τηλέφωνο (προαιρετικό)"}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder={isEnglish ? "+30 694 123 4567" : "+30 694 123 4567"}
                  className="h-11 border-border bg-background"
                  disabled={isSubmitting}
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="flex-1 h-11 border-border"
                >
                  {isEnglish ? "Cancel" : "Ακύρωση"}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {isEnglish ? "Sending..." : "Αποστολή..."}
                    </>
                  ) : (
                    isEnglish ? "Submit Request" : "Υποβολή Αιτήματος"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
