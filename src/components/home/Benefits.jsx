import { Truck, ShieldCheck, RotateCcw } from "lucide-react"

export default function Benefits() {
  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Benefit 1 */}
        <div className="bg-bgCard border border-borderDark rounded-xl p-8 text-center hover:shadow-gold transition">
          <Truck className="mx-auto text-gold mb-4" size={32} />
          <h3 className="text-textMain font-semibold mb-2">
            Fast Delivery
          </h3>
          <p className="text-textMuted text-sm">
            Swift and reliable shipping across the country.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-bgCard border border-borderDark rounded-xl p-8 text-center hover:shadow-gold transition">
          <ShieldCheck className="mx-auto text-gold mb-4" size={32} />
          <h3 className="text-textMain font-semibold mb-2">
            Secure Payment
          </h3>
          <p className="text-textMuted text-sm">
            Encrypted transactions for your peace of mind.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-bgCard border border-borderDark rounded-xl p-8 text-center hover:shadow-gold transition">
          <RotateCcw className="mx-auto text-gold mb-4" size={32} />
          <h3 className="text-textMain font-semibold mb-2">
            Easy Returns
          </h3>
          <p className="text-textMuted text-sm">
            Hassle-free 7-day return policy.
          </p>
        </div>
      </div>
    </section>
  )
}
