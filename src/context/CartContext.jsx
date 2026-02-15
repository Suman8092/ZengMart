import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "./ToastContext"

const CartContext = createContext()

export function CartProvider({ children }) {
  const { showToast } = useToast()

  // 🔹 Load cart from localStorage on first load
  const [items, setItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems")
    return storedCart ? JSON.parse(storedCart) : []
  })

  const [open, setOpen] = useState(false)

  // 🔹 Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items))
  }, [items])

  // ✅ Add to cart + Toast
  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)

      if (existing) {
        showToast("🛒 Quantity updated in cart")
        return prev.map(i =>
          i.id === product.id
            ? { ...i, qty: i.qty + qty }
            : i
        )
      }

      showToast("🛒 Added to cart")
      return [...prev, { ...product, qty }]
    })

    setOpen(true)
  }

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return
    setItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty } : i
      )
    )
  }

  // Remove item + Toast
  const removeFromCart = id => {
    setItems(prev => prev.filter(i => i.id !== id))
    showToast("❌ Item removed from cart")
  }

  // Clear cart + Toast
  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cartItems")
    showToast("🧹 Cart cleared")
  }

  return (
    <CartContext.Provider
      value={{
        items,
        open,
        setOpen,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
