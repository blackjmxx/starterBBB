import { ColorSwatch } from './color-swatch';

interface ColorSectionProps {
  title: string;
  colors: Record<string, string>;
  className?: string;
}

export function ColorSection({ title, colors, className }: ColorSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className={className}>
        {Object.entries(colors).map(([name, color]) => (
          <ColorSwatch key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  );
}