'use client';
import React from 'react';
import { Loader2, Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { usePalette } from '@/context/PaletteContext';

const ButtonDemo = () => {
  const { colors } = usePalette();

  return (
    <div className="space-y-12">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" style={{ backgroundColor: colors[0] }}>Default</Button>
          <Button variant="destructive" style={{ backgroundColor: colors[1] }}>Destructive</Button>
          <Button variant="outline" style={{ borderColor: colors[2], color: colors[2] }}>Outline</Button>
          <Button variant="secondary" style={{ backgroundColor: colors[3] }}>Secondary</Button>
          <Button variant="ghost" style={{ color: colors[4] }}>Ghost</Button>
          <Button variant="link" style={{ color: colors[5] }}>Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" style={{ backgroundColor: colors[0] }}>Small</Button>
          <Button size="default" style={{ backgroundColor: colors[0] }}>Default</Button>
          <Button size="lg" style={{ backgroundColor: colors[0] }}>Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button style={{ backgroundColor: colors[0] }}>
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
          <Button variant="outline" style={{ borderColor: colors[2], color: colors[2] }}>
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button disabled style={{ backgroundColor: colors[0] }}>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
          </Button>
        </div>
      </div>

      {/* Block */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Block</h3>
        <Button className="w-full" style={{ backgroundColor: colors[0] }}>
          Block Button
        </Button>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Button
<Button variant="default">Click me</Button>

// With Icon
<Button variant="outline">
  <Plus className="mr-2" />
  Add Item
</Button>

// Loading State
<Button disabled>
  <Loader2 className="animate-spin mr-2" />
  Processing
</Button>

// Block Button
<Button className="w-full">Full Width</Button>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonDemo;