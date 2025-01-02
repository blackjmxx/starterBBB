import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Bold, 
  Italic, 
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  LayoutGrid,
  LayoutList,
  LayoutDashboard
} from 'lucide-react';
import { variants } from '../styles';

interface ToggleButtonsProps {
  variant?: keyof typeof variants;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function ToggleButtons({ variant = 'default', size = 'md' }: ToggleButtonsProps) {
  const [formatValue, setFormatValue] = useState<string[]>([]);
  const [alignValue, setAlignValue] = useState<string>('left');
  const [viewValue, setViewValue] = useState<string>('grid');

  const formatOptions = [
    { value: 'bold', icon: Bold },
    { value: 'italic', icon: Italic },
    { value: 'underline', icon: Underline }
  ];

  const alignOptions = [
    { value: 'left', icon: AlignLeft },
    { value: 'center', icon: AlignCenter },
    { value: 'right', icon: AlignRight },
    { value: 'justify', icon: AlignJustify }
  ];

  const viewOptions = [
    { value: 'grid', icon: LayoutGrid },
    { value: 'list', icon: LayoutList },
    { value: 'board', icon: LayoutDashboard }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {formatOptions.map(({ value, icon: Icon }) => (
          <Button
            key={value}
            variant={formatValue.includes(value) ? variant : 'outline'}
            size={size}
            onClick={() => {
              setFormatValue(
                formatValue.includes(value)
                  ? formatValue.filter((v) => v !== value)
                  : [...formatValue, value]
              );
            }}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {alignOptions.map(({ value, icon: Icon }) => (
          <Button
            key={value}
            variant={alignValue === value ? variant : 'outline'}
            size={size}
            onClick={() => setAlignValue(value)}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {viewOptions.map(({ value, icon: Icon }) => (
          <Button
            key={value}
            variant={viewValue === value ? variant : 'outline'}
            size={size}
            onClick={() => setViewValue(value)}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
    </div>
  );
}