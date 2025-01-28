'use client';
import layoutConfig from '@/config/layout.json';
import { useLayout } from '@/context/LayoutContext';
import { usePalette } from '@/context/PaletteContext';
import { BarChart3, FileText, Layout, LayoutDashboard, LogOut, MessageSquare, Palette, Settings, Shuffle, User, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface Layout {
  name: string;
  description: string;
}

interface LayoutConfig {
  layouts: Layout[];
}

const typedLayoutConfig: LayoutConfig = layoutConfig;

interface MenuItem {
  icon: React.ElementType;
  text: string;
  href: string;
  onClick?: () => void;
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLayout, setCurrentLayout } = useLayout();
  const { colors, setPalette } = usePalette();

  const handleSignOut = () => {
    // Placeholder for sign out logic
    console.log('Signing out...');
    // Redirect to login page or home page after sign out
    router.push('/');
  };

  const handleLayoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLayout = event.target.value;
    setCurrentLayout(newLayout);
    console.log('Layout changed to:', newLayout);
  };

  const handleColorGeneration = () => {
    // Generate a new color palette
    const newColors = Array.from({ length: 6 }, () =>
      '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    );
    setPalette(newColors);
    console.log('New color palette generated:', newColors);
  };

  const mainMenuItems: MenuItem[] = [
    { icon: LayoutDashboard, text: 'Overview', href: '/dashboard' },
    { icon: Palette, text: 'Foundation', href: '/dashboard/foundation' },
    { icon: BarChart3, text: 'Analytics', href: '/dashboard/analytics' },
    { icon: Users, text: 'Users', href: '/dashboard/users' },
    { icon: FileText, text: 'Reports', href: '/dashboard/reports' },
    { icon: Settings, text: 'Settings', href: '/dashboard/settings' },
    { icon: Shuffle, text: 'Generate Colors', href: '#', onClick: handleColorGeneration }
  ];

  const renderLayoutSelector = () => (
    <div className="flex items-center gap-3 px-3 py-2">
      <Layout className="h-5 w-5 text-gray-400" />
      <select
        value={currentLayout}
        onChange={handleLayoutChange}
        className="bg-gray-700 text-white rounded-lg p-1 text-sm"
      >
        {typedLayoutConfig.layouts.map((layout: Layout) => (
          <option key={layout.name} value={layout.name}>
            {layout.description}
          </option>
        ))}
      </select>
    </div>
  );

  const userMenuItems: MenuItem[] = [
    { icon: User, text: 'My profile', href: '/dashboard/profile' },
    { icon: Settings, text: 'Settings', href: '/dashboard/user-settings' },
    { icon: MessageSquare, text: 'Share feedback', href: '/dashboard/feedback' },
    { icon: LogOut, text: 'Sign out', href: '#', onClick: handleSignOut }
  ];

  const renderMenuItems = (items: MenuItem[]) => (
    items.map((item: MenuItem) => (
      item.onClick ? (
        <button
          key={item.text}
          onClick={item.onClick}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left text-gray-400 hover:bg-gray-700/50 hover:text-white`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.text}</span>
        </button>
      ) : (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
            pathname === item.href
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.text}</span>
        </Link>
      )
    ))
  );

  return (
    <aside className={`w-64 bg-gray-800 h-screen sticky top-0`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4">
          <span className="text-xl font-semibold text-white">Design System</span>
          <span className="text-sm text-gray-400 block mt-1">Layout: {currentLayout}</span>
          <span className="text-sm text-gray-400 block">Palette: {colors.join(', ')}</span>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {renderMenuItems(mainMenuItems)}
          {renderLayoutSelector()}
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-gray-700">
          {renderMenuItems(userMenuItems)}
        </div>
      </div>
    </aside>
  );
}