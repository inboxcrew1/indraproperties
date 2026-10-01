import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Layers,
  Trees,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Indra Properties & Enterprises Bulandshahr',
  description:
    'Learn about Indra Properties & Enterprises — a professional real estate agency and property consultancy based near Bhoor Chauraha, Bulandshahr, Uttar Pradesh. Specializing in residential, commercial and agricultural properties.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3.5 py-1.5 rounded-full mb-4">
            <Building2 size={13} />
            <span>Real Estate Agency &amp; Property Consultant</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            About Indra Properties &amp; Enterprises
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            A professional real estate consultancy helping clients navigate residential, commercial, 
            and agricultural property decisions with local expertise, transparency, and personal attention.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5 font-medium text-charcoal">
              <MapPin size={14} className="text-emerald" />
              Near Bhoor Chauraha, Bulandshahr, Uttar Pradesh
            </span>
            <span className="text-gray-300">&bull;</span>
            <span className="flex items-center gap-1.5 font-medium text-charcoal">
              <Phone size={14} className="text-emerald" />
              +91 8460209025
            </span>
          </div>
        </div>

        {/* Real Office & Founder Showcase (User Photos Only Used Here) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-dark bg-emerald/10 px-3 py-1 rounded-full">
              Authentic Presence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mt-2">
              Our Office &amp; Consultation Desk
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Visit our established physical office in Bulandshahr for direct, one-on-one property discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 1. Outside Office Picture */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col">
              <div className="relative h-[380px] sm:h-[440px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src="/images/about/office-exterior.jpg"
                  alt="Indra Properties & Enterprises Storefront & Signboard, Transport Nagar, Bulandshahr"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald mb-1">
                    <MapPin size={12} />
                    <span>Storefront &amp; Location</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal">
                    Indra Properties &amp; Enterprises Office
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-light">
                    Conveniently located at <strong>Shop No. 251, Near Gate No. 2, Transport Nagar</strong>, 
                    right near <strong>Bhoor Chauraha, Bulandshahr (U.P.)</strong>. Easily accessible for site visits across 
                    Bulandshahr city, the NH bypass, and nearby rural and agricultural corridors.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Location: Bulandshahr (U.P.)</span>
                  <a
                    href="https://maps.google.com/?q=Transport+Nagar+Bulandshahr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald hover:underline"
                  >
                    View on Map &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Owner in Office Picture */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col">
              <div className="relative h-[380px] sm:h-[440px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src="/images/about/owner-office.jpg"
                  alt="Personal Consultation Desk at Indra Properties & Enterprises, Bulandshahr"
                  fill
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald mb-1">
                    <Building2 size={12} />
                    <span>Personal Consultation</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal">
                    Dedicated Guidance &amp; Direct Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-light">
                    Every property transaction represents a significant milestone. At our consultation desk, 
                    clients receive direct personal advice, thorough document reviews, realistic valuation inputs, 
                    and honest assessments for their residential plots, commercial premises, or agricultural lands.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Agency Leadership: Raajeev Sharma</span>
                  <a href="tel:+918460209025" className="font-semibold text-emerald hover:underline">
                    Direct Call &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Introduction & Scope */}
        <div id="agency" className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-14 shadow-sm mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
              Agency Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6">
              Professional Real Estate Assistance Across Sectors
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong>Indra Properties &amp; Enterprises</strong> is a Bulandshahr-based real estate agency 
                and property consultancy helping clients explore residential, commercial, and agricultural properties.
              </p>
              <p>
                Our role is to provide property consultation and assistance throughout the property discovery and transaction 
                process. We help clients evaluate suitable locations, arrange physical inspections, understand on-ground 
                infrastructure such as road width, water and electricity connectivity, and communicate directly with property 
                owners and sellers.
              </p>
              <p>
                Whether you are seeking a residential plot to construct a home in Bulandshahr, looking for fertile agricultural 
                land parcels, or exploring commercial shops, showrooms, or modern apartments in Noida and Greater Noida, 
                our agency offers straightforward, responsive, and trustworthy support.
              </p>
            </div>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100">
            <div className="p-5 bg-warm-white rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-3">
                <Compass size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-charcoal mb-1">
                Property Discovery
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Discovering properties matched to your budget, desired dimensions (Gaj, sq ft, Acres), and locality preferences.
              </p>
            </div>

            <div className="p-5 bg-warm-white rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-3">
                <Layers size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-charcoal mb-1">
                Residential &amp; Commercial
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Comprehensive support for independent houses, builder floors, flats, retail shops, showrooms, and office spaces.
              </p>
            </div>

            <div className="p-5 bg-warm-white rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-3">
                <Trees size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-charcoal mb-1">
                Plots &amp; Agricultural Land
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Careful verification of plot dimensions, corner status, approach roads, irrigation, and revenue registry documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Agency Contact & Consultation CTA */}
        <div className="bg-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-emerald-light text-xs font-bold uppercase tracking-wider block mb-1">
              Connect With Us Today
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Ready to Discuss Your Property Plans?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Visit our office near Bhoor Chauraha, Bulandshahr or reach out directly for immediate guidance.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <span><strong>Phone:</strong> +91 8460209025</span>
              <span>&bull;</span>
              <span><strong>Location:</strong> Near Bhoor Chauraha, Bulandshahr (U.P.)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918460209025"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-light text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <Phone size={15} />
              <span>Call +91 8460209025</span>
            </a>

            <a
              href="https://wa.me/918460209025?text=Hello%20Indra%20Properties%20%26%20Enterprises,%20I%20would%20like%20to%20request%20a%20property%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
            >
              <MessageSquare size={15} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
