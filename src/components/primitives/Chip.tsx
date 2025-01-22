import { Check, AlertCircle, Clock } from 'lucide-react';
import { Chip } from '@/components/ui/chip';

const ChipDemo = () => {
  const variants = [
    { type: 'filled', label: 'Filled' },
    { type: 'outlined', label: 'Outlined' },
    { type: 'soft', label: 'Soft' }
  ];

  const colors = [
    { name: 'default' },
    { name: 'primary' },
    { name: 'success' },
    { name: 'warning' },
    { name: 'error' }
  ];

  const statuses = [
    { label: 'Completed', icon: Check, color: 'success' },
    { label: 'Pending', icon: Clock, color: 'warning' },
    { label: 'Error', icon: AlertCircle, color: 'error' }
  ];

  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Chip key={variant.type} variant={variant.type}>
              {variant.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <Chip key={color.name} color={color.name} variant="filled">
              {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
            </Chip>
          ))}
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icon</h3>
        <div className="flex flex-wrap gap-4">
          {statuses.map((status) => (
            <Chip
              key={status.label}
              icon={status.icon}
              color={status.color}
              variant="filled"
            >
              {status.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Deletable */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Deletable</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Chip
              key={variant.type}
              variant={variant.type}
              onDelete={() => {}}
            >
              {variant.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Chip
<Chip>Basic</Chip>

// Colored Chip
<Chip color="primary" variant="filled">
  Primary
</Chip>

// With Icon
<Chip
  icon={CheckIcon}
  color="success"
>
  Completed
</Chip>

// Deletable
<Chip
  onDelete={() => {}}
  color="error"
>
  Delete me
</Chip>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ChipDemo;