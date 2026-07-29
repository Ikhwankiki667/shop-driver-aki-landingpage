'use client';

import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0F]/95 backdrop-blur-md border-t border-[#D91E2B]/50 p-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-2 gap-2">
        
        {/* Telepon (Emergency) Button - Racing Red */}
        <a
          href={WhatsAppService.buildPhoneCallUrl()}
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg bg-[#D91E2B] active:bg-[#C01824] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(217,30,43,0.5)] transition-all"
        >
          <PhoneCall className="w-4 h-4 fill-white text-white shrink-0" />
          <span className="truncate">Telepon (Emergency)</span>
        </a>

        {/* Chat WhatsApp Button - Recognizable WhatsApp Green */}
        <a
          href={WhatsAppService.buildEmergencyCallUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg bg-[#25D366] active:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
          <span className="truncate">Chat WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
