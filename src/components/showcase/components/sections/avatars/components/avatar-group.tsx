import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { groupVariants, avatarVariants } from '../styles';
import type { AvatarGroupData, AvatarSize, AvatarVariant } from '../types';

interface AvatarGroupProps extends AvatarGroupData {
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}

export function AvatarGroup({ 
  avatars, 
  max = 3, 
  size = 'md',
  variant = 'circular',
  spacing = 'md',
  className 
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={cn(groupVariants({ spacing }), className)}>
      {visibleAvatars.map((avatar, index) => (
        <Avatar 
          key={index}
          className={cn(
            avatarVariants({ size, variant }),
            'ring-2 ring-background'
          )}
        >
          <AvatarImage src={avatar.src} alt={avatar.name} />
          <AvatarFallback>
            {avatar.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      ))}
      
      {remainingCount > 0 && (
        <Avatar 
          className={cn(
            avatarVariants({ size, variant }),
            'ring-2 ring-background bg-muted'
          )}
        >
          <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}