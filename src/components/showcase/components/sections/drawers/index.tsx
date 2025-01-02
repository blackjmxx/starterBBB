import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BasicDrawer } from './components/basic-drawer';
import { DrawerWithForm } from './components/drawer-with-form';
import { DrawerWithActions } from './components/drawer-with-actions';

const variants = {
  default: 'Default',
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
} as const;

const anchors = {
  left: 'Left',
  right: 'Right',
  top: 'Top',
  bottom: 'Bottom'
} as const;

export function DrawerComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');
  const [selectedAnchor, setSelectedAnchor] = useState<keyof typeof anchors>('right');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Drawers</CardTitle>
          <div className="flex flex-wrap gap-4">
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

            <Select value={selectedAnchor} onValueChange={(value) => setSelectedAnchor(value as keyof typeof anchors)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Anchor" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(anchors).map(([key, label]) => (
                  <SelectItem key={key} value={key} className="capitalize">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Basic Drawer */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          <BasicDrawer variant={selectedVariant} anchor={selectedAnchor} />
        </section>

        {/* Drawer with Form */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Form</h3>
          <DrawerWithForm variant={selectedVariant} anchor={selectedAnchor} />
        </section>

        {/* Drawer with Actions */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Actions</h3>
          <DrawerWithActions variant={selectedVariant} anchor={selectedAnchor} />
        </section>
      </CardContent>
    </Card>
  );
}