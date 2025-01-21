import React from 'react';
import { Loader2, Plus, ArrowRight } from 'lucide-react';
import { usePalette } from '@/context/PaletteContext';
interface ButtonProps {
  colors: string[];
}

const Button: React.FC<ButtonProps> = () => {
  const variants = [
    { type: 'solid', label: 'Solid' },
    { type: 'outline', label: 'Outline' },
    { type: 'ghost', label: 'Ghost' },
    { type: 'link', label: 'Link' }
  ];
  const { colors } = usePalette();

  const sizes = [
    { size: 'sm', label: 'Small' },
    { size: 'md', label: 'Medium' },
    { size: 'lg', label: 'Large' }
  ];

  // Create button colors from all palette colors
  const buttonColors = colors.map((color, index) => ({
    name: `color${index + 1}`,
    bg: color,
    hover: color
  }));

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const getButtonClasses = (variant: string, color: any, size: string) => {
    const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size as keyof typeof sizeClasses]}`;
    
    switch (variant) {
      case 'solid':
        return `${baseClasses} text-white hover:opacity-90`;
      case 'outline':
        return `${baseClasses} bg-transparent hover:bg-opacity-10 text-gray-900 dark:text-white border-2`;
      case 'ghost':
        return `${baseClasses} bg-transparent hover:bg-opacity-10`;
      case 'link':
        return `${baseClasses} bg-transparent underline-offset-4 hover:underline`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-12">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <button
              key={variant.type}
              className={getButtonClasses(variant.type, buttonColors[0], 'md')}
              style={{
                ...(variant.type === 'solid' && { backgroundColor: buttonColors[0].bg }),
                ...(variant.type === 'outline' && { borderColor: buttonColors[0].bg, color: buttonColors[0].bg }),
                ...(variant.type === 'ghost' && { color: buttonColors[0].bg }),
                ...(variant.type === 'link' && { color: buttonColors[0].bg })
              }}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {buttonColors.map((color) => (
            <button
              key={color.name}
              className={getButtonClasses('solid', color, 'md')}
              style={{ backgroundColor: color.bg }}
            >
              Color {parseInt(color.name.replace('color', ''))}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <button
              key={size.size}
              className={getButtonClasses('solid', buttonColors[0], size.size)}
              style={{ backgroundColor: buttonColors[0].bg }}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <button
            className={getButtonClasses('solid', buttonColors[0], 'md')}
            style={{ backgroundColor: buttonColors[0].bg }}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Item
          </button>
          <button
            className={getButtonClasses('outline', buttonColors[0], 'md')}
            style={{ borderColor: buttonColors[0].bg, color: buttonColors[0].bg }}
          >
            Continue
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
          <button
            className={getButtonClasses('solid', buttonColors[0], 'md')}
            style={{ backgroundColor: buttonColors[0].bg }}
            disabled
          >
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Loading
          </button>
        </div>
      </div>

      {/* Block */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Block</h3>
        <button
          className={`${getButtonClasses('solid', buttonColors[0], 'md')} w-full`}
          style={{ backgroundColor: buttonColors[0].bg }}
        >
          Block Button
        </button>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Button
<Button variant="solid" color="primary">
  Click me
</Button>

// With Icon
<Button variant="outline" color="secondary">
  <PlusIcon className="mr-2" />
  Add Item
</Button>

// Loading State
<Button variant="solid" loading>
  Processing
</Button>

// Block Button
<Button variant="solid" block>
  Full Width
</Button>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Button;