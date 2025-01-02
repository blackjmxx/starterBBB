import { cva } from 'class-variance-authority';

export const stepperStyles = {
  connector: {
    solid: 'border-0',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  },
  thickness: {
    thin: 'border-t-[1px]',
    medium: 'border-t-2',
    thick: 'border-t-3',
  },
  spacing: {
    tight: 'mx-2',
    normal: 'mx-4',
    wide: 'mx-6',
  }
};

export const stepIconVariants = cva(
  'relative flex items-center justify-center rounded-full transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'h-6 w-6 text-xs',
        md: 'h-8 w-8 text-sm',
        lg: 'h-10 w-10 text-base',
      },
      variant: {
        default: 'border-2 border-primary bg-background text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
        primary: 'border-2 border-primary bg-background text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
        secondary: 'border-2 border-secondary bg-background text-secondary data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground',
        success: 'border-2 border-success bg-background text-success data-[active=true]:bg-success data-[active=true]:text-success-foreground',
        warning: 'border-2 border-warning bg-background text-warning data-[active=true]:bg-warning data-[active=true]:text-warning-foreground',
        error: 'border-2 border-error bg-background text-error data-[active=true]:bg-error data-[active=true]:text-error-foreground',
        info: 'border-2 border-info bg-background text-info data-[active=true]:bg-info data-[active=true]:text-info-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export const stepConnectorVariants = cva(
  'flex-1 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border-primary',
        primary: 'border-primary',
        secondary: 'border-secondary',
        success: 'border-success',
        warning: 'border-warning',
        error: 'border-error',
        info: 'border-info',
      },
      orientation: {
        horizontal: 'border-t my-auto mx-2',
        vertical: 'border-l mx-auto my-2',
      },
      style: {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
      },
      thickness: {
        thin: '[border-width:1px]',
        medium: 'border-2',
        thick: 'border-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
      style: 'solid',
      thickness: 'medium',
    },
  }
);

export const stepContentVariants = cva(
  'transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'mt-2 text-center',
        vertical: 'ml-4',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);