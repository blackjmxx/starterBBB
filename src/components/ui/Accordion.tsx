'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  value: string | string[];
  onChange: (value: string) => void;
}>({ value: '', onChange: () => {} });

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = 'single', collapsible = false, defaultValue = '', className, children }, ref) => {
    const [value, setValue] = React.useState<string | string[]>(defaultValue);

    const onChange = (itemValue: string) => {
      if (type === 'single') {
        setValue(value === itemValue && collapsible ? '' : itemValue);
      } else {
        setValue(
          Array.isArray(value)
            ? value.includes(itemValue)
              ? value.filter((v) => v !== itemValue)
              : [...value, itemValue]
            : [itemValue]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ value, onChange }}>
        <div ref={ref} className={cn('space-y-1', className)}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = 'Accordion';

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, trigger, children, className }, ref) => {
    const { value: selectedValue, onChange } = React.useContext(AccordionContext);
    const isOpen = Array.isArray(selectedValue)
      ? selectedValue.includes(value)
      : selectedValue === value;

    return (
      <div ref={ref} className={cn('border-b', className)}>
        <button
          type="button"
          onClick={() => onChange(value)}
          className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline"
        >
          {trigger}
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>
        <div
          className={cn(
            'overflow-hidden transition-all',
            isOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <div className="pb-4 pt-0">{children}</div>
        </div>
      </div>
    );
  }
);
AccordionItem.displayName = 'AccordionItem'; 