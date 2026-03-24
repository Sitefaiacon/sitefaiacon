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
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import type { CalculatorSelections, LeadContactInfo } from "@/lib/types/calculator-lead"

interface LeadCaptureFormProps {
  isOpen: boolean
  onClose: () => void
  selections: CalculatorSelections
  isEnglish?: boolean
}

interface FormErrors {
  name?: string
  email?: string
  general?: string
}

export function LeadCaptureForm({ isOpen, onClose, selections, isEnglish = false }: LeadCaptureFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  console.log("[v0] LeadCaptureForm isOpen:", isOpen)

  // Translations
  const t = {
    title: isEnglish ? "Get Your Cost Estimate" : "Λάβετε την Εκτίμηση Κόστους",
    description: isEnglish 
      ? "Fill in your details to receive your personalized cost estimate. Our team will contact you shortly."
      : "Συμπληρώστε τα στοιχεία σας για να λάβουμε το αίτημά σας και να σας στείλουμε προσωπική εκτίμηση κόστους.",
    nameLabel: isEnglish ? "Name" : "Όνομα",
    namePlaceholder: isEnglish ? "Your full name" : "Το ονοματεπώνυμό σας",
    nameRequired: isEnglish ? "Name is required" : "Το όνομα είναι υποχρεωτικό",
    emailLabel: isEnglish ? "Email" : "Email",
    emailPlaceholder: isEnglish ? "your@email.com" : "to@email.σας",
    emailRequired: isEnglish ? "Email is required" : "Το email είναι υποχρεωτικό",
    emailInvalid: isEnglish ? "Please enter a valid email" : "Παρακαλώ εισάγετε έγκυρο email",
    phoneLabel: isEnglish ? "Phone (optional)" : "Κινητό (προαιρετικό)",
    phonePlaceholder: isEnglish ? "Your phone number" : "Ο αριθμός τηλεφώνου σας",
    submitButton: isEnglish ? "Submit Request" : "Υποβολή Αιτήματος",
    submitting: isEnglish ? "Sending..." : "Αποστολή...",
    successTitle: isEnglish ? "Request Submitted!" : "Το αίτημα καταχωρήθηκε!",
    successMessage: isEnglish 
      ? "We will contact you shortly with a personalized cost estimate."
      : "Θα επικοινωνήσουμε μαζί σας σύντομα με προσωπική εκτίμηση κόστους.",
    closeButton: isEnglish ? "Close" : "Κλείσιμο",
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!name.trim()) {
      newErrors.name = t.nameRequired
    }
    
    if (!email.trim()) {
      newErrors.email = t.emailRequired
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        newErrors.email = t.emailInvalid
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      const contact: LeadContactInfo = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined
      }
      
      const response = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact,
          selections
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok || !data.success) {
        setErrors({ 
          general: data.errors?.[0] || (isEnglish ? "Something went wrong. Please try again." : "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.")
        })
        return
      }
      
      setIsSuccess(true)
      
    } catch (error) {
      console.error("Form submission error:", error)
      setErrors({ 
        general: isEnglish ? "Connection error. Please try again." : "Σφάλμα σύνδεσης. Παρακαλώ δοκιμάστε ξανά."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    // Reset form state
    setName("")
    setEmail("")
    setPhone("")
    setErrors({})
    setIsSuccess(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-primary">{t.title}</DialogTitle>
              <DialogDescription className="text-base text-gray-600 leading-relaxed">
                {t.description}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="lead-name" className="text-sm font-medium text-gray-700">
                  {t.nameLabel} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }))
                  }}
                  placeholder={t.namePlaceholder}
                  className={`bg-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="lead-email" className="text-sm font-medium text-gray-700">
                  {t.emailLabel} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                  }}
                  placeholder={t.emailPlaceholder}
                  className={`bg-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Phone Field (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="lead-phone" className="text-sm font-medium text-gray-700">
                  {t.phoneLabel}
                </Label>
                <Input
                  id="lead-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="bg-white"
                  disabled={isSubmitting}
                />
              </div>
              
              {/* General Error */}
              {errors.general && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errors.general}
                  </p>
                </div>
              )}
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  t.submitButton
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-xl text-primary mb-3">{t.successTitle}</DialogTitle>
            <DialogDescription className="text-base text-gray-600 leading-relaxed mb-6">
              {t.successMessage}
            </DialogDescription>
            <Button 
              onClick={handleClose}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              {t.closeButton}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
