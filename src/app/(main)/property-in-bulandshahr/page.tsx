import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  MapPin,
  Building2,
  Trees,
  Layers,
  Store,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property in Bulandshahr | Plots, Houses, Commercial & Agricultural Land',
  description:
    'Explore verified properties in Bulandshahr with Indra Properties & Enterprises. Residential plots near Bhoor Chauraha, commercial shops in Transport Nagar, houses, and fertile agricultural land.',
  keywords: [
    'Property in Bulandshahr',
    'Plots in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Transport Nagar Bulandshahr',
    'Houses for sale in Bulandshahr',
    'Agricultural land Bulandshahr',
    'Indra Properties & Enterprises',
  ],
}

export default function BulandshahrPropertyPage() {
  const bulandshahrProperties = properties.filter(
    (p) => p.location.city.toLowerCase() === 'bulandshahr'
  )

  const plots = bulandshahrProperties.filter((p) => p.subcategory === 'plot')
  const houses = bulandshahrProperties.filter((p) => p.category === 'residential')
  const commercial = bulandshahrProperties.filter((p) => p.category === 'commercial')
  const agricultural = bulandshahrProperties.filter(
    (p) => p.subcategory === 'agricultural' || p.subcategory === 'farmland'
  )

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      {/* City Hero */}
      <div className="relative bg-charcoal text-white py-16 sm:py-20 mb-12">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
            alt="Bulandshahr Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald text-white text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin size={13} />
              <span>Indra Properties &amp; Enterprises Head Office Market</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Property in Bulandshahr
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Explore residential plots, independent houses, retail shops, commercial showrooms, and fertile 
              agricultural land in Bulandshahr with personal guidance from our local consultancy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+918460209025"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-light text-white rounded-xl text-xs sm:text-sm font-bold shadow transition-all"
              >
                <Phone size={15} />
                <span>Call Agency: +91 8460209025</span>
              </a>

              <a
                href="https://wa.me/918460209025?text=Hello%20Indra%20Properties%20%26%20Enterprises,%20I%20am%20interested%20in%20Bulandshahr%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Local Market Hubs */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 mb-12 shadow-sm">
          <h3 className="font-display font-bold text-lg text-charcoal mb-4">
            Key Localities &amp; Hubs in Bulandshahr
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Bhoor Chauraha', type: 'Central Hub' },
              { name: 'Transport Nagar', type: 'Commercial' },
              { name: 'Sector 65', type: 'Plotted Township' },
              { name: 'Civil Lines', type: 'Residential' },
              { name: 'NH-34 Bypass', type: 'Highways & Showrooms' },
              { name: 'Syana Road Belt', type: 'Agricultural' },
            ].map((loc) => (
              <div key={loc.name} className="p-3 bg-warm-white rounded-xl border border-gray-100 text-center">
                <p className="text-xs font-bold text-charcoal">{loc.name}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{loc.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Bulandshahr Listings */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                Available Inventory in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Showing {bulandshahrProperties.length} active residential, commercial, and agricultural properties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bulandshahrProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Local Agency Advisory Box */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
              Local Guidance
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Looking for a Specific Plot or Property in Bulandshahr?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Not all available local land parcels or properties are listed publicly due to owner privacy. 
              Contact Indra Properties &amp; Enterprises directly or visit our office near Bhoor Chauraha to discuss custom requirements.
            </p>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>Shop No. 251, Near Gate No. 2, Transport Nagar, Bulandshahr</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>Direct phone consultation at +91 8460209025</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <a
              href="tel:+918460209025"
              className="px-6 py-3 bg-emerald text-white rounded-xl text-center text-xs sm:text-sm font-bold hover:bg-emerald-dark shadow transition-colors"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-charcoal hover:border-emerald hover:text-emerald rounded-xl text-center text-xs sm:text-sm font-semibold transition-colors"
            >
              Contact Agency
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
