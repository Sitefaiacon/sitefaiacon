'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RenovationCostCalculator() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [area, setArea] = useState('')
  const [isEnglish, setIsEnglish] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!name || !email || !area) {
      alert(isEnglish ? 'Please fill all fields' : 'Παρακαλώ συμπληρώστε όλα τα πεδία')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, area }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setName('')
          setEmail('')
          setPhone('')
          setArea('')
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">
          {isEnglish ? 'Free Quote' : 'Δωρεάν Προσφορά'}
        </h2>
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="px-3 py-1 bg-gray-200 rounded text-sm"
        >
          {isEnglish ? 'EL' : 'EN'}
        </button>
      </div>

      {submitted ? (
        <div className="p-4 bg-green-100 border border-green-400 rounded text-center">
          <p className="text-green-800 font-medium">
            {isEnglish
              ? 'Request received! We will contact you soon.'
              : 'Το αίτημα παραλήφθηκε! Θα επικοινωνήσουμε σύντομα.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">{isEnglish ? 'Name' : 'Όνομα'}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isEnglish ? 'Your name' : 'Το όνομά σας'}
            />
          </div>

          <div>
            <Label htmlFor="email">{isEnglish ? 'Email' : 'Email'}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isEnglish ? 'your@email.com' : 'το@email.σας'}
            />
          </div>

          <div>
            <Label htmlFor="phone">{isEnglish ? 'Phone' : 'Τηλέφωνο'}</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={isEnglish ? '+30 26610...' : '+30 26610...'}
            />
          </div>

          <div>
            <Label htmlFor="area">{isEnglish ? 'Area (m²)' : 'Εμβαδόν (m²)'}</Label>
            <Input
              id="area"
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={isEnglish ? 'Square meters' : 'Τετραγωνικά μέτρα'}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark text-white"
          >
            {loading
              ? isEnglish
                ? 'Sending...'
                : 'Αποστολή...'
              : isEnglish
                ? 'Request Quote'
                : 'Ζητήστε Προσφορά'}
          </Button>
        </div>
      )}
    </div>
  )
}
