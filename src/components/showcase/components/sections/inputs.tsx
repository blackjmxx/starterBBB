import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Search, Mail, Lock, User, Calendar, DollarSign } from 'lucide-react';

export function InputComponents() {
  const [selectedVariant, setSelectedVariant] = useState('default');

  const variants = {
    default: '',
    success: 'border-success focus:border-success',
    error: 'border-error focus:border-error',
    warning: 'border-warning focus:border-warning',
    info: 'border-info focus:border-info'
  };

  const inputTypes = [
    { type: 'text', label: 'Text', placeholder: 'Enter text...', icon: <User className="h-4 w-4" /> },
    { type: 'email', label: 'Email', placeholder: 'email@example.com', icon: <Mail className="h-4 w-4" /> },
    { type: 'password', label: 'Password', placeholder: '••••••••', icon: <Lock className="h-4 w-4" /> },
    { type: 'search', label: 'Search', placeholder: 'Search...', icon: <Search className="h-4 w-4" /> },
    { type: 'date', label: 'Date', placeholder: 'Select date...', icon: <Calendar className="h-4 w-4" /> },
    { type: 'number', label: 'Number', placeholder: '0.00', icon: <DollarSign className="h-4 w-4" /> }
  ];

  const sizes = {
    sm: 'h-8 text-sm',
    default: 'h-10',
    lg: 'h-12 text-lg'
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Input Controls</CardTitle>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
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
      <CardContent className="grid gap-6">
        {/* Basic Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Inputs</h3>
          <div className="grid gap-4">
            {inputTypes.map(({ type, label, placeholder, icon }) => (
              <div key={type} className="space-y-2">
                <Label htmlFor={type}>{label}</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {icon}
                  </div>
                  <Input
                    id={type}
                    type={type}
                    placeholder={placeholder}
                    className={cn(
                      'pl-9',
                      variants[selectedVariant as keyof typeof variants]
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input Sizes</h3>
          <div className="grid gap-4">
            {Object.entries(sizes).map(([size, className]) => (
              <div key={size} className="space-y-2">
                <Label htmlFor={`input-${size}`} className="capitalize">{size}</Label>
                <Input
                  id={`input-${size}`}
                  placeholder={`${size} input`}
                  className={cn(
                    className,
                    variants[selectedVariant as keyof typeof variants]
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Input States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input States</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input
                id="disabled"
                placeholder="Disabled input"
                disabled
                className={variants[selectedVariant as keyof typeof variants]}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readonly">Readonly</Label>
              <Input
                id="readonly"
                placeholder="Readonly input"
                readOnly
                value="Readonly value"
                className={variants[selectedVariant as keyof typeof variants]}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="with-help">With Help Text</Label>
              <Input
                id="with-help"
                placeholder="Enter value..."
                className={variants[selectedVariant as keyof typeof variants]}
              />
              <p className="text-sm text-muted-foreground">
                This is a help text for the input above.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}