"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  Bath,
  Building,
  CheckCircle,
  CheckCircle2,
  Layers,
  Loader2,
  Paintbrush,
  Plug,
  UtensilsCrossed,
  User,
  Mail,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/language-context"

const materialOptions = ["aluminum", "pvc", "wood"] as const
const qualityOptions = ["basic", "midRange", "premium"] as const

type Material = (typeof materialOptions)[number]
type Quality = (typeof qualityOptions)[number]
type PoolType = "none" | "liner" | "polyester" | "concrete"

const renovationRates = {
  full: { basic: 440, midRange: 590, premium: 760 },
  bathroom: { basic: 4200, midRange: 6200, premium: 8800 },
  kitchen: { basic: 6500, midRange: 9500, premium: 13500 },
  flooring: { basic: 28, midRange: 45, premium: 68 },
  electrical: { basic: 32, midRange: 48, premium: 72 },
  structural: { basic: 55, midRange: 90, premium: 140 },
  painting: { basic: 9, midRange: 13, premium: 18 },
} as const

const poolCostsPerM2: Record<PoolType, Partial<Record<Quality, number>>> = {
  none: { basic: 0, midRange: 0, premium: 0 },
  liner: { midRange: 700, premium: 850 },
  polyester: { premium: 950 },
  concrete: { basic: 900, midRange: 1100, premium: 1350 },
}

const windowCosts: Record<string, Record<Material, Record<Quality, number>>> = {
  window: {
    aluminum: { basic: 650, midRange: 850, premium: 1050 },
    pvc: { basic: 520, midRange: 700, premium: 900 },
    wood: { basic: 780, midRange: 980, premium: 1250 },
  },
  balconyDoor: {
    aluminum: { basic: 1200, midRange: 1500, premium: 1850 },
    pvc: { basic: 1000, midRange: 1300, premium: 1600 },
    wood: { basic: 1350, midRange: 1700, premium: 2100 },
  },
  interiorDoor: {
    aluminum: { basic: 420, midRange: 560, premium: 720 },
    pvc: { basic: 320, midRange: 450, premium: 620 },
    wood: { basic: 280, midRange: 430, premium: 650 },
  },
  mainEntrance: {
    aluminum: { basic: 1450, midRange: 1850, premium: 2350 },
    pvc: { basic: 1250, midRange: 1650, premium: 2100 },
    wood: { basic: 1550, midRange: 1950, premium: 2450 },
  },
}

const translations: Record<string, string> = {
  "Renovation Cost Calculator": "Υπολογιστής Κόστους Ανακαίνισης",
  Windows: "Παράθυρα",
  "Balcony Doors": "Μπαλκονόπορτες",
  "Interior Doors": "Εσωτερικές Πόρτες",
  "Main Entrance": "Κεντρική Είσοδος",
  Material: "Υλικό",
  Quality: "Ποιότητα",
  "Estimated Cost:": "Εκτιμώμενο Κόστος:",
  "Estimated Range:": "Εκτιμώμενο Εύρος:",
  "Calculate your renovation cost in 1 minute!": "Υπολογίστε το κόστος της ανακαίνισής σας σε 1 λεπτό!",
  "Request a Quote": "Ζητήστε Προσφορά",
  Calculate: "Υπολογισμός",
  "Get Quote": "Λάβετε Προσφορά",
  aluminum: "Αλουμίνιο",
  pvc: "PVC",
  wood: "Ξύλο",
  basic: "Βασική",
  midRange: "Μεσαία",
  premium: "Premium",
  "General Renovation": "Γενική Ανακαίνιση",
  "Doors & Windows": "Πόρτες & Παράθυρα",
  "Total Estimated Cost:": "Συνολικό Εκτιμώμενο Κόστος:",
  "Total Estimated Range:": "Συνολικό Εκτιμώμενο Εύρος:",
  "Why work with us?": "Γιατί να συνεργαστείτε μαζί μας;",
  "Top Quality Products & Materials": "Προϊόντα & Υλικά Κορυφαίας Ποιότητας",
  "Let us transform your vision into reality": "Αφήστε μας να μετατρέψουμε την όρασή σας σε πραγματικότητα",
  "Modern solutions for the ideal pool": "Σύγχρονες λύσεις για την ιδανική πισίνα",
  Bathroom: "Μπάνιο",
  Kitchen: "Κουζίνα",
  Flooring: "Δάπεδα",
  Electrical: "Ηλεκτρολογικά",
  Structural: "Δομικά",
  Painting: "Βαφή",
  Categories: "Κατηγορίες",
  None: "Καμία",
  Concrete: "Μπετόν",
  Polyester: "Πολυεστερική",
  Liner: "Με επένδυση",
  Basic: "Βασική",
  "Mid-Range": "Μεσαία",
}

