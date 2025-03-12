import React from "react";
import {
  FieldErrorProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  TextProps,
  LabelContext,
  GroupContext,
  TextFieldProps as RACTextFieldProps,
  TextField as RACTextField,
  TextArea as RACTextArea,
  TextAreaProps as RACTextAreaProps,
  Text as RACText,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import {
  composeTailwindRenderProps,
  DisplayLevel,
  displayLevels,
  focusRing,
  inputField,
} from "./utils";
import { Text } from "./text";

/**
 * Groupe avec un libellé associé pour les composants de formulaire
 *
 * @example
 * <LabeledGroup>
 *   <Label>Options</Label>
 *   <RadioGroup>...</RadioGroup>
 * </LabeledGroup>
 */
export function LabeledGroup({
  className,
  children,
}: {
  /** Classes CSS additionnelles */
  className?: string;
  /** Contenu du groupe */
  children: React.ReactNode;
}) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: "span" }}>
      <GroupContext.Provider value={{ "aria-labelledby": labelId }}>
        <div
          className={twMerge(
            ["[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2"],
            className
          )}
        >
          {children}
        </div>
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

/**
 * Libellé pour les champs de formulaire
 *
 * @example
 * <Label>Nom d'utilisateur</Label>
 *
 * @example
 * <Label requiredHint>Email</Label>
 */
export function Label({
  requiredHint,
  displayLevel = 3,
  ...props
}: LabelProps & {
  /** Affiche un indicateur visuel que le champ est obligatoire */
  requiredHint?: boolean;
  /** Niveau d'affichage pour la taille du texte */
  displayLevel?: DisplayLevel;
}) {
  return (
    <RACLabel
      {...props}
      data-ui="label"
      className={twMerge(
        "inline-block min-w-max text-pretty",
        "group-disabled:opacity-50",
        displayLevels[displayLevel],
        requiredHint &&
          "after:ms-0.5 after:text-destructive after:content-['*']",
        props.className
      )}
    />
  );
}

/**
 * Contexte pour associer des descriptions aux composants
 */
export const DescriptionContext = React.createContext<{
  "aria-describedby"?: string;
} | null>(null);

/**
 * Fournisseur de contexte pour les descriptions
 */
export function DescriptionProvider({
  children,
}: {
  /** Contenu à envelopper */
  children: React.ReactNode;
}) {
  const descriptionId: string | null = React.useId();
  const [descriptionRendered, setDescriptionRendered] = React.useState(true);

  React.useLayoutEffect(() => {
    if (!document.getElementById(descriptionId)) {
      setDescriptionRendered(false);
    }
  }, [descriptionId]);

  return (
    <DescriptionContext.Provider
      value={{
        "aria-describedby": descriptionRendered ? descriptionId : undefined,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
}

/**
 * Description textuelle pour les champs de formulaire
 *
 * @example
 * <TextField>
 *   <Label>Nom d'utilisateur</Label>
 *   <Input />
 *   <Description>Entrez votre nom d'utilisateur</Description>
 * </TextField>
 */
export function Description({ className, ...props }: TextProps) {
  const describedby =
    React.useContext(DescriptionContext)?.["aria-describedby"];

  return describedby ? (
    <Text
      {...props}
      id={describedby}
      data-ui="description"
      className={twMerge("block group-disabled:opacity-50", className)}
    />
  ) : (
    <RACText
      {...props}
      data-ui="description"
      slot="description"
      className={twMerge(
        "block text-pretty text-base/6 text-muted sm:text-sm/6",
        "group-disabled:opacity-50",
        className
      )}
    />
  );
}

/**
 * Champ de texte complet avec libellé et validation
 *
 * @example
 * <TextField>
 *   <Label>Email</Label>
 *   <Input />
 *   <FieldError />
 * </TextField>
 */
export function TextField(props: RACTextFieldProps) {
  return (
    <RACTextField
      {...props}
      data-ui="text-field"
      className={composeTailwindRenderProps(props.className, inputField)}
    />
  );
}

/**
 * Message d'erreur pour les champs de formulaire
 */
export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      data-ui="errorMessage"
      className={composeTailwindRenderProps(
        props.className,
        "block text-base/6 text-destructive sm:text-sm/6"
      )}
    />
  );
}

/**
 * Champ de saisie de texte standard
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <RACInput
        {...props}
        ref={ref}
        className={composeTailwindRenderProps(props.className, [
          "w-full rounded-md border bg-inherit outline-none",
          "px-3 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
          "text-base/6 placeholder:text-muted sm:text-sm/6",
          "invalid:border-destructive",
          "disabled:opacity-50",
          "[&[readonly]]:bg-zinc-50",
          "dark:[&[readonly]]:bg-white/10",
          focusRing,
        ])}
      />
    );
  }
);

/**
 * Zone de texte multiligne
 */
export function TextArea(props: RACTextAreaProps) {
  return (
    <RACTextArea
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "w-full rounded-md border bg-inherit px-3 py-1 outline-none",
        "text-base/6 placeholder:text-muted sm:text-sm/6 ",
        "disabled:opacity-50",
        "invalid:border-destructive",
        "[&[readonly]]:bg-zinc-50",
        "dark:[&[readonly]]:bg-white/10",
        focusRing,
      ])}
    />
  );
}
