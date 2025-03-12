import React from "react";

/**
 * Props pour le composant Icon
 * @interface IconProps
 * @extends {Omit<React.JSX.IntrinsicElements["svg"], "ara-hidden">}
 */
interface IconProps
  extends Omit<React.JSX.IntrinsicElements["svg"], "ara-hidden"> {
  /**
   * L'élément SVG à rendre comme icône
   */
  children: React.ReactNode;
}

/**
 * Composant Icon qui rend une icône accessible
 *
 * Ce composant enveloppe une icône SVG et la rend accessible en:
 * - Masquant l'icône aux lecteurs d'écran (aria-hidden="true")
 * - Fournissant un texte alternatif via aria-label
 * - Empêchant l'icône de recevoir le focus
 *
 * @example
 * ```tsx
 * <Icon aria-label="Fermer">
 *   <svg>...</svg>
 * </Icon>
 * ```
 *
 * @see https://www.radix-ui.com/themes/docs/components/accessible-icon
 */
export function Icon({
  children,
  "aria-label": ariaLabel,
  ...props
}: IconProps) {
  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        ...props,
        "aria-hidden": "true",
        "aria-label": undefined,
        "data-ui": "icon",
        focusable: "false",
      })}
      {ariaLabel ? <span className="sr-only">{ariaLabel}</span> : null}
    </>
  );
}
