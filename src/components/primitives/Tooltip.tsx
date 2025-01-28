import { Info } from 'lucide-react';
import { useState } from 'react';

const Tooltip = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const positions = ['top', 'right', 'bottom', 'left'];

  const getTooltipClasses = (position: string) => {
    const baseClasses = 'absolute px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded shadow-lg whitespace-nowrap';
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
      {/* Basic Tooltips */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Tooltips</h3>
        <div className="flex items-center justify-center gap-8">
          {positions.map((position) => (
            <div key={position} className="relative inline-block">
              <button
                onMouseEnter={() => setActiveTooltip(position)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="p-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                Hover me ({position})
              </button>
              {activeTooltip === position && (
                <div className={getTooltipClasses(position)}>
                  Tooltip on {position}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icon</h3>
        <div className="flex items-center gap-8">
          <div className="relative inline-block">
            <button
              onMouseEnter={() => setActiveTooltip('info')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Info className="h-5 w-5" />
            </button>
            {activeTooltip === 'info' && (
              <div className={getTooltipClasses('top')}>
                Helpful information
              </div>
            )}
          </div>
        </div>
      </div>

      {/* With HTML Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With HTML Content</h3>
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setActiveTooltip('html')}
            onMouseLeave={() => setActiveTooltip(null)}
            className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Hover for details
          </button>
          {activeTooltip === 'html' && (
            <div className={`${getTooltipClasses('bottom')} w-64 whitespace-normal text-center`}>
              <p className="font-medium mb-1">Product Details</p>
              <p>This product includes free shipping and a 30-day money-back guarantee.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;