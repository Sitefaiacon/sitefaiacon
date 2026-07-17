"use client"

import { useState } from "react"
import { CalendarDays, Check, Clock3, CreditCard, FileText, MapPin, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeSlots = ["09:00", "11:00", "13:00", "15:00"]

export function PaidSiteVisit({ isEnglish }: { isEnglish: boolean }) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [message, setMessage] = useState<string | null>(null)
  const [minimumDate] = useState(() => {
    const next = new Date()
    next.setDate(next.getDate() + 2)
    return next.toISOString().slice(0, 10)
  })

  function previewCheckout() {
    if (!date || !time) {
      setMessage(isEnglish ? "Choose a date and time first." : "Επιλέξτε πρώτα ημερομηνία και ώρα.")
      return
    }
    setMessage(
      isEnglish
        ? "Preview only — no charge was made. Secure payment will be enabled after the Viva account is connected."
        : "Δοκιμαστική προβολή — δεν έγινε χρέωση. Η ασφαλής πληρωμή θα ενεργοποιηθεί μετά τη σύνδεση του λογαριασμού Viva.",
    )
  }

  return (
    <section className="border-y bg-slate-50 px-4 py-14 sm:py-20" id="paid-site-visit">
      <div className="container grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-primary p-7 text-white shadow-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            {isEnglish ? "Professional on-site service" : "Επαγγελματική υπηρεσία στον χώρο σας"}
          </p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-6xl font-semibold">150€</span>
            <span className="pb-2 text-white/70">{isEnglish ? "total price" : "τελική τιμή"}</span>
          </div>
          <h2 className="mt-7 text-3xl font-semibold">
            {isEnglish ? "Property survey and written quotation" : "Αυτοψία ακινήτου και σύνταξη προσφοράς"}
          </h2>
          <ul className="mt-7 space-y-4 text-white/90">
            {[
              isEnglish ? "Visit to your property in Corfu" : "Επίσκεψη στο ακίνητό σας στην Κέρκυρα",
              isEnglish ? "Discussion and recording of the required work" : "Συζήτηση και καταγραφή των απαιτούμενων εργασιών",
              isEnglish ? "Basic measurements and photographic documentation" : "Βασικές μετρήσεις και φωτογραφική καταγραφή",
              isEnglish ? "Preparation and delivery of a written quotation" : "Σύνταξη και αποστολή γραπτής οικονομικής προσφοράς",
            ].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0" />{item}</li>)}
          </ul>
          <p className="mt-8 border-t border-white/20 pt-6 text-sm leading-6 text-white/70">
            {isEnglish
              ? "The appointment is confirmed only after successful payment. Availability and coverage are confirmed before checkout."
              : "Το ραντεβού οριστικοποιείται μόνο μετά την επιτυχημένη πληρωμή. Η διαθεσιμότητα και η περιοχή κάλυψης επιβεβαιώνονται πριν από τη χρέωση."}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-9">
          <div className="flex items-center justify-between gap-4">
            <div><p className="text-sm font-semibold text-primary">{isEnglish ? "STEP 1 OF 2" : "ΒΗΜΑ 1 ΑΠΟ 2"}</p><h2 className="mt-1 text-2xl font-semibold text-slate-950">{isEnglish ? "Choose your appointment" : "Επιλέξτε το ραντεβού σας"}</h2></div>
            <CalendarDays className="h-9 w-9 text-primary" />
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-800">
              {isEnglish ? "Date" : "Ημερομηνία"}
              <input type="date" min={minimumDate} value={date} onChange={(event) => { setDate(event.target.value); setTime(""); setMessage(null) }} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </label>
            <div className="text-sm font-medium text-slate-800">
              {isEnglish ? "Available time" : "Διαθέσιμη ώρα"}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => <button key={slot} type="button" onClick={() => { setTime(slot); setMessage(null) }} className={`rounded-lg border px-3 py-3 transition ${time === slot ? "border-primary bg-primary text-white" : "border-slate-300 hover:border-primary"}`}>{slot}</button>)}
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{isEnglish ? "Approx. 60 minutes" : "Περίπου 60 λεπτά"}</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{isEnglish ? "At your property" : "Στο ακίνητό σας"}</span>
            <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />{isEnglish ? "Written quotation" : "Γραπτή προσφορά"}</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />{isEnglish ? "Secure payment" : "Ασφαλής πληρωμή"}</span>
          </div>

          <Button type="button" onClick={previewCheckout} className="mt-7 w-full py-6 text-base font-semibold">
            <CreditCard className="mr-2 h-5 w-5" />{isEnglish ? "Continue to details and payment" : "Συνέχεια στα στοιχεία και την πληρωμή"}
          </Button>
          {message && <p role="status" className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">{message}</p>}
          <p className="mt-4 text-center text-xs text-slate-500">{isEnglish ? "Preview mode — payments are not active." : "Δοκιμαστική λειτουργία — οι πληρωμές δεν είναι ενεργές."}</p>
        </div>
      </div>
    </section>
  )
}
