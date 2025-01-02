import { Button } from '@/components/ui/button';
import { ButtonGroup } from './button-group';
import { LayoutGrid, LayoutList, LayoutDashboard } from 'lucide-react';

interface SegmentedButtonGroupProps {
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SegmentedButtonGroup({ variant = 'default', size = 'md' }: SegmentedButtonGroupProps) {
  return (
    <ButtonGroup variant={variant} size={size}>
      <Button className="flex items-center gap-2">
        <LayoutGrid className="h-4 w-4" />
        Grid
      </Button>
      <Button className="flex items-center gap-2">
        <LayoutList className="h-4 w-4" />
        List
      </Button>
      <Button className="flex items-center gap-2">
        <LayoutDashboard className="h-4 w-4" />
        Board
      </Button>
    </ButtonGroup>
  );
}