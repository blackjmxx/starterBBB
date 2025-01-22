'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const dialogVariants = cva(
  'relative transform overflow-hidden rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6',
  {
    variants: {
      type: {
        basic: '',
        confirmation: '',
        form: '',
        success: '',
        info: '',
      }
    },
    defaultVariants: {
      type: 'basic'
    }
  }
);

const buttonVariants = cva(
  'inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold shadow-sm sm:w-auto',
  {
    variants: {
      intent: {
        confirmation: 'bg-red-600 text-white hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400',
        primary: 'bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400',
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
);

interface DialogContentProps {
  variant: {
    type: string;
    title: string;
    description: string;
    icon?: React.ElementType;
    iconColor?: string;
  };
}

const DialogContent = ({ variant }: DialogContentProps) => {
  switch (variant.type) {
    case 'form':
      return (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border text-gray-900 bg-white dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border text-gray-900 bg-white dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
              Bio
            </label>
            <textarea
              className="w-full px-3 py-2 border text-gray-900 bg-white dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Tell us about yourself"
            />
          </div>
        </form>
      );
    default:
      return (
        <p className="text-gray-500 dark:text-gray-300">
          {variant.description}
        </p>
      );
  }
};

export interface DialogProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  variant?: {
    type: string;
    title: string;
    description: string;
    icon?: React.ElementType;
    iconColor?: string;
  };
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, type = 'basic', open, onClose, variant, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />

        <div className="flex min-h-full items-center justify-center p-4">
          <div
            ref={ref}
            className={cn(dialogVariants({ type, className }))}
            {...props}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="sm:flex sm:items-start">
              {variant?.icon && (
                <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${variant.iconColor}`}>
                  {React.createElement(variant.icon, { className: "h-6 w-6" })}
                </div>
              )}
              <div className={`mt-3 text-center ${variant?.icon ? 'sm:ml-4 sm:mt-0 sm:text-left' : ''}`}>
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  {variant?.title}
                </h3>
                <div className="mt-2">
                  {variant ? <DialogContent variant={variant} /> : children}
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
              <button
                type="button"
                onClick={onClose}
                className={cn(buttonVariants({ intent: type === 'confirmation' ? 'confirmation' : 'primary' }))}
              >
                {type === 'confirmation' ? 'Delete' : 'Confirm'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Dialog.displayName = 'Dialog';

export { Dialog, dialogVariants };