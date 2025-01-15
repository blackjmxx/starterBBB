import React, { useState } from 'react';

interface RadioProps {
  colors: string[];
}

const Radio: React.FC<RadioProps> = ({ colors }) => {
  const [selected, setSelected] = useState<string>('');

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className="space-y-8">
      {/* Basic Radio */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="space-y-2">
          {colors.map((color, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer mr-6">
              <div className="relative">
                <input
                  type="radio"
                  className="sr-only"
                  checked={selected === `color${index}`}
                  onChange={() => setSelected(`color${index}`)}
                />
                <div
                  className={`${sizes.md} border-2 rounded-full flex items-center justify-center transition-colors`}
                  style={{
                    borderColor: selected === `color${index}` ? color : 'currentColor'
                  }}
                >
                  {selected === `color${index}` && (
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Color {index + 1}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="space-y-4">
          {Object.entries(sizes).map(([size, sizeClass]) => (
            <label key={size} className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  className="sr-only"
                  checked={true}
                  readOnly
                />
                <div
                  className={`${sizeClass} border-2 rounded-full flex items-center justify-center`}
                  style={{ borderColor: colors[0] }}
                >
                  <div
                    className={`${
                      size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3 w-3'
                    } rounded-full`}
                    style={{ backgroundColor: colors[0] }}
                  />
                </div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200 capitalize">
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
{`// Basic Radio
<Radio
  value={value}
  onChange={setValue}
/>

// With Color
<Radio
  color="primary"
  value={value}
  onChange={setValue}
/>

// With Size
<Radio
  size="lg"
  value={value}
  onChange={setValue}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Radio;