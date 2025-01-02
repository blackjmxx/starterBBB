import { useState } from 'react';
import { ColorSwatch } from './color-swatch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface ColorScaleProps {
  title: string;
  colors: Record<string, string>;
  showScale?: boolean;
}

interface HSLColor {
  hue: number;
  saturation: number;
  lightness: number;
}

function parseHSL(hslString: string): HSLColor {
  const matches = hslString.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!matches) return { hue: 0, saturation: 0, lightness: 0 };
  return {
    hue: parseInt(matches[1]),
    saturation: parseInt(matches[2]),
    lightness: parseInt(matches[3])
  };
}

function generateColorScale(base: HSLColor): Record<string, string> {
  return {
    '50': `hsl(${base.hue}, ${base.saturation}%, 98%)`,
    '100': `hsl(${base.hue}, ${base.saturation}%, 95%)`,
    '200': `hsl(${base.hue}, ${base.saturation}%, 90%)`,
    '300': `hsl(${base.hue}, ${base.saturation}%, 80%)`,
    '400': `hsl(${base.hue}, ${base.saturation}%, 70%)`,
    '500': `hsl(${base.hue}, ${base.saturation}%, 60%)`,
    '600': `hsl(${base.hue}, ${base.saturation}%, 50%)`,
    '700': `hsl(${base.hue}, ${base.saturation}%, 40%)`,
    '800': `hsl(${base.hue}, ${base.saturation}%, 30%)`,
    '900': `hsl(${base.hue}, ${base.saturation}%, 20%)`
  };
}

export function ColorScale({ title, colors, showScale = true }: ColorScaleProps) {
  // Parse the initial color (using 500 as base)
  const baseColor = parseHSL(Object.values(colors)[5] || ''); // 500 is typically index 5
  
  const [hsl, setHSL] = useState<HSLColor>(baseColor);
  const [currentColors, setCurrentColors] = useState(colors);

  const updateColor = (key: keyof HSLColor, value: number) => {
    const newHSL = { ...hsl, [key]: value };
    setHSL(newHSL);
    setCurrentColors(generateColorScale(newHSL));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {showScale && (
          <div className="text-sm text-muted-foreground">
            50 → 900
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Hue ({hsl.hue}°)</Label>
          <Slider
            value={[hsl.hue]}
            min={0}
            max={360}
            step={1}
            onValueChange={([value]) => updateColor('hue', value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Saturation ({hsl.saturation}%)</Label>
          <Slider
            value={[hsl.saturation]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateColor('saturation', value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Base Lightness ({hsl.lightness}%)</Label>
          <Slider
            value={[hsl.lightness]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateColor('lightness', value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {Object.entries(currentColors).map(([name, color]) => (
          <ColorSwatch key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  );
}