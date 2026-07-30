'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, MapPin, ZoomIn, X } from 'lucide-react';

import img1 from '../../image/Dokumentasi/IMG_20260729_225423.jpg.webp';
import img2 from '../../image/Dokumentasi/IMG_20260729_225447.jpg.webp';
import img3 from '../../image/Dokumentasi/IMG_20260729_225513.jpg.webp';
import img4 from '../../image/Dokumentasi/IMG_20260729_225556.jpg.webp';
import img5 from '../../image/Dokumentasi/IMG_20260729_225759.jpg.webp';
import img6 from '../../image/Dokumentasi/IMG_20260729_225811.jpg.webp';

interface DocumentationItem {
  id: number;
  image: any;
  title: string;
  battery: string;
  tag: string;
}

const documentationList: DocumentationItem[] = [
  {
    id: 1,
    image: img1,
    title: 'Toyota Vellfire / Alphard',
    battery: 'Aki Amaron Hi-Life',
    tag: 'Parkiran Basement Mall',
  },
  {
    id: 2,
    image: img2,
    title: 'Mercedes-Benz S-Class',
    battery: 'Aki European DIN Spec',
    tag: 'Garasi Rumah Kustomer',
  },
  {
    id: 3,
    image: img3,
    title: 'Honda Brio RS',
    battery: 'Aki GS Astra Maintenance Free',
    tag: 'Area Parkir Outing',
  },
  {
    id: 4,
    image: img4,
    title: 'Toyota Rush / Terios',
    battery: 'Aki GS Astra Hybrid',
    tag: 'Pemasangan On-Site',
  },
  {
    id: 5,
    image: img5,
    title: 'Jeep Wrangler Rubicon',
    battery: 'Aki Bosch Mega Power',
    tag: 'Home Service Premium',
  },
  {
    id: 6,
    image: img6,
    title: 'Toyota Alphard Executive',
    battery: 'Aki Bosch SM Mega Power',
    tag: 'Emergency Replacement',
  },
];

export const Documentation: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentationItem | null>(null);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (selectedDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedDoc]);

  // Handle Escape keypress to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDoc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="documentation" className="bg-slate-50 border-b border-gray-200 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>DOKUMENTASI LAPANGAN</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 uppercase tracking-tight font-display leading-tight">
            Bukti Nyata <span className="text-red-600">Pemasangan Aki</span> di Lokasi
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-lg leading-relaxed">
            Dokumentasi pengerjaan langsung oleh teknisi profesional ShopDrive Aki di rumah, kantor, parkiran, hingga darurat di jalanan.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-7xl mx-auto mt-6 sm:mt-12">
          {documentationList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDoc(item)}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Object-Contain Framing */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 rounded-t-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-full h-full p-2.5 transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Compact Photo Badge Overlay */}
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold flex items-center gap-1 shadow-md pointer-events-none border border-slate-700">
                  <Camera className="w-3 h-3 text-red-400" />
                  <span>Foto Asli</span>
                </div>

                {/* Hover Zoom Overlay Hint */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900/85 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0">
                    <ZoomIn className="w-3.5 h-3.5 text-red-400" />
                    <span>Klik untuk memperbesar</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-5 flex flex-col gap-1 sm:gap-1.5 flex-1 justify-between">
                <div>
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg leading-snug font-display group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-red-600 font-bold mt-0.5">
                    {item.battery}
                  </div>
                </div>

                <div className="pt-1.5 sm:pt-2">
                  <span className="bg-slate-100 text-slate-700 text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-gray-200/80 font-medium inline-flex items-center gap-1 sm:gap-1.5">
                    <MapPin className="w-3 h-3 text-red-600 shrink-0" />
                    <span>{item.tag}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Full-Screen Modal Preview */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoc(null)}
              aria-label="Tutup preview foto"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 hover:bg-red-600 text-white transition-colors border border-slate-700 shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Photo Display */}
            <div className="relative aspect-[4/3] w-full max-h-[75vh] bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <Image
                src={selectedDoc.image}
                alt={selectedDoc.title}
                fill
                sizes="100vw"
                priority
                className="object-contain w-full h-full rounded-lg"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="w-full p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold font-display text-white">
                  {selectedDoc.title}
                </h3>
                <div className="text-xs sm:text-sm font-bold text-red-400 mt-0.5">
                  {selectedDoc.battery}
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{selectedDoc.tag}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
