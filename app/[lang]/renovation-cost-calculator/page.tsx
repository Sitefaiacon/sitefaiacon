import { redirect } from "next/navigation"

export default function RenovationCostCalculatorPage({
  params,
}: {
  params: { lang: string }
}) {
  // Ανακατεύθυνση στη βασική σελίδα του υπολογιστή κόστους
  redirect("/renovation-cost-calculator")
}
