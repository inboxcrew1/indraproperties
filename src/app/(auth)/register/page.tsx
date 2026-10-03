'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ShieldCheck } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [role, setRole] = useState<'buyer' | 'owner' | 'agent' | 'developer'>('buyer')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem(
      'smnp_user',
      JSON.stringify({
        id: `usr-${Date.now()}`,
        name,
        email,
        phone,
        role,
        isLoggedIn: true,
      })
    )
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 max-w-md w-full shadow-xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group" aria-label="Shree Maruti Nandan Properties Home">
            <img
              src="/images/logo.png"
              alt="Shree Maruti Nandan Properties"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
          <h1 className="font-display text-2xl font-bold text-charcoal">
            Create an Account
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Join India&apos;s trusted property marketplace as a buyer, owner, or partner
          </p>
        </div>

        {/* Role Selector */}
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

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikas Sharma"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Mobile Number (+91) *
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="vikas@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Create Password *
            </label>
            <input
              type="password"
              required
              minLength={6}
              placeholder="At least 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all mt-2"
          >
            Create {role.toUpperCase()} Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          <span>Already registered? </span>
          <Link href="/login" className="font-semibold text-emerald hover:underline">
            Sign In here
          </Link>
        </div>
      </div>
    </div>
  )
}
