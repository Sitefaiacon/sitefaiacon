// Define custom error types
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

export class ValidationError extends Error {
  constructor(public fields: Record<string, string>) {
    super("Validation failed")
    this.name = "ValidationError"
  }
}

// Error handling utilities
export async function handleFetchResponse(response: Response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new ApiError(response.status, errorData.message || `API error: ${response.status}`)
  }
  return response.json()
}

// Global error handler
export function globalErrorHandler(error: unknown): { message: string; details?: unknown } {
  console.error("Error caught:", error)

  if (error instanceof ApiError) {
    return {
      message: `Server error (${error.status}): ${error.message}`,
      details: { status: error.status },
    }
  }

  if (error instanceof ValidationError) {
    return {
      message: "Please check the form for errors",
      details: error.fields,
    }
  }

  if (error instanceof Error) {
    return { message: error.message }
  }

  return { message: "An unexpected error occurred" }
}
