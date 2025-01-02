import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info, AlertCircle, CheckCircle, AlertTriangle, X } from 'lucide-react';

const styles = {
  standard: 'bg-background',
  filled: 'text-white',
  outlined: 'border-2 bg-background'
} as const;

const alerts = [
  {
    variant: 'info',
    icon: Info,
    title: 'Info',
    description: 'This is an info alert — check it out!',
    className: {
      standard: 'border-info/50 text-info [&>svg]:text-info',
      filled: 'bg-info',
      outlined: 'border-info text-info [&>svg]:text-info'
    }
  },
  {
    variant: 'success',
    icon: CheckCircle,
    title: 'Success',
    description: 'This is a success alert — check it out!',
    className: {
      standard: 'border-success/50 text-success [&>svg]:text-success',
      filled: 'bg-success',
      outlined: 'border-success text-success [&>svg]:text-success'
    }
  },
  {
    variant: 'warning',
    icon: AlertTriangle,
    title: 'Warning',
    description: 'This is a warning alert — check it out!',
    className: {
      standard: 'border-warning/50 text-warning [&>svg]:text-warning',
      filled: 'bg-warning',
      outlined: 'border-warning text-warning [&>svg]:text-warning'
    }
  },
  {
    variant: 'error',
    icon: AlertCircle,
    title: 'Error',
    description: 'This is an error alert — check it out!',
    className: {
      standard: 'border-error/50 text-error [&>svg]:text-error',
      filled: 'bg-error',
      outlined: 'border-error text-error [&>svg]:text-error'
    }
  }
] as const;

type StyleType = keyof typeof styles;

export function AlertComponents() {
  const [selectedStyle, setSelectedStyle] = useState<StyleType>('standard');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Alerts</CardTitle>
          <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as StyleType)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="filled">Filled</SelectItem>
              <SelectItem value="outlined">Outlined</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {alerts.map(({ variant, icon: Icon, title, description, className }) => (
          <Alert 
            key={variant} 
            className={`${styles[selectedStyle]} ${className[selectedStyle]}`}
          >
            <Icon className="h-4 w-4" />
            <div className="flex-1">
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>{description}</AlertDescription>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={selectedStyle === 'filled' ? 'text-white hover:text-white/80' : ''}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        ))}

        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">With Actions</h3>
          <Alert className={`${styles[selectedStyle]} ${alerts[0].className[selectedStyle]}`}>
            <Info className="h-4 w-4" />
            <div className="flex-1">
              <AlertTitle>Info with Action</AlertTitle>
              <AlertDescription>This is an info alert — check it out!</AlertDescription>
            </div>
            <Button 
              size="sm"
              variant={selectedStyle === 'filled' ? 'secondary' : 'outline'}
              className={selectedStyle === 'filled' ? 'text-white border-white hover:text-white/80' : ''}
            >
              Action
            </Button>
          </Alert>

          <Alert className={`${styles[selectedStyle]} ${alerts[0].className[selectedStyle]}`}>
            <Info className="h-4 w-4" />
            <div className="flex-1">
              <AlertTitle>Info with Multiple Actions</AlertTitle>
              <AlertDescription>This is an info alert — check it out!</AlertDescription>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm"
                variant="ghost"
                className={selectedStyle === 'filled' ? 'text-white hover:text-white/80' : ''}
              >
                Undo
              </Button>
              <Button 
                size="sm"
                variant={selectedStyle === 'filled' ? 'secondary' : 'outline'}
                className={selectedStyle === 'filled' ? 'text-white border-white hover:text-white/80' : ''}
              >
                Action
              </Button>
            </div>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
}