// Category descriptions - exactly as shown in the image
const categoryDescriptions = {
  bathroom: {
    en: "Full bathroom renovation with basic plumbing, tiles, sanitary ware and finishing.",
    el: "Πλήρης ανακαίνιση μπάνιου με βασικές υδραυλικές εργασίες, πλακίδια, είδη υγιεινής και φινίρισμα.",
  },
  kitchen: {
    en: "Kitchen upgrade with cabinets, countertops, basic plumbing and electrical adjustments.",
    el: "Αναβάθμιση κουζίνας με ντουλάπια, πάγκο, βασικές υδραυλικές και ηλεκτρολογικές προσαρμογές.",
  },
  flooring: {
    en: "Removal of old floor where required and installation of new flooring.",
    el: "Αποξήλωση παλιού δαπέδου όπου απαιτείται και τοποθέτηση νέου δαπέδου.",
  },
  electrical: {
    en: "Indicative upgrade of electrical installation, panel, sockets, switches and lighting.",
    el: "Ενδεικτική αναβάθμιση ηλεκτρολογικής εγκατάστασης, πίνακα, πριζών, διακοπτών και φωτισμού.",
  },
  structural: {
    en: "Minor structural interventions, repairs, plastering, masonry and related works.",
    el: "Μικρές δομικές επεμβάσεις, επισκευές, σοβάδες, τοιχοποιίες και συναφείς εργασίες.",
  },
  painting: {
    en: "Interior painting with quality paints.",
    el: "Εσωτερική βαφή με ποιοτικά χρώματα.",
  },
}

type EstimateRange = {
  min: number
  max: number
}

type ContactInfo = {
  name: string
  email: string
  phone: string
}

