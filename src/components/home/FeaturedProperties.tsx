import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function FeaturedProperties() {
  const featured = properties.filter(p => p.isFeatured).slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full mb-3">
              <Sparkles size={12} />
              <span>Handpicked Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text">
              Featured Properties
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Prime residential plots, luxury apartments, and independent villas vetted for legal clarity and superior construction.
            </p>
          </div>

          <Link
            href="/properties?featured=true"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5C542] hover:text-[#FFF0A8] transition-colors group"
          >
            <span>Explore All Featured ({featured.length})</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
