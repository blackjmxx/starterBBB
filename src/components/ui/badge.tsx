import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary hover:bg-primary/20 border-transparent',
        secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20 border-transparent',
        success: 'bg-success/10 text-success hover:bg-success/20 border-transparent',
        warning: 'bg-warning/10 text-warning hover:bg-warning/20 border-transparent',
        error: 'bg-error/10 text-error hover:bg-error/20 border-transparent',
        info: 'bg-info/10 text-info hover:bg-info/20 border-transparent',
        outline: 'border-2 bg-transparent'
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-0.5',
        lg: 'px-3 py-1'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

const notificationBadgeVariants = cva(
  'absolute inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warning text-warning-foreground',
        error: 'bg-error text-error-foreground',
        info: 'bg-info text-info-foreground'
      },
      size: {
        sm: 'min-w-[18px] h-4 text-[10px]',
        md: 'min-w-[20px] h-5 text-xs',
        lg: 'min-w-[24px] h-6 text-sm'
      },
      dot: {
        true: 'min-w-[8px] h-2 w-2 p-0',
        false: 'px-1.5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      dot: false
    }
  }
);

interface NotificationBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationBadgeVariants> {
  badgeContent?: React.ReactNode;
  children?: React.ReactNode;
  maxCount?: number;
  dot?: boolean;
  showZero?: boolean;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
}

function NotificationBadge({
  className,
  variant,
  size,
  dot,
  badgeContent: count,
  children,
  maxCount = 99,
  showZero = false,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  ...props
}: NotificationBadgeProps) {
  const show = typeof count !== 'undefined' ? (showZero || count !== 0) : true;
  const displayCount = typeof count === 'number' && count > maxCount ? `${maxCount}+` : count;

  if (!show) {
    return <>{children}</>;
  }

  const positionClasses = {
    'top-right': '-top-2 -right-2',
    'top-left': '-top-2 -left-2',
    'bottom-right': '-bottom-2 -right-2',
    'bottom-left': '-bottom-2 -left-2'
  }[`${anchorOrigin.vertical}-${anchorOrigin.horizontal}`];

  const badge = (
    <div
      className={cn(
        notificationBadgeVariants({ variant, size, dot }), 
        positionClasses,
        className
      )}
      {...props}
    >
      {!dot && displayCount}
    </div>
  );

  if (!children) {
    return badge;
  }

  return (
    <div className="relative inline-flex">
      {children}
      {badge}
    </div>
  );
}

export { Badge, NotificationBadge, badgeVariants, notificationBadgeVariants };