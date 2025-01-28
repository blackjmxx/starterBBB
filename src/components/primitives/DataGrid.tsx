import { DataGrid } from '@/components/ui/dataGrid';

const DataGridDemo = () => {
  // Les données et colonnes de test peuvent être définies ici ou passées en props
  return (
    <div className="space-y-8">
      <DataGrid />

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<DataGrid
  columns={[
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'role', header: 'Role' }
  ]}
  data={data}
  onSort={(field, direction) => {}}
  onFilter={(filters) => {}}
  onPageChange={(page) => {}}
  itemsPerPage={10}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DataGridDemo;