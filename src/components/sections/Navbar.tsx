'use client';

import React, { useState, useEffect } from 'react';
import { Zap, PhoneCall, MessageSquare, Menu, X } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'BERANDA', href: '#hero', sectionId: 'hero' },
    { label: 'CARA KERJA', href: '#how-it-works', sectionId: 'how-it-works' },
    { label: 'AREA LAYANAN', href: '#coverage', sectionId: 'coverage' },
    { label: 'TESTIMONI', href: '#testimonials', sectionId: 'testimonials' },
    { label: 'FAQ', href: '#faq', sectionId: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section IntersectionObserver
    const sectionIds = navLinks.map((link) => link.sectionId);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Section-dependent adaptive navbar background styles
  const getAdaptiveNavbarStyle = () => {
    if (!isScrolled) {
      return 'bg-gradient-to-b from-[#0D0D0F] via-[#0D0D0F]/90 to-transparent border-b border-transparent';
    }

    switch (activeSection) {
      case 'hero':
        return 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#D91E2B]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]';
      case 'how-it-works':
        return 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#D91E2B]/50 shadow-[0_10px_30px_rgba(217,30,43,0.15)]';
      case 'coverage':
        return 'bg-[#131315]/95 backdrop-blur-md border-b border-[#FF9500]/40 shadow-[0_10px_30px_rgba(255,149,0,0.15)]';
      case 'testimonials':
        return 'bg-[#131315]/95 backdrop-blur-md border-b border-[#D91E2B]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]';
      case 'faq':
        return 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#D91E2B]/50 shadow-[0_10px_30px_rgba(217,30,43,0.15)]';
      default:
        return 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#D91E2B]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getAdaptiveNavbarStyle()}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo inside White Badge Container & Title */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="bg-white rounded-lg px-2 py-1 shadow-md inline-flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/logoputih.jpeg"
              alt="ShopDrive Logo"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white font-display uppercase leading-none">
                SHOP<span className="text-[#D91E2B]">DRIVE</span>
              </span>
              <span className="bg-[#D91E2B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                24H
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold mt-0.5 hidden sm:block">
              24-Hour Battery Rescue
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Adaptive Active State Indicator */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-colors py-1 ${
                  isActive
                    ? 'text-[#D91E2B] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#D91E2B] after:shadow-[0_0_8px_#D91E2B]'
                    : 'text-zinc-300 hover:text-[#D91E2B]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Action CTA Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href={WhatsAppService.buildPhoneCallUrl()}>
            <Button
              variant="primary"
              size="sm"
              className="px-5 py-2.5 text-xs font-bold rounded-full shadow-[0_0_20px_rgba(217,30,43,0.5)]"
              leftIcon={<PhoneCall className="w-4 h-4 fill-white text-white" />}
              beaconGlow
            >
              Panggil Sekarang
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-[#D91E2B] hover:bg-[#1A1A1D] focus:outline-none ml-auto"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0F] border-b border-[#D91E2B]/40 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#D91E2B] bg-[#1A1A1D] border-l-4 border-[#D91E2B]'
                    : 'text-gray-200 hover:text-[#D91E2B] hover:bg-[#1A1A1D]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-3">
            <a href={WhatsAppService.buildEmergencyCallUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" fullWidth className="px-3 py-2.5 text-xs font-bold" leftIcon={<MessageSquare className="w-4 h-4 text-[#FF9500]" />}>
                WhatsApp
              </Button>
            </a>
            <a href={WhatsAppService.buildPhoneCallUrl()}>
              <Button variant="primary" size="sm" fullWidth className="px-3 py-2.5 text-xs font-bold" leftIcon={<PhoneCall className="w-4 h-4 fill-white text-white" />}>
                Panggil SOS
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
