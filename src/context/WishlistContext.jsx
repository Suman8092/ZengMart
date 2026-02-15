import { createContext, useContext, useEffect, useState } from "react"
import { useToast } from "./ToastContext"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const { showToast } = useToast()

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlistItems")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id)

      if (exists) {
        showToast("❌ Removed from wishlist")
        return prev.filter(item => item.id !== product.id)
      }

      showToast("❤️ Added to wishlist")
      return [...prev, product]
    })
  }

  const isWishlisted = (id) => {
    return wishlist.some(item => item.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
