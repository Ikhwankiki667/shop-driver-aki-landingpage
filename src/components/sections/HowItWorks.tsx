import React from 'react';
import { Headset, Gauge, Wrench, Receipt, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Hubungi via Telepon / WhatsApp',
      description: 'Klik tombol emergency call atau WhatsApp. Informasikan lokasi mogok dan tipe mobil Anda.',
      icon: <Headset className="w-6 h-6 text-[#D91E2B]" />,
    },
    {
      stepNumber: 2,
      title: 'Teknisi Meluncur <10 Menit',
      description: 'Sistem otomatis menugaskan unit teknisi siaga terdekat menuju lokasi Anda secara presisi.',
      icon: <Gauge className="w-6 h-6 text-[#D91E2B]" />,
    },
    {
      stepNumber: 3,
      title: 'Pemasangan Aki Di Lokasi',
      description: 'Pengecekan kelistrikan & alternator gratis, dilanjutkan pemasangan aki baru dengan memory saver.',
      icon: <Wrench className="w-6 h-6 text-[#D91E2B]" />,
    },
    {
      stepNumber: 4,
      title: 'Bayar & Beres',
      description: 'Pastikan mesin mobil menyala sempurna, lalu lakukan pembayaran di tempat (Cash/QRIS/Transfer).',
      icon: <Receipt className="w-6 h-6 text-[#D91E2B]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D91E2B]/15 border border-[#D91E2B]/40 text-[#D91E2B] text-xs font-bold uppercase tracking-widest">
            <span>PROSES PENANGANAN MEKANIK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Cara Kerja <span className="text-[#D91E2B]">ShopDrive</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Sistem pengiriman &amp; pemasangan darurat 4 langkah presisi tanpa ribet.
          </p>
        </div>

        {/* 4 Steps Checklist Cards with Industrial Sharp Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative p-6 rounded-lg bg-[#1A1A1D] border-2 border-zinc-800 hover:border-[#D91E2B] transition-all duration-200 group flex flex-col justify-between"
            >
              {/* Step Header with Sharp Mechanical Box & Number */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#0D0D0F] border border-[#D91E2B]/40 flex items-center justify-center group-hover:border-[#D91E2B] transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-1 font-mono font-black text-2xl text-[#D91E2B]">
                    <span>0{step.stepNumber}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D91E2B] text-xs font-bold font-mono uppercase tracking-wider">
                    <span>✓ STEP 0{step.stepNumber}</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-white font-display uppercase tracking-wide group-hover:text-[#D91E2B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Corner Accent */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>ESTIMASI: RAPID</span>
                <span className="text-emerald-400 font-bold">READY 24H</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1A1A1D] border border-zinc-800 text-xs text-zinc-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#D91E2B] animate-pulse shrink-0" />
            <span>Garansi resmi langsung aktif setelah pemasangan &amp; tes kelistrikan selesai.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
