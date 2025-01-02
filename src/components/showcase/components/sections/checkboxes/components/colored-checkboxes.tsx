import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const colors = [
  { name: 'Primary', class: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary' },
  { name: 'Secondary', class: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary' },
  { name: 'Success', class: 'data-[state=checked]:bg-success data-[state=checked]:border-success' },
  { name: 'Warning', class: 'data-[state=checked]:bg-warning data-[state=checked]:border-warning' },
  { name: 'Error', class: 'data-[state=checked]:bg-error data-[state=checked]:border-error' },
  { name: 'Info', class: 'data-[state=checked]:bg-info data-[state=checked]:border-info' }
];

export function ColoredCheckboxes() {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Colors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map(({ name, class: colorClass }) => (
          <div key={name} className="flex items-center gap-2">
            <Checkbox 
              id={`color-${name}`}
              defaultChecked 
              className={colorClass}
            />
            <Label htmlFor={`color-${name}`}>{name}</Label>
          </div>
        ))}
      </div>
    </section>
  );
}