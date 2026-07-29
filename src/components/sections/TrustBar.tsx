import React from 'react';
import { Zap, Clock, ShieldCheck, Wrench } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Clock className="w-7 h-7 text-[#D91E2B]" />,
      title: "Respon <10 Menit",
      description: "Armada teknisi siaga meluncur ke lokasi Anda dengan cepat.",
    },
    {
      icon: <Zap className="w-7 h-7 text-[#D91E2B]" />,
      title: "Siaga 24 Jam Setiap Hari",
      description: "Layanan darurat nonstop 365 hari, termasuk tengah malam & libur.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#D91E2B]" />,
      title: "Harga Transparan, Tanpa Biaya Tersembunyi",
      description: "Bebas ongkir & pasang. Bayar sesuai harga resmi setelah aki terpasang.",
    },
    {
      icon: <Wrench className="w-7 h-7 text-[#D91E2B]" />,
      title: "Teknisi Berpengalaman & Bersertifikat",
      description: "Mekanik profesional lengkap dengan alat pengujian kelistrikan digital.",
    },
  ];

  return (
    <section className="py-10 bg-[#131315] border-y border-zinc-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#1A1A1D] border border-zinc-800 hover:border-[#D91E2B]/50 transition-all duration-200 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[#D91E2B]/15 border border-[#D91E2B]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white font-display uppercase tracking-wide mb-2 group-hover:text-[#D91E2B] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
