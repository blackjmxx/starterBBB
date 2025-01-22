'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const colors = {
  default: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300', soft: 'bg-gray-50' },
  primary: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300', soft: 'bg-blue-50' },
  success: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300', soft: 'bg-green-50' },
  warning: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', soft: 'bg-yellow-50' },
  error: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300', soft: 'bg-red-50' }
};

const chipVariants = cva(
  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
  {
    variants: {
      variant: {
        filled: '',
        outlined: 'border bg-transparent',
        soft: '',
      },
      color: {
        default: '',
        primary: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      color: 'default',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  icon?: LucideIcon;
  onDelete?: () => void;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = 'filled', color = 'default', icon: Icon, onDelete, children, ...props }, ref) => {
    const colorStyles = colors[color as keyof typeof colors];
    const baseStyles = cn(
      chipVariants({ variant, color }),
      variant === 'filled' && colorStyles.bg,
      variant === 'outlined' && colorStyles.border,
      variant === 'soft' && colorStyles.soft,
      colorStyles.text,
      onDelete && 'pr-2',
      className
    );

    return (
      <div className={baseStyles} ref={ref} {...props}>
        {Icon && <Icon className="w-4 h-4 mr-1" />}
        <span className={onDelete ? 'mr-1' : ''}>
          {children}
        </span>
        {onDelete && (
          <button
            className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            onClick={onDelete}
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

export { Chip, chipVariants };