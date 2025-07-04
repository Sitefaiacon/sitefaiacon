"use client"

import { useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

interface SearchParamsWrapperProps {
  children: (searchParams: URLSearchParams) => ReactNode
}

export function SearchParamsWrapper({ children }: SearchParamsWrapperProps) {
  const searchParams = useSearchParams()
  return <>{children(searchParams as unknown as URLSearchParams)}</>
}
