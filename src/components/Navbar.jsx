import { Menu, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4 mt-4 rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10">
        <a href="#" className="text-white font-extrabold tracking-wide text-xl">
          ASYLEN <span className="text-blue-400">VENTURES</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-blue-100">
          <a href="#featured" className="hover:text-white transition">Featured</a>
          <a href="#listings" className="hover:text-white transition">Listings</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="hidden sm:flex items-center gap-5 text-blue-100">
          <a href="tel:+917006151339" className="flex items-center gap-2 hover:text-white transition"><Phone size={18}/> +91 7006151339</a>
          <a href="mailto:asylenventures@gmail.com" className="flex items-center gap-2 hover:text-white transition"><Mail size={18}/> Email</a>
        </div>
        <button className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>
    </header>
  )
}
