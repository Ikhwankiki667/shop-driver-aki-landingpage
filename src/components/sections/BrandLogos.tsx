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
  { name: 'FB Furukawa Battery', type: 'Japanese OEM Quality' },
];

export const BrandLogos: React.FC = () => {
  return (
    <section id="brands" className="py-20 bg-slate-100/70 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PRODUK LENGKAP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-wide font-display leading-tight">
            Semua <span className="text-red-600">Merk Aki</span> Tersedia
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Kami menyediakan berbagai merk aki terkemuka untuk semua jenis kendaraan.
          </p>
        </div>

        {/* Responsive 4-Column Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {brandList.map((brand, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-red-400 transition-all duration-300 flex items-center justify-center sm:justify-start gap-3.5 group hover:shadow-md cursor-pointer text-slate-900"
            >
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 group-hover:border-red-400 transition-colors shrink-0">
                <BatteryCharging className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-wide group-hover:text-red-600 transition-colors truncate">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-slate-500 truncate hidden sm:block">
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
