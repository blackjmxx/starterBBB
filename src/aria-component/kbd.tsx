import { Keyboard as RACKeyboard } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Props pour le composant Kbd
 */
export type KeyboardProps = Omit<
  React.JSX.IntrinsicElements["div"],
  "children"
> & {
  /** Texte représentant une touche du clavier */
  children: string;
};

/**
 * Composant pour afficher une touche de clavier
 *
 * @example
 * <Kbd>Ctrl</Kbd>
 * <Kbd>⌘</Kbd>
 */
export function Kbd({ className, children, ...props }: KeyboardProps) {
  return (
    <RACKeyboard
      {...props}
      data-ui="kbd"
      className={twMerge(
        "font-sans text-base/6 tracking-widest text-muted/75 sm:text-sm/6",
        className
      )}
    >
      {children}
    </RACKeyboard>
  );
}
