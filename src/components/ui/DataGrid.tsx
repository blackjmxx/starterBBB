'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Search, Filter, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

const tableVariants = cva(
  'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
  {
    variants: {
      size: {
        default: '',
        sm: 'text-sm',
        lg: 'text-lg',
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

const statusVariants = cva(
  'px-2 py-1 rounded-full text-xs font-medium',
  {
    variants: {
      status: {
        Active: 'bg-green-100 text-green-800',
        Inactive: 'bg-gray-100 text-gray-800',
      }
    },
    defaultVariants: {
      status: 'Inactive'
    }
  }
);

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
}

interface Column {
  field: keyof User;
  header: string;
}

export interface DataGridProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  data?: User[];
  columns?: Column[];
  itemsPerPage?: number;
  onSort?: (field: keyof User, direction: 'asc' | 'desc') => void;
  onFilter?: (filters: any) => void;
  onPageChange?: (page: number) => void;
}

const DataGrid = React.forwardRef<HTMLTableElement, DataGridProps>(
  ({ className, size, data: initialData, columns: initialColumns, itemsPerPage = 5, ...props }, ref) => {
    // États
    const [sortField, setSortField] = React.useState<keyof User>('name');
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);

    // Données mockées si non fournies
    const mockData: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', lastActive: '1 day ago' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active', lastActive: '5 mins ago' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastActive: '1 hour ago' },
      { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', lastActive: '3 days ago' },
      { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Editor', status: 'Inactive', lastActive: '1 week ago' },
      { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', status: 'Active', lastActive: 'Just now' }
    ];

    const columns: Column[] = [
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role' },
      { field: 'status', header: 'Status' },
      { field: 'lastActive', header: 'Last Active' }
    ];

    const data = initialData || mockData;
    const tableColumns = initialColumns || columns;

    // Handlers
    const handleSort = (field: keyof User) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(filteredData.map(row => row.id));
      } else {
        setSelectedRows([]);
      }
    };

    const handleSelectRow = (id: number) => {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    };

    // Filtrage et tri des données
    const filteredData = React.useMemo(() => {
      return data
        .filter(row =>
          Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .sort((a, b) => {
          const aValue = a[sortField];
          const bValue = b[sortField];
          if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1;
          }
          return aValue < bValue ? 1 : -1;
        });
    }, [data, searchQuery, sortField, sortDirection]);

    const paginatedData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
      <div className="space-y-8">
        {/* Table Controls */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className={cn(tableVariants({ size, className }))} ref={ref} {...props}>
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === filteredData.length}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  {tableColumns.map((column) => (
                    <th
                      key={column.field}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort(column.field)}
                    >
                      <div className="flex items-center">
                        {column.header}
                        {sortField === column.field && (
                          sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                  ))}
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleSelectRow(row.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{row.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{row.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{row.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={cn(statusVariants({ status: row.status as 'Active' | 'Inactive' }))}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {row.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-300">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DataGrid.displayName = "DataGrid";

export { DataGrid, tableVariants, statusVariants };