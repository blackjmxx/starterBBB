import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  Button,
  GridListItemProps,
  GridListProps,
} from "react-aria-components";
import { Checkbox } from "./checkbox";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";

/**
 * Liste en grille avec support pour la sélection et le glisser-déposer
 *
 * @example
 * <GridList selectionMode="multiple">
 *   <GridListItem>Élément 1</GridListItem>
 *   <GridListItem>Élément 2</GridListItem>
 *   <GridListItem>Élément 3</GridListItem>
 * </GridList>
 */
export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "relative overflow-auto rounded-md border p-1"
      )}
    >
      {children}
    </AriaGridList>
  );
}

/**
 * Élément individuel dans une liste en grille
 *
 * @example
 * <GridListItem>Contenu de l'élément</GridListItem>
 */
export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;

  return (
    <AriaGridListItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        "relative -mb-px flex cursor-default select-none gap-3 rounded-md px-2 py-1.5 text-sm outline-none",
        "hover:bg-zinc100 dark:hover:bg-zinc-700",
        "[&:not(:last-child)]:mb-0.5",
        "selected:z-20",
        "disabled:opacity-50",
        focusVisibleOutline,
        "focus-visible:-outline-offset-2",
      ])}
    >
      {(renderProps) => {
        return (
          <div className="flex items-center gap-3 w-full">
            {renderProps.allowsDragging && <Button slot="drag">≡</Button>}
            {renderProps.selectionMode === "multiple" &&
              renderProps.selectionBehavior === "toggle" && (
                <Checkbox slot="selection" />
              )}
            {typeof children === "function" ? children(renderProps) : children}
          </div>
        );
      }}
    </AriaGridListItem>
  );
}
