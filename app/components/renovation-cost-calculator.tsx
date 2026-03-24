"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/language-context"
import { Bath, ChefHat, Layers, Zap, Building2, Paintbrush } from "lucide-react"
import { QuoteRequestModal } from "./quote-request-modal"

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pendingCalculatorData, setPendingCalculatorData] = useState<any>(null)

  // State for Doors & Windows Calculator
  const [material, setMaterial] = useState<Material>("aluminum")
  const [windowsQuality, setWindowsQuality] = useState<Quality>("basic")
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState<string>("0.00")

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
    aluminum: "Αλουμίνιο",
    pvc: "PVC",
    wood: "Ξύλο",
    basic: "Βασική",
    midRange: "Μεσαία",
    premium: "Premium",
    "General Renovation": "Γενική Ανακαίνιση",
    "Doors & Windows": "Πόρτες & Παράθυρα",
    "Total Estimated Cost:": "Συνολικό Εκτιμώμενο Κόστος:",
    "Get Quote": "Λάβετε Προσφορά",
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

  const handleGetQuote = (tab: "renovation" | "windows") => {
    // Calculate cost internally (user won't see it)
    const renovationCostValue = calculateRenovationCost()
    const windowsCostValue = calculateWindowsCost()
    
    // Check if renovation has any selected categories
    const hasRenovationSelections = Object.values(categories).some(Boolean)
    // Check if windows has any items
    const hasWindowsSelections = windows > 0 || balconyDoors > 0 || interiorDoors > 0 || mainEntrance > 0
    
    // Prepare calculator data for the API - always include both if they have selections
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
        // Include renovation cost if there are selections or if user is in renovation tab
        renovationCost: hasRenovationSelections ? parseFloat(renovationCostValue) : 0,
      },
      windows: {
        windows,
        balconyDoors,
        interiorDoors,
        mainEntrance,
        material,
        quality: windowsQuality,
        // Include windows cost if there are selections or if user is in windows tab
        windowsCost: hasWindowsSelections ? parseFloat(windowsCostValue) : 0,
      },
      // Total cost is the sum of both
      totalCost: (hasRenovationSelections ? parseFloat(renovationCostValue) : 0) + 
                 (hasWindowsSelections ? parseFloat(windowsCostValue) : 0),
    }

    setPendingCalculatorData(calculatorData)
    setIsModalOpen(true)
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

  return (
    <div className="bg-background p-6 rounded-lg shadow-md max-w-md mx-auto border border-border">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {translate("Renovation Cost Calculator")}
      </h2>

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
            onClick={() => handleGetQuote("renovation")}
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
            onClick={() => handleGetQuote("windows")}
            className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            {translate("Get Quote")}
          </Button>
        </TabsContent>
      </Tabs>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calculatorData={pendingCalculatorData}
        isEnglish={isEnglish}
      />
    </div>
  )
}
