import { twMerge } from "tailwind-merge";
import { TextProps } from "react-aria-components";
import { Text } from "./text";
import { Heading, HeadingProps } from "./heading";

/**
 * Conteneur principal pour afficher un état vide ou une page sans contenu
 *
 * @example
 * <EmptyState>
 *   <EmptyStateIcon><SearchIcon /></EmptyStateIcon>
 *   <EmptyStateHeading>Aucun résultat</EmptyStateHeading>
 *   <EmptyStateDescription>Aucun élément ne correspond à votre recherche.</EmptyStateDescription>
 *   <EmptyStateActions>
 *     <Button>Réinitialiser</Button>
 *   </EmptyStateActions>
 * </EmptyState>
 */
export function EmptyState({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex h-full w-full flex-col items-center justify-center gap-1 p-4 text-center @container",
        className
      )}
    />
  );
}

/**
 * Conteneur pour l'icône de l'état vide
 */
export function EmptyStateIcon({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "mb-2 flex max-w-32 items-center justify-center @md:max-w-40",
        "[&>svg:not([class*=text-])]:text-muted [&>svg]:h-auto [&>svg]:min-w-12 [&>svg]:max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Titre principal de l'état vide
 */
export function EmptyStateHeading({
  className,
  level = 2,
  ...props
}: HeadingProps) {
  return (
    <Heading
      {...props}
      level={level}
      className={twMerge("text-balance", className)}
    />
  );
}

/**
 * Description textuelle de l'état vide
 */
export function EmptyStateDescription({ className, ...props }: TextProps) {
  return (
    <Text
      {...props}
      className={twMerge("max-w-prose text-balance", className)}
    />
  );
}

/**
 * Conteneur pour les actions disponibles dans l'état vide
 */
export function EmptyStateActions({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "mt-3 flex flex-col items-center justify-center gap-4 p-2",
        className
      )}
    />
  );
}
