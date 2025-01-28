import { Button } from '@/components/primitives';
import React from 'react';

const ButtonDemo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Button Demo</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variantes</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid" color="accent">Solid Accent</Button>
          <Button variant="outline" color="accent">Outline</Button>
          <Button variant="plain" color="accent">Plain</Button>
          <Button variant="solid" color="destructive">Destructive</Button>
          <Button variant="solid" color="success">Success</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Tailles</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <Button variant="solid" size="sm">Small</Button>
          <Button variant="solid" size="md">Medium</Button>
          <Button variant="solid" size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">États</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid">Normal</Button>
          <Button variant="solid" isDisabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Avec icônes</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid">
            <span className="mr-2">🚀</span>
            Start Icon
          </Button>
          <Button variant="solid">
            End Icon
            <span className="ml-2">🔍</span>
          </Button>
          <Button variant="solid">
            <span className="mr-2">💾</span>
            Both Icons
            <span className="ml-2">📁</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;