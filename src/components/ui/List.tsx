'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const listVariants = cva(
  'bg-white dark:bg-gray-800 rounded-lg divide-y dark:divide-gray-700',
  {
    variants: {
      variant: {
        basic: '',
        icon: '',
        complex: ''
      }
    },
    defaultVariants: {
      variant: 'basic'
    }
  }
);

const listItemVariants = cva(
  'hover:bg-gray-50 dark:hover:bg-gray-700',
  {
    variants: {
      variant: {
        basic: 'flex items-center justify-between p-4 cursor-pointer',
        icon: 'flex items-center justify-between p-4 cursor-pointer',
        complex: 'p-4'
      }
    },
    defaultVariants: {
      variant: 'basic'
    }
  }
);

export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listVariants> {}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn(listVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

List.displayName = 'List';

interface ListItemBaseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listItemVariants> {
  icon?: LucideIcon;
  count?: number;
  avatar?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemBaseProps>(
  ({ className, variant, icon: Icon, count, avatar, title, email, phone, location, children, ...props }, ref) => {
    if (variant === 'complex') {
      return (
        <div
          ref={ref}
          className={cn(listItemVariants({ variant, className }))}
          {...props}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {avatar && (
                <img
                  src={avatar}
                  alt={title}
                  className="h-10 w-10 rounded-full"
                />
              )}
              <div>
                <h4 className="text-sm font-medium dark:text-white">{title}</h4>
                {(email || phone || location) && (
                  <div className="mt-1 space-y-1">
                    {email && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {Icon && <Icon className="h-4 w-4" />}
                        {email}
                      </div>
                    )}
                    {phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {Icon && <Icon className="h-4 w-4" />}
                        {phone}
                      </div>
                    )}
                    {location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {Icon && <Icon className="h-4 w-4" />}
                        {location}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(listItemVariants({ variant, className }))}
        {...props}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-gray-400" />}
          <span className="text-sm font-medium dark:text-white">{children}</span>
        </div>
        {count !== undefined ? (
          <span className="text-sm text-gray-500 dark:text-gray-400">{count}</span>
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-400" />
        )}
      </div>
    );
  }
);

ListItem.displayName = 'ListItem';

export { List, ListItem, listVariants, listItemVariants };