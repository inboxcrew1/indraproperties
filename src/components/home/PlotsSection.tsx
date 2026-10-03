import Link from 'next/link'
import { ArrowRight, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function PlotsSection() {
  const plots = properties.filter((p) => p.category === 'land').slice(0, 3)

  return (
    <section className="py-16 sm:py-24 bg-[#101014] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full mb-3">
              <Layers size={13} />
              <span>Plots &amp; Land</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text">
              Residential Plots &amp; Agricultural Land
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-xl font-light">
              Carefully vetted residential plots, fertile farm land, and commercial land parcels in Bulandshahr, Greater Noida, and transit corridors.
            </p>
          </div>

          <Link
            href="/plots-land"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5C542] hover:text-[#FFF0A8] transition-colors"
          >
            <span>Explore All Plots &amp; Land</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Plots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plots.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
