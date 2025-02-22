import * as LucideIcons from 'lucide-react';
import { ElementType } from 'react';

export type IconKey = keyof typeof LucideIcons;

const icons: Record<string, ElementType> = {
  overview: LucideIcons.LayoutDashboard,
  foundation: LucideIcons.Palette,
  analytics: LucideIcons.BarChart3,
  users: LucideIcons.Users,
  reports: LucideIcons.FileText,
  settings: LucideIcons.Settings,
  shuffle: LucideIcons.Shuffle,
  layout: LucideIcons.Layout,
  docs: LucideIcons.FileText,
  support: LucideIcons.MessageSquare,
  profile: LucideIcons.User,
  feedback: LucideIcons.MessageSquare,
  logout: LucideIcons.LogOut,
  close: LucideIcons.X,
};

export const getIcon = (key: string): ElementType => {
  return icons[key.toLowerCase()] || LucideIcons.HelpCircle;
}; 