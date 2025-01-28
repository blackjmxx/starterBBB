import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
  Label,
  Text,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps extends Omit<AriaTextFieldProps, 'className'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  inputClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  state?: 'normal' | 'error' | 'success';
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
}

export function TextField({
  label,
  description,
  errorMessage,
  className,
  inputClassName,
  size = 'md',
  state = 'normal',
  placeholder,
  type = 'text',
  ...props
}: TextFieldProps) {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-3 py-2',
    lg: 'px-3 py-3 text-lg',
  };

  const stateClasses = {
    normal: 'border-gray-300 dark:border-gray-600 focus:ring-blue-500',
    error: 'border-red-500 focus:ring-red-500',
    success: 'border-green-500 focus:ring-green-500',
  };

  return (
    <AriaTextField
      {...props}
      className={twMerge('flex flex-col gap-1', className)}
    >
      {label && (
        <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </Label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={twMerge(
          'w-full border rounded-lg focus:outline-none focus:ring-2',
          'dark:bg-gray-700 dark:text-white',
          sizeClasses[size],
          stateClasses[state],
          props.isDisabled && 'opacity-50 cursor-not-allowed',
          inputClassName
        )}
      />
      {description && (
        <Text slot="description" className="text-sm text-gray-500">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-500">
          {errorMessage}
        </Text>
      )}
    </AriaTextField>
  );
}