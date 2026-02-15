import products from "../../data/products"
import ProductCard from "../product/ProductCard"

export default function Trending() {
  const trending = products.filter(p => p.isTrending)

  if (trending.length === 0) return null

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-textMain text-center mb-12">
          🔥 Trending Now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trending.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
