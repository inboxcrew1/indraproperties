import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
  Share2,
  Home,
  Building,
  Trees,
  Layers,
  KeyRound,
  FileText,
  TrendingUp,
  Landmark,
  Crown,
  Store,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Services | Indra Properties & Enterprises',
  description:
    'Comprehensive real estate consultancy services across Bulandshahr and NCR. Property buying, selling, residential, commercial, agricultural land, plots, and leasing assistance.',
}

const servicesList = [
  {
    id: 'buying',
    title: 'Property Buying Assistance',
    category: 'Consultancy',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    description:
      'Personalized assistance for buyers seeking residential plots, flats, or commercial spaces. We provide shortlisting, comparative valuation, location suitability, and seller negotiation.',
    cta: 'Explore Properties',
    href: '/properties',
  },
  {
    id: 'selling',
    title: 'Property Selling Assistance',
    category: 'Consultancy',
    icon: Share2,
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    description:
      'Professional listing, presentation, and marketing support for property owners looking to sell plots, independent houses, or agricultural land to genuine buyers.',
    cta: 'List Your Property',
    href: '/post-property',
  },
  {
    id: 'residential',
    title: 'Residential Property',
    category: 'Housing',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description:
      'Assistance with independent houses, builder floors, flats, and duplex residences across Bulandshahr, Noida, and NCR with verified ownership documentation.',
    cta: 'View Residential',
    href: '/buy?category=residential',
  },
  {
    id: 'commercial',
    title: 'Commercial Property',
    category: 'Business',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description:
      'Consultation for acquiring high-visibility retail shops, commercial complexes, and highway-facing plots near Transport Nagar, Bhoor Chauraha, and Noida.',
    cta: 'Explore Commercial',
    href: '/commercial',
  },
  {
    id: 'agricultural',
    title: 'Agricultural Land',
    category: 'Land & Farming',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    description:
      'Expert assistance with fertile agricultural acreage, cultivation land, irrigation access, tube-well availability, and revenue mutation records in Bulandshahr district.',
    cta: 'View Agricultural Land',
    href: '/plots-land?type=agricultural',
  },
  {
    id: 'land',
    title: 'Plots & Land',
    category: 'Plotted Assets',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    description:
      'Residential and mixed-use plots with authentic dimensional measurements in native Gaj, approach road verification, and immediate registry availability.',
    cta: 'Browse Plots',
    href: '/plots-land',
  },
  {
    id: 'rental',
    title: 'Rental Properties',
    category: 'Leasing',
    icon: KeyRound,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    description:
      'End-to-end rental assistance connecting reliable tenants with verified flats, independent houses, retail shops, and commercial offices.',
    cta: 'Browse Rentals',
    href: '/rent',
  },
  {
    id: 'leasing',
    title: 'Property Leasing',
    category: 'Commercial Leasing',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description:
      'Long-term commercial lease structuring for corporate spaces, retail showrooms, logistics godowns, and institutional facilities.',
    cta: 'Lease Consultation',
    href: '/contact',
  },
  {
    id: 'investment',
    title: 'Investment Property',
    category: 'Capital Growth',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description:
      'Strategic property identification in high-appreciation corridors such as NH-34, NH-58, upcoming expressways, and urban expansion zones.',
    cta: 'Investment Advisory',
    href: '/contact',
  },
  {
    id: 'farmhouses',
    title: 'Farm Houses',
    category: 'Country Living',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description:
      'Spacious weekend getaways, serene countryside farm houses, and recreational land parcels in peaceful rural pockets near major transit routes.',
    cta: 'Explore Farm Houses',
    href: '/buy?type=farmhouse',
  },
  {
    id: 'luxury',
    title: 'Luxury Properties',
    category: 'Premium Living',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    description:
      'High-end villas, premium penthouse suites, and custom architectural estates across prominent sectors in Noida, Greater Noida, and Gurugram.',
    cta: 'View Luxury Listings',
    href: '/buy?luxury=true',
  },
  {
    id: 'commercial-spaces',
    title: 'Commercial Spaces',
    category: 'Business Infrastructure',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'Functional commercial spaces including warehouses, distribution godowns, and industrial depots with heavy vehicle approach roads.',
    cta: 'View Commercial Spaces',
    href: '/commercial',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3.5 py-1.5 rounded-full mb-4">
            <span>What We Offer</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            Our Property Services
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            Indra Properties &amp; Enterprises offers dedicated, personal consultation across 
            residential, commercial, plotted, and agricultural real estate.
          </p>
        </div>

        {/* Services Grid (All 12 required services from Section 15) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesList.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white text-charcoal shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-3">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-display font-bold text-xl text-charcoal mb-2 group-hover:text-emerald transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={service.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-warm-white hover:bg-emerald text-charcoal hover:text-white border border-gray-200/80 hover:border-emerald text-xs font-semibold transition-all duration-200"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Direct Consultation Box */}
        <div className="bg-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-emerald-light text-xs font-bold uppercase tracking-wider block mb-1">
              Need Personal Guidance?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Consult Indra Properties &amp; Enterprises
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Visit our office near Bhoor Chauraha, Bulandshahr, or speak directly with our team for honest property guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918460209025"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-light text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <Phone size={15} />
              <span>+91 8460209025</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
            >
              <span>Contact Office</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
