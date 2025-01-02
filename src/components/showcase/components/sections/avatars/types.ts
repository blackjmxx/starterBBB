export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarVariant = 'circular' | 'rounded' | 'square';

export interface AvatarData {
  name: string;
  src: string;
  size?: AvatarSize;
}

export interface AvatarGroupData {
  max?: number;
  spacing?: number;
  avatars: AvatarData[];
}