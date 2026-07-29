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
        return (
          <div
            key={item.id}
            className={`rounded-xl transition-all duration-300 border ${
              isOpen
                ? 'bg-[#1A1A1D] border-[#E63946] shadow-[0_0_20px_rgba(230,57,70,0.15)]'
                : 'bg-[#131315] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20 font-mono shrink-0">
                  {item.category}
                </span>
                <h4 className="font-bold text-base md:text-lg text-white group-hover:text-[#E63946] transition-colors">
                  {item.question}
                </h4>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#E63946] transition-transform duration-300 shrink-0 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm md:text-base leading-relaxed border-t border-zinc-800/80 mt-1">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
