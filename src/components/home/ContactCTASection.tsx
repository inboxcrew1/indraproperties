import Link from 'next/link'
import { Phone, ArrowRight, MessageSquare, Building2 } from 'lucide-react'

export default function ContactCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#060608] via-[#0E0E13] to-[#14141A] border-t border-amber-500/20 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30 text-[#F5C542] text-xs font-semibold uppercase tracking-wider mb-6">
            <Building2 size={13} />
            <span>Shree Maruti Nandan Properties &bull; Bulandshahr</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold shine-gold-text leading-tight mb-6 text-balance">
            Looking for the Right Property?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Talk to Shree Maruti Nandan Properties for residential, commercial, agricultural and rental property requirements in Bulandshahr and surrounding markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918460209025"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black text-base font-bold rounded-2xl shadow-xl hover:shadow-2xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>Call +91 8460209025</span>
            </a>

            <Link
              href="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-base font-semibold rounded-2xl border border-white/20 transition-colors"
            >
              <span>Explore Properties</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#18181F] text-[#F5C542] hover:bg-[#252530] text-base font-bold rounded-2xl border border-amber-500/30 transition-colors shadow-lg"
            >
              <MessageSquare size={18} className="text-[#F5C542]" />
              <span>Send Enquiry</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-zinc-400">
            <span>Location: Near Bhoor Chauraha, Bulandshahr, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
