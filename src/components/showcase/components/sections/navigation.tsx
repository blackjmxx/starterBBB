import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export function NavigationComponents() {
  const colorVariants = ['default', 'primary', 'secondary', 'success', 'warning', 'error'] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Tabs</h3>
          {colorVariants.map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="text-sm text-muted-foreground capitalize">{variant}</p>
              <Tabs defaultValue="tab1" className={`tabs-${variant}`}>
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Tab 1 content</TabsContent>
                <TabsContent value="tab2">Tab 2 content</TabsContent>
                <TabsContent value="tab3">Tab 3 content</TabsContent>
              </Tabs>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Navigation Menu</h3>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Breadcrumbs</h3>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>Navigation</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pagination</h3>
          {colorVariants.map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="text-sm text-muted-foreground capitalize">{variant}</p>
              <nav className="flex items-center space-x-2">
                <Button
                  variant={variant}
                  size="icon"
                  className="h-8 w-8"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant={variant}
                  size="icon"
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant={variant}
                  size="sm"
                  className="h-8 min-w-[2rem] px-3"
                >
                  1
                </Button>
                <Button
                  variant={variant}
                  size="sm"
                  className="h-8 min-w-[2rem] px-3"
                >
                  2
                </Button>
                <Button
                  variant={variant}
                  size="sm"
                  className="h-8 min-w-[2rem] px-3"
                >
                  3
                </Button>
                <Button
                  variant={variant}
                  size="icon"
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant={variant}
                  size="icon"
                  className="h-8 w-8"
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}