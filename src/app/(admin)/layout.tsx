import Link from 'next/link'
import { Home, ShieldCheck, ArrowLeft, Layers, Users, CheckCircle2 } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Admin Top Header */}
      <header className="bg-charcoal text-white py-4 px-6 border-b border-charcoal-800">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center">
                <Home size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-emerald-light">Ghar</span>Dhundo
              </span>
            </Link>
            <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded text-gold font-semibold uppercase tracking-wider">
              Administration Portal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/dashboard" className="text-gray-300 hover:text-white">
              User Dashboard
            </Link>
            <Link href="/" className="text-emerald-light hover:underline flex items-center gap-1">
              <ArrowLeft size={13} />
              <span>Back to Marketplace</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto p-6 sm:p-10">
        {children}
      </main>
    </div>
  )
}
