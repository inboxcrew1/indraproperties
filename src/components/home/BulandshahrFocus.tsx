import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import { MapPin, ArrowRight, Building2, Trees, Layers, Store } from 'lucide-react'

export default function BulandshahrFocus() {
  // Filter all Bulandshahr properties
  const bulandshahrProperties = properties
    .filter((p) => p.location.city.toLowerCase() === 'bulandshahr')
    .slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-[#101014] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin size={13} />
              <span>Primary Agency Market</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text tracking-tight">
              Properties in Bulandshahr
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Explore residential plots, independent houses, commercial shops near Transport Nagar &amp; Bhoor Chauraha, and fertile agricultural land parcels.
            </p>
          </div>

          <Link
            href="/property-in-bulandshahr"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all self-start md:self-auto"
          >
            <span>Explore Bulandshahr Properties</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Local Highlights Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="flex items-center gap-3 p-3.5 bg-[#131317] rounded-xl border border-white/10 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100">Residential Plots</p>
              <p className="text-[11px] text-zinc-400">100 to 500+ Gaj</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-[#131317] rounded-xl border border-white/10 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
              <Building2 size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100">Houses &amp; Floors</p>
              <p className="text-[11px] text-zinc-400">Bhoor &amp; Civil Lines</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-[#131317] rounded-xl border border-white/10 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
              <Store size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100">Commercial Shops</p>
              <p className="text-[11px] text-zinc-400">Transport Nagar Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-[#131317] rounded-xl border border-white/10 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
              <Trees size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100">Agricultural Land</p>
              <p className="text-[11px] text-zinc-400">Fertile Acre Parcels</p>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bulandshahrProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B0B0E] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-amber-500/25">
          <div>
            <span className="text-[#F5C542] text-xs font-bold uppercase tracking-wider block mb-1">
              Looking for land or property in Bulandshahr?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold shine-gold-text">
              Speak Directly with Shree Maruti Nandan Properties
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1">
              Visit our office near Bhoor Chauraha or schedule an accompanied physical site visit.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918460209025"
              className="px-5 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
            >
              Call +91 8460209025
            </a>
            <Link
              href="/contact"
              className="px-5 py-3 border border-white/20 hover:border-amber-500/40 text-zinc-200 hover:text-[#F5C542] rounded-xl text-xs sm:text-sm font-bold transition-all"
            >
              Get Office Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
