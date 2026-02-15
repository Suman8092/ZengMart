import { useCart } from "../context/CartContext"
import { useOrders } from "../context/OrderContext"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const { items, clearCart } = useCart()
  const { addOrder } = useOrders()
  const navigate = useNavigate()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  // 🔹 CASH ON DELIVERY (Frontend Order Save)
  const placeCODOrder = () => {
    if (items.length === 0) return

    const newOrder = {
      id: Date.now(),
      items,
      total,
      date: new Date().toLocaleString(),
      status: "Placed",
      paymentMethod: "Cash on Delivery",
    }

    addOrder(newOrder)
    clearCart()
    navigate("/order-success")
  }

  // 🔹 Razorpay (future use – abhi optional)
  const payOnline = async () => {
    // payment integration baad me
    alert("Online payment temporarily disabled")
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-xl mx-auto px-4 bg-bgCard p-8 rounded-xl border border-borderDark">
        <h2 className="text-2xl font-bold text-textMain mb-6">
          Checkout
        </h2>

        <p className="text-textPara mb-6">
          Total Amount:
          <span className="text-gold font-bold"> ₹{total}</span>
        </p>

        {/* Online Payment (disabled for now) */}
        <button
          onClick={payOnline}
          disabled
          className="w-full bg-gray-600 text-black py-3 rounded-lg font-semibold cursor-not-allowed opacity-50"
        >
          Pay Online (Coming Soon)
        </button>

        {/* Cash on Delivery */}
        <button
          onClick={placeCODOrder}
          className="mt-4 w-full border border-gold text-gold py-3 rounded-lg hover:bg-gold hover:text-black transition"
        >
          Cash on Delivery
        </button>
      </div>
    </section>
  )
}
