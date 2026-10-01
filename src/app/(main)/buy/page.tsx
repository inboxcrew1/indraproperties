import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Properties for Sale in India | Buy Flats, Houses, Plots | Indra Properties & Enterprises',
  description: 'Browse verified properties for sale. Buy residential plots, 2/3/4 BHK apartments, independent villas, and commercial real estate in NCR.',
}

export default function BuyPage() {
  const saleProperties = properties.filter(p => p.listingType === 'sale')

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-gray-500">Loading properties for sale...</div>}>
        <PropertySearchResults
          initialProperties={saleProperties}
          title="Properties for Sale"
          subtitle="Discover verified freehold plots, luxury apartments, and independent homes with clear legal titles."
          defaultListingType="sale"
        />
      </Suspense>
    </div>
  )
}
