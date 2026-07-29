'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { mockTestimonials } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockTestimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mockTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#131315] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D91E2B]/15 border border-[#D91E2B]/40 text-[#D91E2B] text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#D91E2B]" />
            <span>KATA PENGENDARA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Pengalaman Pengendara <span className="text-[#D91E2B]">ShopDrive</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Dipercaya oleh 150.000+ pengendara mobil yang terselamatkan saat situasi darurat di jalan.
          </p>
        </div>

        {/* Carousel & Grid Display */}
        <div className="relative">
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {mockTestimonials.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#1A1A1D] border-2 border-zinc-800 hover:border-[#D91E2B]/50 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(217,30,43,0.15)]"
              >
                <Quote className="w-10 h-10 text-[#D91E2B]/20 absolute top-6 right-6" />

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#FF9500]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF9500]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-zinc-300 text-sm lg:text-base italic leading-relaxed">
                    &ldquo;{item.reviewText}&rdquo;
                  </p>
                </div>

                {/* Author Info with Photo Placeholder */}
                <div className="pt-6 border-t border-zinc-800 mt-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0D0D0F] border border-[#D91E2B]/40 flex items-center justify-center text-zinc-400 shrink-0">
                      <User className="w-5 h-5 text-[#D91E2B]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-white font-display uppercase tracking-wide">
                        {item.customerName}
                      </h4>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        {item.carModel} • <span className="text-[#D91E2B]">{item.city}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verifikasi
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono mt-1">{item.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Mobile Interactive Single Slide Carousel */}
          <div className="md:hidden">
            <div className="p-6 rounded-2xl bg-[#1A1A1D] border-2 border-[#D91E2B]/50 relative">
              <Quote className="w-8 h-8 text-[#D91E2B]/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 text-[#FF9500] mb-3">
                {[...Array(mockTestimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF9500]" />
                ))}
              </div>

              <p className="text-zinc-200 text-sm italic leading-relaxed mb-6">
                &ldquo;{mockTestimonials[currentIndex].reviewText}&rdquo;
              </p>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D0D0F] border border-[#D91E2B]/40 flex items-center justify-center text-zinc-400 shrink-0">
                    <User className="w-4 h-4 text-[#D91E2B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white font-display uppercase">
                      {mockTestimonials[currentIndex].customerName}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      {mockTestimonials[currentIndex].carModel} • <span className="text-[#D91E2B]">{mockTestimonials[currentIndex].city}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-lg bg-[#1A1A1D] border border-zinc-800 text-white hover:border-[#D91E2B] transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#D91E2B]" />
              </button>
              
              <div className="flex gap-1.5">
                {mockTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#D91E2B]' : 'w-2 bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2.5 rounded-lg bg-[#1A1A1D] border border-zinc-800 text-white hover:border-[#D91E2B] transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#D91E2B]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
