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
        className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all duration-200 py-2.5 sm:py-3"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Official Transparent Brand Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group py-1" aria-label="Indra Properties & Enterprises Home">
              <img
                src="/images/logo.png"
                alt="Indra Properties & Enterprises - For Your Generation"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
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
                    className={`px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-lg text-sm font-bold transition-all duration-150 relative ${
                      isActive
                        ? 'text-emerald bg-emerald/10 font-extrabold'
                        : 'text-gray-800 hover:text-emerald hover:bg-gray-100 font-bold'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald rounded-full" />
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
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-300 bg-gray-50 text-gray-900 hover:border-emerald hover:text-emerald hover:bg-emerald/5 transition-all shadow-2xs"
                title="Call Indra Properties & Enterprises"
              >
                <Phone size={14} className="text-emerald" />
                <span>+91 8460209025</span>
              </a>

              {/* Saved */}
              <Link
                href="/saved"
                aria-label="Saved properties"
                className="p-2 rounded-lg text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-colors"
                title="View Shortlisted Properties"
              >
                <Heart size={20} />
              </Link>

              {/* Post Property CTA */}
              <Link
                href="/post-property"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-emerald hover:bg-emerald-dark text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Post Property</span>
              </Link>

              {/* Contact Us Secondary CTA */}
              <Link
                href="/contact"
                className="hidden xl:inline-flex items-center px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 border border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                Contact Us
              </Link>

              {/* Mobile Hamburger (visible on screens below lg) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-lg text-gray-900 border border-gray-200 hover:bg-gray-100 transition-colors lg:hidden"
              >
                <Menu size={24} />
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
          <div className="absolute right-0 top-0 bottom-0 w-[310px] bg-white shadow-2xl flex flex-col animate-slide-in-right">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
                aria-label="Indra Properties & Enterprises Home"
              >
                <img
                  src="/images/logo.png"
                  alt="Indra Properties & Enterprises - For Your Generation"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Direct Call / Contact Bar */}
            <div className="p-4 bg-gray-50 border-b border-gray-200 space-y-2">
              <a
                href="tel:+918460209025"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-gray-300 rounded-xl text-xs font-bold text-gray-900 shadow-2xs hover:border-emerald"
              >
                <Phone size={14} className="text-emerald" />
                <span>Call +91 8460209025</span>
              </a>
              <a
                href="https://wa.me/918460209025?text=Hello%20Indra%20Properties%20%26%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald/10 text-emerald-dark border border-emerald/20 rounded-xl text-xs font-bold hover:bg-emerald/20 transition-colors"
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
                        ? 'bg-emerald text-white font-extrabold shadow-sm'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="p-4 space-y-2.5 border-t border-gray-200 bg-gray-50">
              <Link
                href="/post-property"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald text-white rounded-xl text-sm font-bold hover:bg-emerald-dark shadow-sm transition-colors"
              >
                Post Property Free
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-900 hover:bg-white transition-colors"
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
