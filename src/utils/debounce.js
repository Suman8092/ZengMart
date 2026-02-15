/**
 * debounce
 * Delays function execution until user stops triggering it
 */
export default function debounce(func, delay = 300) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}
