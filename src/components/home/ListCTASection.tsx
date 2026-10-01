import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Upload, Users, Sparkles } from 'lucide-react'

export default function ListCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-charcoal via-charcoal-800 to-emerald-dark text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={13} />
            <span>Direct Owners &bull; Brokers &bull; Builders</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6 text-balance">
            Looking to Sell or Rent Your Property?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            List your residential plot, apartment, villa, agricultural land, or commercial building. Connect with verified buyers and tenants across India without predatory brokerage fees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-200 mb-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-light" />
              100% Free Owner Listings
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-light" />
              Instant WhatsApp Enquiries
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-light" />
              Verified Buyer Leads
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-light" />
              Complete Listing Analytics
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/post-property"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald hover:bg-emerald-light text-white text-base font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>List Your Property Free</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/safety"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-base font-semibold rounded-2xl border border-white/20 transition-colors"
            >
              <span>Seller Protection Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
