'use client';

import React, { useState } from 'react';
import { MapPin, Search, Clock, Users, Zap, MessageSquare } from 'lucide-react';
import { mockServiceAreas } from '../../data/mockData';
import { RegionCategory } from '../../types';
import { LocationService } from '../../services/LocationService';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

interface IMapCity {
  id: string;
  name: string;
  query: string;
  label: string;
}

const mapCities: IMapCity[] = [
  { id: 'indonesia', name: 'Seluruh Indonesia', query: 'Indonesia', label: '🇮🇩 Seluruh Indonesia' },
  { id: 'jabodetabek', name: 'Jabodetabek', query: 'Jakarta, Indonesia', label: '📍 Jabodetabek' },
  { id: 'jawa-bali', name: 'Jawa & Bali', query: 'Surabaya, Indonesia', label: '📍 Jawa & Bali' },
  { id: 'sumatera', name: 'Sumatera', query: 'Medan, Indonesia', label: '📍 Sumatera' },
  { id: 'kalimantan-sulawesi', name: 'Kalimantan & Sulawesi', query: 'Makassar, Indonesia', label: '📍 Kalimantan & Sulawesi' },
  { id: 'papua-nusa', name: 'Papua & Nusa Tenggara', query: 'Jayapura, Indonesia', label: '📍 Papua & Nusa' },
];

