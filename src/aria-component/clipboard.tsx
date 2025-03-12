import React from "react";
import { Button, ButtonProps } from "./button";
import { useCopyToClipboard } from "./hooks/use-clipboard";
import { TooltipTrigger, Tooltip } from "./tooltip";
import { CheckIcon, CopyIcon } from "./icons";
import { twMerge } from "tailwind-merge";

/**
 * Props pour le composant Clipboard
 */
export type ClipboardProps = {
  /** Délai en ms avant de réinitialiser l'état de copie */
  timeout?: number;
  /** Fonction de rendu recevant l'état et la fonction de copie */
  children: (payload: {
    copied: boolean;
    copy: (value: string) => void;
  }) => React.ReactNode;
};

/**
 * Composant utilitaire pour copier du texte dans le presse-papiers
 *
 * @example
 * <Clipboard>
 *   {({ copied, copy }) => (
 *     <button onClick={() => copy("Texte à copier")}>
 *       {copied ? "Copié!" : "Copier"}
 *     </button>
 *   )}
 * </Clipboard>
 */
export function Clipboard({ timeout, children }: ClipboardProps) {
  const { copied, copy } = useCopyToClipboard({ timeout });
  return children({ copied, copy });
}

/**
 * Bouton prêt à l'emploi pour copier du texte avec retour visuel
 *
 * @example
 * <CopyButton copyValue="Texte à copier" />
 */
export function CopyButton({
  copyValue,
  label = "Copy",
  labelAfterCopied = "Copied to clipboard",
  icon,
  variant = "plain",
  children,
  ...props
}: {
  copyValue: string;
  label?: string;
  labelAfterCopied?: string;
  icon?: React.JSX.Element;
} & ButtonProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Clipboard>
      {({ copied, copy }) => {
        return (
          <TooltipTrigger isOpen={copied || showTooltip}>
            <Button
              variant={variant}
              {...(!children && {
                isIconOnly: true,
              })}
              aria-label={label}
              {...props}
              onHoverChange={setShowTooltip}
              onPress={() => {
                copy(copyValue);
                setShowTooltip(false);
              }}
            >
              {children ?? (
                <>
                  {icon ? (
                    React.cloneElement(icon, {
                      className: twMerge(
                        "transition-all",
                        copied
                          ? "absolute scale-0 opacity-0"
                          : "scale-100 opacity-100"
                      ),
                    })
                  ) : (
                    <CopyIcon
                      className={twMerge(
                        "transition-all",
                        copied
                          ? "absolute scale-0 opacity-0"
                          : "scale-100 opacity-100"
                      )}
                    />
                  )}

                  <CheckIcon
                    className={twMerge(
                      "text-success transition-all",
                      copied
                        ? "scale-100 opacity-100"
                        : "absolute  scale-0 opacity-0"
                    )}
                  />
                </>
              )}
            </Button>
            <Tooltip>{copied ? labelAfterCopied : label}</Tooltip>
          </TooltipTrigger>
        );
      }}
    </Clipboard>
  );
}
