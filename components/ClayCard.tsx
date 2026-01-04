import React from 'react';

interface ClayCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'surface' | 'inset' | 'active' | 'glass';
}

export const ClayCard: React.FC<ClayCardProps> = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'surface'
}) => {
  let styleClass = "bg-clay-surface shadow-clay-md rounded-2xl border-t border-l border-white/60";
  
  if (variant === 'inset') {
    styleClass = "bg-clay-inset shadow-clay-inner rounded-2xl border-b border-r border-white/60";
  } else if (variant === 'active') {
    styleClass = "bg-clay-surface shadow-clay-sm ring-2 ring-clay-primary/20 rounded-2xl border-t border-l border-white/40 transform scale-[0.98]";
  } else if (variant === 'glass') {
    styleClass = "bg-clay-surface/40 backdrop-blur-md shadow-clay-lg rounded-3xl border border-white/30";
  }

  return (
    <div 
      className={`transition-all duration-300 ease-out relative ${styleClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const ClayButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'icon' | 'default' }> = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const base = "transition-all active:scale-95 duration-200 flex items-center justify-center font-bold tracking-wide";
  let specific = "bg-clay-surface text-clay-text shadow-clay-sm hover:shadow-clay-md px-6 py-3 rounded-xl border-t border-l border-white/50 active:shadow-clay-inner-sm";
  
  if (variant === 'primary') {
    specific = "bg-clay-primary text-white shadow-clay-md hover:brightness-110 px-6 py-3 rounded-xl border-t border-l border-white/20 active:shadow-clay-inner";
  } else if (variant === 'icon') {
    specific = "w-12 h-12 rounded-full bg-clay-surface text-clay-secondary shadow-clay-sm hover:text-clay-primary border-t border-l border-white/50 active:shadow-clay-inner-sm p-0";
  }

  return (
    <button className={`${base} ${specific} ${className}`} {...props}>
      {children}
    </button>
  );
};