export const ServiceArea: React.FC = () => {
  const [activeMapCity, setActiveMapCity] = useState<IMapCity>(mapCities[0]);
  const [selectedRegion, setSelectedRegion] = useState<RegionCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const regionTabs: { label: string; value: RegionCategory }[] = [
    { label: '🇮🇩 Semua Kota', value: 'ALL' },
    { label: '📍 Jabodetabek', value: 'JABODETABEK' },
    { label: '📍 Jawa & Bali', value: 'JAWA_BALI' },
    { label: '📍 Sumatera', value: 'SUMATERA' },
    { label: '📍 Kalimantan & Sulawesi', value: 'KALIMANTAN_SULAWESI' },
    { label: '📍 Nusa Tenggara & Papua', value: 'PAPUA_NUSA' },
  ];

  const filteredAreas = LocationService.filterAreas(mockServiceAreas, selectedRegion, searchQuery);

  const handleCallArea = (cityName: string) => {
    const customMessage = `Halo CS ShopDrive, saya butuh bantuan aki mobil darurat di area ${cityName}.`;
    const phone = siteConfig.brand.whatsAppNumber;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="coverage" className="py-24 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {/* TODO BEFORE LAUNCH: Replace per-city estimated response times, technician counts, and map telemetry with verified live dispatch data */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="emergency" pulse leftIcon={<Zap className="w-3.5 h-3.5 fill-[#D91E2B]" />}>
              🔴 JARINGAN TEKNISI NASIONAL 24/7
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display leading-tight">
            Hadir di Seluruh Indonesia <br className="hidden sm:block" />
            <span className="text-[#D91E2B]">Di Mana Pun Anda Mogok, Kami Siap Meluncur</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Jaringan mitra &amp; teknisi partner ShopDrive tersebar di pulau Jawa, Sumatera, Kalimantan, Sulawesi, Bali, hingga wilayah lainnya di seluruh Indonesia.
          </p>
        </div>

        {/* 2-Column Desktop Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* COLUMN LEFT (7/12 - VISUAL HERO MAP) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[420px] lg:min-h-[500px] w-full rounded-2xl overflow-hidden border border-[#D91E2B]/40 shadow-[0_0_30px_rgba(217,30,43,0.2)] bg-[#1A1A1D] group">
              
              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-lg bg-[#0D0D0F]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-lg flex items-center gap-2 pointer-events-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>🟢 LIVE DISPATCH NETWORK • SELURUH INDONESIA</span>
                </div>
                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-zinc-200 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <span>⚡ 350+ Armada Siaga</span>
                  </div>
                  <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-zinc-200 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <span>📍 45+ Kota Terdaftar</span>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps iFrame */}
              <iframe
                title={`ShopDrive Google Map ${activeMapCity.name}`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(92%) hue-rotate(180deg) contrast(120%) brightness(90%)',
                  minHeight: '420px'
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapCity.query)}&t=&z=${activeMapCity.id === 'indonesia' ? 5 : 11}&ie=UTF8&iwloc=&output=embed`}
              />

              {/* Bottom Indicator Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-2.5 rounded-xl bg-[#0D0D0F]/90 backdrop-blur-md border border-zinc-800 text-xs text-zinc-300 font-mono flex items-center justify-between gap-2 shadow-lg">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-[#D91E2B] shrink-0" />
                  <span className="truncate">Menampilkan lokasi siaga di: <strong className="text-white">{activeMapCity.name}</strong></span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold shrink-0">READY 24H</span>
              </div>

            </div>
          </div>

          {/* COLUMN RIGHT (5/12 - INSTANT LOCATION CHECKER) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl bg-[#18181B] border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl">
              
              {/* Header */}
              <div className="space-y-1.5">
                <h3 className="font-extrabold text-xl text-white font-display uppercase tracking-wide flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D91E2B]" />
                  <span>Cek Ketersediaan Teknisi</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Klik nama kota untuk langsung hubungi unit siaga terdekat.
                </p>
              </div>

              {/* Single Icon Modern Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik kota/kecamatan (contoh: Surabaya, Bintaro)..."
                  className="w-full bg-[#0D0D0F] border border-zinc-700 rounded-xl pl-10 pr-9 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D91E2B] transition-colors text-xs sm:text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-800 px-1.5 py-0.5 rounded cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Compact Region Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {regionTabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => {
                      setSelectedRegion(tab.value);
                      setSearchQuery('');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      selectedRegion === tab.value
                        ? 'bg-[#D91E2B] text-white shadow-[0_0_12px_rgba(217,30,43,0.4)] border border-[#D91E2B]'
                        : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick List: Interactive City Chips */}
              <div className="flex-1 min-h-[220px] max-h-[300px] overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-zinc-800">
                {filteredAreas.length > 0 ? (
                  (searchQuery ? filteredAreas : filteredAreas.slice(0, 10)).map((area) => (
                    <div
                      key={area.id}
                      onClick={() => {
                        handleCallArea(area.city);
                        const matchedMap = mapCities.find(m => m.name.toLowerCase().includes(area.city.toLowerCase()) || area.city.toLowerCase().includes(m.name.toLowerCase()));
                        if (matchedMap) setActiveMapCity(matchedMap);
                      }}
                      className="p-3 rounded-xl bg-[#0D0D0F] border border-zinc-800 hover:border-[#D91E2B]/50 hover:bg-[#D91E2B]/10 transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer group"
                    >
                      <div className="min-w-0 flex-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                        <span className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-[#D91E2B] transition-colors">
                          {area.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-zinc-400">
                        <span className="text-zinc-300">⏱️ &lt;15 Mnt</span>
                        <span className="px-2 py-0.5 rounded bg-[#D91E2B]/15 text-[#D91E2B] group-hover:bg-[#D91E2B] group-hover:text-white font-bold text-[10px] uppercase transition-colors">
                          Hubungi WA →
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-zinc-400 text-xs space-y-2">
                    <p>Kota &ldquo;{searchQuery}&rdquo; belum ada di list cepat.</p>
                    <button
                      onClick={() => {
                        setSelectedRegion('ALL');
                        setSearchQuery('');
                      }}
                      className="text-xs text-[#D91E2B] font-bold hover:underline"
                    >
                      Lihat Semua Kota
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Catch-All Banner Under 2-Column Dashboard */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#201F21] to-[#18181B] border border-[#D91E2B]/40 shadow-[0_0_25px_rgba(217,30,43,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <h4 className="font-black text-lg sm:text-xl text-white font-display uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-[#D91E2B]" />
              <span>Lokasi Anda di luar jangkauan list?</span>
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Kami punya jaringan partner independen di seluruh pelosok Indonesia. Cukup bagikan lokasi Anda.
            </p>
          </div>
          <a
            href={WhatsAppService.buildEmergencyCallUrl('lokasi saya [Kirim Share Loc]')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button variant="primary" size="md" className="px-5 py-2.5 text-xs font-bold rounded-xl w-full sm:w-auto shadow-md" leftIcon={<MessageSquare className="w-4 h-4 fill-white text-white" />}>
              💬 Share Location via WhatsApp
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
