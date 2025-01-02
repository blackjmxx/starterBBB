import { AlertTitle, AlertDescription } from '@/components/ui/alert';

interface AlertContentProps {
  title: string;
  description: string;
}

export function AlertContent({ title, description }: AlertContentProps) {
  return (
    <div className="flex-1">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </div>
  );
}