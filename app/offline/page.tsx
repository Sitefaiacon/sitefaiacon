import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">You're Offline</h1>
      <p className="mb-8 text-lg">
        It looks like you've lost your internet connection. Some functionality may be limited until you're back online.
      </p>
      <Link href="/" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        Try going home
      </Link>
    </div>
  )
}
