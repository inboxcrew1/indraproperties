'use client'

import { useState } from 'react'
import { Heart, Share2, Scale, Check } from 'lucide-react'
import { Property } from '@/types/property'
import PropertyShareModal from '@/components/property/PropertyShareModal'

interface PropertyDetailActionsProps {
  property: Property
}

export default function PropertyDetailActions({ property }: PropertyDetailActionsProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [compared, setCompared] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved)
    try {
      const stored = JSON.parse(localStorage.getItem('smnp_saved') || localStorage.getItem('smnp_saved') || '[]')
      if (!isSaved) {
        if (!stored.includes(property.id)) stored.push(property.id)
      } else {
        const idx = stored.indexOf(property.id)
        if (idx !== -1) stored.splice(idx, 1)
      }
      localStorage.setItem('smnp_saved', JSON.stringify(stored))
    } catch (e) {
      console.error(e)
    }
  }

  const handleCompare = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('smnp_compare') || localStorage.getItem('smnp_compare') || '[]')
      if (!compared) {
        if (!stored.includes(property.id) && stored.length < 4) {
          stored.push(property.id)
          setCompared(true)
        }
      } else {
        const idx = stored.indexOf(property.id)
        if (idx !== -1) stored.splice(idx, 1)
        setCompared(false)
      }
      localStorage.setItem('smnp_compare', JSON.stringify(stored))
    } catch (e) {
      console.error(e)
    }
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://shreemarutinandanproperties.com/properties/${property.slug}`

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Save button */}
        <button
          onClick={handleSave}
          aria-label={isSaved ? 'Remove from saved' : 'Save Property'}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
            isSaved
              ? 'bg-red-50 border-red-200 text-red-600'
              : 'bg-white border-gray-200 text-charcoal hover:border-gray-300'
          }`}
        >
          <Heart size={14} className={isSaved ? 'fill-red-600' : ''} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>

        {/* Compare button */}
        <button
          onClick={handleCompare}
          aria-label="Compare Property"
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
            compared
              ? 'bg-emerald/10 border-emerald/20 text-emerald'
              : 'bg-white border-gray-200 text-charcoal hover:border-gray-300'
          }`}
        >
          {compared ? <Check size={14} /> : <Scale size={14} />}
          <span>{compared ? 'Comparing' : 'Compare'}</span>
        </button>

        {/* Share button */}
        <button
          onClick={() => setShowShare(true)}
          aria-label="Share Property"
          className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-xl text-xs font-semibold text-charcoal transition-all"
        >
          <Share2 size={14} />
          <span>Share</span>
        </button>
      </div>

      {showShare && (
        <PropertyShareModal
          title={property.title}
          url={currentUrl}
          onClose={() => setShowShare(false)}
        />
      )}
    </>
  )
}
