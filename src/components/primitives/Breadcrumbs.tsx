import { Home } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

const BreadcrumbsDemo = () => {
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

  return (
    <div className="space-y-8">
      {variants.map((variant) => (
        <div key={variant.type} className="space-y-4">
          <h3 className="text-lg font-medium dark:text-white capitalize">
            {variant.type.split('-').join(' ')} Breadcrumbs
          </h3>
          <Breadcrumbs 
            type={variant.type} 
            items={variant.items} 
          />
        </div>
      ))}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Breadcrumbs
<Breadcrumbs items={['Home', 'Products', 'Electronics']} />

// With Icons
<Breadcrumbs
  items={[
    { icon: HomeIcon, label: 'Home' },
    { label: 'Products' },
    { label: 'Electronics' }
  ]}
  type="with-icons"
/>

// Collapsed Breadcrumbs
<Breadcrumbs
  items={['Home', 'Products', 'Electronics', 'Laptops']}
  type="collapsed"
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default BreadcrumbsDemo;