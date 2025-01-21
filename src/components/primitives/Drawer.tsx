import React, { useState } from 'react';
import { X, Settings, Bell, User, LogOut } from 'lucide-react';

const Drawer = () => {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const positions = ['left', 'right', 'top', 'bottom'];
  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' }
  ];

  const getDrawerClasses = (position: string) => {
    const baseClasses = 'fixed bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out';
    switch (position) {
      case 'left':
        return `${baseClasses} top-0 left-0 h-full w-80 transform ${
          openDrawer === position ? 'translate-x-0' : '-translate-x-full'
        }`;
      case 'right':
        return `${baseClasses} top-0 right-0 h-full w-80 transform ${
          openDrawer === position ? 'translate-x-0' : 'translate-x-full'
        }`;
      case 'top':
        return `${baseClasses} top-0 left-0 w-full h-96 transform ${
          openDrawer === position ? 'translate-y-0' : '-translate-y-full'
        }`;
      case 'bottom':
        return `${baseClasses} bottom-0 left-0 w-full h-96 transform ${
          openDrawer === position ? 'translate-y-0' : 'translate-y-full'
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-8">
      {/* Drawer Triggers */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Positions</h3>
        <div className="flex flex-wrap gap-4">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => setOpenDrawer(position)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-sm font-medium"
            >
              Open {position} drawer
            </button>
          ))}
        </div>
      </div>

      {/* Drawers */}
      {positions.map((position) => (
        <React.Fragment key={position}>
          {openDrawer === position && (
            <div className="fixed inset-0 z-50 overflow-hidden">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black bg-opacity-25 transition-opacity"
                onClick={() => setOpenDrawer(null)}
              />

              {/* Drawer */}
              <div className={getDrawerClasses(position)}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium dark:text-white">
                      {position.charAt(0).toUpperCase() + position.slice(1)} Drawer
                    </h3>
                    <button
                      onClick={() => setOpenDrawer(null)}
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium dark:text-white">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="left"
>
  Drawer content goes here
</Drawer>

// With custom width
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  width="24rem"
>
  Wide drawer content
</Drawer>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Drawer;