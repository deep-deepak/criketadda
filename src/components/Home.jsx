import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import FeaturesSection from './FeaturesSection';
import GetStartedSection from './GetStartedSection';
import Opportunity from './Opportunity';
import FantasyCricketBanner from './FantasyCricketBanner';
import WhatsAppPopup from './WhatsUpModal';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
  // Create refs for each section
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <WhatsAppPopup />
      <Header
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onDownloadClick={() => scrollToSection(downloadRef)}
        onAboutClick={() => scrollToSection(footerRef)}
      />
      <HeroSection />
      <QuoteSection />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <GetStartedSection />
      <Opportunity />
      <div ref={downloadRef}>
        <FantasyCricketBanner />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
