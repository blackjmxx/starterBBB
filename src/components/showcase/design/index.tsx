import { ColorGrid } from './color-grid';
import { TypographyShowcase } from './typography';
import { ShadowShowcase } from './shadow';
import { GridShowcase } from './grid';
import { IconShowcase } from './icon';

export function DesignShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Design System</h2>
        <div className="grid gap-8">
          <ColorGrid />
          <TypographyShowcase />
          <ShadowShowcase />
          <GridShowcase />
          <IconShowcase />
        </div>
      </section>
    </div>
  );
}