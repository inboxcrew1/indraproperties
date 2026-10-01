import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function CommercialSection() {
  const commercial = properties.filter((p) => p.category === 'commercial').slice(0, 3)

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-charcoal bg-gray-100 px-3 py-1 rounded-full mb-3">
              <TrendingUp size={13} className="text-emerald" />
              <span>Commercial &amp; Retail</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Commercial Properties &amp; Shops
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl font-light">
              Explore high-visibility retail shops near Transport Nagar Bulandshahr, highway showrooms, office spaces, and commercial buildings.
            </p>
          </div>

          <Link
            href="/commercial"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
          >
            <span>Explore Commercial Properties</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {commercial.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
