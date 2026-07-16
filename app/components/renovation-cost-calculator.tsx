"use client"

import { useEffect, useMemo, useState, useCallback, memo, useRef } from "react"
import Image from "next/image"
import {
  Bath,
  Building,
  CheckCircle,
  CheckCircle2,
  Home,
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
import {
  type Material,
  type Quality,
  type PoolType,
  type QuoteBreakdown,
  WINDOW_COSTS as windowCosts,
  RENOVATION_RATES,
  POOL_COSTS_PER_M2,
  generateQuoteBreakdown,
} from "@/lib/calculator/pricing"

const materialOptions = ["aluminum", "pvc", "wood"] as const
const qualityOptions = ["basic", "premium"] as const

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
  premium: "Premium",
  "General Renovation": "Γενική Ανακαίνιση",
  "Doors & Windows": "Κουφώματα",
  Pool: "Πισίνα",
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
  Roof: "Στέγη",
  Categories: "Κατηγορίες",
  None: "Καμία",
  Concrete: "Μπετόν",
  Polyester: "Πολυεστερική",
  Liner: "Με επένδυση",
  Basic: "Βασική",
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
  roof: {
    en: "Roof repair or replacement including insulation and waterproofing.",
    el: "Επισκευή ή αντικατάσταση στέγης με μόνωση και στεγανοποίηση.",
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

const BLOCKED_EMAIL_DOMAINS = new Set([
  "example.com",
  "test.com",
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
])

const PHONE_COUNTRIES = [
  { code: "GR", dialCode: "+30", label: "Ελλάδα (+30)", labelEn: "Greece (+30)", example: "694 123 4567" },
  { code: "CY", dialCode: "+357", label: "Κύπρος (+357)", labelEn: "Cyprus (+357)", example: "96 123456" },
  { code: "GB", dialCode: "+44", label: "Ηνωμένο Βασίλειο (+44)", labelEn: "United Kingdom (+44)", example: "20 1234 5678" },
  { code: "IE", dialCode: "+353", label: "Ιρλανδία (+353)", labelEn: "Ireland (+353)", example: "85 123 4567" },
  { code: "DE", dialCode: "+49", label: "Γερμανία (+49)", labelEn: "Germany (+49)", example: "151 23456789" },
  { code: "AT", dialCode: "+43", label: "Αυστρία (+43)", labelEn: "Austria (+43)", example: "664 1234567" },
  { code: "CH", dialCode: "+41", label: "Ελβετία (+41)", labelEn: "Switzerland (+41)", example: "79 123 45 67" },
  { code: "IT", dialCode: "+39", label: "Ιταλία (+39)", labelEn: "Italy (+39)", example: "312 345 6789" },
  { code: "FR", dialCode: "+33", label: "Γαλλία (+33)", labelEn: "France (+33)", example: "6 12 34 56 78" },
  { code: "ES", dialCode: "+34", label: "Ισπανία (+34)", labelEn: "Spain (+34)", example: "612 345 678" },
  { code: "PT", dialCode: "+351", label: "Πορτογαλία (+351)", labelEn: "Portugal (+351)", example: "912 345 678" },
  { code: "NL", dialCode: "+31", label: "Ολλανδία (+31)", labelEn: "Netherlands (+31)", example: "6 12345678" },
  { code: "BE", dialCode: "+32", label: "Βέλγιο (+32)", labelEn: "Belgium (+32)", example: "470 12 34 56" },
  { code: "LU", dialCode: "+352", label: "Λουξεμβούργο (+352)", labelEn: "Luxembourg (+352)", example: "621 123 456" },
  { code: "DK", dialCode: "+45", label: "Δανία (+45)", labelEn: "Denmark (+45)", example: "20 12 34 56" },
  { code: "SE", dialCode: "+46", label: "Σουηδία (+46)", labelEn: "Sweden (+46)", example: "70 123 45 67" },
  { code: "NO", dialCode: "+47", label: "Νορβηγία (+47)", labelEn: "Norway (+47)", example: "412 34 567" },
  { code: "FI", dialCode: "+358", label: "Φινλανδία (+358)", labelEn: "Finland (+358)", example: "40 123 4567" },
  { code: "PL", dialCode: "+48", label: "Πολωνία (+48)", labelEn: "Poland (+48)", example: "512 345 678" },
  { code: "CZ", dialCode: "+420", label: "Τσεχία (+420)", labelEn: "Czechia (+420)", example: "601 123 456" },
  { code: "RO", dialCode: "+40", label: "Ρουμανία (+40)", labelEn: "Romania (+40)", example: "721 234 567" },
  { code: "BG", dialCode: "+359", label: "Βουλγαρία (+359)", labelEn: "Bulgaria (+359)", example: "87 123 4567" },
  { code: "RS", dialCode: "+381", label: "Σερβία (+381)", labelEn: "Serbia (+381)", example: "64 1234567" },
  { code: "MK", dialCode: "+389", label: "Βόρεια Μακεδονία (+389)", labelEn: "North Macedonia (+389)", example: "70 123 456" },
  { code: "AL", dialCode: "+355", label: "Αλβανία (+355)", labelEn: "Albania (+355)", example: "69 123 4567" },
  { code: "TR", dialCode: "+90", label: "Τουρκία (+90)", labelEn: "Türkiye (+90)", example: "532 123 4567" },
  { code: "AE", dialCode: "+971", label: "ΗΑΕ (+971)", labelEn: "United Arab Emirates (+971)", example: "50 123 4567" },
  { code: "SA", dialCode: "+966", label: "Σαουδική Αραβία (+966)", labelEn: "Saudi Arabia (+966)", example: "50 123 4567" },
  { code: "AU", dialCode: "+61", label: "Αυστραλία (+61)", labelEn: "Australia (+61)", example: "412 345 678" },
  { code: "NZ", dialCode: "+64", label: "Νέα Ζηλανδία (+64)", labelEn: "New Zealand (+64)", example: "21 123 4567" },
  { code: "ZA", dialCode: "+27", label: "Νότια Αφρική (+27)", labelEn: "South Africa (+27)", example: "82 123 4567" },
  { code: "US", dialCode: "+1", label: "ΗΠΑ / Καναδάς (+1)", labelEn: "USA / Canada (+1)", example: "202 555 0123" },
]

function isPlausibleEmail(value: string) {
  const email = value.trim().toLowerCase()
  const [local, domain] = email.split("@")
  if (!local || !domain || email.split("@").length !== 2 || local.length > 64 || email.length > 160) return false
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local)) return false
  if (!/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(domain)) return false
  return !BLOCKED_EMAIL_DOMAINS.has(domain)
}

