import { cn } from '@/lib/utils';

interface ImageButtonProps {
  image: {
    url: string;
    title: string;
    width?: string;
    description?: string;
  };
  className?: string;
  effect?: 'zoom' | 'fade' | 'slide';
}

export function ImageButton({ image, className, effect = 'zoom' }: ImageButtonProps) {
  const effectClasses = {
    zoom: 'group-hover:scale-110',
    fade: 'group-hover:opacity-75',
    slide: 'group-hover:translate-y-[-8px]',
  };

  return (
    <button
      className={cn(
        'group relative w-full overflow-hidden rounded-lg transition-all duration-300',
        'hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-cover bg-center transition-all duration-300',
          effectClasses[effect]
        )}
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
      <div className="relative flex min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex-col items-center justify-center p-6 text-center">
        <span className="mb-2 text-xl sm:text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
          {image.title}
        </span>
        {image.description && (
          <span className="text-sm sm:text-base text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {image.description}
          </span>
        )}
        <span className="mt-4 h-0.5 w-12 bg-white opacity-0 transition-all duration-300 group-hover:w-24 group-hover:opacity-100" />
      </div>
    </button>
  );
}