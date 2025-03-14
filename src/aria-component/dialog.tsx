import {
  DialogProps as RACDialogProps,
  Dialog as RACDialog,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Heading, HeadingProps } from "./heading";
import { Button, ButtonProps } from "./button";
import { composeTailwindRenderProps } from "./utils";
import { Text } from "./text";
import { XIcon } from "./icons";

export { DialogTrigger } from "react-aria-components";

/**
 * Props pour le composant Dialog
 */
export interface DialogProps extends RACDialogProps {
  /** Indique si le dialogue est une alerte qui nécessite une attention immédiate */
  alert?: boolean;
}

/**
 * Dialogue modal pour afficher du contenu qui nécessite l'attention de l'utilisateur
 *
 * @example
 * <DialogTrigger>
 *   <Button>Ouvrir</Button>
 *   <Dialog>
 *     <DialogHeader>Titre</DialogHeader>
 *     <DialogBody>Contenu</DialogBody>
 *     <DialogFooter>
 *       <Button>Annuler</Button>
 *       <Button>Confirmer</Button>
 *     </DialogFooter>
 *     <DialogCloseButton />
 *   </Dialog>
 * </DialogTrigger>
 */
export function Dialog({ role, alert = false, ...props }: DialogProps) {
  return (
    <RACDialog
      {...props}
      role={role ?? alert ? "alertdialog" : "dialog"}
      className={twMerge(
        "relative flex max-h-[inherit] flex-col overflow-hidden outline-none",
        "[&:not(:has([data-ui=dialog-header]))>[data-ui=dialog-body]:not([class*=pt-])]:pt-6",
        "[&:not(:has([data-ui=dialog-footer]))>[data-ui=dialog-body]:not([class*=pt-])]:pb-6",
        props.className
      )}
    />
  );
}

/**
 * Props pour l'en-tête du dialogue
 */
type DialogHeaderProps = HeadingProps;

/**
 * En-tête du dialogue avec titre
 *
 * @example
 * <DialogHeader>Titre du dialogue</DialogHeader>
 */
export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          "--dialog-header-height",
          `${entry.target.clientHeight}px`
        );
      }
    });

    observer.observe(header);

    return () => {
      observer.unobserve(header);
    };
  }, []);

  return typeof props.children === "string" ? (
    <DialogTitle
      {...props}
      data-ui="dialog-header"
      ref={headerRef}
      className={twMerge("pb-2 pe-10 ps-6 pt-6", className)}
    />
  ) : (
    <div
      ref={headerRef}
      data-ui="dialog-header"
      className={twMerge(
        "relative flex w-full flex-col pb-2 pe-10 ps-6 pt-6",
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

/**
 * Corps du dialogue contenant le contenu principal
 */
export function DialogBody({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      data-ui="dialog-body"
      className={twMerge(
        "flex flex-1 flex-col overflow-auto px-6",
        "max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))]",
        className
      )}
    >
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </div>
  );
}

/**
 * Pied du dialogue contenant généralement les actions
 */
export function DialogFooter({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          "--dialog-footer-height",
          `${entry.target.clientHeight}px`
        );
      }
    });

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      {...props}
      data-ui="dialog-footer"
      ref={footerRef}
      className={twMerge(
        "mt-auto flex flex-col flex-col-reverse justify-end gap-3 p-6 sm:flex-row",
        className
      )}
    />
  );
}

/**
 * Bouton de fermeture du dialogue
 */
export function DialogCloseButton({
  variant = "plain",
  ...props
}: ButtonProps) {
  if (props.children) {
    return <Button {...props} slot="close" variant={variant} />;
  }

  const {
    className,
    size = "lg",
    "aria-label": ariaLabel,
    isIconOnly = true,
    ...restProps
  } = props;

  return (
    <Button
      {...restProps}
      slot="close"
      isIconOnly={isIconOnly}
      variant={variant}
      size={size}
      className={composeTailwindRenderProps(className, [
        "absolute end-2 top-2 p-1.5 text-muted/75 hover:text-foreground",
      ])}
    >
      <XIcon aria-label={ariaLabel ?? "Close"} />
    </Button>
  );
}

/**
 * Titre du dialogue
 */
export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogHeaderProps
>(function DialogTitle({ level = 2, ...props }, ref) {
  return <Heading {...props} ref={ref} slot="title" level={level} />;
});
