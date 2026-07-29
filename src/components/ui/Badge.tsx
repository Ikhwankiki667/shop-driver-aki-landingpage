import React from 'react';

export interface BadgeProps {
  variant?: 'emergency' | 'red' | 'success' | 'metallic' | 'outline';
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
    emergency: 'bg-[#E63946]/20 border-[#E63946]/60 text-[#E63946]',
    red: 'bg-[#E63946]/15 border-[#E63946]/40 text-[#E63946]',
    success: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
    metallic: 'bg-[#1A1A1D] border-zinc-700 text-zinc-300',
    outline: 'bg-transparent border-zinc-700 text-zinc-400',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#E63946]" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]" />
        </span>
      )}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </span>
  );
};
