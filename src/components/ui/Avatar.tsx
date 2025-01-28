'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { User, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        image: '',
        initials: 'bg-muted',
        icon: 'bg-muted',
      },
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-12 w-12 text-sm',
        lg: 'h-16 w-16 text-base',
        xl: 'h-20 w-20 text-lg',
      },
    },
    defaultVariants: {
      variant: 'initials',
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
  icon?: LucideIcon;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, variant, size, src, alt, initials, icon: Icon, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    // Determine actual variant based on props and error state
    const actualVariant = src && !hasError ? 'image' : initials ? 'initials' : 'icon';

    return (
      <div
        className={cn(avatarVariants({ variant: actualVariant, size, className }))}
        ref={ref}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : initials ? (
          <p className="flex h-full w-full items-center justify-center font-medium">
            {initials}
          </p>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {Icon ? <Icon className="h-1/2 w-1/2 dark:text-gray-200" /> : <User className="h-1/2 w-1/2 dark:text-gray-200" />}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

// Avatar Group Component
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, max = 4, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const excess = childrenArray.length - max;
    const visibleAvatars = childrenArray.slice(0, max);

    return (
      <div 
        className={cn("flex -space-x-4", className)}
        ref={ref}
        {...props}
      >
        {visibleAvatars}
        {excess > 0 && (
          <Avatar
            initials={`+${excess}`}
            className="ring-2 ring-background"
          />
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = 'AvatarGroup';

export { Avatar, AvatarGroup, avatarVariants };