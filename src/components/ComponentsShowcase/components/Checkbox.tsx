import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  colors: string[];
}

const Checkbox: React.FC<CheckboxProps> = ({ colors }) => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (key: string) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className="space-y-8">
      {/* Basic Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <div className="space-y-4">
          {colors.map((color, index) => (
            <label
              key={index}
              className="inline-flex items-center cursor-pointer mr-6"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked[`color${index}`] || false}
                  onChange={() => toggleCheck(`color${index}`)}
                />
                <div
                  className={`${sizes.md} rounded flex items-center justify-center border-2 transition-colors`}
                  style={{
                    borderColor: checked[`color${index}`] ? color : 'currentColor',
                    backgroundColor: checked[`color${index}`] ? color : 'transparent'
                  }}
                >
                  {checked[`color${index}`] && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </div>
              </div>
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                Color {index + 1}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="flex items-center gap-6">
          {Object.entries(sizes).map(([size, sizeClass]) => (
            <label key={size} className="inline-flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={true}
                  readOnly
                />
                <div
                  className={`${sizeClass} rounded flex items-center justify-center border-2 transition-colors`}
                  style={{
                    borderColor: colors[0],
                    backgroundColor: colors[0]
                  }}
                >
                  <Check
                    className={`${
                      size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-3 w-3' : 'h-4 w-4'
                    } text-white`}
                  />
                </div>
              </div>
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200 capitalize">
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Checkbox
<Checkbox
  checked={checked}
  onChange={setChecked}
/>

// With Color
<Checkbox
  color="primary"
  checked={checked}
  onChange={setChecked}
/>

// With Size
<Checkbox
  size="lg"
  checked={checked}
  onChange={setChecked}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Checkbox;