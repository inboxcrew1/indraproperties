import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, MapPin, Users, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Shree Maruti Nandan Properties | Build the Future of Indian PropTech',
  description: 'Join the team revolutionizing Indian real estate with radical transparency, verified plotting, and modern digital property experiences.',
}

const openRoles = [
  {
    title: 'Senior Full Stack Engineer',
    team: 'Engineering',
    location: 'Noida / Hybrid',
    type: 'Full-time',
    description: 'Lead architecture for real-time map indexing, lightning-fast search filters, and high-concurrency lead dispatch pipelines in Next.js & TypeScript.'
  },
  {
    title: 'Regional Property Acquisition Manager',
    team: 'Operations & Verification',
    location: 'Bulandshahr & Western UP',
    type: 'Full-time',
    description: 'Build relationships with prominent plotted colony developers, verified land brokers, and institutional property owners across NH-58 and Expressway belts.'
  },
  {
    title: 'Legal Document & RERA Compliance Specialist',
    team: 'Trust & Safety',
    location: 'Delhi-NCR',
    type: 'Full-time',
    description: 'Review land title chains, Khatauni revenue documents, and state RERA registrations to guarantee 100% verified status across listings.'
  },
  {
    title: 'Product Designer (Luxury PropTech UI/UX)',
    team: 'Design',
    location: 'Remote / Delhi-NCR',
    type: 'Full-time',
    description: 'Craft intuitive mobile-first discovery flows for Indian property buyers, plotting calculators, and seller dashboard experiences.'
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Join Our Mission</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mb-4">
            Build the Future of Indian Real Estate
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Shree Maruti Nandan Properties, we are dismantling misleading listings and phantom properties to bring genuine transparency to Indian home buyers and land investors.
          </p>
        </div>

        {/* Why Shree Maruti Nandan Properties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center">
              <HeartHandshake size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">High-Trust Culture</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We value truth over vanity metrics. Every feature we ship is designed to protect buyer savings and elevate authentic sellers.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">Competitive Rewards</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Generous equity incentives, top-tier health coverage for your family, annual learning grants, and modern hardware of your choice.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">Pan-India Impact</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Help millions find their dream home, from high-rise penthouses in Gurugram to agricultural acreages in Bulandshahr.
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="font-display text-2xl font-bold text-charcoal">Current Openings</h2>
            <span className="text-xs font-semibold text-emerald bg-emerald/10 px-3 py-1 rounded-full">
              {openRoles.length} Open Positions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-emerald/40 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-emerald uppercase tracking-wider bg-emerald/5 px-2.5 py-0.5 rounded-full">
                      {role.team}
                    </span>
                    <span className="text-xs text-gray-400">&bull;</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin size={12} />
                      {role.location}
                    </span>
                    <span className="text-xs text-gray-400">&bull;</span>
                    <span className="text-xs text-gray-500">{role.type}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={`mailto:careers@shreemarutinandanproperties.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal hover:bg-emerald text-white text-xs font-semibold rounded-xl transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Application */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center space-y-3">
          <h3 className="font-display text-xl font-bold text-charcoal">Don&apos;t see your role?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            We are always eager to meet high-caliber engineers, surveyors, and growth leaders. Email your portfolio or resume to{' '}
            <a href="mailto:careers@shreemarutinandanproperties.com" className="font-semibold text-emerald underline">
              careers@shreemarutinandanproperties.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
