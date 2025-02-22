import {
  Lightbulb,
  LogOut,
  Moon,
  SearchIcon,
  Settings,
  ShieldCheck,
  Sun,
  UserCircle
} from 'lucide-react';
import React from 'react';
import { Icon } from '../../aria-component/accessible-icon';
import { Avatar } from '../../aria-component/avatar';
import { Button } from '../../aria-component/button';
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogHeader,
  DialogTrigger,
} from '../../aria-component/dialog';
import { Kbd } from '../../aria-component/kbd';
import { Link } from '../../aria-component/link';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../aria-component/menu';
import { Modal } from '../../aria-component/modal';
import { NotificationBadge } from '../../aria-component/notification-badge';
import { Strong } from '../../aria-component/text';
import { useTheme } from '../../context/ThemeContext';

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

export function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex w-full flex-col">
      <header className="flex h-14 items-center px-2 md:px-6 lg:px-8">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="mx-auto flex w-full max-w-7xl">
          <div className="flex hidden space-x-4 lg:flex">
            <div className="mr-3 flex items-center gap-2">
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
              <Strong>Company</Strong>
            </div>

            <nav className="flex">
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
                    href="/"
                    className="p-2 font-medium text-muted hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Projects
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/"
                    className="p-2 font-medium text-muted hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/"
                    className="p-2 font-medium text-muted  hover:bg-zinc-100 hover:text-foreground hover:no-underline dark:hover:bg-zinc-800"
                  >
                    Apps
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button
              isIconOnly
              size="lg"
              variant="plain"
              className="group"
              onPress={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <Icon>
                {theme === 'light' ? <Moon className="text-muted group-hover:text-foreground" /> : <Sun className="text-muted group-hover:text-foreground" />}
              </Icon>
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-white font-normal text-muted dark:bg-transparent"
            >
              <Icon>
                <SearchIcon />
              </Icon>
              Quick search&hellip;
              <Kbd className="ml-auto px-1">⌘K</Kbd>
            </Button>
            <Button isIconOnly size="lg" variant="plain" className="group">
              <Icon aria-label="New Notification">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-muted group-hover:text-foreground"
                >
                  <path
                    fill="currentColor"
                    d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"
                  ></path>
                </svg>
              </Icon>

              <NotificationBadge variant="dot" className="right-2 top-1.5" />
            </Button>
            <MenuTrigger>
              <MenuButton variant="plain" noIndicator>
                <Avatar
                  className="size-8"
                  src="https://i.imgur.com/xIe7Wlb.png"
                  alt="Marissa Whitaker"
                />
              </MenuButton>
              <MenuPopover
                placement="bottom end"
                className="min-w-64"
                offset={4}
              >
                <Menu>
                  <MenuItem>
                    <Icon>
                      <UserCircle />
                    </Icon>
                    <MenuItemLabel>My profile</MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <Icon>
                      <Settings />
                    </Icon>
                    <MenuItemLabel>Settings</MenuItemLabel>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <Icon>
                      <ShieldCheck />
                    </Icon>
                    <MenuItemLabel>Privacy policy</MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <Icon>
                      <Lightbulb />
                    </Icon>
                    <MenuItemLabel>Share feedback</MenuItemLabel>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <Icon>
                      <LogOut />
                    </Icon>
                    <MenuItemLabel>Sign out</MenuItemLabel>
                  </MenuItem>
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          </div>
        </div>
      </header>
    </div>
  );
}

const HamburgerMenu: React.FC = () => {
  return (
    <DialogTrigger>
      <Button variant="plain" isIconOnly className="text-muted lg:hidden">
        <Icon aria-label="Open Navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </Icon>
      </Button>
      <Modal drawer size="xs" isDismissable>
        <Dialog>
          <DialogHeader>
            <div className="flex items-center gap-2.5">
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
              <Strong>Company</Strong>
            </div>
          </DialogHeader>
          <DialogCloseButton />

          <DialogBody className="px-0">
            <nav className="flex flex-1 flex-col">
              <ul className="grid gap-y-0.5 p-4 px-1.5">
                <li>
                  <Link
                    href="/"
                    className={[
                      'w-full gap-x-2.5 p-2 font-medium text-foreground hover:no-underline sm:text-sm/5',
                      'before:absolute',
                      'before:-left-1.5',
                      "before:content-['']",
                      'before:h-[calc(100%-0.5rem)]',
                      'before:border-l-2',
                      'before:border-accent',
                      'focus-visible:outline-offset-0',
                      'font-medium',
                    ].join(' ')}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="w-full gap-x-2.5 p-2 font-medium font-medium text-muted hover:text-foreground hover:no-underline sm:text-sm/5"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="w-full gap-x-2.5 p-2 font-medium text-muted hover:text-foreground hover:no-underline sm:text-sm/5"
                  >
                    Integration
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="w-full gap-x-2.5 p-2 font-medium text-muted hover:text-foreground hover:no-underline sm:text-sm/5"
                  >
                    Apps
                  </Link>
                </li>
              </ul>
            </nav>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};