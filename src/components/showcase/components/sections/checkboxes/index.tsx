import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Heart, Award } from 'lucide-react';
import { BasicCheckboxes } from './components/basic-checkboxes';
import { ColoredCheckboxes } from './components/colored-checkboxes';
import { SizedCheckboxes } from './components/sized-checkboxes';
import { CustomCheckboxes } from './components/custom-checkboxes';
import { GroupedCheckboxes } from './components/grouped-checkboxes';

const variants = {
  default: '',
  primary: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
  secondary: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
  success: 'data-[state=checked]:bg-success data-[state=checked]:border-success',
  warning: 'data-[state=checked]:bg-warning data-[state=checked]:border-warning',
  error: 'data-[state=checked]:bg-error data-[state=checked]:border-error',
  info: 'data-[state=checked]:bg-info data-[state=checked]:border-info'
} as const;

export function CheckboxComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Checkboxes</CardTitle>
          <Select value={selectedVariant} onValueChange={(value) => setSelectedVariant(value as keyof typeof variants)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(variants).map((variant) => (
                <SelectItem key={variant} value={variant} className="capitalize">
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Basic Checkboxes */}
        <BasicCheckboxes variant={selectedVariant} />

        {/* Colored Checkboxes */}
        <ColoredCheckboxes />

        {/* Sized Checkboxes */}
        <SizedCheckboxes variant={selectedVariant} />

        {/* Custom Checkboxes */}
        <CustomCheckboxes variant={selectedVariant} />

        {/* Grouped Checkboxes */}
        <GroupedCheckboxes variant={selectedVariant} />
      </CardContent>
    </Card>
  );
}