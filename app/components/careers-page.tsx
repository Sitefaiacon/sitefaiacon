"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  HardHat,
  Wrench,
  Users,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  Briefcase,
  MapPin,
  Star,
  TrendingUp,
  ShieldCheck,
  Globe,
} from "lucide-react"
import { ArchitecturalBackground } from "./architectural-background"

const WORK_TYPES = ["Πλήρης απασχόληση", "Μερική απασχόληση", "Εποχιακή", "Πρακτική / Φοιτητική εργασία", "Βάσει έργου"]
const WORK_TYPES_EN = ["Full-time", "Part-time", "Seasonal", "Internship / Student work", "Project-based"]

const EXPERIENCE_LEVELS = ["Χωρίς εμπειρία", "Βασική εμπειρία", "Μέτρια εμπειρία", "Ισχυρή εμπειρία", "Επαγγελματίας / Εξειδικευμένος"]
const EXPERIENCE_LEVELS_EN = ["No experience", "Basic experience", "Intermediate", "Strong experience", "Professional / Specialized"]

const POSITIONS = ["Γενικός εργάτης", "Ανειδίκευτος βοηθός", "Οικοδόμος", "Εργάτης ανακαίνισης", "Ελαιοχρωματιστής", "Υδραυλικός", "Ηλεκτρολόγος", "Πλακάς", "Συντήρηση πισίνας", "Τεχνίτης", "Επιστάτης", "Φοιτητής / Εποχιακός", "Άλλο"]
const POSITIONS_EN = ["General Worker", "Unskilled Helper", "Builder", "Renovation Worker", "Painter", "Plumber", "Electrician", "Tile Installer", "Pool Maintenance", "Technician", "Site Supervisor", "Student / Seasonal Support", "Other"]

const YEARS_EXP = ["0-1", "1-3", "3-5", "5-10", "10+"]

const WORK_DONE_TYPES = [
  { value: "construction", el: "Κατασκευές", en: "Construction" },
  { value: "renovations", el: "Ανακαινίσεις", en: "Renovations" },
  { value: "painting", el: "Βαφές", en: "Painting" },
  { value: "plastering", el: "Σοβάδες", en: "Plastering" },
  { value: "tiling", el: "Πλακάκια", en: "Tiling" },
  { value: "plumbing", el: "Υδραυλικά", en: "Plumbing" },
  { value: "electrical", el: "Ηλεκτρολογικά", en: "Electrical" },
  { value: "insulation", el: "Μόνωση", en: "Insulation" },
  { value: "pools", el: "Πισίνες", en: "Pools" },
  { value: "gypsum", el: "Γυψοσανίδα", en: "Gypsum board / Drywall" },
  { value: "demolition", el: "Κατεδαφίσεις", en: "Demolition" },
  { value: "heavyLabor", el: "Βαριές εργασίες", en: "Heavy labor" },
  { value: "siteCleanup", el: "Καθαρισμός χώρου", en: "Site cleanup" },
  { value: "supervision", el: "Επίβλεψη", en: "Supervision" },
  { value: "customerService", el: "Εξυπηρέτηση πελατών", en: "Customer service" },
  { value: "other", el: "Άλλο", en: "Other" },
]

const DURATIONS = ["1-3 μήνες", "3-6 μήνες", "6-12 μήνες", "Μακροχρόνια", "Ευέλικτα / Βάσει έργου"]
const DURATIONS_EN = ["1-3 months", "3-6 months", "6-12 months", "Long-term", "Flexible / depends on project"]

const BENEFITS = [
  { icon: Briefcase, el: "Σταθερές ευκαιρίες συνεργασίας", en: "Stable cooperation opportunities" },
  { icon: ShieldCheck, el: "Επαγγελματικό περιβάλλον εργασίας", en: "Professional working environment" },
  { icon: MapPin, el: "Έργα στην Κέρκυρα και πιθανώς εκτός", en: "Projects in Corfu and beyond" },
  { icon: TrendingUp, el: "Ευκαιρίες επαγγελματικής ανάπτυξης", en: "Growth opportunities" },
  { icon: Star, el: "Αξιολόγηση βάσει αξιοπιστίας, στάσης και δεξιοτήτων", en: "Fair evaluation based on reliability, attitude, and skills" },
  { icon: Globe, el: "Ευκαιρίες για έμπειρους και νέους υποψηφίους", en: "Opportunities for experienced and entry-level applicants" },
]

