import testimonials from "../../data/testimonials"
import StarRating from "../common/StarRating"

export default function Testimonials() {
  return (
    <section className="bg-bgSection py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-textMain text-center mb-12">
          ⭐ What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="bg-bgCard border border-borderDark p-6 rounded-xl hover:shadow-gold transition"
            >
              <StarRating rating={item.rating} />

              <p className="mt-4 text-textPara text-sm">
                “{item.comment}”
              </p>

              <div className="mt-4">
                <p className="text-textMain font-semibold">
                  {item.name}
                </p>
                <p className="text-xs text-textMuted">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
