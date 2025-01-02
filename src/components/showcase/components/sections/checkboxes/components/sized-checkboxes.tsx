import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { variants } from '../styles';

interface SizedCheckboxesProps {
  variant: keyof typeof variants;
}

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-7 w-7'
};

export function SizedCheckboxes({ variant }: SizedCheckboxesProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Sizes</h3>
      <div className="flex flex-wrap items-end gap-8">
        {Object.entries(sizes).map(([size, sizeClass]) => (
          <div key={size} className="flex items-center gap-2">
            <Checkbox 
              id={`size-${size}`}
              defaultChecked
              className={cn(sizeClass, variants[variant])}
            />
            <Label htmlFor={`size-${size}`} className="capitalize">{size}</Label>
          </div>
        ))}
      </div>
    </section>
  );
}