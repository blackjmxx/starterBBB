import { Bell, Mail, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const BadgeDemo = () => {
  const variants = [
    {
      type: 'dot',
      color: 'red',
      icon: Bell,
      label: 'Notifications'
    },
    {
      type: 'count',
      color: 'blue',
      icon: Mail,
      count: 5,
      label: 'Messages'
    },
    {
      type: 'count',
      color: 'green',
      icon: ShoppingCart,
      count: 3,
      label: 'Cart'
    }
  ];

  const colors = {
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

  return (
    <div className="space-y-8">
      {/* Basic Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Badges</h3>
        <div className="flex items-center gap-8">
          {variants.map((variant, index) => (
            <Badge
              key={index}
              type={variant.type}
              color={variant.color}
              count={variant.count}
              icon={variant.icon}
              label={variant.label}
            />
          ))}
        </div>
      </div>

      {/* Standalone Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Standalone Badges</h3>
        <div className="flex items-center gap-4">
          {Object.entries(colors).map(([color]) => (
            <Badge
              key={color}
              type="standalone"
              color={color}
            >
              {color}
            </Badge>
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
              <span
                className={`absolute ${
                  position.includes('top') ? 'top-0' : 'bottom-0'
                } ${
                  position.includes('right') ? 'right-0' : 'left-0'
                } -translate-y-1/2 ${
                  position.includes('right') ? 'translate-x-1/2' : '-translate-x-1/2'
                } h-5 min-w-[20px] rounded-full bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 px-1.5 py-0.5 text-xs font-medium flex items-center justify-center ring-2 ring-white dark:ring-gray-800`}
              >
                1
              </span>
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
{`// Dot Badge
<Badge variant="dot" color="red">
  <BellIcon />
</Badge>

// Count Badge
<Badge count={5} color="blue">
  <MailIcon />
</Badge>

// Standalone Badge
<Badge color="green">
  Active
</Badge>

// Positioned Badge
<Badge count={1} position="top-right">
  <div>Content</div>
</Badge>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default BadgeDemo;