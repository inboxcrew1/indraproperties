'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  if (subscribed) {
    return (
      <div className="flex items-center justify-center gap-2 text-emerald-light bg-emerald/20 px-6 py-3 rounded-xl max-w-md mx-auto text-xs font-semibold border border-emerald/30">
        <CheckCircle2 size={16} />
        <span>Thank you for subscribing to Shree Maruti Nandan Properties Property Intelligence!</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-emerald"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}
