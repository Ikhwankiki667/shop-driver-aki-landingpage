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
      'bg-[#D91E2B] hover:bg-[#C01824] text-white shadow-[0_0_20px_rgba(217,30,43,0.4)] hover:shadow-[0_0_30px_rgba(217,30,43,0.6)] border border-[#D91E2B] active:scale-95',
    // Emergency SOS Red Action
    emergency:
      'bg-[#D91E2B] hover:bg-[#C01824] text-white shadow-[0_0_20px_rgba(217,30,43,0.5)] hover:shadow-[0_0_30px_rgba(217,30,43,0.7)] border border-[#D91E2B] active:scale-95',
    // Metallic Dark Secondary with Red or Amber Accent
    secondary:
      'bg-[#1A1A1D] hover:bg-[#242428] text-white border border-[rgba(217,30,43,0.35)] hover:border-[#FF9500] hover:text-[#FF9500] hover:shadow-[0_0_15px_rgba(255,149,0,0.25)] active:scale-95',
    // Amber Secondary Accent Outline Button
    amberOutline:
      'bg-transparent hover:bg-[#FF9500]/10 text-[#FF9500] border border-[#FF9500]/70 hover:border-[#FF9500] hover:shadow-[0_0_15px_rgba(255,149,0,0.3)] active:scale-95',
    // Outline Emergency Red
    outline:
      'bg-transparent hover:bg-[#D91E2B]/10 text-white hover:text-white border border-[#D91E2B]/60 hover:border-[#D91E2B] hover:shadow-[0_0_15px_rgba(217,30,43,0.3)] active:scale-95',
    // Ghost Minimal
    ghost:
      'bg-transparent hover:bg-white/10 text-zinc-300 hover:text-white',
  };

  const beaconClass = beaconGlow
    ? 'relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-white/20 before:animate-ping before:opacity-75'
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
