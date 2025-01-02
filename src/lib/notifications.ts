import { toast } from 'sonner';

interface NotificationOptions {
  message: string;
  description?: string;
}

export const notify = {
  success: ({ message, description }: NotificationOptions) => {
    toast.success(message, {
      description,
      duration: 5000,
      style: { backgroundColor: 'var(--success-color)', color: 'white' },
    });
  },
  
  error: ({ message, description }: NotificationOptions) => {
    toast.error(message, {
      description,
      duration: 8000,
      style: { backgroundColor: 'var(--error-color)', color: 'white' },
    });
  },
  
  warning: ({ message, description }: NotificationOptions) => {
    toast.warning(message, {
      description,
      duration: 6000,
      style: { backgroundColor: 'var(--warning-color)', color: 'white' },
    });
  },
  
  info: ({ message, description }: NotificationOptions) => {
    toast.info(message, {
      description,
      duration: 5000,
      style: { backgroundColor: 'var(--info-color)', color: 'white' },
    });
  },
};