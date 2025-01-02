import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { NavigationItem } from './navigation/menu-item';
import { navigationData } from './navigation/menu-data';

export function ComponentNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(navigationData).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger className="capitalize">
              {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                {items.map((item) => (
                  <NavigationItem key={item.name} {...item} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}