import React, { useEffect, useRef } from "react";
import {
  ListBoxItemProps,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps,
} from "react-aria-components";
import { Label } from "./field";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";
import { twMerge } from "tailwind-merge";

/**
 * Props pour le composant List
 */
export interface ListProps<T>
  extends Omit<RACListBoxProps<T>, "layout" | "orientation"> {
  /** Label pour la liste */
  label?: string;
  /** Classe CSS pour le conteneur principal */
  containerClassName?: string;
}

/**
 * Props pour le composant ListItem
 */
export interface ListItemProps extends ListBoxItemProps {
  /** Contenu supplémentaire à afficher à droite de l'élément */
  endContent?: React.ReactNode;
  /** Contenu supplémentaire à afficher à gauche de l'élément */
  startContent?: React.ReactNode;
  /** Classes CSS pour le contenu principal ou fonction pour générer les classes */
  contentClassName?: string | ((baseClass: string) => string);
}

/**
 * Liste stylisée avec support pour la sélection
 *
 * @example
 * <List label="Mes options">
 *   <ListItem>Option 1</ListItem>
 *   <ListItem startContent={<Icon />}>Option 2</ListItem>
 *   <ListItem endContent={<Badge>Nouveau</Badge>}>Option 3</ListItem>
 * </List>
 */
export function List<T extends object>({
  label,
  containerClassName,
  className,
  children,
  ...props
}: ListProps<T>) {
  const ref = useRef<HTMLDivElement>(null);

  // Défilement automatique vers l'élément sélectionné
  useEffect(() => {
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
    <div className={containerClassName}>
      {label && <Label>{label}</Label>}
      <RACListBox
        {...props}
        ref={ref}
        className={composeTailwindRenderProps(className, [
          "outline-none rounded-md",
          "border border-input bg-background",
          "p-1 gap-1",
          "overflow-auto",
        ])}
      >
        {children}
      </RACListBox>
    </div>
  );
}

/**
 * Élément individuel dans une liste
 *
 * @example
 * <ListItem>Contenu simple</ListItem>
 *
 * @example
 * <ListItem
 *   startContent={<Avatar />}
 *   endContent={<ChevronRightIcon />}
 * >
 *   Élément avec contenu supplémentaire
 * </ListItem>
 */
export function ListItem({
  children,
  className,
  startContent,
  endContent,
  contentClassName,
  ...props
}: ListItemProps) {
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(className, [
        "group relative flex items-center gap-2 outline-0 rounded-sm px-2 py-1.5",
        "text-sm cursor-default",
        "disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        "selected:bg-accent selected:text-accent-foreground",
        focusVisibleOutline,
      ])}
    >
      {(renderProps) => (
        <div className="flex items-center gap-2 w-full">
          {startContent}
          <span
            className={
              typeof contentClassName === "function"
                ? contentClassName("flex-1 truncate")
                : twMerge("flex-1 truncate", contentClassName)
            }
          >
            {typeof children === "function" ? children(renderProps) : children}
          </span>
          {endContent}
        </div>
      )}
    </RACListBoxItem>
  );
}
