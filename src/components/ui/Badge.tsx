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
    emergency: 'bg-red-50 border-red-200 text-[#DC2626] shadow-sm',
    red: 'bg-red-50 border-red-200 text-[#DC2626]',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    metallic: 'bg-slate-100 border-gray-200 text-slate-700',
    outline: 'bg-transparent border-gray-300 text-slate-600',
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
