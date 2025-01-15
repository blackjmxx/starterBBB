import React, { useState } from 'react';

interface SwitchProps {
  colors: string[];
}

const Switch: React.FC<SwitchProps> = ({ colors }) => {
  const [enabled, setEnabled] = useState<{ [key: string]: boolean }>({});

  const sizes = {
    sm: { switch: 'w-8 h-4', thumb: 'h-3 w-3', translate: 'translate-x-4' },
    md: { switch: 'w-11 h-6', thumb: 'h-5 w-5', translate: 'translate-x-5' },
    lg: { switch: 'w-14 h-7', thumb: 'h-6 w-6', translate: 'translate-x-7' }
  };

  return (
    <div className="space-y-8">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="flex flex-wrap items-center gap-8">
          {colors.map((color, index) => (
            <label key={index} className="inline-flex items-center gap-3 cursor-pointer">
              <button
                onClick={() => setEnabled(prev => ({ ...prev, [`color${index}`]: !prev[`color${index}`] }))}
                className={`${sizes.md.switch} relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
                style={{
                  backgroundColor: enabled[`color${index}`] ? color : '#E5E7EB'
                }}
              >
                <span
                  className={`${sizes.md.thumb} inline-block rounded-full bg-white transition-transform
                    ${enabled[`color${index}`] ? sizes.md.translate : 'translate-x-1'}`}
                />
              </button>
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
        <div className="flex items-center gap-8">
          {Object.entries(sizes).map(([size, classes]) => (
            <button
              key={size}
              className={`${classes.switch} relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
              style={{ backgroundColor: colors[0] }}
            >
              <span
                className={`${classes.thumb} inline-block rounded-full bg-white transition-transform ${classes.translate}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Switch
<Switch
  checked={enabled}
  onChange={setEnabled}
/>

// With Color
<Switch
  color="primary"
  checked={enabled}
  onChange={setEnabled}
/>

// With Size
<Switch
  size="lg"
  checked={enabled}
  onChange={setEnabled}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Switch;