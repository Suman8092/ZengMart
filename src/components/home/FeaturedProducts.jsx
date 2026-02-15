import products from "../../data/products"
import ProductCard from "../product/ProductCard"

export default function FeaturedProducts() {
  return (
    <section className="bg-bgSection py-20 border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-textMain text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
