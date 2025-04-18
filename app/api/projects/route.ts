import { NextResponse } from "next/server"

export async function GET() {
  const projects = [
    { id: 1, title: "Πολυτελής Βίλα", location: "Κασσιόπη, Κέρκυρα" },
    { id: 2, title: "Ανακαίνιση Οικίας", location: "Αχαράβη, Κέρκυρα" },
    { id: 3, title: "Ανακαίνιση Ξενοδοχείου", location: "Πόλη της Κέρκυρας" },
    // ... περισσότερα projects
  ]

  return NextResponse.json(projects)
}

export const revalidate = 3600 // Επαναδημιουργία κάθε 1 ώρα
