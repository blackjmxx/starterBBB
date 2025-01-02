import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Settings2, Users, Monitor, Check } from 'lucide-react';

const steps = [
  { label: 'Select campaign settings', icon: Settings2 },
  { label: 'Create an ad group', icon: Users },
  { label: 'Create an ad', icon: Monitor }
];

interface CustomizedStepperProps {
  variant?: string;
}

export function CustomizedStepper({ variant = 'default' }: CustomizedStepperProps) {
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

  const getVariantColor = (variant: string) => {
    switch (variant) {
      case 'primary': return 'var(--primary)';
      case 'secondary': return 'var(--secondary)';
      case 'success': return 'hsl(var(--success))';
      case 'warning': return 'hsl(var(--warning))';
      case 'error': return 'hsl(var(--error))';
      case 'info': return 'hsl(var(--info))';
      default: return 'hsl(var(--primary))';
    }
  };

  return (
    <div className="space-y-8">
      {/* First Style - Simple with Animated Connector */}
      <div className="relative">
        <div className="flex justify-between">
          {steps.map(({ label }, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;

            return (
              <div key={label} className="flex flex-col items-center z-10">
                <div className="flex items-center relative">
                  {index < steps.length - 1 && (
                    <div 
                      className="absolute left-8 w-[calc(100%+4rem)] h-[2px] bg-border"
                      style={{
                        background: isCompleted 
                          ? getVariantColor(variant)
                          : isActive 
                          ? `linear-gradient(to right, ${getVariantColor(variant)} 50%, var(--border) 50%)`
                          : 'var(--border)'
                      }}
                    />
                  )}
                  <div 
                    className={cn(
                      'h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 border-2',
                      isCompleted || isActive ? 'text-white' : 'text-muted-foreground border-border'
                    )}
                    style={{
                      backgroundColor: isCompleted || isActive ? getVariantColor(variant) : 'transparent',
                      borderColor: isCompleted || isActive ? getVariantColor(variant) : 'var(--border)'
                    }}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                </div>
                <span className={cn(
                  'mt-2 text-sm transition-colors duration-300',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Second Style - Gradient Connector */}
      <div className="relative">
        <div className="flex justify-between">
          {steps.map(({ label, icon: Icon }, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;

            return (
              <div key={label} className="flex flex-col items-center z-10">
                {index < steps.length - 1 && (
                  <div 
                    className="absolute top-6 h-[2px] w-[calc(100%/2)]"
                    style={{
                      left: `${(index * 50)}%`,
                      background: isCompleted 
                        ? `linear-gradient(to right, ${getVariantColor(variant)}, ${getVariantColor(variant)})`
                        : isActive
                        ? `linear-gradient(to right, ${getVariantColor(variant)}, var(--border))`
                        : 'var(--border)'
                    }}
                  />
                )}
                <div 
                  className={cn(
                    'h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2',
                    isCompleted || isActive ? 'text-white' : 'text-muted-foreground'
                  )}
                  style={{
                    backgroundColor: isCompleted || isActive ? getVariantColor(variant) : 'var(--background)',
                    borderColor: isCompleted || isActive ? getVariantColor(variant) : 'var(--border)'
                  }}
                >
                  {isCompleted ? <Check className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                </div>
                <span className={cn(
                  'mt-2 text-sm transition-colors duration-300',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Third Style - Dashed Connector */}
      <div className="relative">
        <div className="flex justify-between">
          {steps.map(({ label, icon: Icon }, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;

            return (
              <div key={label} className="flex flex-col items-center z-10">
                {index < steps.length - 1 && (
                  <div 
                    className="absolute top-6 h-[2px] w-[calc(100%/2)] border-t-2 border-dashed"
                    style={{
                      left: `${(index * 50)}%`,
                      borderColor: isCompleted ? getVariantColor(variant) : 'var(--border)'
                    }}
                  />
                )}
                <div 
                  className={cn(
                    'relative h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 border-2',
                    isCompleted || isActive ? 'text-white' : 'text-muted-foreground'
                  )}
                  style={{
                    backgroundColor: isCompleted || isActive ? getVariantColor(variant) : 'var(--background)',
                    borderColor: isCompleted || isActive ? getVariantColor(variant) : 'var(--border)'
                  }}
                >
                  {isActive && (
                    <>
                      <span 
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: `${getVariantColor(variant)}50` }}
                      />
                      <span 
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{ backgroundColor: `${getVariantColor(variant)}30` }}
                      />
                    </>
                  )}
                  <div className="relative z-10">
                    {isCompleted ? <Check className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                  </div>
                </div>
                <span className={cn(
                  'mt-2 text-sm transition-colors duration-300',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}>
                  {label}
                </span>
              </div>
            );
          })}
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
            <p className="mb-4">
              {activeStep === 0 && "Select campaign settings..."}
              {activeStep === 1 && "What is an ad group anyways?"}
              {activeStep === 2 && "This is the bit I really care about!"}
            </p>
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