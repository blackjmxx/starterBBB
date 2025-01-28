'use client';

import * as React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const Form = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(({ ...props }, ref) => (
  <form ref={ref} {...props} />
));
Form.displayName = 'Form';

const FormField = ({
  name,
  control,
  render,
}: {
  name: string;
  control: any;
  render: ({ field }: { field: any }) => React.ReactNode;
}) => {
  return <Controller name={name} control={control} render={render} />;
};

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} {...props} />
));
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ ...props }, ref) => (
  <label className="dark:text-gray-200" ref={ref} {...props} />
));
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} {...props} />
));
FormControl.displayName = 'FormControl';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p ref={ref} {...props}>
      {children}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
};