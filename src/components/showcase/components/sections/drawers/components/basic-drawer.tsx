import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { drawerVariants, drawerContentVariants } from '../styles';
import { X } from 'lucide-react';
import type { DrawerProps } from '../types';

export function BasicDrawer({ variant, anchor }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant}>Open {anchor} drawer</Button>
      </DrawerTrigger>
      <DrawerContent side={anchor} className={drawerVariants({ variant, side: anchor })}>
        <div className={drawerContentVariants({ side: anchor })}>
          <DrawerHeader className="border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle>Basic Drawer</DrawerTitle>
                <DrawerDescription>
                  This is a basic drawer that opens from the {anchor}.
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <p>Drawer content goes here...</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}