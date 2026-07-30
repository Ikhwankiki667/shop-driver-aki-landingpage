import React from 'react';
import { Headset, Gauge, Wrench, Receipt, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Hubungi via Telepon / WhatsApp',
      description: 'Klik tombol emergency call atau WhatsApp. Informasikan lokasi mogok dan tipe mobil Anda.',
      icon: <Headset className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 2,
      title: 'Teknisi Meluncur <20 Menit',
      description: 'Sistem otomatis menugaskan unit teknisi siaga terdekat menuju lokasi Anda secara presisi.',
      icon: <Gauge className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 3,
      title: 'Pemasangan Aki Di Lokasi',
      description: 'Pengecekan kelistrikan & alternator gratis, dilanjutkan pemasangan aki baru dengan memory saver.',
      icon: <Wrench className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 4,
      title: 'Bayar & Beres',
      description: 'Pastikan mesin mobil menyala sempurna, lalu lakukan pembayaran di tempat (Cash/QRIS/Transfer).',
      icon: <Receipt className="w-4 h-4 sm:w-6 sm:h-6 text-[#DC2626]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>PROSES PENANGANAN MEKANIK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight font-display">
            Cara Kerja <span className="text-red-600">ShopDrive</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-lg">
            Sistem pengiriman &amp; pemasangan darurat 4 langkah presisi tanpa ribet.
          </p>
        </div>

        {/* 4 Steps Checklist Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative p-3 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-red-400 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md text-slate-900"
            >
              {/* Step Header with Mechanical Box & Number */}
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-5">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center group-hover:border-red-400 transition-colors shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-1 font-mono font-black text-lg sm:text-2xl text-red-600">
                    <span>0{step.stepNumber}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-1 text-red-600 text-[9px] sm:text-xs font-bold font-mono uppercase tracking-wider">
                    <span>✓ STEP 0{step.stepNumber}</span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-base text-slate-900 font-display uppercase tracking-wide group-hover:text-red-600 transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-500 leading-snug pt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Corner Accent */}
              <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-gray-100 flex items-center justify-end text-[9px] sm:text-[11px] font-mono">
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">READY 24 JAM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-gray-200 text-[11px] sm:text-xs text-slate-700 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span>Garansi resmi langsung aktif setelah pemasangan &amp; tes kelistrikan selesai.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
