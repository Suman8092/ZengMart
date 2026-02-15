import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

export default function CartSummary() {
  const { items, setOpen } = useCart()

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="border-t border-borderDark px-5 py-4">
      
      <div className="flex justify-between text-sm text-textSub mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between text-sm text-textSub mb-4">
        <span>Shipping</span>
        <span className="text-gold">Free</span>
      </div>

      <div className="flex justify-between text-lg font-semibold text-textMain mb-6">
        <span>Total</span>
        <span className="text-gold">₹{subtotal}</span>
      </div>

      <Link
        to="/checkout"
        onClick={() => setOpen(false)}
        className="block w-full text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-goldLight transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  )
}
