'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon, ShieldCheck, Star } from 'lucide-react'
import { PropertyMedia, PropertyStatus, VerificationStatus } from '@/types/property'

interface PropertyGalleryProps {
  media: PropertyMedia[]
  title: string
  status?: PropertyStatus
  verificationStatus?: VerificationStatus
  isFeatured?: boolean
  isPremium?: boolean
  listingType?: string
}

export default function PropertyGallery({
  media,
  title,
  verificationStatus,
  isFeatured,
  isPremium,
  listingType = 'sale',
}: PropertyGalleryProps) {
  const images = (media && media.length > 0)
    ? media.filter(m => m.type === 'image')
    : [{ id: 'fallback', url: '/images/placeholder-property.svg', type: 'image' as const, isCover: true, order: 0 }]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({})

  const activeImage = images[activeIndex]
  const currentUrl = imageErrorMap[activeIndex] ? '/images/placeholder-property.svg' : activeImage.url

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return
      if (e.key === 'Escape') setIsFullscreen(false)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen, handlePrev, handleNext])

  return (
    <div className="space-y-3">
      {/* Main Image Container */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-charcoal-800 shadow-md group">
        <img
          src={currentUrl}
          alt={`${title} - Photo ${activeIndex + 1}`}
          className="w-full h-full object-cover select-none transition-all duration-300"
          onError={() => setImageErrorMap(prev => ({ ...prev, [activeIndex]: true }))}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-charcoal text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
            For {listingType}
          </span>
          {isPremium && (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-charcoal/90 text-white text-xs font-semibold rounded-lg shadow-sm backdrop-blur-sm border border-white/10">
              <Star size={12} className="fill-gold text-gold" /> Premium
            </span>
          )}
          {isFeatured && !isPremium && (
            <span className="px-3 py-1 bg-gold text-charcoal text-xs font-semibold rounded-lg shadow-sm">
              Featured
            </span>
          )}
          {verificationStatus === 'verified' && (
            <span className="flex items-center gap-1 px-3 py-1 bg-emerald text-white text-xs font-semibold rounded-lg shadow-sm">
              <ShieldCheck size={14} /> Verified Listing
            </span>
          )}
        </div>

        {/* Fullscreen & Counter Action Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <button
            onClick={() => setIsFullscreen(true)}
            aria-label="View Fullscreen Gallery"
            className="p-2.5 rounded-xl bg-charcoal/70 backdrop-blur-md text-white hover:bg-charcoal/90 transition-colors shadow-sm"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Previous / Next Arrow Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-charcoal flex items-center justify-center shadow-lg transition-all transform hover:scale-105 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-charcoal flex items-center justify-center shadow-lg transition-all transform hover:scale-105 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Bottom Bar inside Image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <ImageIcon size={14} />
            <span>
              {activeIndex + 1} of {images.length} Photos
            </span>
          </div>
          {activeImage.caption && (
            <div className="hidden sm:block bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg max-w-md truncate">
              {activeImage.caption}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => {
            const isSelected = idx === activeIndex
            const thumbUrl = imageErrorMap[idx] ? '/images/placeholder-property.svg' : img.url
            return (
              <button
                key={img.id || idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 ${
                  isSelected ? 'border-emerald scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={thumbUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={() => setImageErrorMap(prev => ({ ...prev, [idx]: true }))}
                />
              </button>
            )
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="text-sm font-medium">
              {title} &bull; Photo {activeIndex + 1} of {images.length}
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Fullscreen"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Fullscreen Viewer */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={currentUrl}
              alt={`${title} fullscreen`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-charcoal flex items-center justify-center backdrop-blur-md transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-charcoal flex items-center justify-center backdrop-blur-md transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={img.id || idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-14 sm:w-16 aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${
                  idx === activeIndex ? 'border-emerald scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={imageErrorMap[idx] ? '/images/placeholder-property.svg' : img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
