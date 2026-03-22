import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-primary mb-4">Η σελίδα δεν βρέθηκε</h2>
      <p className="mb-4">Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.</p>
      <Button asChild>
        <Link href="/el">Επιστροφή στην αρχική</Link>
      </Button>
    </div>
  )
}

