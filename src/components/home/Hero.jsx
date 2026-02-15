import { Link } from "react-router-dom"
import { Flame, Truck, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden border-b border-borderDark">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/bg.mp4"   // 👈 apni video file yahan daalo
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[160px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-3xl">

          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-gold animate-pulse">
            <Flame size={16}/> Limited Time Offer – Up to 50% OFF
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Discover Styles That
            <span className="text-gold block"> Define Your Personality</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Trending fashion, smart lifestyle products, and viral bestsellers — 
            all curated for modern trendsetters who love premium quality at the best prices.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/shop"
              className="bg-gold text-black px-10 py-4 rounded-lg font-semibold hover:bg-goldLight transition shadow-gold"
            >
              Shop The Drop
            </Link>

            <Link
              to="/collections"
              className="border border-gold text-gold px-10 py-4 rounded-lg font-semibold hover:bg-gold hover:text-black transition"
            >
              Explore Collection
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center flex-wrap gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-gold"/> Fast Worldwide Shipping
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold"/> 100% Secure Checkout
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
