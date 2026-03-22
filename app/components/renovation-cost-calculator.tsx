'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RenovationCostCalculator() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [activeTab, setActiveTab] = useState('renovation')
  
  // Renovation form state
  const [area, setArea] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)
  const [kitchens, setKitchens] = useState(0)
  const [rooms, setRooms] = useState(0)
  const [buildingAge, setBuildingAge] = useState(0)
  const [poolType, setPoolType] = useState('none')
  const [poolSize, setPoolSize] = useState(0)
  const [renovationQuality, setRenovationQuality] = useState('basic')

  // Windows form state
  const [material, setMaterial] = useState('aluminum')
  const [windowsQuality, setWindowsQuality] = useState('basic')
  const [windows, setWindows] = useState(0)
  const [balconyDoors, setBalconyDoors] = useState(0)
  const [interiorDoors, setInteriorDoors] = useState(0)
  const [mainEntrance, setMainEntrance] = useState(0)

  // Email state
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const translate = (text: string) => {
    const translations: { [key: string]: string } = {
      'Request Your Free Quote': 'Ζητήστε Δωρεάν Προσφορά',
      'Fill in your details and we will contact you with a personalized quote':
        'Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας με εξατομικευμένη προσφορά',
      'Name': 'Όνομα',
      'Your name': 'Το όνομά σας',
      'Email': 'Email',
      'your@email.com': 'το@email.σας',
      'Phone (Optional)': 'Τηλέφωνο (Προαιρετικό)',
      '+30 2661...': '+30 2661...',
      'Request Free Quote': 'Ζητήστε Δωρεάν Προσφορά',
      'Sending...': 'Αποστολή...',
      'Request received! We will contact you shortly with your personalized quote.':
        'Το αίτημα παραλήφθηκε! Θα επικοινωνήσουμε μαζί σας σύντομα με την εξατομικευμένη προσφορά σας.',
      'Please enter your name and email': 'Παρακαλώ εισάγετε το όνομα και email σας',
      'Error sending email': 'Σφάλμα κατά την αποστολή email',
      'Renovation Cost Calculator': 'Υπολογιστής Κόστους Ανακαίνισης',
      'Renovation': 'Ανακαίνιση',
      'Windows & Doors': 'Κουφώματα & Πόρτες',
      'Area (m²)': 'Εμβαδόν (m²)',
      'Bathrooms': 'Μπάνια',
      'Kitchens': 'Κουζίνες',
      'Rooms': 'Δωμάτια',
      'Building Age (years)': 'Ηλικία Κτιρίου (χρόνια)',
      'Pool Type': 'Τύπος Πισίνας',
      'None': 'Κανένα',
      'Liner': 'Liner',
      'Polyester': 'Polyester',
      'Pool Size (m²)': 'Μέγεθος Πισίνας (m²)',
      'Quality Level': 'Επίπεδο Ποιότητας',
      'Basic': 'Βασικό',
      'Mid-Range': 'Μεσαίο',
      'Premium': 'Πριμιούμ',
      'Material': 'Υλικό',
      'Aluminum': 'Αλουμίνιο',
      'PVC': 'PVC',
      'Wood': 'Ξύλο',
      'Windows': 'Παράθυρα',
      'Balcony Doors': 'Πόρτες Μπαλκονιού',
      'Interior Doors': 'Εσωτερικές Πόρτες',
      'Main Entrance': 'Κύρια Είσοδος',
    }
    return isEnglish ? text : translations[text] || text
  }

  const handleSendEmail = async () => {
    if (!email || !name) {
      alert(translate('Please enter your name and email'))
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
      } else {
        alert(translate('Error sending email'))
      }
    } catch (error) {
      console.error('Error:', error)
      alert(translate('Error sending email'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">{translate('Renovation Cost Calculator')}</h2>
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="px-3 py-1 rounded bg-primary text-white text-sm"
        >
          {isEnglish ? 'ΕΛ' : 'EN'}
        </button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="renovation">{translate('Renovation')}</TabsTrigger>
          <TabsTrigger value="windows">{translate('Windows & Doors')}</TabsTrigger>
        </TabsList>

        <TabsContent value="renovation" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="area">{translate('Area (m²)')}</Label>
              <Input
                id="area"
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="bathrooms">{translate('Bathrooms')}</Label>
              <Input
                id="bathrooms"
                type="number"
                value={bathrooms}
                onChange={(e) => setBathrooms(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="kitchens">{translate('Kitchens')}</Label>
              <Input
                id="kitchens"
                type="number"
                value={kitchens}
                onChange={(e) => setKitchens(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="rooms">{translate('Rooms')}</Label>
              <Input
                id="rooms"
                type="number"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="buildingAge">{translate('Building Age (years)')}</Label>
              <Input
                id="buildingAge"
                type="number"
                value={buildingAge}
                onChange={(e) => setBuildingAge(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="poolType">{translate('Pool Type')}</Label>
              <select
                id="poolType"
                value={poolType}
                onChange={(e) => setPoolType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="none">{translate('None')}</option>
                <option value="liner">{translate('Liner')}</option>
                <option value="polyester">{translate('Polyester')}</option>
              </select>
            </div>
            {poolType !== 'none' && (
              <div>
                <Label htmlFor="poolSize">{translate('Pool Size (m²)')}</Label>
                <Input
                  id="poolSize"
                  type="number"
                  value={poolSize}
                  onChange={(e) => setPoolSize(Number(e.target.value) || 0)}
                  min="0"
                />
              </div>
            )}
            <div>
              <Label htmlFor="renovationQuality">{translate('Quality Level')}</Label>
              <select
                id="renovationQuality"
                value={renovationQuality}
                onChange={(e) => setRenovationQuality(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="basic">{translate('Basic')}</option>
                <option value="midRange">{translate('Mid-Range')}</option>
                <option value="premium">{translate('Premium')}</option>
              </select>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="windows" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="material">{translate('Material')}</Label>
              <select
                id="material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="aluminum">{translate('Aluminum')}</option>
                <option value="pvc">{translate('PVC')}</option>
                <option value="wood">{translate('Wood')}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="windowsQuality">{translate('Quality Level')}</Label>
              <select
                id="windowsQuality"
                value={windowsQuality}
                onChange={(e) => setWindowsQuality(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="basic">{translate('Basic')}</option>
                <option value="midRange">{translate('Mid-Range')}</option>
                <option value="premium">{translate('Premium')}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="windows">{translate('Windows')}</Label>
              <Input
                id="windows"
                type="number"
                value={windows}
                onChange={(e) => setWindows(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="balconyDoors">{translate('Balcony Doors')}</Label>
              <Input
                id="balconyDoors"
                type="number"
                value={balconyDoors}
                onChange={(e) => setBalconyDoors(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="interiorDoors">{translate('Interior Doors')}</Label>
              <Input
                id="interiorDoors"
                type="number"
                value={interiorDoors}
                onChange={(e) => setInteriorDoors(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="mainEntrance">{translate('Main Entrance')}</Label>
              <Input
                id="mainEntrance"
                type="number"
                value={mainEntrance}
                onChange={(e) => setMainEntrance(Number(e.target.value) || 0)}
                min="0"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quote Request Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2 text-center">
          {translate('Request Your Free Quote')}
        </h3>
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
  )
}
