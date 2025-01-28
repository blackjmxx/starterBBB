import { usePalette } from '@/context/PaletteContext';
import React, { createContext, useContext, useState } from 'react';

type SwitchProps = {
  colors?: string[];
  label?: string;
  description?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelPlacement?: 'top' | 'bottom' | 'start' | 'end';
  children?: React.ReactNode;
};

type SwitchGroupProps = {
  label?: string;
  description?: string;
  orientation?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  children: React.ReactNode;
};

const SwitchContext = createContext<{ isDisabled?: boolean }>({});

export const SwitchGroup: React.FC<SwitchGroupProps> = ({
  label,
  description,
  orientation = 'vertical',
  isDisabled,
  children
}) => (
  <SwitchContext.Provider value={{ isDisabled }}>
    <div className={`${orientation === 'horizontal' ? 'flex gap-4' : 'space-y-2'}`}>
      {(label || description) && (
        <div className="mb-2">
          {label && <span className="block text-sm font-medium">{label}</span>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
      {children}
    </div>
  </SwitchContext.Provider>
);

const Switch: React.FC<SwitchProps> = ({
  colors,
  label,
  description,
  isDisabled: localDisabled,
  isReadOnly,
  labelPlacement = 'end',
  children
}) => {
  const context = useContext(SwitchContext);
  const palette = usePalette();
  const [isChecked, setIsChecked] = useState(false);
  
  const resolvedColors = colors || palette.colors;
  const isDisabled = context.isDisabled || localDisabled;

  const handleToggle = () => {
    if (!isDisabled && !isReadOnly) {
      setIsChecked(!isChecked);
    }
  };

  const getLabelPlacementClasses = () => {
    switch (labelPlacement) {
      case 'top': return 'flex-col items-start gap-1';
      case 'bottom': return 'flex-col-reverse items-start gap-1';
      case 'start': return 'flex-row-reverse items-center gap-3';
      default: return 'flex-row items-center gap-3';
    }
  };

  return (
    <label className={`inline-flex ${getLabelPlacementClasses()} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className="relative inline-flex items-center">
        <button
          role="switch"
          aria-checked={isChecked}
          onClick={handleToggle}
          disabled={isDisabled || isReadOnly}
          className={`w-11 h-6 rounded-full transition-colors ${
            isChecked ? 'bg-blue-600' : 'bg-gray-200'
          } ${!isDisabled && !isReadOnly ? 'focus:outline-none focus:ring-2 focus:ring-blue-500' : ''}`}
          style={isChecked ? { backgroundColor: resolvedColors[0] } : {}}
        >
          <span
            className={`block h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${
              isChecked ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
        </button>
      </div>
      
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
    </label>
  );
};

export { Switch };
