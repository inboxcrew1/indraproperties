'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, MapPin, BedDouble, Bath, Car, ShieldCheck, Star, Eye, Calendar, Sparkles } from 'lucide-react'
import { Property } from '@/types/property'
import { formatPrice, formatArea, formatDate } from '@/lib/utils/format'

interface PropertyCardProps {
  property: Property
  variant?: 'default' | 'large' | 'compact' | 'list'
  showSaveButton?: boolean
}

export default function PropertyCard({ property, variant = 'default', showSaveButton = true }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [imageError, setImageError] = useState(false)

  const coverImage = property.media?.find(m => m.isCover && m.type === 'image') || property.media?.[0]
  const imageUrl = imageError || !coverImage?.url
    ? '/images/placeholder-property.svg'
    : coverImage.url

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSaved(!isSaved)
  }

  const subcategoryDisplay = (property.subcategory || '').replace(/_/g, ' ')
  const isRent = property.listingType === 'rent'
  const displayPrice = isRent
    ? `${formatPrice(property.price?.monthlyRent || property.price?.amount || 0)}/month`
    : formatPrice(property.price?.amount || 0)

  if (variant === 'list') {
    return (
      <Link href={`/properties/${property.slug}`} className="group block">
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl border border-gray-100 hover:border-emerald/40 hover:shadow-card-hover transition-all duration-250 overflow-hidden">
          {/* Image */}
          <div className="w-full sm:w-64 h-52 sm:h-auto flex-shrink-0 relative overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              loading="lazy"
            />
            {/* Badges */}
            <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
              {property.isPremium && (
                <span className="flex items-center gap-1 px-2.5 py-1 bg-charcoal/90 text-white text-[11px] font-semibold rounded-md shadow-sm backdrop-blur-sm">
                  <Star size={10} className="fill-gold text-gold" /> Premium
                </span>
              )}
              {property.isFeatured && !property.isPremium && (
                <span className="px-2.5 py-1 bg-gold text-charcoal font-semibold text-[11px] rounded-md shadow-sm">
                  Featured
                </span>
              )}
              {property.isNew && (
                <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md shadow-sm">
                  New
                </span>
              )}
            </div>
            {/* Top Right Save */}
            {showSaveButton && (
              <button
                onClick={handleSave}
                aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm z-10"
              >
                <Heart size={16} className={isSaved ? 'fill-red-500 text-red-500' : ''} />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
                  {subcategoryDisplay}
                </span>
                {property.verificationStatus === 'verified' && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald bg-emerald/10 px-2 py-0.5 rounded-full font-medium">
                    <ShieldCheck size={12} /> Verified
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-charcoal text-lg group-hover:text-emerald transition-colors line-clamp-1 mb-1">
                {property.title}
              </h3>

              <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                <MapPin size={13} className="text-gray-400 flex-shrink-0" />
                <span className="line-clamp-1">{property.location?.locality}, {property.location?.city}</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-charcoal font-display tracking-tight">
                  {displayPrice}
                </span>
                {property.price?.isNegotiable && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Negotiable</span>
                )}
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 text-xs text-gray-600 pt-3 border-t border-gray-100">
              {property.bedrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <BedDouble size={14} className="text-gray-400" />
                  <strong>{property.bedrooms}</strong> Beds
                </span>
              )}
              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <Bath size={14} className="text-gray-400" />
                  <strong>{property.bathrooms}</strong> Baths
                </span>
              )}
              {property.parking !== undefined && property.parking > 0 && (
                <span className="flex items-center gap-1">
                  <Car size={14} className="text-gray-400" />
                  <strong>{property.parking}</strong> Parking
                </span>
              )}
              <span className="ml-auto font-medium text-charcoal bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                {property.area?.value ? formatArea(property.area.value, property.area.unit) : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/properties/${property.slug}`} className="group block h-full">
      <article className={`bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250 flex flex-col h-full ${
        variant === 'large' ? 'shadow-card' : ''
      }`}>
        {/* Image Container */}
        <div className={`relative overflow-hidden bg-gray-100 ${variant === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <img
            src={imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {property.isPremium && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-charcoal/90 text-white text-[11px] font-semibold rounded-md shadow-sm backdrop-blur-sm">
                <Star size={11} className="fill-gold text-gold" /> Premium
              </span>
            )}
            {property.isFeatured && !property.isPremium && (
              <span className="px-2.5 py-1 bg-gold text-charcoal text-[11px] font-semibold rounded-md shadow-sm">
                Featured
              </span>
            )}
            {property.isNew && (
              <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md shadow-sm">
                New
              </span>
            )}
            <span className="px-2 py-0.5 bg-white/95 text-charcoal text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
              For {property.listingType}
            </span>
          </div>

          {/* Save Button */}
          {showSaveButton && (
            <button
              onClick={handleSave}
              aria-label={isSaved ? 'Remove from saved' : 'Save property'}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white text-gray-500 hover:text-red-500 transition-all duration-200 shadow-sm z-10"
            >
              <Heart size={16} className={`transition-all duration-200 ${isSaved ? 'fill-red-500 text-red-500 scale-110' : ''}`} />
            </button>
          )}

          {/* Photos count */}
          {property.media && property.media.length > 1 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-[11px] font-medium">
              <Eye size={12} />
              <span>{property.media.length} Photos</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Category & Verification */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
                {subcategoryDisplay}
              </span>
              {property.verificationStatus === 'verified' && (
                <span className="flex items-center gap-1 text-[11px] text-emerald bg-emerald/10 px-2 py-0.5 rounded-full font-medium">
                  <ShieldCheck size={12} /> Verified
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-emerald transition-colors duration-200 mb-2">
              {property.title}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-gray-600 text-xs mb-3 font-medium">
              <MapPin size={13} className="text-emerald flex-shrink-0" />
              <span className="line-clamp-1">{property.location?.locality}, {property.location?.city}</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xl sm:text-2xl font-bold text-emerald-dark font-display tracking-tight">
                {displayPrice}
              </span>
              {property.price?.isNegotiable && (
                <span className="text-[11px] font-semibold text-emerald-dark bg-emerald/10 px-2 py-0.5 rounded-full border border-emerald/20">
                  Negotiable
                </span>
              )}
            </div>
          </div>

          {/* Details & Specs */}
          <div>
            <div className="flex items-center gap-3 text-xs text-gray-700 py-3 border-t border-gray-100 font-medium">
              {property.bedrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <BedDouble size={14} className="text-emerald" />
                  <strong>{property.bedrooms}</strong> Beds
                </span>
              )}
              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <Bath size={14} className="text-emerald" />
                  <strong>{property.bathrooms}</strong> Baths
                </span>
              )}
              {property.parking !== undefined && property.parking > 0 && (
                <span className="flex items-center gap-1">
                  <Car size={14} className="text-emerald" />
                  <strong>{property.parking}</strong> Park
                </span>
              )}
              <span className="ml-auto font-bold text-emerald-dark bg-emerald/10 px-2.5 py-1 rounded-lg border border-emerald/20 text-xs">
                {property.area?.value ? formatArea(property.area.value, property.area.unit) : 'N/A'}
              </span>
            </div>

            {/* Footer with advertiser and date */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
              <span className="truncate max-w-[140px] text-gray-700 font-semibold">
                {property.advertiser?.name || 'Owner'}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Calendar size={11} />
                {formatDate(property.postedAt || new Date().toISOString())}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
