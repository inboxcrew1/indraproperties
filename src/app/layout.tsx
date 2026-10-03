import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Shree Maruti Nandan Properties',
    default: 'Shree Maruti Nandan Properties | Real Estate Agency & Property Consultant in Bulandshahr',
  },
  description:
    'Explore residential, commercial, agricultural properties, plots, houses, flats and rental properties with Shree Maruti Nandan Properties - your trusted real estate consultant in Bulandshahr and NCR.',
  keywords: [
    'Shree Maruti Nandan Properties',
    'Real estate agent in Bulandshahr',
    'Property dealer in Bulandshahr',
    'Property consultant in Bulandshahr',
    'Plots for sale in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Agricultural land Bulandshahr',
    'Commercial property Bulandshahr',
    'Flats in Noida',
    'Villas in Gurugram',
    'Greater Noida property',
  ],
  openGraph: {
    siteName: 'Shree Maruti Nandan Properties',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-warm-white text-charcoal">
        {children}
      </body>
    </html>
  )
}
