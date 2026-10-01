import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Calendar, MapPin, ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New Projects & Master Townships in NCR | Indra Properties & Enterprises',
  description: 'Explore upcoming and ready-to-move RERA registered townships, plotted projects, and luxury residential societies across Noida, Greater Noida, and Gurugram.',
}

const projectsList = [
  {
    name: 'The Crown Greens',
    developer: 'ATS Infrastructure',
    location: 'Sector 150, Noida',
    price: '₹1.15 Cr - ₹2.80 Cr',
    types: '3, 4 BHK Luxury Residences',
    possession: 'Possession Dec 2026',
    status: 'Under Construction',
    rera: 'UPRERAPRJ123456',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    description: 'A 12-acre golf-centric residential paradise with 80% open greens, central club house, Olympic-sized swimming pool, and seamless Noida-Greater Noida Expressway connectivity.',
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
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    description: 'Fully gated plotted enclave located 15 minutes from the upcoming Jewar International Airport, complete with wide 40-ft internal roads, underground electric cabling, and green parks.',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    description: 'Iconic LEED Platinum certified corporate office tower with high-speed double decker elevators, high-street retail piazza, and direct rapid metro connectivity.',
  },
]

export default function NewProjectsPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-3">
            <Building2 size={13} />
            <span>Developer Launches</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
            New Projects &amp; Master Townships
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Sanctioned master planned townships, plotted developments, and luxury condominiums with verified RERA approvals.
          </p>
        </div>

        <div className="space-y-8">
          {projectsList.map(proj => (
            <div
              key={proj.name}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-card-hover transition-all flex flex-col md:flex-row group"
            >
              <div className="md:w-5/12 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-charcoal/90 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm">
                  {proj.status}
                </div>
              </div>

              <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {proj.developer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald bg-emerald/10 px-2.5 py-1 rounded-full">
                      <ShieldCheck size={13} /> RERA: {proj.rera}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-charcoal mb-2">
                    {proj.name}
                  </h2>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <MapPin size={14} className="text-emerald flex-shrink-0" />
                    <span>{proj.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light">
                    {proj.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6 text-xs">
                    <div>
                      <span className="text-gray-400 block mb-0.5">Configurations</span>
                      <strong className="text-charcoal font-semibold">{proj.types}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Possession Timeline</span>
                      <strong className="text-charcoal font-semibold">{proj.possession}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting From</span>
                    <span className="text-2xl font-bold font-display text-charcoal">
                      {proj.price}
                    </span>
                  </div>

                  <Link
                    href={`/contact?project=${encodeURIComponent(proj.name)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Request Project Brochure</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
