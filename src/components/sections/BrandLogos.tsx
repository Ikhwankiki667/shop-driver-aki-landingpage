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
    <section id="brands" className="py-10 sm:py-20 bg-slate-100/70 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PRODUK LENGKAP</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight font-display leading-tight">
            Semua <span className="text-red-600">Merk Aki</span> Tersedia
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Kami menyediakan berbagai merk aki terkemuka untuk semua jenis kendaraan.
          </p>
        </div>

        {/* Responsive 4-Column Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-7xl mx-auto">
          {brandList.map((brand, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-red-400 transition-all duration-300 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-1.5 sm:gap-3 group hover:shadow-md cursor-pointer text-slate-900"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 group-hover:border-red-400 transition-colors">
                <BatteryCharging className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0 w-full">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight whitespace-normal break-words group-hover:text-red-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-tight mt-0.5 whitespace-normal break-words">
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
