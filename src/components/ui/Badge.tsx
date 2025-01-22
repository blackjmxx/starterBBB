'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const colors = {
  red: {
    bg: 'bg-red-100 dark:bg-red-900/20',
    text: 'text-red-800 dark:text-red-200',
    dot: 'bg-red-500'
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/20',
    text: 'text-blue-800 dark:text-blue-200',
    dot: 'bg-blue-500'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/20',
    text: 'text-green-800 dark:text-green-200',
    dot: 'bg-green-500'
  }
};

const badgeVariants = cva(
  '',
  {
    variants: {
      type: {
        dot: 'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-800',
        count: 'absolute -top-2 -right-2 h-5 min-w-[20px] rounded-full px-1.5 py-0.5 text-xs font-medium flex items-center justify-center ring-2 ring-white dark:ring-gray-800',
        standalone: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'
      },
      color: {
        red: '',
        blue: '',
        green: ''
      }
    },
    defaultVariants: {
      type: 'count',
      color: 'red'
    }
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  count?: number;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type, color = 'red', count, icon: Icon, label, ...props }, ref) => {
    const colorStyles = colors[color as keyof typeof colors];
    
    const containerClasses = cn(
      'relative inline-flex',
      className
    );

    const badgeClasses = cn(
      badgeVariants({ type, color }),
      type === 'dot' ? colorStyles.dot : colorStyles.bg,
      type !== 'dot' ? colorStyles.text : undefined
    );

    if (type === 'standalone') {
      return (
        <span className={badgeClasses} ref={ref as React.Ref<HTMLSpanElement>} {...props} />
      );
    }

    return (
      <div className={containerClasses} ref={ref}>
        <button className="inline-flex items-center justify-center p-2 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
          {Icon && <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
        </button>
        <span className={badgeClasses}>
          {type === 'count' && count}
        </span>
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };