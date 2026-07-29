'use client';

import React from 'react';
import { PhoneCall, MapPin, Zap, ShieldCheck, Clock, Award, Star, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0D0D0F]">
      {/* Background Hero Image with Hazard Light Glow & Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/90 to-[#0D0D0F]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,30,43,0.2),transparent_65%)] pointer-events-none" />
      
      {/* Diagonal Speed Lines Motif */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D91E2B 0, #D91E2B 2px, transparent 0, transparent 24px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D91E2B]/15 border border-[#D91E2B]/50 text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(217,30,43,0.3)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D91E2B] animate-ping" />
                <span>🔴 SIAGA 24 JAM • BANTUAN DARURAT AKI MOBIL</span>
              </div>
            </div>

            {/* Industrial Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide font-display leading-[1.1]">
                Mobil Mogok Karena <br />
                <span className="text-[#D91E2B]">
                  Aki Tekor?
                </span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                Solusi cepat saat mobil mogok karena aki tekor. Tim <strong className="text-white font-bold">ShopDrive</strong> siap menghubungkan Anda dengan jaringan teknisi partner terdekat untuk antar dan pasang aki original bergaransi resmi langsung di lokasi Anda.
              </p>
            </div>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WhatsAppService.buildEmergencyCallUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="xl"
                  fullWidth
                  beaconGlow
                  className="rounded-xl font-black"
                  leftIcon={<PhoneCall className="w-6 h-6 fill-white text-white" />}
                >
                  PANGGIL BANTUAN SEKARANG
                </Button>
              </a>

              <a href="#coverage" className="w-full sm:w-auto">
                <Button
                  variant="amberOutline"
                  size="xl"
                  fullWidth
                  className="rounded-xl font-bold"
                  leftIcon={<MapPin className="w-5 h-5 text-[#FF9500]" />}
                >
                  CEK AREA LAYANAN
                </Button>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A1D]/60 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#D91E2B]/15 border border-[#D91E2B]/40 flex items-center justify-center text-[#D91E2B] shrink-0">
                  <Award className="w-5 h-5 text-[#D91E2B]" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm font-display uppercase tracking-wider">Aki GS Astra Original</div>
                  <div className="text-zinc-400 text-[11px]">100% Segel Pabrik</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A1D]/60 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#D91E2B]/15 border border-[#D91E2B]/40 flex items-center justify-center text-[#D91E2B] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#D91E2B]" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm font-display uppercase tracking-wider">Garansi Resmi s/d 2 Tahun</div>
                  <div className="text-zinc-400 text-[11px]">Klaim Mudah 24H</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A1D]/60 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-[#D91E2B]/15 border border-[#D91E2B]/40 flex items-center justify-center text-[#D91E2B] shrink-0">
                  <Clock className="w-5 h-5 text-[#D91E2B]" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm font-display uppercase tracking-wider">Bayar Setelah Terpasang</div>
                  <div className="text-zinc-400 text-[11px]">Cash / QRIS / Transfer</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Industrial Visual Card / Battery Rescue Unit */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#1A1A1D] to-[#131315] p-6 sm:p-8 border border-[#D91E2B]/40 shadow-[0_0_40px_rgba(217,30,43,0.25)]">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400">
                    🟢 TEKNISI PARTNER SIAGA LOKASI
                  </span>
                </div>
                <Badge variant="red">SIAGA 24H</Badge>
              </div>

              {/* Central Graphic Box */}
              <div className="relative rounded-xl bg-[#0D0D0F] p-5 border border-zinc-800 text-center mb-5 overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                  <Zap className="w-32 h-32 text-[#D91E2B]" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block p-3 rounded-full bg-[#D91E2B]/15 border border-[#D91E2B]/40 mb-2 text-[#D91E2B]">
                    <Zap className="w-8 h-8 fill-[#D91E2B]" />
                  </div>
                  <h3 className="font-extrabold text-xl text-white font-display uppercase tracking-wide">
                    GS ASTRA ORIGINAL
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 font-mono">
                    Ready Stock Semua Tipe (NS40, NS60, 55D23L, DIN 74, dll)
                  </p>
                </div>
              </div>

              {/* Quick Value Proposition Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                <div className="flex items-center gap-2.5 py-1.5 border-b border-zinc-800/60">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="font-semibold text-white">Aki GS Astra Original 100% Segel Pabrik</span>
                </div>
                <div className="flex items-center gap-2.5 py-1.5 border-b border-zinc-800/60">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="font-semibold text-white">Bebas Biaya Antar &amp; Pasang di Tempat</span>
                </div>
                <div className="flex items-center gap-2.5 py-1.5 border-b border-zinc-800/60">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="font-semibold text-white">Gratis Pengecekan Kelistrikan &amp; Alternator</span>
                </div>
                <div className="flex items-center gap-2.5 py-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="font-semibold text-white">Garansi Resmi Hingga 2 Tahun</span>
                </div>
              </div>

              {/* Payment Assurance Banner (Single CTA Focus on Left) */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#0D0D0F] border border-zinc-800 text-center shadow-inner">
                <span className="text-xs font-mono font-bold text-zinc-300 flex items-center justify-center gap-1.5">
                  💳 Bayar di Tempat (Cash / QRIS / Transfer) Setelah Terpasang
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
