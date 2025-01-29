import { Card, CardContent, CardHeader, CardTitle } from "@/aria-component/card";
import * as React from "react";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  color?: string;
  variant?: 'default' | 'outline' | 'paper' | 'colored';
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className = '', title, value, color, variant = 'default', ...props }, ref) => {
    const baseStyles = 'transition-all duration-200';
    const variantStyles = variant === 'colored' && color
      ? `bg-opacity-90 hover:bg-opacity-100`
      : '';
    
    const titleStyles = variant === 'colored' 
      ? 'text-sm font-medium text-white/80'
      : 'text-sm font-medium text-muted-foreground';
    
    const valueStyles = variant === 'colored'
      ? 'text-2xl font-bold text-white'
      : 'text-2xl font-bold text-foreground';

    return (
      <Card
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className}`}
        style={variant === 'colored' && color ? { backgroundColor: color } : undefined}
        {...props}
      >
        <CardHeader className="p-6">
          <CardTitle className={titleStyles}>{title}</CardTitle>
          <CardContent className="p-0 pt-2">
            <p className={valueStyles}>{value}</p>
          </CardContent>
        </CardHeader>
      </Card>
    );
  }
);

Stat.displayName = "Stat";

export { Stat };
export type { StatProps };

