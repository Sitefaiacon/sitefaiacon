"use client"

import { useState } from "react"
import { BriefcaseBusiness, CheckCircle2, Loader2, MapPin, Phone, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "../contexts/language-context"
import { ArchitecturalBackground } from "./architectural-background"

const POSITIONS = [
  { el: "Γενικός εργάτης / βοηθός", en: "General labourer / assistant" },
  { el: "Οικοδόμος / τεχνίτης", en: "Builder / skilled tradesperson" },
  { el: "Ελαιοχρωματιστής", en: "Painter / decorator" },
  { el: "Υδραυλικός", en: "Plumber" },
  { el: "Ηλεκτρολόγος", en: "Electrician" },
  { el: "Πλακάς", en: "Tiler" },
  { el: "Συντήρηση πισίνας", en: "Pool maintenance technician" },
  { el: "Φοιτητής / εποχική εργασία", en: "Student / seasonal work" },
  { el: "Άλλη θέση", en: "Other position" },
] as const

const EXPERIENCE_LEVELS = [
  { el: "Χωρίς εμπειρία", en: "No experience" },
  { el: "Βασική εμπειρία", en: "Basic experience" },
  { el: "2–5 χρόνια", en: "2–5 years" },
  { el: "5+ χρόνια", en: "5+ years" },
] as const

const COPY = {
  el: {
    eyebrow: "ΦαιάCon • Κέρκυρα",
    title: "Ενδιαφέρεστε να εργαστείτε μαζί μας;",
    intro:
      "Συμπληρώστε τα βασικά στοιχεία σας σε 2 λεπτά. Εξετάζουμε αιτήσεις για τεχνίτες, εργάτες, βοηθούς και εποχική εργασία.",
    applyNow: "Κάντε αίτηση τώρα",
    cards: [
      { title: "Τεχνίτες", text: "Ανακαινίσεις, κατασκευές και εξειδικευμένες εργασίες." },
      { title: "Εργάτες & βοηθοί", text: "Θέσεις για κάθε επίπεδο εμπειρίας και διάθεση για εργασία." },
      { title: "Κέρκυρα & έργα", text: "Συνεργασίες σε έργα της Κέρκυρας, ανάλογα με τις ανάγκες." },
    ],
    formTitle: "Σύντομη αίτηση εργασίας",
    requiredNote: "Τα πεδία με αστερίσκο είναι απαραίτητα. Δεν χρειάζεται να ανεβάσετε βιογραφικό σε αυτό το στάδιο.",
    fullName: "Ονοματεπώνυμο",
    phone: "Τηλέφωνο",
    position: "Θέση που σας ενδιαφέρει",
    selectPosition: "Επιλέξτε θέση",
    experience: "Εμπειρία",
    optionalSelect: "Επιλέξτε αν θέλετε",
    residence: "Περιοχή κατοικίας",
    residencePlaceholder: "π.χ. Κέρκυρα",
    availability: "Πότε μπορείτε να ξεκινήσετε;",
    availabilityPlaceholder: "π.χ. άμεσα, από Σεπτέμβριο",
    previousExperience: "Εμπειρία ή ειδικότητα (προαιρετικό)",
    experiencePlaceholder: "Γράψτε με λίγα λόγια τι εργασίες έχετε κάνει ή τι ειδικότητα έχετε.",
    privacyNotice:
      "Τα στοιχεία σας χρησιμοποιούνται μόνο για την αξιολόγηση της αίτησης εργασίας και δεν κοινοποιούνται σε τρίτους.",
    privacyConsent: "Συμφωνώ με την επεξεργασία των προσωπικών δεδομένων μου για σκοπούς πρόσληψης.",
    sending: "Αποστολή…",
    submit: "Στείλτε την αίτηση",
    errors: {
      fullName: "Γράψτε το ονοματεπώνυμό σας.",
      phone: "Γράψτε ένα τηλέφωνο επικοινωνίας.",
      email: "Γράψτε ένα έγκυρο email.",
      position: "Επιλέξτε τη θέση που σας ενδιαφέρει.",
      privacy: "Χρειάζεται η συγκατάθεσή σας για να σταλεί η αίτηση.",
      submit: "Η αίτηση δεν στάλθηκε. Παρακαλούμε δοκιμάστε ξανά.",
    },
  },
  en: {
    eyebrow: "Faiacon • Corfu",
    title: "Interested in working with us?",
    intro:
      "Complete the short form in about two minutes. We welcome applications from skilled tradespeople, labourers, assistants and seasonal workers.",
    applyNow: "Apply now",
    cards: [
      { title: "Skilled trades", text: "Opportunities in renovation, construction and specialist building work." },
      { title: "Labourers & assistants", text: "Roles for different experience levels and people ready to work." },
      { title: "Projects across Corfu", text: "Work opportunities on projects throughout Corfu, depending on current needs." },
    ],
    formTitle: "Short job application",
    requiredNote: "Fields marked with an asterisk are required. You do not need to upload a CV at this stage.",
    fullName: "Full name",
    phone: "Phone",
    position: "Position you are interested in",
    selectPosition: "Select a position",
    experience: "Experience",
    optionalSelect: "Select if applicable",
    residence: "Area of residence",
    residencePlaceholder: "e.g. Corfu Town",
    availability: "When can you start?",
    availabilityPlaceholder: "e.g. immediately, from September",
    previousExperience: "Experience or trade (optional)",
    experiencePlaceholder: "Briefly describe your previous work or specialist trade.",
    privacyNotice:
      "Your details will be used only to assess your job application and will not be shared with third parties.",
    privacyConsent: "I consent to the processing of my personal data for recruitment purposes.",
    sending: "Sending…",
    submit: "Send application",
    errors: {
      fullName: "Enter your full name.",
      phone: "Enter a contact phone number.",
      email: "Enter a valid email address.",
      position: "Select the position you are interested in.",
      privacy: "Your consent is required before the application can be sent.",
      submit: "Your application could not be sent. Please try again.",
    },
  },
} as const

type ApplicationForm = {
  fullName: string
  phone: string
  email: string
  position: string
  experienceLevel: string
  residence: string
  availability: string
  previousExperience: string
  privacyConsent: boolean
  website: string
}

const initialForm: ApplicationForm = {
  fullName: "",
  phone: "",
  email: "",
  position: "",
  experienceLevel: "",
  residence: "",
  availability: "",
  previousExperience: "",
  privacyConsent: false,
  website: "",
}

export default function CareersPage() {
  const { isEnglish } = useLanguage()
  const copy = COPY[isEnglish ? "en" : "el"]
  const languageKey = isEnglish ? "en" : "el"
  const [form, setForm] = useState<ApplicationForm>(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const update = <K extends keyof ApplicationForm>(field: K, value: ApplicationForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: "" }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}

    if (!form.fullName.trim()) nextErrors.fullName = copy.errors.fullName
    if (!form.phone.trim()) nextErrors.phone = copy.errors.phone
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = copy.errors.email
    if (!form.position) nextErrors.position = copy.errors.position
    if (!form.privacyConsent) nextErrors.privacyConsent = copy.errors.privacy

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setResult(null)
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/career-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang: languageKey }),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || copy.errors.submit)
      }

      setForm(initialForm)
      setResult({ type: "success", message: data.message })
    } catch (error) {
      setResult({
        type: "error",
        message: error instanceof Error ? error.message : copy.errors.submit,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const cards = [
    { icon: Wrench, ...copy.cards[0] },
    { icon: BriefcaseBusiness, ...copy.cards[1] },
    { icon: MapPin, ...copy.cards[2] },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
        <ArchitecturalBackground />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">{copy.eyebrow}</p>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{copy.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            {copy.intro}
          </p>
          <a
            href="#application"
            className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            {copy.applyNow}
          </a>
        </div>
      </section>

      <section className="border-b bg-background py-8">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-semibold text-foreground">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="application" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-primary">{copy.formTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.requiredNote}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input
                name="website"
                value={form.website}
                onChange={(event) => update("website", event.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="absolute h-px w-px overflow-hidden opacity-0"
                aria-hidden="true"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <Label htmlFor="fullName">{copy.fullName} <span className="text-destructive">*</span></Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(event) => update("fullName", event.target.value)}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">{copy.phone} <span className="text-destructive">*</span></Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    autoComplete="tel"
                    placeholder="+30 69…"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && <p id="phone-error" className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="position">{copy.position} <span className="text-destructive">*</span></Label>
                  <select
                    id="position"
                    value={form.position}
                    onChange={(event) => update("position", event.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-invalid={Boolean(errors.position)}
                    aria-describedby={errors.position ? "position-error" : undefined}
                  >
                    <option value="">{copy.selectPosition}</option>
                    {POSITIONS.map((position) => {
                      const label = position[languageKey]
                      return <option key={label} value={label}>{label}</option>
                    })}
                  </select>
                  {errors.position && <p id="position-error" className="mt-1 text-xs text-destructive">{errors.position}</p>}
                </div>

                <div>
                  <Label htmlFor="experienceLevel">{copy.experience}</Label>
                  <select
                    id="experienceLevel"
                    value={form.experienceLevel}
                    onChange={(event) => update("experienceLevel", event.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">{copy.optionalSelect}</option>
                    {EXPERIENCE_LEVELS.map((level) => {
                      const label = level[languageKey]
                      return <option key={label} value={label}>{label}</option>
                    })}
                  </select>
                </div>

                <div>
                  <Label htmlFor="residence">{copy.residence}</Label>
                  <Input
                    id="residence"
                    value={form.residence}
                    onChange={(event) => update("residence", event.target.value)}
                    placeholder={copy.residencePlaceholder}
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="availability">{copy.availability}</Label>
                <Input
                  id="availability"
                  value={form.availability}
                  onChange={(event) => update("availability", event.target.value)}
                  placeholder={copy.availabilityPlaceholder}
                />
              </div>

              <div>
                <Label htmlFor="previousExperience">{copy.previousExperience}</Label>
                <Textarea
                  id="previousExperience"
                  rows={4}
                  value={form.previousExperience}
                  onChange={(event) => update("previousExperience", event.target.value)}
                  placeholder={copy.experiencePlaceholder}
                  className="resize-none"
                />
              </div>

              <div className="rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
                {copy.privacyNotice}
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacyConsent"
                    checked={form.privacyConsent}
                    onCheckedChange={(checked) => update("privacyConsent", Boolean(checked))}
                    className="mt-0.5"
                    aria-invalid={Boolean(errors.privacyConsent)}
                  />
                  <Label htmlFor="privacyConsent" className="cursor-pointer text-sm font-normal leading-relaxed">
                    {copy.privacyConsent} <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.privacyConsent && <p className="mt-1 text-xs text-destructive">{errors.privacyConsent}</p>}
              </div>

              {result && (
                <div
                  role={result.type === "error" ? "alert" : "status"}
                  className={result.type === "success"
                    ? "flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                    : "rounded-lg border border-destructive/25 bg-destructive/10 p-4 text-sm text-destructive"}
                >
                  {result.type === "success" && <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />}
                  <span>{result.message}</span>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="min-h-12 w-full text-base font-semibold">
                {isSubmitting
                  ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />{copy.sending}</>
                  : <><Phone className="mr-2 h-4 w-4" />{copy.submit}</>}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
