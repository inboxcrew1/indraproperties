'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, X, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react'
import { Property } from '@/types/property'
import { formatPrice, formatArea } from '@/lib/utils/format'

interface MapViewProps {
  properties: Property[]
}

export default function MapView({ properties }: MapViewProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    properties.length > 0 ? properties[0] : null
  )

  const activeLat = selectedProperty?.location?.latitude || selectedProperty?.location?.lat || 28.5355
  const activeLng = selectedProperty?.location?.longitude || selectedProperty?.location?.lng || 77.3910

  const bboxDelta = 0.08
  const bbox = `${activeLng - bboxDelta},${activeLat - bboxDelta},${activeLng + bboxDelta},${activeLat + bboxDelta}`
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${activeLat},${activeLng}`

  return (
    <div className="relative w-full h-[650px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex flex-col md:flex-row">
      {/* Interactive Map Iframe */}
      <div className="relative flex-1 w-full h-full">
        <iframe
          title="Interactive Property Discovery Map"
          src={mapUrl}
          className="w-full h-full border-0"
          loading="lazy"
        />

        {/* Selected Property Floating Preview Card */}
        {selectedProperty && (
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-fade-up z-20">
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-2 py-0.5 rounded">
                {selectedProperty.subcategory.replace(/_/g, ' ')}
              </span>
              <button
                onClick={() => setSelectedProperty(null)}
                className="text-gray-400 hover:text-charcoal p-1"
              >
                <X size={14} />
              </button>
            </div>

            <h4 className="font-semibold text-charcoal text-sm line-clamp-1 mb-1">
              {selectedProperty.title}
            </h4>

            <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
              <MapPin size={11} className="text-emerald flex-shrink-0" />
              <span className="truncate">{selectedProperty.location.locality}, {selectedProperty.location.city}</span>
            </div>

            <div className="flex items-baseline justify-between pt-2 border-t border-gray-100">
              <span className="font-display font-bold text-base text-charcoal">
                {formatPrice(selectedProperty.price.amount)}
              </span>
              <Link
                href={`/properties/${selectedProperty.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald hover:underline"
              >
                <span>View Listing</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Property Pins Sidebar List */}
      <div className="w-full md:w-80 max-h-60 md:max-h-full overflow-y-auto bg-white border-t md:border-t-0 md:border-l border-gray-200 p-4 space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Map Locations ({properties.length})
          </span>
          <span className="text-[10px] text-gray-400">Click to center</span>
        </div>

        {properties.map(p => {
          const isSelected = selectedProperty?.id === p.id
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProperty(p)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-emerald/5 border-emerald shadow-sm'
                  : 'bg-gray-50/60 border-gray-100 hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start gap-1">
                <span className="text-xs font-semibold text-charcoal line-clamp-1">
                  {p.title}
                </span>
                <span className="text-xs font-bold text-emerald whitespace-nowrap">
                  {formatPrice(p.price.amount)}
                </span>
              </div>
              <div className="text-[11px] text-gray-500 flex items-center gap-1 mt-1 truncate">
                <MapPin size={11} className="text-gray-400 flex-shrink-0" />
                <span>{p.location.locality}, {p.location.city}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
