import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Plots & Land for Sale in India | Residential, Agricultural, Farm | Shree Maruti Nandan Properties',
  description: 'Search residential plots in Bulandshahr, agricultural farm land, and commercial plots in Greater Noida with measurements in Gaj, Acres, and Sq Ft.',
}

export default function PlotsLandPage() {
  const landProperties = properties.filter(p => p.category === 'land' || p.category === 'industrial')

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-gray-500">Loading land &amp; plots...</div>}>
        <PropertySearchResults
          initialProperties={landProperties}
          title="Plots &amp; Land Parcels"
          subtitle="Explore residential plots in Bulandshahr and NCR, fertile agricultural acres, and investment land with verified registry."
          defaultCategory="land"
        />
      </Suspense>
    </div>
  )
}
