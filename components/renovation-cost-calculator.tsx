"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/language-context"
import Image from "next/image"
import { CheckCircle2, Bath, UtensilsCrossed, Layers, Plug, Building, Paintbrush } from "lucide-react"

// Constants for Doors & Windows Calculator
const materialOptions = ["aluminum", "pvc", "wood"] as const
const qualityOptions = ["basic", "midRange", "premium"] as const

type Material = (typeof materialOptions)[number]
type Quality = (typeof qualityOptions)[number]

const windowCosts: Record<string, Record<Material, Record<Quality, number>>> = {
  window: {
    aluminum: { basic: 500, midRange: 600, premium: 700 },
    pvc: { basic: 400, midRange: 500, premium: 600 },
    wood: { basic: 600, midRange: 700, premium: 800 },
  },
  balconyDoor: {
    aluminum: { basic: 900, midRange: 1000, premium: 1100 },
    pvc: { basic: 800, midRange: 900, premium: 1000 },
    wood: { basic: 1000, midRange: 1100, premium: 1200 },
  },
  interiorDoor: {
    aluminum: { basic: 300, midRange: 400, premium: 500 },
    pvc: { basic: 250, midRange: 350, premium: 450 },
    wood: { basic: 400, midRange: 500, premium: 600 },
  },
  mainEntrance: {
    aluminum: { basic: 1500, midRange: 1800, premium: 2000 },
    pvc: { basic: 1300, midRange: 1500, premium: 1700 },
    wood: { basic: 1800, midRange: 2000, premium: 2200 },
  },
}

