'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { Property } from '@/types/property'
import PropertyCard from '@/components/property/PropertyCard'
import { Heart, Search, Bell, Trash2, ArrowRight } from 'lucide-react'

export default function SavedPage() {
  const [activeTab, setActiveTab] = useState<'properties' | 'searches'>('properties')
  const [savedProperties, setSavedProperties] = useState<Property[]>([])

  useEffect(() => {
    try {
      const storedIds: string[] = JSON.parse(
        localStorage.getItem('smnp_saved') || localStorage.getItem('smnp_saved') || '[]'
      )
      const matched = properties.filter((p) => storedIds.includes(p.id))
      // If none saved yet, pre-populate with first 2 featured properties so user immediately sees how it looks!
      if (matched.length > 0) {
        setSavedProperties(matched)
      } else {
        setSavedProperties(properties.slice(0, 2))
      }
    } catch {
      setSavedProperties(properties.slice(0, 2))
    }
  }, [])

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2">
              <Heart size={13} className="fill-red-600" />
              <span>Personal Shortlist</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-charcoal">
              My Saved Properties &amp; Searches
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Review your favorite shortlisted homes, plots, and saved search filters
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm text-xs font-semibold">
            <button
              onClick={() => setActiveTab('properties')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'properties' ? 'bg-emerald text-white' : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              Saved Properties ({savedProperties.length})
            </button>
            <button
              onClick={() => setActiveTab('searches')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'searches' ? 'bg-emerald text-white' : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              Saved Searches (2)
            </button>
          </div>
        </div>

        {activeTab === 'properties' ? (
          savedProperties.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
              <Heart size={40} className="mx-auto text-gray-300 mb-3" />
              <h3 className="font-display text-lg font-bold text-charcoal">
                You haven&apos;t saved any properties yet
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">
                Click the heart icon on any property to save it to your private shortlist.
              </p>
              <Link
                href="/properties"
                className="px-6 py-2.5 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark"
              >
                Explore Marketplace
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {savedProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4 max-w-2xl">
            <h3 className="font-semibold text-charcoal text-base">
              Active Saved Search Alerts
            </h3>
            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-between">
              <div>
                <span className="font-semibold text-charcoal text-sm block">
                  Plots in Bulandshahr under ₹30 Lakh
                </span>
                <span className="text-xs text-gray-400 mt-0.5 block">
                  City: Bulandshahr &bull; Max Price: ₹30 Lakh &bull; Unit: Gaj
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-emerald font-semibold flex items-center gap-1">
                  <Bell size={13} /> Active
                </span>
                <Link
                  href="/plots-land?city=bulandshahr&maxPrice=3000000"
                  className="px-3 py-1.5 bg-white border border-gray-200 text-charcoal rounded-lg text-xs font-semibold hover:border-emerald"
                >
                  Run Search
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-between">
              <div>
                <span className="font-semibold text-charcoal text-sm block">
                  3 BHK Flats in Noida Sector 150
                </span>
                <span className="text-xs text-gray-400 mt-0.5 block">
                  City: Noida &bull; Category: Residential &bull; 3 BHK
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-emerald font-semibold flex items-center gap-1">
                  <Bell size={13} /> Active
                </span>
                <Link
                  href="/buy?city=noida&type=flat"
                  className="px-3 py-1.5 bg-white border border-gray-200 text-charcoal rounded-lg text-xs font-semibold hover:border-emerald"
                >
                  Run Search
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
