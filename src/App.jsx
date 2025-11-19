import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <Featured />
      <section id="about" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-3xl font-bold text-white mb-3">About Asylen Ventures</h2>
              <p className="text-blue-200">
                We curate and develop extraordinary residential properties across Kashmir — from lakefront villas on Dal to alpine chalets in Gulmarg. Our approach blends architecture, craft and landscape, creating homes that feel inevitable — calm, functional, and stunningly beautiful.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm">Phone</p>
              <p className="text-white font-semibold text-lg">+91 7006151339</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm">Email</p>
              <p className="text-white font-semibold text-lg">asylenventures@gmail.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm">Location</p>
              <p className="text-white font-semibold text-lg">Kashmir, India</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="py-10 border-t border-white/10 text-center text-blue-300/70">
        © {new Date().getFullYear()} ASYLEN VENTURES. All rights reserved.
      </footer>
    </div>
  )
}

export default App
