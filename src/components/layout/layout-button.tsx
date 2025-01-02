import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from './index';
import { PanelLeftClose, PanelRightClose } from 'lucide-react';

interface LayoutButtonProps {
  children: React.ReactNode;
}

export function LayoutButton({ children }: LayoutButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<'left' | 'right'>('left');

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <PanelLeftClose className="h-4 w-4" />
        Open Layout with Drawer
      </Button>
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
      <Layout drawerSide={drawerSide}>
        {children}
      </Layout>
    </div>
  );
}