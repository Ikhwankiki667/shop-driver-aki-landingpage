import React from 'react';
import { Headset, Gauge, Wrench, Receipt, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Hubungi via Telepon / WhatsApp',
      description: 'Klik tombol emergency call atau WhatsApp. Informasikan lokasi mogok dan tipe mobil Anda.',
      icon: <Headset className="w-6 h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 2,
      title: 'Teknisi Meluncur <20 Menit',
      description: 'Sistem otomatis menugaskan unit teknisi siaga terdekat menuju lokasi Anda secara presisi.',
      icon: <Gauge className="w-6 h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 3,
      title: 'Pemasangan Aki Di Lokasi',
      description: 'Pengecekan kelistrikan & alternator gratis, dilanjutkan pemasangan aki baru dengan memory saver.',
      icon: <Wrench className="w-6 h-6 text-[#DC2626]" />,
    },
    {
      stepNumber: 4,
      title: 'Bayar & Beres',
      description: 'Pastikan mesin mobil menyala sempurna, lalu lakukan pembayaran di tempat (Cash/QRIS/Transfer).',
      icon: <Receipt className="w-6 h-6 text-[#DC2626]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>PROSES PENANGANAN MEKANIK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-wide font-display">
            Cara Kerja <span className="text-red-600">ShopDrive</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sistem pengiriman &amp; pemasangan darurat 4 langkah presisi tanpa ribet.
          </p>
        </div>

        {/* 4 Steps Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-red-400 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md text-slate-900"
            >
              {/* Step Header with Mechanical Box & Number */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center group-hover:border-red-400 transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-1 font-mono font-black text-2xl text-red-600">
                    <span>0{step.stepNumber}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-600 text-xs font-bold font-mono uppercase tracking-wider">
                    <span>✓ STEP 0{step.stepNumber}</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900 font-display uppercase tracking-wide group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Corner Accent */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end text-[11px] font-mono">
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">READY 24 JAM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-xs text-slate-700 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
            <span>Garansi resmi langsung aktif setelah pemasangan &amp; tes kelistrikan selesai.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
