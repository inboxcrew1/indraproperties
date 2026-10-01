'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 max-w-md w-full shadow-xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-emerald rounded-xl flex items-center justify-center shadow-sm">
              <Home size={22} className="text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-emerald">Ghar</span>Dhundo
            </span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-charcoal">
            Password Recovery
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Enter your registered email or mobile to receive password reset instructions
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-semibold text-charcoal text-base">
              Reset Link &amp; OTP Dispatched
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We have sent recovery credentials to <strong className="text-charcoal">{emailOrPhone}</strong>. Check your inbox and follow the secure link.
            </p>
            <div className="pt-4">
              <Link
                href="/login"
                className="inline-block px-6 py-2.5 bg-emerald text-white rounded-xl text-xs font-semibold hover:bg-emerald-dark"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Registered Email or Mobile Number
              </label>
              <input
                type="text"
                required
                placeholder="e.g. rahul@example.com or 9876543210"
                value={emailOrPhone}
                onChange={e => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Send Password Reset Link
            </button>

            <div className="text-center pt-2">
              <Link href="/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-charcoal">
                <ArrowLeft size={13} /> Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
