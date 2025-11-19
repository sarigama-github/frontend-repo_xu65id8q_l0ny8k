import { useEffect, useState } from 'react'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/properties/featured`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Residences</h2>
          <a href="#listings" className="text-blue-300 hover:text-white">View all</a>
        </div>
        {loading ? (
          <div className="text-blue-200">Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, i) => (
              <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-blue-200/80 text-sm mt-1">{p.city}, {p.state}</p>
                  <p className="text-blue-100 mt-3 text-sm line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-white font-bold">₹{(p.price/100000).toFixed(1)} Cr</p>
                    <p className="text-blue-200 text-sm">{p.bedrooms} bd • {p.bathrooms} ba • {p.area_sqft} sqft</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
