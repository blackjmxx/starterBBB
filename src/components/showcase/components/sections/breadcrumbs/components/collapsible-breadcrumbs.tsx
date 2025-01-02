import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { variants } from '../styles';
import type { BreadcrumbItem } from '../types';

interface CollapsibleBreadcrumbsProps {
  items: BreadcrumbItem[];
  variant: keyof typeof variants;
  maxItems?: number;
}

export function CollapsibleBreadcrumbs({ 
  items, 
  variant, 
  maxItems = 3 
}: CollapsibleBreadcrumbsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length <= maxItems) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              )}
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <a
                  href={item.href}
                  className={cn('transition-colors', variants[variant])}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  const visibleItems = isExpanded 
    ? items 
    : [
        items[0],
        ...items.slice(-2)
      ];

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {visibleItems.map((item, index) => {
          const showDropdown = !isExpanded && index === 1;
          const isLast = index === visibleItems.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              )}
              
              {showDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-auto p-1"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item) => (
                      <DropdownMenuItem key={item.label}>
                        <a 
                          href={item.href}
                          className={cn('flex items-center gap-2', variants[variant])}
                        >
                          {item.icon && <item.icon className="h-4 w-4" />}
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : isLast ? (
                <span className="flex items-center gap-1.5">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1.5 transition-colors',
                    variants[variant]
                  )}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}