import { usePalette } from '@/context/PaletteContext';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useState } from 'react';

interface SliderProps {
  colors: string[];
}

const Slider: React.FC<SliderProps> = () => {
  const [value, setValue] = useState(50);
  const [rangeValue, setRangeValue] = useState([30, 70]);
  const [volume, setVolume] = useState(75);
  const { colors } = usePalette();

  const getTrackBackground = (val: number, color: string) => {
    return {
      background: `linear-gradient(to right, ${color} 0%, ${color} ${val}%, #E5E7EB ${val}%, #E5E7EB 100%)`
    };
  };

  const getRangeBackground = (start: number, end: number, color: string) => {
    return {
      background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${start}%, ${color} ${start}%, ${color} ${end}%, #E5E7EB ${end}%, #E5E7EB 100%)`
    };
  };

  return (
    <div className="space-y-8">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="space-y-6">
          {colors.map((color, index) => (
            <div key={index} className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={getTrackBackground(value, color)}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Color {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Range Slider</h3>
        <div className="space-y-2">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue[0]}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val < rangeValue[1]) {
                  setRangeValue([val, rangeValue[1]]);
                }
              }}
              className="absolute w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={getRangeBackground(rangeValue[0], rangeValue[1], colors[0])}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue[1]}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val > rangeValue[0]) {
                  setRangeValue([rangeValue[0], val]);
                }
              }}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{rangeValue[0]}</span>
            <span>{rangeValue[1]}</span>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icons</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setVolume(0)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <VolumeX className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={getTrackBackground(volume, colors[0])}
            />
          </div>
          <button
            onClick={() => setVolume(100)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <Volume2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="space-y-6">
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size} className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className={`w-full ${
                  size === 'sm' ? 'h-1' : size === 'md' ? 'h-2' : 'h-3'
                } bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer`}
                style={getTrackBackground(50, colors[0])}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Slider;