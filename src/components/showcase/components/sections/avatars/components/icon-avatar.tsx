import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { iconAvatarVariants } from '../styles';
import { Folder } from 'lucide-react';
import type { AvatarSize } from '../types';

interface IconAvatarProps {
  color: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: AvatarSize;
  className?: string;
}

export function IconAvatar({ color, size = 'md', className }: IconAvatarProps) {
  return (
    <Avatar className={cn(iconAvatarVariants({ color }), className)}>
      <Folder className="h-1/2 w-1/2" />
    </Avatar>
  );
}