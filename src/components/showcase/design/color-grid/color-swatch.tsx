import { cn } from '@/lib/utils';

interface ColorSwatchProps {
  color: string;
  name: string;
  className?: string;
}

export function ColorSwatch({ color, name, className }: ColorSwatchProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div
        className="h-16 rounded-lg shadow-md border"
        style={{ backgroundColor: color }}
      />
      <div className="text-sm">
        <div className="font-medium capitalize">{name}</div>
        <div className="text-muted-foreground">{color}</div>
      </div>
    </div>
  );
}