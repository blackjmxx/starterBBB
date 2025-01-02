import { cva } from 'class-variance-authority';

export const paginationVariants = cva(
  'transition-colors duration-200',
  {
    variants: {
      variant: {
        default: 'hover:bg-accent hover:text-accent-foreground',
        primary: 'hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
        secondary: 'hover:text-secondary data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground',
        success: 'hover:text-success data-[active=true]:bg-success data-[active=true]:text-success-foreground',
        warning: 'hover:text-warning data-[active=true]:bg-warning data-[active=true]:text-warning-foreground',
        error: 'hover:text-error data-[active=true]:bg-error data-[active=true]:text-error-foreground',
        info: 'hover:text-info data-[active=true]:bg-info data-[active=true]:text-info-foreground'
      },
      shape: {
        circular: 'rounded-full',
        rounded: 'rounded-md',
        square: 'rounded-none'
      },
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-9 w-9 text-sm',
        lg: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      shape: 'rounded',
      size: 'md'
    }
  }
);

export const paginationItemVariants = cva(
  'inline-flex items-center justify-center transition-colors duration-200',
  {
    variants: {
      variant: {
        text: 'hover:bg-accent/50',
        contained: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outlined: 'border-2 hover:bg-accent/50'
      }
    },
    defaultVariants: {
      variant: 'text'
    }
  }
);