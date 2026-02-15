import products from "../../data/products"
import ProductCard from "../product/ProductCard"

export default function BestSellers() {
  const bestSellers = products.filter(p => p.isBestSeller)

  if (bestSellers.length === 0) return null

  return (
    <section className="bg-bgSection py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-textMain text-center mb-12">
          ⭐ Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
