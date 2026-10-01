'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { ArrowUpDown } from 'lucide-react'

const sortOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Area: Low to High', value: 'area_asc' },
  { label: 'Area: High to Low', value: 'area_desc' },
  { label: 'Newest First', value: 'newest' },
]

export default function SortDropdown() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentSort = searchParams.get('sortBy') || 'relevance'

  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newSort === 'relevance') {
      params.delete('sortBy')
    } else {
      params.set('sortBy', newSort)
    }
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-400 hidden sm:inline flex items-center gap-1 font-medium">
        <ArrowUpDown size={13} />
        Sort By:
      </span>
      <select
        value={currentSort}
        onChange={e => handleSortChange(e.target.value)}
        className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-charcoal focus:outline-none focus:border-emerald cursor-pointer shadow-sm"
      >
        {sortOptions.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
