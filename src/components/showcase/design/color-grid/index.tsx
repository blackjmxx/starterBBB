import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { themeTokens } from '@/lib/themes';
import { ColorSection } from './color-section';
import { ColorScale } from './color-scale';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeSwitcher } from './theme-switcher';
import { useTheme } from '@/components/theme/theme-provider';

export function ColorGrid() {
  const [mode, setMode] = useState<'basic' | 'advanced'>('basic');
  const { theme } = useTheme();
  const colors = themeTokens[theme === 'dark' ? 'dark' : 'light'];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Color System</CardTitle>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
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
        {mode === 'basic' ? (
          <div className="space-y-8">
            <ColorSection
              title="Basic Colors"
              colors={colors.basic}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            />
            <ColorSection
              title="Status Colors"
              colors={colors.status}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            />
          </div>
        ) : (
          <Tabs defaultValue="brand" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="semantic">Semantic</TabsTrigger>
              <TabsTrigger value="surface">Surface</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
              <TabsTrigger value="all">All Colors</TabsTrigger>
            </TabsList>

            <TabsContent value="brand" className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Brand Colors</h2>
                <p className="text-muted-foreground">
                  Our brand colors define the visual identity of the application. Each color has 10 
                  different shades (50-900) for maximum flexibility.
                </p>
              </div>
              <ColorScale title="Primary" colors={colors.primary} />
              <ColorScale title="Secondary" colors={colors.secondary} />
              <ColorScale title="Accent" colors={colors.accent} />
              <ColorScale title="Neutral" colors={colors.neutral} />
            </TabsContent>

            <TabsContent value="semantic" className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Semantic Colors</h2>
                <p className="text-muted-foreground">
                  Semantic colors convey meaning and state across the application. Each semantic color
                  has its own scale for different use cases.
                </p>
              </div>
              <ColorScale title="Success" colors={colors.success} />
              <ColorScale title="Error" colors={colors.error} />
              <ColorScale title="Warning" colors={colors.warning} />
              <ColorScale title="Info" colors={colors.info} />
            </TabsContent>

            <TabsContent value="surface" className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Surface Colors</h2>
                <p className="text-muted-foreground">
                  Surface colors are used for backgrounds, cards, and other UI elements. They help
                  create depth and hierarchy in the interface.
                </p>
              </div>
              <ColorSection
                title="Background & Foreground"
                colors={{
                  background: colors.surface.background,
                  foreground: colors.surface.foreground,
                }}
                className="grid grid-cols-2 gap-4"
              />
              <ColorSection
                title="Card"
                colors={{
                  card: colors.surface.card,
                  'card-foreground': colors.surface['card-foreground'],
                }}
                className="grid grid-cols-2 gap-4"
              />
              <ColorSection
                title="Popover"
                colors={{
                  popover: colors.surface.popover,
                  'popover-foreground': colors.surface['popover-foreground'],
                }}
                className="grid grid-cols-2 gap-4"
              />
              <ColorSection
                title="Muted"
                colors={{
                  muted: colors.surface.muted,
                  'muted-foreground': colors.surface['muted-foreground'],
                }}
                className="grid grid-cols-2 gap-4"
              />
            </TabsContent>

            <TabsContent value="states" className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">State Colors</h2>
                <p className="text-muted-foreground">
                  State colors are used to indicate different states of UI elements like hover,
                  focus, and disabled states.
                </p>
              </div>
              <ColorSection
                title="Border Colors"
                colors={colors.border}
                className="grid grid-cols-3 gap-4"
              />
              <ColorSection
                title="Basic States"
                colors={colors.basic}
                className="grid grid-cols-4 gap-4"
              />
              <ColorSection
                title="Status States"
                colors={colors.status}
                className="grid grid-cols-4 gap-4"
              />
            </TabsContent>

            <TabsContent value="all" className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Complete Color System</h2>
                <p className="text-muted-foreground">
                  A comprehensive view of all color scales and variations in our design system.
                </p>
              </div>
              {Object.entries(colors).map(([category, colorSet]) => (
                <ColorScale
                  key={category}
                  title={category.charAt(0).toUpperCase() + category.slice(1)}
                  colors={colorSet}
                  showScale={category !== 'basic' && category !== 'status' && 
                            category !== 'surface' && category !== 'border'}
                />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}