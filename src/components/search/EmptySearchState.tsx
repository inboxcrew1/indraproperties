'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SearchX, RotateCcw, MapPin, Layers, Building2 } from 'lucide-react'

interface EmptySearchStateProps {
  onClearFilters?: () => void
}

export default function EmptySearchState({ onClearFilters }: EmptySearchStateProps) {
  const router = useRouter()

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 text-center shadow-sm">
      <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto mb-4">
        <SearchX size={32} />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-2">
        No properties match your current filters
      </h3>

      <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
        Try broadening your budget parameters, selecting neighboring localities, or resetting the filters to view all active listings.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark transition-colors shadow-sm"
        >
          <RotateCcw size={14} />
          <span>Clear All Filters</span>
        </Link>
      </div>

      {/* Recommended Searches */}
      <div className="pt-8 border-t border-gray-100 max-w-lg mx-auto">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-3">
          Popular Active Micro-Markets
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <Link
            href="/plots-land?city=bulandshahr"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-emerald/10 hover:text-emerald text-gray-600 border border-gray-200 transition-colors"
          >
            <Layers size={12} />
            <span>Plots in Bulandshahr</span>
          </Link>
          <Link
            href="/buy?city=noida&type=flat"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-emerald/10 hover:text-emerald text-gray-600 border border-gray-200 transition-colors"
          >
            <Building2 size={12} />
            <span>Flats in Noida</span>
          </Link>
          <Link
            href="/commercial?city=gurugram"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-emerald/10 hover:text-emerald text-gray-600 border border-gray-200 transition-colors"
          >
            <MapPin size={12} />
            <span>Offices in Gurugram</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
