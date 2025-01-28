import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyProps = ComponentProps<"h1" | "h2" | "h3" | "p">;

export function H1({ className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight text-foreground dark:text-white lg:text-5xl",
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight text-foreground dark:text-white",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground dark:text-white",
        className
      )}
      {...props}
    />
  );
}

export function Paragraph({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-base leading-7 text-muted-foreground dark:text-white/80",
        className
      )}
      {...props}
    />
  );
} 