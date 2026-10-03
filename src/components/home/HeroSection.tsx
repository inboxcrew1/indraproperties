'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Building2, Layers, Home, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const searchTabs = [
  { id: 'buy', label: 'Buy', icon: Home, target: '/buy' },
  { id: 'rent', label: 'Rent', icon: Building2, target: '/rent' },
  { id: 'plots', label: 'Plots & Land', icon: Layers, target: '/plots-land' },
  { id: 'commercial', label: 'Commercial', icon: Building2, target: '/commercial' },
]

const popularLocations = [
  'Bulandshahr',
  'Noida',
  'Greater Noida',
  'Delhi',
  'Gurugram',
]

const propertyTypesByTab: Record<string, { label: string; value: string }[]> = {
  buy: [
    { label: 'All Property Types', value: '' },
    { label: 'Residential Plots', value: 'plot' },
    { label: 'Flats & Apartments', value: 'flat' },
    { label: 'Houses & Villas', value: 'house' },
    { label: 'Farm Houses', value: 'farmhouse' },
    { label: 'Agricultural Land', value: 'agricultural' },
    { label: 'Commercial Properties', value: 'commercial' },
  ],
  rent: [
    { label: 'All Rentals', value: '' },
    { label: 'Flats & Apartments', value: 'flat' },
    { label: 'Independent Houses', value: 'house' },
    { label: 'Commercial Offices', value: 'office' },
    { label: 'Retail Shops', value: 'shop' },
    { label: 'Commercial Showrooms', value: 'showroom' },
    { label: 'Warehouses', value: 'warehouse' },
  ],
  plots: [
    { label: 'All Land & Plots', value: '' },
    { label: 'Residential Plots', value: 'plot' },
    { label: 'Agricultural Land', value: 'agricultural' },
    { label: 'Farm Land', value: 'farmland' },
    { label: 'Commercial Land', value: 'commercial_plot' },
    { label: 'Investment Land Parcels', value: 'investment_land' },
  ],
  commercial: [
    { label: 'All Commercial Spaces', value: '' },
    { label: 'Retail Shops', value: 'shop' },
    { label: 'Office Spaces', value: 'office' },
    { label: 'Showrooms', value: 'showroom' },
    { label: 'Warehouses / Godowns', value: 'warehouse' },
    { label: 'Commercial Buildings', value: 'commercial_building' },
  ],
}

export default function HeroSection() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'plots' | 'commercial'>('buy')
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [budget, setBudget] = useState('')
  const [area, setArea] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const activeConfig = searchTabs.find((t) => t.id === activeTab)
    const basePath = activeConfig ? activeConfig.target : '/properties'

    const params = new URLSearchParams()
    if (location) params.set('city', location)
    if (propertyType) params.set('type', propertyType)
    if (budget) params.set('budget', budget)
    if (area) params.set('area', area)

    const queryString = params.toString()
    router.push(queryString ? `${basePath}?${queryString}` : basePath)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0E]">
      {/* Background Image with Cinematic Architectural Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Shree Maruti Nandan Properties - Bulandshahr Real Estate"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered cinematic architectural dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-3xl">
          {/* Location & Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/30 text-white text-xs font-medium mb-6">
            <MapPin size={13} className="text-[#F5C542]" />
            <span className="font-semibold text-[#F5C542]">Bulandshahr, Uttar Pradesh</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-zinc-200">Near Bhoor Chauraha</span>
          </div>

          {/* Section 8: Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-5 drop-shadow-md">
            <span className="shine-gold-text">Find the Right Property</span> <br className="hidden sm:block" />
            <span className="text-white">With Confidence.</span>
          </h1>

          {/* Section 8: Supporting text */}
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-2xl font-light">
            Explore residential, commercial and agricultural properties with{' '}
            <strong className="font-semibold text-[#F5C542]">Shree Maruti Nandan Properties</strong>,{' '}
            your local real estate consultant in Bulandshahr.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black text-sm font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all"
            >
              <span>Explore Properties</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/post-property"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-xl border border-white/20 transition-colors"
            >
              <span>List Your Property</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-[#F5C542] text-sm font-medium transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Section 9: Hero Interactive Search Engine */}
        <div className="w-full max-w-4xl bg-[#121216]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-amber-500/20">
          {/* Tabs: Buy | Rent | Plots & Land | Commercial */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4 overflow-x-auto no-scrollbar">
            {searchTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any)
                    setPropertyType('')
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] text-black font-bold shadow-md shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-[#F5C542] hover:bg-white/5'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search Form Fields */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* 1. Location */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-[#F5C542] focus:bg-[#1C1C24] transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#18181F] text-zinc-200">All Locations</option>
                  <option value="Bulandshahr" className="bg-[#18181F] text-zinc-200">Bulandshahr (Primary)</option>
                  <option value="Noida" className="bg-[#18181F] text-zinc-200">Noida</option>
                  <option value="Greater Noida" className="bg-[#18181F] text-zinc-200">Greater Noida</option>
                  <option value="Delhi" className="bg-[#18181F] text-zinc-200">Delhi</option>
                  <option value="Gurugram" className="bg-[#18181F] text-zinc-200">Gurugram</option>
                </select>
              </div>
            </div>

            {/* 2. Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-[#F5C542] focus:bg-[#1C1C24] transition-all cursor-pointer"
              >
                {propertyTypesByTab[activeTab]?.map((item) => (
                  <option key={item.label} value={item.value} className="bg-[#18181F] text-zinc-200">
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Budget */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-[#F5C542] focus:bg-[#1C1C24] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#18181F] text-zinc-200">Any Budget</option>
                <option value="under-25l" className="bg-[#18181F] text-zinc-200">Under ₹25 Lakh</option>
                <option value="25l-50l" className="bg-[#18181F] text-zinc-200">₹25 Lakh - ₹50 Lakh</option>
                <option value="50l-1cr" className="bg-[#18181F] text-zinc-200">₹50 Lakh - ₹1 Crore</option>
                <option value="1cr-2cr" className="bg-[#18181F] text-zinc-200">₹1 Crore - ₹2 Crore</option>
                <option value="above-2cr" className="bg-[#18181F] text-zinc-200">Above ₹2 Crore</option>
              </select>
            </div>

            {/* 4. Area / Submit */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <Search size={16} />
                <span>Search Properties</span>
              </button>
            </div>
          </form>

          {/* Quick Location Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-3 mt-3 border-t border-white/10 text-xs">
            <span className="text-zinc-400 font-medium">Quick Explore:</span>
            {popularLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocation(loc)
                  const params = new URLSearchParams()
                  params.set('city', loc)
                  router.push(`/properties?${params.toString()}`)
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-[#F5C542] text-zinc-300 border border-white/10 transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
