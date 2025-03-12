import {
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs,
  BreadcrumbProps as RACBreadcrumbProps,
  BreadcrumbsProps as RACBreadcrumbsProps,
  LinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Link } from "./link";
import { composeTailwindRenderProps } from "./utils";
import { ChevronRightIcon } from "./icons";

/**
 * Container component for a series of breadcrumbs
 */
export function Breadcrumbs<T extends object>({
  className,
  ...props
}: RACBreadcrumbsProps<T>) {
  return (
    <RACBreadcrumbs {...props} className={twMerge("flex gap-1", className)} />
  );
}

/**
 * Props for the Breadcrumb component
 */
type BreadcrumbProps = RACBreadcrumbProps & LinkProps;

/**
 * Individual breadcrumb item with optional link functionality
 *
 * @example
 * <Breadcrumbs>
 *   <Breadcrumb href="/home">Home</Breadcrumb>
 *   <Breadcrumb href="/products">Products</Breadcrumb>
 *   <Breadcrumb>Current Page</Breadcrumb>
 * </Breadcrumbs>
 */
export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <RACBreadcrumb
      {...props}
      className={composeTailwindRenderProps(
        className as RACBreadcrumbProps["className"],
        "flex items-center gap-1"
      )}
    >
      <Link
        {...props}
        className="underline underline-offset-2 disabled:opacity-100 [&:not(:hover)]:decoration-muted"
      />
      {props.href && (
        <ChevronRightIcon className="size-4 text-muted" strokeWidth={1.5} />
      )}
    </RACBreadcrumb>
  );
}
