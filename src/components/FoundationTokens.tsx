import React, { useState } from 'react';
import { Palette, Type, Square, Grid as GridIcon, Library, Boxes } from 'lucide-react';
import { Icon } from '@iconify/react';
import { dynamicTextColors, fixedColors } from '../constants/colors';
import ComponentsShowcase from './ComponentsShowcase';
import Icons from './Icons';

interface FoundationTokensProps {
  theme: 'light' | 'dark';
  colors: string[];
}

const FoundationTokens: React.FC<FoundationTokensProps> = ({ theme, colors }) => {
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', icon: Palette, label: 'Colors' },
    { id: 'typography', icon: Type, label: 'Typography' },
    { id: 'shadows', icon: Square, label: 'Shadows' },
    { id: 'grid', icon: GridIcon, label: 'Grid' },
    { id: 'icons', icon: Library, label: 'Icons' },
    { id: 'components', icon: Boxes, label: 'Components' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'colors':
        return (
          <div className="space-y-8">
            {/* Dynamic Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Dynamic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {colors.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className="h-20 rounded-lg"
                      style={{ backgroundColor: color }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">Color {index + 1}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{color}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Fixed Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fixedColors.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className="h-20 rounded-lg"
                      style={{ backgroundColor: color.color }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">{color.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{color.color}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Text Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dynamicTextColors(colors).map((color, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">{color.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{color.color}</span>
                    </div>
                    <p style={{ color: color.color }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        case 'icons':
          return <Icons theme={theme} colors={colors} />;
        case 'typography':
        return (
          <div className="space-y-12">
            {/* Headings */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium dark:text-white">Headings</h3>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-6xl font-extrabold leading-tight dark:text-white">How can you choose a typeface?</h1>
                  <span className="text-sm text-gray-500">H1 - 64px - Line-height: 1.25 - Weight: 800</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-5xl font-extrabold leading-snug dark:text-white">How can you choose a typeface?</h2>
                  <span className="text-sm text-gray-500">H2 - 48px - Line-height: 1.33 - Weight: 800</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold leading-relaxed dark:text-white">How can you choose a typeface?</h3>
                  <span className="text-sm text-gray-500">H3 - 32px - Line-height: 1.50 - Weight: 700</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold leading-relaxed dark:text-white">How can you choose a typeface?</h4>
                  <span className="text-sm text-gray-500">H4 - 24px - Line-height: 1.50 - Weight: 700</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold leading-relaxed dark:text-white">How can you choose a typeface?</h5>
                  <span className="text-sm text-gray-500">H5 - 19px - Line-height: 1.47 - Weight: 700</span>
                </div>
                <div className="space-y-2">
                  <h6 className="text-lg font-semibold leading-relaxed dark:text-white">How can you choose a typeface?</h6>
                  <span className="text-sm text-gray-500">H6 - 18px - Line-height: 1.56 - Weight: 600</span>
                </div>
              </div>
            </div>

            {/* Subtitles & Body */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium dark:text-white">Subtitles & Body</h3>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-base font-semibold leading-relaxed dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Subtitle1 - 16px - Line-height: 1.50 - Weight: 600</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold leading-relaxed dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Subtitle2 - 14px - Line-height: 1.57 - Weight: 600</span>
                </div>
                <div className="space-y-2">
                  <p className="text-base leading-relaxed dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Body1 - 16px - Line-height: 1.50 - Weight: 400</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Body2 - 14px - Line-height: 1.57 - Weight: 400</span>
                </div>
              </div>
            </div>

            {/* Special Styles */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium dark:text-white">Special Styles</h3>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-xs leading-relaxed dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Caption - 12px - Line-height: 1.50 - Weight: 400</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold leading-relaxed uppercase dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Overline - 12px - Line-height: 1.50 - Weight: 700</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold leading-loose dark:text-white">How can you choose a typeface?</p>
                  <span className="text-sm text-gray-500">Button - 14px - Line-height: 1.71 - Weight: 700</span>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium dark:text-white">Text Colors</h3>
              <div className="space-y-6">
                {colors.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <p style={{ color }} className="dark:text-opacity-90">
                      Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus.
                    </p>
                    <span className="text-sm text-gray-500">Color {index + 1} - {color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'shadows':
        return (
          <div className="space-y-8">
            {/* Elevation Shadows */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Elevation Shadows</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: 'None', class: 'shadow-none' },
                  { name: 'Small', class: 'shadow-sm' },
                  { name: 'Medium', class: 'shadow' },
                  { name: 'Large', class: 'shadow-md' },
                  { name: 'XLarge', class: 'shadow-lg' },
                  { name: '2XLarge', class: 'shadow-xl' },
                  { name: '3XLarge', class: 'shadow-2xl' },
                  { name: 'Inner', class: 'shadow-inner' }
                ].map((shadow) => (
                  <div key={shadow.name} className="space-y-2">
                    <div className={`h-24 bg-white dark:bg-gray-800 rounded-lg ${shadow.class}`} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">{shadow.name}</span>
                      <code className="text-xs text-gray-500 dark:text-gray-400">{shadow.class}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colored Shadows */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Colored Shadows</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colors.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className="h-24 bg-white dark:bg-gray-800 rounded-lg"
                      style={{
                        boxShadow: `0 10px 15px -3px ${color}20, 0 4px 6px -4px ${color}30`
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">Color {index + 1}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{color}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Shadows */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Interactive Shadows</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Hover', baseClass: 'shadow', hoverClass: 'hover:shadow-lg' },
                  { name: 'Focus', baseClass: 'shadow', hoverClass: 'focus:shadow-lg' },
                  { name: 'Active', baseClass: 'shadow-md', hoverClass: 'active:shadow-sm' },
                  { name: 'Combined', baseClass: 'shadow', hoverClass: 'hover:shadow-lg focus:shadow-xl active:shadow-md' }
                ].map((shadow) => (
                  <button
                    key={shadow.name}
                    className={`h-24 bg-white dark:bg-gray-800 rounded-lg transition-shadow ${shadow.baseClass} ${shadow.hoverClass}`}
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-300">{shadow.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Usage Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Usage Examples</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Card Example */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-sm font-medium dark:text-white mb-2">Card with Shadow</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Hover to see the shadow transition effect
                  </p>
                </div>

                {/* Button Example */}
                <div className="flex items-center justify-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg active:shadow-sm transition-shadow">
                    Interactive Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'grid':
        return (
          <div className="space-y-8">
            {/* Basic Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Basic Grid</h3>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  >
                    1/4
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Responsive Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  >
                    Responsive
                  </div>
                ))}
              </div>
            </div>

            {/* Grid with Different Sizes */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Different Sizes</h3>
              <div className="grid grid-cols-6 gap-4">
                <div
                  className="col-span-4 h-20 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: colors[0] }}
                >
                  col-span-4
                </div>
                <div
                  className="col-span-2 h-20 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: colors[1] }}
                >
                  col-span-2
                </div>
                <div
                  className="col-span-3 h-20 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: colors[2] }}
                >
                  col-span-3
                </div>
                <div
                  className="col-span-3 h-20 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: colors[3] }}
                >
                  col-span-3
                </div>
              </div>
            </div>

            {/* Auto-fit Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Auto-fit Grid</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  >
                    Auto-fit
                  </div>
                ))}
              </div>
            </div>

            {/* Grid with Nested Items */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium dark:text-white">Nested Grid</h3>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: colors[0] }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-16 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: colors[(i + 1) % colors.length] }}
                      >
                        Nested
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: colors[1] }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-16 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: colors[(i + 2) % colors.length] }}
                      >
                        Nested
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'components':
        return <ComponentsShowcase />;
      default:
        return (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Content for {activeTab} will be added soon.
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-white">Foundation</h2>
        <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <tab.icon className="h-4 w-4 dark:text-white" />
              <span className="text-sm font-medium dark:text-white">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default FoundationTokens
