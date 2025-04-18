"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bath, UtensilsCrossed, Ruler, Calendar, LineChart } from "lucide-react"

export default function RenovationCostDemo() {
  const [area, setArea] = useState(60)
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [buildingYear, setBuildingYear] = useState(2000)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const handleCalculate = () => {
    // Βασικό κόστος ανά τ.μ.
    const baseCostPerSqm = 450

    // Υπολογισμός κόστους για μπάνια και κουζίνες
    const bathroomCost = bathrooms * 5000
    const kitchenCost = kitchens * 7000

    // Προσαρμογή με βάση την ηλικία του κτιρίου
    const currentYear = new Date().getFullYear()
    const buildingAge = currentYear - buildingYear
    let ageFactor = 1.0

    if (buildingAge > 40) {
      ageFactor = 1.3 // 30% επιπλέον για πολύ παλιά κτίρια
    } else if (buildingAge > 20) {
      ageFactor = 1.15 // 15% επιπλέον για παλιά κτίρια
    }

    // Συνολικό κόστος
    const totalCost = (area * baseCostPerSqm + bathroomCost + kitchenCost) * ageFactor

    setEstimatedCost(Math.round(totalCost))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 flex items-center gap-2">
        <LineChart className="w-6 h-6" /> Υπολογιστής Κόστους Ανακαίνισης
      </h1>

      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div>
          <Label htmlFor="area" className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-primary" /> Εμβαδόν (τ.μ.)
          </Label>
          <Input
            id="area"
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="bathrooms" className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-primary" /> Μπάνια
          </Label>
          <Input
            id="bathrooms"
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(Number(e.target.value))}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="kitchens" className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-primary" /> Κουζίνες
          </Label>
          <Input
            id="kitchens"
            type="number"
            value={kitchens}
            onChange={(e) => setKitchens(Number(e.target.value))}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="buildingYear" className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Έτος Κατασκευής
          </Label>
          <Input
            id="buildingYear"
            type="number"
            value={buildingYear}
            onChange={(e) => setBuildingYear(Number(e.target.value))}
            className="mt-1"
          />
        </div>

        <div className="pt-4">
          <Button className="w-full flex items-center justify-center gap-2" onClick={handleCalculate}>
            <LineChart className="w-5 h-5" /> Υπολογισμός
          </Button>
        </div>

        {estimatedCost !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-700">Εκτιμώμενο Κόστος:</p>
            <p className="text-3xl font-bold text-blue-700">{estimatedCost.toLocaleString()} €</p>
          </div>
        )}
      </div>
    </div>
  )
}
