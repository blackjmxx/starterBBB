import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

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

  const renderItems = (items: any[], type: string) => {
    if (type === 'collapsed' && items.length > 4) {
      const start = items.slice(0, 2);
      const end = items.slice(-2);
      
      return (
        <>
          {start.map((item, i) => (
            <React.Fragment key={i}>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {item}
              </a>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </React.Fragment>
          ))}
          <span className="text-gray-400">...</span>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {end.map((item, i) => (
            <React.Fragment key={i}>
              {i === end.length - 1 ? (
                <span className="text-gray-900 font-medium dark:text-white">{item}</span>
              ) : (
                <>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    {item}
                  </a>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </>
              )}
            </React.Fragment>
          ))}
        </>
      );
    }

    return items.map((item, i) => (
      <React.Fragment key={i}>
        {i === items.length - 1 ? (
          <span className="text-gray-900 font-medium dark:text-white">
            {typeof item === 'string' ? item : item.label}
          </span>
        ) : (
          <>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                  {item.label}
                </>
              )}
            </a>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="space-y-8">
      {variants.map((variant) => (
        <div key={variant.type} className="space-y-4">
          <h3 className="text-lg font-medium dark:text-white capitalize">
            {variant.type.split('-').join(' ')} Breadcrumbs
          </h3>
          <nav className="flex items-center space-x-2 text-sm">
            {renderItems(variant.items, variant.type)}
          </nav>
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
/>

// Collapsed Breadcrumbs
<Breadcrumbs
  items={['Home', 'Products', 'Electronics', 'Laptops']}
  maxItems={3}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Breadcrumbs;