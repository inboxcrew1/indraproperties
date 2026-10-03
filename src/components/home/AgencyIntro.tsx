import Link from 'next/link'
import { Building2, ShieldCheck, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AgencyIntro() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Highlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80"
                alt="Shree Maruti Nandan Properties Bulandshahr Property Consultancy"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] text-black text-xs font-bold mb-2 shadow-md">
                  <MapPin size={12} />
                  <span>Bhoor Chauraha, Bulandshahr</span>
                </div>
                <h4 className="font-display text-xl font-bold text-[#F5C542]">
                  Shree Maruti Nandan Properties
                </h4>
                <p className="text-zinc-300 text-xs mt-1">
                  Serving buyers, sellers, landlords and investors across Western UP and NCR.
                </p>
              </div>
            </div>

            {/* Quick Consultation Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#131317] text-white p-4 rounded-2xl shadow-xl border border-amber-500/25 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-[#F5C542] flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Direct Agency Helpline</p>
                <a href="tel:+918460209025" className="text-sm font-bold text-[#F5C542] hover:underline">
                  +91 8460209025
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-[#F5C542] text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Building2 size={14} />
              <span>About The Agency</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold shine-gold-text leading-tight">
              Your Local Property Partner
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Based near <strong className="text-white font-semibold">Bhoor Chauraha in Bulandshahr</strong>, 
                <strong className="text-[#F5C542] font-semibold"> Shree Maruti Nandan Properties</strong> is a 
                professional real estate agency and property consultancy dedicated to guiding clients through every stage 
                of their property journey.
              </p>
              <p>
                Whether you are searching for a residential plot to construct your family home, exploring fertile agricultural land, 
                looking for an independent house, or seeking high-visibility commercial shops and office spaces, we provide 
                honest advice, accurate location details, and direct assistance.
              </p>
              <p>
                In addition to our strong roots in Bulandshahr, we assist clients with selected high-potential residential 
                and commercial opportunities across Noida, Greater Noida, Delhi, and Gurugram.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                <span>Residential Plots &amp; Independent Houses</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                <span>Agricultural &amp; Farm Land Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                <span>Commercial Shops, Showrooms &amp; Offices</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0" />
                <span>Transparent Buying, Selling &amp; Leasing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Read Agency Profile</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-amber-500/40 text-zinc-200 hover:text-[#F5C542] text-xs sm:text-sm font-semibold rounded-xl transition-all"
              >
                <span>Visit Our Office</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
