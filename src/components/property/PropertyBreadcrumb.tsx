import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PropertyBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function PropertyBreadcrumb({ items }: PropertyBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-gray-500 py-3 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="flex items-center hover:text-emerald transition-colors">
        <Home size={13} className="mr-1 text-gray-400" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight size={12} className="mx-2 text-gray-300 flex-shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-emerald transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-xs">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
