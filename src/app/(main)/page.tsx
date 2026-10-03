import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AgencyIntro from '@/components/home/AgencyIntro'
import PropertyTypeGrid from '@/components/home/PropertyTypeGrid'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import BulandshahrFocus from '@/components/home/BulandshahrFocus'
import ResidentialSection from '@/components/home/ResidentialSection'
import PlotsSection from '@/components/home/PlotsSection'
import CommercialSection from '@/components/home/CommercialSection'
import RentalSection from '@/components/home/RentalSection'
import ExploreByLocation from '@/components/home/ExploreByLocation'
import WhyUsSection from '@/components/home/WhyUsSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import HowItWorks from '@/components/home/HowItWorks'
import LocalExpertise from '@/components/home/LocalExpertise'
import ContactCTASection from '@/components/home/ContactCTASection'

export const metadata: Metadata = {
  title: {
    absolute: 'Shree Maruti Nandan Properties | Real Estate Property Dealer in Bulandshahr',
  },
  description:
    'Explore residential, commercial, agricultural properties, plots, houses, flats and rental properties with Shree Maruti Nandan Properties in Bulandshahr and surrounding areas.',
  keywords: [
    'Shree Maruti Nandan Properties',
    'Real estate agent in Bulandshahr',
    'Property dealer in Bulandshahr',
    'Property consultant in Bulandshahr',
    'Plots for sale in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Agricultural land in Bulandshahr',
    'Commercial property in Bulandshahr',
    'Property in Noida',
    'Property in Greater Noida',
    'Property in Delhi',
    'Property in Gurugram',
  ],
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2 & 3: Cinematic Hero & Property Search */}
      <HeroSection />

      {/* 4: Intro to Shree Maruti Nandan Properties ("Your Local Property Partner") */}
      <AgencyIntro />

      {/* 5: Property Categories */}
      <PropertyTypeGrid />

      {/* 6: Featured Properties */}
      <FeaturedProperties />

      {/* 7: Properties in Bulandshahr */}
      <BulandshahrFocus />

      {/* 8: Residential Properties */}
      <ResidentialSection />

      {/* 9: Plots & Land */}
      <PlotsSection />

      {/* 10: Commercial Properties */}
      <CommercialSection />

      {/* 11: Rental Properties */}
      <RentalSection />

      {/* 12: Explore Locations */}
      <ExploreByLocation />

      {/* 13: Why Choose Shree Maruti Nandan Properties */}
      <WhyUsSection />

      {/* 14: Property Buying/Selling Services */}
      <ServicesOverview />

      {/* 15: How It Works */}
      <HowItWorks />

      {/* 16: Local Expertise */}
      <LocalExpertise />

      {/* 17: Contact CTA */}
      <ContactCTASection />
    </div>
  )
}
