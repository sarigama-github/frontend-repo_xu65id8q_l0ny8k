import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setStatus({ ok: true, message: 'Thanks — we will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Begin a conversation</h2>
          <p className="text-blue-200 mt-4">Call +91 7006151339 or email asylenventures@gmail.com. Or send a note — we usually reply within a day.</p>
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-blue-100">
            <p className="font-semibold">Kashmir, India</p>
            <p className="text-sm mt-1">We operate across Srinagar, Gulmarg, Pahalgam and Sonamarg.</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-100 text-sm mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-blue-100 text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-blue-100 text-sm mb-1">Phone</label>
              <input name="phone" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 ..."/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-blue-100 text-sm mb-1">Message</label>
              <textarea name="message" required rows={4} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us what you’re looking for"/>
            </div>
          </div>
          <button disabled={loading} className="mt-4 w-full px-4 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition disabled:opacity-50">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
