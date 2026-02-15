import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function Cart() {
  const { items, updateQty, removeFromCart } = useCart()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-bgMain">
        <h2 className="text-2xl font-bold text-textMain">
          Your cart is empty
        </h2>

        <Link
          to="/shop"
          className="mt-6 bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-goldLight transition"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <h1 className="text-3xl font-bold text-textMain mb-10">
          Your Cart
        </h1>

        <div className="space-y-6">
          {items.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border border-borderDark rounded-xl p-5 bg-bgCard"
            >
              <div>
                <h3 className="text-textMain font-medium">
                  {item.name}
                </h3>
                <p className="text-gold font-semibold">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="border border-borderDark px-3 py-1 text-textSub"
                  >
                    −
                  </button>

                  <span className="text-textMain">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="border border-borderDark px-3 py-1 text-textSub"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right mt-4 sm:mt-0">
                <p className="text-textMain font-semibold">
                  ₹{item.price * item.qty}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold text-textMain">
            Total: <span className="text-gold">₹{total}</span>
          </h2>

          <Link
            to="/checkout"
            className="bg-gold text-black px-10 py-4 rounded-lg font-semibold hover:bg-goldLight transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  )
}
