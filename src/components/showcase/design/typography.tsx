import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TypographyShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Headings</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Heading 1
              </h1>
              <code className="text-sm text-muted-foreground">
                text-4xl font-extrabold tracking-tight lg:text-5xl
              </code>
            </div>
            <div className="space-y-1">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Heading 2
              </h2>
              <code className="text-sm text-muted-foreground">
                text-3xl font-semibold tracking-tight
              </code>
            </div>
            <div className="space-y-1">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Heading 3
              </h3>
              <code className="text-sm text-muted-foreground">
                text-2xl font-semibold tracking-tight
              </code>
            </div>
            <div className="space-y-1">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Heading 4
              </h4>
              <code className="text-sm text-muted-foreground">
                text-xl font-semibold tracking-tight
              </code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Body Text</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xl leading-7">
                Large Text - The quick brown fox jumps over the lazy dog.
              </p>
              <code className="text-sm text-muted-foreground">
                text-xl leading-7
              </code>
            </div>
            <div className="space-y-1">
              <p className="leading-7">
                Base Text - The quick brown fox jumps over the lazy dog.
              </p>
              <code className="text-sm text-muted-foreground">leading-7</code>
            </div>
            <div className="space-y-1">
              <p className="text-sm leading-6">
                Small Text - The quick brown fox jumps over the lazy dog.
              </p>
              <code className="text-sm text-muted-foreground">
                text-sm leading-6
              </code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Font Weights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'].map(
              (weight) => (
                <div key={weight} className="space-y-1">
                  <p className={`font-${weight}`}>
                    {weight.charAt(0).toUpperCase() + weight.slice(1)} Text
                  </p>
                  <code className="text-sm text-muted-foreground">
                    font-{weight}
                  </code>
                </div>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}