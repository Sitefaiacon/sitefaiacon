export function cleanupMemory() {
  if (typeof window !== "undefined") {
    // Clear any large objects from memory
    if (window.gc) {
      window.gc()
    }

    // Clear any cached images that are no longer needed
    const images = document.querySelectorAll("img[data-src]")
    images.forEach((img) => {
      if (!isElementInViewport(img)) {
        // @ts-ignore
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      }
    })
  }
}

function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= -rect.height &&
    rect.left >= -rect.width &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + rect.height &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + rect.width
  )
}
