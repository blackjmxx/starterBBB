export function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Headings</h3>
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading 1
          </h1>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Heading 2
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Heading 3
          </h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Heading 4
          </h4>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Paragraphs</h3>
        <div className="space-y-4">
          <p className="leading-7">
            The quick brown fox jumps over the lazy dog. This is a regular paragraph with
            standard line height and font size.
          </p>
          <p className="text-sm text-muted-foreground">
            This is smaller text often used for secondary information.
          </p>
          <p className="text-lg leading-7">
            This is larger text that can be used for important content or introductions.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Font Weights</h3>
        <div className="space-y-2">
          <p className="font-light">Light (300)</p>
          <p className="font-normal">Regular (400)</p>
          <p className="font-medium">Medium (500)</p>
          <p className="font-semibold">Semibold (600)</p>
          <p className="font-bold">Bold (700)</p>
          <p className="font-extrabold">Extra Bold (800)</p>
        </div>
      </div>
    </div>
  );
}