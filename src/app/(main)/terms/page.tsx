import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Indra Properties & Enterprises',
  description: 'Terms of service, listing guidelines, and advertiser responsibilities on Indra Properties & Enterprises.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
        <h1 className="font-display text-3xl font-bold text-charcoal mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-gray-400 mb-8">
          Effective Date: October 2026
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">1. Nature of Platform</h2>
            <p>
              Indra Properties & Enterprises operates exclusively as an online property technology discovery and advertising marketplace. Indra Properties & Enterprises does not act as a real estate broker, lender, title insurer, or sub-registrar authority.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">2. Advertiser Accuracy &amp; Verification</h2>
            <p>
              Property owners, brokers, and builders listing assets on Indra Properties & Enterprises covenant that all dimensional values (Gaj, Sq Ft, Acres), pricing figures, facing directions, and ownership deeds are truthful and lawfully registered. Fabricated claims or misleading photographs are grounds for immediate listing suspension.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">3. Buyer Independent Due Diligence</h2>
            <p>
              Prospective buyers and tenants must conduct independent legal inspection of registered sale deeds, encumbrance certificates, mutation extracts, and physical ground boundaries before executing financial transfers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
