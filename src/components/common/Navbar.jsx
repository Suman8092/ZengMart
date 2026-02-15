import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { Heart, Package, Flame } from "lucide-react"

export default function Navbar() {
  const { items, setOpen } = useCart()
  const { wishlist } = useWishlist()

  const cartCount = items.reduce((a, b) => a + b.qty, 0)
  const wishlistCount = wishlist.length

  return (
    <header className="sticky top-0 z-50 bg-bgMain border-b border-borderDark">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/zenn.png"
            alt="ZengMart Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-textSub text-sm">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/shop" className="hover:text-gold transition">Shop</Link>

          {/* 🔥 Offers / Sale */}
          <Link
            to="/offers"
            className="flex items-center gap-1 text-gold font-semibold hover:opacity-80 transition"
          >
            <Flame size={14} />
            Offers
          </Link>

          <Link to="/orders" className="hover:text-gold transition">Orders</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">

          {/* Orders */}
          <Link
            to="/orders"
            className="relative text-textMain hover:text-gold transition"
            title="Orders"
          >
            <Package size={22} />
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative text-textMain hover:text-gold transition"
            title="Wishlist"
          >
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs px-2 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            onClick={() => setOpen(true)}
            className="relative text-xl text-textMain hover:text-gold transition"
            title="Cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  )
}
