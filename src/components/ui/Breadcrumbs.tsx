'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const breadcrumbsVariants = cva(
  'flex items-center space-x-2 text-sm',
  {
    variants: {
      type: {
        basic: '',
        'with-icons': '',
        collapsed: '',
      }
    },
    defaultVariants: {
      type: 'basic'
    }
  }
);

interface BreadcrumbItem {
  icon?: LucideIcon;
  label: string;
}

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbsVariants> {
  items: (string | BreadcrumbItem)[];
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, type = 'basic', items, ...props }, ref) => {
    const renderItems = (items: (string | BreadcrumbItem)[]) => {
      if (type === 'collapsed' && items.length > 4) {
        const start = items.slice(0, 2);
        const end = items.slice(-2);
        
        return (
          <>
            {start.map((item, i) => (
              <React.Fragment key={i}>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  {typeof item === 'string' ? item : item.label}
                </a>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </React.Fragment>
            ))}
            <span className="text-gray-400">...</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {end.map((item, i) => (
              <React.Fragment key={i}>
                {i === end.length - 1 ? (
                  <span className="text-gray-900 font-medium dark:text-white">
                    {typeof item === 'string' ? item : item.label}
                  </span>
                ) : (
                  <>
                    <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {typeof item === 'string' ? item : item.label}
                    </a>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </>
                )}
              </React.Fragment>
            ))}
          </>
        );
      }

      return items.map((item, i) => (
        <React.Fragment key={i}>
          {i === items.length - 1 ? (
            <span className="text-gray-900 font-medium dark:text-white">
              {typeof item === 'string' ? item : item.label}
            </span>
          ) : (
            <>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {typeof item === 'string' ? (
                  item
                ) : (
                  <>
                    {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                    {item.label}
                  </>
                )}
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </>
          )}
        </React.Fragment>
      ));
    };

    return (
      <nav 
        ref={ref} 
        className={cn(breadcrumbsVariants({ type, className }))} 
        {...props}
      >
        {renderItems(items)}
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs, breadcrumbsVariants };