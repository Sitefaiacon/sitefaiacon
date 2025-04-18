/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "faiacon-cache-v1"

// Πόροι που θα αποθηκευτούν στην cache
const STATIC_ASSETS = ["/", "/favicon.ico", "/manifest.json", "/icons/icon-192x192.png", "/icons/icon-512x512.png"]

// Εγκατάσταση του service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    }),
  )
})

// Ενεργοποίηση του service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    }),
  )
})

// Στρατηγική cache-first για στατικούς πόρους, network-first για δυναμικό περιεχόμενο
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url)

  // Στρατηγική για στατικούς πόρους
  if (
    event.request.method === "GET" &&
    (url.pathname.startsWith("/images/") ||
      url.pathname.startsWith("/icons/") ||
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".js"))
  ) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchResponse.clone())
              return fetchResponse
            })
          })
        )
      }),
    )
  } else {
    // Στρατηγική για δυναμικό περιεχόμενο
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          return caches.match(event.request)
        }),
    )
  }
})
