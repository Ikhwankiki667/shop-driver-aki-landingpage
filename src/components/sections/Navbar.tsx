'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Zap, PhoneCall, MessageSquare, Menu, X } from 'lucide-react';
import logoImg from '@/image/Logo.png';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

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
      rootMargin: '-15% 0px -45% 0px',
      threshold: 0.1,
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
      return 'bg-white border-b border-gray-200/60 gpu-layer';
    }
    return 'bg-white border-b border-gray-200 shadow-sm gpu-layer';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getAdaptiveNavbarStyle()}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo inside Container */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
          <div className="bg-white rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm inline-flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform shrink-0">
            <Image
              src={logoImg}
              alt="Shop Drive Aki - Layanan Ganti Aki Mobil 24 Jam"
              height={32}
              priority
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-black text-sm sm:text-xl lg:text-2xl tracking-tight text-slate-900 font-display uppercase leading-none">
                SHOP <span className="text-[#DC2626]">DRIVE AKI</span>
              </span>
              <span className="bg-[#DC2626] text-white text-[9px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded shrink-0">
                24 JAM
              </span>
            </div>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold mt-0.5 hidden sm:block">
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
                onClick={() => setActiveSection(link.sectionId)}
                className={`relative whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-colors py-1 ${
                  isActive
                    ? 'text-[#DC2626] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#DC2626] after:shadow-[0_0_8px_rgba(220,38,38,0.5)]'
                    : 'text-slate-700 hover:text-[#DC2626]'
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
              className="px-5 py-2.5 text-xs font-bold rounded-full shadow-md shadow-red-500/20"
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
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-[#DC2626] hover:bg-slate-100 focus:outline-none ml-auto"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#DC2626] bg-red-50 border-l-4 border-[#DC2626]'
                    : 'text-slate-700 hover:text-[#DC2626] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3">
            <div className="w-full">
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => WhatsAppService.openEmergencyWhatsAppWithGPS()}
                className="px-3 py-2.5 text-xs font-bold"
                leftIcon={<WhatsAppIcon className="w-4 h-4 text-emerald-600" />}
              >
                WhatsApp
              </Button>
            </div>
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
