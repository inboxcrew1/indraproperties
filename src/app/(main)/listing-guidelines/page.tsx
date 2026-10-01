import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Listing Guidelines | Indra Properties & Enterprises',
  description: 'Standards and guidelines for property owners, verified brokers, and developers listing real estate on Indra Properties & Enterprises.',
}

export default function ListingGuidelinesPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText size={14} />
            <span>Marketplace Quality Standards</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Listing Guidelines
          </h1>
          <p className="text-gray-500 text-sm">
            To preserve Indra Properties & Enterprises as a premier, high-trust marketplace, all submitted property listings must adhere to these transparency standards.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Section: Do's & Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-emerald/5 border border-emerald/20 space-y-3">
              <h3 className="font-display text-base font-bold text-emerald-dark flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>What We Encourage</span>
              </h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-2.5">
                <li>&bull; <strong className="text-charcoal">Real, High-Resolution Photos:</strong> Natural daylight exterior, interior, and access road photos.</li>
                <li>&bull; <strong className="text-charcoal">Precise Measurements:</strong> Gaj and dimensions (frontage &times; depth) for plots; Carpet area for flats.</li>
                <li>&bull; <strong className="text-charcoal">Clear Road Width:</strong> State the exact approach road width (e.g. 30 ft, 60 ft) in front of the gate.</li>
                <li>&bull; <strong className="text-charcoal">All-Inclusive Transparent Pricing:</strong> Mention if maintenance or registry fees are extra.</li>
                <li>&bull; <strong className="text-charcoal">Valid RERA Number:</strong> Compulsory for under-construction and commercial projects.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/60 space-y-3">
              <h3 className="font-display text-base font-bold text-rose-800 flex items-center gap-2">
                <XCircle size={18} className="text-rose-600" />
                <span>Strictly Prohibited</span>
              </h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-2.5">
                <li>&bull; <strong className="text-charcoal">Watermarked Stolen Images:</strong> Uploading photos with other portals&apos; stamps or stock watermarks.</li>
                <li>&bull; <strong className="text-charcoal">Bait-and-Switch Pricing:</strong> Quoting an unrealistically low price to lure calls, then quoting higher.</li>
                <li>&bull; <strong className="text-charcoal">Duplicate Listings:</strong> Posting the same plot or apartment multiple times across different localities.</li>
                <li>&bull; <strong className="text-charcoal">Unreachable Contacts:</strong> Providing inactive or temporary burner phone numbers.</li>
                <li>&bull; <strong className="text-charcoal">Unclear Legal Status:</strong> Concealing green-belt or disputed litigation status.</li>
              </ul>
            </div>
          </div>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">1. Measurement Accuracy (Gaj, Sq Ft, Acre)</h2>
            <p className="text-gray-600 mb-2">
              For Indian residential plots and agricultural land parcels, please specify measurements in standard units:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1.5 text-xs sm:text-sm">
              <li>Residential Plots: Measure in <span className="font-semibold text-charcoal">Gaj (Square Yards)</span> or <span className="font-semibold text-charcoal">Sq Ft</span>. Specify frontage (e.g. 30 ft) and depth.</li>
              <li>Flats &amp; Apartments: Must list <span className="font-semibold text-charcoal">Carpet Area</span> as mandated by RERA, along with Super Built-up Area if desired.</li>
              <li>Farmlands &amp; Industrial Land: State the area in <span className="font-semibold text-charcoal">Acres</span> or <span className="font-semibold text-charcoal">Bigha</span> with clear road frontage access.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">2. Moderation &amp; Delisting Policy</h2>
            <p className="text-gray-600">
              Indra Properties & Enterprises moderation algorithms and regional coordinators inspect new submissions within 24 hours. Any listing reported multiple times by verified buyers for false pricing, unavailable inventory, or misrepresentation will be suspended immediately pending re-verification.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-charcoal text-sm">Ready to list your verified property?</h3>
              <p className="text-xs text-gray-500">Reach thousands of active, serious buyers across Delhi-NCR and UP.</p>
            </div>
            <Link
              href="/post-property"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald text-white text-xs font-semibold rounded-xl hover:bg-emerald-dark transition-colors"
            >
              <span>Post Your Property Free</span>
              <ArrowRight size={14} />
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
