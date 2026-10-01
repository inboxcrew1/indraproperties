import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, ShieldAlert, Scale, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Disclaimer & Regulatory Notice | Indra Properties & Enterprises',
  description: 'Legal disclaimer and regulatory disclosure for real estate transactions, RERA compliance, and marketplace listings on Indra Properties & Enterprises.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200/50">
            <Scale size={14} />
            <span>Legal Notice &amp; RERA Advisory</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Marketplace Disclaimer
          </h1>
          <p className="text-gray-500 text-sm">
            Important regulatory disclosures regarding property data, titles, RERA numbers, and platform intermediary status.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Highlight Box */}
          <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3.5 text-amber-900 text-sm">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Independent Title &amp; Document Due Diligence Recommended</p>
              <p className="text-xs leading-relaxed text-amber-800">
                Buyers and tenants are strongly advised to personally inspect all original land deeds, Khatauni / Registry records, Encumbrance Certificates (EC), and municipal sanction letters before making any financial advances or signing binding agreements.
              </p>
            </div>
          </div>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">1. Intermediary Status</h2>
            <p className="text-gray-600">
              Indra Properties & Enterprises operates strictly as an intermediary technology platform under Section 79 of the Information Technology Act, 2000. Indra Properties & Enterprises does not own, build, solicit sales as a principal, or act as an insurer of any real estate property listed on this portal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">2. Real Estate (Regulation and Development) Act, 2016 (RERA)</h2>
            <p className="text-gray-600 mb-3">
              For all projects covered under RERA, advertisers (promoters, developers, and registered real estate agents) are obligated by law to furnish their valid state RERA registration number and official authority portal web link.
            </p>
            <p className="text-gray-600">
              Users are advised to verify the project status on the respective state portal (e.g. <span className="font-semibold text-charcoal">UP RERA</span> at <code>up-rera.in</code>, <span className="font-semibold text-charcoal">Delhi RERA</span> at <code>rera.delhi.gov.in</code>, or <span className="font-semibold text-charcoal">Haryana RERA (HRERA)</span> at <code>haryanarera.gov.in</code>) prior to entering into contracts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">3. Verification Badges &amp; Authenticity</h2>
            <p className="text-gray-600">
              A “Verified” badge on Indra Properties & Enterprises indicates that the advertiser has completed phone validation and submitted documentary proof (such as registry copies, utility bills, or RERA certificates) matching the basic specifications of the listing. While Indra Properties & Enterprises performs diligence checks, the badge does not substitute for a professional legal title investigation by a qualified advocate.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">4. Pricing, Dimensions &amp; Financial Estimates</h2>
            <p className="text-gray-600 mb-3">
              Listing prices, square footage, Gaj, frontage, and road dimensions are provided directly by listing owners and developers. Indra Properties & Enterprises endeavors to maintain high data fidelity, but actual transaction prices remain subject to bilateral negotiation between buyer and seller.
            </p>
            <p className="text-gray-600">
              Calculators (EMI estimates, Gaj to Sq Ft conversions, and affordability projections) are provided solely for indicative simulation purposes and do not represent formal bank sanctions or loan offers.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-charcoal text-sm">Need help or spotted an inaccurate listing?</h3>
              <p className="text-xs text-gray-500">Report suspicious claims directly to our moderation desk.</p>
            </div>
            <Link
              href="/contact?topic=listing-dispute"
              className="px-5 py-2.5 bg-charcoal text-white text-xs font-semibold rounded-xl hover:bg-black transition-colors"
            >
              Report a Listing
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
