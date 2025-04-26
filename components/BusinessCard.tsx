import type React from "react"
import Barcode from "react-barcode"
import { Card, CardContent } from "@/components/ui/card"

interface BusinessCardProps {
  name: string
  title: string
  phone: string
  email: string
  website: string
  barcodeValue: string
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ name, title, phone, email, website, barcodeValue }) => {
  return (
    <Card className="w-96 h-56 bg-white shadow-lg">
      <CardContent className="p-6 flex flex-col justify-between h-full mt-2">
        {" "}
        {/* Added mt-2 here */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-1">{name}</h2>
          <p className="text-sm text-gray-600 mb-4">{title}</p>
          <div className="text-sm">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Barcode value={barcodeValue} width={1.5} height={40} fontSize={12} />
        </div>
      </CardContent>
    </Card>
  )
}
