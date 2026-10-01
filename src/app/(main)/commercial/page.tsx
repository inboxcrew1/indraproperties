import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Commercial Properties for Sale & Rent | Offices, Shops, Warehouses | Indra Properties & Enterprises',
  description: 'Discover commercial office spaces, retail shops, showrooms, warehouses, and commercial buildings in Gurugram, Delhi, and Noida.',
}

export default function CommercialPage() {
  const commercialProperties = properties.filter(p => p.category === 'commercial')

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-gray-500">Loading commercial properties...</div>}>
        <PropertySearchResults
          initialProperties={commercialProperties}
          title="Commercial Real Estate"
          subtitle="Explore high-footfall retail shops, Grade-A corporate towers, showrooms, and logistics warehouses."
          defaultCategory="commercial"
        />
      </Suspense>
    </div>
  )
}
