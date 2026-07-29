'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, Zap, MessageSquare, Car, Tag } from 'lucide-react';
import { mockBatteryProducts } from '../../data/mockData';
import { BatteryCategory, VehicleCategory } from '../../types';
import { CatalogService } from '../../services/CatalogService';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Catalog: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<BatteryCategory>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const brandTabs: { label: string; value: BatteryCategory }[] = [
    { label: 'Semua Merek', value: 'ALL' },
    { label: 'GS ASTRA', value: 'GS ASTRA' },
    { label: 'AMARON', value: 'AMARON' },
    { label: 'VARTA', value: 'VARTA' },
  ];

  const vehicleTabs: { label: string; value: VehicleCategory }[] = [
    { label: 'Semua Kategori', value: 'ALL' },
    { label: '1. City Car / Hatchback', value: 'City Car' },
    { label: '2. SUV / MPV', value: 'SUV/MPV' },
    { label: '3. Commercial / Diesel', value: 'Diesel/Commercial' },
  ];

  const filteredProducts = CatalogService.filterProducts(
    mockBatteryProducts,
    selectedBrand,
    selectedVehicle,
    searchQuery
  );

  return (
    <section id="catalog" className="py-24 bg-[#131315] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D91E2B]/15 border border-[#D91E2B]/40 text-[#D91E2B] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 fill-[#D91E2B]" />
            <span>KATALOG AKI MOBIL RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Pilihan Aki &amp; <span className="text-[#D91E2B]">Kategori Mobil</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Aki GS Astra &amp; Amaron Original 100% baru dengan segel resmi. Bebas Ongkir &amp; Pemasangan di tempat Anda!
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-zinc-800 mb-12 space-y-6">
          
          {/* Search Bar Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari tipe mobil Anda (contoh: Brio, Avanza, Innova, Fortuner) atau tipe aki (NS60, NS40)..."
              className="w-full bg-[#0D0D0F] border border-zinc-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D91E2B] transition-colors text-sm sm:text-base font-medium"
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

          {/* Vehicle Category Main Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Pilih Kategori Mobil:
            </label>
            <div className="flex flex-wrap gap-2">
              {vehicleTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedVehicle(tab.value)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedVehicle === tab.value
                      ? 'bg-[#D91E2B] text-white shadow-[0_0_15px_rgba(217,30,43,0.4)]'
                      : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter Tabs */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/80">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Filter Merk Aki:
            </label>
            <div className="flex flex-wrap gap-2">
              {brandTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedBrand(tab.value)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBrand === tab.value
                      ? 'bg-[#D91E2B] text-white shadow-[0_0_15px_rgba(217,30,43,0.4)]'
                      : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-[#1A1A1D] border-2 border-zinc-800 hover:border-[#D91E2B] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_30px_rgba(217,30,43,0.2)]"
              >
                {/* Card Header & Badges */}
                <div className="p-6 relative border-b border-zinc-800">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="red" leftIcon={<Zap className="w-3 h-3 fill-[#D91E2B]" />}>
                      {product.category}
                    </Badge>
                    <Badge variant="red">
                      Garansi {product.warrantyMonths} Bulan
                    </Badge>
                  </div>

                  <h3 className="font-extrabold text-xl text-white font-display uppercase tracking-wide group-hover:text-[#D91E2B] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <div className="mt-2 text-xs text-zinc-400 font-mono">
                    Tipe Kendaraan: <strong className="text-white uppercase">{product.vehicleType}</strong>
                  </div>
                </div>

                {/* Battery Specs & Feature List */}
                <div className="p-6 space-y-4 flex-grow bg-[#131315]/60">
                  
                  {/* Technology spec badge */}
                  <div className="text-xs px-3 py-2 rounded-lg bg-[#0D0D0F] border border-zinc-800 text-zinc-300 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{product.technology}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 text-xs text-zinc-300 font-medium">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✓</span> <span>100% Gratis Ongkir &amp; Pemasangan Lokasi</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✓</span> <span>Gratis Pengecekan Alternator &amp; Kelistrikan</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span>✓</span> <span>Tukar Tambah Aki Bekas Dihargai Tinggi</span>
                    </div>
                  </div>

                  {/* Compatible Cars List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
                      <Car className="w-3.5 h-3.5 text-[#D91E2B]" />
                      <span>Cocok Untuk Mobil:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.compatibleCars.map((car, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded bg-[#1A1A1D] border border-zinc-800 text-zinc-300"
                        >
                          {car}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Pricing & Inquiry Action (Marketplace Partner Model) */}
                <div className="p-6 bg-[#0D0D0F] border-t border-zinc-800 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400 uppercase font-mono block">Kisaran Harga Pasaran:</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                        TUKAR TAMBAH OK
                      </span>
                    </div>
                    <span className="font-extrabold text-base sm:text-lg text-white font-display block">
                      Estimasi Rp {(product.minPrice || 800000).toLocaleString('id-ID')} - {(product.maxPrice || 950000).toLocaleString('id-ID')}
                    </span>
                    <p className="text-[10px] text-zinc-400 leading-tight pt-1">
                      *Harga bervariasi tergantung lokasi &amp; partner teknisi terdekat
                    </p>
                  </div>

                  <a
                    href={WhatsAppService.buildPriceCheckUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      className="rounded-xl font-extrabold"
                      leftIcon={<MessageSquare className="w-4 h-4 fill-white text-white" />}
                    >
                      Cek Harga &amp; Ketersediaan
                    </Button>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1A1D] rounded-2xl border border-zinc-800 space-y-4">
            <Zap className="w-12 h-12 text-[#D91E2B] mx-auto opacity-50" />
            <h3 className="text-xl font-bold text-white font-display uppercase">
              Aki Untuk Mobil Anda Tidak Ditemukan
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              Konsultasikan merk dan tipe mobil Anda langsung ke customer support 24 jam kami via WhatsApp.
            </p>
            <a href={WhatsAppService.buildConsultationUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="rounded-xl font-bold">
                Tanyakan Aki via WA 24H
              </Button>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
