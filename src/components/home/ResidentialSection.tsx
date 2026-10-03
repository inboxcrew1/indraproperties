import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import { Home, ArrowRight } from 'lucide-react'

export default function ResidentialSection() {
  const residentialProperties = properties
    .filter((p) => p.category === 'residential')
    .slice(0, 3)

  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 text-xs font-bold uppercase tracking-wider mb-3">
              <Home size={13} />
              <span>Living Spaces</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text tracking-tight">
              Residential Properties
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Explore independent houses, builder floors, flats, apartments and villas across Bulandshahr, Noida, Greater Noida and NCR.
            </p>
          </div>

          <Link
            href="/buy?category=residential"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all self-start md:self-auto"
          >
            <span>View All Residential</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {residentialProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
