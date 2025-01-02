import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';

interface NavigationItemProps {
  name: string;
  icon: LucideIcon;
}

export function NavigationItem({ name, icon: Icon }: NavigationItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={`#${name.toLowerCase()}`}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "flex items-center gap-2"
          )}
        >
          <Icon className="h-4 w-4" />
          <span>{name}</span>
        </a>
      </NavigationMenuLink>
    </li>
  );
}