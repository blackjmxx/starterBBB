import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight, Home, Settings, FileText, User, Plus } from 'lucide-react';
import { BasicBreadcrumbs } from './components/basic-breadcrumbs';
import { CollapsibleBreadcrumbs } from './components/collapsible-breadcrumbs';
import { CustomBreadcrumbs } from './components/custom-breadcrumbs';

const variants = {
  default: 'text-muted-foreground hover:text-foreground',
  primary: 'text-primary/60 hover:text-primary',
  secondary: 'text-secondary-foreground/60 hover:text-secondary-foreground',
  success: 'text-success/60 hover:text-success',
  warning: 'text-warning/60 hover:text-warning',
  error: 'text-error/60 hover:text-error',
  info: 'text-info/60 hover:text-info'
};

export function BreadcrumbsComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');

  const basicItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Settings', href: '#', icon: Settings },
    { label: 'Profile', href: '#', icon: User }
  ];

  const longItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Documents', href: '#', icon: FileText },
    { label: 'Projects', href: '#', icon: Settings },
    { label: 'Annual Reports', href: '#', icon: FileText },
    { label: '2023 Q4', href: '#', icon: FileText },
    { label: 'Financial Summary', icon: FileText }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Breadcrumbs</CardTitle>
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
        {/* Basic Breadcrumbs */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          <BasicBreadcrumbs 
            items={basicItems}
            variant={selectedVariant}
          />
        </section>

        {/* With Icons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Icons</h3>
          <BasicBreadcrumbs 
            items={basicItems}
            variant={selectedVariant}
            showIcons
          />
        </section>

        {/* Collapsible */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Collapsible</h3>
          <CollapsibleBreadcrumbs 
            items={longItems}
            variant={selectedVariant}
            maxItems={3}
          />
        </section>

        {/* Custom with Actions */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Actions</h3>
          <CustomBreadcrumbs
            items={basicItems}
            variant={selectedVariant}
            action={
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="h-4 w-4" />
                Add New
              </Button>
            }
          />
        </section>
      </CardContent>
    </Card>
  );
}