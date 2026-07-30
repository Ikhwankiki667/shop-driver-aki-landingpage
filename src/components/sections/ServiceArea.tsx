'use client';

import React, { useState } from 'react';
import { MapPin, Search, Zap } from 'lucide-react';
import { mockServiceAreas } from '../../data/mockData';
import { RegionCategory } from '../../types';
import { LocationService } from '../../services/LocationService';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface IMapCity {
  id: string;
  name: string;
  query: string;
  label: string;
}

const mapCities: IMapCity[] = [
  { id: 'indonesia', name: 'Seluruh Indonesia', query: 'Indonesia', label: 'Seluruh Indonesia' },
  { id: 'jabodetabek', name: 'Jabodetabek', query: 'Jakarta, Indonesia', label: 'Jabodetabek' },
  { id: 'jawa-bali', name: 'Jawa & Bali', query: 'Surabaya, Indonesia', label: 'Jawa & Bali' },
  { id: 'sumatera', name: 'Sumatera', query: 'Medan, Indonesia', label: 'Sumatera' },
  { id: 'kalimantan-sulawesi', name: 'Kalimantan & Sulawesi', query: 'Makassar, Indonesia', label: 'Kalimantan & Sulawesi' },
];

export const ServiceArea: React.FC = () => {
  const [activeMapCity, setActiveMapCity] = useState<IMapCity>(mapCities[0]);
  const [selectedRegion, setSelectedRegion] = useState<RegionCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const regionTabs: { label: string; value: RegionCategory }[] = [
    { label: 'Semua Kota', value: 'ALL' },
    { label: 'Jabodetabek', value: 'JABODETABEK' },
    { label: 'Jawa & Bali', value: 'JAWA_BALI' },
    { label: 'Sumatera', value: 'SUMATERA' },
    { label: 'Kalimantan & Sulawesi', value: 'KALIMANTAN_SULAWESI' },
  ];

  const filteredAreas = LocationService.filterAreas(mockServiceAreas, selectedRegion, searchQuery);

  const handleCallArea = (cityName: string) => {
    const waUrl = WhatsAppService.buildEmergencyCallUrl(cityName);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="coverage" className="py-20 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-red-600 text-red-600" />
              <span>JARINGAN TEKNISI NASIONAL 24/7</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-wide font-display leading-tight">
            Hadir di Seluruh Indonesia <br className="hidden sm:block" />
            <span className="text-red-600">Di Mana Pun Anda Mogok, Kami Siap Meluncur</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Jaringan mitra &amp; teknisi partner ShopDrive tersebar di pulau Jawa, Sumatera, Kalimantan, Sulawesi, Bali, hingga wilayah lainnya di seluruh Indonesia.
          </p>
        </div>

        {/* 2-Column Desktop Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* COLUMN LEFT (7/12 - VISUAL HERO MAP) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[420px] lg:min-h-[500px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-slate-100 group">
              
              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-emerald-200 text-emerald-700 text-xs font-bold shadow-md flex items-center gap-2 pointer-events-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>LIVE DISPATCH NETWORK • SELURUH INDONESIA</span>
                </div>
                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="bg-white/90 backdrop-blur-md border border-gray-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>350+ Armada Siaga</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md border border-gray-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>45+ Kota Terdaftar</span>
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
                  minHeight: '420px'
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapCity.query)}&t=&z=${activeMapCity.id === 'indonesia' ? 5 : 11}&ie=UTF8&iwloc=&output=embed`}
              />

              {/* Bottom Indicator Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200 text-xs text-slate-700 font-mono flex items-center justify-between gap-2 shadow-md">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span className="truncate">Menampilkan lokasi siaga di: <strong className="text-slate-900">{activeMapCity.name}</strong></span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold shrink-0">READY 24H</span>
              </div>

            </div>
          </div>

          {/* COLUMN RIGHT (5/12 - INSTANT LOCATION CHECKER) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl bg-slate-50 border border-gray-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-md">
              
              {/* Header */}
              <div className="space-y-1.5">
                <h3 className="font-extrabold text-xl text-slate-900 font-display uppercase tracking-wide flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#DC2626]" />
                  <span>Cek Ketersediaan Teknisi</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Klik nama kota untuk langsung hubungi unit siaga terdekat.
                </p>
              </div>

              {/* Single Icon Modern Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik kota/kecamatan (contoh: Surabaya, Bintaro)..."
                  className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-9 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626] transition-colors text-xs sm:text-sm font-medium shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 hover:text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded cursor-pointer"
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
                        ? 'bg-[#DC2626] text-white shadow-sm border border-[#DC2626]'
                        : 'bg-white text-slate-700 border border-gray-200 hover:border-gray-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick List: Interactive City Chips */}
              <div className="flex-1 min-h-[220px] max-h-[300px] overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-gray-300">
                {filteredAreas.length > 0 ? (
                  filteredAreas.map((area) => (
                    <div
                      key={area.id}
                      onClick={() => {
                        handleCallArea(area.city);
                        const matchedMap = mapCities.find(m => m.name.toLowerCase().includes(area.city.toLowerCase()) || area.city.toLowerCase().includes(m.name.toLowerCase()));
                        if (matchedMap) setActiveMapCity(matchedMap);
                      }}
                      className="p-3 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50/40 transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer group shadow-sm"
                    >
                      <div className="min-w-0 flex-1 flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                        <span className="font-bold text-xs sm:text-sm text-slate-900 truncate group-hover:text-[#DC2626] transition-colors">
                          {area.city}
                        </span>
                      </div>
                      <div className="shrink-0">
                        <span className="px-2.5 py-1 rounded-lg bg-red-50 text-[#DC2626] border border-red-200 group-hover:bg-[#DC2626] group-hover:text-white font-bold text-[10px] sm:text-xs uppercase transition-colors inline-flex items-center">
                          HUBUNGI WA →
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500 text-xs space-y-2">
                    <p>Kota &ldquo;{searchQuery}&rdquo; belum ada di list cepat.</p>
                    <button
                      onClick={() => {
                        setSelectedRegion('ALL');
                        setSearchQuery('');
                      }}
                      className="text-xs text-[#DC2626] font-bold hover:underline"
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
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <h4 className="font-black text-lg sm:text-xl text-white font-display uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-[#DC2626]" />
              <span>Lokasi Anda di luar jangkauan list?</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Kami punya jaringan partner independen di seluruh pelosok Indonesia. Cukup bagikan lokasi Anda.
            </p>
          </div>
          <a
            href={WhatsAppService.buildEmergencyCallUrl('lokasi saya [Kirim Share Loc]')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button variant="primary" size="md" className="px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl w-full sm:w-auto shadow-md" leftIcon={<WhatsAppIcon className="w-5 h-5 text-white" />}>
              SHARE LOCATION VIA WHATSAPP
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
