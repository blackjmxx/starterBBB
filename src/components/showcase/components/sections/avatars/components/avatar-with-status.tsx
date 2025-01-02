import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { avatarVariants, statusVariants } from '../styles';
import type { AvatarSize, AvatarVariant } from '../types';

interface AvatarWithStatusProps {
  src: string;
  name: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}

export function AvatarWithStatus({
  src,
  name,
  status,
  size = 'md',
  variant = 'circular',
  className
}: AvatarWithStatusProps) {
  return (
    <div className="relative inline-block">
      <Avatar className={cn(avatarVariants({ size, variant }), className)}>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback>
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <span className={statusVariants({ status })} />
    </div>
  );
}