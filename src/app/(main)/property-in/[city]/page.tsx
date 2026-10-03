import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { properties } from '@/lib/data/properties'
import { Property } from '@/types/property'
import PropertyCard from '@/components/property/PropertyCard'
import { MapPin, Building, TrendingUp, Layers, CheckCircle2, ArrowRight } from 'lucide-react'

interface CityPageProps {
  params: Promise<{ city: string }>
}

const cityDataMap: Record<
  string,
  {
    name: string
    state: string
    heroImage: string
    description: string
    avgPricePlot: string
    avgPriceFlat: string
    localities: string[]
  }
> = {
  bulandshahr: {
    name: 'Bulandshahr',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85',
    description:
      'Bulandshahr is an emerging real estate corridor along NH-58 and the proposed expressways, renowned for high-yield residential plots, fertile farm lands, and private agricultural estates.',
    avgPricePlot: '₹14,000 / Gaj',
    avgPriceFlat: '₹3,500 / sq ft',
    localities: ['Sector 65', 'NH-58 Bypass', 'Dibai Road', 'Sikandrabad', 'Yamuna Link'],
  },
  noida: {
    name: 'Noida',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=85',
    description:
      'Noida stands as North India’s premier planned IT and residential hub, featuring world-class expressways, metro connectivity, and luxury high-rises in Sector 150, Sector 62, and Sector 94.',
    avgPricePlot: '₹75,000 / Gaj',
    avgPriceFlat: '₹7,800 / sq ft',
    localities: ['Sector 150', 'Sector 62', 'Sector 18', 'Sector 94', 'Noida Expressway'],
  },
  'greater-noida': {
    name: 'Greater Noida',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=85',
    description:
      'Greater Noida and Greater Noida West feature planned integrated townships, broad avenues, and prime proximity to the upcoming Jewar Noida International Airport.',
    avgPricePlot: '₹32,000 / Gaj',
    avgPriceFlat: '₹5,600 / sq ft',
    localities: ['Greater Noida West', 'Yamuna Expressway', 'Gamma II', 'Knowledge Park', 'Pari Chowk'],
  },
  delhi: {
    name: 'Delhi',
    state: 'NCT of Delhi',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=85',
    description:
      'The National Capital Territory offers prime commercial real estate in Connaught Place, private builder floors in South Delhi, and spacious kothis in Dwarka.',
    avgPricePlot: '₹1,50,000 / Gaj',
    avgPriceFlat: '₹18,500 / sq ft',
    localities: ['Dwarka Sector 10', 'Karol Bagh', 'Greater Kailash', 'Connaught Place', 'Vasant Kunj'],
  },
  gurugram: {
    name: 'Gurugram',
    state: 'Haryana',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85',
    description:
      'Gurugram is India’s Fortune 500 capital, boasting luxury gated golf villas, high-end penthouses on Golf Course Road, and Grade-A Cyber City corporate offices.',
    avgPricePlot: '₹95,000 / Gaj',
    avgPriceFlat: '₹14,200 / sq ft',
    localities: ['Cyber City', 'Sector 57', 'Golf Course Ext.', 'Sohna Road', 'Dwarka Expressway'],
  },
  ghaziabad: {
    name: 'Ghaziabad',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85',
    description:
      'Offering rapid transit via Delhi-Meerut Expressway and Metro connectivity, Ghaziabad is a leading hub for affordable apartments and residential developments.',
    avgPricePlot: '₹28,000 / Gaj',
    avgPriceFlat: '₹4,800 / sq ft',
    localities: ['Indirapuram', 'Vaishali', 'Raj Nagar Extension', 'Crossings Republik'],
  },
  meerut: {
    name: 'Meerut',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
    description:
      'Connected to Delhi via the high-speed RRTS Namo Bharat corridor in under 45 minutes, Meerut is experiencing booming demand for plotted townships and commercial hubs.',
    avgPricePlot: '₹18,000 / Gaj',
    avgPriceFlat: '₹3,900 / sq ft',
    localities: ['Modipuram', 'Bypass Road', 'Ganga Nagar', 'Partapur'],
  },
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params
  const cityKey = (city || '').toLowerCase()
  const data = cityDataMap[cityKey]

  if (!data) {
    return {
      title: 'Properties by City | Shree Maruti Nandan Properties',
    }
  }

  return {
    title: `Property in ${data.name} | Real Estate, Plots & Flats | Shree Maruti Nandan Properties`,
    description: `Discover verified real estate in ${data.name}, ${data.state}. Search residential plots, flats for sale, farm land, and commercial property with transparent rates.`,
  }
}

export default async function CityLandingPage({ params }: CityPageProps) {
  const { city } = await params
  const cityKey = (city || '').toLowerCase()
  const cityInfo = cityDataMap[cityKey]

  if (!cityInfo) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-bold">City Not Found</h1>
        <p className="text-gray-500 mt-2">We currently cover Bulandshahr, Noida, Greater Noida, Delhi, Gurugram, Ghaziabad, and Meerut.</p>
        <Link href="/properties" className="inline-block mt-4 px-6 py-2.5 bg-emerald text-white rounded-xl text-sm font-semibold">
          View All Properties
        </Link>
      </div>
    )
  }

  // Filter properties matching this city
  const cityProperties = properties.filter(
    p => p.location.city.toLowerCase() === cityInfo.name.toLowerCase()
  )

  const plots = cityProperties.filter(p => p.category === 'land')
  const residential = cityProperties.filter(p => p.category === 'residential')
  const commercial = cityProperties.filter(p => p.category === 'commercial')

  return (
    <div className="min-h-screen bg-warm-white pb-20 pt-16">
      {/* City Hero */}
      <div className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={cityInfo.heroImage}
          alt={`Real Estate in ${cityInfo.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-black/40" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-light bg-emerald/20 px-3 py-1 rounded-full mb-3 backdrop-blur-sm border border-emerald-light/30">
              <MapPin size={12} />
              <span>{cityInfo.state} &bull; Regional Market</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-4">
              Real Estate in {cityInfo.name}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-light">
              {cityInfo.description}
            </p>

            {/* Quick Price Benchmarks */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-gray-300 block">Avg. Plot Price</span>
                <span className="text-sm font-bold text-white">{cityInfo.avgPricePlot}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-gray-300 block">Avg. Residential Flat</span>
                <span className="text-sm font-bold text-white">{cityInfo.avgPriceFlat}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-gray-300 block">Available Listings</span>
                <span className="text-sm font-bold text-emerald-light">{cityProperties.length} Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Localities Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Top Localities in {cityInfo.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {cityInfo.localities.map(loc => (
                <Link
                  key={loc}
                  href={`/properties?city=${cityKey}&q=${encodeURIComponent(loc)}`}
                  className="px-3 py-1 bg-gray-50 hover:bg-emerald/10 hover:text-emerald text-gray-700 rounded-lg text-xs font-medium border border-gray-200 transition-colors"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href={`/properties?city=${cityKey}`}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-emerald hover:text-emerald-dark"
          >
            <span>Explore All {cityInfo.name} Listings</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Available Properties Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Available Properties in {cityInfo.name}
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              Showing {cityProperties.length} verified listings
            </span>
          </div>

          {cityProperties.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <p className="text-sm text-gray-500">No properties currently listed in this specific city.</p>
              <Link href="/properties" className="inline-block mt-4 text-xs font-bold text-emerald underline">
                Browse nearby NCR properties
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cityProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
