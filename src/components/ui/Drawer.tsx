'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const drawerVariants = cva(
  'fixed bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out',
  {
    variants: {
      position: {
        left: 'top-0 left-0 h-full w-80',
        right: 'top-0 right-0 h-full w-80',
        top: 'top-0 left-0 w-full h-96',
        bottom: 'bottom-0 left-0 w-full h-96',
      },
      isOpen: {
        true: '',
        false: '',
      }
    },
    compoundVariants: [
      {
        position: 'left',
        isOpen: true,
        className: 'translate-x-0'
      },
      {
        position: 'left',
        isOpen: false,
        className: '-translate-x-full'
      },
      {
        position: 'right',
        isOpen: true,
        className: 'translate-x-0'
      },
      {
        position: 'right',
        isOpen: false,
        className: 'translate-x-full'
      },
      {
        position: 'top',
        isOpen: true,
        className: 'translate-y-0'
      },
      {
        position: 'top',
        isOpen: false,
        className: '-translate-y-full'
      },
      {
        position: 'bottom',
        isOpen: true,
        className: 'translate-y-0'
      },
      {
        position: 'bottom',
        isOpen: false,
        className: 'translate-y-full'
      }
    ],
    defaultVariants: {
      position: 'left',
      isOpen: false
    }
  }
);

interface MenuItem {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export interface DrawerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  items?: MenuItem[];
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, position = 'left', open = false, onClose, title, items, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-black bg-opacity-25 transition-opacity"
          onClick={onClose}
        />

        <div
          ref={ref}
          className={cn(drawerVariants({ position, isOpen: open, className }))}
          {...props}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium  dark:text-white">
                {title || `${position.charAt(0).toUpperCase() + position.slice(1)}`}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items ? (
              <div className="space-y-2">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-300">{item.label}</span>
                  </button>
                ))}
              </div>
            ) : children}
          </div>
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

export { Drawer, drawerVariants };