import { useCart } from "../../context/CartContext"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

export default function CartDrawer() {
  const { items, open, setOpen } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-bgCard border-l border-borderDark flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-borderDark">
          <h2 className="text-lg font-semibold text-textMain">
            Your Cart
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-textMuted hover:text-gold text-xl"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-textMuted text-sm text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            items.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Summary */}
        <CartSummary />
      </div>
    </div>
  )
}
