import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Catalog } from '../components/sections/Catalog';
import { ServiceArea } from '../components/sections/ServiceArea';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/sections/Footer';
import { MobileStickyCTA } from '../components/common/MobileStickyCTA';
import { FloatingEmergencyButton } from '../components/common/FloatingEmergencyButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0F] text-[#E5E1E4] selection:bg-[#FF9500] selection:text-[#0D0D0F]">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Urgency & Dual CTAs */}
      <Hero />

      {/* Speed & Trust Bar */}
      <TrustBar />

      {/* How It Works (4-Step Mechanical Process) */}
      <HowItWorks />

      {/* GS Astra & Amaron Battery Catalog */}
      <Catalog />

      {/* Service Coverage Area Search */}
      <ServiceArea />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Industrial Footer */}
      <Footer />

      {/* Common Floating & Sticky Actions */}
      <MobileStickyCTA />
      <FloatingEmergencyButton />
    </main>
  );
}
