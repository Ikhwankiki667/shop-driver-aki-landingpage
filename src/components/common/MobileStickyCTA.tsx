'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* Telepon (Emergency) Button - 52px Touch Target */}
        <a
          href={WhatsAppService.buildPhoneCallUrl()}
          className="flex items-center justify-center gap-2 min-h-[52px] py-3.5 px-3 rounded-xl bg-[#DC2626] active:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
          aria-label="Panggil Telepon Darurat ShopDrive"
        >
          <PhoneCall className="w-5 h-5 fill-white text-white shrink-0" />
          <span className="truncate font-display">SOS TELEPON</span>
        </a>

        {/* Chat WhatsApp Button - 52px Touch Target */}
        <a
          href={WhatsAppService.buildEmergencyCallUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[52px] py-3.5 px-3 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
          aria-label="Chat WhatsApp Darurat ShopDrive"
        >
          <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
          <span className="truncate font-display">CHAT WHATSAPP</span>
        </a>

      </div>
    </div>
  );
};
