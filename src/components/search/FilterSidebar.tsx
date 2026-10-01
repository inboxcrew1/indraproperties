'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import {
  Filter,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building,
  Layers,
  Banknote,
  BedDouble,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from 'lucide-react'

const cities = [
  'All Cities',
  'Bulandshahr',
  'Noida',
  'Greater Noida',
  'Delhi',
  'Gurugram',
  'Ghaziabad',
  'Meerut',
]

const propertyTypes = [
  { label: 'All Types', value: '' },
  { label: 'Residential Plot', value: 'plot' },
  { label: 'Flat / Apartment', value: 'flat' },
  { label: 'Independent House', value: 'house' },
  { label: 'Luxury Villa', value: 'villa' },
  { label: 'Farm Land', value: 'farmland' },
  { label: 'Farm House', value: 'farmhouse' },
  { label: 'Commercial Shop', value: 'shop' },
  { label: 'Office Space', value: 'office' },
  { label: 'Showroom', value: 'showroom' },
  { label: 'Warehouse', value: 'warehouse' },
  { label: 'Commercial Building', value: 'commercial_building' },
]

const bedroomOptions = ['1', '2', '3', '4', '5+']

interface FilterSidebarProps {
  onCloseMobile?: () => void
  isMobile?: boolean
  defaultCategory?: string
  defaultListingType?: string
}

