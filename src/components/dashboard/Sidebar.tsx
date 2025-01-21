'use client';
import { Coffee, PanelsTopLeft, BarChart3, Users, FileText, Settings, LogOut, Palette, Sun, Moon } from 'lucide-react';
import { usePalette } from '@/context/PaletteContext';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function DashboardSidebar() {
  const { colors } = usePalette();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const primaryColor = colors[2];

  const menuItems = [
    { icon: PanelsTopLeft, text: 'Overview', href: '/dashboard' },
    { icon: Palette, text: 'Foundation', href: '/dashboard/foundation' },
    { icon: BarChart3, text: 'Analytics', href: '/dashboard/analytics' },
    { icon: Users, text: 'Users', href: '/dashboard/users' },
    { icon: FileText, text: 'Reports', href: '/dashboard/reports' },
    { icon: Settings, text: 'Settings', href: '/dashboard/settings' }
  ];

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0">
      <div className="flex flex-col h-full bg-white dark:bg-gray-800">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Design System</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
} 