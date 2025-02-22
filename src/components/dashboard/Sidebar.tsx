'use client';
import layoutConfig from '@/config/layout.json';
import { useLayout } from '@/context/LayoutContext';
import { usePalette } from '@/context/PaletteContext';
import { BarChart3, ChevronLeft, ChevronRight, FileText, Layout, LayoutDashboard, LogOut, MessageSquare, Palette, Settings, Shuffle, User, Users, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { paths } from '@/routes/paths';
import { ElementType } from 'react';

interface Layout {
  name: string;
  description: string;
}

interface LayoutConfig {
  layouts: Layout[];
}

const typedLayoutConfig: LayoutConfig = layoutConfig;

interface DashboardSidebarProps {
  onClose?: () => void;
}

interface MenuItem {
  icon: ElementType;
  title: string;
  path: string;
  onClick?: () => void;
}

export function DashboardSidebar({ onClose }: DashboardSidebarProps) {
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

  const renderMenuItems = (items: MenuItem[]) => (
    items.map((item) => (
      item.onClick ? (
        <button
          key={item.title}
          onClick={item.onClick}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left text-gray-400 hover:bg-gray-700/50 hover:text-white`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.title}</span>
        </button>
      ) : (
        <Link
          key={item.path}
          href={item.path}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
            pathname === item.path
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.title}</span>
        </Link>
      )
    ))
  );

  // Adapter les items du menu avec la nouvelle structure
  const mainMenuItems = paths.dashboard.menu.main.map(item => ({
    ...item,
  }));

  const userMenuItems = paths.dashboard.menu.user.map(item => ({
    ...item,
    onClick: item.title === 'Sign out' ? handleSignOut : undefined,
  }));

  return (
    <aside className="bg-gray-800 fixed top-0 bottom-0 left-0 w-64">
      {/* Bouton de fermeture - Fixe */}
      <button
        onClick={onClose}
        className="md:hidden absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white z-10"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Zone scrollable - Tout le contenu */}
      <div className="h-full overflow-y-auto">
        {/* Logo */}
        <div className="p-4">
          <span className="text-xl font-semibold text-white">Design System</span>
          <span className="text-sm text-gray-400 block mt-1">Layout: {currentLayout}</span>
          <span className="text-sm text-gray-400 block">Palette: {colors.join(', ')}</span>
        </div>

        {/* Main Navigation */}
        <nav className="p-4 space-y-1">
          {renderMenuItems(mainMenuItems)}
          {renderLayoutSelector()}
        </nav>

        {/* Secondary Navigation */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-700/20">
          <div className="mb-2 px-3 text-xs font-semibold text-gray-400 uppercase">
            Resources
          </div>
          {renderMenuItems([...paths.dashboard.menu.resources])}
        </div>

        {/* User Menu */}
        <div className="p-4 border-t border-gray-700">
          {renderMenuItems(userMenuItems)}
        </div>
      </div>
    </aside>
  );
}