import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        circular: 'rounded-full',
        rounded: 'rounded-xl',
        square: 'rounded-none'
      },
      size: {
        xs: 'h-8 w-8 text-xs',
        sm: 'h-10 w-10 text-sm',
        md: 'h-12 w-12 text-base',
        lg: 'h-14 w-14 text-lg',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-20 w-20 text-2xl'
      }
    },
    defaultVariants: {
      variant: 'circular',
      size: 'md'
    }
  }
);

export const letterAvatarVariants = cva(
  'font-semibold bg-gradient-to-br shadow-sm',
  {
    variants: {
      color: {
        default: 'from-gray-100 to-gray-200 text-gray-700',
        primary: 'from-primary/80 to-primary text-white',
        secondary: 'from-secondary/80 to-secondary text-white',
        info: 'from-info/80 to-info text-white',
        success: 'from-success/80 to-success text-white',
        warning: 'from-warning/80 to-warning text-white',
        error: 'from-error/80 to-error text-white'
      }
    },
    defaultVariants: {
      color: 'default'
    }
  }
);

export const iconAvatarVariants = cva(
  'shadow-sm transition-transform hover:scale-105',
  {
    variants: {
      color: {
        default: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700',
        primary: 'bg-gradient-to-br from-primary/90 to-primary text-white',
        secondary: 'bg-gradient-to-br from-secondary/90 to-secondary text-white',
        info: 'bg-gradient-to-br from-info/90 to-info text-white',
        success: 'bg-gradient-to-br from-success/90 to-success text-white',
        warning: 'bg-gradient-to-br from-warning/90 to-warning text-white',
        error: 'bg-gradient-to-br from-error/90 to-error text-white'
      }
    },
    defaultVariants: {
      color: 'default'
    }
  }
);

export const groupVariants = cva(
  'flex items-center',
  {
    variants: {
      spacing: {
        sm: '-space-x-2',
        md: '-space-x-3',
        lg: '-space-x-4'
      }
    },
    defaultVariants: {
      spacing: 'md'
    }
  }
);

export const statusVariants = cva(
  'absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-900',
  {
    variants: {
      status: {
        online: 'bg-success shadow-success/50',
        offline: 'bg-gray-400',
        away: 'bg-warning shadow-warning/50',
        busy: 'bg-error shadow-error/50'
      }
    },
    defaultVariants: {
      status: 'offline'
    }
  }
);