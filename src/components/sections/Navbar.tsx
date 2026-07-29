'use client';

import React, { useState, useEffect } from 'react';
import { Zap, PhoneCall, MessageSquare, Menu, X } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'BERANDA', href: '#hero' },
    { label: 'CARA KERJA', href: '#how-it-works' },
    { label: 'KATALOG', href: '#catalog' },
    { label: 'AREA LAYANAN', href: '#coverage' },
    { label: 'TESTIMONI', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#E63946]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-[#0D0D0F] via-[#0D0D0F]/80 to-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none mr-8 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#E63946] flex items-center justify-center text-white shadow-[0_0_15px_rgba(230,57,70,0.5)] group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6 fill-white text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-wider text-white font-display uppercase leading-none">
                SHOP<span className="text-[#E63946]">DRIVE</span>
              </span>
              <span className="bg-[#E63946] text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                24H
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold mt-0.5">
              Emergency Battery Rescue
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-semibold tracking-wider text-gray-300 hover:text-[#E63946] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Action Buttons (Red SOS & Chat WA) */}
        <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
          <a href={WhatsAppService.buildEmergencyCallUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="sm"
              className="px-4 py-2 text-xs font-bold rounded-lg border-[#E63946]/30 hover:border-[#E63946]"
              leftIcon={<MessageSquare className="w-3.5 h-3.5 text-[#E63946]" />}
            >
              Chat WA 24H
            </Button>
          </a>
          <a href={WhatsAppService.buildPhoneCallUrl()}>
            <Button
              variant="emergency"
              size="sm"
              className="px-4 py-2 text-xs font-bold rounded-lg"
              leftIcon={<PhoneCall className="w-3.5 h-3.5" />}
              beaconGlow
            >
              Panggil SOS
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-[#E63946] hover:bg-[#1A1A1D] focus:outline-none ml-auto"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0F] border-b border-[#E63946]/30 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#E63946] hover:bg-[#1A1A1D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-3">
            <a href={WhatsAppService.buildEmergencyCallUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" fullWidth className="px-3 py-2 text-xs font-bold" leftIcon={<MessageSquare className="w-3.5 h-3.5 text-[#E63946]" />}>
                WhatsApp
              </Button>
            </a>
            <a href={WhatsAppService.buildPhoneCallUrl()}>
              <Button variant="emergency" size="sm" fullWidth className="px-3 py-2 text-xs font-bold" leftIcon={<PhoneCall className="w-3.5 h-3.5" />}>
                Telepon SOS
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
