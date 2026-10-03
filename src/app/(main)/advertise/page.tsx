import type { Metadata } from 'next'
import Link from 'next/link'
import { Megaphone, Target, CheckCircle2, TrendingUp, ShieldCheck, Mail, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advertise & Partner with Shree Maruti Nandan Properties | Developer Marketing & Lead Solutions',
  description: 'Reach high-intent property buyers, NRIs, and land investors across Delhi-NCR, Bulandshahr, and Uttar Pradesh with Shree Maruti Nandan Properties marketing packages.',
}

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <Megaphone size={14} />
            <span>Developer &amp; Broker Solutions</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mb-4">
            Showcase Your Real Estate to High-Intent Buyers
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Connect your plotted developments, residential towers, and commercial complexes with qualified investors and families actively searching for property.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center">
              <Target size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">Hyper-Local Targeting</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Target buyers specifically looking in your locality - whether it&apos;s Sector 150 Noida, Bulandshahr NH-58, or Cyber City Gurugram.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">100% Phone-Verified Leads</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Every lead undergoes OTP mobile verification. Zero fake numbers, zero recycled junk data.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-display font-bold text-base text-charcoal">Dedicated CRM &amp; Analytics</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Real-time dashboard tracking impressions, site visit appointments, click-through rates, and lead status.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-6 mb-16">
          <h2 className="font-display text-2xl font-bold text-charcoal text-center">
            Partnership &amp; Advertising Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Package 1 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Plotted Colonizer</span>
                <h3 className="font-display text-xl font-bold text-charcoal mt-1 mb-2">Plotted Colony Spotlight</h3>
                <div className="text-2xl font-bold text-charcoal font-display">₹19,999 <span className="text-xs font-normal text-gray-400">/ project</span></div>
                <p className="text-xs text-gray-500 mt-2 mb-4">Ideal for plotted colonies, agricultural subdivisions, and farmhouse schemes.</p>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> Top spot on Plots &amp; Land page</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> Plot layout map download</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> 50+ Verified site visit leads</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> 30 Days featured validity</li>
                </ul>
              </div>
              <a
                href="mailto:advertise@shreemarutinandanproperties.com?subject=Enquiry:%20Plotted%20Colony%20Package"
                className="w-full py-2.5 bg-gray-100 hover:bg-emerald hover:text-white text-charcoal text-xs font-semibold rounded-xl text-center transition-colors"
              >
                Inquire Package
              </a>
            </div>

            {/* Package 2 (Featured) */}
            <div className="p-6 bg-charcoal text-white rounded-2xl border-2 border-emerald shadow-lg relative flex flex-col justify-between space-y-6">
              <div className="absolute -top-3 right-6 bg-emerald text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-light">Residential Developer</span>
                <h3 className="font-display text-xl font-bold mt-1 mb-2">Township Showcase</h3>
                <div className="text-2xl font-bold font-display">₹44,999 <span className="text-xs font-normal text-gray-400">/ quarter</span></div>
                <p className="text-xs text-gray-300 mt-2 mb-4">Complete visibility for luxury apartments, villas, and mixed-use towers.</p>
                <ul className="text-xs text-gray-200 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-light" /> Homepage Hero Featured Placement</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-light" /> Interactive 3D Brochure Embed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-light" /> Direct WhatsApp routing to sales team</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-light" /> Unlimited Verified Leads for 90 Days</li>
                </ul>
              </div>
              <a
                href="mailto:advertise@shreemarutinandanproperties.com?subject=Enquiry:%20Township%20Showcase%20Package"
                className="w-full py-2.5 bg-emerald hover:bg-emerald-dark text-white text-xs font-semibold rounded-xl text-center transition-colors"
              >
                Book Township Showcase
              </a>
            </div>

            {/* Package 3 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Channel Partner</span>
                <h3 className="font-display text-xl font-bold text-charcoal mt-1 mb-2">Agency Verified Network</h3>
                <div className="text-2xl font-bold text-charcoal font-display">₹9,999 <span className="text-xs font-normal text-gray-400">/ month</span></div>
                <p className="text-xs text-gray-500 mt-2 mb-4">For verified local real estate brokers and property advisory consultants.</p>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> Up to 50 Active Listings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> Verified Broker Profile &amp; Badge</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> City Locality Directory Feature</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald" /> Instant SMS &amp; Email Lead Alerts</li>
                </ul>
              </div>
              <a
                href="mailto:advertise@shreemarutinandanproperties.com?subject=Enquiry:%20Agency%20Network"
                className="w-full py-2.5 bg-gray-100 hover:bg-emerald hover:text-white text-charcoal text-xs font-semibold rounded-xl text-center transition-colors"
              >
                Join Broker Network
              </a>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-charcoal">Have custom enterprise advertising requirements?</h3>
            <p className="text-xs sm:text-sm text-gray-500">Contact our enterprise real estate partnerships desk directly.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-charcoal text-xs font-semibold hover:bg-gray-50"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:partnerships@shreemarutinandanproperties.com"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald text-white text-xs font-semibold hover:bg-emerald-dark"
            >
              <Mail size={14} />
              <span>Email Partnerships</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
