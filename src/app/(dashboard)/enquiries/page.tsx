'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react'

interface EnquiryItem {
  id: string
  propertyTitle: string
  senderName: string
  senderPhone: string
  senderEmail?: string
  message: string
  createdAt: string
  preferredTime?: string
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('smnp_enquiries') || '[]')
      const demoEnquiries: EnquiryItem[] = [
        {
          id: 'demo-1',
          propertyTitle: '250 Gaj Residential Plot in Sector 65 Bulandshahr',
          senderName: 'Vikas Chandra',
          senderPhone: '9810234567',
          senderEmail: 'vikas.c@example.com',
          message: 'Is the title deed clear freehold? Can we schedule a meeting at the site location this Sunday morning?',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          preferredTime: 'morning',
        },
        {
          id: 'demo-2',
          propertyTitle: 'Luxury 3 BHK Apartment in Sector 150 Noida',
          senderName: 'Deepak Mehrotra',
          senderPhone: '9873011223',
          senderEmail: 'deepak.m@example.com',
          message: 'Interested in the corner facing unit. What are the monthly society maintenance charges?',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          preferredTime: 'evening',
        },
      ]
      setEnquiries([...stored, ...demoEnquiries])
    } catch {
      // fallback
    }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
          Buyer Leads &amp; Direct Enquiries
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review potential buyers and schedule site visits directly
        </p>
      </div>

      <div className="space-y-4">
        {enquiries.map(enq => (
          <div
            key={enq.id}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-emerald/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 min-w-0 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-bold text-charcoal text-base">{enq.senderName}</span>
                <span className="text-xs text-gray-400">&bull; +91 {enq.senderPhone}</span>
                {enq.preferredTime && (
                  <span className="text-[10px] text-emerald bg-emerald/10 px-2 py-0.5 rounded-full font-semibold capitalize">
                    Prefers: {enq.preferredTime}
                  </span>
                )}
              </div>

              <div className="text-xs font-semibold text-emerald">
                Property: {enq.propertyTitle}
              </div>

              <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 italic">
                &ldquo;{enq.message}&rdquo;
              </p>

              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {new Date(enq.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                {enq.senderEmail && (
                  <span className="flex items-center gap-1">
                    <Mail size={11} /> {enq.senderEmail}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <a
                href={`tel:+91${enq.senderPhone}`}
                className="px-4 py-2 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Phone size={13} />
                <span>Call Buyer</span>
              </a>
              <a
                href={`https://wa.me/91${enq.senderPhone}?text=${encodeURIComponent(
                  `Hi ${enq.senderName}, thank you for your enquiry regarding "${enq.propertyTitle}" on Shree Maruti Nandan Properties.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-xl text-xs font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
