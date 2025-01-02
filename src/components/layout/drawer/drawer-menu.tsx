import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { DrawerContent } from './drawer-content';

interface DrawerMenuProps {
  side?: 'left' | 'right';
  className?: string;
}

export function DrawerMenu({ side = 'left', className }: DrawerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'fixed z-50 top-[85px]',
          side === 'left' ? 'left-4' : 'right-4'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
      </Button>

      <aside
        className={cn(
          'fixed z-40 top-[73px] h-[calc(100vh-73px)]',
          'w-[280px] bg-background shadow-lg',
          'transition-transform duration-300 ease-in-out',
          side === 'left' ? (
            isOpen ? 'translate-x-0' : '-translate-x-full border-r'
          ) : (
            isOpen ? 'translate-x-0' : 'translate-x-full border-l'
          ),
          side === 'left' ? 'left-0' : 'right-0',
          className
        )}
      >
        <ScrollArea className="h-full">
          <DrawerContent />
        </ScrollArea>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 top-[73px] z-30 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}