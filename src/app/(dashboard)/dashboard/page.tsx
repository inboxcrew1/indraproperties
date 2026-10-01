'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Layers,
  Eye,
  MessageSquare,
  Calendar,
  PlusSquare,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Clock,
} from 'lucide-react'
import { properties } from '@/lib/data/properties'
import { formatPrice } from '@/lib/utils/format'

export default function DashboardPage() {
  const [customListingsCount, setCustomListingsCount] = useState(2)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('indra_custom_properties') || '[]')
      setCustomListingsCount(2 + stored.length)
    } catch {
      setCustomListingsCount(2)
    }
  }, [])

  const stats = [
    { label: 'Active Listings', value: customListingsCount.toString(), icon: Layers, color: 'text-emerald bg-emerald/10' },
    { label: 'Total Buyer Views', value: '1,428', icon: Eye, color: 'text-blue-600 bg-blue-50' },
    { label: 'Inquiries Received', value: '18', icon: MessageSquare, color: 'text-purple-600 bg-purple-50' },
    { label: 'Visits Scheduled', value: '4', icon: Calendar, color: 'text-gold bg-gold/10' },
  ]

  const recentEnquiries = [
    {
      id: 'enq-1',
      name: 'Amit Singhal',
      phone: '+91 98112 34567',
      property: '250 Gaj Residential Plot in Sector 65 Bulandshahr',
      time: '2 hours ago',
      message: 'Looking for immediate registry and loan support. Can we arrange a site visit this Saturday?',
    },
    {
      id: 'enq-2',
      name: 'Pooja Aggarwal',
      phone: '+91 99201 88776',
      property: 'Luxury 3 BHK Apartment in Sector 150 Noida',
      time: 'Yesterday',
      message: 'Interested in the higher floor park-facing unit. Please share maintenance details.',
    },
    {
      id: 'enq-3',
      name: 'Dr. K. S. Tyagi',
      phone: '+91 94120 44551',
      property: 'Farm Land 5 Acres in Bulandshahr',
      time: '3 days ago',
      message: 'Is the borewell water connection functional? Would like to visit the village boundary.',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track performance, respond to leads, and manage your property listings
          </p>
        </div>

        <Link
          href="/post-property"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
        >
          <PlusSquare size={16} />
          <span>Post New Property</span>
        </Link>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => {
          const Icon = s.icon
          return (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {s.label}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.color}`}>
                  <Icon size={16} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-charcoal font-display">
                {s.value}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald mt-2 font-medium">
                <TrendingUp size={12} />
                <span>+12% traffic this week</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Inquiries List */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-display text-lg font-bold text-charcoal">
              Recent Buyer Leads &amp; Inquiries
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Direct inquiries submitted for your active properties
            </p>
          </div>
          <Link
            href="/enquiries"
            className="text-xs font-semibold text-emerald hover:text-emerald-dark"
          >
            View All Enquiries &rarr;
          </Link>
        </div>

        <div className="divide-y divide-gray-100">
          {recentEnquiries.map(enq => (
            <div key={enq.id} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-charcoal">{enq.name}</span>
                  <span className="text-xs text-gray-400">&bull; {enq.phone}</span>
                  <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock size={10} /> {enq.time}
                  </span>
                </div>
                <div className="text-xs font-semibold text-emerald mb-1">
                  Property: {enq.property}
                </div>
                <p className="text-xs text-gray-600 line-clamp-1 italic">
                  &ldquo;{enq.message}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`tel:${enq.phone.replace(/[^0-9]/g, '')}`}
                  className="px-3.5 py-1.5 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark"
                >
                  Call Buyer
                </a>
                <a
                  href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 bg-gray-100 text-charcoal rounded-xl text-xs font-semibold hover:bg-gray-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
