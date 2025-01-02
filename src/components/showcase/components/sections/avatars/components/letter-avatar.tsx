import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { letterAvatarVariants } from '../styles';
import type { AvatarSize } from '../types';

interface LetterAvatarProps {
  letter: string;
  color: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: AvatarSize;
  className?: string;
}

export function LetterAvatar({ letter, color, size = 'md', className }: LetterAvatarProps) {
  return (
    <Avatar className={cn(letterAvatarVariants({ color }), className)}>
      <AvatarFallback>
        {letter}
      </AvatarFallback>
    </Avatar>
  );
}