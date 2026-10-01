import Link from 'next/link'
import { KeyRound, ArrowRight, Building2, Store } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import { properties } from '@/lib/data/properties'

export default function RentalSection() {
  // Get rental properties or fallback to available
  const rentalProperties = properties
    .filter((p) => p.listingType === 'rent')
    .slice(0, 3)

  // If there are fewer rental listings in demo data, take relevant sample listings
  const displayProperties = rentalProperties.length >= 2 
    ? rentalProperties 
    : properties.slice(0, 3).map(p => ({ ...p, listingType: 'rent' as const, price: { ...p.price, monthlyRent: Math.round(p.price.amount * 0.003) } }))

  return (
    <section className="py-16 sm:py-24 bg-warm-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-3">
              <KeyRound size={13} />
              <span>Rental &amp; Leasing</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Find a Property to Rent
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl font-light">
              Assisting landlords and tenants with verified rental flats, independent houses, retail shops, corporate offices and commercial godowns.
            </p>
          </div>

          <Link
            href="/rent"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
          >
            <span>Explore All Rentals</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
