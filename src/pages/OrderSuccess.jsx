import { Link } from "react-router-dom"

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgMain px-4">
      <div className="bg-bgCard border border-borderDark rounded-xl p-10 text-center max-w-md w-full">
        
        <div className="text-5xl mb-4">✅</div>

        <h1 className="text-2xl font-bold text-textMain">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-textMuted text-sm">
          Thank you for shopping with ZengMart.  
          Your order will be delivered soon.
        </p>

        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-goldLight transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
