import { cva } from 'class-variance-authority';

export const drawerVariants = cva(
  'fixed z-[9999] bg-background shadow-lg transition-all duration-300 ease-in-out m-0',
  {
    variants: {
      variant: {
        default: 'border-border',
        primary: 'border-primary',
        secondary: 'border-secondary',
        success: 'border-success',
        warning: 'border-warning',
        error: 'border-error',
        info: 'border-info'
      },
      side: {
        top: [
          'fixed inset-x-0 top-0 border-b h-[50vh]',
          'data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0'
        ],
        bottom: [
          'fixed inset-x-0 bottom-0 border-t h-[50vh]',
          'data-[state=closed]:translate-y-full data-[state=open]:translate-y-0'
        ],
        left: [
          'fixed inset-y-0 left-0 border-r w-3/4 sm:w-[400px]',
          'data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0'
        ],
        right: [
          'fixed inset-y-0 right-0 border-l w-3/4 sm:w-[400px]',
          'data-[state=closed]:translate-x-full data-[state=open]:translate-x-0'
        ]
      }
    },
    defaultVariants: {
      variant: 'default',
      side: 'right'
    }
  }
);

export const drawerContentVariants = cva('flex flex-col h-full', {
  variants: {
    side: {
      top: 'overflow-y-auto',
      bottom: 'overflow-y-auto',
      left: '',
      right: ''
    }
  },
  defaultVariants: {
    side: 'right'
  }
});