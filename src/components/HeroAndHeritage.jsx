import { motion } from 'framer-motion'

const SectionTitle = ({ overline, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto">
    {overline && (
      <p className="tracking-widest text-xs md:text-sm text-amber-300/90 mb-2">
        {overline}
      </p>
    )}
    <h2 className="text-3xl md:text-5xl font-extrabold text-amber-100 drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base md:text-lg text-amber-200/80">
        {subtitle}
      </p>
    )}
  </div>
)

export default function HeroAndHeritage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Rug background using photo texture */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591459897140-16e792b1ea6c?q=80&w=2000&auto=format&fit=crop"
            alt="Arabic red rug background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0.45),rgba(0,0,0,0.75))]"/>
        </div>

        {/* Centerpiece jewelry glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="mx-auto w-44 h-44 md:w-60 md:h-60 rounded-full border-4 border-amber-400/60 shadow-[0_0_120px_rgba(245,197,24,0.45)] overflow-hidden mb-8 bg-gradient-to-br from-[#6b1d1d] to-[#2c0b0b] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1606313564200-b8ae01f96c1d?q=80&w=1200&auto=format&fit=crop"
              alt="Handcrafted Amazigh jewelry"
              className="w-full h-full object-cover opacity-90 mix-blend-screen"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-amber-100 tracking-tight">
            Imenza – Heritage that Lives Forever
          </h1>
          <p className="mt-4 text-amber-200/90 text-lg md:text-2xl">
            Handcrafted Amazigh & Arabic Jewelry
          </p>
        </motion.div>

        {/* subtle Amazigh symbol overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center opacity-20">
          <div className="text-6xl md:text-9xl font-black text-amber-300/30">ⵣ</div>
        </div>
      </section>

      {/* OUR HERITAGE */}
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#3b3a2a_0%,#2a2a22_100%)]">
        {/* Patterns overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-overlay" style={{backgroundImage:
          "radial-gradient(circle at 10% 10%, rgba(255,215,0,0.12) 0 2px, transparent 3px), radial-gradient(circle at 90% 30%, rgba(255,215,0,0.08) 0 1px, transparent 2px)", backgroundSize:'60px 60px, 80px 80px'}}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"/>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <SectionTitle
            overline="OUR HERITAGE"
            title="Amazigh Roots, Tunisian Craftsmanship"
            subtitle="Enamel artistry, copper and brass work, and stainless steel reinterpretations — woven with stories from the medina and the mountains."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-amber-200/10 rounded-xl p-6 text-amber-100">
              <h3 className="font-bold text-amber-200 mb-2">Ancestral Techniques</h3>
              <p className="text-amber-100/80">From fibulae to crowns, our pieces revive motifs of protection, fertility, and travel. Each pattern carries memory.</p>
            </div>
            <div className="bg-white/5 border border-amber-200/10 rounded-xl p-6 text-amber-100">
              <h3 className="font-bold text-amber-200 mb-2">Enamel & Metal</h3>
              <p className="text-amber-100/80">Vibrant enamels and warm metals fired in traditional ovens, shaped with copper tools — built to last generations.</p>
            </div>
            <div className="bg-white/5 border border-amber-200/10 rounded-xl p-6 text-amber-100">
              <h3 className="font-bold text-amber-200 mb-2">Contemporary Reinterpretations</h3>
              <p className="text-amber-100/80">Stainless steel designs reinterpret heritage for modern wear, keeping symbolism intact and resilient.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
