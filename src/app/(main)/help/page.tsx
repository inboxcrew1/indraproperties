import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, Search, MessageSquare, PlusCircle, ShieldCheck, Calculator, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center & Frequently Asked Questions | Shree Maruti Nandan Properties',
  description: 'Find answers to common questions about buying plots, flats, scheduling visits, verifying land papers, and listing properties on Shree Maruti Nandan Properties.',
}

const faqs = [
  {
    category: 'Buying & Searching',
    items: [
      {
        q: 'How do I search for residential plots in specific units like Gaj or Bigha?',
        a: 'On our marketplace search and Plots & Land section, you can filter directly by unit (Gaj, Sq Ft, Acre). You can also use our built-in Real Estate Tools to instantly convert between Gaj, Square Feet, and Acres.'
      },
      {
        q: 'What does the "Verified" badge mean on a property?',
        a: 'A verified listing on Shree Maruti Nandan Properties means that our verification team has validated the owner or agent’s mobile number, verified location coordinates on satellite maps, and reviewed supporting documents (such as registry copies or RERA certificates) to prevent phantom listings.'
      },
      {
        q: 'How do I contact the advertiser or property owner directly?',
        a: 'Every property page features direct "Call" and "WhatsApp" contact buttons, as well as an "Inquire Now" and "Schedule Visit" modal. You can send your preferred time slot directly to the advertiser without broker mediation fees.'
      }
    ]
  },
  {
    category: 'Listing & Selling',
    items: [
      {
        q: 'Is it free to post a property listing on Shree Maruti Nandan Properties?',
        a: 'Yes, basic property listings for individual home owners and plot owners are completely free. You can list residential plots, kothis, builder floors, flats, and agricultural parcels in 6 straightforward steps.'
      },
      {
        q: 'How long does it take for my property to go live?',
        a: 'Once submitted through our Post Property wizard, your listing undergoes quick automated quality checks and is published immediately. Our team conducts routine verification audits within 24 hours.'
      },
      {
        q: 'Can I edit or update my property price after posting?',
        a: 'Yes! From your Advertiser Dashboard under "My Listings", you can update the asking price, status (Available, Under Offer, Sold), photos, and description at any time.'
      }
    ]
  },
  {
    category: 'Legal, Tools & Financing',
    items: [
      {
        q: 'How does the EMI Calculator work?',
        a: 'Our EMI Calculator computes your exact monthly installment based on your property price, down payment percentage, annual interest rate (typically 8.25% - 9.5%), and tenure (up to 30 years). It also displays total interest payable and amortization breakdown.'
      },
      {
        q: 'What documents should I verify before buying a plot or agricultural land in UP/NCR?',
        a: 'Always request the 13-year Registry chain, Khatauni / Revenue record showing title clearance, Non-Encumbrance Certificate (Bar-Mukti / EC), and local authority zoning approval (e.g., GNIDA, YEIDA, BDA or municipal council).'
      }
    ]
  }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Support &amp; Knowledge Base</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mb-4">
            How Can We Help You?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Find answers to questions about buying, renting, plotting, site visits, and selling on India&apos;s premier property platform.
          </p>
        </div>

        {/* Quick Help Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <Link
            href="/properties"
            className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald/40 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-3 group-hover:bg-emerald group-hover:text-white transition-colors">
              <Search size={20} />
            </div>
            <h3 className="font-display font-bold text-sm text-charcoal mb-1">Search Properties</h3>
            <p className="text-xs text-gray-500">Find plots, flats, and commercial properties by city &amp; budget.</p>
          </Link>

          <Link
            href="/post-property"
            className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald/40 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-white transition-colors">
              <PlusCircle size={20} />
            </div>
            <h3 className="font-display font-bold text-sm text-charcoal mb-1">Post a Property</h3>
            <p className="text-xs text-gray-500">List your plot, villa, or flat free for verified buyers.</p>
          </Link>

          <Link
            href="/tools"
            className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald/40 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Calculator size={20} />
            </div>
            <h3 className="font-display font-bold text-sm text-charcoal mb-1">EMI &amp; Gaj Tools</h3>
            <p className="text-xs text-gray-500">Calculate home loans &amp; convert Gaj, Sq Ft, and Acres.</p>
          </Link>

          <Link
            href="/safety"
            className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald/40 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display font-bold text-sm text-charcoal mb-1">Safety &amp; Due Diligence</h3>
            <p className="text-xs text-gray-500">Protect against fraud and verify registry documents.</p>
          </Link>
        </div>

        {/* FAQs by Category */}
        <div className="space-y-12">
          {faqs.map((cat) => (
            <div key={cat.category} className="space-y-4">
              <h2 className="font-display text-xl font-bold text-charcoal border-b border-gray-200 pb-2">
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="font-semibold text-charcoal text-base mb-2">
                      {item.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 bg-charcoal text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">Still have questions?</h3>
            <p className="text-gray-300 text-sm">
              Our customer advisory team is available Monday through Saturday, 9:30 AM to 6:30 PM IST.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark transition-colors"
              >
                Contact Helpdesk
              </Link>
              <a
                href="tel:+919876543210"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-colors border border-white/20"
              >
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