const FAQ = [
  {
    q: "Τι είδους εργάτες ψάχνετε;",
    qEn: "What kind of workers are you looking for?",
    a: "Ψάχνουμε εργάτες κατασκευών, τεχνίτες, ανειδίκευτους βοηθούς, και φοιτητές για εποχιακή ή μερική απασχόληση. Δεχόμαστε αιτήσεις από όλα τα επίπεδα εμπειρίας.",
    aEn: "We look for construction workers, skilled technicians, unskilled helpers, and students for seasonal or part-time work. We accept applications from all experience levels.",
  },
  {
    q: "Μπορώ να κάνω αίτηση χωρίς εμπειρία;",
    qEn: "Can I apply without experience?",
    a: "Ναι! Δεχόμαστε αιτήσεις και από ανειδίκευτους υποψηφίους. Η στάση εργασίας, η αξιοπιστία και η διάθεση για μάθηση είναι εξίσου σημαντικά.",
    aEn: "Yes! We accept applications from unskilled candidates. Work attitude, reliability, and willingness to learn are equally important.",
  },
  {
    q: "Μπορούν φοιτητές να κάνουν αίτηση;",
    qEn: "Can students apply?",
    a: "Βεβαίως. Προσφέρουμε εποχιακές και μερικές θέσεις κατάλληλες για φοιτητές.",
    aEn: "Of course. We offer seasonal and part-time positions suitable for students.",
  },
  {
    q: "Μπορώ να κάνω αίτηση αν δεν μένω στην Κέρκυρα;",
    qEn: "Can I apply if I live outside Corfu?",
    a: "Ναι. Εξετάζουμε αιτήσεις από υποψηφίους εκτός Κέρκυρας, ιδιαίτερα για εποχιακές ή μακροχρόνιες θέσεις.",
    aEn: "Yes. We consider applications from outside Corfu, especially for seasonal or long-term positions.",
  },
  {
    q: "Πώς θα ξέρω ότι λάβατε την αίτησή μου;",
    qEn: "How will I know you received my application?",
    a: "Θα λάβετε αυτόματο email επιβεβαίωσης μόλις υποβάλετε την αίτησή σας. Η ομάδα μας θα επικοινωνήσει μαζί σας εφόσον το προφίλ σας ταιριάζει με τις ανάγκες μας.",
    aEn: "You will receive an automatic confirmation email upon submission. Our team will contact you if your profile matches our needs.",
  },
]

type YesNo = "yes" | "no" | ""

interface FormState {
  fullName: string
  phone: string
  email: string
  residence: string
  basedInCorfu: YesNo
  willingToWorkOutside: YesNo
  isOver18: boolean
  workType: string
  experienceLevel: string
  position: string
  positionOther: string
  yearsExperience: string
  previousExperience: string
  workDoneTypes: string[]
  hasLicense: YesNo
  hasVehicle: YesNo
  legalToWork: YesNo
  languages: string
  startDate: string
  workDuration: string
  expectedSalary: string
  canWorkFullTime: YesNo
  physicalWork: YesNo
  teamWork: YesNo
  customerFacing: YesNo
  isStudent: YesNo
  studentAvailability: string
  cvFileName: string
  comments: string
  privacyConsent: boolean
  website: string // honeypot
}

const initialForm: FormState = {
  fullName: "", phone: "", email: "", residence: "",
  basedInCorfu: "", willingToWorkOutside: "", isOver18: false,
  workType: "", experienceLevel: "", position: "", positionOther: "",
  yearsExperience: "", previousExperience: "", workDoneTypes: [],
  hasLicense: "", hasVehicle: "", legalToWork: "",
  languages: "", startDate: "", workDuration: "", expectedSalary: "",
  canWorkFullTime: "", physicalWork: "", teamWork: "", customerFacing: "",
  isStudent: "", studentAvailability: "",
  cvFileName: "", comments: "", privacyConsent: false, website: "",
}

