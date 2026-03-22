'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Wrench, Plus } from 'lucide-react'

interface EstimateDetails {
  area: number
  bathrooms: number
  kitchens: number
  rooms: number
  buildingAge: string
  poolType: string
  poolSize: number
  renovationQuality: string
  material: string
  windowsQuality: string
  windows: number
  balconyDoors: number
  interiorDoors: number
  mainEntrance: number
}

export default function RenovationCostCalculator() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [activeTab, setActiveTab] = useState('renovation')

  // Renovation state
  const [area, setArea] = useState(100)
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [rooms, setRooms] = useState(3)
  const [buildingAge, setBuildingAge] = useState('old')
  const [renovationQuality, setRenovationQuality] = useState('basic')
  const [poolType, setPoolType] = useState('none')
  const [poolSize, setPoolSize] = useState(0)
  const [renovationCost, setRenovationCost] = useState('0.00')

  // Windows state
  const [material, setMaterial] = useState('aluminum')
  const [windowsQuality, setWindowsQuality] = useState('standard')
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)
  const [windowsCost, setWindowsCost] = useState('0.00')
  const [totalCost, setTotalCost] = useState('0.00')

  // Email state
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  // Translation object
  const translations: Record<string, string> = {
    'Renovation Cost Calculator': 'Αριθμομηχανή Κόστους Ανακαίνισης',
    'Renovation': 'Ανακαίνιση',
    'Windows & Doors': 'Κουφώματα & Πόρτες',
    'Area (m²)': 'Εμβαδόν (m²)',
    'Bathrooms': 'Μπάνια',
    'Kitchens': 'Κουζίνες',
    'Rooms': 'Δωμάτια',
    'Building Age': 'Ηλικία Κτιρίου',
    'Renovation Quality': 'Ποιότητα Ανακαίνισης',
    'Pool Type': 'Τύπος Πισίνας',
    'Pool Size (m²)': 'Μέγεθος Πισίνας (m²)',
    'Windows': 'Παράθυρα',
    'Material': 'Υλικό',
    'Quality': 'Ποιότητα',
    'Balcony Doors': 'Θύρες Μπαλκονιού',
    'Interior Doors': 'Εσωτερικές Πόρτες',
    'Main Entrance': 'Κύρια Είσοδος',
    'Request Your Free Quote': 'Ζητήστε Δωρεάν Προσφορά',
    'Fill in your details and we will contact you with a personalized quote': 'Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας με εξατομικευμένη προσφορά',
    'Name': 'Όνομα',
    'Your name': 'Το όνομά σας',
    'Email': 'Email',
    'your@email.com': 'το@email.σας',
    'Phone (Optional)': 'Τηλέφωνο (Προαιρετικό)',
    '+30 2661...': '+30 2661...',
    'Request Free Quote': 'Ζητήστε Δωρεάν Προσφορά',
    'Sending...': 'Αποστολή...',
    'Request received! We will contact you shortly with your personalized quote.': 'Το αίτημα παραλήφθηκε! Θα επικοινωνήσουμε μαζί σας σύντομα με την εξατομικευμένη προσφορά σας.',
  }

  const translate = (text: string) => {
    return isEnglish ? text : translations[text] || text
  }

  // Pool costs per m²
  const poolCostsPerM2: Record<string, Record<string, number>> = {
    none: { basic: 0, midRange: 0, premium: 0 },
    concrete: { basic: 800, midRange: 1200, premium: 1500 },
    liner: { basic: 1200, midRange: 1500, premium: 2000 },
    polyester: { basic: 1500, midRange: 2000, premium: 2500 },
  }

  // Window costs per piece
  const windowCosts = {
    window: {
      aluminum: { standard: 300, premium: 450 },
      pvc: { standard: 400, premium: 600 },
      wood: { standard: 600, premium: 900 },
    },
    balconyDoor: {
      aluminum: { standard: 600, premium: 900 },
      pvc: { standard: 800, premium: 1200 },
      wood: { standard: 1200, premium: 1800 },
    },
    interiorDoor: {
      aluminum: { standard: 200, premium: 350 },
      pvc: { standard: 250, premium: 400 },
      wood: { standard: 400, premium: 700 },
    },
    mainEntrance: {
      aluminum: { standard: 1500, premium: 2500 },
      pvc: { standard: 1800, premium: 3000 },
      wood: { standard: 3000, premium: 5000 },
    },
  }

  // Renovation cost calculation
  useEffect(() => {
    let baseCost = 0

    // Area-based cost
    const basePerM2 = renovationQuality === 'basic' ? 150 : renovationQuality === 'midRange' ? 250 : 400
    baseCost = area * basePerM2

    // Bathroom multiplier
    baseCost += bathrooms * 3000

    // Kitchen multiplier
    baseCost += kitchens * 5000

    // Building age adjustment
    if (buildingAge === 'modern') baseCost *= 0.8
    else if (buildingAge === 'middle') baseCost *= 1.0
    else baseCost *= 1.2

    // Pool cost
    if (poolType !== 'none' && poolSize > 0) {
      baseCost += poolSize * (poolCostsPerM2[poolType]?.[renovationQuality] || 0)
    }

    setRenovationCost(baseCost.toFixed(2))
  }, [area, bathrooms, kitchens, buildingAge, renovationQuality, poolType, poolSize])

  // Windows cost calculation
  useEffect(() => {
    const cost =
      windows * windowCosts.window[material as keyof typeof windowCosts.window]?.[windowsQuality as keyof typeof windowCosts.window.aluminum] || 0 +
      balconyDoors * windowCosts.balconyDoor[material as keyof typeof windowCosts.balconyDoor]?.[windowsQuality as keyof typeof windowCosts.balconyDoor.aluminum] || 0 +
      interiorDoors * windowCosts.interiorDoor[material as keyof typeof windowCosts.interiorDoor]?.[windowsQuality as keyof typeof windowCosts.interiorDoor.aluminum] || 0 +
      mainEntrance * windowCosts.mainEntrance[material as keyof typeof windowCosts.mainEntrance]?.[windowsQuality as keyof typeof windowCosts.mainEntrance.aluminum] || 0

    setWindowsCost(cost.toFixed(2))
  }, [windows, balconyDoors, interiorDoors, mainEntrance, material, windowsQuality])

  // Total cost calculation
  useEffect(() => {
    const total = parseFloat(renovationCost) + parseFloat(windowsCost)
    setTotalCost(total.toFixed(2))
  }, [renovationCost, windowsCost])

  // Pool quality constraint
  useEffect(() => {
    if (poolType === 'liner' && renovationQuality === 'basic') {
      setRenovationQuality('midRange')
    }
    if (poolType === 'polyester' && renovationQuality !== 'premium') {
      setRenovationQuality('premium')
    }
  }, [poolType, renovationQuality])

  // Send email function
  const handleSendEmail = async () => {
    if (!email || !name) {
      alert(isEnglish ? 'Please enter your name and email' : 'Παρακαλώ εισάγετε το όνομα και email σας')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          renovationCost,
          windowsCost,
          totalCost,
          estimateDetails: {
            area,
            bathrooms,
            kitchens,
            rooms,
            buildingAge,
            poolType,
            poolSize,
            renovationQuality,
            material,
            windowsQuality,
            windows,
            balconyDoors,
            interiorDoors,
            mainEntrance,
          },
        }),
      })

      if (response.ok) {
        setEmailSubmitted(true)
        setTimeout(() => {
          setEmailSubmitted(false)
          setEmail('')
          setName('')
          setPhone('')
        }, 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert(isEnglish ? 'Error sending request' : 'Σφάλμα κατά την αποστολή αιτήματος')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-background">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">{translate('Renovation Cost Calculator')}</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEnglish(!isEnglish)}
          >
            {isEnglish ? 'ΕΛ' : 'EN'}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="renovation">{translate('Renovation')}</TabsTrigger>
            <TabsTrigger value="windows">{translate('Windows & Doors')}</TabsTrigger>
          </TabsList>

          <TabsContent value="renovation" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>{translate('Area (m²)')}</Label>
                <Input type="number" value={area} onChange={(e) => setArea(Number(e.target.value) || 0)} min="0" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>{translate('Bathrooms')}</Label>
                  <Input type="number" value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value) || 0)} min="0" />
                </div>
                <div>
                  <Label>{translate('Kitchens')}</Label>
                  <Input type="number" value={kitchens} onChange={(e) => setKitchens(Number(e.target.value) || 0)} min="0" />
                </div>
                <div>
                  <Label>{translate('Rooms')}</Label>
                  <Input type="number" value={rooms} onChange={(e) => setRooms(Number(e.target.value) || 0)} min="0" />
                </div>
              </div>

              <div>
                <Label>{translate('Building Age')}</Label>
                <select
                  value={buildingAge}
                  onChange={(e) => setBuildingAge(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="modern">{isEnglish ? 'Modern (0-20 years)' : 'Σύγχρονο (0-20 χρόνια)'}</option>
                  <option value="middle">{isEnglish ? 'Middle Age (20-50 years)' : 'Μεσαία Ηλικία (20-50 χρόνια)'}</option>
                  <option value="old">{isEnglish ? 'Old (50+ years)' : 'Παλιό (50+ χρόνια)'}</option>
                </select>
              </div>

              <div>
                <Label>{translate('Renovation Quality')}</Label>
                <select
                  value={renovationQuality}
                  onChange={(e) => setRenovationQuality(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="basic">{isEnglish ? 'Basic' : 'Βασική'}</option>
                  <option value="midRange">{isEnglish ? 'Mid-Range' : 'Μεσαία'}</option>
                  <option value="premium">{isEnglish ? 'Premium' : 'Πρίμιουμ'}</option>
                </select>
              </div>

              <div>
                <Label>{translate('Pool Type')}</Label>
                <select
                  value={poolType}
                  onChange={(e) => setPoolType(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="none">{isEnglish ? 'None' : 'Καμία'}</option>
                  <option value="concrete">{isEnglish ? 'Concrete' : 'Σκυρόδεμα'}</option>
                  <option value="liner">{isEnglish ? 'Liner' : 'Liner'}</option>
                  <option value="polyester">{isEnglish ? 'Polyester' : 'Polyester'}</option>
                </select>
              </div>

              {poolType !== 'none' && (
                <div>
                  <Label>{translate('Pool Size (m²)')}</Label>
                  <Input type="number" value={poolSize} onChange={(e) => setPoolSize(Number(e.target.value) || 0)} min="0" />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="windows" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>{translate('Material')}</Label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="aluminum">{isEnglish ? 'Aluminum' : 'Αλουμίνιο'}</option>
                    <option value="pvc">PVC</option>
                    <option value="wood">{isEnglish ? 'Wood' : 'Ξύλο'}</option>
                  </select>
                </div>
                <div>
                  <Label>{translate('Quality')}</Label>
                  <select
                    value={windowsQuality}
                    onChange={(e) => setWindowsQuality(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="standard">{isEnglish ? 'Standard' : 'Τυπική'}</option>
                    <option value="premium">{isEnglish ? 'Premium' : 'Πρίμιουμ'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>{translate('Windows')}</Label>
                  <Input type="number" value={windows} onChange={(e) => setWindows(Number(e.target.value) || 0)} min="0" />
                </div>
                <div>
                  <Label>{translate('Balcony Doors')}</Label>
                  <Input type="number" value={balconyDoors} onChange={(e) => setBalconyDoors(Number(e.target.value) || 0)} min="0" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>{translate('Interior Doors')}</Label>
                  <Input type="number" value={interiorDoors} onChange={(e) => setInteriorDoors(Number(e.target.value) || 0)} min="0" />
                </div>
                <div>
                  <Label>{translate('Main Entrance')}</Label>
                  <Input type="number" value={mainEntrance} onChange={(e) => setMainEntrance(Number(e.target.value) || 0)} min="0" max="1" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quote Request Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-center">{translate('Request Your Free Quote')}</h3>
          <p className="text-sm text-gray-600 mb-4 text-center">
            {translate('Fill in your details and we will contact you with a personalized quote')}
          </p>

          {emailSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                {translate('Request received! We will contact you shortly with your personalized quote.')}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <Label htmlFor="name">{translate('Name')}</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={translate('Your name')}
                />
              </div>
              <div>
                <Label htmlFor="email">{translate('Email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translate('your@email.com')}
                />
              </div>
              <div>
                <Label htmlFor="phone">{translate('Phone (Optional)')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={translate('+30 2661...')}
                />
              </div>
              <Button
                onClick={handleSendEmail}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white"
              >
                {isSubmitting ? translate('Sending...') : translate('Request Free Quote')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
