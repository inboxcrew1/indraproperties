'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { Property } from '@/types/property'
import { formatPrice, formatArea } from '@/lib/utils/format'
import { PlusSquare, Eye, Edit, Trash2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function MyListingsPage() {
  const [myProperties, setMyProperties] = useState<Property[]>([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('smnp_custom_properties') || '[]')
      // Combine stored custom properties with first 2 demo properties belonging to user
      const defaults = properties.slice(0, 2)
      setMyProperties([...stored, ...defaults])
    } catch {
      setMyProperties(properties.slice(0, 2))
    }
  }, [])

  const handleDelete = (id: string) => {
    const updated = myProperties.filter(p => p.id !== id)
    setMyProperties(updated)
    try {
      const stored = JSON.parse(localStorage.getItem('smnp_custom_properties') || '[]')
      localStorage.setItem(
        'smnp_custom_properties',
        JSON.stringify(stored.filter((p: Property) => p.id !== id))
      )
    } catch (e) {
      console.error(e)
    }
  }

  const toggleStatus = (id: string) => {
    const updated = myProperties.map(p => {
      if (p.id === id) {
        const nextStatus = p.status === 'available' ? 'under_offer' : 'available'
        return { ...p, status: nextStatus }
      }
      return p
    })
    setMyProperties(updated)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
            My Listed Properties
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your active inventory, change visibility status, or publish new assets
          </p>
        </div>

        <Link
          href="/post-property"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald text-white rounded-xl text-xs font-bold hover:bg-emerald-dark transition-colors shadow-sm"
        >
          <PlusSquare size={16} />
          <span>Post New Property</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 font-semibold uppercase tracking-wider">
                <th className="p-4">Property</th>
                <th className="p-4">Price</th>
                <th className="p-4">Area</th>
                <th className="p-4">Status</th>
                <th className="p-4">Verification</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myProperties.map(p => (
                <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-11 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
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

                  <td className="p-4 font-bold text-charcoal font-display text-sm">
                    {formatPrice(p.price.amount)}
                  </td>

                  <td className="p-4 font-semibold text-emerald">
                    {formatArea(p.area.value, p.area.unit)}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => toggleStatus(p.id)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${
                        p.status === 'available'
                          ? 'bg-emerald/10 text-emerald hover:bg-emerald/20'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                      title="Click to toggle status"
                    >
                      {p.status === 'available' ? 'Available' : 'Under Offer'}
                    </button>
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald">
                      <CheckCircle2 size={12} />
                      {p.verificationStatus}
                    </span>
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/properties/${p.slug}`}
                        className="p-1.5 rounded-lg text-gray-500 hover:text-emerald hover:bg-gray-100"
                        title="View Public Listing"
                      >
                        <Eye size={15} />
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50"
                        title="Delete Listing"
                      >
                        <Trash2 size={15} />
                      </button>
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
