import { MessageSquareText, Search, MapPinCheck, Handshake } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your property requirement (residential plot, house, commercial shop or agricultural land), along with preferred budget and locality.',
    icon: MessageSquareText,
  },
  {
    step: '02',
    title: 'Explore Suitable Properties',
    description:
      'Review matching options with genuine photographs, accurate dimensions, approach road details, and transparent price tags.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Shortlist & Visit',
    description:
      'Select promising properties and schedule accompanied physical site visits coordinated directly with Shree Maruti Nandan Properties.',
    icon: MapPinCheck,
  },
  {
    step: '04',
    title: 'Connect & Proceed',
    description:
      'Conduct direct, transparent discussions with sellers or owners with guidance throughout documentation and registry steps.',
    icon: Handshake,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-[#101014] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
            Transparent Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text mt-3">
            How It Works
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal">
            A straightforward, client-focused workflow designed for confidence and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative bg-[#131317] rounded-2xl border border-white/10 p-7 shadow-sm hover:shadow-card-hover hover:border-[#F5C542]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-4xl font-display font-extrabold text-white/15 absolute top-4 right-5 select-none">
                  {step.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-zinc-100 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {step.description}
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
