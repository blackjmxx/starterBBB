import type { AvatarData } from './types';

export const avatarImages: AvatarData[] = [
  {
    name: "Lucian Obrien",
    src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp"
  },
  {
    name: "Deja Brady",
    src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp"
  },
  {
    name: "Harrison Stein",
    src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp"
  },
  {
    name: "Reece Chung",
    src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp"
  },
  {
    name: "Lainey Davidson",
    src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp"
  }
];

export const letterAvatars = [
  { letter: 'H', color: 'default' },
  { letter: 'R', color: 'primary' },
  { letter: 'L', color: 'secondary' },
  { letter: 'C', color: 'info' },
  { letter: 'M', color: 'success' },
  { letter: 'C', color: 'warning' },
  { letter: 'S', color: 'error' }
];

export const onlineStatuses = ['online', 'offline', 'away', 'busy'] as const;