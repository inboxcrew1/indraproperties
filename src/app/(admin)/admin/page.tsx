'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { Property, VerificationStatus } from '@/types/property'
import { formatPrice } from '@/lib/utils/format'
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Eye,
  Layers,
  Users,
  Search,
} from 'lucide-react'

export default function AdminPage() {
  const [propertyList, setPropertyList] = useState<Property[]>(properties)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleStatusChange = (id: string, newVerification: VerificationStatus) => {
    setPropertyList(prev =>
      prev.map(p => {
        if (p.id === id) {
          return {
            ...p,
            verificationStatus: newVerification,
            status: newVerification === 'verified' ? 'available' : p.status,
          }
        }
        return p
      })
    )
  }

  const verifiedCount = propertyList.filter(p => p.verificationStatus === 'verified').length
  const underReviewCount = propertyList.filter(p => p.verificationStatus === 'under_review').length
  const unverifiedCount = propertyList.filter(p => p.verificationStatus === 'unverified').length

  const filtered = propertyList.filter(p => {
    if (filterStatus !== 'all' && p.verificationStatus !== filterStatus) return false
    if (searchTerm && !p.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
          Property Verification &amp; Moderation
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review legal titles, inspect advertiser credentials, and toggle official verification status
        </p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase">Verified Listings</span>
            <ShieldCheck size={18} className="text-emerald" />
          </div>
          <div className="text-3xl font-bold font-display text-emerald mt-2">
            {verifiedCount}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase">Under Review</span>
            <AlertTriangle size={18} className="text-amber-500" />
          </div>
          <div className="text-3xl font-bold font-display text-amber-600 mt-2">
            {underReviewCount}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase">Unverified / Raw</span>
            <XCircle size={18} className="text-gray-400" />
          </div>
          <div className="text-3xl font-bold font-display text-charcoal mt-2">
            {unverifiedCount}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by property title..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border rounded-xl text-xs focus:outline-none focus:border-emerald"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold w-full sm:w-auto overflow-x-auto">
          {['all', 'verified', 'under_review', 'unverified'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                filterStatus === status ? 'bg-charcoal text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {status.replace(/_/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Moderation Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 font-semibold uppercase tracking-wider">
                <th className="p-4">Property</th>
                <th className="p-4">Price</th>
                <th className="p-4">Advertiser</th>
                <th className="p-4">Current Status</th>
                <th className="p-4 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50/40 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={p.media?.[0]?.url || '/images/placeholder-property.svg'}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 max-w-xs">
                        <span className="font-semibold text-charcoal block truncate">
                          {p.title}
                        </span>
                        <span className="text-[11px] text-gray-400 block truncate">
                          {p.location.locality}, {p.location.city}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-bold text-charcoal">
                    {formatPrice(p.price.amount)}
                  </td>

                  <td className="p-4 text-gray-600">
                    <span className="block font-medium">{p.advertiser?.name || 'Owner'}</span>
                    <span className="text-[10px] text-gray-400 capitalize">{p.advertiser?.type}</span>
                  </td>

                  <td className="p-4">
                    {p.verificationStatus === 'verified' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald bg-emerald/10 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    ) : p.verificationStatus === 'under_review' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        <AlertTriangle size={12} /> Under Review
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        Unverified
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleStatusChange(p.id, 'verified')}
                        className="px-2.5 py-1 bg-emerald text-white rounded-lg text-[11px] font-semibold hover:bg-emerald-dark"
                      >
                        Approve / Verify
                      </button>
                      <button
                        onClick={() => handleStatusChange(p.id, 'under_review')}
                        className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-[11px] font-semibold hover:bg-amber-200"
                      >
                        Review
                      </button>
                      <button
                        onClick={() => handleStatusChange(p.id, 'unverified')}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-[11px] font-semibold hover:bg-gray-200"
                      >
                        Reject
                      </button>
                      <Link
                        href={`/properties/${p.slug}`}
                        target="_blank"
                        className="p-1 text-gray-400 hover:text-charcoal"
                        title="View Public Listing"
                      >
                        <Eye size={14} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
