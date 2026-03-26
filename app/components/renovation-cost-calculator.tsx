"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/language-context"
import { Bath, ChefHat, Layers, Zap, Building2, Paintbrush, Loader2, CheckCircle, AlertCircle, User, Mail, Phone } from "lucide-react"

// Constants for Doors & Windows Calculator
const materialOptions = ["aluminum", "pvc", "wood"] as const
const qualityOptions = ["basic", "midRange", "premium"] as const

type Material = (typeof materialOptions)[number]
type Quality = (typeof qualityOptions)[number]

interface ContactInfo {
  name: string
  email: string
  phone: string
}

const windowCosts: Record<string, Record<Material, Record<Quality, number>>> = {
  window: {
    aluminum: { basic: 530, midRange: 630, premium: 730 },
    pvc: { basic: 430, midRange: 530, premium: 630 },
    wood: { basic: 630, midRange: 730, premium: 830 },
  },
  balconyDoor: {
    aluminum: { basic: 930, midRange: 1030, premium: 1130 },
    pvc: { basic: 830, midRange: 930, premium: 1030 },
    wood: { basic: 1030, midRange: 1130, premium: 1230 },
  },
  interiorDoor: {
    aluminum: { basic: 330, midRange: 430, premium: 530 },
    pvc: { basic: 280, midRange: 380, premium: 480 },
    wood: { basic: 430, midRange: 530, premium: 630 },
  },
  mainEntrance: {
    aluminum: { basic: 1530, midRange: 1830, premium: 2030 },
    pvc: { basic: 1330, midRange: 1530, premium: 1730 },
    wood: { basic: 1830, midRange: 2030, premium: 2230 },
  },
}

