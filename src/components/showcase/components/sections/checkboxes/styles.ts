export const variants = {
  default: '',
  primary: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
  secondary: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
  success: 'data-[state=checked]:bg-success data-[state=checked]:border-success',
  warning: 'data-[state=checked]:bg-warning data-[state=checked]:border-warning',
  error: 'data-[state=checked]:bg-error data-[state=checked]:border-error',
  info: 'data-[state=checked]:bg-info data-[state=checked]:border-info'
} as const;