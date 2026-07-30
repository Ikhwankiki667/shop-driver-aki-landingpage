import React from 'react';
import Image from 'next/image';
import { Camera, MapPin } from 'lucide-react';

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
            Dokumentasi pengerjaan langsung oleh teknisi profesional ShopDrive di rumah, kantor, parkiran, hingga darurat di jalanan.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-7xl mx-auto mt-6 sm:mt-12">
          {documentationList.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container with Responsive Height (Compact h-44 in mobile) */}
              <div className="relative h-44 sm:h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Photo Badge Overlay */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-900/90 text-white text-[10px] sm:text-[11px] font-bold flex items-center gap-1 shadow-md pointer-events-none border border-slate-700">
                  <Camera className="w-3 h-3 text-red-400" />
                  <span>Foto Asli</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-5 flex flex-col gap-1 sm:gap-1.5 flex-1 justify-between">
                <div>
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg leading-snug font-display">
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
    </section>
  );
};
