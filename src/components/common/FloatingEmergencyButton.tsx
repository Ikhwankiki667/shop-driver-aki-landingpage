'use client';

import React from 'react';
import { WhatsAppService } from '../../services/WhatsAppService';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const FloatingEmergencyButton: React.FC = () => {
  return (
    <div className="hidden sm:block fixed bottom-8 right-8 z-50 gpu-layer">
      <a
        href={WhatsAppService.buildEmergencyCallUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          WhatsAppService.openEmergencyWhatsAppWithGPS();
        }}
        className="group relative flex items-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm uppercase tracking-wider py-4 px-6 rounded-full shadow-xl shadow-red-500/30 transition-all duration-300 hover:scale-105 border border-white/30 cursor-pointer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span>CHAT WHATSAPP 24 JAM</span>
      </a>
    </div>
  );
};
