import { Button } from '@/components/ui/button';
import { buttonStyles } from './styles';
import { cn } from '@/lib/utils';

interface AlertActionsProps {
  style: 'standard' | 'filled' | 'outlined';
  variant: 'info' | 'success' | 'warning' | 'error';
  multiple?: boolean;
}

export function AlertActions({ style, variant, multiple }: AlertActionsProps) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      {multiple && (
        <Button 
          size="sm"
          variant="ghost"
          className={buttonStyles({ style, variant })}
        >
          Undo
        </Button>
      )}
      <Button 
        size="sm"
        variant={style === 'filled' ? 'secondary' : 'outline'}
        className={buttonStyles({ style, variant })}
      >
        Action
      </Button>
    </div>
  );
}