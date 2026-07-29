import React from 'react';
import { Zap, Clock, ShieldCheck, Wrench } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Clock className="w-8 h-8 text-[#E63946]" />,
      title: "Respon Super Cepat <10 Min",
      description: "Armada teknisi siaga di seluruh penjuru kota untuk merespon panggilan darurat Anda.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#E63946]" />,
      title: "Layanan 24 Jam Nonstop",
      description: "Mogok jam 2 malam atau libur nasional? Kami siap antar dan pasang aki ke lokasi Anda.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E63946]" />,
      title: "Harga Transparan & Garansi",
      description: "Harga jujur tanpa biaya tersembunyi. Ongkir & pasang GRATIS + Garansi resmi hingga 24 bulan.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#E63946]" />,
      title: "Teknisi Bersertifikat",
      description: "Ditangani mekanik ahli dengan peralatan uji kelistrikan & memory saver canggih.",
    },
  ];

  return (
    <section className="py-12 bg-[#131315] border-y border-zinc-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#1A1A1D] border border-zinc-800/80 hover:border-[#E63946]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-lg text-white font-display uppercase tracking-wide mb-2 group-hover:text-[#E63946] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
