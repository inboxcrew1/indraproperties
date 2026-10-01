import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Indra Properties & Enterprises',
  description: 'Indra Properties & Enterprises Privacy Policy regarding user credentials, location data, and inquiry security.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
        <h1 className="font-display text-3xl font-bold text-charcoal mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400 mb-8">
          Last Updated: October 2026 &bull; Compliant with Digital Personal Data Protection (DPDP) Act
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">1. Information We Collect</h2>
            <p>
              We collect information necessary to connect prospective real estate buyers with legitimate property advertisers. This includes contact details (name, telephone number, email), listing dimensional specifications, and geospatial coordinates intentionally supplied by advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">2. Location Data &amp; Privacy</h2>
            <p>
              Advertisers retain full control over whether their listed property displays an exact GPS location marker or an approximate locality boundary. We never reveal private interior floor layouts or exact unit numbers without advertiser authorization.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">3. Direct Inquiries &amp; Communications</h2>
            <p>
              When you submit a property enquiry or click to initiate a WhatsApp or telephone conversation, your contact coordinates are shared directly with the designated advertiser for that specific listing. We do not sell or monetize personal leads to unrelated third-party telemarketers.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-charcoal text-base mb-2">4. Data Security</h2>
            <p>
              All transmission of user data is safeguarded using Transport Layer Security (TLS 1.3) protocols. Authentication tokens and sensitive account credentials are encrypted and stored securely.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
