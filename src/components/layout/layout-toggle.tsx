import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MainLayout } from './main-layout';
import { PanelLeftClose, PanelRightClose } from 'lucide-react';

interface LayoutToggleProps {
  children: React.ReactNode;
}

export function LayoutToggle({ children }: LayoutToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<'left' | 'right'>('left');

  if (!isOpen) {
    return (
      <div className="p-4">
        <Button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2"
        >
          <PanelLeftClose className="h-4 w-4" />
          Open Layout with Drawer
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDrawerSide(side => side === 'left' ? 'right' : 'left')}
          className="flex items-center gap-2"
        >
          {drawerSide === 'left' ? (
            <>
              <PanelRightClose className="h-4 w-4" />
              Move to Right
            </>
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4" />
              Move to Left
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
        >
          Close Layout
        </Button>
      </div>
      <MainLayout drawerSide={drawerSide}>
        {children}
      </MainLayout>
    </div>
  );
}