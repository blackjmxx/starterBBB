import { Alert } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AlertContent } from './alert-content';
import { AlertActions } from './alert-actions';
import { alertStyles, alertVariants } from '../styles';
import type { AlertStyle } from '../types';

interface AlertWithActionsListProps {
  selectedStyle: AlertStyle;
}

export function AlertWithActionsList({ selectedStyle }: AlertWithActionsListProps) {
  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">With Actions</h3>
      
      <Alert 
        className={cn(
          alertStyles[selectedStyle],
          alertVariants({ variant: 'info', style: selectedStyle })
        )}
      >
        <Info className="h-4 w-4" />
        <AlertContent
          title="Action required"
          description="Please review and take action"
        />
        <AlertActions
          style={selectedStyle}
          variant="info"
        />
      </Alert>

      <Alert 
        className={cn(
          alertStyles[selectedStyle],
          alertVariants({ variant: 'info', style: selectedStyle })
        )}
      >
        <Info className="h-4 w-4" />
        <AlertContent
          title="Multiple actions available"
          description="Choose from available actions"
        />
        <AlertActions
          style={selectedStyle}
          variant="info"
          multiple
        />
      </Alert>
    </div>
  );
}