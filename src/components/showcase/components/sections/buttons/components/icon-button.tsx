import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { variants } from '../styles';

interface IconButtonProps {
  icon: LucideIcon;
  variant?: keyof typeof variants;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function IconButton({
  icon: Icon,
  variant = 'default',
  size = 'md',
  className,
  onClick,
  disabled
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10',
    xl: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  };

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={onClick}
      disabled={disabled}
      className={cn(sizeClasses[size], className)}
    >
      <Icon className={iconSizes[size]} />
    </Button>
  );
}