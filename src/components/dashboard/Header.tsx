import {
  Lightbulb,
  LogOut,
  Moon,
  Search,
  Settings,
  ShieldCheck,
  Sun,
  UserCircle,
  Bell,
  Menu as MenuIcon
} from 'lucide-react';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Icon } from '../../aria-component/accessible-icon';
import { Button } from '../../aria-component/button';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../aria-component/menu';
import Link from 'next/link';
import { Kbd } from '../../aria-component/kbd';
import { Avatar } from '../../aria-component/avatar';
import { NotificationBadge } from '../../aria-component/notification-badge';
import { Text } from '../../aria-component/text';

interface DashboardHeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

export function DashboardHeader({ className = '', onToggleSidebar }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-8 text-accent"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M21 2H9a1 1 0 0 0-1 .999V7h8a1 1 0 0 1 1 .999V16h4a1 1 0 0 0 1-.999V3a1 1 0 0 0-.999-1z"
                  opacity="0.25"
                />
                <path
                  fill="currentColor"
                  d="M3 12h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"
                />
                <path
                  fill="currentColor"
                  d="M16 7H6a1 1 0 0 0-1 .999V12h6a1 1 0 0 1 1 .999V19h4a1 1 0 0 0 1-.999V8a1 1 0 0 0-.999-1z"
                  opacity="0.5"
                />
              </svg>
            </Icon>
            <Text>Company</Text>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex flex-1 gap-4">
              <li className="flex">
                <Link
                  href="/"
                  className={[
                    'p-2 hover:bg-zinc-100 hover:no-underline dark:hover:bg-zinc-800',
                    'before:absolute',
                    'before:left-0',
                    'before:-bottom-2',
                    "before:content-['']",
                    'before:w-full',
                    'before:border-b-2',
                    'before:border-accent',
                    'font-medium',
                  ].join(' ')}
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/projects"
                  className="p-2 font-medium text-muted hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                >
                  Projects
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/integrations"
                  className="p-2 font-medium text-muted hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                >
                  Integrations
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/apps"
                  className="p-2 font-medium text-muted hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                >
                  Apps
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            size="lg"
            variant="plain"
            className="group"
            onPress={toggleTheme}
          >
            <Icon>
              {theme === 'light' ? 
                <Moon className="text-muted group-hover:text-foreground" /> : 
                <Sun className="text-muted group-hover:text-foreground" />
              }
            </Icon>
          </Button>

          <Button
            variant="outline"
            className="hidden md:flex justify-start bg-white font-normal text-muted dark:bg-transparent"
          >
            <Icon><Search /></Icon>
            Quick search&hellip;
            <Kbd className="ml-auto px-1">⌘K</Kbd>
          </Button>

          <Button isIconOnly size="lg" variant="plain" className="group">
            <Icon aria-label="New Notification">
              <Bell className="text-muted group-hover:text-foreground" />
            </Icon>
            <NotificationBadge variant="dot" className="right-2 top-1.5" />
          </Button>

          <MenuTrigger>
            <MenuButton variant="plain" noIndicator className="flex items-center">
              <Avatar
                className="h-8 w-8 rounded-full"
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Marissa Whitaker"
              />
            </MenuButton>
            <MenuPopover className="mt-1 w-56" offset={4}>
              <Menu>
                <MenuItem>
                  <Icon><UserCircle /></Icon>
                  <MenuItemLabel>My profile</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <Icon><Settings /></Icon>
                  <MenuItemLabel>Settings</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <Icon><ShieldCheck /></Icon>
                  <MenuItemLabel>Privacy policy</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <Icon><Lightbulb /></Icon>
                  <MenuItemLabel>Share feedback</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <Icon><LogOut /></Icon>
                  <MenuItemLabel>Sign out</MenuItemLabel>
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </div>
    </header>
  );
}