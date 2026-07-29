import React from 'react';
import { HelpCircle } from 'lucide-react';
import { mockFAQs } from '../../data/mockData';
import { Accordion } from '../ui/Accordion';
import { WhatsAppService } from '../../services/WhatsAppService';
import { Button } from '../ui/Button';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-[#0D0D0F] relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN POPULER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide font-display">
            Pertanyaan Sering <span className="text-[#E63946]">Diajukan</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Segala hal yang perlu Anda ketahui mengenai pemesanan, layanan darurat 24 jam, dan klaim garansi resmi ShopDrive.
          </p>
        </div>

        {/* Interactive Accordion */}
        <Accordion items={mockFAQs} />

        {/* Support Callout */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[#1A1A1D] border border-zinc-800 space-y-4">
          <h3 className="font-extrabold text-xl text-white font-display uppercase">
            Punya Pertanyaan Lain Yang Belum Terjawab?
          </h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Tim customer support dan konsultan teknis ShopDrive siap membantu melayani pertanyaan Anda 24 jam nonstop.
          </p>
          <a
            href={WhatsAppService.buildConsultationUrl('Pertanyaan Layanan ShopDrive')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="md">
              Tanyakan via WhatsApp CS 24H
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};
