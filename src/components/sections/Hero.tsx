'use client';

import React from 'react';
import { PhoneCall, MapPin, Zap, ShieldCheck, Clock, Award, Star, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0D0D0F]">
      {/* Background Graphic Patterns & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,57,70,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E63946]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Diagonal Speed Lines Motif */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #E63946 0, #E63946 2px, transparent 0, transparent 20px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Dynamic Urgency Badge */}
            <div className="inline-flex items-center">
              <Badge variant="emergency" pulse leftIcon={<Zap className="w-3.5 h-3.5 fill-[#E63946]" />}>
                Siaga 24 Jam • Seluruh Indonesia • Respon &lt;10 Menit
              </Badge>
            </div>

            {/* Industrial Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide font-display leading-[1.1]">
                Mobil Mogok Karena <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-[#FF4D5A] to-[#FF808B]">
                  Aki Tekor &amp; Soek?
                </span>
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Jangan Panik! Teknisi <strong className="text-white">ShopDrive</strong> siap meluncur ke posisi Anda dalam <span className="text-[#E63946] font-bold">&lt;10 menit</span>. Gratis Ongkir, Pasang di Tempat, Garansi Resmi 24 Bulan!
              </p>
            </div>

            {/* Dual CTAs (Emergency Call & Search Area) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WhatsAppService.buildEmergencyCallUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="emergency"
                  size="xl"
                  fullWidth
                  beaconGlow
                  leftIcon={<PhoneCall className="w-6 h-6" />}
                >
                  Panggil Teknisi Sekarang (24H)
                </Button>
              </a>

              <a href="#coverage" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="xl"
                  fullWidth
                  leftIcon={<MapPin className="w-5 h-5 text-[#E63946]" />}
                >
                  Cek Area Terdekat
                </Button>
              </a>
            </div>

            {/* Trust Badges Bar Under CTAs */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base font-display">Kedatangan &lt;10 Min</div>
                  <div className="text-zinc-400 text-xs">Teknisi Standby 24/7</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base font-display">Garansi 24 Bulan</div>
                  <div className="text-zinc-400 text-xs">Aki 100% Baru &amp; Ori</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base font-display">Tukar Tambah</div>
                  <div className="text-zinc-400 text-xs">Harga Dihargai Tinggi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Industrial Visual Card / Battery Rescue Unit */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#1A1A1D] to-[#131315] p-6 sm:p-8 border border-[#E63946]/40 shadow-[0_0_40px_rgba(230,57,70,0.2)]">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    STATUS: TEKNISI SIAGA LOKASI
                  </span>
                </div>
                <Badge variant="emergency">TUKAR TAMBAH OK</Badge>
              </div>

              {/* Central Graphic Box */}
              <div className="relative rounded-xl bg-[#0D0D0F] p-6 border border-zinc-800 text-center mb-6 overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10">
                  <Zap className="w-32 h-32 text-[#E63946]" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block p-4 rounded-full bg-[#E63946]/10 border border-[#E63946]/40 mb-3 text-[#E63946]">
                    <Zap className="w-10 h-10 fill-[#E63946]" />
                  </div>
                  <h3 className="font-extrabold text-2xl text-white font-display uppercase tracking-wide">
                    GS ASTRA &amp; AMARON
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1">
                    Ready Stock Semua Tipe (NS40, NS60, 55D23L, DIN 74)
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    <Star className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    <Star className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    <Star className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    <Star className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    <span className="text-xs font-bold text-white ml-1">4.9/5 ({siteConfig.stats.satisfiedCustomers} Jamaah)</span>
                  </div>
                </div>
              </div>

              {/* Quick Features List */}
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                  <span className="text-zinc-400">Ongkir &amp; Pemasangan:</span>
                  <span className="font-bold text-emerald-400 uppercase">100% GRATIS</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                  <span className="text-zinc-400">Tes Kelistrikan &amp; Alternator:</span>
                  <span className="font-bold text-emerald-400 uppercase">GRATIS</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-zinc-400">Metode Pembayaran:</span>
                  <span className="font-bold text-white">Cash / QRIS / Transfer di Tempat</span>
                </div>
              </div>

              {/* Call to Action Inside Card */}
              <div className="mt-6">
                <a href={WhatsAppService.buildEmergencyCallUrl()} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" fullWidth leftIcon={<MessageSquare className="w-5 h-5 fill-white text-white" />}>
                    Pesan Aki Siap Antar Sekarang
                  </Button>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
