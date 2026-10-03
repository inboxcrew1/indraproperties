'use client'

import { useState } from 'react'
import { X, Copy, Check, MessageSquare, Share2 } from 'lucide-react'

interface PropertyShareModalProps {
  title: string
  url: string
  onClose: () => void
}

export default function PropertyShareModal({ title, url, onClose }: PropertyShareModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(`Check out this property with Shree Maruti Nandan Properties: ${title}`)

  const shareChannels = [
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bg: 'bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20',
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bg: 'bg-black/5 text-charcoal hover:bg-black/10',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`,
      bg: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-gray-100 animate-fade-up p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center">
              <Share2 size={16} />
            </div>
            <h3 className="font-display font-semibold text-charcoal text-base">
              Share Property
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-charcoal hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-gray-500 mb-4 line-clamp-1">
          {title}
        </p>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {shareChannels.map(channel => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center py-2.5 rounded-xl text-xs font-semibold transition-colors ${channel.bg}`}
            >
              {channel.name}
            </a>
          ))}
        </div>

        {/* Copy link input */}
        <div className="relative flex items-center">
          <input
            type="text"
            readOnly
            value={url}
            className="w-full pl-3 pr-24 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-600 truncate focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute right-1.5 px-3 py-1.5 bg-emerald text-white rounded-lg text-xs font-semibold hover:bg-emerald-dark transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check size={12} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
