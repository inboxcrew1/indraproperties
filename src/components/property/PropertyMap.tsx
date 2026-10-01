'use client'

import { useState } from 'react'
import { MapPin, Navigation, Eye, Maximize2, ShieldAlert } from 'lucide-react'
import { PropertyLocation } from '@/types/property'

interface PropertyMapProps {
  location: PropertyLocation
  title: string
}

export default function PropertyMap({ location, title }: PropertyMapProps) {
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard')
  const lat = location.latitude || 28.5355
  const lng = location.longitude || 77.3910
  const isApproximate = location.displayType === 'approximate'

  // OpenStreetMap embed URL
  const bboxDelta = 0.015
  const bbox = `${lng - bboxDelta},${lat - bboxDelta},${lng + bboxDelta},${lat + bboxDelta}`
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-charcoal flex items-center gap-2">
            <span>Location &amp; Map</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center gap-1.5">
            <MapPin size={14} className="text-emerald flex-shrink-0" />
            <span>
              {location.locality}, {location.city}, {location.state}
            </span>
          </p>
        </div>

        {/* Location Privacy Badge */}
        <div className="flex items-center gap-2">
          {isApproximate ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-medium">
              <Eye size={12} />
              Approximate Locality
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/10 text-emerald border border-emerald/20 rounded-full text-xs font-medium">
              <MapPin size={12} />
              Verified Location
            </span>
          )}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-charcoal text-white hover:bg-emerald transition-colors rounded-full text-xs font-medium"
          >
            <Navigation size={12} />
            Directions
          </a>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-gray-200 bg-gray-100">
        <iframe
          title={`Map view for ${title}`}
          src={osmUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />

        {/* Legal OpenStreetMap notice */}
        <div className="absolute bottom-1 right-2 bg-white/90 backdrop-blur-sm text-[10px] text-gray-600 px-2 py-0.5 rounded shadow">
          &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="underline hover:text-emerald">OpenStreetMap</a> contributors
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>Coordinates: {lat.toFixed(4)}° N, {lng.toFixed(4)}° E</span>
        <span className="text-gray-500">
          {isApproximate
            ? 'Exact house number is shared upon scheduling a site visit.'
            : 'Exact verified property coordinates.'}
        </span>
      </div>
    </div>
  )
}
