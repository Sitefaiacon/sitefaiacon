"use client"

import { useState, useEffect, useCallback } from "react"
import { globalErrorHandler } from "@/lib/error-handling"

interface UseApiOptions<T> {
  initialData?: T
  onSuccess?: (data: T) => void
  onError?: (error: unknown) => void
}

interface UseApiResult<T> {
  data: T | undefined
  isLoading: boolean
  error: { message: string; details?: unknown } | null
  refetch: () => Promise<void>
}

export function useApi<T>(fetchFn: () => Promise<T>, options: UseApiOptions<T> = {}): UseApiResult<T> {
  const { initialData, onSuccess, onError } = options

  const [data, setData] = useState<T | undefined>(initialData)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<{ message: string; details?: unknown } | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await fetchFn()
      setData(result)
      onSuccess?.(result)
    } catch (err) {
      const errorInfo = globalErrorHandler(err)
      setError(errorInfo)
      onError?.(err)
    } finally {
      setIsLoading(false)
    }
  }, [fetchFn, onSuccess, onError])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isLoading, error, refetch: fetchData }
}
