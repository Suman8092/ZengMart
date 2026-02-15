import { useContext } from "react"
import { CartContext } from "../context/CartContext"

/**
 * useCart
 * Centralized hook to access cart state & actions
 */
export default function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}
