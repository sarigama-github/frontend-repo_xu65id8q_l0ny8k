import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              ASYLEN VENTURES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-xl text-blue-100 max-w-xl"
            >
              Kashmir’s most refined real estate experience. Curated homes. Architectural statements. Crafted for those who demand beauty, calm and uncompromising quality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              <a href="#featured" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition">Explore Featured</a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">Contact Us</a>
            </motion.div>
            <div className="mt-8 text-blue-200/70 text-sm">
              Kashmir, India • +91 7006151339 • asylenventures@gmail.com
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2cc1?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Home Kashmir"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
