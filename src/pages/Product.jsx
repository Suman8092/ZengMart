import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"
import ProductGallery from "../components/product/ProductGallery"
import ProductInfo from "../components/product/ProductInfo"
import StickyAddToCart from "../components/product/StickyAddToCart"

export default function Product() {
  const { id } = useParams()
  const product = products.find(p => p.id == id)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-textMain">
        Product not found
      </div>
    )
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <ProductGallery image={product.image} />

        <ProductInfo
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      </div>

      <StickyAddToCart product={product} />
    </section>
  )
}
