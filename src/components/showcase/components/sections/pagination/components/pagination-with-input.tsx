import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { paginationVariants } from '../styles';
import type { PaginationProps } from '../types';

export function PaginationWithInput({
  variant = 'default',
  page,
  count,
  onChange,
  size = 'md'
}: PaginationProps) {
  const [inputValue, setInputValue] = useState(page.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const newPage = parseInt(inputValue, 10);
    if (!isNaN(newPage) && newPage >= 1 && newPage <= count) {
      onChange(newPage);
    } else {
      setInputValue(page.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="ghost"
        size={size}
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={cn(paginationVariants({ variant }))}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="w-16 text-center"
          size={size}
        />
        <span className="text-muted-foreground">of {count}</span>
      </div>

      <Button
        variant="ghost"
        size={size}
        onClick={() => onChange(Math.min(count, page + 1))}
        disabled={page === count}
        className={cn(paginationVariants({ variant }))}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}