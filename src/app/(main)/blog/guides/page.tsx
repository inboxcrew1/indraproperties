import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ShieldCheck, CheckCircle2, ArrowRight, FileCheck, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Buyer Guides & Due Diligence Checklists | Shree Maruti Nandan Properties',
  description: 'Step-by-step buyer guides for purchasing plots, flats, and commercial properties in Uttar Pradesh, Haryana, and Delhi-NCR.',
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            <span>Buyer Due Diligence</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mb-4">
            Property Buyer Handbooks
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Essential step-by-step legal, verification, and inspection manuals tailored specifically to North Indian land and residential property markets.
          </p>
        </div>

        {/* Guides List */}
        <div className="space-y-8">
          {/* Guide 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-emerald/10 text-emerald">
                <FileCheck size={24} />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald">Land &amp; Plot Guide</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  How to Verify Land Registry (Bainama) and Khatauni in Uttar Pradesh
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              When purchasing a residential plot or agricultural parcel in Bulandshahr, Greater Noida, or Meerut, title verification is paramount:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-charcoal block">1. 13-Year Registry Chain:</strong>
                Ensure continuity from the earliest recognized village khatedar down to the current seller without broken links.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-charcoal block">2. Bhulekh Portal Online Audit:</strong>
                Check the real-time revenue record on <code>upbhulekh.gov.in</code> for any pending civil disputes or court attachments.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-charcoal block">3. Section 143 / 80 Land Use Conversion:</strong>
                For residential construction on agricultural land, verify whether an order under Section 143/80 (UP Revenue Code) has been sanctioned.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-charcoal block">4. Approach Road Demarcation:</strong>
                Confirm in revenue maps (Sajra) that the access road is public or legally recorded in the registry with minimum 20-30 ft breadth.
              </div>
            </div>
          </div>

          {/* Guide 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-gold/15 text-gold-dark">
                <ShieldCheck size={24} />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">Apartments &amp; High-Rises</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  RERA Compliance &amp; Carpet Area Verification for Flat Buyers
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Before booking an under-construction or ready flat in Noida, Gurugram, or Ghaziabad:
            </p>

            <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-disc pl-5">
              <li>Always cross-reference the builder&apos;s registration certificate on the official state RERA website (e.g. UP RERA or HRERA).</li>
              <li>Demand the sanctioned building layout plan issued by the local development authority (e.g. NOIDA, YEIDA, GMDA).</li>
              <li>Verify that the sale agreement states price strictly based on <strong>Net Usable Carpet Area</strong> rather than super built-up claims.</li>
              <li>Inspect the escrow account details to ensure 70% of collection is routed to project construction.</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald hover:text-emerald-dark"
          >
            <span>&larr; Return to All Articles &amp; Market Insights</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
