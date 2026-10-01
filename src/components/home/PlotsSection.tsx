import Link from 'next/link'
import { ArrowRight, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function PlotsSection() {
  const plots = properties.filter((p) => p.category === 'land').slice(0, 3)

  return (
    <section className="py-16 sm:py-24 bg-warm-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-3">
              <Layers size={13} />
              <span>Plots &amp; Land</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Residential Plots &amp; Agricultural Land
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl font-light">
              Carefully vetted residential plots, fertile farm land, and commercial land parcels in Bulandshahr, Greater Noida, and transit corridors.
            </p>
          </div>

          <Link
            href="/plots-land"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
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
