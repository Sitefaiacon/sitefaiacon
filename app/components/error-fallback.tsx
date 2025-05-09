"use client"

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="p-4 border border-red-500 bg-red-50 rounded-md">
      <h2 className="text-lg font-semibold text-red-800">Something went wrong</h2>
      {error && <p className="mt-2 text-sm text-red-700">{error.message || "An unknown error occurred"}</p>}
      <button
        className="mt-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </div>
  )
}
