import { AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import type { AlertData } from './types';

export const alertsData: AlertData[] = [
  {
    variant: 'info',
    title: 'New update available',
    description: 'A new software update is available for installation'
  },
  {
    variant: 'success',
    title: 'Order completed',
    description: 'Your order has been confirmed'
  },
  {
    variant: 'warning',
    title: 'Storage almost full',
    description: 'Please free up some space'
  },
  {
    variant: 'error',
    title: 'Connection lost',
    description: 'Please check your internet connection'
  }
];

export const getAlertIcon = (variant: AlertData['variant']) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle
  };
  return icons[variant];
};