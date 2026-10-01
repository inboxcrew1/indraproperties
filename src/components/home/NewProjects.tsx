import Link from 'next/link'
import { ArrowRight, Calendar, Building2, MapPin, ShieldCheck, Sparkles } from 'lucide-react'

const newProjects = [
  {
    name: 'The Crown Greens',
    developer: 'ATS Infrastructure',
    location: 'Sector 150, Noida',
    price: '₹1.15 Cr - ₹2.80 Cr',
    types: '3, 4 BHK Luxury Residences',
    possession: 'Possession Dec 2026',
    status: 'Under Construction',
    rera: 'UPRERAPRJ123456',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    slug: 'the-crown-greens-sector-150',
  },
  {
    name: 'Yamuna Green Valley Plots',
    developer: 'Solitaire Developers',
    location: 'Yamuna Expressway, Greater Noida',
    price: '₹18.5 Lakh - ₹45 Lakh',
    types: '150 - 350 Gaj Freehold Plots',
    possession: 'Immediate Registry',
    status: 'Ready for Construction',
    rera: 'UPRERAPRJ987654',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    slug: 'yamuna-green-valley-plots',
  },
  {
    name: 'Cyber Heights Tower',
    developer: 'DLF Commercial Group',
    location: 'Cyber City, Gurugram',
    price: '₹2.10 Cr - ₹8.50 Cr',
    types: 'Grade-A Corporate Offices & Retail',
    possession: 'Possession Mid 2026',
    status: 'New Launch',
    rera: 'HRERA-GGM-2024-88',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    slug: 'cyber-heights-tower-gurugram',
  },
]

export default function NewProjects() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-3">
              <Sparkles size={13} />
              <span>Upcoming &amp; New Launches</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Featured New Projects
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl">
              RERA-registered mega developments, planned residential townships, and commercial hubs directly from reputed builders.
            </p>
          </div>

          <Link
            href="/new-projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
          >
            <span>View All New Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProjects.map(proj => (
            <div
              key={proj.name}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-emerald/30 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                    {proj.status}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                    <ShieldCheck size={12} /> RERA Registered
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    {proj.developer}
                  </span>
                  <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-emerald transition-colors mb-2">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <MapPin size={13} className="text-emerald flex-shrink-0" />
                    <span>{proj.location}</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl space-y-1.5 text-xs mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Configurations</span>
                      <span className="font-semibold text-charcoal">{proj.types}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Timeline</span>
                      <span className="font-semibold text-charcoal">{proj.possession}</span>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-charcoal font-display">
                    {proj.price}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/properties`}
                  className="w-full py-2.5 bg-emerald/10 hover:bg-emerald text-emerald hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Project Brochure &amp; Floor Plans</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
