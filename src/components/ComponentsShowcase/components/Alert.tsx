import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

const Alert = () => {
  const variants = [
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Success',
      message: 'Your changes have been successfully saved.',
      color: 'green'
    },
    {
      type: 'info',
      icon: Info,
      title: 'Information',
      message: 'A new software update is available.',
      color: 'blue'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Warning',
      message: 'Your subscription will expire soon.',
      color: 'yellow'
    },
    {
      type: 'error',
      icon: AlertCircle,
      title: 'Error',
      message: 'There was a problem processing your request.',
      color: 'red'
    }
  ];

  const styles = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-200',
      icon: 'text-green-500 dark:text-green-400'
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      icon: 'text-blue-500 dark:text-blue-400'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: 'text-yellow-500 dark:text-yellow-400'
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-200',
      icon: 'text-red-500 dark:text-red-400'
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4">
        {variants.map((variant) => {
          const style = styles[variant.type as keyof typeof styles];
          
          return (
            <div
              key={variant.type}
              className={`flex items-start p-4 rounded-lg border ${style.bg} ${style.border}`}
            >
              <variant.icon className={`h-5 w-5 ${style.icon} mt-0.5`} />
              <div className="ml-3 flex-1">
                <h3 className={`text-sm font-medium ${style.text}`}>
                  {variant.title}
                </h3>
                <div className={`mt-1 text-sm ${style.text}`}>
                  {variant.message}
                </div>
              </div>
              <button
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex ${style.text} hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<Alert
  type="success"
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