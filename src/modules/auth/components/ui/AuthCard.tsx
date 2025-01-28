'use client';

import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, header, footer, className }: AuthCardProps) {
  return (
    <Card className={cn(
      'w-full max-w-md mx-auto',
      'bg-card p-6 rounded-xl shadow-sm',
      className
    )}>
      {header && (
        <CardHeader className="flex justify-between items-center mb-4 text-card-foreground">
          {header}
        </CardHeader>
      )}
      <CardContent className="text-card-foreground">
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="text-card-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}