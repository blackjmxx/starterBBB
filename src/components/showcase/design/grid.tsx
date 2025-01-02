import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function GridShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grid System</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Basic Grid</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-secondary h-20 rounded-lg flex items-center justify-center font-medium"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <code className="mt-2 block text-sm text-muted-foreground">
            grid grid-cols-4 gap-4
          </code>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Responsive Grid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-secondary h-20 rounded-lg flex items-center justify-center font-medium"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <code className="mt-2 block text-sm text-muted-foreground">
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
          </code>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Complex Layout</h3>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 md:col-span-4 bg-secondary h-20 rounded-lg flex items-center justify-center font-medium">
              1
            </div>
            <div className="col-span-3 md:col-span-2 bg-secondary h-20 rounded-lg flex items-center justify-center font-medium">
              2
            </div>
            <div className="col-span-3 md:col-span-2 bg-secondary h-20 rounded-lg flex items-center justify-center font-medium">
              3
            </div>
            <div className="col-span-6 md:col-span-4 bg-secondary h-20 rounded-lg flex items-center justify-center font-medium">
              4
            </div>
          </div>
          <code className="mt-2 block text-sm text-muted-foreground">
            grid grid-cols-6 gap-4 with col-span utilities
          </code>
        </div>
      </CardContent>
    </Card>
  );
}