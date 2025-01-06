import React from 'react'
import HeroSection from './HeroSection'
import QuoteSection from './QuoteSection'
import FeaturesSection from './FeaturesSection'
import GetStartedSection from './GetStartedSection'
import Opportunity from './Opportunity'
import FantasyCricketBanner from './FantasyCricketBanner'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <FeaturesSection />
      <GetStartedSection />
      <Opportunity />
      <FantasyCricketBanner />
    </div>
  )
}
