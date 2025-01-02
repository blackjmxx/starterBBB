import { BasicPagination } from './basic-pagination';
import type { PaginationProps } from '../types';

export function PaginationWithSizing(props: PaginationProps) {
  return (
    <div className="space-y-4">
      <BasicPagination {...props} size="sm" />
      <BasicPagination {...props} size="md" />
      <BasicPagination {...props} size="lg" />
    </div>
  );
}