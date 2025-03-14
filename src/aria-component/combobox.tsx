import React from "react";
import {
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ComboBoxStateContext,
  GroupProps,
  Group,
  Keyboard,
} from "react-aria-components";
import { ButtonProps, Button } from "./button";
import { composeTailwindRenderProps, inputField } from "./utils";
import { twMerge } from "tailwind-merge";
import {
  SelectList,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
  SelectSection,
} from "./select";
import { Input } from "./field";
import { ChevronDownIcon, XIcon } from "./icons";

/**
 * Composant principal de liste déroulante avec saisie
 *
 * @example
 * <ComboBox>
 *   <ComboBoxGroup>
 *     <ComboBoxInput />
 *     <ComboBoxButton />
 *   </ComboBoxGroup>
 *   <ComboBoxPopover>
 *     <ComboBoxListBox>
 *       <ComboBoxListItem>Option 1</ComboBoxListItem>
 *       <ComboBoxListItem>Option 2</ComboBoxListItem>
 *     </ComboBoxListBox>
 *   </ComboBoxPopover>
 * </ComboBox>
 */
export function ComboBox(props: RACComboBoxProps<object>) {
  return (
    <RACComboBox
      {...props}
      data-ui="comboBox"
      className={composeTailwindRenderProps(props.className, [
        "w-full min-w-56",
        inputField,
      ])}
    />
  );
}

/**
 * Groupe contenant les éléments de contrôle du ComboBox
 */
export function ComboBoxGroup(props: GroupProps) {
  return (
    <Group
      data-ui="control"
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "group/combobox",
        "isolate",
        "grid",
        "grid-cols-[36px_1fr_minmax(40px,max-content)_minmax(40px,max-content)]",
        "sm:grid-cols-[36px_1fr_minmax(36px,max-content)_minmax(36px,max-content)]",
        "items-center",

        // Icon
        "sm:[&>[data-ui=icon]:has(+input)]:size-4",
        "[&>[data-ui=icon]:has(+input)]:size-5",
        "[&>[data-ui=icon]:has(+input)]:row-start-1",
        "[&>[data-ui=icon]:has(+input)]:col-start-1",
        "[&>[data-ui=icon]:has(+input)]:place-self-center",
        "[&>[data-ui=icon]:has(+input)]:text-muted",
        "[&>[data-ui=icon]:has(+input)]:z-10",

        // Input
        "[&>input]:row-start-1",
        "[&>input]:col-span-full",
        "[&>input:not([class*=pe-])]:pe-10",
        "sm:[&>input:not([class*=pe-])]:pe-9",

        "[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-20",
        "sm:[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-16",

        "[&:has([data-ui=icon]+input)>input]:ps-10",
        "sm:[&:has([data-ui=icon]+input)>input]:ps-8",

        // Trigger button
        "[&>[data-ui=trigger]]:row-start-1",
        "[&>[data-ui=trigger]]:-col-end-1",
        "[&>[data-ui=trigger]]:place-self-center",

        // Clear button
        "[&>[data-ui=clear]]:row-start-1",
        "[&>[data-ui=clear]]:-col-end-2",
        "[&>[data-ui=clear]]:justify-self-end",
        "[&>[data-ui=clear]:last-of-type]:-col-end-1",
        "[&>[data-ui=clear]:last-of-type]:place-self-center",
      ])}
    />
  );
}

/**
 * Champ de saisie pour le ComboBox
 */
export const ComboBoxInput = Input;

/**
 * Bouton d'ouverture du menu déroulant
 */
export function ComboBoxButton() {
  return (
    <Button
      isIconOnly
      size="sm"
      data-ui="trigger"
      variant="plain"
      className="text-muted group-hover/combobox:text-foreground"
    >
      <ChevronDownIcon />
    </Button>
  );
}

/**
 * Bouton pour effacer la sélection actuelle
 *
 * @example
 * <ComboBoxClearButton onPress={() => console.log('Cleared')} />
 */
export function ComboBoxClearButton({
  onPress,
}: {
  /** Fonction appelée lors du clic sur le bouton */
  onPress?: ButtonProps["onPress"];
}) {
  const state = React.useContext(ComboBoxStateContext);

  return (
    <Button
      className={twMerge(
        "[&:not(:hover)]:text-muted ",
        "[&:not(:last-child)]:-me-1",
        state?.inputValue
          ? "visible focus-visible:-outline-offset-2"
          : "invisible"
      )}
      slot={null}
      data-ui="clear"
      size="sm"
      isIconOnly
      variant="plain"
      onPress={(e) => {
        state?.setSelectedKey(null);
        onPress?.(e);
      }}
    >
      <XIcon
        aria-label="Clear"
        className="size-4 sm:size-[calc(theme(spacing[4])-1px)]"
      />
    </Button>
  );
}

/**
 * Bouton de commande avec raccourci clavier
 */
export function CommandButton() {
  return (
    <>
      <Button
        variant="outline"
        data-ui="trigger"
        size="sm"
        className="me-1 flex font-normal peer-data-[focused=true]:hidden"
      >
        <Keyboard className="font-sans">⌘K</Keyboard>
      </Button>

      <Keyboard
        data-ui="trigger"
        className="me-1 hidden rounded-md p-1 text-xs peer-data-[focused=true]:flex ltr:ms-1"
      >
        ESC
      </Keyboard>
    </>
  );
}

/**
 * Popover contenant la liste des options
 */
export const ComboBoxPopover = SelectPopover;

/**
 * Section pour grouper les options
 */
export const ComboBoxSection = SelectSection;

/**
 * Option individuelle dans la liste
 */
export const ComboBoxListItem = SelectListItem;

/**
 * Libellé principal d'une option
 */
export const ComboBoxListItemLabel = SelectListItemLabel;

/**
 * Description secondaire d'une option
 */
export const ComboBoxListItemDescription = SelectListItemDescription;
