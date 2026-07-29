import React from 'react';

export interface BadgeProps {
  variant?: 'emergency' | 'red' | 'amber' | 'success' | 'metallic' | 'outline';
  pulse?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'red',
  pulse = false,
  leftIcon,
  children,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border select-none';

  const variantStyles = {
    emergency: 'bg-[#D91E2B]/20 border-[#D91E2B]/60 text-[#D91E2B]',
    red: 'bg-[#D91E2B]/15 border-[#D91E2B]/40 text-white',
    amber: 'bg-[#FF9500]/15 border-[#FF9500]/50 text-[#FF9500]',
    success: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
    metallic: 'bg-[#1A1A1D] border-zinc-700 text-zinc-300',
    outline: 'bg-transparent border-zinc-700 text-zinc-400',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#D91E2B]" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91E2B]" />
        </span>
      )}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </span>
  );
};
