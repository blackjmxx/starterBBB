import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { themeTokens } from '@/lib/themes';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ColorGrid() {
  const [mode, setMode] = useState('basic');
  const [colorType, setColorType] = useState('primary');

  const colorTypes = {
    primary: themeTokens.light.primary,
    secondary: themeTokens.light.secondary,
    success: themeTokens.light.success,
    warning: themeTokens.light.warning,
    info: themeTokens.light.info,
    error: themeTokens.light.error,
    basic: themeTokens.light.basic
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Color System</CardTitle>
          <div className="flex items-center gap-4">
            <Select value={colorType} onValueChange={setColorType}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
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
      <CardContent className="space-y-8">
        {mode === 'basic' ? (
          <>
            {/* Selected Color Type */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold capitalize">{colorType} Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(colorTypes[colorType]).map(([name, color]) => (
                  <div key={name} className="space-y-2">
                    <div
                      className="h-16 rounded-lg shadow-md border"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-sm">
                      <div className="font-medium capitalize">{name}</div>
                      <div className="text-muted-foreground">{color}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Status Colors Section */}
            {colorType === 'basic' && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Status Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.entries(themeTokens.light.status).map(([name, color]) => (
                    <div key={name} className="space-y-2">
                      <div
                        className="h-16 rounded-lg shadow-md border"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-sm">
                        <div className="font-medium capitalize">{name}</div>
                        <div className="text-muted-foreground">{color}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // Advanced Color System with Scales for Selected Type
          <div className="space-y-2">
            <h3 className="text-lg font-semibold capitalize">{colorType} Color Scales</h3>
            <div className="grid gap-8">
              {Object.entries(themeTokens.light[colorType]?.scales || {}).map(([shade, color]) => (
                <div key={shade} className="space-y-2">
                  <div
                    className="h-16 rounded-lg shadow-md border"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-sm">
                    <div className="font-medium capitalize">{colorType} {shade}</div>
                    <div className="text-muted-foreground">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}