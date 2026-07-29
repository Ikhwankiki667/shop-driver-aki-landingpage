import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { mockTestimonials } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#131315] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#E63946]" />
            <span>ULASAN REKAP PENGENDARA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Dipercaya 150.000+ <span className="text-[#E63946]">Pemilik Mobil</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Pengalaman langsung pengendara yang diselamatkan oleh teknisi ShopDrive saat situasi darurat di jalan.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#1A1A1D] border border-zinc-800 hover:border-[#E63946]/40 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-[#E63946]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#E63946]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E63946]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-base italic leading-relaxed">
                  &ldquo;{item.reviewText}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-zinc-800 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-base text-white font-display uppercase tracking-wide">
                    {item.customerName}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {item.carModel} • <span className="text-[#E63946]">{item.city}</span>
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Pembelian Terverifikasi</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">{item.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
