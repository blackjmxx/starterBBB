import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Heart, Award } from 'lucide-react';
import { variants } from '../styles';

interface CustomCheckboxesProps {
  variant: keyof typeof variants;
}

export function CustomCheckboxes({ variant }: CustomCheckboxesProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Custom Icons</h3>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="heart"
            defaultChecked
            icon={<Heart className="h-3 w-3" />}
            className={cn(variants[variant])}
          />
          <Label htmlFor="heart">With Heart</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox 
            id="award"
            defaultChecked
            icon={<Award className="h-3 w-3" />}
            className={cn(variants[variant])}
          />
          <Label htmlFor="award">With Award</Label>
        </div>
      </div>
    </section>
  );
}