import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Cookie, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Indra Properties & Enterprises',
  description: 'Understand how Indra Properties & Enterprises uses cookies and tracking technologies to enhance your property discovery experience.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie size={14} />
            <span>Transparency &amp; Preferences</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: January 2026 &bull; Effective for all Indra Properties & Enterprises visitors and account holders
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">1. What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small data files stored on your computer, tablet, or smartphone when you browse websites. They help the platform remember your preferences, keep you securely signed in, and present relevant property listings suited to your city and budget.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">2. How Indra Properties & Enterprises Uses Cookies</h2>
            <p className="text-gray-600 mb-4">
              We prioritize privacy and limit cookie usage strictly to essential platform functions and anonymous performance analytics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2 font-semibold text-charcoal text-sm mb-1.5">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Essential Session Cookies</span>
                </div>
                <p className="text-xs text-gray-500">
                  Required to authenticate accounts, persist saved property shortlists, compare items, and protect form submissions from CSRF exploits.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2 font-semibold text-charcoal text-sm mb-1.5">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Functional &amp; Preferences</span>
                </div>
                <p className="text-xs text-gray-500">
                  Remember your selected area unit (Gaj, Sq Ft, Acre), recently selected city (e.g. Bulandshahr, Noida), and search filters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2 font-semibold text-charcoal text-sm mb-1.5">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Performance &amp; Diagnostics</span>
                </div>
                <p className="text-xs text-gray-500">
                  Collect aggregated, non-personally identifiable telemetry to measure search latency, map rendering, and broken link reports.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2 font-semibold text-charcoal text-sm mb-1.5">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Anti-Fraud &amp; Security</span>
                </div>
                <p className="text-xs text-gray-500">
                  Detect automated bot scraping, abusive multi-enquiry spam, and unauthorized attempts to compromise advertiser accounts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-charcoal mb-3">3. Managing Your Cookie Choices</h2>
            <p className="text-gray-600 mb-3">
              You can modify or disable browser cookies at any time via your browser settings (Chrome, Safari, Edge, or Firefox). Please note that disabling essential cookies may impact certain marketplace functions, such as retaining shortlisted properties or staying logged in.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-charcoal text-sm">Have questions about our cookie policy?</h3>
              <p className="text-xs text-gray-500">Our compliance and privacy officer is available to help.</p>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-emerald text-white text-xs font-semibold rounded-xl hover:bg-emerald-dark transition-colors"
            >
              Contact Privacy Team
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
