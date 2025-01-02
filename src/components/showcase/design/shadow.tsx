import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ShadowShowcase() {
  const shadows = [
    { name: 'sm', class: 'shadow-sm' },
    { name: 'base', class: 'shadow' },
    { name: 'md', class: 'shadow-md' },
    { name: 'lg', class: 'shadow-lg' },
    { name: 'xl', class: 'shadow-xl' },
    { name: '2xl', class: 'shadow-2xl' },
    { name: 'inner', class: 'shadow-inner' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadows</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shadows.map(({ name, class: shadowClass }) => (
            <div key={name} className="space-y-2">
              <div
                className={`${shadowClass} bg-card h-24 rounded-lg border`}
              />
              <div className="space-y-1">
                <p className="font-medium">Shadow {name}</p>
                <code className="text-sm text-muted-foreground">
                  {shadowClass}
                </code>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}