function normalizeInternationalPhone(value: string, countryDialCode = "+30"): string | null {
  let phone = value.trim().replace(/[\s().-]/g, "")
  if (phone.startsWith("00")) phone = `+${phone.slice(2)}`

  if (/^\+\d{8,15}$/.test(phone)) return phone
  if (!/^\d{6,14}$/.test(phone)) return null

  const normalized = `${countryDialCode}${phone}`
  return /^\+\d{8,15}$/.test(normalized) ? normalized : null
}

// ─── Isolated Contact Form ────────────────────────────────────────────────────
// Defined at module level so React never remounts it due to parent re-renders.
// Receives only stable props (refs + callbacks) so memo comparison always passes
// while the user is typing — zero re-renders from calculator state changes.
interface ContactFormProps {
  isEnglish: boolean
  onSubmit: (contact: ContactInfo) => Promise<void>
}

const ContactForm = memo(function ContactForm({ isEnglish, onSubmit }: ContactFormProps) {
  // Local state — completely isolated from the calculator state tree
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneCountry, setPhoneCountry] = useState("GR")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  const handleSubmit = async () => {
    const normalizedEmail = email.trim().toLowerCase()
    const selectedCountry = PHONE_COUNTRIES.find((country) => country.code === phoneCountry) ?? PHONE_COUNTRIES[0]
    const normalizedPhone = normalizeInternationalPhone(phone, selectedCountry.dialCode)

    if (!name.trim() || !normalizedEmail || !phone.trim()) {
      setFormError(isEnglish ? "Please complete all contact fields." : "Συμπληρώστε όλα τα στοιχεία επικοινωνίας.")
      return
    }
    if (!isPlausibleEmail(normalizedEmail)) {
      setFormError(isEnglish ? "Please enter a valid, non-temporary email address." : "Εισάγετε ένα έγκυρο email που δεν είναι προσωρινό.")
      return
    }
    if (!normalizedPhone) {
      setFormError(isEnglish ? "Use a valid phone number for the selected country." : "Χρησιμοποιήστε έγκυρο τηλέφωνο για τη χώρα που επιλέξατε.")
      return
    }

    setFormError("")
    setIsSubmitting(true)
    try {
      await onSubmit({ name: name.trim(), email: normalizedEmail, phone: normalizedPhone })
    } catch (error) {
      setFormError(error instanceof Error ? error.message : (isEnglish ? "We could not submit your request. Please try again." : "Δεν ήταν δυνατή η υποβολή. Δοκιμάστε ξανά."))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
      <h3 className="font-semibold text-primary mb-4 text-center">
        {isEnglish
          ? "Enter your details to see the results"
          : "Συμπληρώστε τα στοιχεία σας για να δείτε τα αποτελέσματα"}
      </h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="calc-contact-name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {isEnglish ? "Full Name" : "Ονοματεπώνυμο"}
          </Label>
          <Input
            id="calc-contact-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={isEnglish ? "Enter your full name" : "Εισάγετε το ονοματεπώνυμό σας"}
            className="w-full mt-1"
            inputMode="text"
          />
        </div>
        <div>
          <Label htmlFor="calc-contact-email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="calc-contact-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setFormError("") }}
            placeholder={isEnglish ? "Enter your email" : "Εισάγετε το email σας"}
            className="w-full mt-1"
            inputMode="email"
          />
        </div>
        <div>
          <Label htmlFor="calc-contact-phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {isEnglish ? "Phone" : "Τηλέφωνο"}
          </Label>
          <div className="mt-1 grid grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-2">
            <Select value={phoneCountry} onValueChange={(value) => { setPhoneCountry(value); setFormError("") }}>
              <SelectTrigger
                id="calc-contact-country"
                aria-label={isEnglish ? "Phone country" : "Χώρα τηλεφώνου"}
                className="border-slate-300 bg-white text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-[100] border-slate-300 bg-white text-slate-900 opacity-100 shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
                {PHONE_COUNTRIES.map((country) => (
                  <SelectItem key={country.code} value={country.code} className="focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-100">
                    {isEnglish ? country.labelEn : country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="calc-contact-phone"
              type="tel"
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setFormError("") }}
              placeholder={(PHONE_COUNTRIES.find((country) => country.code === phoneCountry) ?? PHONE_COUNTRIES[0]).example}
              inputMode="tel"
            />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {isEnglish ? "Choose your country, then enter your local phone number. International format is also accepted." : "Επιλέξτε χώρα και γράψτε τον τοπικό αριθμό. Δεκτός και αριθμός σε διεθνή μορφή."}
          </p>
        </div>
        {formError && <p role="alert" className="text-sm text-destructive">{formError}</p>}
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !name || !email || !phone}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {isEnglish ? "Submitting..." : "Υποβολή..."}
            </>
          ) : isEnglish ? (
            "See Results"
          ) : (
            "Δείτε τα Αποτελέσματα"
          )}
        </Button>
      </div>
    </div>
  )
})

