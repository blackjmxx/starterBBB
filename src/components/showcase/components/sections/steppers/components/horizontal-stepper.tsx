import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StepIcon } from './step-icon';
import { StepConnector } from './step-connector';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad'
];

interface HorizontalStepperProps {
  variant?: string;
}

export function HorizontalStepper({ variant = 'default' }: HorizontalStepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => step === 1;
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevStep => prevStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevStep => prevStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setSkipped(new Set<number>());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <StepIcon
                active={index === activeStep}
                completed={index < activeStep}
                icon={index + 1}
                variant={variant}
              />
              {index < steps.length - 1 && (
                <StepConnector
                  active={index < activeStep}
                  completed={index < activeStep}
                  variant={variant}
                />
              )}
            </div>
          );
        })}
      </div>

      <Card className="p-6">
        {activeStep === steps.length ? (
          <>
            <p className="mb-4">All steps completed - you&apos;re finished</p>
            <Button onClick={handleReset} variant={variant}>Reset</Button>
          </>
        ) : (
          <>
            <p className="mb-4">{steps[activeStep]}</p>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <div className="flex gap-2">
                {isStepOptional(activeStep) && (
                  <Button variant="ghost" onClick={handleSkip}>
                    Skip
                  </Button>
                )}
                <Button variant={variant} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}