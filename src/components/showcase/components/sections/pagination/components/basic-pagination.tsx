import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { paginationVariants } from '../styles';
import type { PaginationProps } from '../types';

function usePagination({
  count,
  page,
  siblingCount = 1,
  boundaryCount = 1,
}: {
  count: number;
  page: number;
  siblingCount?: number;
  boundaryCount?: number;
}) {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      count - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      page + siblingCount,
      boundaryCount + siblingCount * 2 + 2
    ),
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ['ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),
    ...endPages,
  ];

  return itemList;
}

export function BasicPagination({ 
  variant = 'default',
  shape = 'rounded',
  size = 'md',
  itemVariant = 'text',
  page,
  count,
  onChange,
  showFirstLast = true,
  siblingCount = 1,
  boundaryCount = 1,
}: PaginationProps) {
  const items = usePagination({ count, page, siblingCount, boundaryCount });

  return (
    <nav className="flex items-center justify-center gap-1">
      {showFirstLast && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange(1)}
          disabled={page === 1}
          className={cn(paginationVariants({ variant, shape, size }))}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={cn(paginationVariants({ variant, shape, size }))}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {items.map((item, index) => {
        if (item === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 text-muted-foreground">
              ...
            </span>
          );
        }

        const pageNumber = item as number;
        const isCurrentPage = pageNumber === page;

        return (
          <Button
            key={pageNumber}
            variant={isCurrentPage ? itemVariant : 'ghost'}
            size="icon"
            onClick={() => onChange(pageNumber)}
            data-active={isCurrentPage}
            className={cn(
              paginationVariants({ variant, shape, size }),
              isCurrentPage && itemVariant === 'outlined' && 'border-2'
            )}
          >
            {pageNumber}
          </Button>
        );
      })}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.min(count, page + 1))}
        disabled={page === count}
        className={cn(paginationVariants({ variant, shape, size }))}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {showFirstLast && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange(count)}
          disabled={page === count}
          className={cn(paginationVariants({ variant, shape, size }))}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      )}
    </nav>
  );
}