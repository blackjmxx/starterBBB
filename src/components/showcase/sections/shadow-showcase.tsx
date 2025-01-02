export function ShadowShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-sm" />
        <p className="text-sm font-medium">shadow-sm</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow" />
        <p className="text-sm font-medium">shadow</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-md" />
        <p className="text-sm font-medium">shadow-md</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-lg" />
        <p className="text-sm font-medium">shadow-lg</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-xl" />
        <p className="text-sm font-medium">shadow-xl</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-2xl" />
        <p className="text-sm font-medium">shadow-2xl</p>
      </div>
      <div className="space-y-2">
        <div className="bg-card h-24 rounded-lg shadow-inner" />
        <p className="text-sm font-medium">shadow-inner</p>
      </div>
    </div>
  );
}