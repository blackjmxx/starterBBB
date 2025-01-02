import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BasicPagination } from './components/basic-pagination';
import { TablePagination } from './components/table-pagination';
import { PaginationWithInput } from './components/pagination-with-input';
import { PaginationWithSizing } from './components/pagination-with-sizing';
import type { PaginationShape, PaginationItemVariant } from './types';

const variants = {
  default: 'Default',
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
} as const;

const shapes: Record<PaginationShape, string> = {
  circular: 'Circular',
  rounded: 'Rounded',
  square: 'Square'
};

const itemVariants: Record<PaginationItemVariant, string> = {
  text: 'Text',
  contained: 'Contained',
  outlined: 'Outlined'
};

export function PaginationComponents() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>('default');
  const [selectedShape, setSelectedShape] = useState<PaginationShape>('rounded');
  const [selectedItemVariant, setSelectedItemVariant] = useState<PaginationItemVariant>('text');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <CardTitle>Pagination</CardTitle>
          <div className="flex flex-wrap gap-4">
            <Select value={selectedVariant} onValueChange={(value) => setSelectedVariant(value as keyof typeof variants)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Variant" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(variants).map(([key, label]) => (
                  <SelectItem key={key} value={key} className="capitalize">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedShape} onValueChange={(value) => setSelectedShape(value as PaginationShape)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Shape" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(shapes).map(([key, label]) => (
                  <SelectItem key={key} value={key} className="capitalize">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedItemVariant} onValueChange={(value) => setSelectedItemVariant(value as PaginationItemVariant)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(itemVariants).map(([key, label]) => (
                  <SelectItem key={key} value={key} className="capitalize">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Basic Pagination */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          <BasicPagination 
            variant={selectedVariant}
            shape={selectedShape}
            itemVariant={selectedItemVariant}
            page={page}
            count={10}
            onChange={setPage}
          />
        </section>

        {/* With Boundaries */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Boundaries</h3>
          <BasicPagination
            variant={selectedVariant}
            shape={selectedShape}
            itemVariant={selectedItemVariant}
            page={page}
            count={20}
            onChange={setPage}
            boundaryCount={2}
            siblingCount={1}
          />
        </section>

        {/* Table Pagination */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Table Pagination</h3>
          <TablePagination
            variant={selectedVariant}
            shape={selectedShape}
            page={page}
            rowsPerPage={rowsPerPage}
            count={100}
            onPageChange={setPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </section>

        {/* With Input */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Input</h3>
          <PaginationWithInput
            variant={selectedVariant}
            shape={selectedShape}
            itemVariant={selectedItemVariant}
            page={page}
            count={100}
            onChange={setPage}
          />
        </section>

        {/* Sizes */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Sizes</h3>
          <div className="space-y-4">
            <PaginationWithSizing
              variant={selectedVariant}
              shape={selectedShape}
              itemVariant={selectedItemVariant}
              page={page}
              count={10}
              onChange={setPage}
            />
          </div>
        </section>
      </CardContent>
    </Card>
  );
}