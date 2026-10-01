import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const cityHubs = [
  {
    name: 'Bulandshahr',
    slug: 'bulandshahr',
    href: '/property-in-bulandshahr',
    state: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    description: 'Agency Base: Bhoor Chauraha, Transport Nagar, NH-58, and fertile agricultural land',
    isPrimary: true,
  },
  {
    name: 'Noida',
    slug: 'noida',
    href: '/property-in/noida',
    state: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description: 'Premium sector high-rises, commercial offices, Sector 150 & expressway corridor',
    isPrimary: false,
  },
  {
    name: 'Greater Noida',
    slug: 'greater-noida',
    href: '/property-in/greater-noida',
    state: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    description: 'Integrated townships, farm houses, Knowledge Park and Jewar Airport transit zone',
    isPrimary: false,
  },
  {
    name: 'Delhi NCR',
    slug: 'delhi',
    href: '/property-in/delhi',
    state: 'NCT of Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    description: 'Commercial buildings, independent builder floors, and prime central retail',
    isPrimary: false,
  },
  {
    name: 'Gurugram',
    slug: 'gurugram',
    href: '/property-in/gurugram',
    state: 'Haryana',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Grade-A corporate office suites, Golf Course Road penthouses and luxury villas',
    isPrimary: false,
  },
]

export default function ExploreByLocation() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
              Regional Coverage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-3">
              Explore Properties by Location
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl font-light">
              Rooted in Bulandshahr with property consultation across key Western Uttar Pradesh and National Capital Region markets.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
          >
            <span>All Properties</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cityHubs.map((city) => (
            <Link
              key={city.slug}
              href={city.href}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-end min-h-[300px] border ${
                city.isPrimary ? 'border-emerald/40 ring-2 ring-emerald/20' : 'border-gray-200'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />
              </div>

              {/* Primary Badge */}
              {city.isPrimary && (
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-emerald text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    Primary Office
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-5 text-white">
                <div className="flex items-center gap-1.5 text-xs text-emerald-light font-medium mb-1">
                  <MapPin size={12} />
                  <span>{city.state}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-light transition-colors mb-1.5">
                  {city.name}
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2 font-light leading-relaxed mb-3">
                  {city.description}
                </p>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-white/90 group-hover:text-emerald-light transition-colors">
                  <span>View Properties</span>
                  <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
