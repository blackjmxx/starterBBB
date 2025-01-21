import React, { useState } from 'react';
import { Eye, EyeOff, Search, AlertCircle } from 'lucide-react';
import { usePalette } from '@/context/PaletteContext';

interface TextFieldProps {
  colors: string[];
}

const TextField: React.FC<TextFieldProps> = () => {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const { colors } = usePalette();
  return (
    <div className="space-y-8">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Color {index + 1}
              </label>
              <input
                type="text"
                value={values[`color${index}`] || ''}
                onChange={(e) => setValues(prev => ({ ...prev, [`color${index}`]: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder={`Input with color ${index + 1}`}
                style={{
                  borderColor: color,
                  '--tw-ring-color': color
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="space-y-4 max-w-md">
          {['sm', 'md', 'lg'].map((size) => (
            <input
              key={size}
              type="text"
              placeholder={`${size.toUpperCase()} size`}
              className={`w-full px-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                size === 'sm' ? 'py-1 text-sm' : size === 'md' ? 'py-2' : 'py-3 text-lg'
              }`}
              style={{
                borderColor: colors[0],
                '--tw-ring-color': colors[0]
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic TextField
<TextField
  label="Username"
  value={value}
  onChange={setValue}
/>

// With Color
<TextField
  color="primary"
  label="Username"
  value={value}
  onChange={setValue}
/>

// With Size
<TextField
  size="lg"
  label="Username"
  value={value}
  onChange={setValue}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TextField;