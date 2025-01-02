import { cn } from '@/lib/utils';
import { contentStyles } from './styles';

interface AlertContentProps {
  title: string;
  description?: string;
  style: 'standard' | 'filled' | 'outlined';
  className?: string;
}

export function AlertContent({ title, description, style, className }: AlertContentProps) {
  return (
    <div className={cn(contentStyles({ style }), className)}>
      <p className="font-medium">{title}</p>
      {description && (
        <span className="text-sm opacity-90">
          {description}
        </span>
      )}
    </div>
  );
}