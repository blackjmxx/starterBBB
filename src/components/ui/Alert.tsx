'use client';

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

const alertVariants = cva(
  "flex items-start p-4 rounded-lg border",
  {
    variants: {
      variant: {
        success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
        info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
        warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
        error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconVariants = cva(
  "h-5 w-5 mt-0.5",
  {
    variants: {
      variant: {
        success: "text-green-500 dark:text-green-400",
        info: "text-blue-500 dark:text-blue-400",
        warning: "text-yellow-500 dark:text-yellow-400",
        error: "text-red-500 dark:text-red-400",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const textVariants = cva(
  "text-sm",
  {
    variants: {
      variant: {
        success: "text-green-800 dark:text-green-200",
        info: "text-blue-800 dark:text-blue-200",
        warning: "text-yellow-800 dark:text-yellow-200",
        error: "text-red-800 dark:text-red-200",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const IconMap = {
  success: CheckCircle,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
} as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  message?: string;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, message, onDismiss, ...props }, ref) => {
    const Icon = IconMap[variant || 'info'];

    return (
      <div
        className={cn(alertVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <Icon className={cn(iconVariants({ variant }))} />
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={cn(textVariants({ variant }), "font-medium")}>
              {title}
            </h3>
          )}
          {message && (
            <div className={cn(textVariants({ variant }), "mt-1")}>
              {message}
            </div>
          )}
        </div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className={cn(
              textVariants({ variant }),
              "ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2"
            )}
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants, iconVariants, textVariants };