'use client';
import layoutConfig from '@/config/layout.json';
import { useLayout } from '@/context/LayoutContext';
import { usePalette } from '@/context/PaletteContext';
import { BarChart3, ChevronLeft, ChevronRight, FileText, Layout, LayoutDashboard, LogOut, MessageSquare, Palette, Settings, Shuffle, User, Users, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
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
  icon: LucideIcon;
  title: string;
  path: string;
  children?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  level?: number;
  isOpen?: boolean;
  onToggle?: () => void;
}

const MenuItem = ({ item, level = 0, isOpen, onToggle }: MenuItemProps) => {
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  
  return (
    <div className="relative">
      {/* Si l'item a des enfants, on utilise un bouton pour le toggle */}
      {hasChildren ? (
        <button
          onClick={onToggle}
          className={`
            flex items-center justify-between w-full
            px-3 py-2 rounded-lg transition-colors
            text-gray-400 hover:bg-gray-700/50 hover:text-white
            ${level > 0 ? 'pl-8' : ''}
            ${pathname.startsWith(item.path) ? 'text-white' : ''}
          `}
        >
          <div className="flex items-center gap-3">
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </div>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        // Si l'item n'a pas d'enfants, on utilise soit un bouton (pour onClick) soit un Link
        item.onClick ? (
          <button
            onClick={item.onClick}
            className={`
              flex items-center justify-between w-full
              px-3 py-2 rounded-lg transition-colors
              text-gray-400 hover:bg-gray-700/50 hover:text-white
              ${level > 0 ? 'pl-8' : ''}
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </div>
          </button>
        ) : (
          <Link
            href={item.path}
            className={`
              flex items-center justify-between
              px-3 py-2 rounded-lg transition-colors
              ${pathname === item.path ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}
              ${level > 0 ? 'pl-8' : ''}
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </div>
          </Link>
        )
      )}
      
      {/* Sous-menu */}
      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.children.map((child) => (
            <MenuItem key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export function DashboardSidebar({ onClose }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLayout, setCurrentLayout } = useLayout();
  const { colors, setPalette } = usePalette();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

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

  const toggleMenu = (path: string) => {
    setOpenMenus(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
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
      <MenuItem
        key={item.path}
        item={item}
        isOpen={openMenus.includes(item.path)}
        onToggle={() => toggleMenu(item.path)}
      />
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
    <aside className="flex h-full flex-col">
      {/* Bouton de fermeture - Fixe */}
      <button
        onClick={onClose}
        className="md:hidden absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white z-10"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Zone scrollable - Tout le contenu */}
      <div className="flex-1 overflow-y-auto">
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