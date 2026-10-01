'use client'

import { useState } from 'react'
import { X, Send, CheckCircle2, Phone, MessageSquare, Clock } from 'lucide-react'

interface EnquiryModalProps {
  propertyId: string
  propertyTitle: string
  advertiserName: string
  onClose: () => void
}

export default function EnquiryModal({ propertyId, propertyTitle, advertiserName, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: `I am interested in this property "${propertyTitle}". Please share more details and arrange a callback.`,
    preferredTime: 'anytime',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API request and store enquiry in localStorage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('indra_enquiries') || '[]')
        const newEnquiry = {
          id: `enq-${Date.now()}`,
          propertyId,
          propertyTitle,
          senderName: formData.name,
          senderPhone: formData.phone,
          senderEmail: formData.email,
          message: formData.message,
          preferredTime: formData.preferredTime,
          status: 'new',
          createdAt: new Date().toISOString(),
        }
        localStorage.setItem('indra_enquiries', JSON.stringify([newEnquiry, ...stored]))
      } catch (err) {
        console.error(err)
      }
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal">
              Enquire About Property
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate max-w-xs sm:max-w-sm">
              {propertyTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-display text-xl font-bold text-charcoal">
              Enquiry Sent Successfully!
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>. Your enquiry has been delivered directly to <span className="font-semibold text-charcoal">{advertiserName}</span>. They will get in touch shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Mobile Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-xs font-medium text-gray-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-r-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Preferred Call Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald bg-white text-charcoal"
              >
                <option value="anytime">Anytime during business hours</option>
                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Message to Advertiser
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl font-semibold text-sm transition-all shadow-md"
              >
                <Send size={16} />
                <span>{loading ? 'Submitting Enquiry...' : 'Submit Direct Enquiry'}</span>
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center">
              By submitting, you agree to Indra Properties &amp; Enterprises Terms of Service and Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
