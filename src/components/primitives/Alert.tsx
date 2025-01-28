'use client';

import { Alert as AlertUI } from '@/components/ui/alert';

const Alert = () => {
  const variants = [
    {
      variant: 'success' as const,
      title: 'Success',
      message: 'Your changes have been successfully saved.',
    },
    {
      variant: 'info' as const,
      title: 'Information',
      message: 'A new software update is available.',
    },
    {
      variant: 'warning' as const,
      title: 'Warning',
      message: 'Your subscription will expire soon.',
    },
    {
      variant: 'error' as const,
      title: 'Error',
      message: 'There was a problem processing your request.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4">
        {variants.map((variant) => (
          <AlertUI
            key={variant.variant}
            variant={variant.variant}
            title={variant.title}
            message={variant.message}
            onDismiss={() => console.log(`Dismissed ${variant.variant} alert`)}
          />
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<Alert
  variant="success"
  title="Success"
  message="Your changes have been successfully saved."
  onDismiss={() => {}}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Alert;