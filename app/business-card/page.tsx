"use client"

import { BusinessCard } from "@/components/BusinessCard"

export default function BusinessCardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <BusinessCard
        name="Φαίακας Κατασκευαστική"
        title="Τεχνική Κατασκευαστική Εταιρεία"
        phone="+30 6987797679"
        email="faiacon@yahoo.com"
        website="www.faiacon.gr"
        barcodeValue="https://faiacon.gr"
      />
    </div>
  )
}
