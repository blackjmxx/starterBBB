import { Button } from '@/components/ui/button';
import { ButtonGroup } from './button-group';
import { ChevronDown, Save, Share, Trash } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SplitButtonGroupProps {
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SplitButtonGroup({ variant = 'default', size = 'md' }: SplitButtonGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup variant={variant} size={size}>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Save as draft</DropdownMenuItem>
            <DropdownMenuItem>Save as template</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>

      <ButtonGroup variant={variant} size={size}>
        <Button className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem>Share via email</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  );
}