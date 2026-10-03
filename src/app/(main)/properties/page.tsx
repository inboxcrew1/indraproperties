import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Search Properties in India | Shree Maruti Nandan Properties',
  description: 'Explore verified residential plots, apartments, villas, farm houses, agricultural land, and commercial properties across North India.',
}

export default function PropertiesSearchPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-gray-500">Loading properties...</div>}>
        <PropertySearchResults
          initialProperties={properties}
          title="All Properties in India"
          subtitle="Discover verified plots, apartments, independent houses, land parcels, and commercial spaces."
        />
      </Suspense>
    </div>
  )
}
