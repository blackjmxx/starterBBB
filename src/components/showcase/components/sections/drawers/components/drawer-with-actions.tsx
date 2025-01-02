import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { drawerVariants, drawerContentVariants } from '../styles';
import type { DrawerProps } from '../types';

export function DrawerWithActions({ variant, anchor }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant}>Open action drawer</Button>
      </DrawerTrigger>
      <DrawerContent side={anchor} className={drawerVariants({ variant, side: anchor })}>
        <div className={drawerContentVariants({ side: anchor })}>
          <DrawerHeader className="border-b px-6 py-4">
            <DrawerTitle>Delete Account</DrawerTitle>
            <DrawerDescription>
              Are you sure you want to delete your account? This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-muted-foreground">
              This will permanently delete your account and remove all your data from our servers.
            </p>
          </div>
          <DrawerFooter className="border-t px-6 py-4">
            <div className="flex flex-row justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}