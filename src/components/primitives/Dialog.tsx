import { useState } from 'react';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Dialog } from '@/components/ui/Dialog';

const DialogDemo = () => {
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
              className="px-4 py-2 bg-white dark:bg-gray-700 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-sm font-medium  text-gray-500"
            >
              Open {variant.type} dialog
            </button>
          ))}
        </div>
      </div>

      {/* Dialogs */}
      {variants.map((variant) => (
        <Dialog
          key={variant.type}
          type={variant.type}
          open={openDialog === variant.type}
          onClose={() => setOpenDialog(null)}
          variant={variant}
        />
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

export default DialogDemo;