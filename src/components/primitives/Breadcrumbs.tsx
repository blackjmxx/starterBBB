import { Breadcrumb } from '@/aria-component/breadcrumbs';
import { Home } from 'lucide-react';
import React from 'react';

// Custom BreadcrumbItem component
const BreadcrumbItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="inline-flex items-center">{children}</li>
);

const Breadcrumbs = () => {
  const variants = [
    {
      type: 'basic',
      items: ['Home', 'Products', 'Electronics', 'Laptops']
    },
    {
      type: 'with-icons',
      items: [
        { icon: Home, label: 'Home' },
        { label: 'Products' },
        { label: 'Electronics' },
        { label: 'Laptops' }
      ]
    },
    {
      type: 'collapsed',
      items: ['Home', 'Products', 'Electronics', 'Computers', 'Laptops', 'Gaming']
    }
  ];

  const renderBreadcrumbItems = (items: any[], type: string) => {
    return items.map((item, index) => (
      <BreadcrumbItem key={index}>
        {type === 'with-icons' && item.icon && <item.icon className="w-4 h-4 mr-2" />}
        {typeof item === 'string' ? item : item.label}
      </BreadcrumbItem>
    ));
  };

  return (
    <div className="space-y-8">
      {variants.map((variant) => (
        <div key={variant.type} className="space-y-4">
          <h3 className="text-lg font-medium dark:text-white capitalize">
            {variant.type.split('-').join(' ')} Breadcrumbs
          </h3>
          <Breadcrumb>
            <ol className="flex items-center space-x-2">
              {renderBreadcrumbItems(variant.items, variant.type)}
            </ol>
          </Breadcrumb>
        </div>
      ))}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { Breadcrumb } from '@/aria-component/breadcrumbs';
import { Home } from 'lucide-react';

const BreadcrumbItem = ({ children }) => (
  <li className="inline-flex items-center">{children}</li>
);

// Basic Breadcrumbs
<Breadcrumb>
  <ol className="flex items-center space-x-2">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Products</BreadcrumbItem>
    <BreadcrumbItem>Electronics</BreadcrumbItem>
  </ol>
</Breadcrumb>

// With Icons
<Breadcrumb>
  <ol className="flex items-center space-x-2">
    <BreadcrumbItem>
      <Home className="w-4 h-4 mr-2" />
      Home
    </BreadcrumbItem>
    <BreadcrumbItem>Products</BreadcrumbItem>
    <BreadcrumbItem>Electronics</BreadcrumbItem>
  </ol>
</Breadcrumb>

// Collapsed Breadcrumbs (Note: Collapsing logic needs to be implemented separately)
<Breadcrumb>
  <ol className="flex items-center space-x-2">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>...</BreadcrumbItem>
    <BreadcrumbItem>Electronics</BreadcrumbItem>
    <BreadcrumbItem>Laptops</BreadcrumbItem>
  </ol>
</Breadcrumb>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Breadcrumbs;