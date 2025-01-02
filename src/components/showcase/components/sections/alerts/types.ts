export type AlertStyle = 'standard' | 'filled' | 'outlined';
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertData {
  variant: AlertVariant;
  title: string;
  description: string;
}

export interface AlertStyleProps {
  style: AlertStyle;
  variant: AlertVariant;
}