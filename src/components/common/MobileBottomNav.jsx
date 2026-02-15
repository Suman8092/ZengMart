import { Link, useLocation } from "react-router-dom"
import {
  Home,
  ShoppingBag,
  Heart,
  ShoppingCart,
  Package
} from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"

export default function MobileBottomNav() {
  const location = useLocation()
  const { items, setOpen } = useCart()
  const { wishlist } = useWishlist()

  const cartCount = items.reduce((a, b) => a + b.qty, 0)
  const wishlistCount = wishlist.length

  const isActive = (path) =>
    location.pathname === path ? "text-gold" : "text-textMuted"

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bgMain border-t border-borderDark md:hidden">
      <div className="flex justify-around items-center py-3">

        {/* Home */}
        <Link to="/" className={`flex flex-col items-center ${isActive("/")}`}>
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        {/* Shop */}
        <Link to="/shop" className={`flex flex-col items-center ${isActive("/shop")}`}>
          <ShoppingBag size={20} />
          <span className="text-xs mt-1">Shop</span>
        </Link>

        {/* Orders */}
        <Link
          to="/orders"
          className={`flex flex-col items-center ${isActive("/orders")}`}
        >
          <Package size={20} />
          <span className="text-xs mt-1">Orders</span>
        </Link>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className={`relative flex flex-col items-center ${isActive("/wishlist")}`}
        >
          <Heart size={20} />
          <span className="text-xs mt-1">Wishlist</span>

          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-gold text-black text-[10px] px-1.5 rounded-full">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Cart */}
        <button
          onClick={() => setOpen(true)}
          className="relative flex flex-col items-center text-textMuted hover:text-gold transition"
        >
          <ShoppingCart size={20} />
          <span className="text-xs mt-1">Cart</span>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-gold text-black text-[10px] px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  )
}
