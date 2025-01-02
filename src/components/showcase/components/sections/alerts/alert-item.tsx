import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Info, AlertCircle, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { alertStyles } from './alert-styles';

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
} as const;

interface AlertItemProps {
  variant: keyof typeof icons;
  title: string;
  description: string;
  className: Record<keyof typeof alertStyles, string>;
  selectedStyle: keyof typeof alertStyles;
}

export function AlertItem({ variant, title, description, className, selectedStyle }: AlertItemProps) {
  const Icon = icons[variant];
  
  return (
    <Alert className={`${alertStyles[selectedStyle]} ${className[selectedStyle]}`}>
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
  );
}