import {
  ComboBox,
  ComboBoxButton,
  ComboBoxInput,
  ComboBoxListBox,
  ComboBoxListItem,
  ComboBoxPopover
} from '@/aria-component/combobox';
import { usePalette } from '@/context/PaletteContext';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const suggestions = [
  'React',
  'React Native',
  'React Router',
  'Redux',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Next.js',
  'Vue.js',
  'Angular'
];

const AutoComplete: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = usePalette();

  return (
    <div className="space-y-8">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          {colors.slice(0, 2).map((color, index) => (
            <ComboBox
              key={index}
              selectedKey={selectedItem}
              onSelectionChange={(key) => {
                setSelectedItem(key as string);
                setIsOpen(false);
              }}
              onOpenChange={setIsOpen}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <ComboBoxInput
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search frameworks..."
                  style={{
                    borderColor: color,
                    '--tw-ring-color': color
                  } as React.CSSProperties}
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  aria-label="Toggle suggestions"
                >
                  <ComboBoxButton />
                  <span
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </div>
              </div>
              <ComboBoxPopover className="mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg border dark:border-gray-600 max-h-60 overflow-auto">
                <ComboBoxListBox>
                  {suggestions.map((suggestion) => (
                    <ComboBoxListItem
                      key={suggestion}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
                      style={{
                        '--tw-bg-opacity': '0.1',
                        '--tw-hover-bg-opacity': '0.2',
                        backgroundColor: `color-mix(in srgb, ${color} var(--tw-bg-opacity), transparent)`,
                        ':hover': {
                          backgroundColor: `color-mix(in srgb, ${color} var(--tw-hover-bg-opacity), transparent)`
                        }
                      } as React.CSSProperties}
                    >
                      {suggestion}
                    </ComboBoxListItem>
                  ))}
                </ComboBoxListBox>
              </ComboBoxPopover>
            </ComboBox>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
const [isOpen, setIsOpen] = useState(false);

<ComboBox
  selectedKey={selectedItem}
  onSelectionChange={(key) => {
    setSelectedItem(key as string);
    setIsOpen(false);
  }}
  onOpenChange={setIsOpen}
>
  <ComboBoxInput placeholder="Search..." />
  <ComboBoxButton aria-label="Toggle suggestions">
    <span className={\`transition-transform \${isOpen ? 'rotate-180' : ''}\`}>▼</span>
  </ComboBoxButton>
  <ComboBoxPopover>
    <ComboBoxListBox>
      {options.map((option) => (
        <ComboBoxListItem key={option}>{option}</ComboBoxListItem>
      ))}
    </ComboBoxListBox>
  </ComboBoxPopover>
</ComboBox>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AutoComplete;