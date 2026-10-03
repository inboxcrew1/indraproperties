'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu, X, Phone, MessageSquare } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Plots & Land', href: '/plots-land' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0E]/95 backdrop-blur-md shadow-xl border-b border-amber-500/15 transition-all duration-200 py-1 sm:py-1.5"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14">
            {/* Official Brand Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="Shree Maruti Nandan Properties Home">
              <img
                src="/images/shree-maruti-nandan-properties-logo.png?v=2"
                alt="Shree Maruti Nandan Properties"
                className="h-9 sm:h-10 md:h-[42px] w-auto max-h-12 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation (visible from lg: 1024px and up) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-lg text-sm transition-all duration-150 relative ${
                      isActive
                        ? 'text-[#F5C542] bg-[#F5C542]/12 font-extrabold shadow-[0_0_12px_rgba(245,197,66,0.15)]'
                        : 'text-gray-300 hover:text-[#F5C542] hover:bg-white/5 font-semibold'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F5C542] rounded-full shadow-[0_0_8px_#F5C542]" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Call direct agency number */}
              <a
                href="tel:+918460209025"
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border border-amber-500/30 bg-[#16161B] text-[#F5C542] hover:border-[#F5C542] hover:bg-amber-500/10 transition-all shadow-xs"
                title="Call Shree Maruti Nandan Properties"
              >
                <Phone size={14} className="text-[#F5C542]" />
                <span>+91 8460209025</span>
              </a>

              {/* Saved */}
              <Link
                href="/saved"
                aria-label="Saved properties"
                className="p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-white/5 transition-colors"
                title="View Shortlisted Properties"
              >
                <Heart size={20} />
              </Link>

              {/* Post Property CTA */}
              <Link
                href="/post-property"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black text-xs sm:text-sm font-extrabold rounded-lg shadow-[0_0_15px_rgba(245,197,66,0.3)] hover:shadow-[0_0_25px_rgba(245,197,66,0.5)] transition-all duration-200"
              >
                <span>Post Property</span>
              </Link>

              {/* Contact Us Secondary CTA */}
              <Link
                href="/contact"
                className="hidden xl:inline-flex items-center px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 border border-white/20 text-gray-200 hover:border-[#F5C542] hover:text-[#F5C542] hover:bg-white/5"
              >
                Contact Us
              </Link>

              {/* Mobile Hamburger (visible on screens below lg) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-lg text-[#F5C542] border border-white/10 hover:bg-white/5 transition-colors lg:hidden"
              >
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[310px] bg-[#0E0E12] border-l border-amber-500/20 shadow-2xl flex flex-col animate-slide-in-right">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
                aria-label="Shree Maruti Nandan Properties Home"
              >
                <img
                  src="/images/shree-maruti-nandan-properties-logo.png?v=2"
                  alt="Shree Maruti Nandan Properties"
                  className="h-8 sm:h-9 w-auto max-h-9 object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-white/10 text-[#F5C542] transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Direct Call / Contact Bar */}
            <div className="p-4 bg-[#131317] border-b border-white/10 space-y-2">
              <a
                href="tel:+918460209025"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#18181D] border border-amber-500/30 rounded-xl text-xs font-bold text-[#F5C542] shadow-xs hover:border-[#F5C542]"
              >
                <Phone size={14} className="text-[#F5C542]" />
                <span>Call +91 8460209025</span>
              </a>
              <a
                href="https://wa.me/918460209025?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20would%20like%20to%20enquire%20about%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500/15 text-[#F5C542] border border-amber-500/30 rounded-xl text-xs font-bold hover:bg-amber-500/25 transition-colors"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black font-extrabold shadow-md'
                        : 'text-gray-200 hover:text-[#F5C542] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="p-4 space-y-2.5 border-t border-white/10 bg-[#131317]">
              <Link
                href="/post-property"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black rounded-xl text-sm font-extrabold shadow-md transition-all"
              >
                Post Property Free
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2.5 border border-white/20 rounded-xl text-sm font-bold text-white hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
