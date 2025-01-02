export type PaginationVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type PaginationShape = 'circular' | 'rounded' | 'square';
export type PaginationSize = 'sm' | 'md' | 'lg';
export type PaginationItemVariant = 'text' | 'contained' | 'outlined';

export interface PaginationProps {
  variant?: PaginationVariant;
  shape?: PaginationShape;
  size?: PaginationSize;
  itemVariant?: PaginationItemVariant;
  page: number;
  count: number;
  onChange: (page: number) => void;
  showFirstLast?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

export interface TablePaginationProps {
  variant?: PaginationVariant;
  shape?: PaginationShape;
  page: number;
  rowsPerPage: number;
  count: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}