import Link from 'next/link'
import { Phone, ArrowRight, MessageSquare, Building2 } from 'lucide-react'

export default function ContactCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-charcoal via-charcoal-800 to-emerald-dark text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-light text-xs font-semibold uppercase tracking-wider mb-6">
            <Building2 size={13} />
            <span>Indra Properties &amp; Enterprises &bull; Bulandshahr</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6 text-balance">
            Looking for the Right Property?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Talk to Indra Properties &amp; Enterprises for residential, commercial, agricultural and rental property requirements in Bulandshahr and surrounding markets.
          </p>

          {/* Prompt 90 Buttons: 'Call +91 8460209025', 'Explore Properties', 'Send Enquiry' */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918460209025"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald hover:bg-emerald-light text-white text-base font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal hover:bg-gray-100 text-base font-bold rounded-2xl transition-colors shadow-lg"
            >
              <MessageSquare size={18} className="text-emerald" />
              <span>Send Enquiry</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-gray-400">
            <span>Location: Near Bhoor Chauraha, Bulandshahr, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
