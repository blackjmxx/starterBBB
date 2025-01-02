import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Contained buttons
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:shadow-inner",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 active:shadow-inner",
        success: "bg-success text-success-foreground shadow-sm hover:bg-success/90 active:shadow-inner",
        warning: "bg-warning text-warning-foreground shadow-sm hover:bg-warning/90 active:shadow-inner",
        error: "bg-error text-error-foreground shadow-sm hover:bg-error/90 active:shadow-inner",
        info: "bg-info text-info-foreground shadow-sm hover:bg-info/90 active:shadow-inner",

        // Outlined buttons
        outline: "border-2 bg-transparent hover:bg-accent/10 active:bg-accent/20",
        "outline-primary": "border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
        "outline-secondary": "border-2 border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20",
        "outline-success": "border-2 border-success text-success hover:bg-success/10 active:bg-success/20",
        "outline-warning": "border-2 border-warning text-warning hover:bg-warning/10 active:bg-warning/20",
        "outline-error": "border-2 border-error text-error hover:bg-error/10 active:bg-error/20",
        "outline-info": "border-2 border-info text-info hover:bg-info/10 active:bg-info/20",

        // Text buttons
        text: "bg-transparent hover:bg-accent/10 active:bg-accent/20",
        "text-primary": "text-primary hover:bg-primary/10 active:bg-primary/20",
        "text-secondary": "text-secondary hover:bg-secondary/10 active:bg-secondary/20",
        "text-success": "text-success hover:bg-success/10 active:bg-success/20",
        "text-warning": "text-warning hover:bg-warning/10 active:bg-warning/20",
        "text-error": "text-error hover:bg-error/10 active:bg-error/20",
        "text-info": "text-info hover:bg-info/10 active:bg-info/20",

        // Soft buttons
        soft: "bg-accent/20 hover:bg-accent/30 active:bg-accent/40",
        "soft-primary": "bg-primary/20 text-primary hover:bg-primary/30 active:bg-primary/40",
        "soft-secondary": "bg-secondary/20 text-secondary hover:bg-secondary/30 active:bg-secondary/40",
        "soft-success": "bg-success/20 text-success hover:bg-success/30 active:bg-success/40",
        "soft-warning": "bg-warning/20 text-warning hover:bg-warning/30 active:bg-warning/40",
        "soft-error": "bg-error/20 text-error hover:bg-error/30 active:bg-error/40",
        "soft-info": "bg-info/20 text-info hover:bg-info/30 active:bg-info/40",

        // Link buttons
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4",
        lg: "h-10 px-6",
        xl: "h-12 px-8 text-lg",
        "icon-xs": "h-7 w-7",
        "icon-sm": "h-8 w-8",
        "icon-md": "h-9 w-9",
        "icon-lg": "h-10 w-10",
        "icon-xl": "h-12 w-12",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      elevation: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      elevation: "none"
    },
  }
);