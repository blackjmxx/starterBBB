'use client';
import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { Settings, Bell, User, LogOut, ChevronRight, Mail, Info, AlertCircle } from 'lucide-react';

const Popover = () => {
  const { colors } = usePalette();
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePopoverClick = (id: string) => {
    if (openPopover === id) {
      setOpenPopover(null);
    } else {
      setOpenPopover(id);
    }
  };

  return (
    <div className="space-y-8">
      {/* Basic Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Popover</h3>
        <div className="flex gap-8">
          {[
            { id: 'info', icon: Info, title: 'Information', content: 'This is a helpful message.' },
            { id: 'alert', icon: AlertCircle, title: 'Alert', content: 'Please review your settings.' },
            { id: 'mail', icon: Mail, title: 'Message', content: 'You have a new message.' }
          ].map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => handlePopoverClick(item.id)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                style={{ color: colors[2] }}
              >
                <item.icon className="h-5 w-5" />
              </button>
              {openPopover === item.id && (
                <div className="absolute z-[9999] mt-2 -translate-x-1/2 left-1/2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 min-w-[200px]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-gray-800" />
                    <div className="relative">
                      <h4 className="font-medium mb-1 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Interactive Popover</h3>
        <div className="flex gap-8">
          {/* Notifications Popover */}
          <div className="relative">
            <button
              onClick={() => handlePopoverClick('notifications')}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              style={{ color: colors[2] }}
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
            {openPopover === 'notifications' && (
              <div className="absolute z-50 mt-2 right-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-80">
                  <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium dark:text-white">Notifications</h4>
                      <button
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        onClick={() => setNotificationCount(0)}
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b last:border-0 dark:border-gray-700"
                      >
                        <div className="flex gap-3">
                          <div
                            className="h-8 w-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: colors[i % colors.length] }}
                          >
                            <Bell className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium dark:text-white">New Update Available</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              A new software update is available for download.
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50">
                    <button
                      className="text-sm text-center w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Popover */}
          <div className="relative">
            <button
              onClick={() => handlePopoverClick('settings')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              style={{ color: colors[2] }}
            >
              <Settings className="h-5 w-5" />
            </button>
            {openPopover === 'settings' && (
              <div className="absolute z-50 mt-2 right-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-64">
                  <div className="p-4 border-b dark:border-gray-700">
                    <h4 className="font-medium dark:text-white">Settings</h4>
                  </div>
                  <div className="p-2">
                    {[
                      { icon: User, label: 'Account' },
                      { icon: Bell, label: 'Notifications' },
                      { icon: Settings, label: 'Preferences' },
                      { icon: LogOut, label: 'Sign out' }
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1 text-sm dark:text-white">{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-white">Notifications</span>
                      <button
                        className={`relative w-10 h-6 rounded-full transition-colors ${
                          isSubscribed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        onClick={() => setIsSubscribed(!isSubscribed)}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                            isSubscribed ? 'translate-x-4' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Popover
<Popover>
  <PopoverTrigger>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h4>Title</h4>
    <p>Content goes here</p>
  </PopoverContent>
</Popover>

// Interactive Popover
<Popover>
  <PopoverTrigger>
    <IconButton icon={Bell} />
  </PopoverTrigger>
  <PopoverContent>
    <NotificationsList />
  </PopoverContent>
</Popover>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Popover;