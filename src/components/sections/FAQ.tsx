'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { mockFAQs } from '../../data/mockData';
import { Accordion } from '../ui/Accordion';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 sm:py-20 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN POPULER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-wide font-display">
            Pertanyaan Sering <span className="text-red-600">Diajukan</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-lg">
            Segala hal yang perlu Anda ketahui mengenai pemesanan, layanan darurat 24 jam, dan klaim garansi resmi ShopDrive.
          </p>
        </div>

        {/* Interactive Accordion */}
        <Accordion items={mockFAQs} />

        {/* Support Callout */}
        <div className="mt-8 sm:mt-12 text-center p-4 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200 shadow-sm space-y-3 sm:space-y-4">
          <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 font-display uppercase">
            Punya Pertanyaan Lain Yang Belum Terjawab?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
            Tim customer support dan konsultan teknis ShopDrive siap membantu melayani pertanyaan Anda 24 jam nonstop.
          </p>
          <button onClick={() => WhatsAppService.openEmergencyWhatsAppWithGPS()} className="inline-block cursor-pointer">
            <Button variant="outline" size="md">
              Tanyakan via WhatsApp CS 24 Jam
            </Button>
          </button>
        </div>

      </div>
    </section>
  );
};
