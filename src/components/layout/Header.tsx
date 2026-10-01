'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Heart, Menu, X, Building2, Phone, MessageSquare } from 'lucide-react'

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100 py-2.5'
            : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-10 h-10 rounded-xl bg-emerald flex items-center justify-center shadow-md group-hover:bg-emerald-dark transition-all duration-200">
                <Building2 size={22} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-base sm:text-lg font-bold tracking-tight leading-none uppercase ${
                    isScrolled || !isHome ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  Indra Properties
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-emerald-light">
                  &amp; Enterprises
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-emerald font-semibold'
                        : isScrolled || !isHome
                        ? 'text-charcoal-600 hover:text-emerald hover:bg-emerald/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
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
                className={`hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isScrolled || !isHome
                    ? 'border-gray-200 text-charcoal hover:border-emerald hover:text-emerald'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
                title="Call Indra Properties & Enterprises"
              >
                <Phone size={14} className="text-emerald-light" />
                <span>+91 8460209025</span>
              </a>

              {/* Saved */}
              <Link
                href="/saved"
                aria-label="Saved properties"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isScrolled || !isHome
                    ? 'text-charcoal-600 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Heart size={18} />
              </Link>

              {/* Post Property CTA */}
              <Link
                href="/post-property"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-emerald hover:bg-emerald-dark text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Post Property</span>
              </Link>

              {/* Contact Us Secondary CTA */}
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isScrolled || !isHome
                    ? 'border-gray-200 text-charcoal hover:bg-gray-50'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                Contact Us
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className={`p-2 rounded-lg transition-all duration-200 xl:hidden ${
                  isScrolled || !isHome
                    ? 'text-charcoal hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[310px] bg-white shadow-2xl flex flex-col animate-slide-in-right">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center">
                  <Building2 size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal uppercase leading-none">
                    Indra Properties
                  </div>
                  <div className="text-[10px] font-semibold text-emerald tracking-wider uppercase">
                    &amp; Enterprises
                  </div>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-1.5 rounded-lg hover:bg-gray-100 text-charcoal-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Direct Call / Contact Bar */}
            <div className="p-4 bg-gray-50 border-b border-gray-100 space-y-2">
              <a
                href="tel:+918460209025"
                className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-charcoal"
              >
                <Phone size={14} className="text-emerald" />
                <span>Call +91 8460209025</span>
              </a>
              <a
                href="https://wa.me/918460209025?text=Hello%20Indra%20Properties%20%26%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-emerald/10 text-emerald rounded-lg text-xs font-semibold"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald/10 text-emerald font-semibold'
                        : 'text-charcoal hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="p-4 space-y-2.5 border-t border-gray-100 bg-gray-50">
              <Link
                href="/post-property"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald text-white rounded-lg text-sm font-semibold hover:bg-emerald-dark transition-colors"
              >
                Post Property
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-charcoal hover:bg-white transition-colors"
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
