import { cn } from '@/lib/utils';
import { variants } from '../styles';

interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  vertical?: boolean;
  className?: string;
}

export function ButtonGroup({
  children,
  variant = 'default',
  size = 'md',
  vertical = false,
  className
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        'inline-flex',
        vertical ? 'flex-col' : 'flex-row',
        '[&>button]:rounded-none',
        '[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md',
        vertical && '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-r-none',
        '[&>button:not(:first-child)]:-ml-px',
        vertical && '[&>button:not(:first-child)]:ml-0 [&>button:not(:first-child)]:-mt-px',
        className
      )}
    >
      {children}
    </div>
  );
}