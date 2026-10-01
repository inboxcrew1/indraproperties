'use client'

import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Building2,
  CheckCircle2,
  Clock,
  Send,
} from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Residential Plot',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3.5 py-1.5 rounded-full mb-4">
            <Building2 size={13} />
            <span>Get In Touch</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            Contact Indra Properties &amp; Enterprises
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            We are here to assist with all your residential, commercial and agricultural property inquiries in Bulandshahr and surrounding areas.
          </p>
        </div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Call Us */}
          <a
            href="tel:+918460209025"
            className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:border-emerald hover:shadow-card-hover transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call Us</p>
              <p className="text-sm sm:text-base font-bold text-charcoal mt-0.5">+91 8460209025</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918460209025?text=Hello%20Indra%20Properties%20%26%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:border-emerald hover:shadow-card-hover transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
              <MessageSquare size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</p>
              <p className="text-sm sm:text-base font-bold text-emerald mt-0.5">Chat on WhatsApp</p>
            </div>
          </a>

          {/* Office Location */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location</p>
              <p className="text-xs sm:text-sm font-bold text-charcoal mt-0.5 leading-snug">
                Near Bhoor Chauraha, Bulandshahr
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-16">
          {/* Agency Details Card */}
          <div className="lg:col-span-5 bg-charcoal text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="mb-4">
                <img
                  src="/images/logo-white.png"
                  alt="Indra Properties & Enterprises - For Your Generation"
                  className="h-8 sm:h-9 w-auto max-h-9 object-contain"
                />
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6 font-light">
                Professional real estate agency and property consultancy assisting clients across Bulandshahr and surrounding NCR regions.
              </p>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-emerald-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Registered Agency Office:</p>
                    <p className="text-gray-300">Near Bhoor Chauraha</p>
                    <p className="text-gray-400 text-[11px]">Shop No. 251, Near Gate No. 2, Transport Nagar</p>
                    <p className="text-gray-300">Bulandshahr, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-light flex-shrink-0" />
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    <a href="tel:+918460209025" className="text-white font-medium hover:text-emerald-light">
                      +91 8460209025
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-emerald-light flex-shrink-0" />
                  <div>
                    <span className="text-gray-400">WhatsApp: </span>
                    <a
                      href="https://wa.me/918460209025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-light font-medium hover:underline"
                    >
                      +91 8460209025
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock size={16} className="text-emerald-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Consultation Hours:</p>
                    <p className="text-gray-400">Monday &ndash; Sunday: 9:00 AM &ndash; 7:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-gray-400">
              Accompanied site visits are arranged with prior appointment.
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Enquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Indra Properties &amp; Enterprises. A property consultant will call you at{' '}
                  <strong className="text-charcoal">{formData.phone || 'your number'}</strong> to discuss your requirement.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-charcoal rounded-xl text-xs font-semibold transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-xl text-charcoal mb-4">
                  Send a Consultation Enquiry
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald bg-white"
                    >
                      <option value="Residential Plot">Residential Plot</option>
                      <option value="Independent House">Independent House</option>
                      <option value="Flat / Apartment">Flat / Apartment</option>
                      <option value="Commercial Shop">Commercial Shop</option>
                      <option value="Commercial Showroom">Commercial Showroom</option>
                      <option value="Agricultural Land">Agricultural Land</option>
                      <option value="Rental Property">Rental Property</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald bg-white"
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 7:30 PM)">Evening (4 PM - 7:30 PM)</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Requirement Details / Location
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your property requirement, preferred budget, or locality..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-emerald"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs sm:text-sm font-bold shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section 30 & 39: Find Us On Map */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                Interactive Map
              </span>
              <h3 className="font-display font-bold text-2xl text-charcoal mt-2">
                Find Indra Properties &amp; Enterprises
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Near Bhoor Chauraha / Transport Nagar, Bulandshahr, Uttar Pradesh
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Transport+Nagar+Bhoor+Chauraha+Bulandshahr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-charcoal hover:border-emerald hover:text-emerald transition-colors"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* OpenStreetMap iframe */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="Indra Properties & Enterprises Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.838%2C28.395%2C77.868%2C28.418&amp;layer=mapnik&amp;marker=28.405%2C77.852"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
