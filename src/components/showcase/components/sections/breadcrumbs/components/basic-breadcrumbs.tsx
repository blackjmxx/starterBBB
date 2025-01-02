import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { variants } from '../styles';
import type { BreadcrumbItem } from '../types';

interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[];
  variant: keyof typeof variants;
  showIcons?: boolean;
}

export function BasicBreadcrumbs({ items, variant, showIcons = false }: BasicBreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const Icon = item.icon;

          return (
            <li key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              )}
              
              {isLast ? (
                <span className="flex items-center gap-1.5">
                  {showIcons && Icon && <Icon className="h-4 w-4" />}
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
                  {showIcons && Icon && <Icon className="h-4 w-4" />}
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