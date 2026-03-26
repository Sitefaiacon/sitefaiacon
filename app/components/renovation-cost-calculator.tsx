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

  // Constants for Renovation Calculator - Realistic Greek market rates
  // Full renovation rates per m² (when 4+ categories selected)
  const fullRenovationRates = { basic: 440, midRange: 590, premium: 760 }
  
  // Individual category rates
  const renovationRates = {
    bathroom: { basic: 4200, midRange: 6200, premium: 8800 }, // per bathroom
    kitchen: { basic: 6500, midRange: 9500, premium: 13500 }, // per kitchen
    flooring: { basic: 28, midRange: 45, premium: 68 }, // per m²
    electrical: { basic: 32, midRange: 48, premium: 72 }, // per m²
    structural: { basic: 55, midRange: 90, premium: 140 }, // per m²
    painting: { basic: 9, midRange: 13, premium: 18 }, // per m²
  }
  
  const poolCostsPerM2 = {
    none: { basic: 0, midRange: 0, premium: 0 },
    liner: { basic: 0, midRange: 700, premium: 850 },
    polyester: { basic: 0, midRange: 0, premium: 950 },
    concrete: { basic: 900, midRange: 1100, premium: 1350 },
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

  // Helper functions for multipliers
  const getAgeMultiplier = (yearBuilt: number) => {
    const currentYear = new Date().getFullYear()
    const buildingYears = currentYear - yearBuilt
    if (buildingYears > 40) return 1.12
    if (buildingYears >= 20) return 1.06
    return 1
  }

  const getSizeMultiplier = (areaSize: number) => {
    if (areaSize < 50) return 1.08
    if (areaSize > 120) return 0.95
    return 1
  }

  // Calculation functions
  const calculateRenovationCost = () => {
    const numericArea = Number(area)
    if (!numericArea || numericArea <= 0) return "0.00"

    const selectedCount = Object.values(categories).filter(Boolean).length
    const quality = renovationQuality as "basic" | "midRange" | "premium"
    
    let subtotal = 0

    // Check if it's a full renovation (4+ categories or specific combination)
    const isFullRenovation =
      selectedCount >= 4 ||
      (categories.bathroom && categories.kitchen && categories.flooring && categories.electrical)

    if (isFullRenovation) {
      // Full renovation uses the per-m² rate
      subtotal = numericArea * fullRenovationRates[quality]
    } else {
      // Partial renovation - calculate each category separately
      if (categories.bathroom) {
        subtotal += bathrooms * renovationRates.bathroom[quality]
      }
      if (categories.kitchen) {
        subtotal += kitchens * renovationRates.kitchen[quality]
      }
      if (categories.flooring) {
        subtotal += numericArea * renovationRates.flooring[quality]
      }
      if (categories.electrical) {
        const electricalAreaFactor = rooms > 0 ? Math.max(1, rooms / 2) : 1
        subtotal += numericArea * renovationRates.electrical[quality] * electricalAreaFactor
      }
      if (categories.structural) {
        subtotal += numericArea * renovationRates.structural[quality]
      }
      if (categories.painting) {
        subtotal += numericArea * renovationRates.painting[quality]
      }
    }

    let total = subtotal

    // Apply age multiplier
    total *= getAgeMultiplier(buildingAge)

    // Apply size multiplier
    total *= getSizeMultiplier(numericArea)

    // Add pool cost if applicable
    if (poolType !== "none" && poolSize > 0) {
      const poolRate = poolCostsPerM2[poolType as keyof typeof poolCostsPerM2][quality] || 0
      if (poolRate > 0) {
        total += poolRate * poolSize
      }
    }

    return total.toFixed(2)
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

  // Calculate breakdown for display
  const getBreakdown = () => {
    const numericArea = Number(area)
    const quality = renovationQuality as "basic" | "midRange" | "premium"
    const breakdown: { label: string; value: number; note?: string }[] = []
    
    const selectedCount = Object.values(categories).filter(Boolean).length
    const isFullRenovation =
      selectedCount >= 4 ||
      (categories.bathroom && categories.kitchen && categories.flooring && categories.electrical)

    if (isFullRenovation) {
      breakdown.push({
        label: isEnglish ? "Full Renovation" : "Ολική Ανακαίνιση",
        value: numericArea * fullRenovationRates[quality],
        note: isEnglish ? `${numericArea}m² x ${fullRenovationRates[quality]}€/m²` : `${numericArea}τ.μ. x ${fullRenovationRates[quality]}€/τ.μ.`
      })
    } else {
      if (categories.bathroom) {
        breakdown.push({
          label: isEnglish ? "Bathroom" : "Μπάνιο",
          value: bathrooms * renovationRates.bathroom[quality],
          note: `${bathrooms} x ${formatCurrency(renovationRates.bathroom[quality])}`
        })
      }
      if (categories.kitchen) {
        breakdown.push({
          label: isEnglish ? "Kitchen" : "Κουζίνα",
          value: kitchens * renovationRates.kitchen[quality],
          note: `${kitchens} x ${formatCurrency(renovationRates.kitchen[quality])}`
        })
      }
      if (categories.flooring) {
        breakdown.push({
          label: isEnglish ? "Flooring" : "Δάπεδα",
          value: numericArea * renovationRates.flooring[quality],
          note: isEnglish ? `${numericArea}m² x ${renovationRates.flooring[quality]}€/m²` : `${numericArea}τ.μ. x ${renovationRates.flooring[quality]}€/τ.μ.`
        })
      }
      if (categories.electrical) {
        const electricalAreaFactor = rooms > 0 ? Math.max(1, rooms / 2) : 1
        breakdown.push({
          label: isEnglish ? "Electrical" : "Ηλεκτρολογικά",
          value: numericArea * renovationRates.electrical[quality] * electricalAreaFactor,
          note: isEnglish ? `${numericArea}m² x ${renovationRates.electrical[quality]}€/m²` : `${numericArea}τ.μ. x ${renovationRates.electrical[quality]}€/τ.μ.`
        })
      }
      if (categories.structural) {
        breakdown.push({
          label: isEnglish ? "Structural" : "Δομικά",
          value: numericArea * renovationRates.structural[quality],
          note: isEnglish ? `${numericArea}m² x ${renovationRates.structural[quality]}€/m²` : `${numericArea}τ.μ. x ${renovationRates.structural[quality]}€/τ.μ.`
        })
      }
      if (categories.painting) {
        breakdown.push({
          label: isEnglish ? "Painting" : "Βαφή",
          value: numericArea * renovationRates.painting[quality],
          note: isEnglish ? `${numericArea}m² x ${renovationRates.painting[quality]}€/m²` : `${numericArea}τ.μ. x ${renovationRates.painting[quality]}€/τ.μ.`
        })
      }
    }

    // Age adjustment
    const ageMultiplier = getAgeMultiplier(buildingAge)
    if (ageMultiplier !== 1) {
      const subtotal = breakdown.reduce((sum, item) => sum + item.value, 0)
      const adjustment = subtotal * (ageMultiplier - 1)
      breakdown.push({
        label: isEnglish ? "Age Adjustment" : "Προσαρμογή Παλαιότητας",
        value: adjustment,
        note: `+${Math.round((ageMultiplier - 1) * 100)}%`
      })
    }

    // Size adjustment
    const sizeMultiplier = getSizeMultiplier(numericArea)
    if (sizeMultiplier !== 1) {
      const subtotal = breakdown.reduce((sum, item) => sum + item.value, 0)
      const adjustment = subtotal * (sizeMultiplier - 1)
      breakdown.push({
        label: isEnglish ? "Size Adjustment" : "Προσαρμογή Μεγέθους",
        value: adjustment,
        note: sizeMultiplier < 1 ? `-${Math.round((1 - sizeMultiplier) * 100)}%` : `+${Math.round((sizeMultiplier - 1) * 100)}%`
      })
    }

    // Pool
    if (poolType !== "none" && poolSize > 0) {
      const poolRate = poolCostsPerM2[poolType as keyof typeof poolCostsPerM2][quality] || 0
      if (poolRate > 0) {
        breakdown.push({
          label: isEnglish ? "Pool" : "Πισίνα",
          value: poolRate * poolSize,
          note: isEnglish ? `${poolSize}m² x ${poolRate}€/m²` : `${poolSize}τ.μ. x ${poolRate}€/τ.μ.`
        })
      }
    }

    return breakdown
  }

  // Results section component
  const ResultsSection = () => {
    const renovationCost = parseFloat(calculatedRenovationCost)
    const windowsCostNum = parseFloat(windowsCost)
    const totalCost = renovationCost + windowsCostNum
    
    const hasRenovationSelections = Object.values(categories).some(Boolean)
    const hasWindowsSelections = windows > 0 || balconyDoors > 0 || interiorDoors > 0 || mainEntrance > 0
    const breakdown = getBreakdown()

    // Determine project type
    const selectedCount = Object.values(categories).filter(Boolean).length
    const isFullRenovation =
      selectedCount >= 4 ||
      (categories.bathroom && categories.kitchen && categories.flooring && categories.electrical)

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
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-primary">
                {isEnglish ? "General Renovation" : "Γενική Ανακαίνιση"}
              </h3>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                {isFullRenovation 
                  ? (isEnglish ? "Full Renovation" : "Ολική Ανακαίνιση")
                  : (isEnglish ? "Partial Renovation" : "Μερική Ανακαίνιση")}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Area:" : "Εμβαδόν:"}</span>
                <span className="font-medium">{area} {isEnglish ? "m²" : "τ.μ."}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isEnglish ? "Quality:" : "Ποιότητα:"}</span>
                <span className="font-medium">{translate(renovationQuality)}</span>
              </div>
              
              {/* Detailed Breakdown */}
              <div className="border-t border-border pt-3 mt-3">
                <p className="font-semibold text-foreground mb-2">
                  {isEnglish ? "Detailed Breakdown:" : "Αναλυτική Ανάλυση:"}
                </p>
                <div className="space-y-2">
                  {breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-2 bg-background rounded">
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        {item.note && <p className="text-xs text-muted-foreground">{item.note}</p>}
                      </div>
                      <span className={`font-semibold ${item.value >= 0 ? 'text-foreground' : 'text-green-600'}`}>
                        {item.value >= 0 ? formatCurrency(item.value) : `-${formatCurrency(Math.abs(item.value))}`}
                      </span>
                    </div>
                  ))}
                </div>
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
