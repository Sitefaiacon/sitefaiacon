"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { sendEmail } from "../actions/send-email"
import { toast } from "sonner"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleServiceChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `
          Υπηρεσία: ${formData.service}
          Ημερομηνία: ${date ? date.toLocaleDateString("el-GR") : "Δεν επιλέχθηκε"}
          
          Μήνυμα: ${formData.message}
        `,
      })

      if (result.success) {
        toast.success(result.message)
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setDate(undefined)
      } else {
        toast.error(result.message)
      }
    } catch {
      toast.error("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Κλείστε Ραντεβού</h1>
            <p className="text-lg text-muted-foreground">
              Συμπληρώστε τη φόρμα για να κλείσετε ραντεβού με την ομάδα μας
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Επιλέξτε Ημερομηνία</CardTitle>
                <CardDescription>Διαλέξτε την ημερομηνία που σας βολεύει</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Στοιχεία Επικοινωνίας</CardTitle>
                <CardDescription>Συμπληρώστε τα στοιχεία σας</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ονοματεπώνυμο</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Το όνομά σας"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Τηλέφωνο</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="69XXXXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Υπηρεσία</Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Κατασκευή Σπιτιού</SelectItem>
                        <SelectItem value="renovation">Ανακαίνιση</SelectItem>
                        <SelectItem value="pool">Κατασκευή Πισίνας</SelectItem>
                        <SelectItem value="listed">Διατηρητέα Κτίρια</SelectItem>
                        <SelectItem value="consultation">Συμβουλευτική</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Μήνυμα</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Περιγράψτε το έργο σας..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Αποστολή..." : "Κλείστε Ραντεβού"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
