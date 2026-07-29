'use client';

import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0F]/95 backdrop-blur-lg border-t border-[#E63946]/40 p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-2 gap-2">
        
        {/* Telepon SOS Direct Call */}
        <a
          href={WhatsAppService.buildPhoneCallUrl()}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#E63946] active:bg-[#DC2626] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(230,57,70,0.4)] transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Telepon SOS</span>
        </a>

        {/* WhatsApp Emergency Chat */}
        <a
          href={WhatsAppService.buildEmergencyCallUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#1A1A1D] border border-[#E63946]/50 active:bg-[#26262A] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(230,57,70,0.2)] transition-all"
        >
          <MessageSquare className="w-4 h-4 text-[#E63946]" />
          <span>Chat WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
