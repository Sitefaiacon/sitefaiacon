import { handleFetchResponse } from "./error-handling"

// Base API configuration
const API_BASE_URL = "/api"

// Request options type
type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  body?: Record<string, any>
  headers?: Record<string, string>
  cache?: RequestCache
}

// API client
export const apiClient = {
  async fetch<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = "GET", body, headers = {}, cache } = options

    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
    }

    if (body) {
      requestOptions.body = JSON.stringify(body)
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, requestOptions)
    return handleFetchResponse(response) as Promise<T>
  },

  // Convenience methods
  get<T>(endpoint: string, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "GET" })
  },

  post<T>(endpoint: string, body: Record<string, any>, options: Omit<RequestOptions, "method"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "POST", body })
  },

  put<T>(endpoint: string, body: Record<string, any>, options: Omit<RequestOptions, "method"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "PUT", body })
  },

  delete<T>(endpoint: string, options: Omit<RequestOptions, "method"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "DELETE" })
  },
}
