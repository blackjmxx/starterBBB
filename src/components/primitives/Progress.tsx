import { usePalette } from '@/context/PaletteContext';
import { CheckCircle } from 'lucide-react';
import React from 'react';

const Progress = () => {
  const { colors } = usePalette();
  const values = [25, 50, 75, 100];

  return (
    <div className="space-y-8">
      {/* Linear Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Linear Progress</h3>
        <div className="space-y-8">
          {/* Determinate */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Uploading files...</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: '75%' }}
              />
            </div>
          </div>

          {/* Indeterminate */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full animate-progress-indeterminate" />
          </div>

          {/* With Buffer */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Buffering...</span>
              <span>45%</span>
            </div>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-blue-200 dark:bg-blue-900 rounded-full transition-all duration-500"
                style={{ width: '65%' }}
              />
              <div
                className="absolute h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: '45%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <div className="space-y-4">
          {Object.entries(colors).map(([color, bgClass]) => (
            <div key={color} className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${bgClass} rounded-full transition-all duration-500`}
                style={{ width: '60%' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Steps Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Steps Progress</h3>
        <div className="flex items-center">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step <= 2
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {step < 2 ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm">{step}</span>
                  )}
                </div>
                <span className="absolute -bottom-6 text-xs whitespace-nowrap">
                  Step {step}
                </span>
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-0.5 ${
                    step < 2
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Circular Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Circular Progress</h3>
        <div className="flex flex-wrap gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative inline-flex">
              <div
                className="relative w-20 h-20"
                style={{ transform: 'rotate(-90deg)' }}
              >
                {/* Background circle */}
                <svg className="w-full h-full">
                  <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="34"
                    cx="40"
                    cy="40"
                  />
                  {/* Progress circle */}
                  <circle
                    className="transition-all duration-300"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke={colors[index % colors.length]}
                    fill="transparent"
                    r="34"
                    cx="40"
                    cy="40"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 34}`,
                      strokeDashoffset: `${2 * Math.PI * 34 * (1 - value / 100)}`
                    }}
                  />
                </svg>
                {/* Percentage text */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: 'rotate(90deg)' }}
                >
                  <span className="text-lg font-semibold dark:text-white">
                    {value}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Progress with Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="flex items-center gap-8">
          {[
            { size: 'sm', dimensions: 'w-12 h-12', textSize: 'text-xs', strokeWidth: 6 },
            { size: 'md', dimensions: 'w-20 h-20', textSize: 'text-lg', strokeWidth: 8 },
            { size: 'lg', dimensions: 'w-32 h-32', textSize: 'text-2xl', strokeWidth: 10 }
          ].map(({ size, dimensions, textSize, strokeWidth }, index) => (
            <div key={size} className="relative inline-flex">
              <div
                className={`relative ${dimensions}`}
                style={{ transform: 'rotate(-90deg)' }}
              >
                <svg className="w-full h-full">
                  <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={size === 'sm' ? "20" : size === 'md' ? "34" : "58"}
                    cx={size === 'sm' ? "24" : size === 'md' ? "40" : "64"}
                    cy={size === 'sm' ? "24" : size === 'md' ? "40" : "64"}
                  />
                  <circle
                    className="transition-all duration-300"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    stroke={colors[2]}
                    fill="transparent"
                    r={size === 'sm' ? "20" : size === 'md' ? "34" : "58"}
                    cx={size === 'sm' ? "24" : size === 'md' ? "40" : "64"}
                    cy={size === 'sm' ? "24" : size === 'md' ? "40" : "64"}
                    style={{
                      strokeDasharray: `${2 * Math.PI * (size === 'sm' ? 20 : size === 'md' ? 34 : 58)}`,
                      strokeDashoffset: `${2 * Math.PI * (size === 'sm' ? 20 : size === 'md' ? 34 : 58) * 0.25}`
                    }}
                  />
                </svg>
                <div
                  className={`absolute inset-0 flex items-center justify-center ${textSize} font-semibold dark:text-white`}
                  style={{ transform: 'rotate(90deg)' }}
                >
                  75%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;