import {
    ComboBox,
    ComboBoxButton,
    ComboBoxInput,
    ComboBoxListBox,
    ComboBoxListItem,
    ComboBoxPopover
} from '@/aria-component/combobox';
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

const AutoCompleteDemo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">AutoComplete Demo</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basique</h3>
        <div className="max-w-md">
          <ComboBox
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
                placeholder="Rechercher un framework..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6">
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
                  >
                    {suggestion}
                  </ComboBoxListItem>
                ))}
              </ComboBoxListBox>
            </ComboBoxPopover>
          </ComboBox>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Désactivé</h3>
        <div className="max-w-md">
          <ComboBox
            isDisabled
            selectedKey={selectedItem}
            onSelectionChange={(key) => {
              setSelectedItem(key as string);
              setIsOpen(false);
            }}
            onOpenChange={setIsOpen}
          >
            <div className="relative opacity-50">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <ComboBoxInput
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-not-allowed"
                placeholder="Rechercher un framework..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <ComboBoxButton />
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  ▼
                </span>
              </div>
            </div>
          </ComboBox>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Avec valeur par défaut</h3>
        <div className="max-w-md">
          <ComboBox
            defaultSelectedKey="React"
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
                placeholder="Rechercher un framework..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6">
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
                  >
                    {suggestion}
                  </ComboBoxListItem>
                ))}
              </ComboBoxListBox>
            </ComboBoxPopover>
          </ComboBox>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteDemo;