import { Link } from "react-router-dom"
import { Heart } from "lucide-react"
import { useWishlist } from "../../context/WishlistContext"
import { useCart } from "../../context/CartContext"
import { getDiscountedPrice } from "../../utils/formatPrice"
import StarRating from "../common/StarRating"


export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  const hasDiscount = product.discount > 0

  return (
    <div className="bg-bgCard border border-borderDark rounded-xl overflow-hidden hover:shadow-gold transition">
      
      {/* Image + Badges */}
      <div className="relative">
        {/* SALE Badge */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
            SALE
          </span>
        )}
        {/* Best Seller Badge */}
{product.isBestSeller && (
  <span className="absolute top-3 left-3 bg-gold text-black text-xs px-2 py-1 rounded-full z-10">
    ⭐ Best Seller
  </span>
)}

{/* Trending Badge */}
{product.isTrending && (
  <span className="absolute top-10 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full z-10">
    🔥 Trending
  </span>
)}


        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 bg-bgMain p-2 rounded-full z-10"
        >
          <Heart
            size={18}
            className={
              isWishlisted(product.id)
                ? "fill-red-500 text-red-500"
                : "text-textMuted"
            }
          />
        </button>

        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-textMain font-medium text-sm">
          {product.name}
        </h3>
      <div className="flex items-center gap-2 mt-1">
  <StarRating rating={product.rating} />
  <span className="text-xs text-textMuted">
    ({product.reviewsCount})
  </span>
</div>

        {/* Price */}
        <div className="mt-2">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold text-lg">
                ₹{getDiscountedPrice(product.price, product.discount)}
              </span>

              <span className="text-textMuted text-sm line-through">
                ₹{product.price}
              </span>

              <span className="text-xs bg-gold text-black px-2 py-0.5 rounded-full">
                {product.discount}% OFF
              </span>
            </div>
          ) : (
            <span className="text-gold font-bold text-lg">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-gold text-black py-2 rounded-lg hover:bg-goldLight transition font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
