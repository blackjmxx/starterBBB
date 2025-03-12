import { twMerge } from "tailwind-merge";

/**
 * Props pour la variante point
 */
type DotVariantProps = {
  /** Type de badge (point) */
  variant: "dot";
};

/**
 * Props pour la variante numérique
 */
type NumericVariantProps = {
  /** Type de badge (numérique) */
  variant: "numeric";
  /** Valeur numérique à afficher */
  value: number;
  /** Si true, le badge sera affiché en ligne plutôt qu'en position absolue */
  inline?: boolean;
};

/**
 * Props pour le composant NotificationBadge
 */
export type NotificationBadgeProps = (DotVariantProps | NumericVariantProps) &
  React.JSX.IntrinsicElements["span"];

/**
 * Badge de notification pour indiquer des alertes ou des compteurs
 *
 * @example
 * <div className="relative">
 *   <Button>Messages</Button>
 *   <NotificationBadge variant="dot" aria-label="Nouvelles notifications" />
 * </div>
 *
 * @example
 * <div className="relative">
 *   <Button>Messages</Button>
 *   <NotificationBadge variant="numeric" value={5} aria-label="5 nouveaux messages" />
 * </div>
 */
export function NotificationBadge({
  className,
  "aria-label": ariaLabel,
  ...props
}: NotificationBadgeProps) {
  if (props.variant === "dot") {
    return (
      <>
        <span
          aria-hidden
          className={twMerge(
            "absolute right-1 top-1 flex size-2 rounded-full bg-red-600",
            className
          )}
          {...props}
        />
        {ariaLabel && (
          <span role="status" className="sr-only">
            {ariaLabel}
          </span>
        )}
      </>
    );
  }

  const { value, variant, inline, ...rest } = props;

  return (
    <>
      <span
        aria-hidden
        className={twMerge([
          inline ? "" : "absolute -right-1 -top-1.5",
          " flex h-4  items-center justify-center rounded-full bg-red-600 text-[0.65rem] text-white",
          props.value > 0 ? (props.value > 9 ? "w-5" : "w-4") : "hidden",
          className,
        ])}
        {...rest}
      >
        {Math.min(props.value, 9)}
        {props.value > 9 ? <span className="pb-0.5">+</span> : null}
      </span>

      {ariaLabel && (
        <span role="status" className="sr-only">
          {ariaLabel}
        </span>
      )}
    </>
  );
}
