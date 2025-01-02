import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HorizontalStepper } from './components/horizontal-stepper';
import { VerticalStepper } from './components/vertical-stepper';
import { AlternativeLabelStepper } from './components/alternative-label-stepper';

const variants = {
  default: 'Default',
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
} as const;

export function StepperComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Steppers</CardTitle>
          <Select value={selectedVariant} onValueChange={(value) => setSelectedVariant(value as keyof typeof variants)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Variant" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(variants).map(([key, label]) => (
                <SelectItem key={key} value={key} className="capitalize">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Horizontal Stepper */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Horizontal</h3>
          <HorizontalStepper variant={selectedVariant} />
        </section>

        {/* Alternative Label Stepper */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Alternative Label</h3>
          <AlternativeLabelStepper variant={selectedVariant} />
        </section>

        {/* Vertical Stepper */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Vertical</h3>
          <VerticalStepper variant={selectedVariant} />
        </section>
      </CardContent>
    </Card>
  );
}