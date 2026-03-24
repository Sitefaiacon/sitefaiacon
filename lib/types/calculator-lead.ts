// Types for Calculator Lead submissions

export interface CalculatorContact {
  name: string
  email: string
  phone?: string
}

export interface RenovationSelections {
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

export interface WindowSelections {
  windows: number
  balconyDoors: number
  interiorDoors: number
  mainEntrance: number
  material: 'aluminum' | 'pvc' | 'wood'
  quality: 'basic' | 'midRange' | 'premium'
  windowsCost: number
}

export interface CalculatorSelections {
  renovation: RenovationSelections
  windows: WindowSelections
  totalCost: number
}

export interface CalculatorLead {
  contact: CalculatorContact
  selections: CalculatorSelections
  submittedAt: string
  source: string
  status: 'new' | 'contacted' | 'quoted' | 'closed'
}

// Helper function to generate a summary of the lead
export function generateLeadSummary(selections: CalculatorSelections, includePrice: boolean = true): string {
  const { renovation, windows, totalCost } = selections
  const parts: string[] = []

  if (renovation.renovationCost > 0) {
    const categories = Object.entries(renovation.categories)
      .filter(([_, value]) => value)
      .map(([key]) => {
        const labels: Record<string, string> = {
          bathroom: 'Μπάνιο',
          kitchen: 'Κουζίνα',
          flooring: 'Δάπεδα',
          electrical: 'Ηλεκτρολογικά',
          structural: 'Δομικά',
          painting: 'Βαφή',
        }
        return labels[key] || key
      })
    
    parts.push(`Ανακαίνιση ${renovation.area}τ.μ. (${categories.join(', ')})`)
  }

  if (windows.windowsCost > 0) {
    const items: string[] = []
    if (windows.windows > 0) items.push(`${windows.windows} παράθυρα`)
    if (windows.balconyDoors > 0) items.push(`${windows.balconyDoors} μπαλκονόπορτες`)
    if (windows.interiorDoors > 0) items.push(`${windows.interiorDoors} εσωτερικές πόρτες`)
    if (windows.mainEntrance > 0) items.push(`${windows.mainEntrance} κεντρική είσοδος`)
    
    parts.push(`Κουφώματα: ${items.join(', ')}`)
  }

  if (includePrice) {
    parts.push(`Συνολικό κόστος: ${formatCost(totalCost)}`)
  }

  return parts.join(' | ')
}

// Helper function to format cost
export function formatCost(cost: number): string {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cost)
}
