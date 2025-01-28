import { NotificationBadge } from '@/aria-component/notification-badge';
import { Bell, Mail, ShoppingCart } from 'lucide-react';

type ColorType = 'red' | 'blue' | 'green';

const Badge = () => {
  const variants = [
    {
      type: 'dot' as const,
      color: 'red' as ColorType,
      icon: Bell,
      label: 'Notifications'
    },
    {
      type: 'count' as const,
      color: 'blue' as ColorType,
      icon: Mail,
      count: 5,
      label: 'Messages'
    },
    {
      type: 'count' as const,
      color: 'green' as ColorType,
      icon: ShoppingCart,
      count: 3,
      label: 'Cart'
    }
  ];

  const colors: Record<ColorType, { bg: string; text: string; dot: string }> = {
    red: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-800 dark:text-red-200',
      dot: 'bg-red-500'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-800 dark:text-blue-200',
      dot: 'bg-blue-500'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/20',
      text: 'text-green-800 dark:text-green-200',
      dot: 'bg-green-500'
    }
  };

  const NumericBadge = ({ value, className }: { value: number; className: string }) => (
    <NotificationBadge variant="numeric" value={value} className={className} />
  );

  const DotBadge = ({ className }: { className: string }) => (
    <NotificationBadge variant="dot" className={className} />
  );

  return (
    <div className="space-y-8">
      {/* Basic Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Badges</h3>
        <div className="flex items-center gap-8">
          {variants.map((variant, index) => (
            <div key={index} className="relative">
              <variant.icon className="h-6 w-6" />
              {variant.type === 'count' ? (
                <NumericBadge
                  value={variant.count}
                  className={`${colors[variant.color].bg} ${colors[variant.color].text}`}
                />
              ) : (
                <DotBadge
                  className={`${colors[variant.color].dot}`}
                />
              )}
              <span className="sr-only">{variant.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Standalone Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Standalone Badges</h3>
        <div className="flex items-center gap-4">
          {(Object.keys(colors) as ColorType[]).map((color, index) => (
            <NumericBadge
              key={color}
              value={index + 1}
              className={`${colors[color].bg} ${colors[color].text} px-2 py-1 rounded-full text-xs font-medium`}
            />
          ))}
        </div>
      </div>

      {/* Positioned Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Positioned Badges</h3>
        <div className="flex items-center gap-8">
          {['top-right', 'top-left', 'bottom-right', 'bottom-left'].map((position) => (
            <div key={position} className="relative inline-block">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <NumericBadge
                value={1}
                className={`absolute ${
                  position.includes('top') ? 'top-0' : 'bottom-0'
                } ${
                  position.includes('right') ? 'right-0' : 'left-0'
                } -translate-y-1/2 ${
                  position.includes('right') ? 'translate-x-1/2' : '-translate-x-1/2'
                } h-5 min-w-[20px] rounded-full bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 px-1.5 py-0.5 text-xs font-medium flex items-center justify-center ring-2 ring-white dark:ring-gray-800`}
              />
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center whitespace-nowrap">
                {position.split('-').join(' ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { NotificationBadge } from '@/aria-component/notification-badge';

// Numeric Badge
const NumericBadge = ({ value, className }) => (
  <NotificationBadge variant="numeric" value={value} className={className} />
);

// Dot Badge
const DotBadge = ({ className }) => (
  <NotificationBadge variant="dot" className={className} />
);

// Usage examples
<div className="relative">
  <BellIcon className="h-6 w-6" />
  <NumericBadge value={3} className="bg-red-100 text-red-800" />
</div>

<div className="relative">
  <BellIcon className="h-6 w-6" />
  <DotBadge className="bg-red-500" />
</div>

// Standalone Badge
<NumericBadge
  value={1}
  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
/>

// Positioned Badge
<div className="relative">
  <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
  <NumericBadge
    value={1}
    className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
  />
</div>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Badge;