export default function RenovationCostCalculator() {
  const { isEnglish } = useLanguage()

  const [activeTab, setActiveTab] = useState("renovation")
  const [showResults, setShowResults] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  // Contact form state
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  })

  const [area, setArea] = useState<string>("50")
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [rooms, setRooms] = useState(2)
  const [buildingAge, setBuildingAge] = useState(new Date().getFullYear() - 20)
  const [poolType, setPoolType] = useState<PoolType>("none")
  const [poolSize, setPoolSize] = useState(18)
  const [categories, setCategories] = useState({
    bathroom: false,
    kitchen: false,
    flooring: false,
    electrical: false,
    structural: false,
    painting: false,
  })
  const [renovationQuality, setRenovationQuality] = useState<Quality>("basic")
  const [renovationCost, setRenovationCost] = useState<string | null>(null)
  const [renovationRange, setRenovationRange] = useState<EstimateRange | null>(null)

  const [material, setMaterial] = useState<Material>("aluminum")
  const [windowsQuality, setWindowsQuality] = useState<Quality>("basic")
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState<string | null>(null)
  const [windowsRange, setWindowsRange] = useState<EstimateRange | null>(null)

  const [totalCost, setTotalCost] = useState<string | null>(null)
  const [totalRange, setTotalRange] = useState<EstimateRange | null>(null)

  const translate = (text: string) => (isEnglish ? text : translations[text] || text)

  const resetResults = () => {
    setShowResults(false)
    setShowContactForm(false)
    setContactSubmitted(false)
  }

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

  const windowsDependencies = useMemo(
    () => [material, windowsQuality, windows, balconyDoors, interiorDoors, mainEntrance],
    [material, windowsQuality, windows, balconyDoors, interiorDoors, mainEntrance],
  )

  useEffect(() => {
    const renovationCostNumber = renovationCost ? Number.parseFloat(renovationCost) : 0
    const windowsCostNumber = windowsCost ? Number.parseFloat(windowsCost) : 0
    const newTotalCost = renovationCostNumber + windowsCostNumber

    setTotalCost(newTotalCost > 0 ? newTotalCost.toFixed(2) : null)

    if (renovationRange || windowsRange) {
      const min = (renovationRange?.min || 0) + (windowsRange?.min || 0)
      const max = (renovationRange?.max || 0) + (windowsRange?.max || 0)
      setTotalRange(min > 0 || max > 0 ? { min, max } : null)
    } else {
      setTotalRange(null)
    }
  }, [renovationCost, windowsCost, renovationRange, windowsRange])

  useEffect(() => {
    const cost =
      windows * windowCosts.window[material][windowsQuality] +
      balconyDoors * windowCosts.balconyDoor[material][windowsQuality] +
      interiorDoors * windowCosts.interiorDoor[material][windowsQuality] +
      mainEntrance * windowCosts.mainEntrance[material][windowsQuality]

    setWindowsCost(cost > 0 ? cost.toFixed(2) : null)

    if (cost > 0) {
      setWindowsRange({
        min: cost * 0.92,
        max: cost * 1.12,
      })
    } else {
      setWindowsRange(null)
    }
  }, windowsDependencies)

  const getAgeMultiplier = (yearBuilt: number) => {
    const currentYear = new Date().getFullYear()
    const buildingYears = currentYear - yearBuilt

    if (buildingYears > 40) return 1.12
    if (buildingYears >= 20) return 1.06
    return 1.0
  }

  const getSizeMultiplier = (numericArea: number) => {
    if (numericArea < 50) return 1.08
    if (numericArea > 120) return 0.95
    return 1.0
  }

  const calculateRenovationCost = () => {
    const numericArea = Number(area)

    if (!numericArea || numericArea <= 0) {
      setRenovationCost(null)
      setRenovationRange(null)
      return
    }

    const selectedCount = Object.values(categories).filter(Boolean).length
    const quality = renovationQuality

    let total = 0

    const isFullRenovation =
      selectedCount >= 4 ||
      (categories.bathroom &&
        categories.kitchen &&
        categories.flooring &&
        categories.electrical)

    if (isFullRenovation) {
      total = numericArea * renovationRates.full[quality]
    } else {
      if (categories.bathroom) total += bathrooms * renovationRates.bathroom[quality]
      if (categories.kitchen) total += kitchens * renovationRates.kitchen[quality]
      if (categories.flooring) total += numericArea * renovationRates.flooring[quality]
      if (categories.electrical) {
        const electricalAreaFactor = rooms > 0 ? Math.max(1, rooms / 2) : 1
        total += numericArea * renovationRates.electrical[quality] * electricalAreaFactor
      }
      if (categories.structural) total += numericArea * renovationRates.structural[quality]
      if (categories.painting) total += numericArea * renovationRates.painting[quality]
    }

    total = total * getAgeMultiplier(buildingAge) * getSizeMultiplier(numericArea)

    if (poolType !== "none" && poolSize > 0) {
      const poolRate = poolCostsPerM2[poolType][quality] || 0
      total += poolRate * poolSize
    }

    setRenovationCost(total.toFixed(2))
    setRenovationRange({
      min: total * 0.9,
      max: total * 1.12,
    })
  }

  const handleGetQuote = () => {
    calculateRenovationCost()
    setShowContactForm(true)
  }

  const handleWindowsGetQuote = () => {
    setShowContactForm(true)
  }

  const handleContactSubmit = async () => {
    if (!contact.name || !contact.email || !contact.phone) {
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare data for API
      const selectedCategories = Object.entries(categories)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(", ")

      const requestData = {
        contact: {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        },
        selections: {
          renovation: {
            area: Number(area),
            bathrooms,
            kitchens,
            rooms,
            buildingAge,
            quality: renovationQuality,
            categories: selectedCategories,
            poolType,
            poolSize: poolType !== "none" ? poolSize : 0,
            renovationCost: renovationCost ? parseFloat(renovationCost) : 0,
          },
          windows: {
            windows,
            balconyDoors,
            interiorDoors,
            mainEntrance,
            material,
            quality: windowsQuality,
            windowsCost: windowsCost ? parseFloat(windowsCost) : 0,
          },
          totalCost: totalCost ? parseFloat(totalCost) : (renovationCost ? parseFloat(renovationCost) : 0) + (windowsCost ? parseFloat(windowsCost) : 0),
        },
        language: isEnglish ? "en" : "el",
      }

      await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      })

      setContactSubmitted(true)
      setShowResults(true)
    } catch (error) {
      console.error("Error submitting contact:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewCalculation = () => {
    setShowResults(false)
    setShowContactForm(false)
    setContactSubmitted(false)
    setContact({ name: "", email: "", phone: "" })
    setRenovationCost(null)
    setRenovationRange(null)
    setCategories({
      bathroom: false,
      kitchen: false,
      flooring: false,
      electrical: false,
      structural: false,
      painting: false,
    })
  }

  const renderInput = (label: string, value: number, onChange: (value: number) => void) => (
    <div>
      <Label htmlFor={label}>{translate(label)}</Label>
      <Input
        id={label}
        type="number"
        value={value}
        onChange={(e) => {
          onChange(Number.parseInt(e.target.value, 10) || 0)
          resetResults()
        }}
        min="0"
        className="w-full mb-2"
      />
    </div>
  )

  // Contact Form Component
  const ContactForm = () => (
    <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
      <h3 className="font-semibold text-primary mb-4 text-center">
        {isEnglish ? "Enter your details to see the results" : "Συμπληρώστε τα στοιχεία σας για να δείτε τα αποτελέσματα"}
      </h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="contact-name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {isEnglish ? "Full Name" : "Ονοματεπώνυμο"}
          </Label>
          <Input
            id="contact-name"
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            placeholder={isEnglish ? "Enter your full name" : "Εισάγετε το ονοματεπώνυμό σας"}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="contact-email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            placeholder={isEnglish ? "Enter your email" : "Εισάγετε το email σας"}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="contact-phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {isEnglish ? "Phone" : "Τηλέφωνο"}
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            placeholder={isEnglish ? "Enter your phone number" : "Εισάγετε το τηλέφωνό σας"}
            className="w-full"
          />
        </div>
        <Button
          onClick={handleContactSubmit}
          disabled={isSubmitting || !contact.name || !contact.email || !contact.phone}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {isEnglish ? "Submitting..." : "Υποβολή..."}
            </>
          ) : (
            isEnglish ? "See Results" : "Δείτε τα Αποτελέσματα"
          )}
        </Button>
      </div>
    </div>
  )

  // Results Component - Only shown after contact submission
  const ResultsDisplay = () => (
    <div className="mt-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
        <p className="text-green-800 text-sm">
          {isEnglish
            ? `Thank you ${contact.name}! Here is your personalized quote.`
            : `Ευχαριστούμε ${contact.name}! Ιδού η εξατομικευμένη προσφορά σας.`}
        </p>
      </div>

      {renovationCost && Number(renovationCost) > 0 && (
        <div className="p-4 bg-muted rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground mb-1">
            {isEnglish ? "General Renovation:" : "Γενική Ανακαίνιση:"}
          </p>
          <p className="text-2xl font-bold text-primary">
            {isEnglish ? `€${Number(renovationCost).toLocaleString()}` : `${Number(renovationCost).toLocaleString()}€`}
          </p>
          {renovationRange && (
            <p className="text-sm text-muted-foreground mt-1">
              {translate("Estimated Range:")}{" "}
              {isEnglish
                ? `€${renovationRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})} - €${renovationRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}`
                : `${renovationRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})}€ - ${renovationRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}€`}
            </p>
          )}
        </div>
      )}

      {windowsCost && Number(windowsCost) > 0 && (
        <div className="p-4 bg-muted rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground mb-1">
            {isEnglish ? "Doors & Windows:" : "Πόρτες & Παράθυρα:"}
          </p>
          <p className="text-2xl font-bold text-primary">
            {isEnglish ? `€${Number(windowsCost).toLocaleString()}` : `${Number(windowsCost).toLocaleString()}€`}
          </p>
          {windowsRange && (
            <p className="text-sm text-muted-foreground mt-1">
              {translate("Estimated Range:")}{" "}
              {isEnglish
                ? `€${windowsRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})} - €${windowsRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}`
                : `${windowsRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})}€ - ${windowsRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}€`}
            </p>
          )}
        </div>
      )}

      {totalCost && totalRange && (renovationCost && windowsCost) && (
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
          <p className="text-lg font-bold text-foreground">{translate("Total Estimated Cost:")}</p>
          <p className="text-3xl font-bold text-primary">
            {isEnglish ? `€${Number(totalCost).toLocaleString()}` : `${Number(totalCost).toLocaleString()}€`}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {translate("Total Estimated Range:")}{" "}
            {isEnglish
              ? `€${totalRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})} - €${totalRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}`
              : `${totalRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})}€ - ${totalRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}€`}
          </p>
        </div>
      )}

      <div className="flex gap-2">
        <Button
          onClick={handleNewCalculation}
          variant="outline"
          className="flex-1"
        >
          {isEnglish ? "New Calculation" : "Νέος Υπολογισμός"}
        </Button>
        <Button
          onClick={() => (window.location.href = isEnglish ? "/en/appointment" : "/el/appointment")}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {translate("Request a Quote")}
        </Button>
      </div>
    </div>
  )

  return (
    <div className="calculator mx-auto max-w-md rounded-lg bg-background p-6 shadow-md border border-border">
      <div className="mb-4 flex flex-col items-center gap-3">
        <Image
          src="/images/faiacon-logo.jpg"
          alt="Faiacon Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <h2 className="text-2xl font-bold text-primary text-center">{translate("Renovation Cost Calculator")}</h2>
      </div>

      <p className="mb-4 text-lg text-muted-foreground">{translate("Calculate your renovation cost in 1 minute!")}</p>

      <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); resetResults(); }} className="w-full">
        <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted">
          <TabsTrigger value="renovation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {translate("General Renovation")}
          </TabsTrigger>
          <TabsTrigger value="windows" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {translate("Doors & Windows")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="renovation" className="space-y-4">
          {!showContactForm && !showResults && (
            <>
              <p className="leading-relaxed text-sm text-muted-foreground">
                {isEnglish
                  ? "If you dream of building or renovating your home or business space, we can guide you from concept to completion with realistic cost estimates and quality solutions."
                  : "Αν ονειρεύεστε να χτίσετε ή να ανακαινίσετε το σπίτι ή τον επαγγελματικό σας χώρο, μπορούμε να σας καθοδηγήσουμε από τη μελέτη έως την ολοκλήρωση με ρεαλιστικές εκτιμήσεις κόστους και ποιοτικές λύσεις."}
              </p>

              <div>
                <Label htmlFor="area">{isEnglish ? "Area (m²)" : "Εμβαδόν (τ.μ.)"}</Label>
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value)
                    resetResults()
                  }}
                  min="1"
                  className="w-full mb-2"
                />
              </div>

              <div>
                <Label htmlFor="bathrooms">{isEnglish ? "Bathrooms" : "Μπάνια"}</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={bathrooms}
                  onChange={(e) => {
                    setBathrooms(Number(e.target.value) || 0)
                    resetResults()
                  }}
                  min="0"
                  className="w-full mb-2"
                />
              </div>

              <div>
                <Label htmlFor="kitchens">{isEnglish ? "Kitchens" : "Κουζίνες"}</Label>
                <Input
                  id="kitchens"
                  type="number"
                  value={kitchens}
                  onChange={(e) => {
                    setKitchens(Number(e.target.value) || 0)
                    resetResults()
                  }}
                  min="0"
                  className="w-full mb-2"
                />
              </div>

              <div>
                <Label htmlFor="rooms">{isEnglish ? "Rooms" : "Δωμάτια"}</Label>
                <Input
                  id="rooms"
                  type="number"
                  value={rooms}
                  onChange={(e) => {
                    setRooms(Number(e.target.value) || 0)
                    resetResults()
                  }}
                  min="0"
                  className="w-full mb-2"
                />
              </div>

              <div>
                <Label htmlFor="buildingAge">{isEnglish ? "Building Year" : "Έτος Κατασκευής"}</Label>
                <Input
                  id="buildingAge"
                  type="number"
                  value={buildingAge}
                  onChange={(e) => {
                    setBuildingAge(Number(e.target.value) || new Date().getFullYear())
                    resetResults()
                  }}
                  min="1900"
                  max={new Date().getFullYear().toString()}
                  className="w-full mb-2"
                />
              </div>

              <div className="relative z-30">
                <Label>{isEnglish ? "Pool Type" : "Τύπος Πισίνας"}</Label>
                <Select
                  value={poolType}
                  onValueChange={(value) => {
                    setPoolType(value as PoolType)
                    resetResults()
                  }}
                >
                  <SelectTrigger className="mb-2 w-full whitespace-nowrap overflow-hidden bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={5} className="z-[100] bg-background">
                    <SelectItem value="none">{translate("None")}</SelectItem>
                    <SelectItem value="concrete">{translate("Concrete")}</SelectItem>
                    <SelectItem value="polyester">{translate("Polyester")}</SelectItem>
                    <SelectItem value="liner">{translate("Liner")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {poolType !== "none" && (
                <div>
                  <Label htmlFor="poolSize">{isEnglish ? "Pool Size (m²)" : "Μέγεθος Πισίνας (τ.μ.)"}</Label>
                  <Input
                    id="poolSize"
                    type="number"
                    value={poolSize}
                    onChange={(e) => {
                      setPoolSize(Number(e.target.value) || 0)
                      resetResults()
                    }}
                    min="1"
                    max="100"
                    className="w-full mb-2"
                  />
                </div>
              )}

              <div className="relative z-10">
                <Label>{translate("Categories")}</Label>
                <div className="space-y-2 mt-2">
                  {[
                    { key: "bathroom", icon: Bath, label: translate("Bathroom") },
                    { key: "kitchen", icon: UtensilsCrossed, label: translate("Kitchen") },
                    { key: "flooring", icon: Layers, label: translate("Flooring") },
                    { key: "electrical", icon: Plug, label: translate("Electrical") },
                    { key: "structural", icon: Building, label: translate("Structural") },
                    { key: "painting", icon: Paintbrush, label: translate("Painting") },
                  ].map(({ key, icon: Icon, label }) => (
                    <div 
                      key={key} 
                      className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                        categories[key as keyof typeof categories] 
                          ? "border-primary bg-primary/5" 
                          : "border-border bg-background hover:bg-muted"
                      }`}
                      onClick={() => {
                        setCategories((prev) => ({ ...prev, [key]: !prev[key as keyof typeof categories] }))
                        resetResults()
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={key}
                          checked={categories[key as keyof typeof categories]}
                          onCheckedChange={(checked) => {
                            setCategories((prev) => ({ ...prev, [key]: checked === true }))
                            resetResults()
                          }}
                          className="mt-0.5"
                        />
                        <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <Label htmlFor={key} className="font-medium cursor-pointer">{label}</Label>
                          <p className="text-xs text-muted-foreground mt-1">
                            {isEnglish 
                              ? categoryDescriptions[key as keyof typeof categoryDescriptions].en
                              : categoryDescriptions[key as keyof typeof categoryDescriptions].el}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-30">
                <Label>{translate("Quality")}</Label>
                <Select
                  value={renovationQuality}
                  onValueChange={(value) => {
                    setRenovationQuality(value as Quality)
                    resetResults()
                  }}
                >
                  <SelectTrigger className="mb-2 w-full whitespace-nowrap overflow-hidden bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" sideOffset={5} className="z-[100] bg-background">
                    {poolType !== "liner" && poolType !== "polyester" && (
                      <SelectItem value="basic">{translate("Basic")}</SelectItem>
                    )}
                    {poolType !== "polyester" && (
                      <SelectItem value="midRange">{translate("Mid-Range")}</SelectItem>
                    )}
                    <SelectItem value="premium">{translate("Premium")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleGetQuote} className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {translate("Get Quote")}
              </Button>

              <div className="rounded-xl bg-muted p-6 mt-4">
                <h3 className="mb-4 text-xl font-bold text-primary">{translate("Why work with us?")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{translate("Top Quality Products & Materials")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {isEnglish
                          ? "We use durable materials and practical construction methods that balance quality, aesthetics, and long-term value."
                          : "Χρησιμοποιούμε ανθεκτικά υλικά και πρακτικές κατασκευαστικές λύσεις που ισορροπούν ποιότητα, αισθητική και μακροχρόνια αξία."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-primary/5 p-6">
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {translate("Let us transform your vision into reality")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish
                    ? "With a focus on innovation, precision, and affordability, we design and build spaces that fit your needs and style."
                    : "Με γνώμονα την καινοτομία, την ακρίβεια και την προσιτή τιμή, σχεδιάζουμε και κατασκευάζουμε χώρους που ταιριάζουν στις ανάγκες και το στυλ σας."}
                </p>
              </div>

              <p className="text-center text-muted-foreground">{translate("Modern solutions for the ideal pool")}</p>
            </>
          )}

          {showContactForm && !contactSubmitted && <ContactForm />}
          {contactSubmitted && showResults && <ResultsDisplay />}
        </TabsContent>

        <TabsContent value="windows" className="space-y-4">
          {!showContactForm && !showResults && (
            <>
              {renderInput("Windows", windows, setWindows)}
              {renderInput("Balcony Doors", balconyDoors, setBalconyDoors)}
              {renderInput("Interior Doors", interiorDoors, setInteriorDoors)}
              {renderInput("Main Entrance", mainEntrance, setMainEntrance)}

              <div>
                <Label>{translate("Material")}</Label>
                <Select
                  value={material}
                  onValueChange={(value) => {
                    setMaterial(value as Material)
                    resetResults()
                  }}
                >
                  <SelectTrigger className="mb-2 bg-background">
                    <SelectValue>{isEnglish ? material.toUpperCase() : translate(material)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    {materialOptions.map((m) => (
                      <SelectItem key={m} value={m}>
                        {isEnglish ? m.toUpperCase() : translate(m)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>{translate("Quality")}</Label>
                <Select
                  value={windowsQuality}
                  onValueChange={(value) => {
                    setWindowsQuality(value as Quality)
                    resetResults()
                  }}
                >
                  <SelectTrigger className="mb-2 bg-background">
                    <SelectValue>{isEnglish ? windowsQuality.toUpperCase() : translate(windowsQuality)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    {qualityOptions.map((q) => (
                      <SelectItem key={q} value={q}>
                        {isEnglish ? q.toUpperCase() : translate(q)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleWindowsGetQuote} className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {translate("Get Quote")}
              </Button>
            </>
          )}

          {showContactForm && !contactSubmitted && <ContactForm />}
          {contactSubmitted && showResults && <ResultsDisplay />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Also export as named export for backwards compatibility
export { RenovationCostCalculator }
