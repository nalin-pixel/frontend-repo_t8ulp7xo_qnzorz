import { useState } from 'react'

export default function StoriesAndOrder() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      customer_name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      product: form.get('product'),
      size: form.get('size') || undefined,
      personalization: form.get('personalization') || undefined,
      engraving_symbols: form.get('engraving') || undefined,
      quantity: Number(form.get('quantity') || 1),
      notes: form.get('notes') || undefined,
      shipping_country: form.get('country') || undefined,
      agree_terms: !!form.get('agree_terms')
    }

    setSubmitting(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setResult({ ok: true, id: data.order_id })
    } catch (err) {
      setResult({ ok: false, message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      {/* CULTURAL STORIES */}
      <section className="relative py-20 bg-[#1d1a15]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop')] opacity-10 bg-cover"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.06),transparent_60%)]"/>
        <div className="relative max-w-5xl mx-auto px-6 text-amber-100">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">Cultural Stories</h2>
          <p className="text-amber-200/80 text-center max-w-3xl mx-auto">
            Journey through symbols and colors: the protective hand, the guiding star, the vibrant enamel blues and reds of the coast and the mountains. Each tribe leaves a sign — and each sign becomes a jewel.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Symbols of Protection', 'Colors of the South', 'Tribes & Routes'].map((t) => (
              <div key={t} className="bg-white/5 border border-amber-300/10 rounded-xl p-5">
                <h3 className="font-bold text-amber-200 mb-2">{t}</h3>
                <p className="text-amber-100/80">Stories carved into metal and woven into carpets accompany every step of the artisan.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER / COMMAND SECTION */}
      <section className="relative py-20 bg-[linear-gradient(135deg,#eadcc5,#b33b3b)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10"/>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-amber-600/30 bg-[#f3e6cf]/80 backdrop-blur p-6 md:p-10 shadow-xl">
            <h2 className="text-[#2f3a2f] text-3xl md:text-4xl font-extrabold text-center mb-2">Command Your Heritage Piece</h2>
            <p className="text-[#4a553f] text-center mb-6">Personalize with Amazigh symbols, sizes, and engraving</p>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Full Name</label>
                <input name="name" required className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Email</label>
                <input type="email" name="email" required className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Phone / WhatsApp</label>
                <input name="phone" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Product</label>
                <select name="product" required className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2">
                  {['Fibulae','Amazigh crowns','Enamel pendants','Stainless steel reinterpretations'].map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Size</label>
                <input name="size" placeholder="Ring size / length / dimensions" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-[#4a553f]">Quantity</label>
                <input type="number" min="1" max="20" defaultValue="1" name="quantity" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-[#4a553f]">Personalization</label>
                  <input name="personalization" placeholder="Colors, motifs, materials" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-[#4a553f]">Engraving (Amazigh symbols)</label>
                  <input name="engraving" placeholder="e.g., ⵣ, ⵛ, ⵍ" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm text-[#4a553f]">Delivery Country</label>
                <input name="country" className="mt-1 rounded-lg border border-[#b08a52] bg-white/80 p-2" />
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input id="agree" type="checkbox" name="agree_terms" className="size-4" />
                <label htmlFor="agree" className="text-sm text-[#4a553f]">I agree to the lead time and international shipping terms</label>
              </div>
              <div className="md:col-span-2 grid md:grid-cols-3 gap-3 items-start">
                <button disabled={submitting} className="col-span-2 md:col-span-1 bg-[#4b5a36] hover:bg-[#3e4c2e] text-amber-100 font-semibold py-3 rounded-lg border border-amber-500 shadow-[0_0_0_3px_rgba(212,163,22,0.25)_inset]">
                  {submitting ? 'Sending...' : 'Confirm Command'}
                </button>
                <div className="md:col-span-2 text-sm text-[#4a553f] bg-white/70 rounded-lg p-3 border border-[#b08a52]/50">
                  <p className="font-semibold">Lead Time</p>
                  <p>Handcrafted to order. Typical delivery 10–21 days depending on personalization.</p>
                  <p className="font-semibold mt-2">International Shipping</p>
                  <p>Worldwide delivery with tracking. Customs duties may apply based on destination.</p>
                </div>
              </div>
              {result && (
                <div className={`md:col-span-2 mt-2 rounded-lg p-3 ${result.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {result.ok ? (
                    <p>Thank you. Your request was received. Reference: {result.id}</p>
                  ) : (
                    <p>Submission failed: {result.message}</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
