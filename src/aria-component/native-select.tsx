import React from "react";
import { useFocusRing } from "react-aria";
import { twMerge } from "tailwind-merge";
import { selectBoxIndicator, inputField, focusVisibleRing } from "./utils";
import { DescriptionContext, DescriptionProvider } from "./field";
import { LabelContext } from "react-aria-components";

/**
 * Champ de formulaire pour le sélecteur natif
 *
 * @example
 * <NativeSelectField>
 *   <Label>Choisissez une option</Label>
 *   <NativeSelect>
 *     <option value="1">Option 1</option>
 *     <option value="2">Option 2</option>
 *     <option value="3">Option 3</option>
 *   </NativeSelect>
 *   <FieldError>Erreur de validation</FieldError>
 * </NativeSelectField>
 */
export function NativeSelectField({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: "span" }}>
      <DescriptionProvider>
        <div
          {...props}
          data-ui="native-select-field"
          className={twMerge(
            "has-[select:disabled]:opacity-50",
            inputField,
            className
          )}
        />
      </DescriptionProvider>
    </LabelContext.Provider>
  );
}

/**
 * Sélecteur natif stylisé
 *
 * @example
 * <NativeSelect>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 *   <option value="3">Option 3</option>
 * </NativeSelect>
 */
export function NativeSelect({
  className,
  plain,
  ...props
}: React.JSX.IntrinsicElements["select"] & {
  /** Si true, n'applique pas les styles de bordure et de fond */
  plain?: boolean;
}) {
  const { focusProps } = useFocusRing();
  const labelContext = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <div
      data-ui="control"
      className={twMerge("relative flex transition", selectBoxIndicator)}
    >
      <select
        {...focusProps}
        aria-labelledby={labelContext.id}
        aria-describedby={descriptionContext?.["aria-describedby"]}
        className={twMerge(
          "w-full min-w-36",
          "appearance-none bg-transparent",
          "pe-8 ps-3",
          "py-[calc(theme(spacing[2.5])-1px)]",
          " sm:py-[calc(theme(spacing[1.5])-1px)]",
          "rounded-md border outline-none",
          "text-base/6 sm:text-sm/6",
          "hover:bg-zinc-100 dark:hover:bg-zinc-800",
          focusVisibleRing,
          className
        )}
        {...props}
      />
    </div>
  );
}
