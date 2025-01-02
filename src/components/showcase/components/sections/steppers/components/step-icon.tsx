import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepIconProps {
  active?: boolean;
  completed?: boolean;
  icon: number | React.ReactNode;
  variant?: string;
  className?: string;
}

export function StepIcon({ active, completed, icon, variant = 'default', className }: StepIconProps) {
  const variantStyles = {
    default: 'border-primary text-primary',
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary',
    success: 'border-success text-success',
    warning: 'border-warning text-warning',
    error: 'border-error text-error',
    info: 'border-info text-info'
  };

  return (
    <div
      className={cn(
        'relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all',
        active && `bg-${variant} border-${variant} text-${variant}-foreground`,
        completed && `bg-${variant} border-${variant} text-${variant}-foreground`,
        !active && !completed && variantStyles[variant as keyof typeof variantStyles],
        className
      )}
    >
      {completed ? (
        <Check className="h-5 w-5" />
      ) : (
        <span className="text-sm font-medium">{icon}</span>
      )}
    </div>
  );
}