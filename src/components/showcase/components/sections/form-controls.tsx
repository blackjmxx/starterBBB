import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function FormControls() {
  const [selectedVariant, setSelectedVariant] = useState('default');

  const variants = {
    default: { name: 'Default' },
    destructive: { name: 'Destructive' },
    secondary: { name: 'Secondary' },
    success: { name: 'Success' },
    error: { name: 'Error' },
    warning: { name: 'Warning' },
    info: { name: 'Info' }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Form Controls</CardTitle>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(variants).map(([key, { name }]) => (
                <SelectItem key={key} value={key}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant={selectedVariant}>Default</Button>
            <Button variant={selectedVariant} size="sm">Small</Button>
            <Button variant={selectedVariant} size="lg">Large</Button>
            <Button variant={selectedVariant} disabled>Disabled</Button>
            <Button variant={`outline-${selectedVariant}`}>Outline</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Selection Controls</h3>
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms"
                className={`data-[state=checked]:bg-${selectedVariant} data-[state=checked]:border-${selectedVariant}`}
              />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="switch"
                className={`data-[state=checked]:bg-${selectedVariant}`}
              />
              <Label htmlFor="switch">Toggle</Label>
            </div>

            <RadioGroup defaultValue="option-1">
              {["Option 1", "Option 2"].map((label, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={`option-${idx + 1}`}
                    className={`text-${selectedVariant} data-[state=checked]:border-${selectedVariant}`}
                  />
                  <Label>{label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Range Controls</h3>
          <Slider 
            defaultValue={[50]} 
            max={100} 
            step={1}
            className={`[&_[role=slider]]:bg-${selectedVariant}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}