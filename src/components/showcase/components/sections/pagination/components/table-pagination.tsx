import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { paginationVariants } from '../styles';
import type { TablePaginationProps } from '../types';

const rowsPerPageOptions = [5, 10, 25, 50, 100];

export function TablePagination({
  variant = 'default',
  shape = 'rounded',
  page,
  rowsPerPage,
  count,
  onPageChange,
  onRowsPerPageChange
}: TablePaginationProps) {
  const totalPages = Math.ceil(count / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, count);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground whitespace-nowrap">Rows per page:</span>
        <Select
          value={rowsPerPage.toString()}
          onValueChange={(value) => {
            onRowsPerPageChange(parseInt(value, 10));
            onPageChange(1);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {rowsPerPageOptions.map((option) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {startIndex}-{endIndex} of {count}
        </span>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={cn(
              paginationVariants({ variant, shape }),
              'h-8 w-8'
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className={cn(
              paginationVariants({ variant, shape }),
              'h-8 w-8'
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}