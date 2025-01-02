import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AlertContent } from './alert-content';
import { alertStyles, alertVariants, buttonStyles } from '../styles';
import type { AlertStyle, AlertData } from '../types';
import { getAlertIcon } from '../data';

interface AlertListProps {
  alerts: AlertData[];
  selectedStyle: AlertStyle;
}

export function AlertList({ alerts, selectedStyle }: AlertListProps) {
  return (
    <>
      {alerts.map(({ variant, title, description }) => {
        const Icon = getAlertIcon(variant);
        
        return (
          <Alert 
            key={variant}
            className={cn(
              alertStyles[selectedStyle],
              alertVariants({ variant, style: selectedStyle })
            )}
          >
            <Icon className="h-4 w-4" />
            <AlertContent 
              title={title}
              description={description}
            />
            <Button 
              variant="ghost" 
              size="icon"
              className={buttonStyles({ style: selectedStyle, variant })}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        );
      })}
    </>
  );
}