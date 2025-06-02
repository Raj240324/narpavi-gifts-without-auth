import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'bold' | 'large';
}

const GradientText = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}: GradientTextProps) => {
  const variantStyles = {
    default: 'text-base',
    bold: 'text-base font-semibold',
    large: 'text-lg md:text-xl font-medium'
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText; 