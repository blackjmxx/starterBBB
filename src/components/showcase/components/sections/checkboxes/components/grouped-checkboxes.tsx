import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { variants } from '../styles';

interface GroupedCheckboxesProps {
  variant: keyof typeof variants;
}

export function GroupedCheckboxes({ variant }: GroupedCheckboxesProps) {
  const [parentChecked, setParentChecked] = useState([true, false]);

  const handleParentChange = (checked: boolean) => {
    setParentChecked([checked, checked]);
  };

  const handleChild1Change = (checked: boolean) => {
    setParentChecked([checked, parentChecked[1]]);
  };

  const handleChild2Change = (checked: boolean) => {
    setParentChecked([parentChecked[0], checked]);
  };

  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Grouped</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="parent"
            checked={parentChecked[0] && parentChecked[1]}
            indeterminate={parentChecked[0] !== parentChecked[1]}
            onCheckedChange={handleParentChange}
            className={cn(variants[variant])}
          />
          <Label htmlFor="parent">Parent</Label>
        </div>
        
        <div className="ml-6 space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="child-1"
              checked={parentChecked[0]}
              onCheckedChange={handleChild1Change}
              className={cn(variants[variant])}
            />
            <Label htmlFor="child-1">Child 1</Label>
          </div>
          
          <div className="flex items-center gap-2">
            <Checkbox
              id="child-2"
              checked={parentChecked[1]}
              onCheckedChange={handleChild2Change}
              className={cn(variants[variant])}
            />
            <Label htmlFor="child-2">Child 2</Label>
          </div>
        </div>
      </div>
    </section>
  );
}