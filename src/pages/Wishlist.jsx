import { useWishlist } from "../context/WishlistContext"
import ProductCard from "../components/product/ProductCard"

export default function Wishlist() {
  const { wishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgMain text-textMuted">
        No items in wishlist ❤️
      </div>
    )
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-textMain mb-10">
          Your Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
