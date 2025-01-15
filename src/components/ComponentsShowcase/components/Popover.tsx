import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

const Popover = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const positions = ['top', 'right', 'bottom', 'left'];

  const getPopoverClasses = (position: string) => {
    const baseClasses = 'absolute bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64';
    switch (position) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 -translate-x-1/2 mb-2`;
      case 'right':
        return `${baseClasses} left-full top-1/2 -translate-y-1/2 ml-2`;
      case 'bottom':
        return `${baseClasses} top-full left-1/2 -translate-x-1/2 mt-2`;
      case 'left':
        return `${baseClasses} right-full top-1/2 -translate-y-1/2 mr-2`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-8">
      {/* Basic Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Popover</h3>
        <div className="flex items-center gap-4">
          {positions.map((position) => (
            <div key={position} className="relative inline-block">
              <button
                onClick={() => setOpenPopover(openPopover === position ? null : position)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {position}
              </button>

              {openPopover === position && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setOpenPopover(null)}
                  />
                  <div className={getPopoverClasses(position)}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium dark:text-white">Popover Title</h4>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a popover with some example content. It can contain text, links, or any other content.
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Info Popover</h3>
        <div className="relative inline-block">
          <button
            onClick={() => setOpenPopover(openPopover === 'info' ? null : 'info')}
            className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <Info className="h-5 w-5" />
          </button>

          {openPopover === 'info' && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenPopover(null)}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Helpful information about this feature or field can be displayed here.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Interactive Popover */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Interactive Popover</h3>
        <div className="relative inline-block">
          <button
            onClick={() => setOpenPopover(openPopover === 'interactive' ? null : 'interactive')}
            className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Settings
          </button>

          {openPopover === 'interactive' && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenPopover(null)}
              />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Notifications
                    </label>
                    <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-lg">
                      <option>All messages</option>
                      <option>Important only</option>
                      <option>None</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Theme
                    </label>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">Light</button>
                      <button className="flex-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">Dark</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Popover
<Popover
  trigger={<button>Click me</button>}
  position="top"
>
  Popover content
</Popover>

// Info Popover
<Popover
  trigger={<InfoIcon />}
  content="Helpful information"
/>

// Interactive Popover
<Popover
  trigger={<button>Settings</button>}
  interactive
>
  <form>
    {/* Form fields */}
  </form>
</Popover>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Popover;