export function RenovationCostCalculator() {
  const { isEnglish } = useLanguage()
  const [activeTab, setActiveTab] = useState("renovation")
  const [showResults, setShowResults] = useState(false) // Νέο state για να εμφανίζονται τα αποτελέσματα μόνο μετά το κλικ

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
  const [renovationCost, setRenovationCost] = useState<string | null>(null)

  // State for Doors & Windows Calculator
  const [material, setMaterial] = useState<Material>("aluminum")
  const [windowsQuality, setWindowsQuality] = useState<Quality>("basic")
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState<string | null>(null)

  // Total Cost
  const [totalCost, setTotalCost] = useState<string | null>(null)

  // Constants for Renovation Calculator
  const baseCostPerM2 = 415
  const qualityMultipliers = { basic: 1.0, midRange: 1.3, premium: 1.6 }
  const agePenalty = { ancient: 1.25, old: 1.15, modern: 1.0 }
  const categoryModifiers = {
    bathroom: 2500,
    kitchen: 4000,
    flooring: 40,
    electrical: 500,
    structural: 100,
    painting: 25,
  }
  const poolCostsPerM2 = {
    none: { basic: 0, midRange: 0, premium: 0 },
    liner: { midRange: 1025, premium: 1185 },
    polyester: { premium: 1225 },
    concrete: { basic: 1125, midRange: 1225, premium: 1325 },
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
    "Calculate your renovation cost in 1 minute!": "Υπολογίστε το κόστος της ανακαίνισής σας σε 1 λεπτό!",
    "Request a Quote": "Ζητήστε Προσφορά",
    Calculate: "Υπολογισμός",
    aluminum: "Αλουμίνιο",
    pvc: "PVC",
    wood: "Ξύλο",
    basic: "Βασική",
    midRange: "Μεσαία",
    premium: "Premium",
    "General Renovation": "Γενική Ανακαίνιση",
    "Doors & Windows": "Πόρτες & Παράθυρα",
    "Total Estimated Cost:": "Συνολικό Εκτιμώμενο Κόστος:",
    "Why work with us?": "Γιατί να συνεργαστείτε μαζί μας;",
    "Top Quality Products & Materials": "Προϊόντα & Υλικά Κορυφαίας Ποιότητας",
    "Professional Team": "Επαγγελματική Ομάδα",
    "Let us transform your vision into reality": "Αφήστε μας να μετατρέψουμε την όρασή σας σε πραγματικότητα",
    "Project Details": "Στοιχεία Έργου",
    "Pool & Specialties": "Πισίνα & Ειδικότητες",
    "Pool Type": "Τύπος Πισίνας",
    "Renovation Categories": "Κατηγορίες Ανακαίνισης",
    "Door & Window Quantities": "Ποσότητες Πορτών & Παραθύρων",
    "Materials & Quality": "Υλικά & Ποιότητα",
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

  const windowsDependencies = useMemo(
    () => [material, windowsQuality, windows, balconyDoors, interiorDoors, mainEntrance],
    [material, windowsQuality, windows, balconyDoors, interiorDoors, mainEntrance],
  )

  useEffect(() => {
    calculateWindowsCost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, windowsDependencies)

  useEffect(() => {
    const renovationCostNumber = renovationCost ? Number.parseFloat(renovationCost) : 0
    const windowsCostNumber = windowsCost ? Number.parseFloat(windowsCost) : 0
    const newTotalCost = (renovationCostNumber + windowsCostNumber).toFixed(2)
    setTotalCost(newTotalCost)
  }, [renovationCost, windowsCost])

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
                    : numericArea)
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

    setRenovationCost(totalCost.toFixed(2))
    setShowResults(true) // Εμφάνιση αποτελεσμάτων μετά τον υπολογισμό
  }

  const calculateWindowsCost = () => {
    const cost =
      windows * windowCosts.window[material][windowsQuality] +
      balconyDoors * windowCosts.balconyDoor[material][windowsQuality] +
      interiorDoors * windowCosts.interiorDoor[material][windowsQuality] +
      mainEntrance * windowCosts.mainEntrance[material][windowsQuality]
    setWindowsCost(cost.toFixed(2))
    setShowResults(true) // Εμφάνιση αποτελεσμάτων μετά τον υπολογισμό
  }

  const renderInput = (label: string, value: number, onChange: (value: number) => void) => (
    <div>
      <Label htmlFor={label}>{translate(label)}</Label>
      <Input
        id={label}
        type="number"
        value={value}
        onChange={(e) => onChange(Number.parseInt(e.target.value) || 0)}
        min="0"
        className="w-full mb-2"
      />
    </div>
  )

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto calculator">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{translate("Renovation Cost Calculator")}</h2>
        <p className="text-base md:text-lg text-gray-600">
          {translate("Calculate your renovation cost in 1 minute!")}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-lg p-1">
          <TabsTrigger value="renovation" className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
            {translate("General Renovation")}
          </TabsTrigger>
          <TabsTrigger value="windows" className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
            {translate("Doors & Windows")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="renovation" className="space-y-6">
          <p className="leading-relaxed text-gray-600">
            {isEnglish
              ? "If you dream of building your home or business space, you know that the process can seem overwhelming: from finding the ideal plot to managing the required permits and bureaucracy. We are here to handle every step, so you can focus on your vision."
              : "Αν ονειρεύεστε να χτίσετε το σπίτι ή το επαγγελματικό σας χώρο, ξέρετε ότι η διαδικασία μπορεί να φαίνεται συντριπτική: από την εύρεση του ιδανικού οικοπέδου έως τη διαχείριση των απαιτούμενων αδειών και τη γραφειοκρατία. Εμείς είμαστε εδώ για να αναλάβουμε κάθε βήμα, ώστε εσείς να εστιάσετε στο όραμά σας."}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{isEnglish ? "Project Details" : "Στοιχεία Έργου"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="area" className="font-medium">{isEnglish ? "Area (m²)" : "Εμβαδόν (τ.μ.)"}</Label>
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value)
                    setShowResults(false)
                  }}
                  min="1"
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="buildingAge" className="font-medium">{isEnglish ? "Building Year" : "Έτος Κατασκευής"}</Label>
                <Input
                  id="buildingAge"
                  type="number"
                  value={buildingAge}
                  onChange={(e) => {
                    setBuildingAge(Number(e.target.value))
                    setShowResults(false)
                  }}
                  min="1900"
                  max="2024"
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bathrooms" className="font-medium">{isEnglish ? "Bathrooms" : "Μπάνια"}</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={bathrooms}
                  onChange={(e) => {
                    setBathrooms(Number(e.target.value))
                    setShowResults(false)
                  }}
                  min="0"
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="kitchens" className="font-medium">{isEnglish ? "Kitchens" : "Κουζίνες"}</Label>
                <Input
                  id="kitchens"
                  type="number"
                  value={kitchens}
                  onChange={(e) => {
                    setKitchens(Number(e.target.value))
                    setShowResults(false)
                  }}
                  min="0"
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="rooms" className="font-medium">{isEnglish ? "Rooms" : "Δωμάτια"}</Label>
                <Input
                  id="rooms"
                  type="number"
                  value={rooms}
                  onChange={(e) => {
                    setRooms(Number(e.target.value))
                    setShowResults(false)
                  }}
                  min="0"
                  className="w-full mt-1"
                />
              </div>
            </div>
          </div>
          <div className="relative z-30">
            <Label>{isEnglish ? "Pool Type" : "Τύπος Πισίνας"}</Label>
            <Select
              value={poolType}
              onValueChange={(value) => {
                setPoolType(value as "none" | "concrete" | "polyester" | "liner")
                setShowResults(false) // Κρύβει αποτελέσματα όταν αλλάζουν δεδομένα
                calculateRenovationCost()
              }}
            >
              <SelectTrigger className="w-full whitespace-nowrap overflow-hidden bg-white mb-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="z-[100] bg-white">
                <SelectItem value="none">{isEnglish ? "None" : "Καμία"}</SelectItem>
                <SelectItem value="concrete">{isEnglish ? "Concrete" : "Μπετόν"}</SelectItem>
                <SelectItem value="polyester">{isEnglish ? "Polyester" : "Πολυεστερική"}</SelectItem>
                <SelectItem value="liner">{isEnglish ? "Liner" : "Με επένδυση"}</SelectItem>
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
                  setPoolSize(Number(e.target.value))
                  setShowResults(false) // Κρύβει αποτελέσματα όταν αλλάζουν δεδ��μένα
                }}
                min="1"
                max="50"
                className="w-full mb-2"
              />
            </div>
          )}

          <div className="relative z-10">
            <Label>{isEnglish ? "Categories" : "Κατηγορίες"}</Label>
            {[
              { key: "bathroom", icon: Bath, label: isEnglish ? "Bathroom" : "Μπάνιο" },
              { key: "kitchen", icon: UtensilsCrossed, label: isEnglish ? "Kitchen" : "Κουζίνα" },
              { key: "flooring", icon: Layers, label: isEnglish ? "Flooring" : "Δάπεδα" },
              { key: "electrical", icon: Plug, label: isEnglish ? "Electrical" : "Ηλεκτρολογικά" },
              { key: "structural", icon: Building, label: isEnglish ? "Structural" : "Δομικά" },
              { key: "painting", icon: Paintbrush, label: isEnglish ? "Painting" : "Βαφή" },
            ].map(({ key, icon: Icon, label }) => (
              <div key={key} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={key}
                  checked={categories[key as keyof typeof categories]}
                  onCheckedChange={(checked) => {
                    setCategories((prev) => ({ ...prev, [key]: checked === true }))
                    setShowResults(false) // Κρύβει αποτελέσματα όταν αλλάζουν δεδομένα
                  }}
                />
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <Label htmlFor={key}>{label}</Label>
                </div>
              </div>
            ))}
          </div>
          <div className="relative z-30">
            <Label className="font-medium">{isEnglish ? "Quality" : "Ποιότητα"}</Label>
            <Select
              value={renovationQuality}
              onValueChange={(value) => {
                setRenovationQuality(value as "basic" | "midRange" | "premium")
                setShowResults(false)
              }}
            >
              <SelectTrigger className="w-full whitespace-nowrap overflow-hidden bg-white mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="z-[100] bg-white">
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

          <Button onClick={calculateRenovationCost} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
            {translate("Calculate")}
          </Button>

          {showResults && renovationCost && (
            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">{isEnglish ? "Estimated Cost:" : "Εκτιμώμενο Κόστος:"}</p>
              <p className="text-4xl font-bold text-blue-600">{isEnglish ? `€${renovationCost}` : `${renovationCost}€`}</p>
            </div>
          )}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              {isEnglish ? "Why work with us?" : "Γιατί να συνεργαστείτε μαζί μας;"}
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: isEnglish ? "Top Quality Products & Materials" : "Προϊόντα & Υλικά Κορυφαίας Ποιότητας",
                  description: isEnglish
                    ? "We use materials of guaranteed durability (certified by European standards), offering long-term performance and safety."
                    : "Χρησιμοποιούμε εγγυημένης ανθεκτικότητας υλικά (πιστοποιημένα με ευρωπαϊκά πρότυπα), που προσφέρουν μακροχρόνια απόδοση και ασφάλεια.",
                },
                {
                  title: isEnglish ? "Professional Team" : "Επαγγελματική Ομάδα",
                  description: isEnglish
                    ? "Our experienced team brings expertise and attention to detail to every project, ensuring exceptional results."
                    : "Η έμπειρη ομάδα μας φέρνει τεχνογνωσία και προσοχή στις λεπτομέρειες σε κάθε έργο, εξασφαλίζοντας εξαιρετικά αποτελέσματα.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">{item.title}</h4>
                    <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              {isEnglish
                ? "Let us transform your vision into reality"
                : "Αφήστε μας να μετατρέψουμε την όρασή σας σε πραγματικότητα"}
            </h3>
            <p className="text-blue-100">
              {isEnglish
                ? "With a focus on innovation, precision, and affordability, we create recreational spaces that express your style and promote well-being."
                : "Με γνώμονα την καινοτομία, την ακρίβεια και την προσιτή τιμή, δημιουργούμε χώρους αναψυχής που εκφράζουν το στυλ σας και προάγουν τη ζωή."}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="windows" className="space-y-6">
          <p className="leading-relaxed text-gray-600">
            {isEnglish
              ? "Calculate the cost of doors and windows for your renovation project. Choose your preferred material and quality level."
              : "Υπολογίστε το κόστος πορτών και παραθύρων για το έργο ανακαίνισής σας. Επιλέξτε το προτιμώμενο υλικό και επίπεδο ποιότητας."}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{isEnglish ? "Door & Window Quantities" : "Ποσότητες Πορτών & Παραθύρων"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Windows", value: windows, onChange: setWindows },
                { label: "Balcony Doors", value: balconyDoors, onChange: setBalconyDoors },
                { label: "Interior Doors", value: interiorDoors, onChange: setInteriorDoors },
                { label: "Main Entrance", value: mainEntrance, onChange: setMainEntrance },
              ].map(({ label, value, onChange }) => (
                <div key={label}>
                  <Label htmlFor={label} className="font-medium">{translate(label)}</Label>
                  <Input
                    id={label}
                    type="number"
                    value={value}
                    onChange={(e) => {
                      onChange(Number.parseInt(e.target.value) || 0)
                      setShowResults(false)
                    }}
                    min="0"
                    className="w-full mt-1"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{isEnglish ? "Materials & Quality" : "Υλικά & Ποιότητα"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-medium">{translate("Material")}</Label>
                <Select
                  value={material}
                  onValueChange={(value) => {
                    setMaterial(value as Material)
                    setShowResults(false)
                  }}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue>{isEnglish ? material.toUpperCase() : translate(material)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {materialOptions.map((m) => (
                      <SelectItem key={m} value={m}>
                        {isEnglish ? m.toUpperCase() : translate(m)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="font-medium">{translate("Quality")}</Label>
                <Select
                  value={windowsQuality}
                  onValueChange={(value) => {
                    setWindowsQuality(value as Quality)
                    setShowResults(false)
                  }}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue>{isEnglish ? windowsQuality.toUpperCase() : translate(windowsQuality)}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {qualityOptions.map((q) => (
                      <SelectItem key={q} value={q}>
                        {isEnglish ? q.toUpperCase() : translate(q)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button onClick={calculateWindowsCost} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
            {translate("Calculate")}
          </Button>

          {showResults && windowsCost && (
            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">{translate("Estimated Cost:")}</p>
              <p className="text-4xl font-bold text-blue-600">€{windowsCost}</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {showResults && totalCost && (
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{translate("Total Estimated Cost:")}</h3>
            <p className="text-5xl font-bold mb-4">€{totalCost}</p>
            <Button
              className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all"
              onClick={() => (window.location.href = "/el/appointment")}
            >
              {translate("Request a Quote")}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// CSS for Responsive Design (add to your CSS file or <style> tag)
const styles = `
  @media (max-width: 640px) {
    .calculator {
      padding: 1rem;
    }
    .calculator input,
    .calculator select,
    .calculator button {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    .calculator .space-y-4 > div {
      margin-bottom: 1rem;
    }
  }
`
