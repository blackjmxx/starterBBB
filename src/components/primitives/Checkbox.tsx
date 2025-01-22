import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { Checkbox } from '@/components/ui/Checkbox';
interface CheckboxProps {
  colors: string[];
}

const CheckboxDemo: React.FC<CheckboxProps> = () => {
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
        <Checkbox
          label="Checkbox basique"
          checked={checks.basic}
          onChange={(checked) => setChecks(prev => ({ ...prev, basic: checked }))}
        />
        
        <Checkbox
          label="Checkbox désactivée"
          disabled
          checked={checks.disabled}
        />
        
        <Checkbox
          label="Checkbox indéterminée"
          indeterminate
          checked={checks.indeterminate}
          onChange={(checked) => setChecks(prev => ({ ...prev, indeterminate: checked }))}
        />
      </div>
    </div>

    {/* Couleurs */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium dark:text-white">Couleurs</h3>
      <div className="flex flex-wrap gap-4">
        {colors.map((color, index) => (
          <Checkbox
            key={color}
            label={`Option ${index + 1}`}
            color={color}
            checked={checks.colored}
            onChange={(checked) => setChecks(prev => ({ ...prev, colored: checked }))}
          />
        ))}
      </div>
    </div>

    {/* Tailles */}
    <div className="space-y-4">
      <h3 className="text-lg font-medium dark:text-white">Tailles</h3>
      <div className="flex items-center gap-6">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Checkbox
            key={size}
            size={size}
            label={size.toUpperCase()}
            checked={true}
            color="#3B82F6"
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default CheckboxDemo;