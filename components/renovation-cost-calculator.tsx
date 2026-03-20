"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "../contexts/language-context"

export function RenovationCostCalculator() {
  const { isEnglish } = useLanguage()
  const [area, setArea] = useState("")
  const [roomCount, setRoomCount] = useState("")
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const calculateCost = () => {
    const areaNum = Number.parseFloat(area)
    const roomCountNum = Number.parseInt(roomCount)

    if (isNaN(areaNum) || isNaN(roomCountNum)) {
      alert(isEnglish ? "Please enter valid numbers." : "Παρακαλώ εισάγετε έγκυρους αριθμούς.")
      return
    }

    // This is a simple calculation. You may want to adjust the formula based on your actual pricing.
    const baseCost = areaNum * 500 // 500 euros per square meter
    const roomCost = roomCountNum * 2000 // 2000 euros per room
    const totalCost = baseCost + roomCost

    setEstimatedCost(totalCost)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        {isEnglish ? "Renovation Cost Calculator" : "Υπολογιστής Κόστους Ανακαίνισης"}
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="area">{isEnglish ? "Total Area (m²)" : "Συνολική Επιφάνεια (m²)"}</Label>
          <Input
            id="area"
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder={isEnglish ? "e.g. 100" : "π.χ. 100"}
          />
        </div>
        <div>
          <Label htmlFor="roomCount">{isEnglish ? "Number of Rooms" : "Αριθμός Δωματίων"}</Label>
          <Input
            id="roomCount"
            type="number"
            value={roomCount}
            onChange={(e) => setRoomCount(e.target.value)}
            placeholder={isEnglish ? "e.g. 3" : "π.χ. 3"}
          />
        </div>
        <Button onClick={calculateCost} className="w-full">
          {isEnglish ? "Calculate" : "Υπολογισμός"}
        </Button>
        {estimatedCost !== null && (
          <div className="mt-4 text-center">
            <p className="font-bold text-lg">{isEnglish ? "Estimated Cost:" : "Εκτιμώμενο Κόστος:"}</p>
            <p className="text-2xl text-primary">€{estimatedCost.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-2">
              {isEnglish
                ? "This is a rough estimate. Contact us for a detailed quote."
                : "Αυτή είναι μια προσεγγιστική εκτίμηση. Επικοινωνήστε μαζί μας για αναλυτική προσφορά."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