export default function FilterSidebar({
  onCloseMobile,
  isMobile = false,
  defaultCategory,
  defaultListingType,
}: FilterSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [city, setCity] = useState(searchParams.get('city') || '')
  const [type, setType] = useState(searchParams.get('type') || '')
  const [listingType, setListingType] = useState(defaultListingType || searchParams.get('listingType') || '')
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '')
  const [selectedBeds, setSelectedBeds] = useState<string[]>(
    searchParams.getAll('beds').length ? searchParams.getAll('beds') : []
  )
  const [areaUnit, setAreaUnit] = useState(searchParams.get('unit') || 'gaj')
  const [verifiedOnly, setVerifiedOnly] = useState(searchParams.get('verified') === 'true')
  const [cornerPlotOnly, setCornerPlotOnly] = useState(searchParams.get('corner') === 'true')

  const [sectionsOpen, setSectionsOpen] = useState({
    price: true,
    propertyType: true,
    location: true,
    bedrooms: true,
    landPlot: true,
  })

  const toggleSection = (sec: keyof typeof sectionsOpen) => {
    setSectionsOpen(prev => ({ ...prev, [sec]: !prev[sec] }))
  }

  const handleApply = () => {
    const params = new URLSearchParams()
    if (city && city !== 'All Cities') params.set('city', city.toLowerCase())
    if (type) params.set('type', type)
    if (listingType) params.set('listingType', listingType)
    if (minPrice) params.set('minPrice', minPrice)
    if (maxPrice) params.set('maxPrice', maxPrice)
    if (areaUnit) params.set('unit', areaUnit)
    if (verifiedOnly) params.set('verified', 'true')
    if (cornerPlotOnly) params.set('corner', 'true')
    selectedBeds.forEach(b => params.append('beds', b))

    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
    if (onCloseMobile) onCloseMobile()
  }

  const handleReset = () => {
    setCity('')
    setType('')
    setListingType(defaultListingType || '')
    setMinPrice('')
    setMaxPrice('')
    setSelectedBeds([])
    setAreaUnit('gaj')
    setVerifiedOnly(false)
    setCornerPlotOnly(false)
    router.push(pathname)
    if (onCloseMobile) onCloseMobile()
  }

  const toggleBed = (bed: string) => {
    setSelectedBeds(prev =>
      prev.includes(bed) ? prev.filter(b => b !== bed) : [...prev, bed]
    )
  }

  return (
    <aside className={`bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-6 ${isMobile ? 'border-0 p-4' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center">
            <SlidersHorizontal size={16} />
          </div>
          <h2 className="font-display font-semibold text-lg text-charcoal">
            Filters
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-emerald transition-colors"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
          {isMobile && onCloseMobile && (
            <button onClick={onCloseMobile} className="p-1.5 text-gray-400 hover:text-charcoal">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Listing Type Toggle (Buy / Rent) */}
      {!defaultListingType && (
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Transaction Mode
          </label>
          <div className="grid grid-cols-2 gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <button
              type="button"
              onClick={() => setListingType(listingType === 'sale' ? '' : 'sale')}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                listingType === 'sale' ? 'bg-white text-emerald shadow-sm font-bold' : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              For Sale
            </button>
            <button
              type="button"
              onClick={() => setListingType(listingType === 'rent' ? '' : 'rent')}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                listingType === 'rent' ? 'bg-white text-emerald shadow-sm font-bold' : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>
      )}

      {/* Location / City */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection('location')}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
        >
          <span>City / Region</span>
          {sectionsOpen.location ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {sectionsOpen.location && (
          <select
            value={city}
            onChange={e => setCity(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-charcoal focus:bg-white focus:border-emerald focus:outline-none"
          >
            {cities.map(c => (
              <option key={c} value={c === 'All Cities' ? '' : c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Property Type */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection('propertyType')}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
        >
          <span>Property Type</span>
          {sectionsOpen.propertyType ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {sectionsOpen.propertyType && (
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {propertyTypes.map(t => {
              const isSelected = type === t.value
              return (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setType(isSelected ? '' : t.value)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-left transition-colors ${
                    isSelected
                      ? 'bg-emerald/10 text-emerald font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{t.label}</span>
                  {isSelected && <Check size={14} />}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
        >
          <span>Budget Range</span>
          {sectionsOpen.price ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {sectionsOpen.price && (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[10px] text-gray-400 block mb-1">Min Price</span>
              <select
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                className="w-full px-2.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:bg-white focus:border-emerald focus:outline-none"
              >
                <option value="">Any Min</option>
                <option value="1000000">₹10 Lakh</option>
                <option value="2500000">₹25 Lakh</option>
                <option value="5000000">₹50 Lakh</option>
                <option value="10000000">₹1 Crore</option>
                <option value="20000000">₹2 Crore</option>
              </select>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 block mb-1">Max Price</span>
              <select
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                className="w-full px-2.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:bg-white focus:border-emerald focus:outline-none"
              >
                <option value="">Any Max</option>
                <option value="2500000">₹25 Lakh</option>
                <option value="5000000">₹50 Lakh</option>
                <option value="10000000">₹1 Crore</option>
                <option value="25000000">₹2.5 Crore</option>
                <option value="50000000">₹5 Crore</option>
                <option value="100000000">₹10 Crore</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Bedrooms selector (if residential/apartments) */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection('bedrooms')}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
        >
          <span>Bedrooms (BHK)</span>
          {sectionsOpen.bedrooms ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {sectionsOpen.bedrooms && (
          <div className="flex flex-wrap gap-1.5">
            {bedroomOptions.map(bed => {
              const active = selectedBeds.includes(bed)
              return (
                <button
                  key={bed}
                  type="button"
                  onClick={() => toggleBed(bed)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    active
                      ? 'bg-emerald text-white border-emerald shadow-sm'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {bed} BHK
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Area Unit Selector */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Area Measurement Unit
        </label>
        <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
          {['gaj', 'sqft', 'acre'].map(u => (
            <button
              key={u}
              type="button"
              onClick={() => setAreaUnit(u)}
              className={`py-1.5 rounded-lg font-medium uppercase border transition-colors ${
                areaUnit === u
                  ? 'bg-charcoal text-white border-charcoal font-semibold'
                  : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {u === 'gaj' ? 'Gaj' : u === 'sqft' ? 'Sq Ft' : 'Acre'}
            </button>
          ))}
        </div>
      </div>

      {/* Trust & Special Toggles */}
      <div className="space-y-3 pt-2 border-t border-gray-100">
        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-charcoal">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={e => setVerifiedOnly(e.target.checked)}
            className="w-4 h-4 rounded text-emerald focus:ring-emerald accent-emerald cursor-pointer"
          />
          <span className="flex items-center gap-1">
            <ShieldCheck size={14} className="text-emerald" />
            Verified Listings Only
          </span>
        </label>

        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-charcoal">
          <input
            type="checkbox"
            checked={cornerPlotOnly}
            onChange={e => setCornerPlotOnly(e.target.checked)}
            className="w-4 h-4 rounded text-emerald focus:ring-emerald accent-emerald cursor-pointer"
          />
          <span>Corner Plot / 2-Side Open</span>
        </label>
      </div>

      {/* Apply Filters Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleApply}
          className="w-full py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  )
}
