import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { alertStyles } from './alert-styles';

interface AlertWithActionsProps {
  selectedStyle: keyof typeof alertStyles;
  className: string;
  multiple?: boolean;
}

export function AlertWithActions({ selectedStyle, className, multiple }: AlertWithActionsProps) {
  return (
    <Alert className={`${alertStyles[selectedStyle]} ${className}`}>
      <Info className="h-4 w-4" />
      <div className="flex-1">
        <AlertTitle>Info with {multiple ? 'Multiple Actions' : 'Action'}</AlertTitle>
        <AlertDescription>This is an info alert — check it out!</AlertDescription>
      </div>
      {multiple ? (
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
      ) : (
        <Button 
          size="sm"
          variant={selectedStyle === 'filled' ? 'secondary' : 'outline'}
          className={selectedStyle === 'filled' ? 'text-white border-white hover:text-white/80' : ''}
        >
          Action
        </Button>
      )}
    </Alert>
  );
}