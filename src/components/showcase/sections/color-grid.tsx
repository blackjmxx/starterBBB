export function ColorGrid() {
  const colors = [
    { name: 'Primary', class: 'bg-primary' },
    { name: 'Secondary', class: 'bg-secondary' },
    { name: 'Accent', class: 'bg-accent' },
    { name: 'Background', class: 'bg-background' },
    { name: 'Foreground', class: 'bg-foreground' },
    { name: 'Muted', class: 'bg-muted' },
    { name: 'Card', class: 'bg-card' },
    { name: 'Destructive', class: 'bg-destructive' },
    { name: 'Chart 1', class: 'bg-chart-1' },
    { name: 'Chart 2', class: 'bg-chart-2' },
    { name: 'Chart 3', class: 'bg-chart-3' },
    { name: 'Chart 4', class: 'bg-chart-4' },
    { name: 'Chart 5', class: 'bg-chart-5' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {colors.map((color) => (
        <div key={color.name} className="space-y-2">
          <div
            className={`${color.class} h-24 rounded-lg shadow-md`}
            style={{ border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <p className="text-sm font-medium">{color.name}</p>
        </div>
      ))}
    </div>
  );
}