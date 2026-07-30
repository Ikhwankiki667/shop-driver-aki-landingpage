import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { HowItWorks } from '../components/sections/HowItWorks';
import { BrandLogos } from '../components/sections/BrandLogos';
import { ServiceArea } from '../components/sections/ServiceArea';
import { Documentation } from '../components/sections/Documentation';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/sections/Footer';
import { MobileStickyCTA } from '../components/common/MobileStickyCTA';
import { FloatingEmergencyButton } from '../components/common/FloatingEmergencyButton';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'ShopDrive 24H Battery Rescue',
    description: 'Layanan Antar Pasang Aki Mobil Darurat 24 Jam',
    url: 'https://shopdriveaki.com',
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: 'Indonesia',
    telephone: '+6281234567890',
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Urgency & Dual CTAs */}
      <Hero />

      {/* Speed & Trust Bar */}
      <TrustBar />

      {/* How It Works (4-Step Mechanical Process) */}
      <HowItWorks />

      {/* Available Battery Brands Grid */}
      <BrandLogos />

      {/* Service Coverage Area Search */}
      <ServiceArea />

      {/* Field Installation Documentation */}
      <Documentation />

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
