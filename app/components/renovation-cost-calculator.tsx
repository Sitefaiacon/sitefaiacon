"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/language-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RenovationCostCalculator() {
  const { isEnglish } = useLanguage() || { isEnglish: true }

  const [area, setArea] = useState<string>("50")
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [rooms, setRooms] = useState(2)
  const [buildingAge, setBuildingAge] = useState(2000)
  const [poolType, setPoolType] = useState("none")
  const [poolSize, setPoolSize] = useState(8)
  const [categories, setCategories] = useState({
    bathroom: false,
    kitchen: false,
    flooring: false,
    electrical: false,
    structural: false,
    painting: false,
  })
  const [quality, setQuality] = useState("basic")

  const baseCostPerM2 = 415

  const qualityMultipliers = {
    basic: 1.0,
    midRange: 1.3,
    luxury: 2.5,
  }

  const agePenalty = {
    ancient: 1.25,
    old: 1.15,
    modern: 1.0,
  }

  const categoryModifiers = {
    bathroom: 2500 * bathrooms,
    kitchen: 4000 * kitchens,
    flooring: Number(area) * 40,
    electrical: rooms * 500,
    structural: Number(area) * 100,
    painting: Number(area) * 25,
  }

  const poolCostsPerM2 = {
    none: { basic: 0, midRange: 0, luxury: 0 },
    concrete: {
      basic: { cost: 500, materials: "Βασικά πλακάκια" },
      midRange: { cost: 1000, materials: "Κεραμικά πλακάκια υψηλής ποιότητας" },
      luxury: { cost: 1562.5, materials: "Ψηφίδα ή μάρμαρο" },
    },
    polyester: {
      basic: { cost: 200, materials: "Βασικό φινίρισμα" },
      midRange: { cost: 450, materials: "Ενισχυμένο φινίρισμα" },
      luxury: { cost: 781.25, materials: "Premium φινίρισμα με ειδική επίστρωση" },
    },
    liner: {
      basic: { cost: 240, materials: "Απλή μεμβράνη PVC" },
      midRange: { cost: 550, materials: "Ενισχυμένη μεμβράνη με σχέδια" },
      luxury: { cost: 937.5, materials: "Μεμβράνη υψηλής αντοχής με ειδική υφή" },
    },
  }

  const calculateCost = () => {
    const numericArea = Number(area)
    const selectedCategories = Object.values(categories).filter(Boolean).length
    const categoryCost = Object.entries(categories).reduce(
      (acc, [key, isSelected]) => (isSelected ? acc + categoryModifiers[key as keyof typeof categoryModifiers] : acc),
      0,
    )

    const baseCost = selectedCategories > 1 ? numericArea * baseCostPerM2 : 0
    let totalCost = (baseCost + categoryCost) * qualityMultipliers[quality as keyof typeof qualityMultipliers]

    if (quality === "luxury") {
      totalCost += numericArea * 80 + 2000
    }

    const ageCategory = 2024 - buildingAge > 40 ? "ancient" : 2024 - buildingAge >= 20 ? "old" : "modern"
    totalCost *= agePenalty[ageCategory as keyof typeof agePenalty]
    if (numericArea > 125) totalCost *= 0.92

    if (poolType !== "none" && poolSize >= 8) {
      const poolQualityLevel = quality as keyof (typeof poolCostsPerM2)[typeof poolType][number]
      totalCost += Math.max(
        poolSize * poolCostsPerM2[poolType as keyof typeof poolCostsPerM2][poolQualityLevel].cost,
        5800,
      )
    }

    return totalCost.toFixed(2)
  }

  const toggleCategory = (category: keyof typeof categories) => {
    setCategories((prev) => ({ ...prev, [category]: !prev[category] }))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[400px] fixed right-4 top-24 z-50">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        {isEnglish ? "Renovation Cost Calculator" : "Υπολογιστής Κόστους Ανακαίνισης"}
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="area">{isEnglish ? "Total Area (m²)" : "Συνολική Επιφάνεια (m²)"}</Label>
          <Input id="area" type="number" value={area} onChange={(e) => setArea(e.target.value)} min="0" max="2000" />
        </div>
        <div>
          <Label htmlFor="bathrooms">{isEnglish ? "Number of Bathrooms" : "Αριθμός Μπάνιων"}</Label>
          <Input
            id="bathrooms"
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(Number(e.target.value))}
            min="1"
            max="10"
          />
        </div>
        <div>
          <Label htmlFor="kitchens">{isEnglish ? "Number of Kitchens" : "Αριθμός Κουζινών"}</Label>
          <Input
            id="kitchens"
            type="number"
            value={kitchens}
            onChange={(e) => setKitchens(Number(e.target.value))}
            min="1"
            max="5"
          />
        </div>
        <div>
          <Label htmlFor="rooms">{isEnglish ? "Number of Rooms" : "Αριθμός Δωματίων"}</Label>
          <Input
            id="rooms"
            type="number"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            min="1"
            max="20"
          />
        </div>
        <div>
          <Label htmlFor="buildingAge">{isEnglish ? "Year of Construction" : "Έτος Κατασκευής"}</Label>
          <Input
            id="buildingAge"
            type="number"
            value={buildingAge}
            onChange={(e) => setBuildingAge(Number(e.target.value))}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <div>
          <Label>{isEnglish ? "Quality Level" : "Επίπεδο Ποιότητας"}</Label>
          <Select value={quality} onValueChange={setQuality}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">{isEnglish ? "Basic" : "Βασικό"}</SelectItem>
              <SelectItem value="midRange">{isEnglish ? "Mid-Range" : "Μεσαίο"}</SelectItem>
              <SelectItem value="luxury">{isEnglish ? "Luxury" : "Πολυτελές"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>{isEnglish ? "Pool Type" : "Τύπος Πισίνας"}</Label>
          <Select value={poolType} onValueChange={setPoolType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">{isEnglish ? "None" : "Καμία"}</SelectItem>
              <SelectItem value="concrete">{isEnglish ? "Concrete" : "Μπετόν"}</SelectItem>
              <SelectItem value="polyester">{isEnglish ? "Polyester" : "Πολυεστέρας"}</SelectItem>
              <SelectItem value="liner">{isEnglish ? "Liner" : "Επένδυση"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {poolType !== "none" && (
          <div>
            <Label htmlFor="poolSize">{isEnglish ? "Pool Size (m²)" : "Μέγεθος Πισίνας (m²)"}</Label>
            <Input
              id="poolSize"
              type="number"
              value={poolSize}
              onChange={(e) => setPoolSize(Number(e.target.value))}
              min="8"
              max="100"
            />
          </div>
        )}
        <div>
          <Label>{isEnglish ? "Renovation Categories" : "Κατηγορίες Ανακαίνισης"}</Label>
          {Object.entries(categories).map(([category, isChecked]) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={isChecked}
                onCheckedChange={() => toggleCategory(category as keyof typeof categories)}
              />
              <Label htmlFor={category}>{isEnglish ? category : translateCategory(category)}</Label>
            </div>
          ))}
        </div>
        <Button onClick={calculateCost} className="w-full mt-4">
          {isEnglish ? "Calculate" : "Υπολογισμός"}
        </Button>
        {poolType !== "none" && (
          <div className="mt-4 text-sm text-gray-600">
            <p>{isEnglish ? "Pool Materials:" : "Υλικά Πισίνας:"}</p>
            <p className="font-medium">
              {
                poolCostsPerM2[poolType as keyof typeof poolCostsPerM2][
                  quality as keyof (typeof poolCostsPerM2)[typeof poolType]
                ].materials
              }
            </p>
          </div>
        )}
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">{isEnglish ? "Estimated Cost:" : "Εκτιμώμενο Κόστος:"}</p>
          <p className="text-2xl text-primary">{isEnglish ? `€${calculateCost()}` : `${calculateCost()}€`}</p>
        </div>
      </div>
    </div>
  )
}

function translateCategory(category: string): string {
  const translations: { [key: string]: string } = {
    bathroom: "Μπάνιο",
    kitchen: "Κουζίνα",
    flooring: "Δάπεδα",
    electrical: "Ηλεκτρολογικά",
    structural: "Δομικά",
    painting: "Βαφή",
  }
  return translations[category] || category
}
