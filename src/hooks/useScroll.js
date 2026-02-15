import { useEffect, useState } from "react"

/**
 * useScroll
 * Detects scrollY position and scroll direction
 */
export default function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState("up")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (currentScrollY > lastScrollY) {
        setDirection("down")
      } else {
        setDirection("up")
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollY, direction }
}
