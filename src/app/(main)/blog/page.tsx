import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Compass, Award } from 'lucide-react'
import NewsletterSubscription from '@/components/blog/NewsletterSubscription'

export const metadata: Metadata = {
  title: 'Real Estate Blog & Guides | Indian Property Intelligence | Indra Properties & Enterprises',
  description: 'Expert market insights, legal due diligence checklists, land registry guides, and investment analyses for home buyers and plot investors across India.',
}

const articles = [
  {
    slug: 'understanding-land-registry-khatauni-up-ncr',
    title: 'Understanding Land Registry & Khatauni in UP & NCR: The Essential Buyer Checklist',
    excerpt: 'Before paying token money for a residential plot or agricultural parcel in Uttar Pradesh, here are the essential documents - from Khasra numbers to 13-year non-encumbrance records - you must verify.',
    category: 'Legal & Due Diligence',
    readTime: '6 min read',
    date: 'January 28, 2026',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    featured: true,
  },
  {
    slug: 'gaj-sqft-bigha-measurement-guide',
    title: 'Gaj, Sq Ft, and Bigha: Decoding Land Measurements in North India',
    excerpt: 'Demystifying traditional land units used across Delhi-NCR, Bulandshahr, and Haryana. Learn the exact mathematical conversion of 1 Gaj into Square Feet and how Bigha boundaries vary across tehsils.',
    category: 'Land & Plots',
    readTime: '4 min read',
    date: 'January 22, 2026',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
  },
  {
    slug: 'carpet-area-vs-super-builtup-rera-rules',
    title: 'Carpet Area vs. Super Built-up Area: What RERA Mandates for Every Homebuyer',
    excerpt: 'Why you should never buy an apartment based solely on super built-up claims. Here is how RERA protects you and how to audit your builder’s net usable carpet area.',
    category: 'Home Buying',
    readTime: '5 min read',
    date: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    slug: 'jewar-airport-yamuna-expressway-growth-corridors',
    title: 'Jewar International Airport & Yamuna Expressway: 2026 Real Estate Outlook',
    excerpt: 'An in-depth analysis of capital appreciation, industrial hub developments, and plotted township trends surrounding Noida International Airport (DXN) at Jewar.',
    category: 'Market Trends',
    readTime: '7 min read',
    date: 'January 10, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    slug: 'commercial-shops-vs-office-spaces-rental-yield',
    title: 'Commercial Shops vs. High-Street Retail: Where Are the Best Rental Yields in 2026?',
    excerpt: 'Comparing 7-9% yields in high-street retail hubs versus Grade-A corporate office investments across Gurugram Cyber City and Noida Expressway.',
    category: 'Commercial',
    readTime: '5 min read',
    date: 'January 4, 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    slug: 'home-loan-interest-rates-tax-saving-checklist',
    title: 'Home Loan Interest Rates & Section 24(b) Tax Deductions Explained',
    excerpt: 'How to maximize your income tax deductions under Section 80C and Section 24(b) when financing a new residential home in India.',
    category: 'Financing',
    readTime: '5 min read',
    date: 'December 29, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  }
]

export default function BlogPage() {
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            <span>Research &amp; Buyer Guides</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mb-4">
            Property Market Intelligence
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Legal clarity, land measurement tools, regulatory compliance, and regional growth analyses from real estate industry experts.
          </p>
        </div>

        {/* Featured Hero Article */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Featured Guide
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-bold text-emerald uppercase tracking-wider">{featuredArticle.category}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featuredArticle.date}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featuredArticle.readTime}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald hover:text-emerald-dark transition-colors"
                >
                  <span>Explore Associated Real Estate Tools</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="font-display text-2xl font-bold text-charcoal">Recent Articles &amp; Guides</h2>
            <Link href="/tools" className="text-xs font-semibold text-emerald hover:underline">
              Calculate EMI or Gaj &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-emerald/40 hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <Calendar size={11} />
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <Clock size={11} />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-charcoal leading-snug group-hover:text-emerald transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-emerald">
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter / Advisory Signup */}
        <div className="mt-20 bg-charcoal text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald/20 text-emerald-light flex items-center justify-center mx-auto mb-2">
            <Compass size={24} />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Subscribe to NCR &amp; UP Property Updates
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto">
            Receive bi-weekly research reports on new plotted colonies, infrastructure milestones (RRTS, Expressways), and transparent market rates.
          </p>
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  )
}