export function RenovationCostCalculator() {
  const { isEnglish } = useLanguage()
  const [activeTab, setActiveTab] = useState("renovation")

  // State for Renovation Calculator
  const [area, setArea] = useState<string>("50")
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [rooms, setRooms] = useState(2)
  const [buildingAge, setBuildingAge] = useState(2000)
  const [poolType, setPoolType] = useState("none")
  const [poolSize, setPoolSize] = useState(18)
  const [categories, setCategories] = useState({
    bathroom: false,
    kitchen: false,
    flooring: false,
    electrical: false,
    structural: false,
    painting: false,
  })
  const [renovationQuality, setRenovationQuality] = useState("basic")

  // State for Doors & Windows Calculator
  const [material, setMaterial] = useState<Material>("aluminum")
  const [windowsQuality, setWindowsQuality] = useState<Quality>("basic")
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState<string>("0.00")

  // State for contact form and results
  const [showContactForm, setShowContactForm] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [calculatedRenovationCost, setCalculatedRenovationCost] = useState<string>("0.00")

  // Constants for Renovation Calculator
  const baseCostPerM2 = 490
  const qualityMultipliers = { basic: 1.0, midRange: 1.3, premium: 1.6 }
  const agePenalty = { ancient: 1.25, old: 1.15, modern: 1.0 }
  const categoryModifiers = {
    bathroom: 2530,
    kitchen: 4030,
    flooring: 70,
    electrical: 530,
    structural: 130,
    painting: 55,
  }
  const electricalGeneralRepairCost = 2500
  const poolCostsPerM2 = {
    none: { basic: 0, midRange: 0, premium: 0 },
    liner: { midRange: 1055, premium: 1215 },
    polyester: { premium: 1255 },
    concrete: { basic: 1155, midRange: 1255, premium: 1355 },
  }

  // Translations
  const translations: Record<string, string> = {
    "Renovation Cost Calculator": "Υπολογιστής Κόστους Ανακαίνισης",
    Windows: "Παράθυρα",
    "Balcony Doors": "Μπαλκονόπορτες",
    "Interior Doors": "Εσωτερικές Πόρτες",
    "Main Entrance": "Κεντρική Είσοδος",
    Material: "Υλικό",
    Quality: "Ποιότητα",
    "Estimated Cost:": "Εκτιμώμενο Κόστος:",
    aluminum: "Αλουμίνιο",
    pvc: "PVC",
    wood: "Ξύλο",
    basic: "Βασική",
    midRange: "Μεσαία",
    premium: "Premium",
    "General Renovation": "Γενική Ανακαίνιση",
    "Doors & Windows": "Πόρτες & Παράθυρα",
    "Total Estimated Cost:": "Συνολικό Εκτιμώμενο Κόστος:",
    "Get Quote": "Δείτε την Προσφορά",
  }

  const translate = (text: string) => {
    return isEnglish ? text : translations[text] || text
  }

  // Effects
  useEffect(() => {
    if (poolType === "liner" && renovationQuality === "basic") {
      setRenovationQuality("midRange")
    }
  }, [poolType, renovationQuality])

  useEffect(() => {
    if (poolType === "polyester" && renovationQuality !== "premium") {
      setRenovationQuality("premium")
    }
  }, [poolType, renovationQuality])

  useEffect(() => {
    calculateWindowsCost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [material, windowsQuality, windows, balconyDoors, interiorDoors, mainEntrance])

  // Calculation functions
  const calculateRenovationCost = () => {
    const numericArea = Number(area)
    const selectedCategories = Object.values(categories).filter(Boolean).length
    const categoryCost = Object.entries(categories).reduce(
      (acc, [key, isSelected]) =>
        isSelected
          ? acc +
            categoryModifiers[key as keyof typeof categoryModifiers] *
              (key === "bathroom"
                ? bathrooms
                : key === "kitchen"
                  ? kitchens
                  : key === "electrical"
                    ? rooms
                    : numericArea) +
            (key === "electrical" ? electricalGeneralRepairCost : 0)
          : acc,
      0,
    )

    const baseCost = selectedCategories > 1 ? numericArea * baseCostPerM2 : 0
    let totalCost = (baseCost + categoryCost) * qualityMultipliers[renovationQuality as keyof typeof qualityMultipliers]

    const ageCategory = 2024 - buildingAge > 40 ? "ancient" : 2024 - buildingAge >= 20 ? "old" : "modern"
    totalCost *= agePenalty[ageCategory as keyof typeof agePenalty]
    if (numericArea > 125) totalCost *= 0.92

    if (poolType !== "none" && !isNaN(poolSize)) {
      const poolCost =
        (poolCostsPerM2[poolType as keyof typeof poolCostsPerM2][renovationQuality as keyof typeof qualityMultipliers] -
          100) *
        poolSize
      totalCost += poolCost > 0 ? poolCost : 0
    }

    return totalCost.toFixed(2)
  }

  const calculateWindowsCost = () => {
    const cost =
      windows * windowCosts.window[material][windowsQuality] +
      balconyDoors * windowCosts.balconyDoor[material][windowsQuality] +
      interiorDoors * windowCosts.interiorDoor[material][windowsQuality] +
      mainEntrance * windowCosts.mainEntrance[material][windowsQuality]
    setWindowsCost(cost.toFixed(2))
    return cost.toFixed(2)
  }

  const handleGetQuote = () => {
    // Reset states and show contact form
    setShowContactForm(true)
    setShowResults(false)
    setSubmitStatus("idle")
    setErrorMessage("")
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!contact.name.trim()) {
      setErrorMessage(isEnglish ? "Name is required" : "Το ονοματεπώνυμο είναι υποχρεωτικό")
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
    if (!contact.phone.trim()) {
      setErrorMessage(isEnglish ? "Phone is required" : "Το τηλέφωνο είναι υποχρεωτικό")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    // Calculate costs
    const renovationCostValue = calculateRenovationCost()
    const windowsCostValue = calculateWindowsCost()
    
    // Check if renovation has any selected categories
    const hasRenovationSelections = Object.values(categories).some(Boolean)
    // Check if windows has any items
    const hasWindowsSelections = windows > 0 || balconyDoors > 0 || interiorDoors > 0 || mainEntrance > 0
    
    // Prepare calculator data for the API
    const calculatorData = {
      renovation: {
        area: Number(area),
        bathrooms,
        kitchens,
        rooms,
        buildingAge,
        poolType,
        poolSize: poolType !== "none" ? poolSize : 0,
        categories,
        renovationQuality,
        renovationCost: hasRenovationSelections ? parseFloat(renovationCostValue) : 0,
      },
      windows: {
        windows,
        balconyDoors,
        interiorDoors,
        mainEntrance,
        material,
        quality: windowsQuality,
        windowsCost: hasWindowsSelections ? parseFloat(windowsCostValue) : 0,
      },
      totalCost: (hasRenovationSelections ? parseFloat(renovationCostValue) : 0) + 
                 (hasWindowsSelections ? parseFloat(windowsCostValue) : 0),
    }

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
            phone: contact.phone.trim(),
          },
          selections: calculatorData,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        setCalculatedRenovationCost(renovationCostValue)
        setShowResults(true)
        setShowContactForm(false)
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

  const handleReset = () => {
    setShowContactForm(false)
    setShowResults(false)
    setSubmitStatus("idle")
    setContact({ name: "", email: "", phone: "" })
    setErrorMessage("")
  }

  const formatCurrency = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value
    return new Intl.NumberFormat('el-GR', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num)
  }

  const renderInput = (label: string, value: number, onChange: (value: number) => void) => (
    <div className="space-y-1.5">
      <Label htmlFor={label} className="text-sm font-medium text-foreground">
        {translate(label)}
      </Label>
      <Input
        id={label}
        type="number"
        value={value}
        onChange={(e) => onChange(Number.parseInt(e.target.value) || 0)}
        min="0"
        className="h-10 border-border bg-background"
      />
    </div>
  )

  // Results section component
  const ResultsSection = () => {
    const renovationCost = parseFloat(calculatedRenovationCost)
    const windowsCostNum = parseFloat(windowsCost)
    const totalCost = renovationCost + windowsCostNum
    
    const hasRenovationSelections = Object.values(categories).some(Boolean)
    const hasWindowsSelections = windows > 0 || balconyDoors > 0 || interiorDoors > 0 || mainEntrance > 0

    return (
      <div className="mt-6 space-y-4 animate-fade-in">
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-800 text-sm">
            {isEnglish 
              ? `Thank you ${contact.name}! Here is your personalized quote.`
              : `Ευχαριστούμε ${contact.name}! Ιδού η εξατομικευμένη προσφορά σας.`}
          </p>
        </div>

        {hasRenovationSelections && (
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-3">
              {isEnglish ? "General Renovation" : "Γενική Ανακαίνιση"}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Area:" : "Εμβαδόν:"}</span>
                <span className="font-medium">{area} {isEnglish ? "m²" : "τ.μ."}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Quality:" : "Ποιότητα:"}</span>
                <span className="font-medium">{translate(renovationQuality)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Categories:" : "Κατηγορίες:"}</span>
                <span className="font-medium text-right">
                  {Object.entries(categories)
                    .filter(([, v]) => v)
                    .map(([k]) => {
                      const labels: Record<string, string> = {
                        bathroom: isEnglish ? "Bathroom" : "Μπάνιο",
                        kitchen: isEnglish ? "Kitchen" : "Κουζίνα",
                        flooring: isEnglish ? "Flooring" : "Δάπεδα",
                        electrical: isEnglish ? "Electrical" : "Ηλεκτρολογικά",
                        structural: isEnglish ? "Structural" : "Δομικά",
                        painting: isEnglish ? "Painting" : "Βαφή",
                      }
                      return labels[k]
                    })
                    .join(", ")}
                </span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between text-base">
                  <span className="font-semibold">{isEnglish ? "Renovation Cost:" : "Κόστος Ανακαίνισης:"}</span>
                  <span className="font-bold text-primary">{formatCurrency(renovationCost)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {hasWindowsSelections && (
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-3">
              {isEnglish ? "Doors & Windows" : "Πόρτες & Παράθυρα"}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Material:" : "Υλικό:"}</span>
                <span className="font-medium">{translate(material)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Quality:" : "Ποιότητα:"}</span>
                <span className="font-medium">{translate(windowsQuality)}</span>
              </div>
              {windows > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isEnglish ? "Windows:" : "Παράθυρα:"}</span>
                  <span className="font-medium">{windows}</span>
                </div>
              )}
              {balconyDoors > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isEnglish ? "Balcony Doors:" : "Μπαλκονόπορτες:"}</span>
                  <span className="font-medium">{balconyDoors}</span>
                </div>
              )}
              {interiorDoors > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isEnglish ? "Interior Doors:" : "Εσωτερικές Πόρτες:"}</span>
                  <span className="font-medium">{interiorDoors}</span>
                </div>
              )}
              {mainEntrance > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isEnglish ? "Main Entrance:" : "Κεντρική Είσοδος:"}</span>
                  <span className="font-medium">{mainEntrance}</span>
                </div>
              )}
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between text-base">
                  <span className="font-semibold">{isEnglish ? "Windows Cost:" : "Κόστος Κουφωμάτων:"}</span>
                  <span className="font-bold text-primary">{formatCurrency(windowsCostNum)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {(hasRenovationSelections || hasWindowsSelections) && (
          <div className="p-5 bg-primary/10 rounded-lg border-2 border-primary">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-primary">
                {isEnglish ? "Total Estimated Cost:" : "Συνολικό Εκτιμώμενο Κόστος:"}
              </span>
              <span className="text-2xl font-bold text-primary">{formatCurrency(totalCost)}</span>
            </div>
          </div>
        )}

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">
            {isEnglish 
              ? "This is an indicative estimate. The final cost may vary. We will contact you shortly for a detailed quote."
              : "Η εκτίμηση είναι ενδεικτική. Το τελικό κόστος μπορεί να διαφέρει. Θα επικοινωνήσουμε μαζί σας σύντομα για αναλυτική προσφορά."}
          </p>
        </div>

        <Button 
          onClick={handleReset}
          variant="outline"
          className="w-full h-11 border-border"
        >
          {isEnglish ? "Calculate Again" : "Νέος Υπολογισμός"}
        </Button>
      </div>
    )
  }

  // Contact form component
  const ContactForm = () => (
    <div className="mt-6 p-5 bg-muted rounded-lg border border-border animate-fade-in">
      <h3 className="text-lg font-semibold text-primary mb-2">
        {isEnglish ? "See Your Results" : "Δείτε τα Αποτελέσματα"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {isEnglish 
          ? "Enter your details to see the cost estimate for your project."
          : "Συμπληρώστε τα στοιχεία σας για να δείτε την εκτίμηση κόστους του έργου σας."}
      </p>

      <form onSubmit={handleContactSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-sm font-medium text-foreground flex items-center gap-2">
            <User className="w-4 h-4" />
            {isEnglish ? "Full Name" : "Ονοματεπώνυμο"} *
          </Label>
          <Input
            id="contact-name"
            type="text"
            value={contact.name}
            onChange={(e) => setContact((prev) => ({ ...prev, name: e.target.value }))}
            placeholder={isEnglish ? "John Doe" : "Γιάννης Παπαδόπουλος"}
            className="h-11 border-border bg-background"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-sm font-medium text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email *
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={contact.email}
            onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
            placeholder={isEnglish ? "john@example.com" : "giannis@example.com"}
            className="h-11 border-border bg-background"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-sm font-medium text-foreground flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {isEnglish ? "Phone" : "Τηλέφωνο"} *
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="+30 694 123 4567"
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
            onClick={handleReset}
            disabled={isSubmitting}
            className="flex-1 h-11 border-border"
          >
            {isEnglish ? "Back" : "Πίσω"}
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {isEnglish ? "Loading..." : "Φόρτωση..."}
              </>
            ) : (
              isEnglish ? "See Results" : "Δείτε τα Αποτελέσματα"
            )}
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <div className="bg-background p-6 rounded-lg shadow-md max-w-md mx-auto border border-border">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {translate("Renovation Cost Calculator")}
      </h2>

      {showResults ? (
        <ResultsSection />
      ) : showContactForm ? (
        <ContactForm />
      ) : (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 h-10 bg-muted p-1">
              <TabsTrigger 
                value="renovation" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-sm"
              >
                {translate("General Renovation")}
              </TabsTrigger>
              <TabsTrigger 
                value="windows" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-sm"
              >
                {translate("Doors & Windows")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="renovation" className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="area" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Area (m²)" : "Εμβαδόν (τ.μ.)"}
                </Label>
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  min="1"
                  className="h-10 border-border bg-background"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bathrooms" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Bathrooms" : "Μπάνια"}
                </Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  min="0"
                  className="h-10 border-border bg-background"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="kitchens" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Kitchens" : "Κουζίνες"}
                </Label>
                <Input
                  id="kitchens"
                  type="number"
                  value={kitchens}
                  onChange={(e) => setKitchens(Number(e.target.value))}
                  min="0"
                  className="h-10 border-border bg-background"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="rooms" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Rooms" : "Δωμάτια"}
                </Label>
                <Input
                  id="rooms"
                  type="number"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  min="0"
                  className="h-10 border-border bg-background"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="buildingAge" className="text-sm font-medium text-foreground">
                  {isEnglish ? "Building Year" : "Έτος Κατασκευής"}
                </Label>
                <Input
                  id="buildingAge"
                  type="number"
                  value={buildingAge}
                  onChange={(e) => setBuildingAge(Number(e.target.value))}
                  min="1900"
                  max="2024"
                  className="h-10 border-border bg-background"
                />
              </div>

              <div className="space-y-1.5 relative z-30">
                <Label className="text-sm font-medium text-foreground">
                  {isEnglish ? "Pool Type" : "Τύπος Πισίνας"}
                </Label>
                <Select
                  value={poolType}
                  onValueChange={(value) => setPoolType(value as "none" | "concrete" | "polyester" | "liner")}
                >
                  <SelectTrigger className="h-10 w-full border-border bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={5} className="z-[100] bg-background border-border">
                    <SelectItem value="none">{isEnglish ? "None" : "Καμία"}</SelectItem>
                    <SelectItem value="concrete">{isEnglish ? "Concrete" : "Μπετόν"}</SelectItem>
                    <SelectItem value="polyester">{isEnglish ? "Polyester" : "Πολυεστερική"}</SelectItem>
                    <SelectItem value="liner">{isEnglish ? "Liner" : "Με επένδυση"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {poolType !== "none" && (
                <div className="space-y-1.5">
                  <Label htmlFor="poolSize" className="text-sm font-medium text-foreground">
                    {isEnglish ? "Pool Size (m²)" : "Μέγεθος Πισίνας (τ.μ.)"}
                  </Label>
                  <Input
                    id="poolSize"
                    type="number"
                    value={poolSize}
                    onChange={(e) => setPoolSize(Number(e.target.value))}
                    min="1"
                    max="50"
                    className="h-10 border-border bg-background"
                  />
                </div>
              )}

              <div className="space-y-3 relative z-10">
                <Label className="text-sm font-medium text-foreground">
                  {isEnglish ? "Categories" : "Κατηγορίες"}
                </Label>
                {Object.entries(categories).map(([key, value]) => {
                  const categoryIcons: Record<string, React.ReactNode> = {
                    bathroom: <Bath className="w-4 h-4 text-primary" />,
                    kitchen: <ChefHat className="w-4 h-4 text-primary" />,
                    flooring: <Layers className="w-4 h-4 text-primary" />,
                    electrical: <Zap className="w-4 h-4 text-primary" />,
                    structural: <Building2 className="w-4 h-4 text-primary" />,
                    painting: <Paintbrush className="w-4 h-4 text-primary" />,
                  }
                  const categoryLabels: Record<string, string> = {
                    bathroom: "Μπάνιο",
                    kitchen: "Κουζίνα",
                    flooring: "Δάπεδα",
                    electrical: "Ηλεκτρολογικά",
                    structural: "Δομικά",
                    painting: "Βαφή",
                  }
                  return (
                    <div key={key} className="flex items-center gap-3">
                      <Checkbox
                        id={key}
                        checked={value}
                        onCheckedChange={(checked) => {
                          setCategories((prev) => ({ ...prev, [key]: checked === true }))
                        }}
                        className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      {categoryIcons[key]}
                      <Label htmlFor={key} className="cursor-pointer text-sm text-foreground">
                        {isEnglish ? key.charAt(0).toUpperCase() + key.slice(1) : categoryLabels[key]}
                      </Label>
                    </div>
                  )
                })}
              </div>

              <div className="space-y-1.5 relative z-30">
                <Label className="text-sm font-medium text-foreground">
                  {isEnglish ? "Quality" : "Ποιότητα"}
                </Label>
                <Select
                  value={renovationQuality}
                  onValueChange={(value) => setRenovationQuality(value as "basic" | "midRange" | "premium")}
                >
                  <SelectTrigger className="h-10 w-full border-border bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={5} className="z-[100] bg-background border-border">
                    {poolType !== "liner" && poolType !== "polyester" && (
                      <SelectItem value="basic">{isEnglish ? "Basic" : "Βασική"}</SelectItem>
                    )}
                    {poolType !== "polyester" && (
                      <SelectItem value="midRange">{isEnglish ? "Mid-Range" : "Μεσαία"}</SelectItem>
                    )}
                    <SelectItem value="premium">{isEnglish ? "Premium" : "Premium"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGetQuote}
                className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {translate("Get Quote")}
              </Button>
            </TabsContent>

            <TabsContent value="windows" className="space-y-4">
              {renderInput("Windows", windows, setWindows)}
              {renderInput("Balcony Doors", balconyDoors, setBalconyDoors)}
              {renderInput("Interior Doors", interiorDoors, setInteriorDoors)}
              {renderInput("Main Entrance", mainEntrance, setMainEntrance)}

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">{translate("Material")}</Label>
                <Select value={material} onValueChange={(value) => setMaterial(value as Material)}>
                  <SelectTrigger className="h-10 border-border bg-background">
                    <SelectValue>{isEnglish ? material.toUpperCase() : translate(material)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {materialOptions.map((m) => (
                      <SelectItem key={m} value={m}>
                        {isEnglish ? m.toUpperCase() : translate(m)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">{translate("Quality")}</Label>
                <Select value={windowsQuality} onValueChange={(value) => setWindowsQuality(value as Quality)}>
                  <SelectTrigger className="h-10 border-border bg-background">
                    <SelectValue>{isEnglish ? windowsQuality.toUpperCase() : translate(windowsQuality)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {qualityOptions.map((q) => (
                      <SelectItem key={q} value={q}>
                        {isEnglish ? q.toUpperCase() : translate(q)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGetQuote}
                className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {translate("Get Quote")}
              </Button>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
