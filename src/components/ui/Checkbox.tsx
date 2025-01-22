'use client';
import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  required?: boolean;
  name?: string;
  value?: string;
  indeterminate?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  color = '#3B82F6', // blue-500 par défaut
  size = 'md',
  label,
  disabled = false,
  className = '',
  id,
  required = false,
  name,
  value,
  indeterminate = false,
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const checkSizes = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label 
      className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          required={required}
          name={name}
          value={value}
        />
        <div
          className={`${sizes[size]} rounded flex items-center justify-center border-2 transition-colors ${
            disabled ? 'bg-gray-100 border-gray-300' : ''
          }`}
          style={{
            borderColor: checked || indeterminate ? color : 'currentColor',
            backgroundColor: checked || indeterminate ? color : 'transparent'
          }}
        >
          {checked && !indeterminate && (
            <Check className={`${checkSizes[size]} text-white`} />
          )}
          {indeterminate && (
            <div className={`${size === 'sm' ? 'h-0.5 w-2' : size === 'md' ? 'h-0.5 w-3' : 'h-0.5 w-4'} bg-white rounded-full`} />
          )}
        </div>
      </div>
      {label && (
        <span className={`ml-2 text-sm ${disabled ? 'text-gray-400' : 'text-gray-700 dark:text-gray-200'}`}>
          {label}
        </span>
      )}
    </label>
  );
};


Checkbox.displayName = "Checkbox";

export { Checkbox }; 