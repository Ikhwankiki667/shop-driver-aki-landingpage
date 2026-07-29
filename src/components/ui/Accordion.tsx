'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { IFAQItem } from '../../types';

export interface AccordionProps {
  items: IFAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `faq-header-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-xl transition-all duration-300 border ${
              isOpen
                ? 'bg-[#1A1A1D] border-[#D91E2B] shadow-[0_0_20px_rgba(217,30,43,0.2)]'
                : 'bg-[#131315] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#D91E2B]/50 rounded-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded bg-[#D91E2B]/15 text-[#D91E2B] border border-[#D91E2B]/30 font-mono shrink-0 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-base md:text-lg text-white group-hover:text-[#D91E2B] transition-colors font-display tracking-wide">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#D91E2B] transition-transform duration-300 shrink-0 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-6 pb-6 pt-2 text-zinc-300 text-sm md:text-base leading-relaxed border-t border-zinc-800/80 mt-1"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
