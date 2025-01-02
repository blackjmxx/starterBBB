import { cn } from '@/lib/utils';

interface StepConnectorProps {
  active?: boolean;
  completed?: boolean;
  variant?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function StepConnector({ 
  active, 
  completed, 
  variant = 'default',
  orientation = 'horizontal',
  className 
}: StepConnectorProps) {
  return (
    <div
      className={cn(
        'transition-all duration-200',
        orientation === 'horizontal' ? 'h-[2px] flex-1' : 'w-[2px] flex-1',
        active || completed ? `bg-${variant}` : 'bg-border',
        className
      )}
    />
  );
}