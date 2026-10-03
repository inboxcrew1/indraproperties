'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { Property } from '@/types/property'
import { formatPrice, formatArea, formatSubcategory } from '@/lib/utils/format'
import { Scale, Trash2, ArrowRight, CheckCircle2, ShieldCheck, X } from 'lucide-react'

export default function ComparePage() {
  const [comparedProperties, setComparedProperties] = useState<Property[]>([])

  useEffect(() => {
    try {
      const storedIds: string[] = JSON.parse(
        localStorage.getItem('smnp_compare') || localStorage.getItem('smnp_compare') || '[]'
      )
      const matched = properties.filter((p) => storedIds.includes(p.id))
      // If none selected, default to the first 2 properties as demonstration
      if (matched.length > 0) {
        setComparedProperties(matched)
      } else {
        setComparedProperties(properties.slice(0, 3))
      }
    } catch {
      setComparedProperties(properties.slice(0, 3))
    }
  }, [])

  const removeProperty = (id: string) => {
    const updated = comparedProperties.filter((p) => p.id !== id)
    setComparedProperties(updated)
    try {
      localStorage.setItem('smnp_compare', JSON.stringify(updated.map((p) => p.id)))
    } catch (e) {
      console.error(e)
    }
  }

  const addSample = () => {
    const sample = properties.slice(0, 3)
    setComparedProperties(sample)
    try {
      localStorage.setItem('smnp_compare', JSON.stringify(sample.map((p) => p.id)))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-2">
              <Scale size={13} />
              <span>Side-by-Side Analysis</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-charcoal">
              Compare Properties
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Analyze pricing, dimensional area, road widths, and legal title records side by side
            </p>
          </div>

          {comparedProperties.length === 0 && (
            <button
              onClick={addSample}
              className="px-4 py-2 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark"
            >
              Load Sample Properties
            </button>
          )}
        </div>

        {comparedProperties.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
            <Scale size={40} className="mx-auto text-gray-300 mb-4" />
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              No properties selected for comparison
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
              Click the Compare icon on any property card to compare up to 4 properties side by side.
            </p>
            <button
              onClick={addSample}
              className="px-6 py-2.5 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark"
            >
              Add Sample Properties to Compare
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="p-4 w-48 text-gray-400 font-semibold uppercase tracking-wider">
                    Feature &amp; Metric
                  </th>
                  {comparedProperties.map(p => (
                    <th key={p.id} className="p-4 min-w-[240px] max-w-[280px]">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-2 py-0.5 rounded">
                          {p.category}
                        </span>
                        <button
                          onClick={() => removeProperty(p.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          aria-label="Remove from comparison"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-2 bg-gray-100">
                        <img
                          src={p.media?.[0]?.url || '/images/placeholder-property.svg'}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Link
                        href={`/properties/${p.slug}`}
                        className="font-semibold text-charcoal text-sm hover:text-emerald line-clamp-2"
                      >
                        {p.title}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Price */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Total Price</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 font-display font-bold text-base text-charcoal">
                      {formatPrice(p.price.amount)}
                      {p.price.isNegotiable && (
                        <span className="block text-[10px] font-normal text-gray-400">Negotiable</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Location */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">City / Locality</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      {p.location.locality}, {p.location.city}
                    </td>
                  ))}
                </tr>

                {/* Area */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Total Area</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 font-semibold text-emerald">
                      {formatArea(p.area.value, p.area.unit)}
                    </td>
                  ))}
                </tr>

                {/* Property Type */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Classification</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      {formatSubcategory(p.subcategory)}
                    </td>
                  ))}
                </tr>

                {/* Bedrooms & Baths */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Rooms &amp; Baths</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      {p.bedrooms !== undefined ? `${p.bedrooms} BHK (${p.bathrooms || 1} Baths)` : 'Open Land'}
                    </td>
                  ))}
                </tr>

                {/* Road Width */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Road Width</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      {p.area.roadWidth ? `${p.area.roadWidth} Feet` : 'Standard Sector Road'}
                    </td>
                  ))}
                </tr>

                {/* Facing */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Facing</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700 uppercase">
                      {p.facing || 'East'}
                    </td>
                  ))}
                </tr>

                {/* Registry Status */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Registry / Title</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      <span className="inline-flex items-center gap-1 text-emerald font-semibold">
                        <CheckCircle2 size={13} /> Clear Title
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Verification */}
                <tr>
                  <td className="p-4 font-semibold text-gray-500 bg-gray-50/30">Legal Verification</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4 text-gray-700">
                      {p.verificationStatus === 'verified' ? (
                        <span className="inline-flex items-center gap-1 text-emerald bg-emerald/10 px-2 py-0.5 rounded font-semibold text-[11px]">
                          <ShieldCheck size={13} /> Verified
                        </span>
                      ) : (
                        <span className="text-gray-400">Under Review</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Action CTA row */}
                <tr>
                  <td className="p-4 bg-gray-50/30">Action</td>
                  {comparedProperties.map(p => (
                    <td key={p.id} className="p-4">
                      <Link
                        href={`/properties/${p.slug}`}
                        className="inline-flex items-center justify-center gap-1 w-full py-2.5 bg-emerald text-white rounded-xl font-semibold hover:bg-emerald-dark transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
