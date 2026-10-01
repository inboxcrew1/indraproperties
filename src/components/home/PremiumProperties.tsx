import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function PremiumProperties() {
  const premium = properties.filter(p => p.isPremium).slice(0, 4)

  return (
    <section className="py-16 sm:py-24 bg-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold/20">
              <Star size={12} className="fill-gold" />
              <span>The Signature Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Luxury Estates &amp; Prime Assets
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              High-value penthouses, private villas, corporate towers, and expansive farmhouses curated for discerning buyers and institutional investors.
            </p>
          </div>

          <Link
            href="/properties?premium=true"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            <span>View All Luxury Estates</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {premium.map(property => (
            <PropertyCard key={property.id} property={property} variant="large" />
          ))}
        </div>
      </div>
    </section>
  )
}
