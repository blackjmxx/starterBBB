import { Palette } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Palette className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Design System</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}