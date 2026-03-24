// Types for Calculator Lead Capture
// This file is designed to be database-ready for future integration with Supabase/Neon/Airtable

export interface RenovationSelections {
  // General Renovation
  area: number
  bathrooms: number
  kitchens: number
  rooms: number
  buildingAge: number
  poolType: 'none' | 'concrete' | 'polyester' | 'liner'
  poolSize: number
  categories: {
    bathroom: boolean
    kitchen: boolean
    flooring: boolean
    electrical: boolean
    structural: boolean
    painting: boolean
  }
  renovationQuality: 'basic' | 'midRange' | 'premium'
  renovationCost: number
}

export interface WindowsSelections {
  windows: number
  balconyDoors: number
  interiorDoors: number
  mainEntrance: number
  material: 'aluminum' | 'pvc' | 'wood'
  quality: 'basic' | 'midRange' | 'premium'
  windowsCost: number
}

export interface CalculatorSelections {
  activeTab: 'renovation' | 'windows'
  renovation: RenovationSelections
  windows: WindowsSelections
  totalCost: number
}

export interface LeadContactInfo {
  name: string
  email: string
  phone?: string
}

export interface CalculatorLead {
  id?: string
  contact: LeadContactInfo
  selections: CalculatorSelections
  submittedAt: string // ISO 8601 format
  source: 'renovation-calculator'
  status?: 'new' | 'contacted' | 'converted' | 'closed'
  notes?: string
}

// Helper function to generate human-readable summary
export function generateLeadSummary(selections: CalculatorSelections, isEnglish: boolean = false): string {
  const parts: string[] = []
  
  if (selections.activeTab === 'renovation' || selections.renovation.renovationCost > 0) {
    const { renovation } = selections
    const selectedCategories = Object.entries(renovation.categories)
      .filter(([_, value]) => value)
      .map(([key]) => {
        const categoryLabels: Record<string, { el: string; en: string }> = {
          bathroom: { el: 'Μπάνιο', en: 'Bathroom' },
          kitchen: { el: 'Κουζίνα', en: 'Kitchen' },
          flooring: { el: 'Δάπεδα', en: 'Flooring' },
          electrical: { el: 'Ηλεκτρολογικά', en: 'Electrical' },
          structural: { el: 'Δομικά', en: 'Structural' },
          painting: { el: 'Βαφή', en: 'Painting' },
        }
        return categoryLabels[key]?.[isEnglish ? 'en' : 'el'] || key
      })
    
    const qualityLabels = {
      basic: isEnglish ? 'Basic' : 'Βασική',
      midRange: isEnglish ? 'Mid-Range' : 'Μεσαία',
      premium: 'Premium'
    }
    
    parts.push(`${renovation.area}m² ${isEnglish ? 'renovation' : 'ανακαίνιση'}`)
    parts.push(`${renovation.bathrooms} ${isEnglish ? 'bathroom(s)' : 'μπάνιο/α'}`)
    parts.push(`${renovation.kitchens} ${isEnglish ? 'kitchen(s)' : 'κουζίνα/ες'}`)
    parts.push(`${renovation.rooms} ${isEnglish ? 'room(s)' : 'δωμάτιο/α'}`)
    
    if (selectedCategories.length > 0) {
      parts.push(`${isEnglish ? 'Categories' : 'Κατηγορίες'}: ${selectedCategories.join(', ')}`)
    }
    
    parts.push(`${isEnglish ? 'Quality' : 'Ποιότητα'}: ${qualityLabels[renovation.renovationQuality]}`)
    
    if (renovation.poolType !== 'none') {
      const poolLabels = {
        concrete: isEnglish ? 'Concrete pool' : 'Πισίνα μπετόν',
        polyester: isEnglish ? 'Polyester pool' : 'Πολυεστερική πισίνα',
        liner: isEnglish ? 'Liner pool' : 'Πισίνα με επένδυση'
      }
      parts.push(`${poolLabels[renovation.poolType]} ${renovation.poolSize}m²`)
    }
  }
  
  if (selections.windows.windowsCost > 0) {
    const { windows } = selections
    const materialLabels = {
      aluminum: isEnglish ? 'Aluminum' : 'Αλουμίνιο',
      pvc: 'PVC',
      wood: isEnglish ? 'Wood' : 'Ξύλο'
    }
    
    const windowParts: string[] = []
    if (windows.windows > 0) windowParts.push(`${windows.windows} ${isEnglish ? 'windows' : 'παράθυρα'}`)
    if (windows.balconyDoors > 0) windowParts.push(`${windows.balconyDoors} ${isEnglish ? 'balcony doors' : 'μπαλκονόπορτες'}`)
    if (windows.interiorDoors > 0) windowParts.push(`${windows.interiorDoors} ${isEnglish ? 'interior doors' : 'εσωτερικές πόρτες'}`)
    if (windows.mainEntrance > 0) windowParts.push(`${windows.mainEntrance} ${isEnglish ? 'main entrance(s)' : 'κεντρική είσοδος'}`)
    
    if (windowParts.length > 0) {
      parts.push(`${isEnglish ? 'Doors & Windows' : 'Πόρτες & Παράθυρα'}: ${windowParts.join(', ')} (${materialLabels[windows.material]})`)
    }
  }
  
  return parts.join(' | ')
}

// Helper to format cost for display
export function formatCost(cost: number): string {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }).format(cost)
}
