'use client';

import React from 'react';
import { BatteryCharging, ShieldCheck } from 'lucide-react';

interface BrandItem {
  name: string;
  type: string;
}

const brandList: BrandItem[] = [
  { name: 'GS Astra', type: 'Maintenance Free & Basah' },
  { name: 'Yuasa', type: 'Pilihan Original Pabrikan' },
  { name: 'Incoe', type: 'Tangguh & Tahan Lama' },
  { name: 'Delkor', type: 'Sealed Maintenance Free' },
  { name: 'Amaron', type: 'Silver Alloy Technology' },
  { name: 'Bosch', type: 'German Quality Battery' },
  { name: 'Varta', type: 'European Start-Stop Tech' },
  { name: 'AC Delco', type: 'Premium Heavy Duty' },
];

export const BrandLogos: React.FC = () => {
  return (
    <section id="brands" className="py-16 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/40 text-[#D91E2B] border border-[#D91E2B]/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Produk Lengkap</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display leading-tight">
            Semua <span className="text-[#D91E2B]">Merk Aki</span> Tersedia
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Kami menyediakan berbagai merk aki terkemuka untuk semua jenis kendaraan.
          </p>
        </div>

        {/* Responsive 4-Column Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {brandList.map((brand, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-[#18181B] border border-zinc-800 hover:border-[#D91E2B]/60 transition-all duration-300 flex items-center justify-center sm:justify-start gap-3.5 group hover:shadow-[0_0_20px_rgba(217,30,43,0.15)] cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-[#0D0D0F] border border-zinc-800/80 group-hover:border-[#D91E2B]/40 transition-colors shrink-0">
                <BatteryCharging className="w-6 h-6 text-[#D91E2B] group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="font-bold text-white text-base sm:text-lg tracking-wide group-hover:text-[#D91E2B] transition-colors truncate">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-zinc-400 truncate hidden sm:block">
                  {brand.type}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
