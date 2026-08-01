import type { NextRequest } from "next/server"

const WINDOW_MS = 60_000
const MAX_BODY_BYTES = 100_000
const attempts = new Map<string, { count: number; resetAt: number }>()

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export function readString(value: unknown, maxLength = 2_000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export function isAllowedFormRequest(request: NextRequest): boolean {
  const origin = request.headers.get("origin")
  if (!origin) return true
  try {
    const hostname = new URL(origin).hostname.toLowerCase()
    return hostname === request.nextUrl.hostname.toLowerCase()
  } catch {
    return false
  }
}

export function isOversizedRequest(request: NextRequest): boolean {
  const length = Number(request.headers.get("content-length") ?? 0)
  return Number.isFinite(length) && length > MAX_BODY_BYTES
}

export function isRateLimited(request: NextRequest, bucket: string, max = 5): boolean {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
  const key = `${bucket}:${ip}`
  const now = Date.now()
  const current = attempts.get(key)
  if (!current || now >= current.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  current.count += 1
  return current.count > max
}
