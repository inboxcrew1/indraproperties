import { PropertyStatus } from '@/types/property'

interface PropertyStatusBadgeProps {
  status: PropertyStatus
  className?: string
}

const statusMap: Record<PropertyStatus, { label: string; bg: string; text: string }> = {
  available: { label: 'Available', bg: 'bg-emerald/10', text: 'text-emerald' },
  under_offer: { label: 'Under Offer', bg: 'bg-amber-100', text: 'text-amber-800' },
  sold: { label: 'Sold', bg: 'bg-gray-100', text: 'text-gray-600' },
  rented: { label: 'Rented', bg: 'bg-blue-100', text: 'text-blue-800' },
  inactive: { label: 'Inactive', bg: 'bg-gray-100', text: 'text-gray-500' },
  draft: { label: 'Draft', bg: 'bg-yellow-100', text: 'text-yellow-800' },
  pending_review: { label: 'Under Review', bg: 'bg-orange-100', text: 'text-orange-800' },
  rejected: { label: 'Rejected', bg: 'bg-red-100', text: 'text-red-700' },
}

export default function PropertyStatusBadge({ status, className = '' }: PropertyStatusBadgeProps) {
  const current = statusMap[status] || statusMap.available

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${current.bg} ${current.text} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-75" />
      {current.label}
    </span>
  )
}
