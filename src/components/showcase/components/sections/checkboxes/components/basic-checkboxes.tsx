import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { variants } from '../styles';

interface BasicCheckboxesProps {
  variant: keyof typeof variants;
}

export function BasicCheckboxes({ variant }: BasicCheckboxesProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Basic</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Checkbox id="basic" className={cn(variants[variant])} />
          <Label htmlFor="basic">Basic checkbox</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="checked" defaultChecked className={cn(variants[variant])} />
          <Label htmlFor="checked">Checked by default</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled className={cn(variants[variant])} />
          <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="disabled-checked" disabled defaultChecked className={cn(variants[variant])} />
          <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled checked</Label>
        </div>
      </div>
    </section>
  );
}