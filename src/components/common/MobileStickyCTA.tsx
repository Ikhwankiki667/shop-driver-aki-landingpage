'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { WhatsAppService } from '../../services/WhatsAppService';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-2xl gpu-layer">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* Telepon (Emergency) Button - 42px Touch Target */}
        <a
          href={WhatsAppService.buildPhoneCallUrl()}
          className="flex items-center justify-center gap-1.5 min-h-[42px] py-2 px-2.5 rounded-xl bg-[#DC2626] active:bg-[#B91C1C] text-white font-extrabold text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
          aria-label="Panggil Telepon Darurat ShopDrive Aki"
        >
          <PhoneCall className="w-4 h-4 fill-white text-white shrink-0" />
          <span className="truncate font-display">SOS TELEPON</span>
        </a>

        {/* Chat WhatsApp Button - 42px Touch Target */}
        <button
          onClick={() => WhatsAppService.openEmergencyWhatsAppWithGPS()}
          className="flex items-center justify-center gap-1.5 min-h-[42px] py-2 px-2.5 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-all cursor-pointer"
          aria-label="Chat WhatsApp Darurat ShopDrive Aki"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span className="truncate font-display">CHAT WHATSAPP</span>
        </button>

      </div>
    </div>
  );
};
