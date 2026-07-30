import React from 'react';
import Image from 'next/image';

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Image
    src="/whatsapp.svg"
    alt="WhatsApp"
    width={20}
    height={20}
    className={`${className} object-contain shrink-0`}
  />
);
