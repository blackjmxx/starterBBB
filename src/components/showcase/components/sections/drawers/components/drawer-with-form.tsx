import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { drawerVariants, drawerContentVariants } from '../styles';
import type { DrawerProps } from '../types';

export function DrawerWithForm({ variant, anchor }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant}>Open form drawer</Button>
      </DrawerTrigger>
      <DrawerContent side={anchor} className={drawerVariants({ variant, side: anchor })}>
        <div className={drawerContentVariants({ side: anchor })}>
          <DrawerHeader className="border-b px-6 py-4">
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
          </div>
          <DrawerFooter className="border-t px-6 py-4">
            <Button type="submit" variant={variant}>Save changes</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}