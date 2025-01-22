'use client';
import { useState } from 'react';
import { Settings, Bell, User, LogOut } from 'lucide-react';
import { Drawer } from '@/components/ui/Drawer';

const DrawerDemo = () => {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const positions = ['left', 'right', 'top', 'bottom'];
  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' }
  ];

  return (
    <div className="space-y-8">
      {/* Drawer Triggers */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Positions</h3>
        <div className="flex flex-wrap gap-4">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => setOpenDrawer(position)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300 text-sm font-medium"
            >
              Open {position} drawer
            </button>
          ))}
        </div>
      </div>

      {/* Drawers */}
      {positions.map((position) => (
        <Drawer
          key={position}
          position={position as 'left' | 'right' | 'top' | 'bottom'}
          open={openDrawer === position}
          onClose={() => setOpenDrawer(null)}
          items={menuItems}
        />
      ))}

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-500 dark:text-gray-300">
{`<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="left"
>
  Drawer content goes here
</Drawer>

// With menu items
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  items={[
    { icon: UserIcon, label: 'Profile' },
    { icon: SettingsIcon, label: 'Settings' }
  ]}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DrawerDemo;