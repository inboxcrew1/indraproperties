import Link from 'next/link'
import { MapPin, Phone, MessageSquare, CheckCircle2, Building2 } from 'lucide-react'

export default function LocalExpertise() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131317] rounded-3xl border border-white/10 p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 text-xs font-bold uppercase tracking-wider">
                <MapPin size={13} />
                <span>Bulandshahr &amp; Surrounding Areas</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text leading-tight">
                Local Knowledge. Personal Property Guidance.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                Shree Maruti Nandan Properties provides hands-on local assistance for clients looking to buy, sell, rent or lease property in Bulandshahr and surrounding markets.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                Our team understands the on-ground ground reality: from connectivity near Bhoor Chauraha and Transport Nagar to upcoming infrastructure along the NH-34 / NH-58 corridors, circle rates across localities, and clear documentation. You receive genuine, factual guidance without inflated promises.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+918460209025"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
                >
                  <Phone size={15} />
                  <span>Call +91 8460209025</span>
                </a>

                <a
                  href="https://wa.me/918460209025?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20would%20like%20local%20property%20consultation%20in%20Bulandshahr."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-amber-500/40 text-zinc-200 hover:text-[#F5C542] rounded-xl text-xs sm:text-sm font-semibold transition-all"
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#101014] rounded-2xl p-6 sm:p-8 border border-white/10">
              <h4 className="font-display font-bold text-base text-[#F5C542] mb-4 flex items-center gap-2">
                <Building2 size={18} className="text-[#F5C542]" />
                <span>Areas of Local Assistance</span>
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span>Bhoor Chauraha &amp; Transport Nagar Commercial Sector</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span>Sector 65, Civil Lines &amp; Established Residential Belts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span>NH-34 &amp; NH-58 Highway Corridor Properties</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span>Syana, Anupshahr &amp; Surrounding Agricultural Lands</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span>Direct Connect with Verified NCR Inventory</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400">
                <span>Office: </span>
                <span className="font-medium text-white">Near Bhoor Chauraha, Bulandshahr (U.P.)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
