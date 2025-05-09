"use client"

import { Suspense, lazy } from "react"

// Instead of direct import
// import HeavyComponent from "./heavy-component"

// Use lazy loading
const HeavyComponent = lazy(() => import("./heavy-component"))

export function LazyLoadingExample() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
