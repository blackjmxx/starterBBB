import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Mail, Bell, AlertCircle, Check, X, Clock, Loader2 } from 'lucide-react';

export function BadgeComponents() {
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedAnimation, setSelectedAnimation] = useState('none');
  const [selectedAnchor, setSelectedAnchor] = useState('top-right');

  const variants = {
    default: { name: 'Default', style: 'bg-primary/10 text-primary hover:bg-primary/20' },
    secondary: { name: 'Secondary', style: 'bg-secondary/10 text-secondary hover:bg-secondary/20' },
    success: { name: 'Success', style: 'bg-success/10 text-success hover:bg-success/20' },
    warning: { name: 'Warning', style: 'bg-warning/10 text-warning hover:bg-warning/20' },
    error: { name: 'Error', style: 'bg-error/10 text-error hover:bg-error/20' },
    info: { name: 'Info', style: 'bg-info/10 text-info hover:bg-info/20' },
    outline: { name: 'Outline', style: 'border-2' }
  };

  const sizes = {
    xs: { name: 'XS', style: 'text-xs px-1.5 py-0.5' },
    sm: { name: 'SM', style: 'text-xs px-2 py-0.5' },
    md: { name: 'MD', style: 'text-sm px-2.5 py-0.5' },
    lg: { name: 'LG', style: 'px-3 py-1' },
    xl: { name: 'XL', style: 'text-base px-4 py-1.5' }
  };

  const animations = {
    none: { name: 'None', style: '' },
    pulse: { name: 'Pulse', style: 'animate-pulse' },
    bounce: { name: 'Bounce', style: 'animate-bounce' },
    spin: { name: 'Spin', style: 'animate-spin' }
  };

  const anchorPositions = {
    'top-right': { name: 'Top Right', style: '-top-2 -right-2' },
    'top-left': { name: 'Top Left', style: '-top-2 -left-2' },
    'bottom-right': { name: 'Bottom Right', style: '-bottom-2 -right-2' },
    'bottom-left': { name: 'Bottom Left', style: '-bottom-2 -left-2' },
    'center-right': { name: 'Center Right', style: 'top-1/2 -right-2 -translate-y-1/2' },
    'center-left': { name: 'Center Left', style: 'top-1/2 -left-2 -translate-y-1/2' },
    'center-top': { name: 'Center Top', style: 'left-1/2 -top-2 -translate-x-1/2' },
    'center-bottom': { name: 'Center Bottom', style: 'left-1/2 -bottom-2 -translate-x-1/2' }
  };

  const statusConfig = [
    { label: 'Active', variant: 'success', Icon: Check },
    { label: 'Pending', variant: 'warning', Icon: Clock },
    { label: 'Processing', variant: 'info', Icon: Loader2, animation: 'spin' },
    { label: 'Blocked', variant: 'error', Icon: X },
    { label: 'Inactive', variant: 'secondary', Icon: AlertCircle }
  ];

  const notificationConfig = [
    { label: '3', variant: 'error', Icon: Bell },
    { label: '12', variant: 'warning', Icon: Mail },
    { label: 'New', variant: 'success', Icon: Bell },
    { label: '99+', variant: 'info', Icon: Bell }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <CardTitle>Badges</CardTitle>
          <div className="flex flex-wrap gap-4">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(sizes).map(([key, {name}]) => (
                  <SelectItem key={key} value={key}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedAnimation} onValueChange={setSelectedAnimation}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Animation" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(animations).map(([key, {name}]) => (
                  <SelectItem key={key} value={key}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedAnchor} onValueChange={setSelectedAnchor}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Anchor" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(anchorPositions).map(([key, {name}]) => (
                  <SelectItem key={key} value={key}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(variants).map(([key, {name, style}]) => (
              <Badge 
                key={key}
                variant={key} 
                className={cn(
                  style,
                  sizes[selectedSize].style,
                  animations[selectedAnimation].style
                )}
              >
                {name}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(variants).map(([key, {name, style}]) => (
              <Badge 
                key={key} 
                variant={key}
                className={cn(
                  style,
                  sizes[selectedSize].style,
                  animations[selectedAnimation].style,
                  'flex items-center gap-1'
                )}
              >
                <Mail className={cn('h-3 w-3', selectedSize === 'xl' && 'h-4 w-4')} />
                {name}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Dot Badges</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(variants).map(([key, {name, style}]) => (
              <Badge 
                key={key}
                variant={key}
                className={cn(
                  style,
                  sizes[selectedSize].style,
                  animations[selectedAnimation].style,
                  'flex items-center gap-1.5'
                )}
              >
                <span className={cn(
                  'rounded-full',
                  key === 'outline' ? 'bg-foreground' : style.split(' ')[1],
                  selectedSize === 'xl' ? 'h-2.5 w-2.5' : 'h-2 w-2'
                )} />
                {name}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Status</h3>
          <div className="flex flex-wrap gap-4">
            {statusConfig.map(({ label, variant, Icon, animation }) => (
              <Badge 
                key={label}
                variant={variant}
                className={cn(
                  variants[variant].style,
                  sizes[selectedSize].style,
                  animation ? animations[animation].style : animations[selectedAnimation].style,
                  'flex items-center gap-1'
                )}
              >
                <Icon className={cn('h-3 w-3', selectedSize === 'xl' && 'h-4 w-4')} />
                {label}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(variants).map(([key, {style}]) => (
              <div key={key} className="relative inline-flex items-center justify-center w-12 h-12 border-2 border-dashed rounded-lg">
                <Bell className="h-6 w-6" />
                <Badge 
                  variant={key}
                  className={cn(
                    style,
                    'absolute min-w-[20px] h-5 flex items-center justify-center px-1',
                    anchorPositions[selectedAnchor].style,
                    animations[selectedAnimation].style
                  )}
                >
                  99+
                </Badge>
              </div>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}