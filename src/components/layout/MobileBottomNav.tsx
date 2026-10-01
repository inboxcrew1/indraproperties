'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Heart, PlusSquare, User } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'Search', href: '/properties', Icon: Search },
  { label: 'Saved', href: '/saved', Icon: Heart },
  { label: 'Post', href: '/post-property', Icon: PlusSquare },
  { label: 'Profile', href: '/login', Icon: User },
]

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 lg:hidden safe-area-pb"
      aria-label="Mobile bottom navigation"
    >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map(({ label, href, Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 min-w-[56px] ${
                isActive ? 'text-emerald' : 'text-gray-400 hover:text-charcoal'
              }`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={22} className={isActive ? 'fill-emerald/10' : ''} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
