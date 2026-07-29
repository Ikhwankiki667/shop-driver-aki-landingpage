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
    { label: 'Semua Tipe Mobil', value: 'ALL' },
    { label: 'City Car / Avanza / Brio', value: 'City Car' },
    { label: 'Sedan / Hatchback', value: 'Sedan/Hatchback' },
    { label: 'SUV / MPV / Innova', value: 'SUV/MPV' },
    { label: 'Diesel / Heavy Duty', value: 'Diesel/Commercial' },
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 fill-[#E63946]" />
            <span>KATALOG AKI RESMI 100% GARANSI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Pilih Aki Resmi <span className="text-[#E63946]">Siap Antar Pasang</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Semua produk 100% Baru dengan segel resmi &amp; garansi hingga 24 bulan. Gratis tes kelistrikan sebelum pemasangan!
          </p>
        </div>

        {/* Search Bar & Filters */}
        <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-zinc-800 mb-12 space-y-6">
          
          {/* Real-time Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik tipe mobil Anda (contoh: Avanza, HR-V, Innova) atau kode aki (NS60LS)..."
              className="w-full bg-[#0D0D0F] border border-zinc-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] transition-colors text-sm sm:text-base font-medium"
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

          {/* Brand Filter Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Filter Merk Aki:
            </label>
            <div className="flex flex-wrap gap-2">
              {brandTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedBrand(tab.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBrand === tab.value
                      ? 'bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]'
                      : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Category Filter Tabs */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/60">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Filter Jenis Mobil:
            </label>
            <div className="flex flex-wrap gap-2">
              {vehicleTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedVehicle(tab.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedVehicle === tab.value
                      ? 'bg-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.3)]'
                      : 'bg-[#0D0D0F] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-[#1A1A1D] border border-zinc-800 hover:border-[#E63946]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_30px_rgba(230,57,70,0.15)]"
              >
                {/* Card Header & Badges */}
                <div className="p-6 relative border-b border-zinc-800/80">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="red" leftIcon={<Zap className="w-3 h-3 fill-[#E63946]" />}>
                      {product.category}
                    </Badge>
                    {product.isBestSeller && (
                      <Badge variant="emergency">PALING LARIS</Badge>
                    )}
                  </div>

                  <h3 className="font-extrabold text-xl text-white font-display uppercase tracking-wide group-hover:text-[#E63946] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span>Kapasitas: <strong className="text-white">{product.capacityAh} Ah</strong></span>
                    <span>•</span>
                    <span>Garansi: <strong className="text-[#E63946]">{product.warrantyMonths} Bulan</strong></span>
                  </div>
                </div>

                {/* Battery Specs & Compatible Cars */}
                <div className="p-6 space-y-4 flex-grow bg-[#131315]/50">
                  
                  {/* Technology badge */}
                  <div className="text-xs px-3 py-1.5 rounded-md bg-[#0D0D0F] border border-zinc-800 text-zinc-300 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{product.technology}</span>
                  </div>

                  {/* Compatible Cars List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
                      <Car className="w-3.5 h-3.5 text-[#E63946]" />
                      <span>Kecocokan Mobil:</span>
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

                {/* Pricing Badge (No Hardcoded Nominal) & WA Button */}
                <div className="p-6 bg-[#0D0D0F] border-t border-zinc-800 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-bold uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5" />
                    <span>🏷️ Cek Harga Terbaik &amp; Promo WA</span>
                  </div>

                  <a
                    href={WhatsAppService.buildBatteryOrderUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      leftIcon={<MessageSquare className="w-4 h-4" />}
                    >
                      Tanya Harga &amp; Stok via WA
                    </Button>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1A1D] rounded-2xl border border-zinc-800 space-y-4">
            <Zap className="w-12 h-12 text-[#E63946] mx-auto opacity-50" />
            <h3 className="text-xl font-bold text-white font-display uppercase">
              Tipe Aki Atau Mobil Tidak Ditemukan
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              Jangan khawatir! Tim teknisi kami punya stok lengkap semua merk dan tipe aki. Hubungi via WA untuk konsultasi gratis.
            </p>
            <a href={WhatsAppService.buildConsultationUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Tanyakan Aki Mobil Anda via WA
              </Button>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
