import {
  Compass,
  Layers,
  UserCheck,
  Building,
  TreePine,
  Handshake,
  KeyRound,
  PhoneCall,
} from 'lucide-react'

const reasons = [
  {
    title: 'Local Market Understanding',
    description:
      'In-depth knowledge of Bulandshahr micro-markets, circle rates, registry procedures, road master plans and locality connectivity.',
    icon: Compass,
  },
  {
    title: 'Wide Property Categories',
    description:
      'Assisting across residential plots, independent houses, flats, commercial shops, showrooms, agricultural land parcels, and farm houses.',
    icon: Layers,
  },
  {
    title: 'Personalized Property Assistance',
    description:
      'One-on-one consultation tailored to your exact budget, space needs, preferred facing, and long-term family or commercial plans.',
    icon: UserCheck,
  },
  {
    title: 'Residential & Commercial Expertise',
    description:
      'Experienced guidance for both private home buyers seeking serene neighbourhoods and entrepreneurs seeking high-traffic commercial frontage.',
    icon: Building,
  },
  {
    title: 'Plot & Land Assistance',
    description:
      'Support with dimensional verification in native units (Gaj, Acre, Sq Ft), approach road confirmation, and clear title checks.',
    icon: TreePine,
  },
  {
    title: 'Buying & Selling Support',
    description:
      'Full coordination from property shortlisting and owner discussions to physical accompanied site visits and transparent dealings.',
    icon: Handshake,
  },
  {
    title: 'Rental & Leasing Assistance',
    description:
      'Helping landlords discover dependable tenants and businesses secure retail shops, godowns, or corporate office spaces.',
    icon: KeyRound,
  },
  {
    title: 'Direct Consultation',
    description:
      'Direct, straightforward communication via phone, WhatsApp, or in-person visits to our office near Bhoor Chauraha.',
    icon: PhoneCall,
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#101014] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
            Our Agency Commitment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text mt-3">
            Why Clients Choose Shree Maruti Nandan Properties
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal">
            Professional guidance built on local market knowledge, genuine options, and transparent consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-[#131317] rounded-2xl border border-white/10 p-6 shadow-sm hover:shadow-card-hover hover:border-[#F5C542]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-zinc-100 mb-2.5">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
