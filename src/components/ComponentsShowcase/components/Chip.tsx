import React from 'react';
import { X, Check, AlertCircle, Clock } from 'lucide-react';

const Chip = () => {
  const variants = [
    { type: 'filled', label: 'Filled' },
    { type: 'outlined', label: 'Outlined' },
    { type: 'soft', label: 'Soft' }
  ];

  const colors = [
    { name: 'default', bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300', soft: 'bg-gray-50' },
    { name: 'primary', bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300', soft: 'bg-blue-50' },
    { name: 'success', bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300', soft: 'bg-green-50' },
    { name: 'warning', bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', soft: 'bg-yellow-50' },
    { name: 'error', bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300', soft: 'bg-red-50' }
  ];

  const statuses = [
    { label: 'Completed', icon: Check, color: colors[2] },
    { label: 'Pending', icon: Clock, color: colors[3] },
    { label: 'Error', icon: AlertCircle, color: colors[4] }
  ];

  const getChipClasses = (variant: string, color: any) => {
    const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
    
    switch (variant) {
      case 'filled':
        return `${baseClasses} ${color.bg} ${color.text}`;
      case 'outlined':
        return `${baseClasses} border ${color.border} ${color.text} bg-transparent`;
      case 'soft':
        return `${baseClasses} ${color.soft} ${color.text}`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <div key={variant.type} className={getChipClasses(variant.type, colors[0])}>
              {variant.label}
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <div key={color.name} className={getChipClasses('filled', color)}>
              {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icon</h3>
        <div className="flex flex-wrap gap-4">
          {statuses.map((status) => (
            <div key={status.label} className={getChipClasses('filled', status.color)}>
              <status.icon className="w-4 h-4 mr-1" />
              {status.label}
            </div>
          ))}
        </div>
      </div>

      {/* Deletable */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Deletable</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <div
              key={variant.type}
              className={`${getChipClasses(variant.type, colors[0])} pr-2`}
            >
              <span className="mr-1">{variant.label}</span>
              <button
                className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                onClick={() => {}}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
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
  icon={<CheckIcon />}
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

export default Chip;