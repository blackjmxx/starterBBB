import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { themeTokens } from '@/lib/themes';

export function ColorSystem() {
  const [mode, setMode] = useState<'basic' | 'advanced'>('basic');
  const [selectedColor, setSelectedColor] = useState('primary');

  const colorSets = {
    primary: {
      name: 'Primary',
      colors: themeTokens.light.primary,
    },
    secondary: {
      name: 'Secondary',
      colors: themeTokens.light.secondary,
    },
    accent: {
      name: 'Accent',
      colors: themeTokens.light.accent,
    },
    success: {
      name: 'Success',
      colors: themeTokens.light.success,
    },
    warning: {
      name: 'Warning',
      colors: themeTokens.light.warning,
    },
    error: {
      name: 'Error',
      colors: themeTokens.light.error,
    },
    info: {
      name: 'Info',
      colors: themeTokens.light.info,
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Color System</CardTitle>
          <div className="flex items-center gap-4">
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(colorSets).map(([key, { name }]) => (
                  <SelectItem key={key} value={key}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="space-x-2">
              <Button
                variant={mode === 'basic' ? 'default' : 'outline'}
                onClick={() => setMode('basic')}
                size="sm"
              >
                Basic
              </Button>
              <Button
                variant={mode === 'advanced' ? 'default' : 'outline'}
                onClick={() => setMode('advanced')}
                size="sm"
              >
                Advanced
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Selected Color Set */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {colorSets[selectedColor as keyof typeof colorSets].name} Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(colorSets[selectedColor as keyof typeof colorSets].colors).map(([shade, color]) => (
                <div key={shade} className="space-y-2">
                  <div
                    className="h-16 rounded-lg shadow-md border"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-sm">
                    <div className="font-medium">{shade}</div>
                    <div className="text-muted-foreground">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Color Examples */}
          {mode === 'basic' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Usage Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className={`h-16 rounded-lg bg-${selectedColor}`} />
                  <p className="text-sm font-medium">Default</p>
                </div>
                <div className="space-y-2">
                  <div className={`h-16 rounded-lg bg-${selectedColor}/80`} />
                  <p className="text-sm font-medium">Hover</p>
                </div>
                <div className="space-y-2">
                  <div className={`h-16 rounded-lg bg-${selectedColor}/60`} />
                  <p className="text-sm font-medium">Pressed</p>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Color Information */}
          {mode === 'advanced' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Color Information</h3>
              <div className="prose dark:prose-invert">
                <p>
                  This color set provides a range of shades from 50 to 900, allowing for
                  flexible usage across different UI components and states.
                </p>
                <ul>
                  <li>50-200: Background and hover states</li>
                  <li>300-600: Primary usage and interactive elements</li>
                  <li>700-900: Text and emphasis</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}