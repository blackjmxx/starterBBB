import { Header } from './header';
import { DrawerMenu } from './drawer';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  drawerSide?: 'left' | 'right';
}

export function MainLayout({ children, drawerSide = 'left' }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DrawerMenu side={drawerSide} />
        <main className={cn(
          "flex-1 transition-all duration-300",
          "container mx-auto px-4 py-8"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}