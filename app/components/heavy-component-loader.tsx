import { createDynamicComponent } from "../utils/dynamic-import"
import { Skeleton } from "@/components/ui/skeleton"

function LoadingFallback() {
  return <Skeleton className="w-full h-64" />
}

export const HeavyComponent = createDynamicComponent(() => import("./heavy-component"), { loading: LoadingFallback })
