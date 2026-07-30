import React from 'react';
import { Zap, Clock, ShieldCheck, Wrench } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
      title: "Respon <20 Menit",
      description: "Armada teknisi siaga meluncur ke lokasi Anda dengan cepat.",
    },
    {
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
      title: "Siaga 24 Jam Setiap Hari",
      description: "Layanan darurat nonstop 365 hari, termasuk tengah malam & libur.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
      title: "Harga Transparan Disepakati di Awal",
      description: "Harga transparan disepakati di awal sebelum teknisi meluncur. Tanpa biaya tersembunyi, bayar setelah terpasang.",
    },
    {
      icon: <Wrench className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
      title: "Teknisi Berpengalaman & Bersertifikat",
      description: "Mekanik profesional lengkap dengan alat pengujian kelistrikan digital.",
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-slate-100/80 border-y border-gray-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#DC2626] hover:shadow-md transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-sm sm:text-lg text-slate-900 font-display uppercase tracking-wide mb-1.5 sm:mb-2 group-hover:text-[#DC2626] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
