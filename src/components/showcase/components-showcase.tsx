import { NotificationsShowcase } from './sections/notifications-showcase';
// ... autres imports existants

export function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Components</h2>
        <div className="grid gap-8">
          <NotificationsShowcase />
          {/* ... autres composants existants */}
        </div>
      </section>
    </div>
  );
}