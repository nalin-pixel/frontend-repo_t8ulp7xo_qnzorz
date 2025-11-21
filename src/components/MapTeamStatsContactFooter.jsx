import { MapPin } from 'lucide-react'

export default function MapTeamStatsContactFooter() {
  const pins = [
    { city: 'Tunis (HQ)', coords: [36.8065, 10.1815] },
    { city: 'Djerba (Workshop)', coords: [33.8076, 10.8451] },
    { city: 'Le Kef (Workshop)', coords: [36.1740, 8.7049] },
  ]

  const team = [
    { name: 'Sarra', role: 'Creative Director of Heritage & Design' },
    { name: 'Sarra', role: 'Marketing & International Development' },
    { name: 'Sara', role: 'Operations & Product Development' },
    { name: 'Skander', role: 'Finance & Strategy' },
    { name: 'Malek', role: 'Media & Digital Production' },
  ]

  const stats = [
    { label: 'Artisans & team members', value: '90' },
    { label: 'International exports', value: '65%' },
    { label: 'Workshops (Tunis, Djerba, Le Kef)', value: '3' },
    { label: 'International clients', value: '+35k' },
    { label: 'Annual revenue', value: '8.7M TND' },
  ]

  return (
    <div>
      {/* MAP */}
      <section className="relative py-20 bg-[#e7d9be]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-[#6b5a2b] text-3xl md:text-5xl font-extrabold text-center mb-2">Where Heritage Lives</h2>
          <p className="text-[#7a6a3d] text-center mb-8">Headquarters, workshops, and partner boutiques</p>

          <div className="rounded-2xl overflow-hidden border-2 border-amber-600 shadow-lg bg-[#f7f1e3]">
            <div className="relative h-[420px]">
              <iframe
                title="Imenza Map"
                width="100%"
                height="100%"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=7.5,32,12,37.5&layer=mapnik`}
              />
              {/* Pins legend */}
              <div className="absolute top-3 left-3 bg-white/90 rounded-lg p-3 border border-amber-700/30">
                <div className="flex items-center gap-2 font-semibold text-[#6b1d1d]"><span className="text-xl">ⵣ</span> Map Pins</div>
                <ul className="mt-2 text-sm text-[#6b1d1d]/80">
                  {pins.map(p => (
                    <li key={p.city} className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-700"/> {p.city}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20 bg-[linear-gradient(135deg,#ead7c2,#6b1d1d)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-amber-100 text-3xl md:text-5xl font-extrabold text-center mb-10">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map(m => (
              <div key={m.name + m.role} className="rounded-xl overflow-hidden border border-amber-400/40 bg-[#f4e7d3]">
                <div className="h-36 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
                <div className="p-4" style={{backgroundImage:"radial-gradient(circle at 10% 10%, rgba(107,29,29,0.06) 0 2px, transparent 3px)"}}>
                  <div className="border border-amber-600 rounded-lg p-3">
                    <h3 className="text-[#6b1d1d] font-bold">{m.name}</h3>
                    <p className="text-[#7a3a3a] text-sm">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover">
        <div className="absolute inset-0 bg-[#5a0f0f]/90"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-amber-300 text-3xl md:text-5xl font-extrabold text-center">In Numbers</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map(s => (
              <div key={s.label} className="text-center bg-white/5 border border-amber-400/20 rounded-xl p-4">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-200">{s.value}</div>
                <div className="text-amber-100/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-20 bg-[#efe2cc]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10"/>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-amber-700/30">
            <div className="p-8 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover">
              <div className="bg-[#3b2b1a]/80 p-6 rounded-xl border border-amber-500/40">
                <h2 className="text-amber-100 text-3xl md:text-4xl font-extrabold">Headquarters & Contact</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4 text-amber-100/90">
                  <div>
                    <p><span className="font-semibold">Headquarters:</span> Tunis, Tunisia</p>
                    <p><span className="font-semibold">Workshops:</span> Djerba & Le Kef</p>
                    <p><span className="font-semibold">Hours:</span> Monday – Saturday</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Email:</span> contact@imenza.tn</p>
                    <p><span className="font-semibold">WhatsApp:</span> +216 00 000 000</p>
                    <p><span className="font-semibold">Instagram / TikTok:</span> @imenza.heritage</p>
                  </div>
                </div>
                <a href="#order" className="inline-block mt-6 bg-[#4b5a36] hover:bg-[#3e4c2e] text-amber-100 font-semibold py-3 px-6 rounded-lg border border-amber-500 shadow-[0_0_0_3px_rgba(212,163,22,0.25)_inset]">Visit Us & Discover Our Heritage</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 bg-[#3d4f34] text-amber-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl">ⵣ</div>
          <p className="mt-2">Preserving Amazigh & Arab heritage through jewelry.</p>
          <div className="mt-3 flex items-center justify-center gap-4 text-amber-300">
            <span className="border border-amber-400/40 rounded-full px-3 py-1">Instagram</span>
            <span className="border border-amber-400/40 rounded-full px-3 py-1">TikTok</span>
            <span className="border border-amber-400/40 rounded-full px-3 py-1">WhatsApp</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
