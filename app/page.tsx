// Add a simple redirect from the root page to the default language:

import { redirect } from "next/navigation"

export default function RootPage() {
  // Redirect to the default language (Greek)
  redirect("/el")

  // This won't be rendered, but is needed to satisfy TypeScript
  return null
}

