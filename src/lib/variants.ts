import { cva } from 'class-variance-authority';

// Base variants communs à tous les composants
const baseVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  success: 'bg-success text-success-foreground hover:bg-success/90',
  error: 'bg-error text-error-foreground hover:bg-error/90',
  warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
  info: 'bg-info text-info-foreground hover:bg-info/90',
};

// Variantes pour les inputs
export const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        success: 'border-success focus-visible:ring-success',
        error: 'border-error focus-visible:ring-error',
        warning: 'border-warning focus-visible:ring-warning',
        info: 'border-info focus-visible:ring-info',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 text-sm',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// ... autres variantes existantes ...