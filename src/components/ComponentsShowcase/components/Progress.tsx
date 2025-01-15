import React from 'react';
import { CheckCircle } from 'lucide-react';

const Progress = () => {
  const variants = [
    { type: 'determinate', value: 75 },
    { type: 'indeterminate' },
    { type: 'steps', steps: 4, currentStep: 2 },
    { type: 'circular', value: 65 }
  ];

  const colors = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600'
  };

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
        <div className="flex gap-8">
          {/* Determinate Circular */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
                className="dark:stroke-gray-700"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray={`${65}, 100`}
                className="rotate-90 origin-center"
              />
              <text
                x="18"
                y="20.35"
                className="text-3xl font-medium"
                textAnchor="middle"
                fill="currentColor"
              >
                65%
              </text>
            </svg>
          </div>

          {/* Indeterminate Circular */}
          <div className="w-20 h-20">
            <svg className="w-full h-full animate-spin" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
                className="dark:stroke-gray-700"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="25, 100"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Linear Progress
<Progress value={75} />

// Indeterminate Progress
<Progress indeterminate />

// With Buffer
<Progress
  value={45}
  buffer={65}
/>

// Steps Progress
<Progress
  type="steps"
  steps={4}
  currentStep={2}
/>

// Circular Progress
<Progress
  type="circular"
  value={65}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Progress;