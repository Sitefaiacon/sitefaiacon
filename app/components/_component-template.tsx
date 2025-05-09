"use client"

import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  // Add your custom props here
  customProp?: string
}

export function ComponentName({ customProp, className, children, ...props }: ComponentNameProps) {
  return (
    <div className={cn("default-styles-here", className)} {...props}>
      {children}
      {customProp && <span>{customProp}</span>}
    </div>
  )
}

// If you need a default export as well
export default ComponentName
