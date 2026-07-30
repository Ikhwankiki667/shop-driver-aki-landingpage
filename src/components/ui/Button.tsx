import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emergency' | 'secondary' | 'outline' | 'ghost' | 'amberOutline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  beaconGlow?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  beaconGlow = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-300 rounded-lg select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
    xl: 'text-lg px-10 py-5 gap-3',
  };

  const variantStyles = {
    // Primary Emergency Red Action
    primary:
      'bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-md shadow-red-500/25 border border-[#DC2626] active:scale-95',
    // Emergency SOS Red Action
    emergency:
      'bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-md shadow-red-500/30 border border-[#DC2626] active:scale-95',
    // Light Card Secondary
    secondary:
      'bg-white hover:bg-slate-100 text-slate-900 border border-gray-300 shadow-sm active:scale-95',
    // Amber Secondary Accent Button
    amberOutline:
      'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 shadow-sm active:scale-95',
    // Outline Emergency Red
    outline:
      'bg-white hover:bg-red-50 text-[#DC2626] border border-red-300 shadow-sm active:scale-95',
    // Ghost Minimal
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900',
  };

  const beaconClass = beaconGlow
    ? 'relative shadow-[0_0_15px_rgba(220,38,38,0.35)] transition-shadow duration-300'
    : '';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${beaconClass} ${widthClass} ${className}`}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
