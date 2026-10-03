import Link from 'next/link'
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  properties: [
    { label: 'Properties in Bulandshahr', href: '/property-in-bulandshahr' },
    { label: 'Plots & Land for Sale', href: '/plots-land' },
    { label: 'Flats & Apartments', href: '/buy?type=flat' },
    { label: 'Houses & Villas', href: '/buy?type=house' },
    { label: 'Commercial Properties', href: '/commercial' },
    { label: 'Rental Properties', href: '/rent' },
  ],
  services: [
    { label: 'Property Buying Assistance', href: '/services#buying' },
    { label: 'Property Selling Service', href: '/services#selling' },
    { label: 'Plots & Land Guidance', href: '/services#land' },
    { label: 'Commercial Consultancy', href: '/services#commercial' },
    { label: 'Rental & Leasing Help', href: '/services#rental' },
    { label: 'Personal Property Consultation', href: '/contact' },
  ],
  locations: [
    { label: 'Bulandshahr (Primary Market)', href: '/property-in-bulandshahr' },
    { label: 'Bhoor Chauraha / Transport Nagar', href: '/property-in-bulandshahr' },
    { label: 'Noida', href: '/property-in/noida' },
    { label: 'Greater Noida', href: '/property-in/greater-noida' },
    { label: 'Delhi NCR', href: '/property-in/delhi' },
    { label: 'Gurugram', href: '/property-in/gurugram' },
  ],
  company: [
    { label: 'About Shree Maruti Nandan Properties', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Agency Profile', href: '/about#agency' },
    { label: 'List Your Property', href: '/post-property' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Safety Guidelines', href: '/safety' },
    { label: 'Listing Guidelines', href: '/listing-guidelines' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#060608] text-white border-t border-white/10" role="contentinfo">
      {/* Top Banner / Agency Bar */}
      <div className="border-b border-white/10 bg-[#0A0A0D]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-[#F5C542] text-xs font-bold uppercase tracking-widest block mb-1">
                Your Trusted Real Estate Partner
              </span>
              <h3 className="font-display text-2xl font-bold text-[#F5C542]">
                Shree Maruti Nandan Properties
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-xl">
                Professional real estate agency and property consultancy offering expert assistance across residential, commercial and agricultural properties in Bulandshahr and surrounding NCR regions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+918460209025"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141418] border border-amber-500/30 text-[#F5C542] hover:bg-amber-500/10 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                <Phone size={15} className="text-[#F5C542]" />
                <span>+91 8460209025</span>
              </a>
              <a
                href="https://wa.me/918460209025?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20would%20like%20to%20consult%20regarding%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black rounded-xl text-xs sm:text-sm font-extrabold shadow-[0_0_15px_rgba(245,197,66,0.3)] hover:shadow-[0_0_25px_rgba(245,197,66,0.5)] transition-all"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand & Address Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Brand Logo */}
            <Link href="/" className="inline-block mb-4 group" aria-label="Shree Maruti Nandan Properties Home">
              <img
                src="/images/shree-maruti-nandan-properties-white.png?v=2"
                alt="Shree Maruti Nandan Properties"
                className="h-10 sm:h-11 w-auto max-h-12 object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Helping clients discover, buy, sell, rent and lease residential plots, houses, flats, commercial spaces and agricultural land with complete transparency.
            </p>

            {/* Factual Address Details */}
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-light flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">Office Location:</p>
                  <p className="text-gray-400">Near Bhoor Chauraha, Bulandshahr, Uttar Pradesh, India</p>
                  <p className="text-gray-400 text-[11px]">(Shop No. 251, Near Gate No. 2, Transport Nagar)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-emerald-light flex-shrink-0" />
                <div>
                  <span className="text-gray-400">Direct Consultation: </span>
                  <a href="tel:+918460209025" className="text-white font-medium hover:text-emerald-light">
                    +91 8460209025
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Properties
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.properties.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-emerald-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-emerald-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Key Locations
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-emerald-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-emerald-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-emerald-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>
              &copy; {currentYear} Shree Maruti Nandan Properties. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link href="/safety" className="hover:text-white transition-colors">Safety Guidelines</Link>
              <Link href="/listing-guidelines" className="hover:text-white transition-colors">Listing Policy</Link>
            </div>
          </div>
        </div>

        {/* Section 79: Center-aligned InboxCrew Credit */}
        <div className="border-t border-white/5 py-4 bg-black/40">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <p className="text-center text-xs text-gray-400 tracking-wide">
              <span>Designed &amp; Developed by </span>
              <a
                href="https://inboxcrew.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-light font-bold hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
              >
                InboxCrew
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
