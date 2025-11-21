export default function CollectionsWorkshops() {
  const categories = [
    { name: 'Fibulae', img: 'https://images.unsplash.com/photo-1617038260897-1b707d413367?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Amazigh crowns', img: 'https://images.unsplash.com/photo-1520923642038-b4259ace0f9b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Enamel pendants', img: 'https://images.unsplash.com/photo-1614236563769-6432df3cf375?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Stainless steel reinterpretations', img: 'https://images.unsplash.com/photo-1511381939415-c1c76caa3de7?q=80&w=1200&auto=format&fit=crop' },
  ]

  const workshopPhotos = [
    'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604598340566-7ad959d0d97e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621893761924-f2a067f94e3d?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div>
      {/* COLLECTIONS */}
      <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#6b1d1d]/90"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-amber-100 text-3xl md:text-5xl font-extrabold text-center">Collections</h2>
          <p className="text-amber-200/90 text-center mt-2">Each piece rests upon the memory of a rug</p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(cat => (
              <div key={cat.name} className="rounded-xl overflow-hidden border border-amber-300/20 shadow-lg bg-[#2a1a1a]">
                <div className="h-40 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-amber-100 font-semibold">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISANS & WORKSHOPS */}
      <section className="relative py-20 bg-[linear-gradient(135deg,#f7e6cf,#e6c7a1)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-15 bg-cover"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-[#6b3a1d] text-3xl md:text-5xl font-extrabold text-center">Artisans & Workshops</h2>
          <p className="text-[#7d4b2a] text-center mt-2">Warm light, copper tools, enamel ovens</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {workshopPhotos.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-[#b58247]/30 shadow-md bg-[#f5e6d3]">
                <img src={src} alt="workshop" className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
