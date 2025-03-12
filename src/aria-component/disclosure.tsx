import { Button, ButtonProps } from "react-aria-components";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";

export {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";

/**
 * Bouton de contrôle pour ouvrir/fermer un panneau de divulgation
 *
 * @example
 * <Disclosure>
 *   <DisclosureControl>Afficher plus</DisclosureControl>
 *   <DisclosurePanel>Contenu supplémentaire</DisclosurePanel>
 * </Disclosure>
 */
export function DisclosureControl(props: ButtonProps) {
  return (
    <Button
      {...props}
      slot="trigger"
      className={composeTailwindRenderProps(props.className, [
        "group flex items-center gap-x-1 rounded outline-none",
        focusVisibleOutline,
      ])}
    />
  );
}
