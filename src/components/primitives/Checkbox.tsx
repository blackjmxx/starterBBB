import { Checkbox as AriaCheckbox } from '@/aria-component/checkbox';
import { usePalette } from '@/context/PaletteContext';
import React from 'react';

const Checkbox = () => {
  const { colors } = usePalette();

  const [checks, setChecks] = React.useState({
    basic: false,
    disabled: false,
    indeterminate: false,
    colored: false
  });

  return (
    <div className="space-y-8">
      {/* Variantes de base */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variantes</h3>
        <div className="space-y-4">
          <AriaCheckbox
            isSelected={checks.basic}
            onChange={(isSelected) => setChecks(prev => ({ ...prev, basic: isSelected }))}
          >
            Checkbox basique
          </AriaCheckbox>
          
          <AriaCheckbox
            isDisabled
            isSelected={checks.disabled}
          >
            Checkbox désactivée
          </AriaCheckbox>
          
          <AriaCheckbox
            isIndeterminate
            isSelected={checks.indeterminate}
            onChange={(isSelected) => setChecks(prev => ({ ...prev, indeterminate: isSelected }))}
          >
            Checkbox indéterminée
          </AriaCheckbox>
        </div>
      </div>

      {/* Couleurs */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Couleurs</h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((color, index) => (
            <AriaCheckbox
              key={color}
              isSelected={checks.colored}
              onChange={(isSelected) => setChecks(prev => ({ ...prev, colored: isSelected }))}
              style={{ '--checkbox-color': color } as React.CSSProperties}
            >
              Option {index + 1}
            </AriaCheckbox>
          ))}
        </div>
      </div>

      {/* Tailles */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Tailles</h3>
        <div className="flex items-center gap-6">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <AriaCheckbox
              key={size}
              isSelected={true}
              className={`checkbox-${size}`}
            >
              {size.toUpperCase()}
            </AriaCheckbox>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { Checkbox } from '@/aria-component/checkbox';

// Basic Checkbox
<Checkbox
  isSelected={isChecked}
  onChange={setIsChecked}
>
  Label
</Checkbox>

// Disabled Checkbox
<Checkbox isDisabled>
  Disabled Checkbox
</Checkbox>

// Indeterminate Checkbox
<Checkbox
  isIndeterminate
  isSelected={isSelected}
  onChange={setIsSelected}
>
  Indeterminate Checkbox
</Checkbox>

// Colored Checkbox
<Checkbox
  isSelected={isChecked}
  onChange={setIsChecked}
  style={{ '--checkbox-color': '#3B82F6' }}
>
  Colored Checkbox
</Checkbox>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Checkbox;