// ─────────────────────────────────────────────────────────────────────────────

export default function RenovationCostCalculator() {
  const { isEnglish } = useLanguage()

  const [activeTab, setActiveTab] = useState("renovation")
  const [showResults, setShowResults] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [submittedFromTab, setSubmittedFromTab] = useState<"renovation" | "windows" | "pool" | null>(null)

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
    roof: false,
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

  const [poolCost, setPoolCost] = useState<string | null>(null)
  const [poolRange, setPoolRange] = useState<EstimateRange | null>(null)

  const [totalCost, setTotalCost] = useState<string | null>(null)
  const [totalRange, setTotalRange] = useState<EstimateRange | null>(null)

  const translate = (text: string) => (isEnglish ? text : translations[text] || text)

  const resetResults = () => {
    setShowResults(false)
    setShowContactForm(false)
    setContactSubmitted(false)
  }

  useEffect(() => {
    // Adjust quality based on pool type - polyester requires premium
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
    const poolCostNumber = poolCost ? Number.parseFloat(poolCost) : 0
    const newTotalCost = renovationCostNumber + windowsCostNumber + poolCostNumber

    setTotalCost(newTotalCost > 0 ? newTotalCost.toFixed(2) : null)

    if (renovationRange || windowsRange || poolRange) {
      const min = (renovationRange?.min || 0) + (windowsRange?.min || 0) + (poolRange?.min || 0)
      const max = (renovationRange?.max || 0) + (windowsRange?.max || 0) + (poolRange?.max || 0)
      setTotalRange(min > 0 || max > 0 ? { min, max } : null)
    } else {
      setTotalRange(null)
    }
  }, [renovationCost, windowsCost, poolCost, renovationRange, windowsRange, poolRange])

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

  // Build the renovation input object from current state (used by both display and submission)
  const buildRenovationInput = useCallback(() => ({
    area: Number(area),
    bathrooms,
    kitchens,
    rooms,
    buildingAge,
    quality: renovationQuality,
    poolType,
    poolSize,
    categories,
  }), [area, bathrooms, kitchens, rooms, buildingAge, renovationQuality, poolType, poolSize, categories])

  const buildWindowsInput = useCallback(() => ({
    windows,
    balconyDoors,
    interiorDoors,
    mainEntrance,
    material,
    quality: windowsQuality,
  }), [windows, balconyDoors, interiorDoors, mainEntrance, material, windowsQuality])

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
      total = numericArea * RENOVATION_RATES.full[quality]
    } else {
      if (categories.bathroom) total += bathrooms * RENOVATION_RATES.bathroom[quality]
      if (categories.kitchen) total += kitchens * RENOVATION_RATES.kitchen[quality]
      if (categories.flooring) total += numericArea * RENOVATION_RATES.flooring[quality]
      if (categories.electrical) {
        const electricalAreaFactor = rooms > 0 ? Math.max(1, rooms / 2) : 1
        total += numericArea * RENOVATION_RATES.electrical[quality] * electricalAreaFactor
      }
      if (categories.structural) total += numericArea * RENOVATION_RATES.structural[quality]
      if (categories.painting) total += numericArea * RENOVATION_RATES.painting[quality]
      if (categories.roof) total += numericArea * RENOVATION_RATES.roof[quality]
    }

    total = total * getAgeMultiplier(buildingAge) * getSizeMultiplier(numericArea)

    setRenovationCost(total.toFixed(2))
    setRenovationRange({
      min: total * 0.9,
      max: total * 1.12,
    })
  }

  const calculatePoolCost = () => {
    if (poolType === "none" || poolSize === 0) {
      setPoolCost(null)
      setPoolRange(null)
      return
    }
    const quality = renovationQuality
    const poolRate = POOL_COSTS_PER_M2[poolType][quality] || 0
    const total = poolRate * poolSize

    setPoolCost(total.toFixed(2))
    setPoolRange({
      min: total * 0.9,
      max: total * 1.12,
    })
  }

  const handleGetQuote = () => {
    calculateRenovationCost()
    // Also calculate pool cost if pool is selected
    if (poolType !== "none" && poolSize > 0) {
      calculatePoolCost()
    }
    setSubmittedFromTab("renovation")
    setShowContactForm(true)
  }

  const handleWindowsGetQuote = () => {
    if (windows === 0 && balconyDoors === 0 && interiorDoors === 0 && mainEntrance === 0) {
      return
    }
    // Also calculate renovation cost if categories are selected
    if (Object.values(categories).some(Boolean)) {
      calculateRenovationCost()
    }
    // Also calculate pool cost if pool is selected
    if (poolType !== "none" && poolSize > 0) {
      calculatePoolCost()
    }
    setSubmittedFromTab("windows")
    setShowContactForm(true)
  }

  const handlePoolGetQuote = () => {
    if (poolType === "none" || poolSize === 0) {
      return
    }
    calculatePoolCost()
    // Also calculate renovation cost if categories are selected
    if (Object.values(categories).some(Boolean)) {
      calculateRenovationCost()
    }
    setSubmittedFromTab("pool")
    setShowContactForm(true)
  }

  // Stable callback — receives contact data from the isolated ContactForm component
  // so that updating contact fields never touches calculator state at all.
  // Generates the full structured breakdown from the SHARED pricing engine so the
  // admin email always reflects exactly what the user sees on screen.
  const handleContactSubmit = useCallback(async (contact: ContactInfo) => {
    const renovationInput = buildRenovationInput()
    const windowsInput = buildWindowsInput()

    const hasRenovation = Object.values(renovationInput.categories).some(Boolean)
    const hasWindows = windows > 0 || balconyDoors > 0 || interiorDoors > 0 || mainEntrance > 0

    const breakdown: QuoteBreakdown = generateQuoteBreakdown(
      hasRenovation ? renovationInput : null,
      hasWindows ? windowsInput : null,
      submittedFromTab
    )

    const requestData = {
      contact: {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      },
      // Legacy selections shape kept for backwards compat
      selections: {
        renovation: {
          area: renovationInput.area,
          bathrooms: renovationInput.bathrooms,
          kitchens: renovationInput.kitchens,
          rooms: renovationInput.rooms,
          buildingAge: renovationInput.buildingAge,
          renovationQuality: renovationInput.quality,
          categories: renovationInput.categories,
          poolType: renovationInput.poolType,
          poolSize: renovationInput.poolSize,
          renovationCost: breakdown.renovation?.total ?? 0,
        },
        windows: {
          windows: windowsInput.windows,
          balconyDoors: windowsInput.balconyDoors,
          interiorDoors: windowsInput.interiorDoors,
          mainEntrance: windowsInput.mainEntrance,
          material: windowsInput.material,
          quality: windowsInput.quality,
          windowsCost: breakdown.windows?.total ?? 0,
        },
        totalCost: breakdown.grandTotal,
      },
      // Full structured breakdown — used exclusively for the admin audit email
      breakdown,
      language: isEnglish ? "en" : "el",
      submittedFromTab,
    }

    try {
      const response = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.success) {
        throw new Error(result?.errors?.[0] || (isEnglish ? "We could not submit your request. Please try again." : "Δεν ήταν δυνατή η υποβολή. Δοκιμάστε ξανά."))
      }
    } catch (error) {
      console.error("Error submitting contact:", error)
      throw error
    }

    setContactSubmitted(true)
    setShowResults(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildRenovationInput, buildWindowsInput, windows, balconyDoors, interiorDoors, mainEntrance, submittedFromTab, isEnglish])

  const handleNewCalculation = () => {
    setShowResults(false)
    setShowContactForm(false)
    setContactSubmitted(false)
    setSubmittedFromTab(null)
    setRenovationCost(null)
    setRenovationRange(null)
    setPoolCost(null)
    setPoolRange(null)
    setCategories({
      bathroom: false,
      kitchen: false,
      flooring: false,
      electrical: false,
      structural: false,
      painting: false,
      roof: false,
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
        inputMode="numeric"
      />
    </div>
  )

  // Results Component - Only shown after contact submission
  const ResultsDisplay = () => (
    <div className="mt-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
        <p className="text-green-800 text-sm">
          {isEnglish
            ? `Thank you! Here is your personalized quote.`
            : `Ευχαριστούμε! Ιδού η εξατομικευμένη προσφορά σας.`}
        </p>
      </div>

      {/* Show renovation cost if available */}
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

      {/* Show windows cost if available */}
      {windowsCost && Number(windowsCost) > 0 && (
        <div className="p-4 bg-muted rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground mb-1">
            {isEnglish ? "Joinery (Doors & Windows):" : "Κουφώματα:"}
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

      {/* Show pool cost if available */}
      {poolCost && Number(poolCost) > 0 && (
        <div className="p-4 bg-muted rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground mb-1">
            {isEnglish ? "Pool:" : "Πισίνα:"}
          </p>
          <p className="text-2xl font-bold text-primary">
            {isEnglish ? `€${Number(poolCost).toLocaleString()}` : `${Number(poolCost).toLocaleString()}€`}
          </p>
          {poolRange && (
            <p className="text-sm text-muted-foreground mt-1">
              {translate("Estimated Range:")}{" "}
              {isEnglish
                ? `€${poolRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})} - €${poolRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}`
                : `${poolRange.min.toLocaleString(undefined, {maximumFractionDigits: 0})}€ - ${poolRange.max.toLocaleString(undefined, {maximumFractionDigits: 0})}€`}
            </p>
          )}
        </div>
      )}

      {/* Show total when multiple categories have costs */}
      {totalCost && totalRange && (
        (renovationCost && Number(renovationCost) > 0 ? 1 : 0) + 
        (windowsCost && Number(windowsCost) > 0 ? 1 : 0) + 
        (poolCost && Number(poolCost) > 0 ? 1 : 0) >= 2
      ) && (
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
        <TabsList className="mb-4 grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="renovation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-3">
            <span className="hidden sm:inline">{translate("General Renovation")}</span>
            <span className="sm:hidden">{isEnglish ? "Renovation" : "Ανακαίνιση"}</span>
          </TabsTrigger>
          <TabsTrigger value="windows" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-3">
            <span className="hidden sm:inline">{translate("Doors & Windows")}</span>
            <span className="sm:hidden">{isEnglish ? "Windows" : "Κουφώματα"}</span>
          </TabsTrigger>
          <TabsTrigger value="pool" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-1 sm:px-3">
            {translate("Pool")}
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
  { key: "roof", icon: Home, label: translate("Roof") },
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
                    <SelectItem value="basic">{translate("Basic")}</SelectItem>
                    <SelectItem value="premium">{translate("Premium")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

  <Button
                onClick={handleGetQuote}
                disabled={!Object.values(categories).some(Boolean) && area === "0"}
                className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
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

            </>
          )}

          {showContactForm && !contactSubmitted && (
            <ContactForm isEnglish={isEnglish} onSubmit={handleContactSubmit} />
          )}
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

              <Button 
                onClick={handleWindowsGetQuote} 
                disabled={windows === 0 && balconyDoors === 0 && interiorDoors === 0 && mainEntrance === 0}
                className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {translate("Get Quote")}
              </Button>
            </>
          )}

          {showContactForm && !contactSubmitted && (
            <ContactForm isEnglish={isEnglish} onSubmit={handleContactSubmit} />
          )}
          {contactSubmitted && showResults && <ResultsDisplay />}
        </TabsContent>

        <TabsContent value="pool" className="space-y-4">
          {!showContactForm && !showResults && (
            <>
              <p className="leading-relaxed text-sm text-muted-foreground">
                {isEnglish
                  ? "Get a quote for your dream pool. We offer high-quality pool construction with various materials and finishes."
                  : "Λάβετε προσφορά για την πισίνα των ονείρων σας. Προσφέρουμε κατασκευή πισίνας υψηλής ποιότητας με διάφορα υλικά και φινιρίσματα."}
              </p>

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
                <>
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

                  <div className="relative z-20">
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
                        {poolType !== "polyester" && (
                          <SelectItem value="basic">{translate("Basic")}</SelectItem>
                        )}
                        <SelectItem value="premium">{translate("Premium")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <Button 
                onClick={handlePoolGetQuote} 
                disabled={poolType === "none" || poolSize === 0}
                className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {translate("Get Quote")}
              </Button>

              <p className="text-center text-muted-foreground">{translate("Modern solutions for the ideal pool")}</p>
            </>
          )}

          {showContactForm && !contactSubmitted && (
            <ContactForm isEnglish={isEnglish} onSubmit={handleContactSubmit} />
          )}
          {contactSubmitted && showResults && <ResultsDisplay />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Also export as named export for backwards compatibility
export { RenovationCostCalculator }
