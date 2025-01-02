export function GridShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-secondary h-20 rounded-lg flex items-center justify-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Responsive Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-secondary h-20 rounded-lg flex items-center justify-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Grid with Different Sizes</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-4 bg-secondary h-20 rounded-lg flex items-center justify-center">
            1
          </div>
          <div className="col-span-3 md:col-span-2 bg-secondary h-20 rounded-lg flex items-center justify-center">
            2
          </div>
          <div className="col-span-3 md:col-span-2 bg-secondary h-20 rounded-lg flex items-center justify-center">
            3
          </div>
          <div className="col-span-6 md:col-span-4 bg-secondary h-20 rounded-lg flex items-center justify-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
}