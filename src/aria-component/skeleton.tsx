import { twMerge } from "tailwind-merge";

/**
 * Composant de chargement qui affiche un placeholder animé
 *
 * @example
 * <Skeleton className="h-12 w-full" />
 *
 * @example
 * <div className="space-y-2">
 *   <Skeleton className="h-6 w-3/4" />
 *   <Skeleton className="h-4 w-1/2" />
 *   <Skeleton className="h-4 w-5/6" />
 * </div>
 */
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700",
        className
      )}
      {...props}
    />
  );
}
