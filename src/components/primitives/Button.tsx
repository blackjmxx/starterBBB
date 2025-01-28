'use client';
import React from 'react';
import { Loader2, Plus, ArrowRight } from 'lucide-react';
import { Button as AriaButton } from '@/aria-component/button';
import { usePalette } from '@/context/PaletteContext';

// Définir les types exacts utilisés par le composant aria-button
export type ButtonVariant = 'solid' | 'outline' | 'plain';
export type ButtonColor = 'accent' | 'destructive' | 'success';

export interface AriaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  isIconOnly?: boolean;
  isDisabled?: boolean;
}

interface IconProps extends Omit<React.JSX.IntrinsicElements['svg'], 'ara-hidden'> {
  children: React.ReactNode;
}

// See: https://www.radix-ui.com/themes/docs/components/accessible-icon
export function Icon({
  children,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        ...props,
        'aria-hidden': 'true',
        'aria-label': undefined,
        'data-ui': 'icon',
        focusable: 'false',
      })}
      {ariaLabel ? <span className="sr-only">{ariaLabel}</span> : null}
    </>
  );
}

export function ChevronRightIcon({
  'aria-label': arialLabel,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <Icon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Icon>
  );
}

export function ChevronLeftIcon({
  'aria-label': arialLabel,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <Icon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </Icon>
  );
}

const Button = () => {
  const { colors } = usePalette();

  return (
    <div className="space-y-12">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <AriaButton variant="solid" color="accent">
            Solid Accent
          </AriaButton>
          <AriaButton variant="solid" color="destructive">
            Solid Destructive
          </AriaButton>
          <AriaButton variant="solid" color="success">
            Solid Success
          </AriaButton>
          <AriaButton variant="outline" color="accent">
            Outline Accent
          </AriaButton>
          <AriaButton variant="plain" color="accent">
            Plain Accent
          </AriaButton>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <AriaButton variant="solid" className="px-2 py-1 text-sm">
            Small
          </AriaButton>
          <AriaButton variant="solid" className="px-3 py-2">
            Default
          </AriaButton>
          <AriaButton variant="solid" className="px-4 py-3 text-lg">
            Large
          </AriaButton>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <AriaButton variant="solid">
            <Plus className="size-4 mr-2" /> Add Item
          </AriaButton>
          <AriaButton variant="outline" isIconOnly aria-label="Next">
            <ArrowRight className="size-4" />
          </AriaButton>
          <AriaButton variant="solid" isDisabled>
            <Loader2 className="size-4 animate-spin mr-2" /> Loading
          </AriaButton>
        </div>
      </div>

      {/* Block */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Block</h3>
        <AriaButton className="w-full" style={{ backgroundColor: colors[0] }}>
          Block Button
        </AriaButton>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { Button } from '@/aria-component/button';

// Basic Button
<Button variant="solid" color="accent">Click me</Button>

// With Icon
<Button variant="outline">
