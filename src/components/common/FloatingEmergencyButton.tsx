'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';

export const FloatingEmergencyButton: React.FC = () => {
  return (
    <div className="hidden sm:block fixed bottom-8 right-8 z-50">
      <a
        href={WhatsAppService.buildEmergencyCallUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#D91E2B] hover:bg-[#C01824] text-white font-black text-sm uppercase tracking-wider py-4 px-6 rounded-full shadow-[0_0_25px_rgba(217,30,43,0.6)] hover:shadow-[0_0_35px_rgba(217,30,43,0.8)] transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <Zap className="w-5 h-5 fill-white text-white" />
        <span>Bantuan Aki 24 Jam</span>
      </a>
    </div>
  );
};
