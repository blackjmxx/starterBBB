import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
  Label,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Props pour le composant TextField
 */
interface TextFieldProps extends Omit<AriaTextFieldProps, "className"> {
  /** Libellé du champ */
  label?: string;
  /** Description du champ */
  description?: string;
  /** Message d'erreur à afficher */
  errorMessage?: string;
  /** Classe CSS pour le conteneur */
  className?: string;
  /** Classe CSS pour l'input */
  inputClassName?: string;
  /** Taille du champ */
  size?: "sm" | "md" | "lg";
  /** État du champ */
  state?: "normal" | "error" | "success";
  /** Texte d'exemple */
  placeholder?: string;
  /** Type de champ */
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
}

/**
 * Champ de texte avec libellé, description et gestion des erreurs
 *
 * @example
 * <TextField
 *   label="Nom d'utilisateur"
 *   placeholder="Entrez votre nom"
 *   description="Votre nom public"
 * />
 *
 * @example
 * <TextField
 *   label="Email"
 *   type="email"
 *   state="error"
 *   errorMessage="Email invalide"
 * />
 */
export function TextField({
  label,
  description,
  errorMessage,
  className,
  inputClassName,
  size = "md",
  state = "normal",
  placeholder,
  type = "text",
  ...props
}: TextFieldProps) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };

  const stateClasses = {
    normal:
      "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600",
    error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    success: "border-green-500 focus:border-green-500 focus:ring-green-500",
  };

  return (
    <AriaTextField
      {...props}
      className={twMerge("flex flex-col gap-1", className)}
    >
      {label && (
        <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </Label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={twMerge(
          "w-full border rounded-lg focus:outline-none focus:ring-2",
          "dark:bg-gray-700 dark:text-white",
          sizeClasses[size],
          stateClasses[state],
          props.isDisabled && "opacity-50 cursor-not-allowed",
          inputClassName
        )}
      />
      {description && (
        <Text slot="description" className="text-sm text-gray-500">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-500">
          {errorMessage}
        </Text>
      )}
    </AriaTextField>
  );
}