function YesNoRadio({ name, value, onChange, isEnglish }: { name: string; value: YesNo; onChange: (v: YesNo) => void; isEnglish: boolean }) {
  return (
    <div className="flex gap-6 mt-1">
      {(["yes", "no"] as YesNo[]).map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-normal">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-primary w-4 h-4"
          />
          <span className="text-foreground">{opt === "yes" ? (isEnglish ? "Yes" : "Ναι") : (isEnglish ? "No" : "Όχι")}</span>
        </label>
      ))}
    </div>
  )
}

function NativeSelect({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-input rounded-md bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}

export default function CareersPage() {
  const isEnglish = false // Hook into language context if needed - defaults Greek
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const set = (key: keyof FormState, val: unknown) => {
    setForm((prev) => ({ ...prev, [key]: val }))
    setErrors((prev) => { const e = { ...prev }; delete e[key]; return e })
  }

  const toggleWorkType = (val: string) => {
    setForm((prev) => ({
      ...prev,
      workDoneTypes: prev.workDoneTypes.includes(val)
        ? prev.workDoneTypes.filter((v) => v !== val)
        : [...prev.workDoneTypes, val],
    }))
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName) e.fullName = "Υποχρεωτικό πεδίο"
    if (!form.phone) e.phone = "Υποχρεωτικό πεδίο"
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Μη έγκυρο email"
    if (!form.residence) e.residence = "Υποχρεωτικό πεδίο"
    if (!form.basedInCorfu) e.basedInCorfu = "Υποχρεωτικό"
    if (!form.willingToWorkOutside) e.willingToWorkOutside = "Υποχρεωτικό"
    if (!form.isOver18) e.isOver18 = "Πρέπει να είστε άνω των 18"
    if (!form.workType) e.workType = "Επιλέξτε τύπο εργασίας"
    if (!form.experienceLevel) e.experienceLevel = "Επιλέξτε επίπεδο εμπειρίας"
    if (!form.position) e.position = "Επιλέξτε θέση"
    if (!form.previousExperience) e.previousExperience = "Υποχρεωτικό πεδίο"
    if (!form.legalToWork) e.legalToWork = "Υποχρεωτικό"
    if (!form.privacyConsent) e.privacyConsent = "Απαιτείται συγκατάθεση"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      formRef.current?.querySelector("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      const res = await fetch("/api/career-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setSubmitResult(data)
      if (data.success) {
        setForm(initialForm)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch {
      setSubmitResult({ success: false, message: "Σφάλμα σύνδεσης. Παρακαλώ δοκιμάστε ξανά." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) set("cvFileName", file.name)
  }

  const fieldClass = (key: keyof FormState) =>
    `w-full border rounded-md bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors[key] ? "border-destructive" : "border-input"}`

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="absolute inset-0 bg-[#1e3771]/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Εργαστείτε Μαζί Μας
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-3">
            Ενταχθείτε στην ομάδα μας σε κατασκευές, ανακαινίσεις, συντήρηση και τεχνικά έργα.
          </p>
          <p className="text-base text-white/75">
            Δεχόμαστε αιτήσεις από έμπειρους επαγγελματίες, βοηθούς, ανειδίκευτους εργάτες και φοιτητές για εποχιακές ή μερικές ευκαιρίες.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Ψάχνουμε για...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: HardHat, title: "Ειδικευμένοι Τεχνίτες", desc: "Οικοδόμοι, υδραυλικοί, ηλεκτρολόγοι, ελαιοχρωματιστές και πλακάδες." },
              { icon: Wrench, title: "Γενικοί Εργάτες", desc: "Εργάτες κατασκευών με εμπειρία σε διάφορες εργασίες εργοταξίου." },
              { icon: Users, title: "Ανειδίκευτοι Βοηθοί", desc: "Χωρίς εμπειρία; Δεν πειράζει. Η διάθεση είναι το παν." },
              { icon: GraduationCap, title: "Φοιτητές / Εποχιακοί", desc: "Ευκαιρίες μερικής απασχόλησης και καλοκαιρινής εργασίας." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col items-center text-center gap-3 card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Γιατί να Εργαστείτε Μαζί Μας</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map(({ icon: Icon, el }) => (
              <div key={el} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{el}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Αποστολή Αίτησης</h2>
          <p className="text-muted-foreground text-sm text-center mb-8">Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας.</p>

          {submitResult?.success && (
            <div className="mb-8 p-5 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-green-800 text-sm font-medium">{submitResult.message}</p>
            </div>
          )}
          {submitResult && !submitResult.success && (
            <div className="mb-8 p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
              <p className="text-destructive text-sm">{submitResult.message}</p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Honeypot */}
            <input type="text" name="website" value={form.website} onChange={(e) => set("website", e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />

            {/* Personal Info */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Προσωπικά Στοιχεία</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Ονοματεπώνυμο <span className="text-destructive">*</span></Label>
                  <Input id="fullName" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} className={fieldClass("fullName")} />
                  {errors.fullName && <p className="text-destructive text-xs mt-1" data-error>{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Τηλέφωνο <span className="text-destructive">*</span></Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={fieldClass("phone")} />
                  {errors.phone && <p className="text-destructive text-xs mt-1" data-error>{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={fieldClass("email")} />
                {errors.email && <p className="text-destructive text-xs mt-1" data-error>{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="residence">Τόπος κατοικίας <span className="text-destructive">*</span></Label>
                <Input id="residence" value={form.residence} onChange={(e) => set("residence", e.target.value)} className={fieldClass("residence")} />
                {errors.residence && <p className="text-destructive text-xs mt-1" data-error>{errors.residence}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Βρίσκεστε στην Κέρκυρα; <span className="text-destructive">*</span></Label>
                  <YesNoRadio name="basedInCorfu" value={form.basedInCorfu} onChange={(v) => set("basedInCorfu", v)} isEnglish={isEnglish} />
                  {errors.basedInCorfu && <p className="text-destructive text-xs mt-1" data-error>{errors.basedInCorfu}</p>}
                </div>
                <div>
                  <Label>Δέχεστε εργασία εκτός Κέρκυρας; <span className="text-destructive">*</span></Label>
                  <YesNoRadio name="willingToWorkOutside" value={form.willingToWorkOutside} onChange={(v) => set("willingToWorkOutside", v)} isEnglish={isEnglish} />
                  {errors.willingToWorkOutside && <p className="text-destructive text-xs mt-1" data-error>{errors.willingToWorkOutside}</p>}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="isOver18" checked={form.isOver18} onCheckedChange={(c) => set("isOver18", !!c)} className="mt-0.5" />
                <Label htmlFor="isOver18" className="text-sm font-normal cursor-pointer">
                  Είμαι άνω των 18 ετών <span className="text-destructive">*</span>
                </Label>
              </div>
              {errors.isOver18 && <p className="text-destructive text-xs" data-error>{errors.isOver18}</p>}
            </fieldset>

            {/* Application Type */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Τύπος Αίτησης</legend>

              <div>
                <Label>Τύπος εργασίας <span className="text-destructive">*</span></Label>
                <NativeSelect value={form.workType} onChange={(v) => set("workType", v)} options={WORK_TYPES} placeholder="Επιλέξτε..." />
                {errors.workType && <p className="text-destructive text-xs mt-1" data-error>{errors.workType}</p>}
              </div>

              <div>
                <Label>Επίπεδο εμπειρίας <span className="text-destructive">*</span></Label>
                <NativeSelect value={form.experienceLevel} onChange={(v) => set("experienceLevel", v)} options={EXPERIENCE_LEVELS} placeholder="Επιλέξτε..." />
                {errors.experienceLevel && <p className="text-destructive text-xs mt-1" data-error>{errors.experienceLevel}</p>}
              </div>

              <div>
                <Label>Θέση ενδιαφέροντος <span className="text-destructive">*</span></Label>
                <NativeSelect value={form.position} onChange={(v) => set("position", v)} options={POSITIONS} placeholder="Επιλέξτε θέση..." />
                {errors.position && <p className="text-destructive text-xs mt-1" data-error>{errors.position}</p>}
              </div>
              {form.position === "Άλλο" && (
                <div>
                  <Label htmlFor="positionOther">Διευκρίνιση θέσης</Label>
                  <Input id="positionOther" value={form.positionOther} onChange={(e) => set("positionOther", e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm" />
                </div>
              )}
            </fieldset>

            {/* Work Background */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Εργασιακό Ιστορικό</legend>

              <div>
                <Label>Χρόνια εμπειρίας</Label>
                <NativeSelect value={form.yearsExperience} onChange={(v) => set("yearsExperience", v)} options={YEARS_EXP} placeholder="Επιλέξτε..." />
              </div>

              <div>
                <Label htmlFor="previousExperience">Περιγραφή προηγούμενης εμπειρίας <span className="text-destructive">*</span></Label>
                <Textarea id="previousExperience" rows={4} value={form.previousExperience} onChange={(e) => set("previousExperience", e.target.value)} className={`${fieldClass("previousExperience")} resize-none`} placeholder="Περιγράψτε τις εργασίες που έχετε κάνει στο παρελθόν..." />
                {errors.previousExperience && <p className="text-destructive text-xs mt-1" data-error>{errors.previousExperience}</p>}
              </div>

              <div>
                <Label className="mb-2 block">Είδη εργασιών που έχετε κάνει</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {WORK_DONE_TYPES.map(({ value, el }) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer text-sm font-normal">
                      <Checkbox checked={form.workDoneTypes.includes(value)} onCheckedChange={() => toggleWorkType(value)} />
                      <span>{el}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* Practical Questions */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Πρακτικά Στοιχεία</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label>Δίπλωμα οδήγησης;</Label>
                  <YesNoRadio name="hasLicense" value={form.hasLicense} onChange={(v) => set("hasLicense", v)} isEnglish={isEnglish} />
                </div>
                <div>
                  <Label>Ιδιόκτητο όχημα;</Label>
                  <YesNoRadio name="hasVehicle" value={form.hasVehicle} onChange={(v) => set("hasVehicle", v)} isEnglish={isEnglish} />
                </div>
              </div>

              <div>
                <Label>Νομίμως εργάζεστε στην Ελλάδα; <span className="text-destructive">*</span></Label>
                <YesNoRadio name="legalToWork" value={form.legalToWork} onChange={(v) => set("legalToWork", v)} isEnglish={isEnglish} />
                {errors.legalToWork && <p className="text-destructive text-xs mt-1" data-error>{errors.legalToWork}</p>}
              </div>

              <div>
                <Label htmlFor="languages">Γλώσσες που μιλάτε</Label>
                <Input id="languages" value={form.languages} onChange={(e) => set("languages", e.target.value)} placeholder="π.χ. Ελληνικά, Αγγλικά" className="w-full border border-input rounded-md px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Διαθέσιμος/η από</Label>
                  <Input id="startDate" type="date" value={form.startDate} onChange={(e) => set("startDate", e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <Label>Επιθυμητή διάρκεια εργασίας</Label>
                  <NativeSelect value={form.workDuration} onChange={(v) => set("workDuration", v)} options={DURATIONS} placeholder="Επιλέξτε..." />
                </div>
              </div>

              <div>
                <Label htmlFor="expectedSalary">Αναμενόμενες αποδοχές (προαιρετικό)</Label>
                <Input id="expectedSalary" value={form.expectedSalary} onChange={(e) => set("expectedSalary", e.target.value)} placeholder="π.χ. 80€/ημέρα" className="w-full border border-input rounded-md px-3 py-2 text-sm" />
              </div>
            </fieldset>

            {/* Availability & Fit */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Διαθεσιμότητα & Καταλληλότητα</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label>Πλήρης απασχόληση αν χρειαστεί;</Label>
                  <YesNoRadio name="canWorkFullTime" value={form.canWorkFullTime} onChange={(v) => set("canWorkFullTime", v)} isEnglish={isEnglish} />
                </div>
                <div>
                  <Label>Σωματικά απαιτητική εργασία;</Label>
                  <YesNoRadio name="physicalWork" value={form.physicalWork} onChange={(v) => set("physicalWork", v)} isEnglish={isEnglish} />
                </div>
                <div>
                  <Label>Ομαδική εργασία;</Label>
                  <YesNoRadio name="teamWork" value={form.teamWork} onChange={(v) => set("teamWork", v)} isEnglish={isEnglish} />
                </div>
                <div>
                  <Label>Έργα σε ιδιωτικές κατοικίες / πελάτες;</Label>
                  <YesNoRadio name="customerFacing" value={form.customerFacing} onChange={(v) => set("customerFacing", v)} isEnglish={isEnglish} />
                </div>
              </div>
            </fieldset>

            {/* Student */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-5">
              <legend className="text-base font-semibold text-primary px-1">Φοιτητές</legend>
              <div>
                <Label>Είστε φοιτητής/τρια;</Label>
                <YesNoRadio name="isStudent" value={form.isStudent} onChange={(v) => set("isStudent", v)} isEnglish={isEnglish} />
              </div>
              {form.isStudent === "yes" && (
                <div>
                  <Label htmlFor="studentAvailability">Διαθεσιμότητα φοιτητή</Label>
                  <Input id="studentAvailability" value={form.studentAvailability} onChange={(e) => set("studentAvailability", e.target.value)} placeholder="π.χ. Καλοκαίρι, Σαββατοκύριακα..." className="w-full border border-input rounded-md px-3 py-2 text-sm" />
                </div>
              )}
            </fieldset>

            {/* CV Upload */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-3">
              <legend className="text-base font-semibold text-primary px-1">Βιογραφικό (προαιρετικό)</legend>
              <p className="text-xs text-muted-foreground">Αποδεκτές μορφές: PDF, DOC, DOCX. Μέγιστο 5MB.</p>
              <div className="flex items-center gap-3">
                <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()} className="border-primary text-primary hover:bg-primary/5">
                  Επιλογή αρχείου
                </Button>
                <span className="text-sm text-muted-foreground">{form.cvFileName || "Δεν επιλέχθηκε αρχείο"}</span>
              </div>
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            </fieldset>

            {/* Comments */}
            <fieldset className="bg-white rounded-xl border border-border p-6 shadow-sm space-y-4">
              <legend className="text-base font-semibold text-primary px-1">Επιπλέον Πληροφορίες</legend>
              <div>
                <Label htmlFor="comments">Σχόλια / Παρατηρήσεις</Label>
                <Textarea id="comments" rows={3} value={form.comments} onChange={(e) => set("comments", e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm resize-none" placeholder="Οτιδήποτε άλλο θέλετε να μας πείτε..." />
              </div>

              {/* Privacy */}
              <div className="p-4 bg-muted rounded-lg text-xs text-muted-foreground leading-relaxed">
                Τα στοιχεία που υποβάλλετε χρησιμοποιούνται αποκλειστικά για την αξιολόγηση της αίτησής σας και δεν κοινοποιούνται σε τρίτους.
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="privacyConsent" checked={form.privacyConsent} onCheckedChange={(c) => set("privacyConsent", !!c)} className="mt-0.5" />
                <Label htmlFor="privacyConsent" className="text-sm font-normal cursor-pointer">
                  Συμφωνώ με την επεξεργασία των προσωπικών μου δεδομένων για σκοπούς πρόσληψης. <span className="text-destructive">*</span>
                </Label>
              </div>
              {errors.privacyConsent && <p className="text-destructive text-xs" data-error>{errors.privacyConsent}</p>}
            </fieldset>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-semibold rounded-xl">
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Αποστολή...</span>
              ) : (
                "Αποστολή Αίτησης"
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-muted">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Συχνές Ερωτήσεις</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
