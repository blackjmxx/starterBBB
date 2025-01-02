import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StepIcon } from './step-icon';
import { StepConnector } from './step-connector';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

interface AlternativeLabelStepperProps {
  variant?: string;
}

export function AlternativeLabelStepper({ variant = 'default' }: AlternativeLabelStepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between mb-8">
          {steps.map((label, index) => (
            <div key={label} className="flex flex-col items-center flex-1">
              <StepIcon
                active={index === activeStep}
                completed={index < activeStep}
                icon={index + 1}
                variant={variant}
                className="mb-2"
              />
              <span className="text-sm text-center">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          {steps.map((_, index) => (
            <StepConnector
              key={index}
              active={index < activeStep}
              completed={index < activeStep}
              variant={variant}
              className={index === steps.length - 1 ? 'hidden' : ''}
            />
          ))}
        </div>
      </div>

      <Card className="p-6">
        {activeStep === steps.length ? (
          <>
            <p className="mb-4">All steps completed - you&apos;re finished</p>
            <Button onClick={handleReset} variant={variant}>Reset</Button>
          </>
        ) : (
          <>
            <p className="mb-4">Step {activeStep + 1}</p>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                variant={variant}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}