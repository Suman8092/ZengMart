import { useCart } from "../../context/CartContext"

export default function StickyAddToCart({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="fixed bottom-0 left-0 w-full bg-bgCard border-t border-borderDark p-3 md:hidden z-40">
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-goldLight transition"
      >
        Add to Cart • ₹{product.price}
      </button>
    </div>
  )
}
