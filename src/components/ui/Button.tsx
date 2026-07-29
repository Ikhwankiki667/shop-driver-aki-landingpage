import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emergency' | 'secondary' | 'outline' | 'ghost';
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
      'bg-[#E63946] hover:bg-[#DC2626] text-white shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] border border-[#E63946]',
    // Emergency SOS Red Action
    emergency:
      'bg-[#E63946] hover:bg-[#DC2626] text-white shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] border border-[#E63946]',
    // Metallic Dark Secondary with Red Glow
    secondary:
      'bg-[#1A1A1D] hover:bg-[#26262A] text-white border border-[rgba(230,57,70,0.3)] hover:border-[#E63946] hover:shadow-[0_0_15px_rgba(230,57,70,0.25)]',
    // Outline Emergency Red
    outline:
      'bg-transparent hover:bg-[rgba(230,57,70,0.12)] text-[#E63946] border border-[#E63946] hover:shadow-[0_0_15px_rgba(230,57,70,0.2)]',
    // Ghost Minimal
    ghost:
      'bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-white',
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
