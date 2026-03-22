'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RenovationCostCalculator() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [activeTab, setActiveTab] = useState('renovation')
  
  // Renovation
  const [area, setArea] = useState(100)
  const [bathrooms, setBathrooms] = useState(1)
  const [kitchens, setKitchens] = useState(1)
  const [rooms, setRooms] = useState(3)
  const [buildingAge, setBuildingAge] = useState(20)
  const [renovationQuality, setRenovationQuality] = useState('midRange')
  const [hasPool, setHasPool] = useState(false)
  const [poolType, setPoolType] = useState('standard')
  const [poolSize, setPoolSize] = useState(30)
  
  // Windows
  const [windows, setWindows] = useState(5)
  const [balconyDoors, setBalconyDoors] = useState(2)
  const [interiorDoors, setInteriorDoors] = useState(8)
  const [mainEntrance, setMainEntrance] = useState(1)
  const [material, setMaterial] = useState('aluminum')
  const [windowsQuality, setWindowsQuality] = useState('midRange')
  
  // Form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const translate = (text: string): string => {
    const translations: Record<string, string> = {
      'Renovation Cost Calculator': 'Αριθμομηχανή Κόστους Ανακαίνισης',
      'Renovation': 'Ανακαίνιση',
      'Windows & Doors': 'Κουφώματα & Πόρτες',
      'Area (m²)': 'Εμβαδόν (m²)',
      'Bathrooms': 'Μπάνια',
      'Kitchens': 'Κουζίνες',
      'Rooms': 'Δωμάτια',
      'Building Age (years)': 'Ηλικία Κτιρίου (χρόνια)',
      'Quality': 'Ποιότητα',
      'Basic': 'Βασική',
      'Mid-Range': 'Μεσαία',
      'Premium': 'Πολυτελής',
      'Pool': 'Πισίνα',
      'Pool Type': 'Τύπος Πισίνας',
      'Pool Size (m²)': 'Μέγεθος Πισίνας (m²)',
      'Windows': 'Παράθυρα',
      'Balcony Doors': 'Πόρτες Μπαλκονιού',
      'Interior Doors': 'Εσωτερικές Πόρτες',
      'Main Entrance': 'Κύρια Είσοδος',
      'Material': 'Υλικό',
      'Aluminum': 'Αλουμίνιο',
      'PVC': 'PVC',
      'Wood': 'Ξύλο',
      'Request Your Free Quote': 'Ζητήστε Δωρεάν Προσφορά',
      'Name': 'Όνομα',
      'Email': 'Email',
      'Phone (Optional)': 'Τηλέφωνο (Προαιρετικό)',
      'Request Quote': 'Ζητήστε Προσφορά',
      'Sending...': 'Αποστολή...',
      'Request received!': 'Το αίτημα παραλήφθηκε!',
    }
    return isEnglish ? text : (translations[text] || text)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      alert(isEnglish ? 'Please enter name and email' : 'Παρακαλώ εισάγετε όνομα και email')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          renovationDetails: { area, bathrooms, kitchens, rooms, buildingAge, renovationQuality, hasPool, poolType, poolSize },
          windowsDetails: { windows, balconyDoors, interiorDoors, mainEntrance, material, windowsQuality },
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setName('')
          setEmail('')
          setPhone('')
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">{translate('Renovation Cost Calculator')}</h2>
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="px-3 py-1 bg-primary text-white rounded text-sm"
          >
            {isEnglish ? 'EL' : 'EN'}
          </button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="renovation">{translate('Renovation')}</TabsTrigger>
            <TabsTrigger value="windows">{translate('Windows & Doors')}</TabsTrigger>
          </TabsList>

          <TabsContent value="renovation" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{translate('Area (m²)')}</Label>
                <Input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} min="10" />
              </div>
              <div>
                <Label>{translate('Bathrooms')}</Label>
                <Input type="number" value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Kitchens')}</Label>
                <Input type="number" value={kitchens} onChange={(e) => setKitchens(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Rooms')}</Label>
                <Input type="number" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Building Age (years)')}</Label>
                <Input type="number" value={buildingAge} onChange={(e) => setBuildingAge(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Quality')}</Label>
                <select value={renovationQuality} onChange={(e) => setRenovationQuality(e.target.value)} className="w-full px-3 py-2 border rounded">
                  <option value="basic">{translate('Basic')}</option>
                  <option value="midRange">{translate('Mid-Range')}</option>
                  <option value="premium">{translate('Premium')}</option>
                </select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="windows" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{translate('Windows')}</Label>
                <Input type="number" value={windows} onChange={(e) => setWindows(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Balcony Doors')}</Label>
                <Input type="number" value={balconyDoors} onChange={(e) => setBalconyDoors(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Interior Doors')}</Label>
                <Input type="number" value={interiorDoors} onChange={(e) => setInteriorDoors(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Main Entrance')}</Label>
                <Input type="number" value={mainEntrance} onChange={(e) => setMainEntrance(Number(e.target.value))} min="0" />
              </div>
              <div>
                <Label>{translate('Material')}</Label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full px-3 py-2 border rounded">
                  <option value="aluminum">{translate('Aluminum')}</option>
                  <option value="pvc">{translate('PVC')}</option>
                  <option value="wood">{translate('Wood')}</option>
                </select>
              </div>
              <div>
                <Label>{translate('Quality')}</Label>
                <select value={windowsQuality} onChange={(e) => setWindowsQuality(e.target.value)} className="w-full px-3 py-2 border rounded">
                  <option value="basic">{translate('Basic')}</option>
                  <option value="midRange">{translate('Mid-Range')}</option>
                  <option value="premium">{translate('Premium')}</option>
                </select>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">{translate('Request Your Free Quote')}</h3>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">{translate('Request received!')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>{translate('Name')}</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Όνομα" />
              </div>
              <div>
                <Label>{translate('Email')}</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
              </div>
              <div>
                <Label>{translate('Phone (Optional)')}</Label>
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+30 2661..." />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark text-white">
                {isSubmitting ? translate('Sending...') : translate('Request Quote')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
