import { cva } from 'class-variance-authority';

export const alertStyles = {
  standard: 'bg-background/50 backdrop-blur-sm border shadow-sm',
  filled: 'text-white shadow-sm',
  outlined: 'border-2 bg-background/50 backdrop-blur-sm shadow-sm'
} as const;

export const alertVariants = cva(
  'relative flex items-center gap-3 p-3 transition-all duration-200',
  {
    variants: {
      variant: {
        info: '[&>svg]:text-info',
        success: '[&>svg]:text-success',
        warning: '[&>svg]:text-warning',
        error: '[&>svg]:text-error'
      },
      style: {
        standard: [
          'border-l-4',
          {
            info: 'border-l-info/50',
            success: 'border-l-success/50',
            warning: 'border-l-warning/50',
            error: 'border-l-error/50'
          }
        ],
        filled: [
          'border-none',
          {
            info: 'bg-info',
            success: 'bg-success',
            warning: 'bg-warning',
            error: 'bg-error'
          }
        ],
        outlined: [
          {
            info: 'border-info',
            success: 'border-success',
            warning: 'border-warning',
            error: 'border-error'
          }
        ]
      }
    },
    defaultVariants: {
      variant: 'info',
      style: 'standard'
    }
  }
);

export const buttonStyles = cva('transition-colors duration-200', {
  variants: {
    style: {
      standard: [
        'hover:bg-background/80',
        {
          info: 'text-info',
          success: 'text-success',
          warning: 'text-warning',
          error: 'text-error'
        }
      ],
      filled: 'text-white/90 hover:text-white hover:bg-white/10',
      outlined: [
        'hover:bg-background/80',
        {
          info: 'text-info',
          success: 'text-success',
          warning: 'text-warning',
          error: 'text-error'
        }
      ]
    }
  }
});