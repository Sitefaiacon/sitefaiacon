"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bath, UtensilsCrossed, Ruler, Calendar, LineChart } from "lucide-react"

export default function RenovationCostDemo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 flex items-center gap-2">
        <LineChart className="w-6 h-6" /> Υπολογιστής Κόστους Ανακαίνισης
      </h1>

      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div>
          <Label htmlFor="area" className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-700" /> Εμβαδόν (τ.μ.)
          </Label>
          <Input id="area" type="number" defaultValue={60} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="bathrooms" className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-blue-700" /> Μπάνια
          </Label>
          <Input id="bathrooms" type="number" defaultValue={1} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="kitchens" className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-blue-700" /> Κουζίνες
          </Label>
          <Input id="kitchens" type="number" defaultValue={1} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="buildingYear" className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700" /> Έτος Κατασκευής
          </Label>
          <Input id="buildingYear" type="number" defaultValue={2000} className="mt-1" />
        </div>

        <div className="pt-4">
          <Button className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white hover:bg-blue-600">
            <LineChart className="w-5 h-5" /> Υπολογισμός
          </Button>
        </div>
      </div>
    </div>
  )
}
