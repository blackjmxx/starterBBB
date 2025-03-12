import React from "react";
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList as RACTagList,
  TagListProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";
import { XIcon } from "./icons";

/**
 * Couleurs disponibles pour les tags
 */
const colors = {
  default: [
    "bg-zinc-100",
    "text-zinc-700",
    "dark:bg-white/10",
    "dark:text-zinc-400",
    "selected:bg-zinc-700",
    "selected:text-white",
    "dark:selected:bg-white/20",
  ],
  success: [
    "bg-success/15",
    "text-success",
    "dark:bg-success/20",
    "selected:bg-success",
    "selected:dark:bg-success",
    "selected:text-white",
  ],
  warning: [
    "bg-warning/15",
    "text-warning",
    "dark:bg-warning/20",
    "selected:bg-warning",
    "selected:dark:bg-warning",
    "selected:text-white",
  ],
  destructive: [
    "bg-destructive/15",
    "text-destructive",
    "dark:bg-destructive/20",
    "selected:bg-destructive",
    "selected:dark:bg-destructive",
    "selected:text-white",
  ],
};

/**
 * Type pour les couleurs de tag
 */
type Color = keyof typeof colors;

/**
 * Contexte pour partager la couleur entre TagGroup et Tag
 */
const ColorContext = React.createContext<Color>("default");

/**
 * Props pour le composant TagGroup
 */
export interface TagGroupProps extends AriaTagGroupProps {
  /** Couleur des tags dans le groupe */
  color?: Color;
}

/**
 * Props pour le composant Tag
 */
export interface TagProps extends AriaTagProps {
  /** Couleur du tag (remplace la couleur du groupe) */
  color?: Color;
}

/**
 * Groupe de tags avec support pour la sélection et la suppression
 *
 * @example
 * <TagGroup>
 *   <TagList>
 *     <Tag>JavaScript</Tag>
 *     <Tag>TypeScript</Tag>
 *     <Tag>React</Tag>
 *   </TagList>
 * </TagGroup>
 *
 * @example
 * <TagGroup color="success" selectionMode="multiple">
 *   <TagList>
 *     <Tag>Débutant</Tag>
 *     <Tag>Intermédiaire</Tag>
 *     <Tag>Avancé</Tag>
 *   </TagList>
 * </TagGroup>
 */
export function TagGroup({ children, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge("flex flex-col gap-1", props.className)}
    >
      <ColorContext.Provider value={props.color || "default"}>
        {children}
      </ColorContext.Provider>
    </AriaTagGroup>
  );
}

/**
 * Liste de tags
 */
export function TagList<T extends object>(props: TagListProps<T>) {
  return (
    <RACTagList
      {...props}
      className={(renderProps) => {
        return typeof props.className === "function"
          ? twMerge("flex flex-wrap gap-1", props.className(renderProps))
          : twMerge("flex flex-wrap gap-1", props.className);
      }}
    />
  );
}

/**
 * Tag individuel
 *
 * @example
 * <Tag>JavaScript</Tag>
 *
 * @example
 * <Tag color="warning">Déprécié</Tag>
 *
 * @example
 * <Tag removable>Supprimable</Tag>
 */
export function Tag({ children, color, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;
  const groupColor = React.useContext(ColorContext);

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "flex max-w-fit cursor-default items-center gap-x-1 rounded px-2 py-0.5 text-xs/5 font-semibold outline-0 transition",
        "[&[data-selection-mode]]:cursor-pointer",
        colors[color || groupColor],
        focusVisibleOutline,
        "focus-visible:outline-offset-1",
        "disabled:opacity-50",
      ])}
    >
      {(renderProps) => {
        return (
          <>
            {typeof children === "function" ? children(renderProps) : children}
            {renderProps.allowsRemoving && (
              <Button
                slot="remove"
                className={composeTailwindRenderProps("", [
                  "flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20",
                  focusVisibleOutline,
                ])}
              >
                <XIcon className="size-3"></XIcon>
              </Button>
            )}
          </>
        );
      }}
    </AriaTag>
  );
}
