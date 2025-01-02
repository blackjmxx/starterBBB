import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { 
  Mail, 
  Loader2, 
  Plus, 
  ChevronRight, 
  ChevronLeft,
  Settings,
  Check,
  X
} from 'lucide-react';
import { ButtonGroup } from './components/button-group';
import { IconButton } from './components/icon-button';
import { ToggleButtons } from './components/toggle-buttons';
import { SegmentedButtonGroup } from './components/segmented-button-group';
import { SplitButtonGroup } from './components/split-button-group';
import { ImageButtonGroup } from './components/image-button-group';

const variants = {
  default: 'Default',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
} as const;

export function ButtonComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');
  const [selectedSize, setSelectedSize] = useState('md');
  const [loading, setLoading] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Buttons</CardTitle>
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
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Basic Buttons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          <div className="flex flex-wrap gap-4">
            {Object.keys(variants).map((variant) => (
              <Button
                key={variant}
                variant={variant as keyof typeof variants}
                size={selectedSize}
              >
                {variant}
              </Button>
            ))}
            <Button
              variant={selectedVariant}
              size={selectedSize}
              disabled
            >
              Disabled
            </Button>
          </div>
        </section>

        {/* With Icons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              variant={selectedVariant}
              size={selectedSize}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Email
            </Button>
            <Button
              variant={selectedVariant}
              size={selectedSize}
              className="gap-2"
            >
              Upload
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant={selectedVariant}
              size={selectedSize}
              className="gap-2"
            >
              <Settings className="h-4 w-4 animate-spin" />
              Settings
            </Button>
          </div>
        </section>

        {/* Loading State */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Loading State</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              variant={selectedVariant}
              size={selectedSize}
              disabled={loading}
              onClick={() => setLoading(true)}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Click me
                </>
              )}
            </Button>
            <Button
              variant={selectedVariant}
              size={selectedSize}
              disabled
              className="gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </div>
        </section>

        {/* Button Groups */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Button Groups</h3>
          <div className="flex flex-col gap-4">
            <ButtonGroup variant={selectedVariant} size={selectedSize}>
              <Button>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </ButtonGroup>

            <ButtonGroup variant={selectedVariant} size={selectedSize}>
              <Button>
                <Check className="h-4 w-4" />
                Accept
              </Button>
              <Button>
                <X className="h-4 w-4" />
                Reject
              </Button>
            </ButtonGroup>

            <SegmentedButtonGroup variant={selectedVariant} size={selectedSize} />
            
            <SplitButtonGroup variant={selectedVariant} size={selectedSize} />
          </div>
        </section>

        {/* Icon Buttons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
          <div className="flex flex-wrap gap-4">
            {Object.keys(variants).map((variant) => (
              <IconButton
                key={variant}
                variant={variant as keyof typeof variants}
                size={selectedSize}
                icon={Settings}
              />
            ))}
          </div>
        </section>

        {/* Toggle Buttons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Toggle Buttons</h3>
          <ToggleButtons 
            variant={selectedVariant}
            size={selectedSize}
          />
        </section>

        {/* Image Buttons */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Image Buttons</h3>
          <ImageButtonGroup />
        </section>
      </CardContent>
    </Card>
  );
}