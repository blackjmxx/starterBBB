import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([0]);

  const steps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Complete your profile' },
    { title: 'Verification', description: 'Verify your email' },
    { title: 'Done', description: 'Complete setup' }
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(prev => prev + 1);
      setCompletedSteps(prev => [...prev, activeStep]);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
      setCompletedSteps(prev => prev.filter(step => step !== activeStep - 1));
    }
  };

  return (
    <div className="space-y-8">
      {/* Horizontal Stepper */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Horizontal Stepper</h3>
        <div className="space-y-8">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                      ${completedSteps.includes(index)
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : index + 1 === activeStep
                          ? 'border-blue-600 text-blue-600'
                          : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                      }`}
                  >
                    {completedSteps.includes(index) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="absolute -bottom-8 w-32 text-center">
                    <p className="text-sm font-medium dark:text-white">{step.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-[50%] w-full h-0.5
                        ${completedSteps.includes(index)
                          ? 'bg-blue-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="flex justify-between pt-8">
            <button
              onClick={handleBack}
              disabled={activeStep === 1}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Stepper */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Vertical Stepper</h3>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="relative">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                    ${completedSteps.includes(index)
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : index + 1 === activeStep
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {completedSteps.includes(index) ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-4 top-8 w-0.5 h-12
                      ${completedSteps.includes(index)
                        ? 'bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                  />
                )}
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-sm font-medium dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {step.description}
                </p>
                {index + 1 === activeStep && (
                  <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Content for step {index + 1}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error State */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Error State</h3>
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                    ${index === 1
                      ? 'bg-red-100 border-red-600 text-red-600'
                      : completedSteps.includes(index)
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {index === 1 ? (
                    <X className="h-5 w-5" />
                  ) : completedSteps.includes(index) ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="absolute -bottom-8 w-32 text-center">
                  <p className={`text-sm font-medium ${
                    index === 1 ? 'text-red-600' : 'dark:text-white'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-[50%] w-full h-0.5
                      ${index === 1
                        ? 'bg-red-600'
                        : completedSteps.includes(index)
                          ? 'bg-blue-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Stepper
<Stepper
  steps={[
    { title: 'Step 1', description: 'Description 1' },
    { title: 'Step 2', description: 'Description 2' },
    { title: 'Step 3', description: 'Description 3' }
  ]}
  activeStep={currentStep}
  onNext={handleNext}
  onBack={handleBack}
/>

// Vertical Stepper
<Stepper
  orientation="vertical"
  steps={steps}
  activeStep={currentStep}
/>

// With Error
<Stepper
  steps={steps}
  activeStep={currentStep}
  error={1}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Stepper;