'use client';

import React, { useState } from 'react';
import { MapPin, Search, Clock, Users, Zap, MessageSquare } from 'lucide-react';
import { mockServiceAreas } from '../../data/mockData';
import { RegionCategory } from '../../types';
import { LocationService } from '../../services/LocationService';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ServiceArea: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionCategory>('JABODETABEK');
  const [searchQuery, setSearchQuery] = useState('');

  const regionTabs: { label: string; value: RegionCategory; count: number }[] = [
    {
      label: 'Jabodetabek',
      value: 'JABODETABEK',
      count: mockServiceAreas.filter((a) => a.region === 'JABODETABEK').length,
    },
    {
      label: 'Jawa & Bali',
      value: 'JAWA_BALI',
      count: mockServiceAreas.filter((a) => a.region === 'JAWA_BALI').length,
    },
    {
      label: 'Luar Jawa',
      value: 'LUAR_JAWA',
      count: mockServiceAreas.filter((a) => a.region === 'LUAR_JAWA').length,
    },
    {
      label: 'Semua Kota',
      value: 'ALL',
      count: mockServiceAreas.length,
    },
  ];

  const filteredAreas = LocationService.filterAreas(mockServiceAreas, selectedRegion, searchQuery);

  const handleCallArea = (cityName: string) => {
    const customMessage = `Halo ShopDrive, saya butuh bantuan aki mobil darurat di area ${cityName}.`;
    const phone = '6281234567890';
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="coverage" className="py-24 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with 1 Global Emergency Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="emergency" pulse leftIcon={<Zap className="w-3.5 h-3.5 fill-[#E63946]" />}>
              Siaga 24 Jam di Seluruh Kota Terdaftar
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Area Layanan <span className="text-[#E63946]">Seluruh Indonesia</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Teknisi bersertifikat kami siap meluncur ke rumah, kantor, atau jalan tol dalam waktu kurang dari 10-15 menit.
          </p>
        </div>

        {/* Region Tabs & Search Bar */}
        <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-zinc-800 mb-10 space-y-6">
          
          {/* Region Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-zinc-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E63946]" /> Pilih Wilayah:
            </span>
            <div className="flex flex-wrap gap-2">
              {regionTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedRegion(tab.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    selectedRegion === tab.value
                      ? 'bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]'
                      : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    selectedRegion === tab.value ? 'bg-[#0D0D0F] text-[#E63946]' : 'bg-zinc-800 text-zinc-300'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama kota atau kecamatan Anda (contoh: Jakarta Selatan, BSD, Bandung, Surabaya)..."
              className="w-full bg-[#0D0D0F] border border-zinc-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#E63946] transition-colors text-sm sm:text-base font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Clean Symmetric City Cards Grid */}
        {filteredAreas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAreas.map((area) => (
              <div
                key={area.id}
                className="p-4 sm:p-5 rounded-xl bg-[#1A1A1D] border border-zinc-800 hover:border-[#E63946]/50 transition-all duration-300 flex items-center justify-between gap-4 group hover:shadow-[0_0_20px_rgba(230,57,70,0.15)]"
              >
                {/* Left: City Info */}
                <div className="min-w-0 flex-1 space-y-1">
                  <h4 className="font-extrabold text-base text-white font-display uppercase tracking-wide truncate group-hover:text-[#E63946] transition-colors">
                    {area.city}
                  </h4>
                  
                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#E63946]" /> &lt;{area.estimatedTimeMinutes} Min
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 shrink-0">
                      <Users className="w-3.5 h-3.5 text-emerald-400" /> {area.techniciansCount} Teknisi
                    </span>
                  </div>
                </div>

                {/* Right: Fixed Panggil WA Button */}
                <button
                  onClick={() => handleCallArea(area.city)}
                  className="shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30 hover:bg-[#E63946] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Panggil</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#1A1A1D] rounded-2xl border border-zinc-800 space-y-3">
            <MapPin className="w-10 h-10 text-[#E63946] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-white font-display uppercase">
              Kota &ldquo;{searchQuery}&rdquo; Tidak Ditemukan Di Tab Ini
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
              Coba pilih tab &ldquo;Semua Kota&rdquo; atau hubungi CS kami via WA untuk konfirmasi teknisi di posisi Anda saat ini.
            </p>
            <button
              onClick={() => {
                setSelectedRegion('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#E63946] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors"
            >
              Lihat Semua Kota
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1A1A1D] via-[#201F21] to-[#1A1A1D] border border-[#E63946]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-extrabold text-xl sm:text-2xl text-white font-display uppercase">
              Butuh Pemasangan Di Luar Area Terdaftar?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Armada teknisi ShopDrive siap melayani panggilan khusus antar kota dan area tol. Hubungi hotline emergency 24 Jam kami sekarang.
            </p>
          </div>
          <a
            href={WhatsAppService.buildEmergencyCallUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button variant="primary" size="md" fullWidth leftIcon={<Zap className="w-4 h-4 fill-white text-white" />}>
              Panggil Teknisi SOS Now
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
