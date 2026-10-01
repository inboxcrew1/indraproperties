import Link from 'next/link'
import {
  Home,
  LayoutDashboard,
  Layers,
  PlusSquare,
  MessageSquare,
  Heart,
  Settings,
  ShieldCheck,
  LogOut,
  ArrowLeft,
} from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-warm-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-5 shadow-sm">
        <div>
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center">
              <Home size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-emerald">Ghar</span>
              <span className="text-charcoal">Dhundo</span>
            </span>
          </Link>

          {/* User Profile Card */}
          <div className="p-3 bg-gray-50 rounded-xl mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center font-bold text-sm">
              R
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-charcoal truncate">Rahul Sharma</div>
              <div className="text-[10px] text-emerald font-semibold uppercase flex items-center gap-1">
                <ShieldCheck size={11} /> Verified Owner
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-semibold">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald/10 text-emerald"
            >
              <LayoutDashboard size={16} />
              <span>Overview</span>
            </Link>

            <Link
              href="/my-listings"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-charcoal transition-colors"
            >
              <Layers size={16} />
              <span>My Listings</span>
            </Link>

            <Link
              href="/post-property"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-emerald font-bold hover:bg-emerald/5 transition-colors"
            >
              <PlusSquare size={16} />
              <span>Post New Property</span>
            </Link>

            <Link
              href="/enquiries"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-charcoal transition-colors"
            >
              <MessageSquare size={16} />
              <span>Buyer Enquiries</span>
            </Link>

            <Link
              href="/saved"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-charcoal transition-colors"
            >
              <Heart size={16} />
              <span>Saved Properties</span>
            </Link>

            <Link
              href="/admin"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-charcoal transition-colors"
            >
              <ShieldCheck size={16} />
              <span>Admin Verification</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Exit */}
        <div className="pt-6 border-t border-gray-100 space-y-2 text-xs font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-charcoal p-2 rounded-lg"
          >
            <ArrowLeft size={14} />
            <span>Back to Marketplace</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 text-red-500 hover:text-red-700 p-2 rounded-lg"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
