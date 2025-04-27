// Service worker registration utility
export function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator && window.location.hostname !== "localhost") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then(
        (registration) => {
          console.log("Service Worker registration successful with scope: ", registration.scope)
        },
        (err) => {
          console.log("Service Worker registration failed: ", err)
        },
      )
    })
  }
}
