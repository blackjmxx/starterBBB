// https://www.jacobparis.com/content/react-as-child
import React from "react";

import { twMerge } from "tailwind-merge";

/**
 * Props pour les composants qui supportent la fonctionnalité asChild
 */
export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

/**
 * Composant utilitaire qui permet de transférer les props à son enfant
 * Utile pour créer des composants qui peuvent être rendus avec différents éléments HTML
 *
 * @example
 * <Slot className="text-red-500">
 *   <button>Ce bouton héritera de la classe text-red-500</button>
 * </Slot>
 */
export function Slot({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
}) {
  if ("asChild" in props) {
    delete props.asChild;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: twMerge(props.className, children.props.className),
    });
  }
  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }
  return null;
}
