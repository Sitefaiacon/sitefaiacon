/**
 * lib/calculator/pricing.ts
 *
 * Single source of truth for ALL calculator pricing constants and logic.
 * Used by:
 *   - app/components/renovation-cost-calculator.tsx  (frontend display)
 *   - app/api/calculator-lead/route.ts               (admin email breakdown)
 *
 * NEVER duplicate these constants elsewhere.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type Material = "aluminum" | "pvc" | "wood"
export type Quality = "basic" | "premium"
export type PoolType = "none" | "liner" | "polyester" | "concrete"

export interface RenovationInput {
  area: number
  bathrooms: number
  kitchens: number
  rooms: number
  buildingAge: number
  quality: Quality
  poolType: PoolType
  poolSize: number
  categories: {
    bathroom: boolean
    kitchen: boolean
    flooring: boolean
    electrical: boolean
    structural: boolean
    painting: boolean
    roof: boolean
  }
}

export interface WindowsInput {
  windows: number
  balconyDoors: number
  interiorDoors: number
  mainEntrance: number
  material: Material
  quality: Quality
}

// A single line item in the breakdown (one formula/operation)
export interface CalcLine {
  label: string          // Greek label
  formula: string        // Human-readable formula string e.g. "120 × 590"
  unit: string           // e.g. "€/τ.μ." or "€ ανά τεμάχιο" or ""
  result: number
}

export interface CalcMultiplier {
  label: string          // Greek label
  formula: string        // e.g. "45.200 × 1,12"
  value: number          // multiplier value
  result: number         // value after applying multiplier
}

export interface RenovationBreakdown {
  isFullRenovation: boolean
  selectedCategories: string[]   // Greek labels of selected categories
  lines: CalcLine[]
  subtotalBeforeMultipliers: number
  ageMultiplierLabel: string
  ageMultiplierValue: number
  sizeMultiplierLabel: string
  sizeMultiplierValue: number
  subtotalAfterMultipliers: number
  poolLines: CalcLine[]
  poolSubtotal: number
  total: number                  // renovation + pool (point estimate)
  range: { min: number; max: number }
  notes: string[]
}

export interface WindowsBreakdown {
  lines: CalcLine[]
  total: number
  range: { min: number; max: number }
  notes: string[]
}

export interface QuoteBreakdown {
  renovation: RenovationBreakdown | null
  windows: WindowsBreakdown | null
  grandTotal: number
  grandRange: { min: number; max: number } | null
  submittedFromTab: "renovation" | "windows" | "pool" | null
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const RENOVATION_RATES: Record<string, Record<Quality, number>> = {
  full:        { basic: 590,   premium: 760   },
  bathroom:    { basic: 6200,  premium: 8800  },
  kitchen:     { basic: 9500,  premium: 13500 },
  flooring:    { basic: 45,    premium: 68    },
  electrical:  { basic: 48,    premium: 72    },
  structural:  { basic: 90,    premium: 140   },
  painting:    { basic: 13,    premium: 18    },
  roof:        { basic: 155,   premium: 188   },
}

export const POOL_COSTS_PER_M2: Record<PoolType, Partial<Record<Quality, number>>> = {
  none:       { basic: 0,    premium: 0    },
  liner:      { basic: 700,  premium: 850  },
  polyester:  {              premium: 950  },
  concrete:   { basic: 1100, premium: 1350 },
}

export const WINDOW_COSTS: Record<string, Record<Material, Record<Quality, number>>> = {
  window: {
    aluminum: { basic: 850,  premium: 1050 },
    pvc:      { basic: 700,  premium: 900  },
    wood:     { basic: 980,  premium: 1250 },
  },
  balconyDoor: {
    aluminum: { basic: 1500, premium: 1850 },
    pvc:      { basic: 1300, premium: 1600 },
    wood:     { basic: 1700, premium: 2100 },
  },
  interiorDoor: {
    aluminum: { basic: 560,  premium: 720  },
    pvc:      { basic: 450,  premium: 620  },
    wood:     { basic: 430,  premium: 650  },
  },
  mainEntrance: {
    aluminum: { basic: 1850, premium: 2350 },
    pvc:      { basic: 1650, premium: 2100 },
    wood:     { basic: 1950, premium: 2450 },
  },
}

// Greek display labels for categories
export const CATEGORY_LABELS_EL: Record<string, string> = {
  bathroom:   "Μπάνιο",
  kitchen:    "Κουζίνα",
  flooring:   "Δάπεδα",
  electrical: "Ηλεκτρολογικά",
  structural: "Δομικά",
  painting:   "Βαφή",
  roof:       "Στέγη",
}

export const QUALITY_LABELS_EL: Record<Quality, string> = {
  basic:   "Βασική",
  premium: "Premium",
}

export const MATERIAL_LABELS_EL: Record<Material, string> = {
  aluminum: "Αλουμίνιο",
  pvc:      "PVC",
  wood:     "Ξύλο",
}

export const POOL_TYPE_LABELS_EL: Record<PoolType, string> = {
  none:      "Καμία",
  liner:     "Με επένδυση (Liner)",
  polyester: "Πολυεστερική",
  concrete:  "Μπετόν",
}

// ─── Helper: currency formatter ───────────────────────────────────────────────

export function fmtEur(n: number): string {
  return new Intl.NumberFormat("el-GR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)
}

export function fmtNum(n: number): string {
  return new Intl.NumberFormat("el-GR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)
}

// ─── Multiplier helpers ───────────────────────────────────────────────────────

export function getAgeMultiplier(yearBuilt: number): { value: number; label: string } {
  const age = new Date().getFullYear() - yearBuilt
  if (age > 40) return { value: 1.12, label: `Κτίριο ηλικίας ${age} ετών — προσαύξηση +12%` }
  if (age >= 20) return { value: 1.06, label: `Κτίριο ηλικίας ${age} ετών — προσαύξηση +6%` }
  return { value: 1.0, label: `Κτίριο ηλικίας ${age} ετών — χωρίς προσαύξηση` }
}

export function getSizeMultiplier(area: number): { value: number; label: string } {
  if (area < 50) return { value: 1.08, label: `Μικρό εμβαδόν (< 50 τ.μ.) — προσαύξηση +8%` }
  if (area > 120) return { value: 0.95, label: `Μεγάλο εμβαδόν (> 120 τ.μ.) — έκπτωση −5%` }
  return { value: 1.0, label: `Κανονικό εμβαδόν (50–120 τ.μ.) — χωρίς προσαύξηση` }
}

// ─── Core breakdown generator ─────────────────────────────────────────────────

export function generateRenovationBreakdown(input: RenovationInput): RenovationBreakdown | null {
  const { area, bathrooms, kitchens, rooms, buildingAge, quality, poolType, poolSize, categories } = input

  if (!area || area <= 0) return null

  const selectedCategoryKeys = Object.entries(categories)
    .filter(([, v]) => v)
    .map(([k]) => k)

  if (selectedCategoryKeys.length === 0 && poolType === "none") return null

  const selectedCategoryLabels = selectedCategoryKeys.map((k) => CATEGORY_LABELS_EL[k] || k)

  const lines: CalcLine[] = []
  let subtotal = 0

  const isFullRenovation =
    selectedCategoryKeys.length >= 4 ||
    (categories.bathroom && categories.kitchen && categories.flooring && categories.electrical)

  const rate = RENOVATION_RATES.full[quality]

  if (isFullRenovation) {
    const result = area * rate
    subtotal += result
    lines.push({
      label: "Πλήρης ανακαίνιση (ενεργοποιήθηκε λόγω ≥4 κατηγοριών ή βασικής τετράδας)",
      formula: `${fmtNum(area)} τ.μ. × ${fmtNum(rate)} €/τ.μ.`,
      unit: "€/τ.μ.",
      result,
    })
  } else {
    if (categories.bathroom && bathrooms > 0) {
      const unitRate = RENOVATION_RATES.bathroom[quality]
      const result = bathrooms * unitRate
      subtotal += result
      lines.push({
        label: `Ανακαίνιση μπάνιων`,
        formula: `${bathrooms} μπάνια × ${fmtNum(unitRate)} €/μπάνιο`,
        unit: "€/μπάνιο",
        result,
      })
    }
    if (categories.kitchen && kitchens > 0) {
      const unitRate = RENOVATION_RATES.kitchen[quality]
      const result = kitchens * unitRate
      subtotal += result
      lines.push({
        label: `Ανακαίνιση κουζινών`,
        formula: `${kitchens} κουζίνες × ${fmtNum(unitRate)} €/κουζίνα`,
        unit: "€/κουζίνα",
        result,
      })
    }
    if (categories.flooring) {
      const unitRate = RENOVATION_RATES.flooring[quality]
      const result = area * unitRate
      subtotal += result
      lines.push({
        label: "Δάπεδα",
        formula: `${fmtNum(area)} τ.μ. × ${fmtNum(unitRate)} €/τ.μ.`,
        unit: "€/τ.μ.",
        result,
      })
    }
    if (categories.electrical && rooms > 0) {
      const unitRate = RENOVATION_RATES.electrical[quality]
      const electricalAreaFactor = Math.max(1, rooms / 2)
      const result = area * unitRate * electricalAreaFactor
      subtotal += result
      lines.push({
        label: "Ηλεκτρολογικά",
        formula: `${fmtNum(area)} τ.μ. × ${fmtNum(unitRate)} €/τ.μ. × συντελεστής δωματίων ${electricalAreaFactor.toFixed(2)} (${rooms} δωμάτια)`,
        unit: "€/τ.μ.",
        result,
      })
    }
    if (categories.structural) {
      const unitRate = RENOVATION_RATES.structural[quality]
      const result = area * unitRate
      subtotal += result
      lines.push({
        label: "Δομικά",
        formula: `${fmtNum(area)} τ.μ. × ${fmtNum(unitRate)} €/τ.μ.`,
        unit: "€/τ.μ.",
        result,
      })
    }
    if (categories.painting) {
      const unitRate = RENOVATION_RATES.painting[quality]
      const result = area * unitRate
      subtotal += result
      lines.push({
        label: "Βαφή",
        formula: `${fmtNum(area)} τ.μ. × ${fmtNum(unitRate)} €/τ.μ.`,
        unit: "€/τ.μ.",
        result,
      })
    }
    if (categories.roof) {
      const unitRate = RENOVATION_RATES.roof[quality]
      const result = area * unitRate
      subtotal += result
      lines.push({
        label: "Στέγη",
        formula: `${fmtNum(area)} τ.μ. × ${fmtNum(unitRate)} €/τ.μ.`,
        unit: "€/τ.μ.",
        result,
      })
    }
  }

  // Pool lines (separate from renovation)
  const poolLines: CalcLine[] = []
  let poolSubtotal = 0

  if (poolType !== "none" && poolSize > 0) {
    const poolRate = POOL_COSTS_PER_M2[poolType][quality] ?? 0
    if (poolRate > 0) {
      const result = poolRate * poolSize
      poolSubtotal += result
      poolLines.push({
        label: `Πισίνα — ${POOL_TYPE_LABELS_EL[poolType]}`,
        formula: `${poolSize} τ.μ. × ${fmtNum(poolRate)} €/τ.μ.`,
        unit: "€/τ.μ.",
        result,
      })
    }
  }

  const ageMult = getAgeMultiplier(buildingAge)
  const sizeMult = getSizeMultiplier(area)

  const subtotalAfterMultipliers = subtotal * ageMult.value * sizeMult.value
  const total = subtotalAfterMultipliers + poolSubtotal

  const notes: string[] = []
  if (isFullRenovation) {
    notes.push(
      "Επιλέχθηκε τιμή πλήρους ανακαίνισης (€/τ.μ.) αντί επιμέρους, επειδή επιλέχθηκαν ≥4 κατηγορίες ή τουλάχιστον μπάνιο + κουζίνα + δάπεδα + ηλεκτρολογικά."
    )
  }
  if (ageMult.value !== 1.0) {
    notes.push(`Εφαρμόστηκε συντελεστής ηλικίας κτιρίου: ×${ageMult.value}`)
  }
  if (sizeMult.value !== 1.0) {
    notes.push(`Εφαρμόστηκε συντελεστής εμβαδού: ×${sizeMult.value}`)
  }
  if (poolSubtotal > 0) {
    notes.push("Το κόστος πισίνας υπολογίζεται ως πρόσθετη εργασία και δεν επηρεάζεται από τους συντελεστές ανακαίνισης.")
  }

  return {
    isFullRenovation,
    selectedCategories: selectedCategoryLabels,
    lines,
    subtotalBeforeMultipliers: subtotal,
    ageMultiplierLabel: ageMult.label,
    ageMultiplierValue: ageMult.value,
    sizeMultiplierLabel: sizeMult.label,
    sizeMultiplierValue: sizeMult.value,
    subtotalAfterMultipliers,
    poolLines,
    poolSubtotal,
    total,
    range: { min: total * 0.9, max: total * 1.12 },
    notes,
  }
}

export function generateWindowsBreakdown(input: WindowsInput): WindowsBreakdown | null {
  const { windows, balconyDoors, interiorDoors, mainEntrance, material, quality } = input
  const lines: CalcLine[] = []
  let total = 0

  if (windows > 0) {
    const unitCost = WINDOW_COSTS.window[material][quality]
    const result = windows * unitCost
    total += result
    lines.push({
      label: "Παράθυρα",
      formula: `${windows} τεμ. × ${fmtNum(unitCost)} €/τεμ.`,
      unit: "€/τεμ.",
      result,
    })
  }
  if (balconyDoors > 0) {
    const unitCost = WINDOW_COSTS.balconyDoor[material][quality]
    const result = balconyDoors * unitCost
    total += result
    lines.push({
      label: "Μπαλκονόπορτες",
      formula: `${balconyDoors} τεμ. × ${fmtNum(unitCost)} €/τεμ.`,
      unit: "€/τεμ.",
      result,
    })
  }
  if (interiorDoors > 0) {
    const unitCost = WINDOW_COSTS.interiorDoor[material][quality]
    const result = interiorDoors * unitCost
    total += result
    lines.push({
      label: "Εσωτερικές πόρτες",
      formula: `${interiorDoors} τεμ. × ${fmtNum(unitCost)} €/τεμ.`,
      unit: "€/τεμ.",
      result,
    })
  }
  if (mainEntrance > 0) {
    const unitCost = WINDOW_COSTS.mainEntrance[material][quality]
    const result = mainEntrance * unitCost
    total += result
    lines.push({
      label: "Κεντρική είσοδος",
      formula: `${mainEntrance} τεμ. × ${fmtNum(unitCost)} €/τεμ.`,
      unit: "€/τεμ.",
      result,
    })
  }

  if (total === 0) return null

  return {
    lines,
    total,
    range: { min: total * 0.92, max: total * 1.12 },
    notes: [
      `Υλικό: ${MATERIAL_LABELS_EL[material]}, Ποιότητα: ${QUALITY_LABELS_EL[quality]}`,
      "Το εύρος κόστους κουφωμάτων κυμαίνεται ±8–12% ανάλογα με τελικές μετρήσεις και τοποθέτηση.",
    ],
  }
}

export function generateQuoteBreakdown(
  renovationInput: RenovationInput | null,
  windowsInput: WindowsInput | null,
  submittedFromTab: "renovation" | "windows" | "pool" | null
): QuoteBreakdown {
  const renovation = renovationInput ? generateRenovationBreakdown(renovationInput) : null
  const windows = windowsInput ? generateWindowsBreakdown(windowsInput) : null

  const grandTotal = (renovation?.total ?? 0) + (windows?.total ?? 0)

  let grandRange: { min: number; max: number } | null = null
  if (renovation?.range || windows?.range) {
    grandRange = {
      min: (renovation?.range.min ?? 0) + (windows?.range.min ?? 0),
      max: (renovation?.range.max ?? 0) + (windows?.range.max ?? 0),
    }
  }

  return { renovation, windows, grandTotal, grandRange, submittedFromTab }
}
