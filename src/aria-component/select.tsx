import {
  Select as RACSelect,
  SelectProps as RACSelectProps,
  Header,
  Button,
  ListBoxItemProps,
  SelectValue,
  composeRenderProps,
  Collection,
  ListBoxSectionProps as RACListBoxSectionProps,
  ListBoxSection as RACListBoxSection,
  ListBoxItem as RACListBoxItem,
} from "react-aria-components";
import { ListBoxProps, ListBox } from "./list-box";
import { Popover, PopoverProps } from "./popover";
import {
  selectBoxIndicator,
  composeTailwindRenderProps,
  inputField,
  focusVisibleRing,
} from "./utils";
import { twMerge } from "tailwind-merge";
import { Small } from "./text";
import { CheckIcon } from "./icons";

/**
 * Composant de sélection (dropdown)
 *
 * @example
 * <Select>
 *   <Label>Choisissez une option</Label>
 *   <SelectButton />
 *   <SelectPopover>
 *     <SelectList>
 *       <SelectListItem id="option1">Option 1</SelectListItem>
 *       <SelectListItem id="option2">Option 2</SelectListItem>
 *       <SelectListItem id="option3">Option 3</SelectListItem>
 *     </SelectList>
 *   </SelectPopover>
 * </Select>
 */
export function Select<T extends object>(props: RACSelectProps<T>) {
  return (
    <RACSelect
      {...props}
      data-ui="select"
      className={composeTailwindRenderProps(props.className, [
        "w-full min-w-56",
        inputField,
      ])}
    />
  );
}

/**
 * Bouton déclencheur pour le composant Select
 *
 * @example
 * <SelectButton>Sélectionner une option</SelectButton>
 */
export function SelectButton(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      data-ui="control"
      className={composeTailwindRenderProps(props.className, [
        "relative flex w-full cursor-default items-center gap-x-1 rounded-md border text-start outline-none transition",
        "pe-8 ps-3",
        "py-[calc(theme(spacing[2.5])-1px)]",
        "sm:py-[calc(theme(spacing[1.5])-1px)]",
        "group-invalid:border-destructive",
        "group:disabled:cursor-not-allowed group-disabled:opacity-50",
        "text-base/6 sm:text-sm/6",
        focusVisibleRing,
        "hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:hover:pressed:bg-zinc-800",
        "pressed:bg-zinc-50 dark:pressed:bg-zinc-800",
        selectBoxIndicator,
      ])}
    >
      {!!props.children && (
        <span className="flex items-center gap-x-2">{props.children}</span>
      )}
      <SelectValue
        data-ui="select-value"
        className={twMerge([
          "flex-1 truncate  data-[placeholder]:text-muted dark:data-[placeholder]:text-white",
          // Selected Item style
          "[&>[data-ui=content]]:flex",
          "[&>[data-ui=content]]:items-center",
          "[&>[data-ui=content]]:gap-x-2",
          "[&>[data-ui=content]_[data-ui=description]]:sr-only",
          "[&>[data-ui=content]:not(:hover)_[data-ui=icon]:not([class*=text-])]:text-muted",
          "[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-5",
          "[&>[data-ui=content]_[role=img]]:size-6",
          "sm:[&>[data-ui=content]_[data-ui=icon]:not([class*=size-])]:size-4",
          "sm:[&>[data-ui=content]_[role=img]]:size-5",
        ])}
      />
    </Button>
  );
}

/**
 * Popover pour afficher la liste des options du Select
 */
export function SelectPopover({
  className,
  placement = "bottom",
  ...props
}: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(className, [
        "w-[--trigger-width]",
        "min-w-[--trigger-width]",
        "max-h-[inherit]",
        "p-1",
      ])}
      placement={placement}
    />
  );
}

/**
 * Liste des options pour le composant Select
 */
export function SelectList<T extends object>({
  className,
  selectedIconPlacement = "start",
  ...props
}: ListBoxProps<T> & {
  selectedIconPlacement?: "start" | "end";
}) {
  return (
    <ListBox
      {...props}
      data-selected-icon-placement={selectedIconPlacement}
      className={composeTailwindRenderProps(className, [
        "max-h-[inherit]",
        "overflow-auto",
        "outline-none",
        "p-1",
      ])}
    />
  );
}

/**
 * Section dans la liste des options
 *
 * @example
 * <SelectList>
 *   <SelectSection title="Groupe 1">
 *     <SelectListItem id="option1">Option 1</SelectListItem>
 *     <SelectListItem id="option2">Option 2</SelectListItem>
 *   </SelectSection>
 *   <SelectSection title="Groupe 2">
 *     <SelectListItem id="option3">Option 3</SelectListItem>
 *     <SelectListItem id="option4">Option 4</SelectListItem>
 *   </SelectSection>
 * </SelectList>
 */
export function SelectSection<T extends object>({
  className,
  ...props
}: RACListBoxSectionProps<T> & {
  title?: string | React.ReactNode;
}) {
  return (
    <RACListBoxSection
      {...props}
      className={twMerge(
        "[&:not(:first-child)]:mt-1.5",
        "[&:not(:first-child)]:border-t",
        "[&:not(:first-child)]:border-t-border/40",
        className
      )}
    >
      <Header
        className={twMerge(
          "sticky inset-0 z-10",
          "pt-2",
          "truncate text-xs/6 text-muted",
          "bg-white dark:bg-zinc-900"
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </RACListBoxSection>
  );
}

/**
 * Élément individuel dans la liste des options
 *
 * @example
 * <SelectListItem id="option1">Option 1</SelectListItem>
 *
 * @example
 * <SelectListItem id="option2" destructive>Option 2 (destructive)</SelectListItem>
 */
export function SelectListItem({
  destructive,
  ...props
}: ListBoxItemProps & {
  destructive?: true;
}) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        "group flex cursor-default select-none items-center gap-x-1.5 rounded outline-none",
        "px-2 py-2.5 sm:py-1.5",
        "text-base/6 sm:text-sm/6",
        "disabled:opacity-50",
        "focus:bg-zinc-100 focus:dark:bg-zinc-700",
        destructive && "text-destructive",
      ])}
    >
      {composeRenderProps(props.children, (children) => {
        return (
          <>
            <CheckIcon
              className={twMerge(
                "invisible",
                "mt-1",
                "size-4",
                "self-start",
                "group-selected:visible",
                "[[data-ui=select-value]_&]:hidden",
                "[[data-selected-icon-placement=end]_&]:hidden"
              )}
            />

            <div data-ui="content" className="w-full">
              {children}
            </div>
            <CheckIcon
              className={twMerge(
                "invisible",
                "mt-1",
                "size-4",
                "self-start",
                "group-selected:visible",
                "[[data-ui=select-value]_&]:hidden",
                "[[data-selected-icon-placement=start]_&]:hidden"
              )}
            />
          </>
        );
      })}
    </RACListBoxItem>
  );
}

/**
 * Libellé pour un élément de la liste
 */
export function SelectListItemLabel({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <span
      {...props}
      slot="label"
      data-ui="label"
      className={twMerge("mb-0 w-full truncate", className)}
    />
  );
}

/**
 * Description pour un élément de la liste
 */
export function SelectListItemDescription({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <Small
      {...props}
      slot="description"
      data-ui="description"
      className={className}
    />
  );
}
