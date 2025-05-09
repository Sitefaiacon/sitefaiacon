import type React from "react"
import dynamic from "next/dynamic"
import { Suspense } from "react"

interface DynamicImportOptions {
  ssr?: boolean
  loading?: React.ComponentType<any>
}

export function createDynamicComponent<T>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  options: DynamicImportOptions = {},
) {
  const { ssr = true, loading: LoadingComponent } = options

  const DynamicComponent = dynamic(importFunc, {
    ssr,
    loading: LoadingComponent ? () => <LoadingComponent /> : undefined,
  })

  return function DynamicWithSuspense(props: T) {
    return (
      <Suspense fallback={LoadingComponent ? <LoadingComponent /> : null}>
        <DynamicComponent {...props} />
      </Suspense>
    )
  }
}
