'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { LayoutGrid, List, Map, SlidersHorizontal, X } from 'lucide-react'
import { Property } from '@/types/property'
import PropertyCard from '@/components/property/PropertyCard'
import SortDropdown from './SortDropdown'
import EmptySearchState from './EmptySearchState'
import MapView from './MapView'
import FilterSidebar from './FilterSidebar'

interface PropertySearchResultsProps {
  initialProperties: Property[]
  title?: string
  subtitle?: string
  defaultCategory?: string
  defaultListingType?: string
}

export default function PropertySearchResults({
  initialProperties,
  title = 'Real Estate Marketplace',
  subtitle,
  defaultCategory,
  defaultListingType,
}: PropertySearchResultsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Filter properties client-side based on active searchParams
  const cityParam = searchParams.get('city')?.toLowerCase()
  const typeParam = searchParams.get('type')
  const listingTypeParam = defaultListingType || searchParams.get('listingType')
  const minPriceParam = searchParams.get('minPrice')
  const maxPriceParam = searchParams.get('maxPrice')
  const verifiedParam = searchParams.get('verified')
  const sortBy = searchParams.get('sortBy') || 'relevance'

  let filtered = initialProperties.filter(p => {
    if (cityParam && p.location.city.toLowerCase() !== cityParam) return false
    if (typeParam && p.subcategory !== typeParam) return false
    if (listingTypeParam && p.listingType !== listingTypeParam) return false
    if (defaultCategory && p.category !== defaultCategory) return false
    if (minPriceParam && p.price.amount < Number(minPriceParam)) return false
    if (maxPriceParam && p.price.amount > Number(maxPriceParam)) return false
    if (verifiedParam === 'true' && p.verificationStatus !== 'verified') return false
    return true
  })

  // Sort properties
  if (sortBy === 'price_asc') {
    filtered.sort((a, b) => a.price.amount - b.price.amount)
  } else if (sortBy === 'price_desc') {
    filtered.sort((a, b) => b.price.amount - a.price.amount)
  } else if (sortBy === 'area_asc') {
    filtered.sort((a, b) => (a.area?.value || 0) - (b.area?.value || 0))
  } else if (sortBy === 'area_desc') {
    filtered.sort((a, b) => (b.area?.value || 0) - (a.area?.value || 0))
  }

  // Active filter tags for chips
  const activeFilters: { key: string; label: string }[] = []
  if (cityParam) activeFilters.push({ key: 'city', label: `City: ${cityParam.toUpperCase()}` })
  if (typeParam) activeFilters.push({ key: 'type', label: `Type: ${typeParam.replace(/_/g, ' ')}` })
  if (listingTypeParam) activeFilters.push({ key: 'listingType', label: `For ${listingTypeParam}` })
  if (minPriceParam) activeFilters.push({ key: 'minPrice', label: `Min ₹${Number(minPriceParam) / 100000}L` })
  if (maxPriceParam) activeFilters.push({ key: 'maxPrice', label: `Max ₹${Number(maxPriceParam) / 100000}L` })
  if (verifiedParam === 'true') activeFilters.push({ key: 'verified', label: 'Verified Only' })

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)
    const q = params.toString()
    router.push(q ? `${pathname}?${q}` : pathname)
  }

  // Pagination slice
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner and Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {subtitle || `Showing ${filtered.length} verified and available properties`}
          </p>
        </div>

        {/* Top Controls: Mobile Filter Button, Sort Dropdown, View Mode Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-charcoal shadow-sm"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>

          <SortDropdown />

          <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white text-emerald shadow-sm' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white text-emerald shadow-sm' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode('map')}
              aria-label="Map view"
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'map' ? 'bg-white text-emerald shadow-sm' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              <Map size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs text-gray-400 font-medium">Applied:</span>
          {activeFilters.map(chip => (
            <span
              key={chip.key}
              className="inline-flex items-center gap-1 text-xs bg-emerald/10 text-emerald font-semibold px-2.5 py-1 rounded-full border border-emerald/20"
            >
              <span>{chip.label}</span>
              <button
                onClick={() => removeFilter(chip.key)}
                className="hover:text-emerald-dark"
                aria-label={`Remove filter ${chip.label}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button
            onClick={() => router.push(pathname)}
            className="text-xs text-gray-500 hover:text-red-500 underline ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Grid: Left Filter Sidebar + Right Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar (3 cols) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <FilterSidebar
            defaultCategory={defaultCategory}
            defaultListingType={defaultListingType}
          />
        </div>

        {/* Results Column (9 cols) */}
        <div className="lg:col-span-9">
          {viewMode === 'map' ? (
            <MapView properties={filtered} />
          ) : filtered.length === 0 ? (
            <EmptySearchState />
          ) : (
            <>
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {paginated.map(p => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    variant={viewMode === 'list' ? 'list' : 'default'}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-gray-100">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 disabled:opacity-40 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-xl text-xs font-semibold transition-colors ${
                        currentPage === i + 1
                          ? 'bg-emerald text-white'
                          : 'bg-white border border-gray-200 text-charcoal hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 disabled:opacity-40 hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl overflow-y-auto animate-fade-in z-10">
            <FilterSidebar
              isMobile
              onCloseMobile={() => setMobileFilterOpen(false)}
              defaultCategory={defaultCategory}
              defaultListingType={defaultListingType}
            />
          </div>
        </div>
      )}
    </div>
  )
}
