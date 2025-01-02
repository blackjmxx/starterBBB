export const alertStyles = {
  standard: 'bg-background',
  filled: 'text-white',
  outlined: 'border-2 bg-background'
} as const;

export const alertVariants = [
  {
    variant: 'info' as const,
    title: 'Info',
    description: 'This is an info alert — check it out!',
    className: {
      standard: 'border-info/50 text-info [&>svg]:text-info',
      filled: 'bg-info',
      outlined: 'border-info text-info [&>svg]:text-info'
    }
  },
  {
    variant: 'success' as const,
    title: 'Success',
    description: 'This is a success alert — check it out!',
    className: {
      standard: 'border-success/50 text-success [&>svg]:text-success',
      filled: 'bg-success',
      outlined: 'border-success text-success [&>svg]:text-success'
    }
  },
  {
    variant: 'warning' as const,
    title: 'Warning',
    description: 'This is a warning alert — check it out!',
    className: {
      standard: 'border-warning/50 text-warning [&>svg]:text-warning',
      filled: 'bg-warning',
      outlined: 'border-warning text-warning [&>svg]:text-warning'
    }
  },
  {
    variant: 'error' as const,
    title: 'Error',
    description: 'This is an error alert — check it out!',
    className: {
      standard: 'border-error/50 text-error [&>svg]:text-error',
      filled: 'bg-error',
      outlined: 'border-error text-error [&>svg]:text-error'
    }
  }
] as const;