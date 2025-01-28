import { Star } from 'lucide-react';
import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState<number>(3);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [readOnlyRating] = useState<number>(4);
  const [customRating, setCustomRating] = useState<number>(2);

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const colors = {
    yellow: 'text-yellow-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    purple: 'text-purple-400'
  };

  return (
    <div className="space-y-8">
      {/* Basic Rating */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Rating</h3>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              className="p-1 hover:scale-110 transition-transform"
            >
              <Star
                className={`${sizes.md} ${
                  (hoverRating !== null ? star <= hoverRating : star <= rating)
                    ? 'fill-current text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {rating} out of 5
          </span>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="space-y-4">
          {Object.entries(sizes).map(([size, sizeClass]) => (
            <div key={size} className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`${sizeClass} ${
                    star <= 3
                      ? 'fill-current text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 capitalize">
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="space-y-4">
          {Object.entries(colors).map(([color, colorClass]) => (
            <div key={color} className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`${sizes.md} ${
                    star <= 3
                      ? `fill-current ${colorClass}`
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 capitalize">
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Read Only */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Read Only</h3>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`${sizes.md} ${
                star <= readOnlyRating
                  ? 'fill-current text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <div className="ml-2 flex items-center gap-2">
            <span className="text-lg font-medium dark:text-white">{readOnlyRating}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">(245 reviews)</span>
          </div>
        </div>
      </div>

      {/* Custom Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Custom Icons</h3>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => setCustomRating(value)}
              className="p-1 hover:scale-110 transition-transform"
            >
              <div className={`h-6 w-6 rounded-full flex items-center justify-center
                ${value <= customRating
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {value}
              </div>
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {customRating} out of 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rating;