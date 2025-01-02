import { ColorGrid } from './sections/color-grid';
import { TypographyShowcase } from './sections/typography-showcase';
import { ShadowShowcase } from './sections/shadow-showcase';
import { GridShowcase } from './sections/grid-showcase';
import { IconShowcase } from './sections/icon-showcase';

export function DesignShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Colors</h2>
        <ColorGrid />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Typography</h2>
        <TypographyShowcase />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Shadows</h2>
        <ShadowShowcase />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Grid System</h2>
        <GridShowcase />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Icons</h2>
        <IconShowcase />
      </section>
    </div>
  );
}