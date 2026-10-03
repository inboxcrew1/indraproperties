import Link from 'next/link'
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Eye,
  MapPin,
  Share2,
  PhoneCall,
  UserCheck,
} from 'lucide-react'

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
            Core Agency Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text mt-3">
            Property Buying &amp; Selling Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal">
            Whether acquiring your next property or presenting your asset to qualified buyers, Shree Maruti Nandan Properties offers dedicated end-to-end guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buying Service Card */}
          <div className="bg-[#131317] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 text-xs font-bold uppercase tracking-wider mb-4">
                <Compass size={14} />
                <span>For Buyers &amp; Investors</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold shine-gold-text mb-4">
                Buy Property With Professional Guidance
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                Discover the right residential, commercial, or agricultural property without uncertainty. We provide dedicated assistance from initial search to final walkthrough:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Property Discovery &amp; Search</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Tailored Shortlisting</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Property Comparison Analysis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Location &amp; Road Suitability</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Accompanied Site Visits</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Seller/Owner Communication</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
              >
                <span>Browse Available Inventory</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-[#F5C542] transition-colors"
              >
                Request Consultation &rarr;
              </Link>
            </div>
          </div>

          {/* Selling Service Card */}
          <div className="bg-[#101014] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5C542] border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-4">
                <Share2 size={14} />
                <span>For Property Owners &amp; Landlords</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Sell or Lease Your Property
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                Present your residential plot, commercial space, independent home or agricultural acreage to serious buyers with authentic representation:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Professional Property Listing</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Accurate Property Presentation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>High-Quality Photography / Content</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Buyer Enquiry Filtering</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Site Visit Coordination</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                  <span>Direct Buyer Communication</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/post-property"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
              >
                <span>List Your Property</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+918460209025"
                className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-[#F5C542] transition-colors"
              >
                Call to List: +91 8460209025 &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
