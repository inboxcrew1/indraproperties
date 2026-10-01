import Link from 'next/link'
import {
  Layers,
  Building2,
  Home,
  Crown,
  Trees,
  Warehouse,
  Store,
  Briefcase,
  Building,
  Landmark,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const propertyCategories = [
  {
    title: 'Residential Properties',
    description: 'Flats, apartments, builder floors and family residences',
    icon: Home,
    href: '/buy?category=residential',
    tag: 'Core Focus',
  },
  {
    title: 'Plots & Land',
    description: 'Freehold plots in Bulandshahr, Noida & emerging corridors',
    icon: Layers,
    href: '/plots-land',
    tag: 'High Demand',
  },
  {
    title: 'Flats & Apartments',
    description: 'Modern 2, 3 & 4 BHK apartments with amenities',
    icon: Building2,
    href: '/buy?type=flat',
    tag: 'Popular',
  },
  {
    title: 'Houses & Villas',
    description: 'Independent kothis, duplexes and luxury villas',
    icon: Crown,
    href: '/buy?type=house',
    tag: 'Private Living',
  },
  {
    title: 'Farm Houses',
    description: 'Sprawling green retreats and peaceful country estates',
    icon: Landmark,
    href: '/buy?type=farmhouse',
    tag: 'Luxury',
  },
  {
    title: 'Agricultural Land',
    description: 'Fertile cultivation land parcels with clear registry titles',
    icon: Trees,
    href: '/plots-land?type=agricultural',
    tag: 'Investment',
  },
  {
    title: 'Commercial Properties',
    description: 'High-visibility shops, commercial complexes & land',
    icon: Building,
    href: '/commercial',
    tag: 'Commercial',
  },
  {
    title: 'Shops',
    description: 'High footfall retail outlets in prime commercial markets',
    icon: Store,
    href: '/commercial?type=shop',
    tag: 'Rental Yield',
  },
  {
    title: 'Offices',
    description: 'Corporate office suites and professional workspace setups',
    icon: Briefcase,
    href: '/commercial?type=office',
    tag: 'Business',
  },
  {
    title: 'Showrooms',
    description: 'Wide road frontage showrooms for retail & automobile brands',
    icon: Store,
    href: '/commercial?type=showroom',
    tag: 'High Visibility',
  },
  {
    title: 'Warehouses',
    description: 'Storage godowns, logistics depots and industrial sheds',
    icon: Warehouse,
    href: '/commercial?type=warehouse',
    tag: 'Logistics',
  },
]

export default function PropertyTypeGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
            All Property Sectors
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-3">
            Explore by Property Category
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
            From residential plots in Bulandshahr to commercial showrooms and agricultural land parcels, find verified options tailored to your requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {propertyCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative bg-warm-white hover:bg-white rounded-2xl border border-gray-200/80 hover:border-emerald/40 p-6 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 group-hover:bg-emerald/10 group-hover:text-emerald transition-colors">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-emerald transition-colors mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald">
                  <span>Browse Listings</span>
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
