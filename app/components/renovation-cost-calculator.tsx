"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/language-context"

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
  const [renovationCost, setRenovationCost] = useState<string | null>(null)

  // State for Doors & Windows Calculator
  const [material, setMaterial] = useState<Material>("aluminum")
  const [windowsQuality, setWindowsQuality] = useState<Quality>("basic")
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState<string | null>(null)

  //New State Variable
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
    aluminum: "Αλουμίνιο",
    pvc: "PVC",
    wood: "Ξύλο",
    basic: "Βασική",
    midRange: "Μεσαία",
    premium: "Premium",
    "General Renovation": "Γενική Ανακαίνιση",
    "Doors & Windows": "Πόρτες & Παράθυρα",
    "Total Estimated Cost:": "Συνολικό Εκτιμώμενο Κόστος:",
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
  }, [material, windowsQuality]) // Updated dependencies

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
  }

  const calculateWindowsCost = () => {
    const cost =
      windows * windowCosts.window[material][windowsQuality] +
      balconyDoors * windowCosts.balconyDoor[material][windowsQuality] +
      interiorDoors * windowCosts.interiorDoor[material][windowsQuality] +
      mainEntrance * windowCosts.mainEntrance[material][windowsQuality]
    setWindowsCost(cost.toFixed(2))
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
      />
    </div>
  )

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">{translate("Renovation Cost Calculator")}</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="renovation">{translate("General Renovation")}</TabsTrigger>
          <TabsTrigger value="windows">{translate("Doors & Windows")}</TabsTrigger>
        </TabsList>

        <TabsContent value="renovation" className="space-y-4">
          <div>
            <Label htmlFor="area">{isEnglish ? "Area (m²)" : "Εμβαδόν (τ.μ.)"}</Label>
            <Input
              id="area"
              type="number"
              value={area}
              onChange={(e) => {
                setArea(e.target.value)
                calculateRenovationCost()
              }}
              min="1"
            />
          </div>
          <div>
            <Label htmlFor="bathrooms">{isEnglish ? "Bathrooms" : "Μπάνια"}</Label>
            <Input
              id="bathrooms"
              type="number"
              value={bathrooms}
              onChange={(e) => {
                setBathrooms(Number(e.target.value))
                calculateRenovationCost()
              }}
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="kitchens">{isEnglish ? "Kitchens" : "Κουζίνες"}</Label>
            <Input
              id="kitchens"
              type="number"
              value={kitchens}
              onChange={(e) => {
                setKitchens(Number(e.target.value))
                calculateRenovationCost()
              }}
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="rooms">{isEnglish ? "Rooms" : "Δωμάτια"}</Label>
            <Input
              id="rooms"
              type="number"
              value={rooms}
              onChange={(e) => {
                setRooms(Number(e.target.value))
                calculateRenovationCost()
              }}
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="buildingAge">{isEnglish ? "Building Year" : "Έτος Κατασκευής"}</Label>
            <Input
              id="buildingAge"
              type="number"
              value={buildingAge}
              onChange={(e) => {
                setBuildingAge(Number(e.target.value))
                calculateRenovationCost()
              }}
              min="1900"
              max="2024"
            />
          </div>
          <div className="relative z-30">
            <Label>{isEnglish ? "Pool Type" : "Τύπος Πισίνας"}</Label>
            <Select
              value={poolType}
              onValueChange={(value) => {
                setPoolType(value as "none" | "concrete" | "polyester" | "liner")
                calculateRenovationCost()
              }}
            >
              <SelectTrigger className="w-full whitespace-nowrap overflow-hidden bg-white">
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
                  calculateRenovationCost()
                }}
                min="1"
                max="50"
              />
            </div>
          )}
          <div className="relative z-10">
            <Label>{isEnglish ? "Categories" : "Κατηγορίες"}</Label>
            {Object.entries(categories).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  checked={value}
                  onCheckedChange={(checked) => {
                    setCategories((prev) => ({ ...prev, [key]: checked === true }))
                    calculateRenovationCost()
                  }}
                />
                <Label htmlFor={key}>
                  {isEnglish
                    ? key.charAt(0).toUpperCase() + key.slice(1)
                    : {
                        bathroom: "Μπάνιο",
                        kitchen: "Κουζίνα",
                        flooring: "Δάπεδα",
                        electrical: "Ηλεκτρολογικά",
                        structural: "Δομικά",
                        painting: "Βαφή",
                      }[key]}
                </Label>
              </div>
            ))}
          </div>
          <div className="relative z-30">
            <Label>{isEnglish ? "Quality" : "Ποιότητα"}</Label>
            <Select
              value={renovationQuality}
              onValueChange={(value) => {
                setRenovationQuality(value as "basic" | "midRange" | "premium")
                calculateRenovationCost()
              }}
            >
              <SelectTrigger className="w-full whitespace-nowrap overflow-hidden bg-white">
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
          <Button onClick={calculateRenovationCost} className="w-full mt-4">
            {isEnglish ? "Calculate" : "Υπολογισμός"}
          </Button>
          {renovationCost && (
            <div className="mt-4 text-center">
              <p className="font-bold text-lg">{isEnglish ? "Estimated Cost:" : "Εκτιμώμενο Κόστος:"}</p>
              <p className="text-2xl text-primary">{isEnglish ? `€${renovationCost}` : `${renovationCost}€`}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="windows" className="space-y-4">
          {renderInput("Windows", windows, setWindows)}
          {renderInput("Balcony Doors", balconyDoors, setBalconyDoors)}
          {renderInput("Interior Doors", interiorDoors, setInteriorDoors)}
          {renderInput("Main Entrance", mainEntrance, setMainEntrance)}

          <div>
            <Label>{translate("Material")}</Label>
            <Select value={material} onValueChange={(value) => setMaterial(value as Material)}>
              <SelectTrigger>
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
            <Label>{translate("Quality")}</Label>
            <Select value={windowsQuality} onValueChange={(value) => setWindowsQuality(value as Quality)}>
              <SelectTrigger>
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

          {windowsCost && (
            <div className="mt-4 text-center">
              <p className="font-bold text-lg">{translate("Estimated Cost:")}</p>
              <p className="text-2xl text-primary">€{windowsCost}</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {totalCost && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="font-bold text-lg text-center">{translate("Total Estimated Cost:")}</p>
          <p className="text-3xl text-primary text-center">€{totalCost}</p>
        </div>
      )}
    </div>
  )
}
