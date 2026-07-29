import React from 'react';
import { PhoneCall, Zap, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { mockHowItWorksSteps } from '../../data/mockData';

export const HowItWorks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-8 h-8 text-[#E63946]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#E63946]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#E63946]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#E63946]" />;
      default:
        return <Zap className="w-8 h-8 text-[#E63946]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <span>PROSES PENANGANAN DARURAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            4 Langkah Mudah <span className="text-[#E63946]">Solusi Aki Mogok</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Sistem pengiriman dan pemasangan terkoordinasi cepat untuk memastikan perjalanan Anda tidak terganggu lama.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {mockHowItWorksSteps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative p-6 rounded-2xl bg-[#1A1A1D] border border-zinc-800 hover:border-[#E63946]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#0D0D0F] border border-zinc-800 group-hover:border-[#E63946]/40 flex items-center justify-center transition-colors">
                  {getIcon(step.iconName)}
                </div>
                <span className="font-display font-black text-4xl text-zinc-700 group-hover:text-[#E63946]/40 transition-colors">
                  0{step.stepNumber}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-xl text-white font-display uppercase tracking-wide group-hover:text-[#E63946] transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector for Desktop */}
              {index < mockHowItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Urgency Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1A1A1D] border border-zinc-800 text-sm text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Teknisi terdekat posisi Anda sedang siaga. Panggil sekarang untuk respon cepat!</span>
          </div>
        </div>

      </div>
    </section>
  );
};
