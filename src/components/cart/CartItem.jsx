import { useCart } from "../../context/CartContext"

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 border-b border-borderDark pb-4">
      
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg border border-borderDark"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-textMain">
          {item.name}
        </h3>

        <p className="text-gold font-semibold mt-1">
          ₹{item.price}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => updateQty(item.id, item.qty - 1)}
            className="w-7 h-7 flex items-center justify-center border border-borderDark text-textSub hover:text-gold"
          >
            −
          </button>

          <span className="text-sm text-textMain">
            {item.qty}
          </span>

          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
            className="w-7 h-7 flex items-center justify-center border border-borderDark text-textSub hover:text-gold"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-xs text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  )
}
