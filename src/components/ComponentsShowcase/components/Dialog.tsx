import React, { useState } from 'react';
import { X, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const Dialog = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const variants = [
    {
      type: 'basic',
      title: 'Basic Dialog',
      description: 'A simple dialog with basic content.'
    },
    {
      type: 'confirmation',
      title: 'Delete Account',
      description: 'Are you sure you want to delete your account? This action cannot be undone.',
      icon: AlertTriangle,
      iconColor: 'text-red-500'
    },
    {
      type: 'form',
      title: 'Edit Profile',
      description: 'Update your profile information.'
    },
    {
      type: 'success',
      title: 'Payment Successful',
      description: 'Your payment has been processed successfully.',
      icon: CheckCircle,
      iconColor: 'text-green-500'
    },
    {
      type: 'info',
      title: 'New Features',
      description: 'Check out our latest features and improvements.',
      icon: Info,
      iconColor: 'text-blue-500'
    }
  ];

  const renderDialogContent = (variant: any) => {
    switch (variant.type) {
      case 'form':
        return (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Bio
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
                placeholder="Tell us about yourself"
              />
            </div>
          </form>
        );
      default:
        return (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {variant.description}
          </p>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Dialog Triggers */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <button
              key={variant.type}
              onClick={() => setOpenDialog(variant.type)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-sm font-medium"
            >
              Open {variant.type} dialog
            </button>
          ))}
        </div>
      </div>

      {/* Dialogs */}
      {variants.map((variant) => (
        <div
          key={variant.type}
          className={`fixed inset-0 z-50 overflow-y-auto ${
            openDialog === variant.type ? 'block' : 'hidden'
          }`}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />

          {/* Dialog */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              {/* Close button */}
              <button
                onClick={() => setOpenDialog(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="sm:flex sm:items-start">
                {variant.icon && (
                  <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-${variant.iconColor.split('-')[1]}-100 dark:bg-${variant.iconColor.split('-')[1]}-900/20 sm:mx-0 sm:h-10 sm:w-10`}>
                    <variant.icon className={`h-6 w-6 ${variant.iconColor}`} />
                  </div>
                )}
                <div className={`mt-3 text-center ${variant.icon ? 'sm:ml-4 sm:mt-0 sm:text-left' : ''}`}>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    {variant.title}
                  </h3>
                  <div className="mt-2">
                    {renderDialogContent(variant)}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={() => setOpenDialog(null)}
                  className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto ${
                    variant.type === 'confirmation'
                      ? 'bg-red-600 hover:bg-red-500'
                      : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  {variant.type === 'confirmation' ? 'Delete' : 'Confirm'}
                </button>
                <button
                  type="button"
                  onClick={() => setOpenDialog(null)}
                  className="mt-3 inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Dialog
<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Dialog Title"
>
  Dialog content goes here
</Dialog>

// Confirmation Dialog
<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  type="confirmation"
  onConfirm={handleConfirm}
>
  Are you sure you want to proceed?
</Dialog>

// Form Dialog
<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  type="form"
  onSubmit={handleSubmit}
>
  <form>
    {/* Form fields */}
  </form>
</Dialog>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Dialog;