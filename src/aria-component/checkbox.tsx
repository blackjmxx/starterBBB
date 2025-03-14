import React, { ReactNode } from "react";
import {
  CheckboxRenderProps,
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import {
  composeTailwindRenderProps,
  groupBox,
  groupFocusVisibleOutline,
} from "./utils";
import { twMerge } from "tailwind-merge";
import { DescriptionContext, DescriptionProvider } from "./field";
import { CheckIcon, MinusIcon } from "./icons";

/**
 * Props pour le groupe de cases à cocher
 */
export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children"> {
  /** Contenu du groupe */
  children?: ReactNode;
  /** Orientation du groupe: vertical ou horizontal */
  orientation?: "vertical" | "horizontal";
}

/**
 * Groupe de cases à cocher avec gestion d'état partagé
 *
 * @example
 * <CheckboxGroup>
 *   <Checkboxes>
 *     <Checkbox>Option 1</Checkbox>
 *     <Checkbox>Option 2</Checkbox>
 *   </Checkboxes>
 * </CheckboxGroup>
 */
export function CheckboxGroup({
  orientation = "vertical",
  ...props
}: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      data-orientation={orientation}
      className={composeTailwindRenderProps(props.className, groupBox)}
    />
  );
}

/**
 * Conteneur pour les cases à cocher dans un groupe
 */
export function Checkboxes({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        "flex flex-col group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:flex-wrap",
        "[&_label]:has-[[data-ui=description]]:font-medium",
        className
      )}
      {...props}
    />
  );
}

/**
 * Conteneur pour une case à cocher avec description
 */
export function CheckboxField({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          "group flex flex-col gap-y-1",
          "[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-label-placement=start]]:pe-16",
          "[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-label-placement=end]]:ps-7",
          "[&_label]:has-[[data-ui=description]]:font-medium",
          "[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50",
          className
        )}
      />
    </DescriptionProvider>
  );
}

/**
 * Props pour la case à cocher standard
 */
interface CheckboxProps extends RACCheckboxProps {
  /** Position du libellé: au début ou à la fin */
  labelPlacement?: "start" | "end";
  /** Fonction de rendu personnalisée */
  render?: never;
}

/**
 * Props pour la case à cocher avec rendu personnalisé
 */
export interface CustomRenderCheckboxProps
  extends Omit<RACCheckboxProps, "children"> {
  /** Élément ou fonction de rendu personnalisée */
  render:
    | React.ReactElement
    | ((props: CheckboxRenderProps) => React.ReactNode);
  /** Pas d'enfants autorisés avec render */
  children?: never;
}

/**
 * Case à cocher interactive avec support pour différents styles et états
 *
 * @example
 * <Checkbox>Option de base</Checkbox>
 *
 * @example
 * <Checkbox isDisabled>Option désactivée</Checkbox>
 *
 * @example
 * <Checkbox labelPlacement="start">Libellé à gauche</Checkbox>
 */
export function Checkbox({
  className,
  ...props
}: CheckboxProps | CustomRenderCheckboxProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACCheckbox
        {...restProps}
        aria-describedby={descriptionContext?.["aria-describedby"]}
        className={composeTailwindRenderProps(className, [
          "group",
          "text-base/6 sm:text-sm/6",
          "disabled:opacity-50",
        ])}
      >
        {render}
      </RACCheckbox>
    );
  }

  const { labelPlacement = "end", ...restProps } = props;

  return (
    <RACCheckbox
      {...restProps}
      aria-describedby={descriptionContext?.["aria-describedby"]}
      data-label-placement={labelPlacement}
      className={composeTailwindRenderProps(className, [
        "group flex items-center",
        "group-data-[orientation=horizontal]:text-nowrap",
        "data-[label-placement=start]:flex-row-reverse",
        "data-[label-placement=start]:justify-between",
        "text-base/6 sm:text-sm/6",
        "disabled:opacity-50",
      ])}
    >
      {(renderProps) => {
        return (
          <>
            <div
              className={twMerge([
                "flex shrink-0 items-center justify-center rounded",
                labelPlacement === "end" ? "me-3" : "ms-3",
                "size-[1.125rem] sm:size-4",
                "border dark:border-[1.5px]",
                "border-zinc-400/75 dark:border-zinc-600",

                // readonly
                "group-data-[readonly]:opacity-50",

                // invalid
                "group-invalid:border-destructive",
                "group-invalid:dark:border-destructive",

                // selected
                "group-selected:border",
                "group-selected:border-accent",
                "group-selected:bg-accent",
                "group-selected:dark:border-0",
                "group-selected:dark:border-accent",
                "group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",

                // indeterminate
                "group-indeterminate:border",
                "group-indeterminate:border-accent",
                "group-indeterminate:bg-accent",
                "group-indeterminate:dark:border-0",
                "group-indeterminate:dark:border-accent",
                "group-indeterminate:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
                groupFocusVisibleOutline,
              ])}
            >
              {renderProps.isIndeterminate ? (
                <MinusIcon className="size-4 text-white sm:size-3.5" />
              ) : renderProps.isSelected ? (
                <CheckIcon className="size-4 text-white sm:size-3.5" />
              ) : null}
            </div>

            {typeof props.children === "function"
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACCheckbox>
  );
}
