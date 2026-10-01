import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2, Lock, Eye, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketplace Safety & Legal Verification Guidelines | Indra Properties & Enterprises',
  description: 'Practical guide to safe real estate transactions in India. Title verification, sub-registrar document checks, RERA approvals, and fraud prevention.',
}

export default function SafetyPage() {
  const guidelines = [
    {
      title: 'Inspect Original Sub-Registrar Documents',
      description: 'Always examine the original registered sale deed (Bainama), mutation records (Dakhil Kharij), and non-encumbrance certificate (Bar-e-Rehn) from the local sub-registrar office before paying token money.',
      icon: FileText,
    },
    {
      title: 'Avoid Advance Payments Without Physical Inspection',
      description: 'Never transfer booking amounts or advance token payments without physically visiting the exact property boundaries, verifying road access, and meeting the legitimate registered owner in person.',
      icon: AlertTriangle,
    },
    {
      title: 'Verify Ground Dimensions in Native Units',
      description: 'Ensure the physical plot frontage, depth, and road width match the registered dimensions in Gaj or square meters. Confirm demarcations with official patwari or revenue authorities for agricultural land.',
      icon: Eye,
    },
    {
      title: 'Check RERA Registration for New Projects',
      description: 'For apartments and plotted developments under construction, verify the project RERA registration number directly on the state portal (UP-RERA or HRERA) to confirm sanctioned layout plans.',
      icon: Building,
    },
    {
      title: 'Beware of Phishing & Fake Callers',
      description: 'Indra Properties & Enterprises never asks for bank OTPs, credit card numbers, or advance courier fees over telephone calls. Only engage with verified advertisers on our platform.',
      icon: Lock,
    },
  ]

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck size={14} />
            <span>Buyer &amp; Investor Protection</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
            Marketplace Safety &amp; Legal Verification
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Essential guidelines for verifying titles, avoiding fraud, and conducting lawful property transactions across India.
          </p>
        </div>

        <div className="space-y-6">
          {guidelines.map((g, idx) => {
            const Icon = g.icon
            return (
              <div
                key={g.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald uppercase tracking-wider">
                    Rule 0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-charcoal mt-1 mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {g.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-8 bg-emerald/10 border border-emerald/20 rounded-2xl text-center">
          <h3 className="font-display text-xl font-bold text-charcoal mb-2">
            Have questions about a listing?
          </h3>
          <p className="text-xs text-gray-600 mb-4 max-w-md mx-auto">
            Our legal compliance team reviews advertiser authenticity daily. If you suspect any fraudulent listing, report it immediately.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-2.5 bg-emerald text-white rounded-xl text-xs font-bold hover:bg-emerald-dark transition-colors"
          >
            Contact Grievance Officer
          </Link>
        </div>
      </div>
    </div>
  )
}
