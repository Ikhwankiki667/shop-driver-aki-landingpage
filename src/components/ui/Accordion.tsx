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
                ? 'bg-white border-[#DC2626] shadow-md shadow-red-500/10 ring-1 ring-red-500/20'
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 rounded-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded bg-red-50 text-[#DC2626] border border-red-200 font-mono shrink-0 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-base md:text-lg text-slate-900 group-hover:text-[#DC2626] transition-colors font-display tracking-wide">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#DC2626] transition-transform duration-300 shrink-0 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-gray-100 mt-1"
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
