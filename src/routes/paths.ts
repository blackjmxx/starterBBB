import { LayoutDashboard, Palette, BarChart3, Users, FileText, Settings, Shuffle, Layout, MessageSquare, User, LogOut } from 'lucide-react';
import { ElementType } from 'react';

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export interface MenuItem {
  icon: ElementType;
  title: string;
  path: string;
  onClick?: () => void;
}

export const paths = {
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/login`,
      register: `${ROOTS.AUTH}/register`,
    },
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    menu: {
      main: [
        {
          icon: LayoutDashboard,
          title: 'Overview',
          path: `${ROOTS.DASHBOARD}/overview`,
        },
        {
          icon: Palette,
          title: 'Foundation',
          path: `${ROOTS.DASHBOARD}/foundation`,
        },
        {
          icon: BarChart3,
          title: 'Analytics',
          path: `${ROOTS.DASHBOARD}/analytics`,
        },
        {
          icon: Users,
          title: 'Users',
          path: `${ROOTS.DASHBOARD}/users`,
        },
        {
          icon: FileText,
          title: 'Reports',
          path: `${ROOTS.DASHBOARD}/reports`,
        },
        {
          icon: Settings,
          title: 'Settings',
          path: `${ROOTS.DASHBOARD}/settings`,
        },
        {
          icon: Shuffle,
          title: 'Generate Colors',
          path: '#',
          onClick: undefined, // sera défini dans le composant
        },
      ],
      resources: [
        {
          icon: Layout,
          title: 'Design System',
          path: `${ROOTS.DASHBOARD}/design-system`,
        },
        {
          icon: FileText,
          title: 'Documentation',
          path: `${ROOTS.DASHBOARD}/docs`,
        },
        {
          icon: MessageSquare,
          title: 'Support',
          path: `${ROOTS.DASHBOARD}/support`,
        },
      ],
      user: [
        {
          icon: User,
          title: 'My Profile',
          path: `${ROOTS.DASHBOARD}/profile`,
        },
        {
          icon: Settings,
          title: 'Settings',
          path: `${ROOTS.DASHBOARD}/user-settings`,
        },
        {
          icon: MessageSquare,
          title: 'Share Feedback',
          path: `${ROOTS.DASHBOARD}/feedback`,
        },
        {
          icon: LogOut,
          title: 'Sign out',
          path: '#',
          onClick: undefined, // sera défini dans le composant
        },
      ],
    },
  },
} as const;

export type PathsType = typeof paths; 