'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, Lock, Mail, Phone, ArrowRight, ShieldCheck, User } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<'buyer' | 'owner' | 'agent' | 'developer'>('buyer')
  const [loginMethod, setLoginMethod] = useState<'email' | 'otp'>('email')
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login and redirect to dashboard
    localStorage.setItem(
      'smnp_user',
      JSON.stringify({
        id: 'usr-123',
        name: emailOrPhone.split('@')[0] || 'Rahul Sharma',
        role,
        isLoggedIn: true,
      })
    )
    router.push('/dashboard')
  }

  const handleSendOtp = () => {
    if (emailOrPhone.trim()) setOtpSent(true)
  }

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 max-w-md w-full shadow-xl">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group" aria-label="Shree Maruti Nandan Properties Home">
            <img
              src="/images/logo.png"
              alt="Shree Maruti Nandan Properties"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
          <h1 className="font-display text-2xl font-bold text-charcoal">
            Welcome Back
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Access your saved properties, active listings, and buyer inquiries
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-4 gap-1 bg-gray-50 p-1 rounded-xl mb-6 text-[11px] font-semibold">
          {[
            { id: 'buyer', label: 'Buyer' },
            { id: 'owner', label: 'Owner' },
            { id: 'agent', label: 'Agent' },
            { id: 'developer', label: 'Builder' },
          ].map(r => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id as any)}
              className={`py-2 rounded-lg transition-all ${
                role === r.id ? 'bg-white text-emerald shadow-sm font-bold' : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Email or 10-Digit Mobile Number
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

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-charcoal">Password</label>
              <Link href="/forgot-password" className="text-xs text-emerald hover:underline">
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              required
              placeholder="Enter your secure password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all mt-2"
          >
            Sign In to {role.toUpperCase()} Portal
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          <span>Don&apos;t have an account? </span>
          <Link href="/register" className="font-semibold text-emerald hover:underline">
            Register Free
          </Link>
        </div>
      </div>
    </div>
  )
}
