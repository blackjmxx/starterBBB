import React, { useState } from 'react';
import { MoreVertical, User, Settings, LogOut, ChevronRight, Sun, Moon } from 'lucide-react';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuItems = [
    { label: 'Profile', icon: User },
    { label: 'Settings', icon: Settings },
    { label: 'Logout', icon: LogOut }
  ];

  const nestedItems = [
    {
      label: 'Theme',
      icon: Sun,
      submenu: [
        { label: 'Light', icon: Sun },
        { label: 'Dark', icon: Moon }
      ]
    },
    {
      label: 'Settings',
      icon: Settings,
      submenu: [
        { label: 'Account' },
        { label: 'Security' },
        { label: 'Notifications' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Basic Menu */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Menu</h3>
        <div className="relative inline-block">
          <button
            onClick={() => setOpenMenu(openMenu === 'basic' ? null : 'basic')}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MoreVertical className="h-5 w-5" />
          </button>

          {openMenu === 'basic' && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenMenu(null)}
              />
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <item.icon className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />
                    {item.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Nested Menu */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Nested Menu</h3>
        <div className="relative inline-block">
          <button
            onClick={() => setOpenMenu(openMenu === 'nested' ? null : 'nested')}
            className="px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Open Menu
          </button>

          {openMenu === 'nested' && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenMenu(null)}
              />
              <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                {nestedItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />
                        {item.label}
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover:block">
                      <div className="ml-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                        {item.submenu.map((subitem, subindex) => (
                          <button
                            key={subindex}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subitem.icon && <subitem.icon className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />}
                            {subitem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Menu
<Menu>
  <MenuItem icon={<UserIcon />}>Profile</MenuItem>
  <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
  <MenuItem icon={<LogOutIcon />}>Logout</MenuItem>
</Menu>

// Nested Menu
<Menu>
  <SubMenu label="Theme" icon={<SunIcon />}>
    <MenuItem>Light</MenuItem>
    <MenuItem>Dark</MenuItem>
  </SubMenu>
</Menu>

// Context Menu
<ContextMenu>
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</ContextMenu>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Menu;