import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StepIcon } from './step-icon';
import { StepConnector } from './step-connector';

const steps = [
  {
    label: 'Select campaign settings',
    description: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.',
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: 'Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions.',
  },
];

interface VerticalStepperProps {
  variant?: string;
}

export function VerticalStepper({ variant = 'default' }: VerticalStepperProps) {
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
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.label} className="flex gap-4">
          <div className="flex flex-col items-center">
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
                orientation="vertical"
                className="h-full my-2"
              />
            )}
          </div>
          <div className="flex-1 min-h-[100px]">
            <h4 className="font-medium mb-2">{step.label}</h4>
            {index === activeStep && (
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={index === 0}
                  >
                    Back
                  </Button>
                  <Button
                    variant={variant}
                    onClick={index === steps.length - 1 ? handleReset : handleNext}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}