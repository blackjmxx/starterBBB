import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface AutoCompleteProps {
  colors: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ colors }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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
  ].filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search frameworks..."
                  style={{
                    borderColor: color,
                    '--tw-ring-color': color
                  } as React.CSSProperties}
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery('');
                      setIsOpen(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                )}
              </div>
              
              {isOpen && suggestions.length > 0 && (
                <div className="absolute w-full mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg border dark:border-gray-600 max-h-60 overflow-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(suggestion);
                        setIsOpen(false);
                      }}
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
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<AutoComplete
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Search..."
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AutoComplete;