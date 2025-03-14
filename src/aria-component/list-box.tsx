import React from "react";
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps,
  ListBoxItemProps,
} from "react-aria-components";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";

/**
 * Props pour le composant ListBox
 */
export interface ListBoxProps<T>
  extends Omit<RACListBoxProps<T>, "layout" | "orientation"> {}

/**
 * Liste de sélection accessible
 *
 * @example
 * <ListBox selectionMode="single" onSelectionChange={setSelected}>
 *   <ListBoxItem>Option 1</ListBoxItem>
 *   <ListBoxItem>Option 2</ListBoxItem>
 *   <ListBoxItem>Option 3</ListBoxItem>
 * </ListBox>
 */
export function ListBox<T extends object>(props: ListBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Fix not auto scroll to selected item
  React.useEffect(() => {
    if (ref.current) {
      const selectedItem = ref.current.querySelector("[aria-selected=true]");
      if (selectedItem) {
        const timer = setTimeout(() => {
          selectedItem.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }, 50);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <RACListBox
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(props.className, ["outline-none"])}
    />
  );
}

/**
 * Élément individuel dans une liste de sélection
 *
 * @example
 * <ListBoxItem>Option 1</ListBoxItem>
 */
export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        "group relative flex outline-0",
        "disabled:opacity-50",
        focusVisibleOutline,
      ])}
    />
  );
}
